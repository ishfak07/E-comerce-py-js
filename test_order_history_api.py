"""Test the order history API endpoint"""
import requests

# Use the test user credentials
response = requests.get(
    'http://localhost:5174/api/v1/orders/history',
    headers={
        'Authorization': 'Bearer YOUR_TOKEN_HERE'
    }
)

print(f"Status Code: {response.status_code}")
print(f"\nResponse Data:")
print(response.json())
