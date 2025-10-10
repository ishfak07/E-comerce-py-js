import os
from typing import Optional
import logging

from motor.motor_asyncio import AsyncIOMotorClient
try:
    import pymongo
except Exception:
    pymongo = None

from ..core.config import settings as app_settings

_async_client: Optional[AsyncIOMotorClient] = None
_sync_client = None

logger = logging.getLogger("mongo")
logger.setLevel(logging.DEBUG)


def get_mongo_url() -> str | None:
    """Return MONGO_URL from environment or from application settings (loaded from .env)."""
    return os.environ.get("MONGO_URL") or getattr(app_settings, "mongo_url", None)


def init_mongo_client():
    global _async_client, _sync_client
    url = get_mongo_url()
    if not url:
        logger.error("MongoDB URL is not configured")
        return None
    try:
        _async_client = AsyncIOMotorClient(url)
        logger.debug("Async MongoDB client initialized")
        if pymongo is not None:
            _sync_client = pymongo.MongoClient(url)
            logger.debug("Sync MongoDB client initialized")
    except Exception as e:
        logger.error(f"Error initializing MongoDB client: {e}")
    return _async_client


def get_mongo_client() -> Optional[AsyncIOMotorClient]:
    return _async_client


def get_sync_mongo_client():
    return _sync_client


def close_mongo_client():
    global _async_client, _sync_client
    if _async_client:
        _async_client.close()
        _async_client = None
    if _sync_client:
        try:
            _sync_client.close()
        except Exception:
            pass
        _sync_client = None
