import sys
import time
import requests

# Simple SSE client using requests
# Usage: python tools/sse_client.py http://127.0.0.1:8000/api/v1/admin/stream-users

URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8000/api/v1/admin/stream-users"

with requests.get(URL, stream=True) as r:
    r.raise_for_status()
    print(f"Connected to {URL} (status {r.status_code})")
    buffer = ""
    for chunk in r.iter_content(chunk_size=None):
        if not chunk:
            time.sleep(0.1)
            continue
        try:
            text = chunk.decode('utf-8')
        except Exception:
            continue
        buffer += text
        while "\n\n" in buffer:
            event, buffer = buffer.split("\n\n", 1)
            print('--- SSE event ---')
            for line in event.splitlines():
                print(line)
            print('-----------------')
