import asyncio
import logging
from pathlib import Path
import sys

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT))

from app.main import app
import uvicorn


def main():
    logging.getLogger().setLevel(logging.DEBUG)
    config = uvicorn.Config(app=app, host="127.0.0.1", port=8001, log_level="debug")
    server = uvicorn.Server(config=config)
    print("Starting uvicorn.Server in-process...")
    try:
        server.run()
    except Exception as e:
        print("Server exception:", e)


if __name__ == '__main__':
    main()
