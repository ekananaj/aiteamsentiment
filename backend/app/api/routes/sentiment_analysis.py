from fastapi import APIRouter
from app.utils.sentiment_processing import analyze_sentiment, get_sentiment_trends
from fastapi.responses import JSONResponse
from fastapi.responses import StreamingResponse
import json
import time

sentiment_router = APIRouter()

# Endpoint for getting sentiment trends over time
@sentiment_router.get("/trends")
async def sentiment_trends():
    return get_sentiment_trends()

# Endpoint for real-time sentiment alerts
@sentiment_router.get("/alerts")
async def real_time_alerts():
    def event_generator():
        while True:
            alert = analyze_sentiment()
            yield f"data: {json.dumps(alert)}\n\n"
            time.sleep(5)  # Adjust time as needed
    return StreamingResponse(event_generator(), media_type="text/event-stream")
