import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from '../lib/cart'
import { animateFlyToCart } from '../lib/flyToCart'

type Product = {
  id: string | number
  name: string
  slug: string
  price: number
  images: string[]
  category?: string
  createdAt?: string
}

export default function Search() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const { add } = useCart()

  useEffect(() => {
    if (!query.trim()) {
      setProducts([])
      return
    }

    let ignore = false
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const r = await axios.get<{items?: Product[]}>('/api/v1/products')
        if (ignore) return
        const items = r.data?.items || []
        setProducts(items)
      } catch (ex) {
        if (!ignore) {
          setError('Failed to load products')
          setProducts([])
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchProducts()
    return () => { ignore = true }
  }, [query])

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase()
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.slug.toLowerCase().includes(searchTerm) ||
      (product.category || '').toLowerCase().includes(searchTerm)
    )
  }, [products, query])

  // Also include static content results
  const staticResults = useMemo(() => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase()
    const staticContent = [
      { id: 'faq', name: 'Frequently Asked Questions', url: '/faq', type: 'FAQ Page' },
      { id: 'about', name: 'About Us', url: '/about', type: 'About Page' },
      { id: 'contact', name: 'Contact Support', url: '/contact', type: 'Contact Page' },
      { id: 'home', name: 'Home Page', url: '/', type: 'Home Page' },
      { id: 'shop', name: 'Shop', url: '/shop', type: 'Shop Page' }
    ]

    return staticContent.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm)
    )
  }, [query])

  const handleAddToCart = (product: Product, event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLElement
    const card = button.closest('div') as HTMLElement | null
    const img = card?.querySelector('img') as HTMLImageElement | null
    if (img) animateFlyToCart(img)

    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0]
    })
  }

  if (!query.trim()) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Search</h1>
        <p>Enter a search term to find products across our store.</p>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1>Search Results</h1>
        <p>Showing results for: <strong>"{query}"</strong></p>
        <p>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Products Section */}
          {filteredProducts.length > 0 && (
            <>
              <h2 style={{ marginBottom: '1rem', color: 'var(--text)' }}>Products ({filteredProducts.length})</h2>
              <div className="grid">
                {filteredProducts.map(product => (
                  <div className="card" key={product.id}>
                    <Link to={`/product/${product.slug}`} className="card-img">
                      <img
                        src={product.images[0] || '/placeholder.jpg'}
                        alt={product.name}
                      />
                    </Link>
                    <div className="card-body">
                      <span className="tag">{product.category || 'General'}</span>
                      <span className="price">LKR {Number(product.price).toFixed(2)}</span>
                      <Link to={`/product/${product.slug}`} className="card-title">{product.name}</Link>
                      <div className="card-actions">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => handleAddToCart(product, e)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Static Content Section */}
          {staticResults.length > 0 && (
            <>
              {filteredProducts.length > 0 && <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--line)' }} />}
              <h2 style={{ marginBottom: '1rem', color: 'var(--text)' }}>Pages ({staticResults.length})</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {staticResults.map(result => (
                  <Link
                    key={result.id}
                    to={result.url}
                    style={{
                      display: 'block',
                      padding: '1rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--ghost)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface)'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{result.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)', padding: '2px 8px', background: 'var(--surface-alt)', borderRadius: '12px' }}>
                        {result.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {!loading && !error && filteredProducts.length === 0 && staticResults.length === 0 && query.trim() && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>No results found for "{query}"</p>
          <p>Try searching for something else or <Link to="/shop">browse all products</Link></p>
        </div>
      )}
    </div>
  )
}

<style>{`
  :root{
    --bg:#0d0d0f;
    --surface:#121216;
    --surface-alt:#1a1a1f;
    --text:#e9e9ef;
    --muted:#b8bbd9;
    --brand:#6D74FF;
    --brand-600:#5860ff;
    --line:#2a2b36;
    --card:#14151d;
    --ghost:#232434;
    --positive:#1fbf75;
    --warning:#ffb020;
    --danger:#ff5d5d;
  }
  .container{max-width:1120px;margin:0 auto;padding:0 20px}
  .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
  .btn:hover{transform:translateY(-1px)}
  .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
  .btn-primary:hover{background:var(--brand-600)}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .card{border:1px solid var(--line);background:var(--card);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
  .card-img{display:block;aspect-ratio:4/3;background:var(--surface);border-bottom:1px solid var(--line)}
  .card-img img{width:100%;height:100%;object-fit:cover;display:block}
  .card-body{padding:12px}
  .meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
  .tag{font-size:12px;color:var(--muted);padding:2px 8px;border:1px solid var(--line);border-radius:999px;background:var(--surface-alt)}
  .price{font-weight:700}
  .card-title{display:inline-block;margin-top:2px;color:var(--text);text-decoration:none;font-weight:600}
  .card-title:hover{text-decoration:underline}
  .card-actions{display:flex;gap:8px;margin-top:10px}
  @media (max-width:1024px){
    .grid{grid-template-columns:repeat(2,1fr)}
  }
  @media (max-width:640px){
    .grid{grid-template-columns:1fr}
  }
`}</style>