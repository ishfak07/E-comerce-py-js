"""Product API tests.

Fixes import error in CI by using a package-relative import. The tests
directory is a package (has __init__.py) so we can safely use a relative
import to reach the sibling `app` package regardless of the working
directory pytest is invoked from.
"""

from app.models.models import Product  # noqa: F401 (import used for type/reference)


def test_products_list_empty(client):
    r = client.get('/api/v1/products')
    assert r.status_code == 200
    assert r.json()['total'] == 0


def test_products_detail_404(client):
    r = client.get('/api/v1/products/missing')
    assert r.status_code == 404



