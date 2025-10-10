from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .api.v1.router import api_router_v1
from .db.mongo import init_mongo_client, close_mongo_client, get_mongo_url
import logging

logger = logging.getLogger("ecommerce.app")
logger.setLevel(logging.DEBUG)


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
        logger.info("startup: checking MONGO_URL")
        try:
            if get_mongo_url():
                logger.info("startup: initializing mongo client")
                init_mongo_client()
                logger.info("startup: mongo client initialized")
            else:
                logger.info("startup: no mongo url configured")
        except Exception as e:
            logger.exception("startup: exception during mongo init: %s", e)

    @app.on_event("shutdown")
    async def _close_mongo():
        logger.info("shutdown: closing mongo client")
        try:
            close_mongo_client()
            logger.info("shutdown: mongo client closed")
        except Exception:
            logger.exception("shutdown: error closing mongo client")

    @app.on_event("startup")
    async def startup_event():
        try:
            logger.debug("Application startup initiated")
            init_mongo_client()
            logger.debug("MongoDB client initialized")
        except Exception as e:
            logger.error(f"Error during application startup: {e}")
            raise

    return app


app = create_app()


