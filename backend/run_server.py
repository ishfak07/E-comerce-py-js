"""Run the FastAPI app via uvicorn.run.

Use this script to start the backend from PowerShell or via Start-Process.
Example:
    ./.venv/Scripts/python.exe backend/run_server.py
"""
import sys
import os
import time

# Ensure backend package is importable
ROOT = os.path.abspath(os.path.dirname(__file__))
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)

import uvicorn


def main() -> None:
    # Import the app object directly so uvicorn.run blocks on the app lifecycle
    try:
        from app.main import app
    except Exception as e:
        print("ERROR: failed to import app.main.app:", e)
        raise

    while True:
        try:
            print("Starting uvicorn server...")
            uvicorn.run(app, host="127.0.0.1", port=8001, log_level="info")
        except Exception as exc:
            print("uvicorn raised exception:", exc)
        print("uvicorn stopped — restarting in 2s (or Ctrl+C to quit)")
        try:
            time.sleep(2)
        except KeyboardInterrupt:
            print("Interrupted — exiting")
            break


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=8001, reload=True)
