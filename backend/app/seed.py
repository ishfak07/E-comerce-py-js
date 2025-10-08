from sqlalchemy.orm import Session
from .db.session import SessionLocal, engine
from .db.base import Base
from .models.models import User, Category, Product
from .core.security import get_password_hash


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
                full_name="Admin",
                is_active=True,
                is_staff=True,
                is_superuser=True,
            )
            db.add(admin)

        # Categories
        cat = db.query(Category).filter(Category.slug == "apparel").first()
        if not cat:
            cat = Category(name="Apparel", slug="apparel")
            db.add(cat)

        # Products
        prod = db.query(Product).filter(Product.slug == "t-shirt").first()
        if not prod:
            prod = Product(
                sku="TSHIRT-001",
                name="T-shirt",
                slug="t-shirt",
                price=19.99,
                images=["https://via.placeholder.com/600x400"],
                is_published=True,
                category=cat,
                stock=100,
            )
            db.add(prod)

        db.commit()
        print("Seed completed")
    finally:
        db.close()


if __name__ == "__main__":
    run()


