import os
from dotenv import load_dotenv
load_dotenv()
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

async def check_data():
    mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/ecommerce')
    client = AsyncIOMotorClient(mongo_url)
    db = client.get_default_database()
    
    print("=== PRODUCTS ===")
    products = db.get_collection('products')
    cursor = products.find({}).limit(5)
    async for p in cursor:
        print(f"ID: {p.get('_id')}, Name: {p.get('name', p.get('title', 'N/A'))}")
    
    print("\n=== ORDERS WITH ITEMS ===")
    orders = db.get_collection('orders')
    cursor = orders.find({'items': {'$exists': True, '$ne': []}}).limit(3)
    async for order in cursor:
        print(f"\nOrder ID: {order.get('_id')}")
        for item in order.get('items', []):
            print(f"  - {item}")

asyncio.run(check_data())
