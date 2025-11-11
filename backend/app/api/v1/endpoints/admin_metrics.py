from fastapi import APIRouter, Depends
from ....dependencies.auth import require_admin
from ....dependencies.mongo import get_mongo_db
from datetime import datetime, timedelta
from typing import List, Dict
from collections import defaultdict

router = APIRouter(prefix="/admin/metrics")


@router.get("")
def get_metrics(db=Depends(get_mongo_db)):
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

    # Basic sales total: sum 'total_amount' on paid/delivered orders if present
    total_sales = 0.0
    try:
        pipeline = [
            {"$match": {"status": {"$in": ["paid", "delivered"]}}},
            {"$group": {"_id": None, "sum": {"$sum": "$total_amount"}}},
        ]
        agg = list(orders.aggregate(pipeline))
        if agg:
            total_sales = float(agg[0].get("sum", 0.0))
    except Exception:
        pass

    # Total revenue for completed orders: sum 'total_amount' where order is delivered/completed
    total_revenue = 0.0
    try:
        # Consider an order completed if tracking_status == 'delivered' or status == 'delivered'
        pipeline_rev = [
            {"$match": {"$or": [{"tracking_status": "delivered"}, {"status": "delivered"}]}},
            {"$group": {"_id": None, "sum": {"$sum": "$total_amount"}}},
        ]
        agg_rev = list(orders.aggregate(pipeline_rev))
        if agg_rev:
            total_revenue = float(agg_rev[0].get("sum", 0.0))
    except Exception:
        pass

    return {
        "total_users": int(total_users),
        "total_products": int(total_products),
        "total_orders": int(total_orders),
        "total_sales": float(total_sales),
        "total_revenue": float(total_revenue),
    }


@router.get("/charts/sales-trends")
def get_sales_trends(days: int = 30, db=Depends(get_mongo_db)):
    """Get sales trends data for the last N days"""
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")

    # Calculate date range
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)

    try:
        # Get all orders in date range
        cursor = orders.find({
            "created_at": {"$gte": start_date.isoformat(), "$lte": end_date.isoformat()},
            "status": {"$in": ["paid", "delivered"]}
        })
        all_orders = list(cursor)

        # Group by date
        date_groups = defaultdict(lambda: {"orders": 0, "revenue": 0.0})
        for order in all_orders:
            try:
                order_date = datetime.fromisoformat(order["created_at"].replace('Z', '+00:00'))
                date_str = order_date.strftime("%Y-%m-%d")
                date_groups[date_str]["orders"] += 1
                date_groups[date_str]["revenue"] += float(order.get("total_amount", 0))
            except Exception:
                continue

        # Fill in missing dates with zeros
        data = []
        current_date = start_date
        while current_date <= end_date:
            date_str = current_date.strftime("%Y-%m-%d")
            if date_str in date_groups:
                data.append({
                    "date": date_str,
                    "orders": date_groups[date_str]["orders"],
                    "revenue": date_groups[date_str]["revenue"]
                })
            else:
                data.append({
                    "date": date_str,
                    "orders": 0,
                    "revenue": 0.0
                })
            current_date += timedelta(days=1)

        return {"data": data}

    except Exception as e:
        return {"data": [], "error": str(e)}


@router.get("/charts/revenue-growth")
def get_revenue_growth(months: int = 12, db=Depends(get_mongo_db)):
    """Get monthly revenue growth data"""
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    orders = db.get_collection("orders")

    # Calculate date range
    end_date = datetime.now()
    start_date = end_date - timedelta(days=months * 30)

    try:
        # Get all orders in date range
        cursor = orders.find({
            "created_at": {"$gte": start_date.isoformat(), "$lte": end_date.isoformat()},
            "status": {"$in": ["paid", "delivered"]}
        })
        all_orders = list(cursor)

        # Group by month
        month_groups = defaultdict(float)
        for order in all_orders:
            try:
                order_date = datetime.fromisoformat(order["created_at"].replace('Z', '+00:00'))
                month_str = order_date.strftime("%Y-%m")
                month_groups[month_str] += float(order.get("total_amount", 0))
            except Exception:
                continue

        # Fill in missing months with zeros
        data = []
        current_date = start_date.replace(day=1)
        for _ in range(months):
            month_str = current_date.strftime("%Y-%m")
            data.append({
                "month": month_str,
                "revenue": month_groups.get(month_str, 0.0)
            })
            # Move to next month
            if current_date.month == 12:
                current_date = current_date.replace(year=current_date.year + 1, month=1)
            else:
                current_date = current_date.replace(month=current_date.month + 1)

        return {"data": data}

    except Exception as e:
        return {"data": [], "error": str(e)}


@router.get("/charts/user-activity")
def get_user_activity(days: int = 30, db=Depends(get_mongo_db)):
    """Get user registration activity over time"""
    if db is None:
        raise RuntimeError("MongoDB is not configured")
    users = db.get_collection("users")

    # Calculate date range
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)

    try:
        # Get all users in date range
        cursor = users.find({
            "created_at": {"$gte": start_date.isoformat(), "$lte": end_date.isoformat()}
        })
        all_users = list(cursor)

        # Group by date
        date_groups = defaultdict(int)
        for user in all_users:
            try:
                user_date = datetime.fromisoformat(user["created_at"].replace('Z', '+00:00'))
                date_str = user_date.strftime("%Y-%m-%d")
                date_groups[date_str] += 1
            except Exception:
                continue

        # Fill in missing dates with zeros
        data = []
        current_date = start_date
        while current_date <= end_date:
            date_str = current_date.strftime("%Y-%m-%d")
            data.append({
                "date": date_str,
                "registrations": date_groups.get(date_str, 0)
            })
            current_date += timedelta(days=1)

        return {"data": data}

    except Exception as e:
        return {"data": [], "error": str(e)}
