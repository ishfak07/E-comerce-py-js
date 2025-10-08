from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import select, and_, or_

from ....db.session import get_db
from ....models.models import Product, Category
from ....schemas.product import ProductListResponse, ProductOut


router = APIRouter(prefix="/products")


@router.get("", response_model=ProductListResponse)
def list_products(
    db: Session = Depends(get_db),
    q: str | None = Query(default=None),
    category: str | None = Query(default=None),
    min_price: float | None = Query(default=None, ge=0),
    max_price: float | None = Query(default=None, ge=0),
    page: int = Query(default=1, ge=1),
    size: int = Query(default=20, ge=1, le=100),
    sort: str | None = Query(default=None),
):
    stmt = select(Product).where(Product.is_published.is_(True))

    if q:
        like = f"%{q}%"
        stmt = stmt.where(or_(Product.name.ilike(like), Product.slug.ilike(like)))
    if category:
        cat = db.execute(select(Category.id).where(Category.slug == category)).scalar()
        if cat:
            stmt = stmt.where(Product.category_id == cat)
    if min_price is not None:
        stmt = stmt.where(Product.price >= min_price)
    if max_price is not None:
        stmt = stmt.where(Product.price <= max_price)

    if sort == "price_asc":
        stmt = stmt.order_by(Product.price.asc())
    elif sort == "price_desc":
        stmt = stmt.order_by(Product.price.desc())
    else:
        stmt = stmt.order_by(Product.created_at.desc())

    total = db.execute(stmt.with_only_columns(Product.id)).unique().all()
    total_count = len(total)

    stmt = stmt.limit(size).offset((page - 1) * size)
    items = db.execute(stmt).scalars().all()
    return ProductListResponse(items=items, total=total_count, page=page, size=size)


@router.get("/{slug}", response_model=ProductOut)
def get_product(slug: str, db: Session = Depends(get_db)):
    stmt = select(Product).where(Product.slug == slug, Product.is_published.is_(True))
    product = db.execute(stmt).scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


