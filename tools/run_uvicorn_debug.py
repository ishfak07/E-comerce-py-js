import sys
import os
# Ensure backend package is importable regardless of cwd
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

import asyncio
import uvicorn
from app.main import create_app

app = create_app()

if __name__ == '__main__':
    config = uvicorn.Config(app, host='127.0.0.1', port=8000, log_level='debug')
    server = uvicorn.Server(config)
    asyncio.run(server.serve())
