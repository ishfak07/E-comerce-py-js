import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from '../lib/cart'

type Product = {
  id: number
  name: string
  slug: string
  price: number
  images: string[]
  category?: string
  createdAt?: string // ISO date for newest sorting
}

const demoProducts: Product[] = [
  { id: 201, name: 'Classic Tee', slug: 'classic-tee', price: 19.99, images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'], category: 'Apparel', createdAt: '2025-01-04' },
  { id: 202, name: 'Minimal Watch', slug: 'minimal-watch', price: 75.00, images: ['https://images.unsplash.com/photo-1518441902117-f26a60b6c0a4?q=80&w=1200&auto=format&fit=crop'], category: 'Accessories', createdAt: '2025-02-10' },
  { id: 203, name: 'Sunglasses', slug: 'sunglasses', price: 35.00, images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop'], category: 'Accessories', createdAt: '2025-01-28' },
  { id: 204, name: 'Leather Backpack', slug: 'leather-backpack', price: 89.99, images: ['https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop'], category: 'Bags', createdAt: '2025-02-20' },
  { id: 205, name: 'Wireless Headphones', slug: 'wireless-headphones', price: 129.00, images: ['https://images.unsplash.com/photo-1518449032315-66c8f2dc39cf?q=80&w=1200&auto=format&fit=crop'], category: 'Electronics', createdAt: '2025-03-03' },
  { id: 206, name: 'Sneakers', slug: 'sneakers', price: 59.99, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'], category: 'Footwear', createdAt: '2025-02-01' },
  { id: 207, name: 'Canvas Tote', slug: 'canvas-tote', price: 22.00, images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop'], category: 'Bags', createdAt: '2025-01-14' },
  { id: 208, name: 'Baseball Cap', slug: 'baseball-cap', price: 18.50, images: ['https://images.unsplash.com/photo-1542843131-ec13c3d3d9d0?q=80&w=1200&auto=format&fit=crop'], category: 'Accessories', createdAt: '2025-03-12' },
]

type ApiResponse = {
  items?: Product[]
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>(demoProducts)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const [q, setQ] = useState<string>(searchParams.get('q') || '')
  const [category, setCategory] = useState<string>(searchParams.get('category') || 'All')
  const [minPrice, setMinPrice] = useState<string>(searchParams.get('min') || '')
  const [maxPrice, setMaxPrice] = useState<string>(searchParams.get('max') || '')
  const [sort, setSort] = useState<string>(searchParams.get('sort') || 'newest')
  const [page, setPage] = useState<number>(Number(searchParams.get('page') || 1))
  const [perPage, setPerPage] = useState<number>(12)

  const { add } = useCart()

  useEffect(() => {
    let ignore = false
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const r = await axios.get<ApiResponse>('/api/v1/products')
        if (ignore) return
        const items = r.data?.items
        if (items && items.length) {
          setProducts(items)
        } else {
          setProducts(demoProducts)
        }
      } catch (ex) {
        if (!ignore) setProducts(demoProducts)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchProducts()

    // listen for product updates from other tabs (admin creating product)
    function onStorage(e: StorageEvent) {
      if (e.key === 'products:update') {
        // refetch products
        fetchProducts()
      }
    }
    window.addEventListener('storage', onStorage)
    return () => { ignore = true; window.removeEventListener('storage', onStorage) }
  }, [])

  useEffect(() => {
    const next = new URLSearchParams()
    if (q) next.set('q', q)
    if (category && category !== 'All') next.set('category', category)
    if (minPrice) next.set('min', minPrice)
    if (maxPrice) next.set('max', maxPrice)
    if (sort && sort !== 'newest') next.set('sort', sort)
    if (page !== 1) next.set('page', String(page))
    setSearchParams(next)
  }, [q, category, minPrice, maxPrice, sort, page, setSearchParams])

  const categories = useMemo(() => {
    const set = new Set<string>(['All'])
    products.forEach(p => set.add(p.category || 'Other'))
    return Array.from(set)
  }, [products])

  const filtered = useMemo(() => {
    let list = [...products]
    if (q.trim()) {
      const s = q.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.slug.toLowerCase().includes(s) ||
        (p.category || '').toLowerCase().includes(s)
      )
    }
    if (category !== 'All') {
      list = list.filter(p => (p.category || 'Other') === category)
    }
    const min = Number(minPrice)
    const max = Number(maxPrice)
    if (!Number.isNaN(min) && minPrice !== '') {
      list = list.filter(p => p.price >= min)
    }
    if (!Number.isNaN(max) && maxPrice !== '') {
      list = list.filter(p => p.price <= max)
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        list.sort((a, b) => {
          const da = a.createdAt ? Date.parse(a.createdAt) : 0
          const db = b.createdAt ? Date.parse(b.createdAt) : 0
          return db - da
        })
    }
    return list
  }, [products, q, category, minPrice, maxPrice, sort])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const clampedPage = Math.min(page, totalPages)
  const start = (clampedPage - 1) * perPage
  const pageItems = filtered.slice(start, start + perPage)

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages, page])

  const clearFilters = () => {
    setQ('')
    setCategory('All')
    setMinPrice('')
    setMaxPrice('')
    setSort('newest')
    setPage(1)
  }

  return (
    <>
      <section className="shop-hero">
        <div className="container hero-inner">
          <div>
            <p className="kicker">Shop</p>
            <h1 className="headline">Find the next daily favorite</h1>
            <p className="subhead">Browse curated essentials across apparel, accessories, and more.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="toolbar">
            <div className="toolbar-left">
              <div className="field">
                <label htmlFor="search">Search</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Search products"
                  value={q}
                  onChange={e => { setQ(e.target.value); setPage(1) }}
                />
              </div>
              <div className="field">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={e => { setCategory(e.target.value); setPage(1) }}
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="field price">
                <label>Price</label>
                <div className="price-row">
                  <input
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Min"
                    value={minPrice}
                    onChange={e => { setMinPrice(e.target.value); setPage(1) }}
                  />
                  <span>—</span>
                  <input
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={e => { setMaxPrice(e.target.value); setPage(1) }}
                  />
                </div>
              </div>
            </div>

            <div className="toolbar-right">
              <div className="field">
                <label htmlFor="sort">Sort</label>
                <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A–Z</option>
                  <option value="name-desc">Name: Z–A</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="perPage">Per page</label>
                <select
                  id="perPage"
                  value={perPage}
                  onChange={e => { setPerPage(Number(e.target.value)); setPage(1) }}
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                </select>
              </div>
              <button className="btn btn-ghost" onClick={clearFilters}>Clear</button>
            </div>
          </div>

          {loading && (
            <div className="notice">Loading products…</div>
          )}

          {error && (
            <div className="error">Could not load products. Showing demo catalog.</div>
          )}

          {!loading && pageItems.length === 0 && (
            <div className="notice">No products match the current filters.</div>
          )}

          <div className="grid">
            {pageItems.map(p => (
              <div className="card" key={p.id}>
                <Link to={`/product/${p.slug}`} className="card-img">
                  <img
                    src={p.images?.[0] || 'https://via.placeholder.com/600x400'}
                    alt={p.name}
                    loading="lazy"
                  />
                </Link>
                <div className="card-body">
                  <div className="meta">
                    <span className="tag">{p.category || 'General'}</span>
                    <span className="price">${Number(p.price).toFixed(2)}</span>
                  </div>
                  <Link to={`/product/${p.slug}`} className="card-title">{p.name}</Link>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        add({
                          productId: p.id,
                          slug: p.slug,
                          name: p.name,
                          price: p.price,
                          image: p.images?.[0],
                        })
                      }
                    >
                      Add to Cart
                    </button>
                    <Link to={`/product/${p.slug}`} className="btn btn-ghost">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="btn btn-ghost"
              disabled={clampedPage <= 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              Prev
            </button>
            <span className="page-info">
              Page {clampedPage} of {totalPages} • {total} items
            </span>
            <button
              className="btn btn-ghost"
              disabled={clampedPage >= totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <style>{`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
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
        .shop-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted);font-size:clamp(15px,2vw,18px)}
        .section{padding:32px 0;border-top:1px solid var(--line)}
        .toolbar{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:flex-end;margin-bottom:16px}
        .toolbar-left,.toolbar-right{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end}
        .field{display:flex;flex-direction:column;gap:6px}
        label{font-size:12px;color:var(--muted)}
        input,select{height:38px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        input[type="number"]{width:120px}
        .field.price .price-row{display:flex;gap:8px;align-items:center}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .notice{border:1px dashed var(--line);background:var(--surface);padding:14px;border-radius:10px;color:var(--muted);margin:8px 0}
        .error{border:1px solid var(--danger);background:rgba(255,93,93,.06);padding:14px;border-radius:10px;color:#ffbcbc;margin:8px 0}
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
        .pagination{display:flex;gap:12px;justify-content:center;align-items:center;margin-top:18px}
        .page-info{color:var(--muted)}
        @media (max-width:1024px){
          .grid{grid-template-columns:repeat(2,1fr)}
        }
        @media (max-width:640px){
          .grid{grid-template-columns:1fr}
          input[type="number"]{width:100px}
        }
      `}</style>
    </>
  )
}
