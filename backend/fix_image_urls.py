from pymongo import MongoClient
from urllib.parse import urljoin
import os

# Configuration - change if your backend or mongo are different
MONGO = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DBNAME = os.environ.get('MONGO_DB', 'ecommerce')
BACKEND_BASE = os.environ.get('BACKEND_BASE', 'http://127.0.0.1:8001')


def make_absolute(u: str) -> str:
    if not u:
        return u
    if u.startswith('http://') or u.startswith('https://'):
        return u
    return urljoin(BACKEND_BASE.rstrip('/') + '/', u.lstrip('/'))


def main():
    client = MongoClient(MONGO, serverSelectionTimeoutMS=5000)
    db = client[DBNAME]
    col = db.get_collection('products')
    q = { 'images': { '$exists': True, '$ne': None } }
    updated = 0
    print('Scanning products for image URL normalization...')
    for doc in col.find(q):
        imgs = doc.get('images') or []
        new_imgs = [make_absolute(i) for i in imgs]
        if new_imgs != imgs:
            col.update_one({'_id': doc['_id']}, {'$set': {'images': new_imgs}})
            updated += 1
            print('Updated:', doc.get('name'), str(doc['_id']))
    print('Finished. Updated', updated, 'documents')


if __name__ == '__main__':
    main()
