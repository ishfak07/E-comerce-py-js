from fastapi import APIRouter, Header, HTTPException, Request, Depends
import stripe

from ....core.config import settings
from ....dependencies.mongo import get_mongo_db


router = APIRouter(prefix="/webhooks")


@router.post("/stripe")
async def stripe_webhook(request: Request, db=Depends(get_mongo_db), stripe_signature: str | None = Header(default=None, alias="Stripe-Signature")):
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
        if db is not None:
            orders = db.get_collection("orders")
            res = orders.update_one({"payment_intent_id": payment_intent_id}, {"$set": {"payment_status": "paid", "status": "processing"}})

    if event["type"] == "charge.refunded":
        charge = event["data"]["object"]
        payment_intent_id = charge.get("payment_intent")
        if payment_intent_id and db is not None:
            orders = db.get_collection("orders")
            res = orders.update_one({"payment_intent_id": payment_intent_id}, {"$set": {"payment_status": "refunded", "status": "cancelled"}})

    return {"received": True}


