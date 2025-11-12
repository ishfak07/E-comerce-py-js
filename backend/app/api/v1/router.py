from fastapi import APIRouter

from .endpoints.health import router as health_router
from .endpoints.auth import router as auth_router
from .endpoints.products import router as products_router
from .endpoints.cart import router as cart_router
from .endpoints.checkout import router as checkout_router
from .endpoints.webhooks import router as webhooks_router
from .endpoints.orders import router as orders_router
from .endpoints.admin_orders import router as admin_orders_router
from .endpoints.admin_stream import router as admin_stream_router
from .endpoints.admin_metrics import router as admin_metrics_router
from .endpoints.admin_products import router as admin_products_router
from .endpoints.admin_users import router as admin_users_router
from .endpoints.admin_migrate import router as admin_migrate_router
from .endpoints.admin_settings import router as admin_settings_router


api_router_v1 = APIRouter()

# Public endpoints
api_router_v1.include_router(health_router, tags=["health"])
api_router_v1.include_router(auth_router, tags=["auth"])
api_router_v1.include_router(products_router, tags=["products"])
api_router_v1.include_router(cart_router, tags=["cart"])
api_router_v1.include_router(checkout_router, tags=["checkout"])
api_router_v1.include_router(webhooks_router, tags=["webhooks"])
api_router_v1.include_router(orders_router, tags=["orders"])
api_router_v1.include_router(admin_orders_router, tags=["admin"])
api_router_v1.include_router(admin_stream_router, tags=["admin"])
api_router_v1.include_router(admin_metrics_router, tags=["admin"])
api_router_v1.include_router(admin_products_router, tags=["admin"])
api_router_v1.include_router(admin_users_router, tags=["admin"])
api_router_v1.include_router(admin_migrate_router, tags=["admin"])
api_router_v1.include_router(admin_settings_router, tags=["admin"])


