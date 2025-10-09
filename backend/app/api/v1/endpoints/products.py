from fastapi import APIRouter, Depends, HTTPException, Query
from ....dependencies.mongo import get_mongo_db
from ....schemas.product import ProductListResponse, ProductOut


router = APIRouter(prefix="/products")


@router.get("", response_model=ProductListResponse)
def list_products(
    db=Depends(get_mongo_db),
    q: str | None = Query(default=None),
    category: str | None = Query(default=None),
    min_price: float | None = Query(default=None, ge=0),
    max_price: float | None = Query(default=None, ge=0),
    page: int = Query(default=1, ge=1),
    size: int = Query(default=20, ge=1, le=100),
    sort: str | None = Query(default=None),
):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    products = db.get_collection("products")
    query: dict = {"is_published": True}
    if q:
        query["$or"] = [{"name": {"$regex": q, "$options": "i"}}, {"slug": {"$regex": q, "$options": "i"}}]
    if category:
        query["category"] = category
    if min_price is not None:
        query["price"] = query.get("price", {})
        query["price"]["$gte"] = min_price
    if max_price is not None:
        query["price"] = query.get("price", {})
        query["price"]["$lte"] = max_price

    cursor = products.find(query)
    # sorting
    if sort == "price_asc":
        cursor = cursor.sort("price", 1)
    elif sort == "price_desc":
        cursor = cursor.sort("price", -1)
    else:
        cursor = cursor.sort("created_at", -1)

    total_count = products.count_documents(query)
    raw_items = list(cursor.skip((page - 1) * size).limit(size))
    def map_doc(d: dict) -> dict:
        return {
            "id": str(d.get("_id")),
            "sku": d.get("sku", ""),
            "name": d.get("name"),
            "slug": d.get("slug"),
            "description": d.get("description"),
            "short_description": d.get("short_description"),
            "price": float(d.get("price", 0)),
            "compare_at_price": d.get("compare_at_price"),
            "images": d.get("images", []),
            "tags": d.get("tags", []),
            "attributes": d.get("attributes", {}),
            "stock": int(d.get("stock", 0)),
            "is_published": bool(d.get("is_published", False)),
            "available_from": d.get("available_from"),
            "category_id": d.get("category_id"),
            "variants": d.get("variants", []),
        }

    items = [map_doc(d) for d in raw_items]
    return ProductListResponse(items=items, total=total_count, page=page, size=size)


@router.get("/{slug}", response_model=ProductOut)
def get_product(slug: str, db=Depends(get_mongo_db)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    products = db.get_collection("products")
    product = products.find_one({"slug": slug, "is_published": True})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return {
        "id": str(product.get("_id")),
        "sku": product.get("sku", ""),
        "name": product.get("name"),
        "slug": product.get("slug"),
        "description": product.get("description"),
        "short_description": product.get("short_description"),
        "price": float(product.get("price", 0)),
        "compare_at_price": product.get("compare_at_price"),
        "images": product.get("images", []),
        "tags": product.get("tags", []),
        "attributes": product.get("attributes", {}),
        "stock": int(product.get("stock", 0)),
        "is_published": bool(product.get("is_published", False)),
        "available_from": product.get("available_from"),
        "category_id": product.get("category_id"),
        "variants": product.get("variants", []),
    }


