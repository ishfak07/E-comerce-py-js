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
    # Convert ObjectId to string for JSON serialization
    for item in items:
        if "_id" in item:
            item["id"] = str(item.pop("_id"))
    return {"items": items, "total": total, "page": page, "size": size}


@router.get("/{order_id}")
def get_order(order_id: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    order = orders.find_one({"_id": order_id})
    if order and "_id" in order:
        order["id"] = str(order.pop("_id"))
    return order


@router.put("/{order_id}/status")
def update_status(
    order_id: str,
    new_status: str = Query(...),
    db=Depends(get_mongo_db),
    _admin=Depends(require_admin)
):
    """Update order status. 
    
    Valid statuses: pending_verification, payment_verified, processing, shipped, delivered, cancelled
    """
    valid_statuses = [
        "pending_verification",
        "payment_verified",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
    ]
    
    if new_status not in valid_statuses:
        from fastapi import HTTPException
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}")
    
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    
    # Also update payment_status when status changes
    update_data = {"status": new_status}
    if new_status == "payment_verified":
        update_data["payment_status"] = "verified"
    elif new_status == "cancelled":
        update_data["payment_status"] = "cancelled"
    
    res = orders.update_one({"_id": order_id}, {"$set": update_data})
    if res.matched_count == 0:
        return {"detail": "not found"}
    return {"ok": True, "status": new_status}


