import urllib.request
url = "http://127.0.0.1:8001/api/v1/admin/products"
req = urllib.request.Request(url, method='GET')
try:
    with urllib.request.urlopen(req, timeout=10) as r:
        print('STATUS', r.status)
        print(r.read().decode())
except Exception as e:
    print('ERROR', e)
