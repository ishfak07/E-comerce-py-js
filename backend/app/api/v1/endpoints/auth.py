from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from pydantic import BaseModel, EmailStr
from typing import Any, Optional
from pathlib import Path
import logging

from ....core.security import (
    create_access_token,
    create_refresh_token,
    get_password_hash,
    verify_password,
)
from ....dependencies.mongo import get_mongo_db
from ....dependencies.auth import get_current_user
from bson import ObjectId

def _maybe_objectid(value):
    try:
        if isinstance(value, str) and len(value) == 24:
            return ObjectId(value)
    except Exception:
        pass
    return value

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
    
    # Support multiple password field formats for compatibility with different seed scripts
    stored_password = None
    if user:
        stored_password = (
            user.get("password_hash") 
            or user.get("hashed_password")  # legacy from older seeds
            or user.get("password")  # plain text in some demo seeds
        )
    
    if not user or not verify_password(payload.password, stored_password or ""):
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
            "avatar_url": user.get("avatar_url"),
            "phone": user.get("phone"),
            "address": user.get("address"),
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
    lookup_id = _maybe_objectid(user_id) if user_id else None
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
            "is_staff": bool(user.get("is_staff", False)),
            "is_superuser": bool(user.get("is_superuser", False)),
            "avatar_url": user.get("avatar_url"),
            "phone": user.get("phone"),
            "address": user.get("address"),
        },
    }


class ProfileUpdate(BaseModel):
    email: Optional[EmailStr] = None
    full_name: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None


@router.get("/me")
def me(db=Depends(get_mongo_db), user=Depends(get_current_user)):
    # Normalize output
    return {
        "id": str(user.get("_id")),
        "email": user.get("email"),
        "full_name": user.get("full_name"),
        "is_staff": bool(user.get("is_staff", False)),
        "is_superuser": bool(user.get("is_superuser", False)),
        "avatar_url": user.get("avatar_url"),
        "phone": user.get("phone"),
        "address": user.get("address"),
    }


@router.put("/me")
def update_me(payload: ProfileUpdate, db=Depends(get_mongo_db), current=Depends(get_current_user)):
    users = db.get_collection("users")
    updates: dict[str, Any] = {}
    # Unique email check
    if payload.email and payload.email != current.get("email"):
        exists = users.find_one({"email": payload.email})
        if exists and str(exists.get("_id")) != str(current.get("_id")):
            raise HTTPException(status_code=400, detail="Email already in use")
        updates["email"] = payload.email
    if payload.full_name is not None:
        updates["full_name"] = payload.full_name
    if payload.phone is not None:
        updates["phone"] = payload.phone
    if payload.address is not None:
        updates["address"] = payload.address
    if not updates:
        return {"ok": True}
    users.update_one({"_id": current.get("_id")}, {"$set": updates})
    # Return updated snapshot
    user = users.find_one({"_id": current.get("_id")})
    return {
        "id": str(user.get("_id")),
        "email": user.get("email"),
        "full_name": user.get("full_name"),
        "is_staff": bool(user.get("is_staff", False)),
        "is_superuser": bool(user.get("is_superuser", False)),
        "avatar_url": user.get("avatar_url"),
        "phone": user.get("phone"),
        "address": user.get("address"),
    }


class PasswordChange(BaseModel):
    old_password: str
    new_password: str


@router.post("/change-password")
def change_password(payload: PasswordChange, db=Depends(get_mongo_db), current=Depends(get_current_user)):
    users = db.get_collection("users")
    stored_password = (
        current.get("password_hash")
        or current.get("hashed_password")
        or current.get("password")
    )
    if not verify_password(payload.old_password, stored_password or ""):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect current password")
    users.update_one({"_id": current.get("_id")}, {"$set": {"password_hash": get_password_hash(payload.new_password)}})
    return {"ok": True}


@router.post("/avatar")
def upload_avatar(
    file: UploadFile = File(...),
    db=Depends(get_mongo_db),
    current=Depends(get_current_user),
):
    # Validate content type
    if file.content_type not in ("image/png", "image/jpeg", "image/jpg", "image/webp"):
        raise HTTPException(status_code=400, detail="Unsupported file type")
    ext = {
        "image/png": ".png",
        "image/jpeg": ".jpg",
        "image/jpg": ".jpg",
        "image/webp": ".webp",
    }[file.content_type]
    # Save under backend/app/static/uploads/avatars (FastAPI mounts /static -> backend/app/static)
    uploads_dir = Path(__file__).resolve().parents[3] / 'static' / 'uploads' / 'avatars'
    uploads_dir.mkdir(parents=True, exist_ok=True)
    filename = f"{str(current.get('_id'))}{ext}"
    path = uploads_dir / filename
    with open(path, "wb") as f:
        f.write(file.file.read())
    public_url = f"/static/uploads/avatars/{filename}"
    users = db.get_collection("users")
    users.update_one({"_id": current.get("_id")}, {"$set": {"avatar_url": public_url}})
    return {"avatar_url": public_url}


