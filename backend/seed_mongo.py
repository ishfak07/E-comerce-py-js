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
    ]
    products = [
    ]
    orders = [
    ]

    await db.users.insert_many(users)
    await db.products.insert_many(products)
    await db.orders.insert_many(orders)

    print("MongoDB seeded: users=%d products=%d orders=%d" % (len(users), len(products), len(orders)))

if __name__ == "__main__":
    asyncio.run(seed())
