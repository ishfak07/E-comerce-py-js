
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Request
from pydantic import BaseModel
from typing import Any
from datetime import datetime
from pathlib import Path
import shutil
import uuid
import os

from ....dependencies.mongo import get_mongo_db
from ....dependencies.auth import require_non_admin
from ....services.payments import create_payment_intent


router = APIRouter(prefix="/checkout")


class Address(BaseModel):
    line1: str
    line2: str | None = None
    city: str
    state: str | None = None
    postal_code: str
    country: str


class CheckoutItem(BaseModel):
    product_id: str | int
    title: str
    quantity: int
    price: float


class CheckoutRequest(BaseModel):
    cart_id: str | None = None  # placeholder for future cart service
    shipping_address: Address
    payment_method: str
    coupon: str | None = None
    # New bank transfer fields
    customer_name: str | None = None
    customer_phone: str | None = None
    customer_email: str | None = None
    selected_bank: str | None = None
    transfer_receipt_url: str | None = None
    transaction_reference: str | None = None
    additional_notes: str | None = None
    # Items and totals (allow frontend to pass cart snapshot)
    items: list[CheckoutItem] | None = None
    total_amount: float | None = None


@router.post("")
def checkout(payload: CheckoutRequest, db=Depends(get_mongo_db), current_user=Depends(require_non_admin)):
    # Only support bank_transfer now (removed stripe)
    if payload.payment_method != "bank_transfer":
        raise HTTPException(status_code=400, detail="Only bank transfer payment is supported")

    # Validate required fields for bank transfer
    if payload.payment_method == "bank_transfer":
        if not payload.customer_name:
            raise HTTPException(status_code=400, detail="Customer name is required")
        if not payload.customer_phone:
            raise HTTPException(status_code=400, detail="Customer phone is required")
        if not payload.selected_bank:
            raise HTTPException(status_code=400, detail="Bank selection is required")
        if not payload.transfer_receipt_url:
            raise HTTPException(status_code=400, detail="Transfer receipt upload is required")

    # Validate that customer email matches authenticated user
    if payload.customer_email != current_user.get("email"):
        raise HTTPException(status_code=400, detail="Customer email must match authenticated user")

    # Derive total from payload if provided; otherwise fallback to items or placeholder
    if payload.total_amount is not None:
        try:
            total_amount = float(payload.total_amount)
        except Exception:
            total_amount = 100.00
    elif payload.items:
        try:
            total_amount = float(sum((it.price * it.quantity) for it in payload.items))
        except Exception:
            total_amount = 100.00
    else:
        # Minimal placeholder: total derived from cart would be calculated here
        total_amount = 100.00
    discount = 0.0
    if payload.coupon and db is not None:
        coupons = db.get_collection("coupons")
        coupon = coupons.find_one({"code": payload.coupon})
        if coupon and coupon.get("active"):
            if coupon.get("type") == "percent":
                discount = total_amount * float(coupon.get("value", 0)) / 100.0
            else:
                discount = float(coupon.get("value", 0))
            total_amount = max(0.0, total_amount - discount)

    # Create a Mongo order document
    order_doc: dict[str, Any] = {
        "status": "pending_verification",  # New default status
        "tracking_status": "placed",  # Tracking status for user view
        "total_amount": total_amount,
        "shipping_amount": 0,
        "taxes": 0,
        "shipping_address": payload.shipping_address.model_dump(),
        "billing_address": payload.shipping_address.model_dump(),
        "payment_status": "pending",
        "payment_method": payload.payment_method,
        "created_at": datetime.utcnow().isoformat(),
        # New bank transfer fields
        "customer_name": payload.customer_name,
        "customer_phone": payload.customer_phone,
        "customer_email": payload.customer_email,
        "selected_bank": payload.selected_bank,
        "transfer_receipt_url": payload.transfer_receipt_url,
        "transaction_reference": payload.transaction_reference,
        "additional_notes": payload.additional_notes,
        # New tracking fields
        "admin_feedback": None,
        "resubmit_required": False,
        "estimated_delivery_date": None,
    }
    # Persist items snapshot if provided
    if payload.items:
        try:
            order_doc["items"] = [it.model_dump() for it in payload.items]
        except Exception:
            order_doc["items"] = []
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    res = orders.insert_one(order_doc)
    order_id = str(res.inserted_id)

    # Return bank transfer instructions to the client
    bank_info = {
        "name": "Ishfaque Mif",
        "bank": "BOC",
        "branch": "Puttalam",
        "account_number": "89001476",
        "whatsapp": "0768976222",
        "instructions": "Please transfer the total amount to the above account and upload your payment receipt.",
    }
    return {"order_id": order_id, "bank_transfer": bank_info, "success": True}


@router.post("/upload-receipt")
def upload_receipt(request: Request, file: UploadFile = File(...)):
    """Upload transfer receipt (PDF, JPG, PNG)"""
    # Validate file type
    allowed_extensions = {'.pdf', '.jpg', '.jpeg', '.png'}
    original = os.path.basename(file.filename or '')
    _, ext = os.path.splitext(original)
    ext = ext.lower()
    
    if ext not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Only PDF, JPG, and PNG files are allowed")
    
    # Create receipts directory
    receipts_dir = Path(__file__).parents[3] / 'static' / 'receipts'
    receipts_dir.mkdir(parents=True, exist_ok=True)
    
    # Create unique filename
    unique = f"{uuid.uuid4().hex}{ext}"
    dest = receipts_dir / unique
    
    # Save file
    with dest.open('wb') as f:
        shutil.copyfileobj(file.file, f)
    
    # Return URL
    base = str(request.base_url).rstrip('/')
    return {"url": f"{base}/static/receipts/{unique}"}



