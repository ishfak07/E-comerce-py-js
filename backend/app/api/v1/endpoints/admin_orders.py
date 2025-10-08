from fastapi import APIRouter, Depends, Query
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from ....dependencies.auth import require_admin
from ....db.session import get_db
from ....models.models import Order


router = APIRouter(prefix="/admin/orders")


@router.get("")
def list_orders(
    status: str | None = Query(default=None),
    page: int = Query(default=1, ge=1),
    size: int = Query(default=20, ge=1, le=200),
    db: Session = Depends(get_db),
    _admin=Depends(require_admin),
):
    """Return paginated admin orders.

    Query params:
    - status: optional filter
    - page: 1-based page number
    - size: page size
    """
    stmt = select(Order)
    if status:
        stmt = stmt.where(Order.status == status)
    total_stmt = select(func.count()).select_from(stmt.subquery())
    total = db.execute(total_stmt).scalar() or 0

    stmt = stmt.order_by(Order.created_at.desc())
    offset = (page - 1) * size
    items = db.execute(stmt.offset(offset).limit(size)).scalars().all()
    return {"items": [o for o in items], "total": total, "page": page, "size": size}


@router.get("/{order_id}")
def get_order(order_id: int, db: Session = Depends(get_db), _admin=Depends(require_admin)):
    return db.get(Order, order_id)


@router.put("/{order_id}/status")
def update_status(order_id: int, new_status: str, db: Session = Depends(get_db), _admin=Depends(require_admin)):
    order = db.get(Order, order_id)
    if not order:
        return {"detail": "not found"}
    order.status = new_status
    db.commit()
    return {"ok": True}


