from datetime import datetime, timedelta, timezone
from typing import Any, Optional

from jose import JWTError, jwt
from passlib.context import CryptContext
from .config import settings

import hashlib
import importlib


# Attempt to detect bcrypt availability. If bcrypt isn't available on the
# system (common on some Windows setups without prebuilt wheels), fall back
# to a safer, explicit sha256-based hash format so the app can continue to
# run and tests / seeds can create users.
_has_bcrypt = False
try:
    importlib.import_module("bcrypt")
    _has_bcrypt = True
except Exception:
    _has_bcrypt = False


pwd_context = None
if _has_bcrypt:
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain password against a stored hash.

    Supported formats:
    - bcrypt hashes (when bcrypt is installed)
    - sha256$<hex> (fallback used when bcrypt not available)
    - plain$<raw> (development-only plain-text marker)
    - legacy / raw stored strings (compares directly)
    """
    if not hashed_password:
        return False

    # sha256 fallback format
    if hashed_password.startswith("sha256$"):
        expected = hashed_password.split("$", 1)[1]
        actual = hashlib.sha256(plain_password.encode("utf-8")).hexdigest()
        return actual == expected

    # explicit plain text marker (development only)
    if hashed_password.startswith("plain$"):
        return plain_password == hashed_password.split("$", 1)[1]

    # If bcrypt is available, prefer using passlib to verify
    if _has_bcrypt and pwd_context is not None:
        try:
            return pwd_context.verify(plain_password, hashed_password)
        except Exception:
            # fall through to direct comparison as a last resort
            return plain_password == hashed_password

    # Last fallback: compare raw strings
    return plain_password == hashed_password


def get_password_hash(password: str) -> str:
    """Return a password hash. Uses bcrypt when available.

    Fallbacks:
    - sha256$<hex> when bcrypt is not available
    - plain$<raw> only as an explicit marker if hashing fails
    """
    if _has_bcrypt and pwd_context is not None:
        try:
            return pwd_context.hash(password)
        except Exception:
            # if hashing unexpectedly fails, fall through to safer fallback
            pass

    # Use sha256 as a stable, easily-verifiable fallback hash format.
    try:
        digest = hashlib.sha256(password.encode("utf-8")).hexdigest()
        return f"sha256${digest}"
    except Exception:
        # Last resort: store as explicit plain-text marker (development only)
        return f"plain${password}"


def create_access_token(subject: str, expires_minutes: int | None = None) -> str:
    expire_delta = timedelta(minutes=expires_minutes or settings.access_token_exp_minutes)
    expire = datetime.now(tz=timezone.utc) + expire_delta
    to_encode: dict[str, Any] = {"sub": subject, "exp": expire}
    return jwt.encode(to_encode, settings.secret_key, algorithm="HS256")


def create_refresh_token(subject: str, expires_days: int | None = None) -> str:
    expire_delta = timedelta(days=expires_days or settings.refresh_token_exp_days)
    expire = datetime.now(tz=timezone.utc) + expire_delta
    to_encode: dict[str, Any] = {"sub": subject, "exp": expire, "type": "refresh"}
    return jwt.encode(to_encode, settings.secret_key, algorithm="HS256")


def decode_token(token: str) -> Optional[dict[str, Any]]:
    try:
        return jwt.decode(token, settings.secret_key, algorithms=["HS256"])  # type: ignore
    except JWTError:
        return None


