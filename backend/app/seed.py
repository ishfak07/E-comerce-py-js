from sqlalchemy.orm import Session
from .db.session import SessionLocal, engine
from .db.base import Base
from .models.models import User, Category, Product, ProductVariant, Order, OrderItem, Review, Coupon
from .core.security import get_password_hash
import uuid
from datetime import datetime, timedelta


def run():
    # Ensure tables exist
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()
    try:
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

        # Regular users
        users_data = [
            {
                "email": "john.doe@example.com",
                "password": "pass123",
                "full_name": "John Doe",
                "phone": "+1234567890"
            },
            {
                "email": "jane.smith@example.com", 
                "password": "pass123",
                "full_name": "Jane Smith",
                "phone": "+1234567891"
            },
            {
                "email": "bob.wilson@example.com",
                "password": "pass123", 
                "full_name": "Bob Wilson",
                "phone": "+1234567892"
            }
        ]

        for user_data in users_data:
            existing_user = db.query(User).filter(User.email == user_data["email"]).first()
            if not existing_user:
                user = User(
                    email=user_data["email"],
                    password_hash=get_password_hash(user_data["password"]),
                    full_name=user_data["full_name"],
                    phone=user_data["phone"],
                    is_active=True
                )
                db.add(user)

        # Categories
        categories_data = [
            {"name": "Electronics", "slug": "electronics", "description": "Electronic devices and gadgets"},
            {"name": "Clothing", "slug": "clothing", "description": "Fashion and apparel"},
            {"name": "Home & Garden", "slug": "home-garden", "description": "Home improvement and garden supplies"},
            {"name": "Sports", "slug": "sports", "description": "Sports equipment and accessories"},
            {"name": "Books", "slug": "books", "description": "Books and educational materials"}
        ]

        categories = {}
        for cat_data in categories_data:
            existing_cat = db.query(Category).filter(Category.slug == cat_data["slug"]).first()
            if not existing_cat:
                category = Category(
                    name=cat_data["name"],
                    slug=cat_data["slug"],
                    description=cat_data["description"]
                )
                db.add(category)
                categories[cat_data["slug"]] = category
            else:
                categories[cat_data["slug"]] = existing_cat

        # Products
        products_data = [
            {
                "sku": "LAPTOP-001",
                "name": "MacBook Pro 16-inch",
                "slug": "macbook-pro-16",
                "description": "Powerful laptop for professionals",
                "price": 2499.99,
                "compare_at_price": 2799.99,
                "stock": 50,
                "category_slug": "electronics",
                "images": ["https://via.placeholder.com/600x400/000000/FFFFFF?text=MacBook+Pro"],
                "tags": ["laptop", "apple", "professional"]
            },
            {
                "sku": "IPHONE-001", 
                "name": "iPhone 15 Pro",
                "slug": "iphone-15-pro",
                "description": "Latest iPhone with advanced features",
                "price": 999.99,
                "compare_at_price": 1099.99,
                "stock": 100,
                "category_slug": "electronics",
                "images": ["https://via.placeholder.com/600x400/000000/FFFFFF?text=iPhone+15+Pro"],
                "tags": ["phone", "apple", "mobile"]
            },
            {
                "sku": "TSHIRT-001",
                "name": "Cotton T-Shirt",
                "slug": "cotton-t-shirt",
                "description": "Comfortable cotton t-shirt",
                "price": 29.99,
                "stock": 200,
                "category_slug": "clothing",
                "images": ["https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Cotton+T-Shirt"],
                "tags": ["clothing", "cotton", "casual"]
            },
            {
                "sku": "JEANS-001",
                "name": "Classic Blue Jeans",
                "slug": "classic-blue-jeans", 
                "description": "Classic fit blue jeans",
                "price": 79.99,
                "stock": 150,
                "category_slug": "clothing",
                "images": ["https://via.placeholder.com/600x400/4169E1/FFFFFF?text=Blue+Jeans"],
                "tags": ["clothing", "jeans", "denim"]
            },
            {
                "sku": "BOOK-001",
                "name": "Python Programming Guide",
                "slug": "python-programming-guide",
                "description": "Complete guide to Python programming",
                "price": 49.99,
                "stock": 75,
                "category_slug": "books",
                "images": ["https://via.placeholder.com/600x400/32CD32/FFFFFF?text=Python+Book"],
                "tags": ["book", "programming", "python"]
            },
            {
                "sku": "TENNIS-001",
                "name": "Tennis Racket",
                "slug": "tennis-racket",
                "description": "Professional tennis racket",
                "price": 199.99,
                "stock": 30,
                "category_slug": "sports",
                "images": ["https://via.placeholder.com/600x400/FFD700/000000?text=Tennis+Racket"],
                "tags": ["sports", "tennis", "racket"]
            }
        ]

        products = {}
        for prod_data in products_data:
            existing_prod = db.query(Product).filter(Product.slug == prod_data["slug"]).first()
            if not existing_prod:
                product = Product(
                    sku=prod_data["sku"],
                    name=prod_data["name"],
                    slug=prod_data["slug"],
                    description=prod_data["description"],
                    price=prod_data["price"],
                    compare_at_price=prod_data.get("compare_at_price"),
                    stock=prod_data["stock"],
                    images=prod_data["images"],
                    tags=prod_data["tags"],
                    is_published=True,
                    category=categories[prod_data["category_slug"]]
                )
                db.add(product)
                products[prod_data["slug"]] = product
            else:
                products[prod_data["slug"]] = existing_prod

        # Product Variants
        variant_data = [
            {
                "product_slug": "cotton-t-shirt",
                "sku": "TSHIRT-001-S",
                "attributes": {"size": "S", "color": "White"},
                "price": 29.99,
                "stock": 50
            },
            {
                "product_slug": "cotton-t-shirt", 
                "sku": "TSHIRT-001-M",
                "attributes": {"size": "M", "color": "White"},
                "price": 29.99,
                "stock": 75
            },
            {
                "product_slug": "cotton-t-shirt",
                "sku": "TSHIRT-001-L", 
                "attributes": {"size": "L", "color": "White"},
                "price": 29.99,
                "stock": 75
            }
        ]

        for var_data in variant_data:
            if var_data["product_slug"] in products:
                existing_var = db.query(ProductVariant).filter(ProductVariant.sku == var_data["sku"]).first()
                if not existing_var:
                    variant = ProductVariant(
                        product=products[var_data["product_slug"]],
                        sku=var_data["sku"],
                        attributes=var_data["attributes"],
                        price=var_data["price"],
                        stock=var_data["stock"]
                    )
                    db.add(variant)

        # Coupons
        coupons_data = [
            {
                "code": "WELCOME10",
                "type": "percent",
                "value": 10.0,
                "min_order_amount": 50.0,
                "max_uses": 100,
                "expires_at": datetime.utcnow() + timedelta(days=30)
            },
            {
                "code": "SAVE20",
                "type": "fixed", 
                "value": 20.0,
                "min_order_amount": 100.0,
                "max_uses": 50,
                "expires_at": datetime.utcnow() + timedelta(days=15)
            }
        ]

        for coupon_data in coupons_data:
            existing_coupon = db.query(Coupon).filter(Coupon.code == coupon_data["code"]).first()
            if not existing_coupon:
                coupon = Coupon(
                    code=coupon_data["code"],
                    type=coupon_data["type"],
                    value=coupon_data["value"],
                    min_order_amount=coupon_data["min_order_amount"],
                    max_uses=coupon_data["max_uses"],
                    expires_at=coupon_data["expires_at"],
                    active=True
                )
                db.add(coupon)

        # Sample Orders
        users = db.query(User).filter(User.email != "admin@example.com").all()
        if users and products:
            # Create a sample order
            order = Order(
                user=users[0],
                status="delivered",
                total_amount=1079.98,
                shipping_amount=9.99,
                taxes=86.40,
                shipping_address={
                    "street": "123 Main St",
                    "city": "New York",
                    "state": "NY",
                    "zip": "10001",
                    "country": "USA"
                },
                billing_address={
                    "street": "123 Main St", 
                    "city": "New York",
                    "state": "NY",
                    "zip": "10001",
                    "country": "USA"
                },
                payment_status="paid",
                created_at=datetime.utcnow() - timedelta(days=5)
            )
            db.add(order)
            db.flush()  # Get the order ID

            # Add order items
            order_items = [
                {
                    "product": products["macbook-pro-16"],
                    "price": 2499.99,
                    "quantity": 1,
                    "subtotal": 2499.99
                },
                {
                    "product": products["cotton-t-shirt"],
                    "price": 29.99,
                    "quantity": 2,
                    "subtotal": 59.98
                }
            ]

            for item_data in order_items:
                order_item = OrderItem(
                    order=order,
                    product=item_data["product"],
                    price=item_data["price"],
                    quantity=item_data["quantity"],
                    subtotal=item_data["subtotal"]
                )
                db.add(order_item)

        # Sample Reviews
        if users and products:
            reviews_data = [
                {
                    "product": products["macbook-pro-16"],
                    "user": users[0],
                    "rating": 5,
                    "comment": "Excellent laptop, very fast and reliable!"
                },
                {
                    "product": products["cotton-t-shirt"],
                    "user": users[1], 
                    "rating": 4,
                    "comment": "Great quality cotton, comfortable fit."
                }
            ]

            for review_data in reviews_data:
                existing_review = db.query(Review).filter(
                    Review.product == review_data["product"],
                    Review.user == review_data["user"]
                ).first()
                if not existing_review:
                    review = Review(
                        product=review_data["product"],
                        user=review_data["user"],
                        rating=review_data["rating"],
                        comment=review_data["comment"]
                    )
                    db.add(review)

        db.commit()
        print("Database seeded successfully!")
        print("Created:")
        print(f"   - {len(users_data) + 1} users (including admin)")
        print(f"   - {len(categories_data)} categories")
        print(f"   - {len(products_data)} products")
        print(f"   - {len(variant_data)} product variants")
        print(f"   - {len(coupons_data)} coupons")
        print("   - Sample orders and reviews")
        print("\nAdmin login: admin@example.com / admin123")
        print("Regular users: john.doe@example.com, jane.smith@example.com, bob.wilson@example.com / pass123")
        
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    run()


