from fastapi import APIRouter, Request, HTTPException, Depends
from fastapi.responses import StreamingResponse
import json
import asyncio

from ...dependencies.mongo import get_mongo_db
from ...db.mongo import get_mongo_client

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
