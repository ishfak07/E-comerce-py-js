from fastapi import APIRouter, Depends, Query, Body
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from pydantic import BaseModel
from typing import Optional
from bson import ObjectId


router = APIRouter(prefix="/admin/orders")


class StatusUpdateRequest(BaseModel):
    new_status: str
    admin_feedback: Optional[str] = None
    resubmit_required: Optional[bool] = False
    estimated_delivery_date: Optional[str] = None


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
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders.find_one({"_id": obj_id})
    if order and "_id" in order:
        order["id"] = str(order.pop("_id"))
    return order


@router.put("/{order_id}/status")
def update_status(
    order_id: str,
    payload: StatusUpdateRequest = Body(...),
    db=Depends(get_mongo_db),
    _admin=Depends(require_admin)
):
    """Update order status with optional feedback and delivery date.
    
    Valid statuses: pending_verification, payment_verified, processing, shipped, delivered, cancelled
    Valid tracking_status: placed, verified, processing, shipped, delivered, rejected, cancelled
    """
    valid_statuses = [
        "pending_verification",
        "payment_verified",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
    ]
    
    if payload.new_status not in valid_statuses:
        from fastapi import HTTPException
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}")
    
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    # Build update data
    update_data = {"status": payload.new_status}
    
    # Map status to tracking_status and payment_status
    if payload.new_status == "pending_verification":
        update_data["tracking_status"] = "placed"
        update_data["payment_status"] = "pending"
    elif payload.new_status == "payment_verified":
        update_data["payment_status"] = "verified"
        update_data["tracking_status"] = "verified"
    elif payload.new_status == "processing":
        update_data["tracking_status"] = "processing"
    elif payload.new_status == "shipped":
        update_data["tracking_status"] = "shipped"
    elif payload.new_status == "delivered":
        update_data["tracking_status"] = "delivered"
    elif payload.new_status == "cancelled":
        update_data["payment_status"] = "cancelled"
        update_data["tracking_status"] = "cancelled"
    
    # Add optional fields
    if payload.admin_feedback:
        update_data["admin_feedback"] = payload.admin_feedback
    if payload.resubmit_required is not None:
        update_data["resubmit_required"] = payload.resubmit_required
    if payload.estimated_delivery_date:
        update_data["estimated_delivery_date"] = payload.estimated_delivery_date
    
    res = orders.update_one({"_id": obj_id}, {"$set": update_data})
    if res.matched_count == 0:
        return {"detail": "not found"}
    return {"ok": True, "status": payload.new_status}


@router.put("/{order_id}/reject-payment")
def reject_payment(
    order_id: str,
    admin_feedback: str = Body(..., embed=True),
    resubmit_required: bool = Body(True, embed=True),
    db=Depends(get_mongo_db),
    _admin=Depends(require_admin)
):
    """Reject payment with feedback and option to allow resubmission."""
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    update_data = {
        "payment_status": "rejected",
        "tracking_status": "rejected",
        "admin_feedback": admin_feedback,
        "resubmit_required": resubmit_required
    }
    
    res = orders.update_one({"_id": obj_id}, {"$set": update_data})
    if res.matched_count == 0:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Order not found")
    return {"ok": True, "message": "Payment rejected"}


