#!/usr/bin/env python3
"""
Simple database seed script
"""

import os
import sys
from pathlib import Path

# Add the app directory to the path
sys.path.append(str(Path(__file__).parent))

from sqlalchemy.orm import Session
from app.db.session import SessionLocal, engine
from app.db.base import Base
from app.models.models import User, Category, Product
from app.core.security import get_password_hash
import uuid
from datetime import datetime

def run():
    print("Creating database tables...")
    # Create all tables
    Base.metadata.create_all(bind=engine)
    
    db: Session = SessionLocal()
    try:
        print("Seeding database with sample data...")
        
        # Admin user
        admin = db.query(User).filter(User.email == "admin@example.com").first()
        if not admin:
            admin = User(
                email="admin@example.com",
                password_hash=get_password_hash("admin123"),
                full_name="Admin User",
                is_active=True,
                is_staff=True,
                is_superuser=True,
            )
            db.add(admin)
            print("Created admin user")

        # Regular user
        user = db.query(User).filter(User.email == "john@example.com").first()
        if not user:
            user = User(
                email="john@example.com",
                password_hash=get_password_hash("pass123"),
                full_name="John Doe",
                is_active=True
            )
            db.add(user)
            print("Created regular user")

        # Category
        category = db.query(Category).filter(Category.slug == "electronics").first()
        if not category:
            category = Category(
                name="Electronics",
                slug="electronics",
                description="Electronic devices and gadgets"
            )
            db.add(category)
            print("Created electronics category")

        # Product
        product = db.query(Product).filter(Product.slug == "laptop").first()
        if not product:
            product = Product(
                sku="LAPTOP-001",
                name="Gaming Laptop",
                slug="laptop",
                description="High-performance gaming laptop",
                price=1299.99,
                stock=50,
                images=["https://via.placeholder.com/600x400"],
                is_published=True,
                category=category
            )
            db.add(product)
            print("Created laptop product")

        db.commit()
        print("Database seeded successfully!")
        print("\nConnection Details:")
        print("Host: localhost")
        print("Port: 5432")
        print("Database: ecommerce")
        print("Username: postgres")
        print("Password: postgres")
        print("\nTest Accounts:")
        print("Admin: admin@example.com / admin123")
        print("User: john@example.com / pass123")
        
    except Exception as e:
        db.rollback()
        print(f"Error: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    run()
