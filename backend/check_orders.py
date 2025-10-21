from app.db.mongo import get_sync_mongo_client, init_mongo_client

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
        print(f"  - Customer Email: {order.get('customer_email')}")
        print(f"  - Customer Phone: {order.get('customer_phone')}")
        print(f"  - Total: {order.get('total_amount')}")
        print(f"  - Status: {order.get('tracking_status')}")
        print()
else:
    print("❌ No orders found in database!")
    print("\n💡 You need to place an order first through the checkout page.")
