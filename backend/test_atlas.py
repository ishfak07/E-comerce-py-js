from pymongo import MongoClient
uri = "mongodb+srv://memberofpfc20_db_user:isbt9EuOqouxrYli@ecommerce.ctknsr4.mongodb.net/ecommerce?retryWrites=true&w=majority"
client = MongoClient(uri, serverSelectionTimeoutMS=5000)
try:
    print("Server version:", client.server_info()['version'])
    print("Databases:", client.list_database_names())
except Exception as e:
    print("Connection failed:", e)
finally:
    client.close()
