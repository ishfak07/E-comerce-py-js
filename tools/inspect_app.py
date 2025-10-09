import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from app.main import create_app
from app.db.mongo import get_mongo_url

print('creating app')
app = create_app()
print('app created')
print('routes:', len(app.router.routes))
print('MONGO_URL:', get_mongo_url())
