import requests
r = requests.post('http://127.0.0.1:8001/api/v1/auth/login', json={'email':'admin@example.com','password':'adminpass'})
print(r.status_code)
print(r.text)
