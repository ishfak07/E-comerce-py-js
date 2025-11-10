def test_register_and_login_flow(client):
  r = client.post('/api/v1/auth/register', json={"email":"test@example.com","password":"secret","full_name":"Test"})
  assert r.status_code == 200
  r = client.post('/api/v1/auth/login', json={"email":"test@example.com","password":"secret"})
  assert r.status_code == 200
  data = r.json()
  assert 'access_token' in data
  assert data['user']['email'] == 'test@example.com'


