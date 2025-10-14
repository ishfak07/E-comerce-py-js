from typing import Iterator
from fastapi import Depends

from ..db.mongo import get_sync_mongo_client, get_mongo_client
from ..db.fallback_store import FileDatabase
from pathlib import Path
from ..core.config import settings


def get_mongo_db() -> Iterator:
    # Prefer sync pymongo client for use inside sync endpoints
    sync_client = get_sync_mongo_client()
    db_name = getattr(settings, "mongo_db_name", None) or sync_client and sync_client.get_default_database().name
    if sync_client is not None:
        db = sync_client.get_database(db_name)
        yield db
        return
    # Fallback to async motor client if only that is available (not ideal in sync endpoints)
    async_client = get_mongo_client()
    if async_client is None:
        # Fallback: simple file-based store to keep app usable without MongoDB
        fallback_path = Path(__file__).parents[2] / "data" / f"{db_name or 'ecommerce'}.json"
        yield FileDatabase(fallback_path)
        return
    db = async_client.get_database(db_name)
    yield db
