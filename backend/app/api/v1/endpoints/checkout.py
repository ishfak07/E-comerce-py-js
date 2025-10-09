
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Any

from ....dependencies.mongo import get_mongo_db
from ....services.payments import create_payment_intent


router = APIRouter(prefix="/checkout")


class Address(BaseModel):
    line1: str
    line2: str | None = None
    city: str
    state: str | None = None
    postal_code: str
    country: str


class CheckoutRequest(BaseModel):
    cart_id: str | None = None  # placeholder for future cart service
    shipping_address: Address
    payment_method: str
    coupon: str | None = None


@router.post("")
def checkout(payload: CheckoutRequest, db=Depends(get_mongo_db)):
    # support stripe and bank_transfer
    if payload.payment_method not in ("stripe", "bank_transfer"):
        raise HTTPException(status_code=400, detail="Unsupported payment method")

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

    amount_cents = int(round(total_amount * 100))
    # For stripe: create payment intent
    payment_intent = None
    if payload.payment_method == "stripe":
        payment_intent = create_payment_intent(amount_cents, metadata={"cart_id": payload.cart_id or "na"})

    # Create a Mongo order document
    order_doc: dict[str, Any] = {
        "status": "pending",
        "total_amount": total_amount,
        "shipping_amount": 0,
        "taxes": 0,
        "shipping_address": payload.shipping_address.model_dump(),
        "billing_address": payload.shipping_address.model_dump(),
        "payment_status": "unpaid",
        "payment_method": payload.payment_method,
        "payment_intent_id": (payment_intent["id"] if payment_intent else None),
    }
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")
    res = orders.insert_one(order_doc)
    order_id = str(res.inserted_id)

    if payload.payment_method == "stripe":
        return {"order_id": order_id, "payment_intent_client_secret": payment_intent["client_secret"]}

    # bank_transfer: return instructions to the client
    bank_info = {
        "name": "Ishfaque Mif",
        "bank": "BOC",
        "branch": "Puttalam",
        "account_number": "89001476",
        "whatsapp": "0768976222",
        "instructions": "Please transfer the total amount to the above account and send a payment confirmation (screenshot) to the WhatsApp number. You may upload the payment screenshot on your orders page.",
    }
    return {"order_id": order_id, "bank_transfer": bank_info}


