from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .api.v1.router import api_router_v1
from .db.mongo import init_mongo_client, close_mongo_client, get_mongo_url


def create_app() -> FastAPI:
    app = FastAPI(
        title="Ecommerce API",
        version="1.0.0",
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_allow_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routers
    app.include_router(api_router_v1, prefix="/api/v1")

    # Mongo init (optional)
    @app.on_event("startup")
    async def _init_mongo():
        if get_mongo_url():
            init_mongo_client()

    @app.on_event("shutdown")
    async def _close_mongo():
        close_mongo_client()

    return app


app = create_app()


