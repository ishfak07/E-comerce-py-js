"""
Migration script to add tracking_status to existing orders that don't have it.
This ensures all orders have proper status fields for the Order History page.
"""

from app.db.mongo import get_sync_mongo_client, init_mongo_client

# Initialize MongoDB
init_mongo_client()
client = get_sync_mongo_client()
db = client['ecommerce']
orders_collection = db.orders

# Find all orders
all_orders = list(orders_collection.find({}))
print(f"\n📦 Found {len(all_orders)} total orders\n")

updated_count = 0
already_good = 0

for order in all_orders:
    order_id = order.get('_id')
    current_status = order.get('status', 'pending_verification')
    tracking_status = order.get('tracking_status')
    payment_status = order.get('payment_status')
    
    # Check if order needs update
    needs_update = False
    update_data = {}
    
    # Map admin status to tracking_status and payment_status
    if not tracking_status:
        needs_update = True
        if current_status == "pending_verification":
            update_data["tracking_status"] = "placed"
            update_data["payment_status"] = "pending"
        elif current_status == "payment_verified":
            update_data["tracking_status"] = "verified"
            update_data["payment_status"] = "verified"
        elif current_status == "processing":
            update_data["tracking_status"] = "processing"
        elif current_status == "shipped":
            update_data["tracking_status"] = "shipped"
        elif current_status == "delivered":
            update_data["tracking_status"] = "delivered"
        elif current_status == "cancelled":
            update_data["tracking_status"] = "cancelled"
            update_data["payment_status"] = "cancelled"
        else:
            # Default for unknown status
            update_data["tracking_status"] = "placed"
            update_data["payment_status"] = "pending"
    
    if needs_update:
        print(f"📝 Updating order {order_id}:")
        print(f"   Status: {current_status}")
        print(f"   Setting tracking_status: {update_data.get('tracking_status')}")
        if 'payment_status' in update_data:
            print(f"   Setting payment_status: {update_data.get('payment_status')}")
        
        orders_collection.update_one(
            {"_id": order_id},
            {"$set": update_data}
        )
        updated_count += 1
        print(f"   ✅ Updated\n")
    else:
        already_good += 1

print(f"\n✅ Migration complete!")
print(f"   - {updated_count} orders updated")
print(f"   - {already_good} orders already had tracking_status")
print(f"\n🔄 Please refresh the Order History page to see updated statuses.\n")
