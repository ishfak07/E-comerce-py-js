from fastapi import APIRouter, Depends, HTTPException
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from pydantic import BaseModel
from typing import Optional
from fastapi import UploadFile, File, Request
from pathlib import Path
import shutil
import uuid
import os

router = APIRouter(prefix="/admin/settings")

class SiteSettings(BaseModel):
    siteName: str = "Own Setup 💼"
    supportEmail: str = ""
    supportPhone: str = ""
    currency: str = "LKR"
    brandColor: str = "#6D74FF"
    bankTransferNote: str = ""
    heroImage1: str = "/images/hero-1.jpg"
    heroImage2: str = "/images/hero-2.jpg"

@router.get("")
def get_settings(db=Depends(get_mongo_db)):
    settings = db.get_collection("settings")
    doc = settings.find_one({"type": "site"})
    if not doc:
        # Return default settings if none exist
        return SiteSettings().dict()
    # Remove MongoDB fields
    doc.pop("_id", None)
    doc.pop("type", None)
    return doc

@router.put("")
def update_settings(settings_data: SiteSettings, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    settings = db.get_collection("settings")
    # Update or insert the site settings
    result = settings.replace_one(
        {"type": "site"},
        {"type": "site", **settings_data.dict()},
        upsert=True
    )
    return {"ok": True}

@router.post('/upload')
def upload_image(request: Request, file: UploadFile = File(...), _admin=Depends(require_admin)):
    uploads = Path(__file__).parents[3] / 'static' / 'uploads'
    uploads.mkdir(parents=True, exist_ok=True)
    # Create a safe unique filename to avoid collisions/overwrites
    # Keep the original extension when possible
    original = os.path.basename(file.filename or '')
    _, ext = os.path.splitext(original)
    unique = f"{uuid.uuid4().hex}{ext}"
    dest = uploads / unique
    # Write file in binary mode
    with dest.open('wb') as f:
        shutil.copyfileobj(file.file, f)
    # Build an absolute URL based on the incoming request so browsers can fetch the file
    base = str(request.base_url).rstrip('/')
    return {"url": f"{base}/static/uploads/{unique}"}