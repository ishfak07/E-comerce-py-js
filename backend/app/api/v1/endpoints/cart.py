"""
Cart management endpoints.
Stores cart items in MongoDB associated with user accounts.
"""
from __future__ import annotations
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

from ....dependencies.mongo import get_mongo_db
from ....dependencies.auth import get_current_user


router = APIRouter(prefix="/cart")


class CartItemRequest(BaseModel):
    productId: str  # MongoDB ObjectId as string
    slug: str
    name: str
    price: float
    qty: int = 1
    image: Optional[str] = None


class CartItemResponse(BaseModel):
    id: str
    productId: str  # MongoDB ObjectId as string
    slug: str
    name: str
    price: float
    qty: int
    image: Optional[str] = None


class CartResponse(BaseModel):
    items: List[CartItemResponse]
    count: int


@router.get("", response_model=CartResponse)
def get_cart(
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Get the current user's cart"""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    cart = carts_collection.find_one({"user_email": user_email})
    
    if not cart or not cart.get("items"):
        return CartResponse(items=[], count=0)
    
    items = []
    total_count = 0
    for item in cart.get("items", []):
        items.append(CartItemResponse(
            id=item.get("id", ""),
            productId=item.get("productId", 0),
            slug=item.get("slug", ""),
            name=item.get("name", ""),
            price=item.get("price", 0.0),
            qty=item.get("qty", 1),
            image=item.get("image")
        ))
        total_count += item.get("qty", 1)
    
    return CartResponse(items=items, count=total_count)


@router.post("/add")
def add_to_cart(
    item: CartItemRequest,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Add an item to the cart"""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    # Generate a unique ID for the cart item
    import uuid
    item_id = str(uuid.uuid4())
    
    # Find user's cart
    cart = carts_collection.find_one({"user_email": user_email})
    
    if cart:
        # Check if product already exists in cart
        items = cart.get("items", [])
        existing_item = None
        for idx, cart_item in enumerate(items):
            if cart_item.get("productId") == item.productId:
                existing_item = idx
                break
        
        if existing_item is not None:
            # Update quantity of existing item
            items[existing_item]["qty"] += item.qty
            carts_collection.update_one(
                {"user_email": user_email},
                {
                    "$set": {
                        "items": items,
                        "updated_at": datetime.utcnow()
                    }
                }
            )
        else:
            # Add new item
            new_item = {
                "id": item_id,
                "productId": item.productId,
                "slug": item.slug,
                "name": item.name,
                "price": item.price,
                "qty": item.qty,
                "image": item.image
            }
            carts_collection.update_one(
                {"user_email": user_email},
                {
                    "$push": {"items": new_item},
                    "$set": {"updated_at": datetime.utcnow()}
                }
            )
    else:
        # Create new cart
        new_cart = {
            "user_email": user_email,
            "items": [{
                "id": item_id,
                "productId": item.productId,
                "slug": item.slug,
                "name": item.name,
                "price": item.price,
                "qty": item.qty,
                "image": item.image
            }],
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        carts_collection.insert_one(new_cart)
    
    return {"success": True, "message": "Item added to cart"}


@router.put("/update/{item_id}")
def update_cart_item(
    item_id: str,
    qty: int,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Update the quantity of a cart item"""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    if qty < 1:
        raise HTTPException(status_code=400, detail="Quantity must be at least 1")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    cart = carts_collection.find_one({"user_email": user_email})
    
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    items = cart.get("items", [])
    item_found = False
    
    for item in items:
        if item.get("id") == item_id:
            item["qty"] = qty
            item_found = True
            break
    
    if not item_found:
        raise HTTPException(status_code=404, detail="Item not found in cart")
    
    carts_collection.update_one(
        {"user_email": user_email},
        {
            "$set": {
                "items": items,
                "updated_at": datetime.utcnow()
            }
        }
    )
    
    return {"success": True, "message": "Cart updated"}


@router.delete("/remove/{item_id}")
def remove_from_cart(
    item_id: str,
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Remove an item from the cart"""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    result = carts_collection.update_one(
        {"user_email": user_email},
        {
            "$pull": {"items": {"id": item_id}},
            "$set": {"updated_at": datetime.utcnow()}
        }
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Item not found in cart")
    
    return {"success": True, "message": "Item removed from cart"}


@router.delete("/clear")
def clear_cart(
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """Clear all items from the cart"""
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    carts_collection.update_one(
        {"user_email": user_email},
        {
            "$set": {
                "items": [],
                "updated_at": datetime.utcnow()
            }
        }
    )
    
    return {"success": True, "message": "Cart cleared"}


@router.post("/sync")
def sync_cart(
    items: List[CartItemRequest],
    db=Depends(get_mongo_db),
    current_user=Depends(get_current_user)
):
    """
    Sync local cart items to server.
    Used when user logs in with items in localStorage.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    carts_collection = db.get_collection("carts")
    user_email = current_user.get("email")
    
    # Convert items to dict format
    import uuid
    cart_items = []
    for item in items:
        cart_items.append({
            "id": str(uuid.uuid4()),
            "productId": item.productId,
            "slug": item.slug,
            "name": item.name,
            "price": item.price,
            "qty": item.qty,
            "image": item.image
        })
    
    # Check if user already has a cart
    existing_cart = carts_collection.find_one({"user_email": user_email})
    
    if existing_cart and existing_cart.get("items"):
        # Merge with existing cart items
        existing_items = existing_cart.get("items", [])
        
        for new_item in cart_items:
            # Check if product already exists
            found = False
            for existing_item in existing_items:
                if existing_item.get("productId") == new_item.get("productId"):
                    # Update quantity
                    existing_item["qty"] += new_item.get("qty", 1)
                    found = True
                    break
            
            if not found:
                existing_items.append(new_item)
        
        carts_collection.update_one(
            {"user_email": user_email},
            {
                "$set": {
                    "items": existing_items,
                    "updated_at": datetime.utcnow()
                }
            }
        )
    else:
        # Create new cart with synced items
        new_cart = {
            "user_email": user_email,
            "items": cart_items,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        if existing_cart:
            carts_collection.update_one(
                {"user_email": user_email},
                {"$set": new_cart}
            )
        else:
            carts_collection.insert_one(new_cart)
    
    return {"success": True, "message": "Cart synced successfully"}
