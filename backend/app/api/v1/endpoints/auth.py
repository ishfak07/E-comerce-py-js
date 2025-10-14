from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Any
import logging

from ....core.security import (
    create_access_token,
    create_refresh_token,
    get_password_hash,
    verify_password,
)
from ....dependencies.mongo import get_mongo_db
from bson import ObjectId

router = APIRouter(prefix="/auth")

logger = logging.getLogger("auth")
logger.setLevel(logging.DEBUG)


class MongoUser(dict):
    pass




class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    full_name: str | None = None


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: dict


@router.post("/register")
def register(payload: RegisterRequest, db=Depends(get_mongo_db)):
    try:
        logger.debug("Register endpoint called with payload: %s", payload.dict())
        if db is None:
            logger.error("MongoDB is not configured")
            raise RuntimeError("MongoDB is not configured")
        users = db.get_collection("users")
        logger.debug("Users collection: %s", users)
        existing = users.find_one({"email": payload.email})
        logger.debug("Existing user: %s", existing)
        if existing:
            logger.warning("Email already in use")
            raise HTTPException(status_code=400, detail="Email already in use")
        user_doc: dict[str, Any] = {
            "email": payload.email,
            "password_hash": get_password_hash(payload.password),
            "full_name": payload.full_name,
            "is_active": True,
            "is_staff": False,
            "is_superuser": False,
        }
        logger.debug("User document to insert: %s", user_doc)
        res = users.insert_one(user_doc)
        logger.debug("Inserted user ID: %s", res.inserted_id)
        return {"message": "verify your email", "id": str(res.inserted_id)}
    except Exception as e:
        logger.error("Unhandled exception in register: %s", e, exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db=Depends(get_mongo_db)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    users = db.get_collection("users")
    user = users.find_one({"email": payload.email})
    if not user or not verify_password(payload.password, user.get("password_hash")):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    user_id = str(user.get("_id"))
    access = create_access_token(user_id)
    refresh = create_refresh_token(user_id)
    return {
        "access_token": access,
        "refresh_token": refresh,
        "user": {
            "id": user_id,
            "email": user.get("email"),
            "full_name": user.get("full_name"),
            "is_staff": bool(user.get("is_staff", False)),
            "is_superuser": bool(user.get("is_superuser", False)),
        },
    }


class RefreshRequest(BaseModel):
    refresh_token: str


@router.post("/refresh", response_model=TokenResponse)
def refresh(payload: RefreshRequest, db=Depends(get_mongo_db)):
    from ....core.security import decode_token

    if db is None:
        raise RuntimeError("MongoDB is not configured")

    decoded = decode_token(payload.refresh_token)
    if not decoded or decoded.get("type") != "refresh":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    user_id = decoded.get("sub")
    users = db.get_collection("users")
    lookup_id = ObjectId(user_id) if user_id else None
    user = users.find_one({"_id": lookup_id}) if lookup_id else None
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    uid = str(user.get("_id"))
    access = create_access_token(uid)
    refresh_token = create_refresh_token(uid)
    return {
        "access_token": access,
        "refresh_token": refresh_token,
        "user": {
            "id": str(user.get("_id")),
            "email": user.get("email"),
            "full_name": user.get("full_name"),
        },
    }


