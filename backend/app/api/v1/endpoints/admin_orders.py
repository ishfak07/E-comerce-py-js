from fastapi import APIRouter, Depends, Query
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db


router = APIRouter(prefix="/admin/orders")


@router.get("")
def list_orders(
    status: str | None = Query(default=None),
    page: int = Query(default=1, ge=1),
    size: int = Query(default=20, ge=1, le=200),
    db=Depends(get_mongo_db),
    _admin=Depends(require_admin),
):
    """Return paginated admin orders.

    Query params:
    - status: optional filter
    - page: 1-based page number
    - size: page size
    """
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    query: dict = {}
    if status:
        query["status"] = status
    total = orders.count_documents(query)
    cursor = orders.find(query).sort("created_at", -1).skip((page - 1) * size).limit(size)
    items = list(cursor)
    return {"items": items, "total": total, "page": page, "size": size}


@router.get("/{order_id}")
def get_order(order_id: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    return orders.find_one({"_id": order_id})


@router.put("/{order_id}/status")
def update_status(order_id: str, new_status: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    res = orders.update_one({"_id": order_id}, {"$set": {"status": new_status}})
    if res.matched_count == 0:
        return {"detail": "not found"}
    return {"ok": True}


