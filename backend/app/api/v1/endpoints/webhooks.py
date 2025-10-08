from fastapi import APIRouter, Header, HTTPException, Request, Depends
import stripe

from ....core.config import settings
from ....db.session import get_db
from sqlalchemy.orm import Session
from ....models.models import Order


router = APIRouter(prefix="/webhooks")


@router.post("/stripe")
async def stripe_webhook(request: Request, db: Session = Depends(get_db), stripe_signature: str | None = Header(default=None, alias="Stripe-Signature")):
    payload = await request.body()
    if not settings.stripe_webhook_secret:
        raise HTTPException(status_code=500, detail="Webhook secret not configured")
    try:
        event = stripe.Webhook.construct_event(
            payload=payload, sig_header=stripe_signature, secret=settings.stripe_webhook_secret
        )
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid payload")

    if event["type"] == "payment_intent.succeeded":
        pi = event["data"]["object"]
        payment_intent_id = pi["id"]
        order = db.query(Order).filter(Order.payment_intent_id == payment_intent_id).first()
        if order:
            order.payment_status = "paid"
            order.status = "processing"
            db.commit()

    if event["type"] == "charge.refunded":
        charge = event["data"]["object"]
        payment_intent_id = charge.get("payment_intent")
        if payment_intent_id:
            order = db.query(Order).filter(Order.payment_intent_id == payment_intent_id).first()
            if order:
                order.payment_status = "refunded"
                order.status = "cancelled"
                db.commit()

    return {"received": True}


