from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path

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

    # Serve uploaded static files (images)
    uploads_dir = Path(__file__).parents[1] / 'static'
    uploads_dir.mkdir(parents=True, exist_ok=True)
    app.mount("/static", StaticFiles(directory=str(uploads_dir)), name="static")

    # Mongo init (optional)
    @app.on_event("startup")
    async def _init_mongo():
        logger.info("startup: checking MONGO_URL")
        print("[APP] startup handler _init_mongo running")
        try:
            if get_mongo_url():
                logger.info("startup: initializing mongo client")
                init_mongo_client()
                logger.info("startup: mongo client initialized")
            else:
                logger.info("startup: no mongo url configured")
                print("[APP] no mongo url configured")
        except Exception as e:
            logger.exception("startup: exception during mongo init: %s", e)
            print("[APP] exception in _init_mongo:", e)

    @app.on_event("shutdown")
    async def _close_mongo():
        logger.info("shutdown: closing mongo client")
        print("[APP] shutdown handler _close_mongo running")
        try:
            close_mongo_client()
            logger.info("shutdown: mongo client closed")
            print("[APP] mongo client closed")
        except Exception:
            logger.exception("shutdown: error closing mongo client")
            print("[APP] exception in _close_mongo")

    @app.on_event("startup")
    async def startup_event():
        try:
            print("[APP] startup_event running")
            logger.debug("Application startup initiated")
            init_mongo_client()
            logger.debug("MongoDB client initialized")
            print("[APP] startup_event completed")
        except Exception as e:
            logger.error(f"Error during application startup: {e}")
            print("[APP] startup_event error:", e)
            raise

    return app


app = create_app()


