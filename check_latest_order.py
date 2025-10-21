"""Check the latest order and verify it has the correct email"""
from backend.app.db.mongo import get_sync_mongo_client, init_mongo_client
from bson import ObjectId

# Initialize MongoDB
init_mongo_client()
client = get_sync_mongo_client()
db = client['ecommerce']

# Get the most recent order
latest_order = db.orders.find_one(
    sort=[("created_at", -1)]
)

if latest_order:
    print("\n📦 Latest Order Details:")
    print("=" * 60)
    print(f"Order ID: {latest_order.get('_id')}")
    print(f"Customer Name: {latest_order.get('customer_name')}")
    print(f"Customer Email: {latest_order.get('customer_email')}")
    print(f"Customer Phone: {latest_order.get('customer_phone')}")
    print(f"Total Amount: LKR {latest_order.get('total_amount', 0):.2f}")
    print(f"Status: {latest_order.get('status')}")
    print(f"Tracking Status: {latest_order.get('tracking_status')}")
    print(f"Payment Status: {latest_order.get('payment_status')}")
    print(f"Selected Bank: {latest_order.get('selected_bank')}")
    print(f"Created: {latest_order.get('created_at')}")
    print("=" * 60)
    
    # Check if this order should appear for test@gmail.com
    if latest_order.get('customer_email') == 'test@gmail.com':
        print("\n✅ This order WILL appear for test@gmail.com")
    else:
        print(f"\n❌ This order will NOT appear for test@gmail.com")
        print(f"   Order email: {latest_order.get('customer_email')}")
        print(f"   Expected: test@gmail.com")
        
        # Offer to fix it
        response = input("\n🔧 Do you want to update this order's email to test@gmail.com? (yes/no): ")
        if response.lower() == 'yes':
            db.orders.update_one(
                {"_id": latest_order["_id"]},
                {"$set": {"customer_email": "test@gmail.com"}}
            )
            print("✅ Order email updated to test@gmail.com!")
            print("💡 Now refresh the Order History page to see the order")
else:
    print("\n❌ No orders found in database!")
