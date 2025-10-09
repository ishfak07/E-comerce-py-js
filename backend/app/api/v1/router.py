from fastapi import APIRouter

from .endpoints.health import router as health_router
from .endpoints.auth import router as auth_router
from .endpoints.products import router as products_router
from .endpoints.checkout import router as checkout_router
from .endpoints.webhooks import router as webhooks_router
from .endpoints.admin_orders import router as admin_orders_router
from .endpoints.admin_stream import router as admin_stream_router


api_router_v1 = APIRouter()

# Public endpoints
api_router_v1.include_router(health_router, tags=["health"])
api_router_v1.include_router(auth_router, tags=["auth"])
api_router_v1.include_router(products_router, tags=["products"])
api_router_v1.include_router(checkout_router, tags=["checkout"])
api_router_v1.include_router(webhooks_router, tags=["webhooks"])
api_router_v1.include_router(admin_orders_router, tags=["admin"])
api_router_v1.include_router(admin_stream_router, tags=["admin"])


