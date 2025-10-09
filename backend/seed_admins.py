"""Non-interactive admin/user seeder.
Reads ADMIN_EMAIL, ADMIN_PWD, USER_EMAIL, USER_PWD from env or uses defaults.
Run: python backend\seed_admins.py
"""
import os
from datetime import datetime

from app.db.mongo import init_mongo_client, get_sync_mongo_client
from app.core.security import get_password_hash


def main():
    init_mongo_client()
    client = get_sync_mongo_client()
    if client is None:
        print("No sync mongo client available. Ensure pymongo is installed and MONGO_URL is set.")
        return

    db = client.get_default_database()
    users = db.users

    admin_email = os.environ.get("ADMIN_EMAIL", "admin@example.com")
    admin_pwd = os.environ.get("ADMIN_PWD", "adminpass")
    user_email = os.environ.get("USER_EMAIL", "user@example.com")
    user_pwd = os.environ.get("USER_PWD", "userpass")

    admin = {
        "email": admin_email,
        "name": "Admin User",
        "is_staff": True,
        "is_superuser": True,
        "password_hash": get_password_hash(admin_pwd),
        "created_at": datetime.utcnow(),
    }

    user = {
        "email": user_email,
        "name": "Regular User",
        "is_staff": False,
        "is_superuser": False,
        "password_hash": get_password_hash(user_pwd),
        "created_at": datetime.utcnow(),
    }

    users.update_one({"email": admin_email}, {"$set": admin}, upsert=True)
    users.update_one({"email": user_email}, {"$set": user}, upsert=True)

    print(f"Upserted admin={admin_email} and user={user_email}")


if __name__ == "__main__":
    main()
