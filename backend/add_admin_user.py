"""Add an admin and a regular user to MongoDB users collection.
Run from project root with the venv activated.
"""
import os
from getpass import getpass
from datetime import datetime

from app.db.mongo import get_sync_mongo_client, init_mongo_client
from app.core.security import get_password_hash


def main():
    init_mongo_client()
    client = get_sync_mongo_client()
    if client is None:
        print("No sync mongo client available. Ensure pymongo is installed and MONGO_URL is set.")
        return

    db = client.get_database()
    users = db.users

    # Admin user
    admin_email = input("Admin email: ")
    admin_pwd = getpass("Admin password: ")
    admin = {
        "email": admin_email,
        "name": "Admin",
        "is_staff": True,
        "is_superuser": True,
        "hashed_password": get_password_hash(admin_pwd),
        "created_at": datetime.utcnow(),
    }

    # Regular user
    user_email = input("User email: ")
    user_pwd = getpass("User password: ")
    user = {
        "email": user_email,
        "name": "User",
        "is_staff": False,
        "is_superuser": False,
        "hashed_password": get_password_hash(user_pwd),
        "created_at": datetime.utcnow(),
    }

    users.update_one({"email": admin_email}, {"$set": admin}, upsert=True)
    users.update_one({"email": user_email}, {"$set": user}, upsert=True)

    print("Admin and user upserted.")


if __name__ == "__main__":
    main()
