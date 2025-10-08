from fastapi import APIRouter, Depends, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from ....dependencies.auth import require_admin
from ....db.session import get_db
from ....models.models import Order


router = APIRouter(prefix="/admin/orders")


@router.get("")
def list_orders(
    status: str | None = Query(default=None),
    db: Session = Depends(get_db),
    _admin=Depends(require_admin),
):
    stmt = select(Order)
    if status:
        stmt = stmt.where(Order.status == status)
    stmt = stmt.order_by(Order.created_at.desc())
    return [o for o in db.execute(stmt).scalars().all()]


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


