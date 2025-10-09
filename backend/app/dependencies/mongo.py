from typing import Iterator
from fastapi import Depends

from ..db.mongo import get_sync_mongo_client, get_mongo_client


def get_mongo_db() -> Iterator:
    # Prefer sync pymongo client for use inside sync endpoints
    sync_client = get_sync_mongo_client()
    if sync_client is not None:
        db = sync_client.get_default_database()
        yield db
        return
    # Fallback to async motor client if only that is available (not ideal in sync endpoints)
    async_client = get_mongo_client()
    if async_client is None:
        yield None
        return
    yield async_client.get_default_database()
