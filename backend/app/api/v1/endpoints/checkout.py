from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from ....db.session import get_db
from ....models.models import Order, OrderItem, Coupon
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
def checkout(payload: CheckoutRequest, db: Session = Depends(get_db)):
    if payload.payment_method != "stripe":
        raise HTTPException(status_code=400, detail="Only stripe is supported for now")

    # Minimal placeholder: total derived from cart would be calculated here
    total_amount = 100.00
    discount = 0.0
    if payload.coupon:
        coupon = db.get(Coupon, payload.coupon)
        if coupon and coupon.active:
            if coupon.type == "percent":
                discount = total_amount * float(coupon.value) / 100.0
            else:
                discount = float(coupon.value)
            total_amount = max(0.0, total_amount - discount)

    amount_cents = int(round(total_amount * 100))
    pi = create_payment_intent(amount_cents, metadata={"cart_id": payload.cart_id or "na"})

    order = Order(
        status="pending",
        total_amount=total_amount,
        shipping_amount=0,
        taxes=0,
        shipping_address=payload.shipping_address.model_dump(),
        billing_address=payload.shipping_address.model_dump(),
        payment_status="unpaid",
        payment_intent_id=pi["id"],
    )
    db.add(order)
    db.commit()

    return {"order_id": order.id, "payment_intent_client_secret": pi["client_secret"]}


