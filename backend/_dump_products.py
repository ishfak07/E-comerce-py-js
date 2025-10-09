from pymongo import MongoClient
c = MongoClient('mongodb://localhost:27017')
db = c.get_database('ecommerce')
for p in db.products.find():
    print(p)
