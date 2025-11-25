from fastapi import APIRouter, Depends, HTTPException
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from bson import ObjectId

router = APIRouter(prefix="/admin/users")


def _maybe_oid(v):
    try:
        if isinstance(v, str) and len(v) == 24:
            return ObjectId(v)
    except Exception:
        pass
    return v


@router.get("")
def list_users(db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    users = db.get_collection("users")
    # Try to sort by created_at if available, otherwise just list all
    try:
        items = list(users.find({}).sort("created_at", -1))
    except Exception:
        # If sorting fails (field doesn't exist), just get all users
        items = list(users.find({}))
    
    for it in items:
        it["id"] = str(it.pop("_id", ""))
        it.pop("password_hash", None)
        it.pop("hashed_password", None)  # Also remove this variant
        it.pop("password", None)  # And plain passwords from old seeds
    return {"items": items}


@router.put("/{uid}/block")
def block_user(uid: str, block: bool = True, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    users = db.get_collection("users")
    res = users.update_one({"_id": _maybe_oid(uid)}, {"$set": {"is_active": not block}})
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    return {"ok": True}


@router.delete("/{uid}")
def delete_user(uid: str, db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    """Delete user and cascade delete all related data (carts, orders, reviews)."""
    users = db.get_collection("users")
    carts = db.get_collection("carts")
    orders = db.get_collection("orders")
    reviews = db.get_collection("reviews")
    
    # Get user email before deletion
    user = users.find_one({"_id": _maybe_oid(uid)})
    if not user:
        raise HTTPException(status_code=404, detail="not found")
    
    user_email = user.get("email")
    user_id_str = str(user.get("_id"))
    
    # Delete user's cart
    if user_email:
        carts.delete_many({"user_email": user_email})
    
    # Delete user's orders
    orders.delete_many({"$or": [
        {"user_id": user_id_str},
        {"customer_email": user_email}
    ]})
    
    # Delete user's reviews
    reviews.delete_many({"user_id": user_id_str})
    
    # Delete the user
    res = users.delete_one({"_id": _maybe_oid(uid)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="not found")
    
    return {"ok": True, "message": "User and all related data deleted successfully"}
