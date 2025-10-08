from __future__ import annotations

from datetime import datetime
from typing import Optional

from sqlalchemy import (
    JSON,
    Boolean,
    CheckConstraint,
    DateTime,
    Enum,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
import uuid

from ..db.base import Base


class User(Base):
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    full_name: Mapped[Optional[str]]
    phone: Mapped[Optional[str]]
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    is_staff: Mapped[bool] = mapped_column(Boolean, default=False)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    reviews: Mapped[list[Review]] = relationship(back_populates="user")
    orders: Mapped[list[Order]] = relationship(back_populates="user")


class Category(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(200))
    slug: Mapped[str] = mapped_column(String(200), unique=True, index=True)
    parent_id: Mapped[Optional[int]] = mapped_column(ForeignKey("category.id"), nullable=True)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    parent: Mapped[Optional[Category]] = relationship(remote_side=[id])
    products: Mapped[list[Product]] = relationship(back_populates="category")


class Product(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    sku: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255), index=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    short_description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    price: Mapped[float] = mapped_column(Numeric(10, 2))
    compare_at_price: Mapped[Optional[float]] = mapped_column(Numeric(10, 2))
    cost_price: Mapped[Optional[float]] = mapped_column(Numeric(10, 2))
    images: Mapped[list[str]] = mapped_column(JSON, default=list)
    tags: Mapped[list[str]] = mapped_column(JSON, default=list)
    attributes: Mapped[dict] = mapped_column(JSON, default=dict)
    stock: Mapped[int] = mapped_column(Integer, default=0)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False)
    available_from: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    category_id: Mapped[Optional[int]] = mapped_column(ForeignKey("category.id"))
    category: Mapped[Optional[Category]] = relationship(back_populates="products")
    variants: Mapped[list[ProductVariant]] = relationship(back_populates="product")
    reviews: Mapped[list[Review]] = relationship(back_populates="product")


class ProductVariant(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("product.id"))
    sku: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    attributes: Mapped[dict] = mapped_column(JSON, default=dict)
    price: Mapped[Optional[float]] = mapped_column(Numeric(10, 2))
    stock: Mapped[int] = mapped_column(Integer, default=0)

    product: Mapped[Product] = relationship(back_populates="variants")


class CouponTypeEnum(str):
    PERCENT = "percent"
    FIXED = "fixed"


class Coupon(Base):
    code: Mapped[str] = mapped_column(String(64), primary_key=True)
    type: Mapped[str] = mapped_column(String(16))
    value: Mapped[float] = mapped_column(Numeric(10, 2))
    min_order_amount: Mapped[Optional[float]] = mapped_column(Numeric(10, 2))
    max_uses: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    used_count: Mapped[int] = mapped_column(Integer, default=0)
    expires_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    active: Mapped[bool] = mapped_column(Boolean, default=True)


class OrderStatusEnum(str):
    PENDING = "pending"
    PROCESSING = "processing"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"


class PaymentStatusEnum(str):
    UNPAID = "unpaid"
    PAID = "paid"
    REFUNDED = "refunded"


class Order(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[Optional[uuid.UUID]] = mapped_column(UUID(as_uuid=True), ForeignKey("user.id"), nullable=True)
    status: Mapped[str] = mapped_column(String(20), default=OrderStatusEnum.PENDING)
    total_amount: Mapped[float] = mapped_column(Numeric(10, 2), default=0)
    shipping_amount: Mapped[float] = mapped_column(Numeric(10, 2), default=0)
    taxes: Mapped[float] = mapped_column(Numeric(10, 2), default=0)
    shipping_address: Mapped[dict] = mapped_column(JSON, default=dict)
    billing_address: Mapped[dict] = mapped_column(JSON, default=dict)
    payment_status: Mapped[str] = mapped_column(String(20), default=PaymentStatusEnum.UNPAID)
    # new fields for payment method and optional receipt/upload (bank transfer support)
    payment_method: Mapped[Optional[str]] = mapped_column(String(50), default="stripe")
    receipt_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    payment_intent_id: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user: Mapped[Optional[User]] = relationship(back_populates="orders")
    items: Mapped[list[OrderItem]] = relationship(back_populates="order", cascade="all, delete-orphan")


class OrderItem(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("order.id"))
    product_id: Mapped[int] = mapped_column(ForeignKey("product.id"))
    variant_id: Mapped[Optional[int]] = mapped_column(ForeignKey("productvariant.id"), nullable=True)
    price: Mapped[float] = mapped_column(Numeric(10, 2))
    quantity: Mapped[int] = mapped_column(Integer, default=1)
    subtotal: Mapped[float] = mapped_column(Numeric(10, 2))

    order: Mapped[Order] = relationship(back_populates="items")


class Review(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("product.id"))
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("user.id"))
    rating: Mapped[int] = mapped_column(Integer)
    comment: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    product: Mapped[Product] = relationship(back_populates="reviews")
    user: Mapped[User] = relationship(back_populates="reviews")


class AuditLog(Base):
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    event_type: Mapped[str] = mapped_column(String(100))
    user_id: Mapped[Optional[uuid.UUID]] = mapped_column(UUID(as_uuid=True), ForeignKey("user.id"), nullable=True)
    event_metadata: Mapped[dict] = mapped_column(JSON, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


