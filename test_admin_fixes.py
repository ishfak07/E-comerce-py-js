"""Quick test script to verify admin functionality after fixes"""
import requests
import json

BASE = "http://127.0.0.1:8001/api/v1"

def test_login():
    print("=" * 60)
    print("Testing Login...")
    print("=" * 60)
    
    # Test with adminpass (Mongo seed)
    r = requests.post(f"{BASE}/auth/login", json={
        "email": "admin@example.com",
        "password": "adminpass"
    })
    
    print(f"Status: {r.status_code}")
    if r.status_code == 200:
        data = r.json()
        print(f"✅ Login successful!")
        print(f"User: {data['user']['email']}")
        print(f"Is Staff: {data['user']['is_staff']}")
        print(f"Is Superuser: {data['user']['is_superuser']}")
        return data['access_token']
    else:
        print(f"❌ Login failed: {r.text}")
        # Try fallback password
        print("\nTrying fallback password (admin123)...")
        r = requests.post(f"{BASE}/auth/login", json={
            "email": "admin@example.com",
            "password": "admin123"
        })
        if r.status_code == 200:
            data = r.json()
            print(f"✅ Login successful with fallback!")
            return data['access_token']
        return None

def test_admin_endpoints(token):
    print("\n" + "=" * 60)
    print("Testing Admin Endpoints...")
    print("=" * 60)
    
    headers = {"Authorization": f"Bearer {token}"}
    
    # Test users endpoint
    print("\n1. Testing GET /admin/users...")
    r = requests.get(f"{BASE}/admin/users", headers=headers)
    print(f"   Status: {r.status_code}")
    if r.status_code == 200:
        users = r.json().get('items', [])
        print(f"   ✅ Found {len(users)} users")
    else:
        print(f"   ❌ Failed: {r.text[:100]}")
    
    # Test products endpoint
    print("\n2. Testing GET /admin/products...")
    r = requests.get(f"{BASE}/admin/products", headers=headers)
    print(f"   Status: {r.status_code}")
    if r.status_code == 200:
        products = r.json().get('items', [])
        print(f"   ✅ Found {len(products)} products")
    else:
        print(f"   ❌ Failed: {r.text[:100]}")
    
    # Test orders endpoint
    print("\n3. Testing GET /admin/orders...")
    r = requests.get(f"{BASE}/admin/orders", headers=headers)
    print(f"   Status: {r.status_code}")
    if r.status_code == 200:
        orders = r.json().get('items', [])
        print(f"   ✅ Found {len(orders)} orders")
    else:
        print(f"   ❌ Failed: {r.text[:100]}")
    
    # Test metrics endpoint
    print("\n4. Testing GET /admin/metrics...")
    r = requests.get(f"{BASE}/admin/metrics", headers=headers)
    print(f"   Status: {r.status_code}")
    if r.status_code == 200:
        metrics = r.json()
        print(f"   ✅ Metrics retrieved")
        print(f"      Total Users: {metrics.get('total_users', 0)}")
        print(f"      Total Products: {metrics.get('total_products', 0)}")
        print(f"      Total Orders: {metrics.get('total_orders', 0)}")
    else:
        print(f"   ❌ Failed: {r.text[:100]}")

def main():
    print("\n🚀 Admin Panel Test Suite")
    print("Testing backend API at:", BASE)
    print()
    
    try:
        token = test_login()
        if token:
            test_admin_endpoints(token)
            print("\n" + "=" * 60)
            print("✅ All tests completed!")
            print("=" * 60)
            print("\nNext steps:")
            print("1. Open http://localhost:5174/login in your browser")
            print("2. Login with: admin@example.com / adminpass")
            print("3. Click 'Admin' button in the header")
            print("4. You should see the new purple gradient admin panel")
        else:
            print("\n❌ Cannot proceed without valid login")
            print("\nPlease check:")
            print("1. Backend server is running on port 8001")
            print("2. Database is seeded with admin user")
            print("3. Try credentials: admin@example.com / adminpass")
    except requests.exceptions.ConnectionError:
        print("\n❌ Cannot connect to backend!")
        print("Please ensure backend is running:")
        print("  cd backend")
        print("  python run_server.py")
    except Exception as e:
        print(f"\n❌ Error: {e}")

if __name__ == "__main__":
    main()
