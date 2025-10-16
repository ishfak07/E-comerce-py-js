import os
import sys
from pathlib import Path

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT))

from app.main import app
import uvicorn

if __name__ == '__main__':
    print('Starting uvicorn programmatically (no reload)')
    uvicorn.run(app, host='127.0.0.1', port=8001, log_level='debug', reload=False)
