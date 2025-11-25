from fastapi import APIRouter, Depends, HTTPException
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from bson import ObjectId
from fastapi import UploadFile, File, Request
from pathlib import Path
import shutil
import uuid
import os
from ....core.config import settings

router = APIRouter(prefix="/admin/products")


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


def _maybe_oid(v):
    try:
        if isinstance(v, str) and len(v) == 24:
            return ObjectId(v)
    except Exception:
        pass
    return v


@router.get("")
def list_products(db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    items = list(products.find({}).sort("created_at", -1))
    for it in items:
        it["id"] = str(it.pop("_id", ""))
    return {"items": items}


@router.post("")
def create_product(payload: dict, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    if not payload.get("name"):
        raise HTTPException(status_code=400, detail="name is required")
    if not payload.get("slug"):
        raise HTTPException(status_code=400, detail="slug is required")
    if not payload.get("description") or len(str(payload.get("description", "")).strip()) < 10:
        raise HTTPException(status_code=400, detail="description is required and must be at least 10 characters")
    payload.setdefault("price", 0)
    payload.setdefault("stock", 0)
    res = products.insert_one(payload)
    return {"id": str(res.inserted_id)}


@router.get("/{pid}")
def get_product(pid: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    doc = products.find_one({"_id": _maybe_oid(pid)})
    if not doc:
        raise HTTPException(status_code=404, detail="not found")
    doc["id"] = str(doc.pop("_id", ""))
    return doc


@router.put("/{pid}")
def update_product(pid: str, payload: dict, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    products = db.get_collection("products")
    res = products.update_one({"_id": _maybe_oid(pid)}, {"$set": payload})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    return {"ok": True}


@router.delete("/{pid}")
def delete_product(pid: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    """Delete product and cascade delete related data (images from filesystem, cart items)."""
    products = db.get_collection("products")
    carts = db.get_collection("carts")
    
    # Get product before deletion to access images
    product = products.find_one({"_id": _maybe_oid(pid)})
    if not product:
        raise HTTPException(status_code=404, detail="not found")
    
    # Delete physical image files from filesystem
    if product.get("images"):
        uploads_dir = Path(__file__).parents[4] / 'backend' / 'static' / 'uploads'
        for image_url in product.get("images", []):
            try:
                # Extract filename from URL (e.g., /static/uploads/filename.jpg)
                if image_url and '/uploads/' in image_url:
                    filename = image_url.split('/uploads/')[-1]
                    filepath = uploads_dir / filename
                    if filepath.exists():
                        filepath.unlink()
            except Exception as e:
                # Log but don't fail deletion if file cleanup fails
                print(f"Warning: Could not delete image file {image_url}: {e}")
    
    # Remove product from all user carts
    carts.update_many(
        {},
        {"$pull": {"items": {"productId": pid}}}
    )
    
    # Delete the product
    res = products.delete_one({"_id": _maybe_oid(pid)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    
    return {"ok": True, "message": "Product and related data deleted successfully"}
