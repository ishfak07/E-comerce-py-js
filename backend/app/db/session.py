from collections.abc import Generator
from typing import Iterator

from ..core.config import settings

try:
    # Lazily import SQLAlchemy only if DATABASE_URL is configured
    if settings.database_url:
        from sqlalchemy import create_engine
        from sqlalchemy.orm import Session, sessionmaker

        engine = create_engine(settings.database_url, pool_pre_ping=True, future=True)
        SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, class_=Session)
    else:
        SessionLocal = None  # type: ignore
except Exception:
    SessionLocal = None  # type: ignore


def get_db() -> Iterator:
    """Yield a SQLAlchemy DB session. If DATABASE_URL is not configured, raise an informative error.

    This allows the application to run when only Mongo is used; endpoints that still depend on
    SQLAlchemy should be migrated or guarded.
    """
    if SessionLocal is None:
        raise RuntimeError("SQL database is not configured. Set DATABASE_URL or migrate endpoint to MongoDB.")
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


