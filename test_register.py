from backend.app.api.v1.endpoints.auth import register, RegisterRequest
from backend.app.db.mongo import init_mongo_client, get_mongo_db

# Initialize MongoDB client
init_mongo_client()

def test_register():
    # Create a mock database instance
    db = next(get_mongo_db())

    # Define test payload
    payload = RegisterRequest(
        email="test@example.com",
        password="Test1234!",
        full_name="Test User"
    )

    # Call the register function
    try:
        response = register(payload, db=db)
        print("Registration successful:", response)
    except Exception as e:
        print("Error during registration:", e)

if __name__ == "__main__":
    test_register()