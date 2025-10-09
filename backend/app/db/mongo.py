import os
from typing import Optional

from motor.motor_asyncio import AsyncIOMotorClient
try:
    import pymongo
except Exception:
    pymongo = None

_async_client: Optional[AsyncIOMotorClient] = None
_sync_client = None


def get_mongo_url() -> str | None:
    return os.environ.get("MONGO_URL")


def init_mongo_client():
    global _async_client, _sync_client
    url = get_mongo_url()
    if not url:
        return None
    _async_client = AsyncIOMotorClient(url)
    if pymongo is not None:
        _sync_client = pymongo.MongoClient(url)
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
