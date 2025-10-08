from __future__ import annotations

from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class ProductVariantOut(BaseModel):
    id: int
    sku: str
    attributes: dict
    price: Optional[float] = None
    stock: int

    class Config:
        from_attributes = True


class ProductOut(BaseModel):
    id: int
    sku: str
    name: str
    slug: str
    description: Optional[str] = None
    short_description: Optional[str] = None
    price: float
    compare_at_price: Optional[float] = None
    images: list[str]
    tags: list[str]
    attributes: dict
    stock: int
    is_published: bool
    available_from: Optional[datetime] = None
    category_id: Optional[int] = None
    variants: list[ProductVariantOut] = []

    class Config:
        from_attributes = True


class ProductListResponse(BaseModel):
    items: list[ProductOut]
    total: int
    page: int
    size: int


