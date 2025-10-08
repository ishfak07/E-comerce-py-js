from typing import Optional
import stripe

from ..core.config import settings


def init_stripe() -> None:
    if settings.stripe_secret_key:
        stripe.api_key = settings.stripe_secret_key


def create_payment_intent(amount_cents: int, currency: str = "usd", metadata: Optional[dict] = None) -> dict:
    init_stripe()
    payment_intent = stripe.PaymentIntent.create(
        amount=amount_cents,
        currency=currency,
        automatic_payment_methods={"enabled": True},
        metadata=metadata or {},
    )
    return payment_intent


