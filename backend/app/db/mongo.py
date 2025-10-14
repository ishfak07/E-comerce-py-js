import os
from typing import Optional, Iterator
import logging
from typing import Any

# Optional imports for Mongo clients
try:
    from motor.motor_asyncio import AsyncIOMotorClient  # type: ignore
except Exception:  # pragma: no cover - motor may be missing in dev
    AsyncIOMotorClient = None  # type: ignore
try:
    import pymongo
except Exception:  # pragma: no cover
    pymongo = None

from ..core.config import settings as app_settings

_async_client: Optional[Any] = None
_sync_client = None

logger = logging.getLogger("mongo")
logger.setLevel(logging.DEBUG)


def get_mongo_url() -> str | None:
    """Return the Mongo connection URL.

    Priority:
    1. Environment variable MONGO_URL
    2. settings.mongo_url loaded from .env
    3. Sensible local default for development
    """
    return (
        os.environ.get("MONGO_URL")
        or getattr(app_settings, "mongo_url", None)
        or "mongodb://localhost:27017/ecommerce"
    )


def init_mongo_client():
    global _async_client, _sync_client
    url = get_mongo_url()
    if not url:
        logger.error("MongoDB URL is not configured")
        return None
    try:
        if AsyncIOMotorClient is not None:
            _async_client = AsyncIOMotorClient(url)
            logger.debug("Async MongoDB client initialized")
        if pymongo is not None:
            _sync_client = pymongo.MongoClient(url)
            logger.debug("Sync MongoDB client initialized")
    except Exception as e:
        logger.error(f"Error initializing MongoDB client: {e}")
    return _async_client


def get_mongo_client() -> Optional[Any]:
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


# Modify get_mongo_db to log database operations
def get_mongo_db() -> Iterator:
    try:
        sync_client = get_sync_mongo_client()
        db_name = getattr(app_settings, "mongo_db_name", None) or sync_client and sync_client.get_default_database().name
        logger.debug(f"Database name: {db_name}")
        if sync_client is not None:
            db = sync_client.get_database(db_name)
            logger.debug(f"Sync database instance: {db}")
            yield db
            return
        async_client = get_mongo_client()
        if async_client is None:
            logger.error("Async MongoDB client is not initialized")
            yield None
            return
        db = async_client.get_database(db_name)
        logger.debug(f"Async database instance: {db}")
        yield db
    except Exception as e:
        logger.error(f"Error in get_mongo_db: {e}")
        yield None
