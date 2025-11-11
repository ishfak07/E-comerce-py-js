from fastapi import APIRouter, Request, HTTPException, Depends, status
from fastapi.responses import StreamingResponse
import json
import asyncio

from app.dependencies.mongo import get_mongo_db
from app.db.mongo import get_mongo_client
from app.dependencies.auth import get_current_user_loose


def require_admin_loose(user: dict = Depends(get_current_user_loose)) -> dict:
    if not (user.get("is_staff") or user.get("is_superuser")):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin only")
    return user

router = APIRouter(prefix="/admin", tags=["admin"])


async def event_generator_poll(db):
    last_checked = None
    while True:
        query = {}
        if last_checked:
            query = {"created_at": {"$gt": last_checked}}
        docs = list(db.users.find(query).sort("created_at", 1))
        for d in docs:
            # convert ObjectId
            d["_id"] = str(d.get("_id"))
            yield f"data: {json.dumps(d, default=str)}\n\n"
            last_checked = d.get("created_at")
        await asyncio.sleep(2)


async def metrics_generator(db):
    """Generate metrics updates when orders change"""
    # Use change streams to watch for order changes
    try:
        client = get_mongo_client()
        if client is None:
            raise RuntimeError("No mongo client available")
        
        # Watch the orders collection for changes
        change_stream = db.orders.watch([], full_document="updateLookup")
        
        async def watch_order_changes():
            for change in change_stream:
                # Check if the change is an update to status
                if change.get("operationType") == "update":
                    # Get the updated document
                    full_doc = change.get("fullDocument")
                    if full_doc and ("status" in full_doc or "tracking_status" in full_doc):
                        # Recalculate metrics
                        try:
                            orders = db.get_collection("orders")
                            users = db.get_collection("users")
                            products = db.get_collection("products")
                            
                            total_users = users.count_documents({})
                            total_products = products.count_documents({})
                            total_orders = orders.count_documents({})
                            
                            # Total revenue for completed orders
                            pipeline_rev = [
                                {"$match": {"$or": [{"tracking_status": "delivered"}, {"status": "delivered"}]}},
                                {"$group": {"_id": None, "sum": {"$sum": "$total_amount"}}},
                            ]
                            agg_rev = list(orders.aggregate(pipeline_rev))
                            total_revenue = float(agg_rev[0].get("sum", 0.0)) if agg_rev else 0.0
                            
                            metrics = {
                                "total_users": int(total_users),
                                "total_products": int(total_products),
                                "total_orders": int(total_orders),
                                "total_revenue": float(total_revenue),
                            }
                            
                            yield f"data: {json.dumps(metrics)}\n\n"
                        except Exception as e:
                            # If calculation fails, just continue
                            continue
                
                await asyncio.sleep(0)
        
        return StreamingResponse(watch_order_changes(), media_type="text/event-stream")
    
    except Exception:
        # Fallback: poll every 5 seconds
        async def poll_metrics():
            while True:
                try:
                    orders = db.get_collection("orders")
                    users = db.get_collection("users")
                    products = db.get_collection("products")
                    
                    total_users = users.count_documents({})
                    total_products = products.count_documents({})
                    total_orders = orders.count_documents({})
                    
                    # Total revenue for completed orders
                    pipeline_rev = [
                        {"$match": {"$or": [{"tracking_status": "delivered"}, {"status": "delivered"}]}},
                        {"$group": {"_id": None, "sum": {"$sum": "$total_amount"}}},
                    ]
                    agg_rev = list(orders.aggregate(pipeline_rev))
                    total_revenue = float(agg_rev[0].get("sum", 0.0)) if agg_rev else 0.0
                    
                    metrics = {
                        "total_users": int(total_users),
                        "total_products": int(total_products),
                        "total_orders": int(total_orders),
                        "total_revenue": float(total_revenue),
                    }
                    
                    yield f"data: {json.dumps(metrics)}\n\n"
                except Exception:
                    yield f"data: {json.dumps({'error': 'Failed to calculate metrics'})}\n\n"
                
                await asyncio.sleep(5)
        
        return StreamingResponse(poll_metrics(), media_type="text/event-stream")


@router.get("/stream-users")
async def stream_users(request: Request, db=Depends(get_mongo_db)):
    """Stream user documents as Server-Sent Events. Uses change streams when available, otherwise polls."""
    # If change streams supported use them
    try:
        client = get_mongo_client()
        if client is None:
            raise RuntimeError("No mongo client available")
        # Try change stream
        try:
            change_stream = db.users.watch([], full_document="updateLookup")
            async def watch_changes():
                for change in change_stream:
                    doc = change.get("fullDocument") or change.get("documentKey")
                    if doc and "_id" in doc:
                        doc["_id"] = str(doc["_id"])
                    yield f"data: {json.dumps(doc, default=str)}\n\n"
                    await asyncio.sleep(0)
            return StreamingResponse(watch_changes(), media_type="text/event-stream")
        except Exception:
            # fallback to polling
            return StreamingResponse(event_generator_poll(db), media_type="text/event-stream")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/stream-metrics", dependencies=[Depends(require_admin_loose)])
async def stream_metrics(request: Request, db=Depends(get_mongo_db)):
    """Stream metrics updates as Server-Sent Events."""
    return await metrics_generator(db)
