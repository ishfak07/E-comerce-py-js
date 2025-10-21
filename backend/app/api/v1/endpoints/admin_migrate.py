"""
Admin endpoint to migrate existing orders to have tracking_status field.
Call this once to fix all existing orders.
"""

from fastapi import APIRouter, Depends
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db

router = APIRouter(prefix="/admin/migrate")


@router.post("/fix-order-status")
def fix_order_tracking_status(
    db=Depends(get_mongo_db),
    _admin=Depends(require_admin)
):
    """
    Add tracking_status and payment_status to orders that don't have them.
    This is a one-time migration for existing orders.
    """
    if db is None:
        return {"error": "Database not configured"}
    
    orders_collection = db.get_collection("orders")
    
    # Find all orders
    all_orders = list(orders_collection.find({}))
    
    updated_count = 0
    already_good = 0
    updates = []
    
    for order in all_orders:
        order_id = order.get('_id')
        current_status = order.get('status', 'pending_verification')
        tracking_status = order.get('tracking_status')
        payment_status = order.get('payment_status')
        
        # Check if order needs update
        if not tracking_status:
            update_data = {}
            
            # Map admin status to tracking_status and payment_status
            if current_status == "pending_verification":
                update_data["tracking_status"] = "placed"
                update_data["payment_status"] = payment_status or "pending"
            elif current_status == "payment_verified":
                update_data["tracking_status"] = "verified"
                update_data["payment_status"] = payment_status or "verified"
            elif current_status == "processing":
                update_data["tracking_status"] = "processing"
            elif current_status == "shipped":
                update_data["tracking_status"] = "shipped"
            elif current_status == "delivered":
                update_data["tracking_status"] = "delivered"
            elif current_status == "cancelled":
                update_data["tracking_status"] = "cancelled"
                update_data["payment_status"] = payment_status or "cancelled"
            else:
                # Default for unknown status
                update_data["tracking_status"] = "placed"
                update_data["payment_status"] = payment_status or "pending"
            
            # Ensure payment_status is set
            if not update_data.get("payment_status"):
                update_data["payment_status"] = payment_status or "pending"
            
            orders_collection.update_one(
                {"_id": order_id},
                {"$set": update_data}
            )
            updated_count += 1
            updates.append({
                "order_id": str(order_id),
                "status": current_status,
                "tracking_status": update_data.get("tracking_status"),
                "payment_status": update_data.get("payment_status")
            })
        else:
            already_good += 1
    
    return {
        "success": True,
        "total_orders": len(all_orders),
        "updated": updated_count,
        "already_had_status": already_good,
        "updates": updates
    }
