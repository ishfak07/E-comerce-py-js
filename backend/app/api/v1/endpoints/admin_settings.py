from fastapi import APIRouter, Depends, HTTPException
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from pydantic import BaseModel
from typing import Optional

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