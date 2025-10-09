from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from ..core.security import decode_token
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
    user = users.find_one({"_id": user_id}) if user_id else None
    if not user or not user.get("is_active", True):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Inactive or missing user")
    return user


def require_admin(user: dict = Depends(get_current_user)) -> dict:
    if not (user.get("is_staff") or user.get("is_superuser")):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin only")
    return user


