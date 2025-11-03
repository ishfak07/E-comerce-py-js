from typing import Optional

from fastapi import Depends, HTTPException, status, Request
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from ..core.security import decode_token
from bson import ObjectId

def _maybe_objectid(value):
    try:
        if isinstance(value, str) and len(value) == 24:
            return ObjectId(value)
    except Exception:
        pass
    return value
from ..dependencies.mongo import get_mongo_db


bearer_scheme = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(bearer_scheme),
    db=Depends(get_mongo_db),
) -> dict:
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    decoded = decode_token(credentials.credentials)
    if not decoded:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    user_id = decoded.get("sub")
    if db is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User DB not available")
    users = db.get_collection("users")
    
    # Try multiple ID formats for compatibility with different storage backends
    user = None
    
    # Try as ObjectId first (MongoDB with proper ObjectId)
    lookup_id = _maybe_objectid(user_id)
    if lookup_id != user_id:  # conversion succeeded
        user = users.find_one({"_id": lookup_id})
    
    # Try as string (UUID or string IDs)
    if not user:
        user = users.find_one({"_id": user_id})
    
    # Try as integer (simple numeric IDs from seed_mongo.py)
    if not user:
        try:
            user = users.find_one({"_id": int(user_id)})
        except (ValueError, TypeError):
            pass
    
    if not user or not user.get("is_active", True):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Inactive or missing user")
    return user


def require_admin(user: dict = Depends(get_current_user)) -> dict:
    if not (user.get("is_staff") or user.get("is_superuser")):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin only")
    return user


def get_current_user_loose(
    request: Request,
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(bearer_scheme),
    db=Depends(get_mongo_db),
) -> dict:
    """
    A more permissive variant that also accepts an access token via query string
    using `?token=...`. This is helpful for file download links where attaching
    Authorization headers is inconvenient.
    """
    token: Optional[str] = None
    if credentials and credentials.credentials:
        token = credentials.credentials
    if not token:
        token = request.query_params.get("token")
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")

    decoded = decode_token(token)
    if not decoded:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    user_id = decoded.get("sub")
    if db is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User DB not available")
    users = db.get_collection("users")

    user = None
    lookup_id = _maybe_objectid(user_id)
    if lookup_id != user_id:
        user = users.find_one({"_id": lookup_id})
    if not user:
        user = users.find_one({"_id": user_id})
    if not user:
        try:
            user = users.find_one({"_id": int(user_id)})
        except (ValueError, TypeError):
            pass
    if not user or not user.get("is_active", True):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Inactive or missing user")
    return user


