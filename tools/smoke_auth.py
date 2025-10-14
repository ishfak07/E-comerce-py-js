import json
import time
import requests

BASE = "http://127.0.0.1:8001/api/v1"

def main():
    email = f"smoke_{int(time.time())}@example.com"
    password = "Secret!123"
    full_name = "Smoke Test"

    r = requests.post(f"{BASE}/auth/register", json={
        "email": email,
        "password": password,
        "full_name": full_name,
    })
    print("register:", r.status_code, r.text)
    r.raise_for_status()

    r2 = requests.post(f"{BASE}/auth/login", json={
        "email": email,
        "password": password,
    })
    print("login:", r2.status_code)
    print(r2.text)
    r2.raise_for_status()

if __name__ == "__main__":
    main()
