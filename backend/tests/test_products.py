from sqlalchemy.orm import Session
from ..app.models.models import Product


def test_products_list_empty(client):
  r = client.get('/api/v1/products')
  assert r.status_code == 200
  assert r.json()['total'] == 0


def test_products_detail_404(client):
  r = client.get('/api/v1/products/missing')
  assert r.status_code == 404



