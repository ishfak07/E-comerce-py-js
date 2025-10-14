from fastapi import APIRouter, Depends, HTTPException
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from bson import ObjectId

router = APIRouter(prefix="/admin/products")


def _maybe_oid(v):
    try:
        if isinstance(v, str) and len(v) == 24:
            return ObjectId(v)
    except Exception:
        pass
    return v


@router.get("")
def list_products(db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    items = list(products.find({}).sort("created_at", -1))
    for it in items:
        it["id"] = str(it.pop("_id", ""))
    return {"items": items}


@router.post("")
def create_product(payload: dict, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    if not payload.get("name"):
        raise HTTPException(status_code=400, detail="name is required")
    if not payload.get("slug"):
        raise HTTPException(status_code=400, detail="slug is required")
    payload.setdefault("price", 0)
    payload.setdefault("stock", 0)
    res = products.insert_one(payload)
    return {"id": str(res.inserted_id)}


@router.get("/{pid}")
def get_product(pid: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    doc = products.find_one({"_id": _maybe_oid(pid)})
    if not doc:
        raise HTTPException(status_code=404, detail="not found")
    doc["id"] = str(doc.pop("_id", ""))
    return doc


@router.put("/{pid}")
def update_product(pid: str, payload: dict, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    res = products.update_one({"_id": _maybe_oid(pid)}, {"$set": payload})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    return {"ok": True}


@router.delete("/{pid}")
def delete_product(pid: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    res = products.delete_one({"_id": _maybe_oid(pid)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    return {"ok": True}
