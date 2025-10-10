import os
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

async def test_mongo_connection():
    mongo_url = os.environ.get("MONGO_URL", "mongodb://localhost:27017/ecommerce")
    try:
        client = AsyncIOMotorClient(mongo_url)
        db = client.get_database("ecommerce")
        print("MongoDB connection successful!")
        collections = await db.list_collection_names()
        print("Collections:", collections)
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")

if __name__ == "__main__":
    asyncio.run(test_mongo_connection())