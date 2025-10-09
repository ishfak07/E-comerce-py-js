"""Simple MongoDB seed script using motor (async).
Run with: python backend/seed_mongo.py
It will read MONGO_URL from environment or default to mongodb://localhost:27017/ecommerce
"""
import asyncio
import os

from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017/ecommerce")

async def seed():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client.get_default_database()

    # Clear existing collections
    await db.users.delete_many({})
    await db.products.delete_many({})
    await db.orders.delete_many({})

    users = [
        {"_id": 1, "email": "admin@example.com", "password": "adminpass", "is_staff": True, "is_superuser": True, "full_name": "Admin User"},
        {"_id": 2, "email": "user@example.com", "password": "userpass", "is_staff": False, "is_superuser": False, "full_name": "Regular User"},
    ]
    products = [
        {"_id": 1, "name": "T-shirt", "slug": "t-shirt", "price": 19.99, "image": "", "stock": 10, "is_published": True, "created_at": "2025-10-08T00:00:00Z"},
        {"_id": 2, "name": "Mug", "slug": "mug", "price": 9.99, "image": "", "stock": 30, "is_published": True, "created_at": "2025-10-08T00:00:00Z"},
    ]
    orders = [
        {"_id": 1, "user_id": 2, "items": [{"product_id": 1, "qty": 2, "price": 19.99}], "total": 39.98, "status": "pending", "payment_method": "bank_transfer"}
    ]

    await db.users.insert_many(users)
    await db.products.insert_many(products)
    await db.orders.insert_many(orders)

    print("MongoDB seeded: users=%d products=%d orders=%d" % (len(users), len(products), len(orders)))

if __name__ == "__main__":
    asyncio.run(seed())
