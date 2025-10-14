from fastapi import APIRouter, Depends
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db

router = APIRouter(prefix="/admin/metrics")


@router.get("")
def get_metrics(db=Depends(get_mongo_db), _admin=Depends(require_admin)):
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    users = db.get_collection("users")
    products = db.get_collection("products")
    orders = db.get_collection("orders")

    try:
        total_users = users.count_documents({})
    except Exception:
        total_users = 0
    try:
        total_products = products.count_documents({})
    except Exception:
        total_products = 0
    try:
        total_orders = orders.count_documents({})
    except Exception:
        total_orders = 0

    # Basic sales total: sum 'total' on paid/delivered orders if present
    total_sales = 0.0
    try:
        pipeline = [
            {"$match": {"status": {"$in": ["paid", "delivered"]}}},
            {"$group": {"_id": None, "sum": {"$sum": "$total"}}},
        ]
        agg = list(orders.aggregate(pipeline))
        if agg:
            total_sales = float(agg[0].get("sum", 0.0))
    except Exception:
        pass

    return {
        "total_users": int(total_users),
        "total_products": int(total_products),
        "total_orders": int(total_orders),
        "total_sales": float(total_sales),
    }
