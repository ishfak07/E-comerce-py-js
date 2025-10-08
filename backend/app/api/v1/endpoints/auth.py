from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from ....core.security import (
    create_access_token,
    create_refresh_token,
    get_password_hash,
    verify_password,
)
from ....db.session import get_db
from ....models.models import User


router = APIRouter(prefix="/auth")


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
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")
    user = User(
        email=payload.email,
        password_hash=get_password_hash(payload.password),
        full_name=payload.full_name,
        is_active=True,
    )
    db.add(user)
    db.commit()
    return {"message": "verify your email"}


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user: User | None = db.query(User).filter(User.email == payload.email).first()
    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    access = create_access_token(str(user.id))
    refresh = create_refresh_token(str(user.id))
    return {
        "access_token": access,
        "refresh_token": refresh,
        "user": {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "is_staff": bool(user.is_staff),
            "is_superuser": bool(user.is_superuser),
        },
    }


class RefreshRequest(BaseModel):
    refresh_token: str


@router.post("/refresh", response_model=TokenResponse)
def refresh(payload: RefreshRequest, db: Session = Depends(get_db)):
    from ....core.security import decode_token

    decoded = decode_token(payload.refresh_token)
    if not decoded or decoded.get("type") != "refresh":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    user_id = decoded.get("sub")
    user: User | None = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    access = create_access_token(str(user.id))
    refresh_token = create_refresh_token(str(user.id))
    return {
        "access_token": access,
        "refresh_token": refresh_token,
        "user": {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
        },
    }


