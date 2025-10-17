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
    # Try to obtain a reachable MongoDB database; do not wrap the yield
    # in a broad try/except because FastAPI may throw exceptions into the
    # generator (for example HTTPException from auth deps). Swallowing
    # those would cause "generator didn't stop after throw()" runtime
    # errors and return 500 responses.
    if sync_client is not None:
        db = None
        try:
            db = sync_client.get_database(db_name)
            # Touch server to ensure it's reachable
            db.command("ping")
        except ServerSelectionTimeoutError:
            db = None
        except Exception:
            db = None

        if db is not None:
            # Yield the real MongoDB database. Any exception thrown into
            # this generator by FastAPI (e.g. HTTPException) will propagate
            # normally to the caller.
            yield db
            return

    # Final fallback: simple file-based store to keep app usable without MongoDB
    fallback_path = Path(__file__).parents[2] / "data" / f"{db_name}.json"
    yield FileDatabase(fallback_path)
