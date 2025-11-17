import os
from dotenv import load_dotenv
load_dotenv()
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
import json

async def check_recent_orders():
    mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/ecommerce')
    client = AsyncIOMotorClient(mongo_url)
    db = client.get_default_database()
    orders = db.get_collection('orders')
    
    print("=== CHECKING RECENT ORDERS ===\n")
    cursor = orders.find({}).sort("created_at", -1).limit(3)
    
    async for order in cursor:
        order_id = str(order.get('_id'))
        items = order.get('items', [])
        
        print(f"Order ID: {order_id}")
        print(f"Customer: {order.get('customer_name', 'N/A')}")
        print(f"Total Items: {len(items)}")
        
        if items:
            print("Items:")
            for idx, item in enumerate(items, 1):
                title = item.get('title') or item.get('name') or f"Product {item.get('product_id', 'N/A')}"
                qty = item.get('quantity') or item.get('qty', 0)
                print(f"  {idx}. {title} - Qty: {qty}")
        else:
            print("  No items in this order")
        
        print("-" * 50)

asyncio.run(check_recent_orders())
