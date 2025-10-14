from typing import Iterator
from fastapi import Depends

from ..db.mongo import get_sync_mongo_client, get_mongo_client
from ..db.fallback_store import FileDatabase
from pathlib import Path
from ..core.config import settings
try:  # tolerate environments without pymongo
    from pymongo.errors import ServerSelectionTimeoutError  # type: ignore
except Exception:  # pragma: no cover
    ServerSelectionTimeoutError = Exception  # type: ignore


def get_mongo_db() -> Iterator:
    # Prefer sync pymongo client for use inside sync endpoints
    sync_client = get_sync_mongo_client()
    db_name = getattr(settings, "mongo_db_name", None)
    if not db_name and sync_client is not None:
        try:
            db_name = sync_client.get_default_database().name
        except Exception:
            pass
    if not db_name:
        db_name = "ecommerce"

    if sync_client is not None:
        try:
            db = sync_client.get_database(db_name)
            # Touch server to ensure it's reachable
            db.command("ping")
            yield db
            return
        except ServerSelectionTimeoutError:
            pass
        except Exception:
            pass

    # Fallback to async motor client if only that is available (not ideal in sync endpoints)
    async_client = get_mongo_client()
    if async_client is not None:
        try:
            db = async_client.get_database(db_name)
            yield db
            return
        except Exception:
            pass

    # Final fallback: simple file-based store to keep app usable without MongoDB
    fallback_path = Path(__file__).parents[2] / "data" / f"{db_name}.json"
    yield FileDatabase(fallback_path)
