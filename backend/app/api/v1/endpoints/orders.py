from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Request, Body
from fastapi.responses import FileResponse
from ....dependencies.mongo import get_mongo_db
from ....dependencies.auth import get_current_user
from pydantic import BaseModel
from typing import Optional
from pathlib import Path
import shutil
import uuid
import os
from datetime import datetime
from bson import ObjectId

router = APIRouter(prefix="/orders")


class ReviewRequest(BaseModel):
    product_id: str
    rating: int  # 1-5
    comment: str


@router.get("/history")
def get_order_history(
    status_filter: Optional[str] = None,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Get user's order history with optional status filter."""
    try:
        if db is None:
            raise HTTPException(status_code=500, detail="Database not configured")
        
        orders_collection = db.get_collection("orders")
        
        # Build query - filter by user email or phone
        user_email = current_user.get("email")
        user_phone = current_user.get("phone")
        
        print(f"[OrderHistory] Fetching orders for user: email={user_email}, phone={user_phone}")
        
        query = {
            "$or": [
                {"customer_email": user_email},
                {"customer_phone": user_phone}
            ]
        }
        
        if status_filter and status_filter != "all":
            if status_filter == "pending":
                query["tracking_status"] = {"$in": ["placed", "verified", "processing", "shipped"]}
            elif status_filter == "completed":
                query["tracking_status"] = "delivered"
            elif status_filter == "failed":
                query["tracking_status"] = "rejected"
            elif status_filter == "cancelled":
                query["tracking_status"] = "cancelled"
        
        print(f"[OrderHistory] Query: {query}")
        
        # Get orders sorted by most recent
        orders = list(orders_collection.find(query).sort("created_at", -1))
        
        print(f"[OrderHistory] Found {len(orders)} orders")
        
        # Convert ObjectId to string
        for order in orders:
            if "_id" in order:
                order["id"] = str(order.pop("_id"))
        
        return {"orders": orders}
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"[OrderHistory] Error: {type(e).__name__}: {str(e)}")
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Failed to fetch orders: {str(e)}")


@router.get("/{order_id}")
def get_order_details(
    order_id: str,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Get detailed information about a specific order."""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    orders_collection = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders_collection.find_one({"_id": obj_id})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Verify order belongs to current user
    user_email = current_user.get("email")
    user_phone = current_user.get("phone")
    
    if order.get("customer_email") != user_email and order.get("customer_phone") != user_phone:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Convert ObjectId
    if "_id" in order:
        order["id"] = str(order.pop("_id"))
    
    return order


@router.post("/{order_id}/reorder")
def reorder(
    order_id: str,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Duplicate an order's items into the user's cart."""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    orders_collection = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders_collection.find_one({"_id": obj_id})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Verify ownership
    user_email = current_user.get("email")
    if order.get("customer_email") != user_email:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Note: This is a placeholder - actual cart implementation would go here
    # For now, just return success with order items
    order_items = order.get("items", [])
    
    return {
        "success": True,
        "message": "Items added to cart",
        "items": order_items
    }


@router.get("/{order_id}/invoice")
def download_invoice(
    order_id: str,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Download invoice PDF (only available for verified payments)."""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    orders_collection = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders_collection.find_one({"_id": obj_id})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Verify ownership
    user_email = current_user.get("email")
    if order.get("customer_email") != user_email:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Check if payment is verified
    if order.get("payment_status") != "verified":
        raise HTTPException(
            status_code=403, 
            detail="Invoice only available for verified payments"
        )
    
    # TODO: Generate actual PDF invoice
    # For now, return a simple response
    return {
        "order_id": order_id,
        "invoice_url": f"/invoices/{order_id}.pdf",
        "message": "Invoice generation coming soon"
    }


@router.put("/{order_id}/receipt")
def reupload_receipt(
    order_id: str,
    request: Request,
    file: UploadFile = File(...),
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Re-upload receipt (only allowed if payment was rejected and resubmit_required=true)."""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    orders_collection = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders_collection.find_one({"_id": obj_id})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Verify ownership
    user_email = current_user.get("email")
    if order.get("customer_email") != user_email:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Check if resubmission is allowed
    if order.get("payment_status") == "verified":
        raise HTTPException(status_code=400, detail="Cannot resubmit receipt for verified payment")
    
    if not order.get("resubmit_required"):
        raise HTTPException(
            status_code=400, 
            detail="Receipt resubmission not allowed for this order"
        )
    
    # Validate file type
    allowed_extensions = {'.pdf', '.jpg', '.jpeg', '.png'}
    original = os.path.basename(file.filename or '')
    _, ext = os.path.splitext(original)
    ext = ext.lower()
    
    if ext not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Only PDF, JPG, and PNG files are allowed")
    
    # Save new receipt
    receipts_dir = Path(__file__).parents[3] / 'static' / 'receipts'
    receipts_dir.mkdir(parents=True, exist_ok=True)
    unique = f"{uuid.uuid4().hex}{ext}"
    dest = receipts_dir / unique
    
    with dest.open('wb') as f:
        shutil.copyfileobj(file.file, f)
    
    # Update order
    base = str(request.base_url).rstrip('/')
    new_receipt_url = f"{base}/static/receipts/{unique}"
    
    orders_collection.update_one(
        {"_id": obj_id},
        {
            "$set": {
                "transfer_receipt_url": new_receipt_url,
                "payment_status": "pending",
                "tracking_status": "placed",
                "resubmit_required": False,
                "admin_feedback": None
            }
        }
    )
    
    return {
        "success": True,
        "receipt_url": new_receipt_url,
        "message": "Receipt uploaded successfully. Awaiting admin verification."
    }


@router.post("/{order_id}/review")
def submit_review(
    order_id: str,
    payload: ReviewRequest,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Submit a product review (only allowed after delivery)."""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    orders_collection = db.get_collection("orders")
    
    # Convert string ID to ObjectId
    try:
        obj_id = ObjectId(order_id)
    except:
        raise HTTPException(status_code=404, detail="Invalid order ID format")
    
    order = orders_collection.find_one({"_id": obj_id})
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # Verify ownership
    user_email = current_user.get("email")
    if order.get("customer_email") != user_email:
        raise HTTPException(status_code=403, detail="Access denied")
    
    # Check if order is delivered
    if order.get("tracking_status") != "delivered":
        raise HTTPException(
            status_code=400, 
            detail="Reviews can only be submitted for delivered orders"
        )
    
    # Validate rating
    if payload.rating < 1 or payload.rating > 5:
        raise HTTPException(status_code=400, detail="Rating must be between 1 and 5")
    
    # Create review
    reviews_collection = db.get_collection("reviews")
    review_doc = {
        "user_id": str(current_user.get("_id")),
        "user_email": user_email,
        "order_id": order_id,
        "product_id": payload.product_id,
        "rating": payload.rating,
        "comment": payload.comment,
        "review_date": datetime.utcnow().isoformat(),
        "verified_purchase": True
    }
    
    result = reviews_collection.insert_one(review_doc)
    
    return {
        "success": True,
        "review_id": str(result.inserted_id),
        "message": "Review submitted successfully"
    }
