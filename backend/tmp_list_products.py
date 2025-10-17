from pymongo import MongoClient
import json

c=MongoClient('mongodb://localhost:27017', serverSelectionTimeoutMS=2000)
try:
    db=c['ecommerce']
    docs=list(db.products.find().limit(5))
    print(json.dumps(docs, default=str, indent=2))
except Exception as e:
    print('ERROR', e)
