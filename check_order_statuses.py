"""Check order statuses in the database"""
from backend.app.db.mongo import get_sync_mongo_client, init_mongo_client

# Initialize MongoDB
init_mongo_client()
client = get_sync_mongo_client()
db = client['ecommerce']
orders = list(db.orders.find({}))

print(f'\n📦 Total orders in database: {len(orders)}\n')

if orders:
    for i, order in enumerate(orders[:10], 1):
        print(f"Order {i}:")
        print(f"  - ID: {order.get('_id')}")
        print(f"  - Customer: {order.get('customer_name')} ({order.get('customer_email')})")
        print(f"  - Total: LKR {order.get('total_amount', 0):.2f}")
        print(f"  - Status: {order.get('status')}")
        print(f"  - Tracking Status: {order.get('tracking_status')}")
        print(f"  - Payment Status: {order.get('payment_status')}")
        print(f"  - Created: {order.get('created_at')}")
        print(f"  - Admin Feedback: {order.get('admin_feedback')}")
        print()
else:
    print("❌ No orders found in database!")
    print("\n💡 You need to place an order first through the checkout page.")
