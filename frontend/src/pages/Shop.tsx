import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from '../lib/cart'
import { animateFlyToCart } from '../lib/flyToCart'

type Product = {
  id: string | number  // Can be MongoDB ObjectId string or number
  name: string
  slug: string
  price: number
  images: string[]
  category?: string
  createdAt?: string // ISO date for newest sorting
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

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
    // Trigger animations after mount
    setMounted(true)
  }, [])

  useEffect(() => {
    let ignore = false
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const r = await axios.get<{items?: Product[]}>('/api/v1/products')
        if (ignore) return
        const items = r.data?.items
        if (items && items.length) {
          setProducts(items)
        } else {
          setProducts([])
        }
      } catch (ex) {
        if (!ignore) setProducts([])
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
      {/* Animated Background */}
      <div className="page-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
        <div className="floating-icons">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-icon" style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"/>
                <line x1="7" y1="7" x2="7" y2="7"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      <section className={`shop-hero ${mounted ? 'animate-in' : ''}`}>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Shop Collection
            </div>
            <p className="kicker">Shop</p>
            <h1 className="headline">Find the next daily favorite</h1>
            <p className="subhead">Browse curated essentials across apparel, accessories, and more.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{products.length}+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">{categories.length - 1}</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`toolbar ${mounted ? 'animate-in' : ''}`}>
            <div className="toolbar-left">
              <div className="field">
                <label htmlFor="search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  Search
                </label>
                <input
                  id="search"
                  type="search"
                  placeholder="Search products"
                  value={q}
                  onChange={e => { setQ(e.target.value); setPage(1) }}
                />
              </div>
              <div className="field">
                <label htmlFor="category">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  Category
                </label>
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
                <label>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Price Range
                </label>
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
                <label htmlFor="sort">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="6" x2="16" y2="6"/>
                    <line x1="4" y1="12" x2="13" y2="12"/>
                    <line x1="4" y1="18" x2="11" y2="18"/>
                  </svg>
                  Sort By
                </label>
                <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A–Z</option>
                  <option value="name-desc">Name: Z–A</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="perPage">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  Per Page
                </label>
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
              <button className="btn btn-clear" onClick={clearFilters}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Clear Filters
              </button>
            </div>
          </div>

          {loading && (
            <div className="notice loading">
              <svg className="spinner" width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
              </svg>
              Loading products…
            </div>
          )}

          {error && (
            <div className="error">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Could not load products. Showing demo catalog.
            </div>
          )}

          {!loading && pageItems.length === 0 && (
            <div className="notice empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>No products match the current filters.</p>
              <button className="btn btn-primary" onClick={clearFilters}>Clear All Filters</button>
            </div>
          )}

          <div className={`grid ${mounted ? 'animate-in' : ''}`}>
            {pageItems.map((p, index) => (
              <div 
                className="card" 
                key={p.id}
                style={{
                  animationDelay: `${0.1 + (index * 0.05)}s`
                }}
              >
                <Link to={`/product/${p.slug}`} className="card-img">
                  <img
                    src={p.images?.[0] || 'https://via.placeholder.com/600x400'}
                    alt={p.name}
                    loading="lazy"
                  />
                  <div className="card-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </Link>
                <div className="card-body">
                  <div className="meta">
                    <span className="tag">{p.category || 'General'}</span>
                    <span className="price">LKR {Number(p.price).toFixed(2)}</span>
                  </div>
                  <Link to={`/product/${p.slug}`} className="card-title">{p.name}</Link>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        const card = (e.currentTarget as HTMLElement).closest('.card') as HTMLElement | null
                        const img = card?.querySelector('img') as HTMLImageElement | null
                        if (img) animateFlyToCart(img)
                        add({
                          productId: p.id,
                          slug: p.slug,
                          name: p.name,
                          price: p.price,
                          image: p.images?.[0],
                        })
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                      Add to Cart
                    </button>
                    <Link to={`/product/${p.slug}`} className="btn btn-ghost">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {total > 0 && (
            <div className={`pagination ${mounted ? 'animate-in' : ''}`}>
              <button
                className="btn btn-ghost"
                disabled={clampedPage <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Previous
              </button>
              <span className="page-info">
                Page <strong>{clampedPage}</strong> of <strong>{totalPages}</strong> • {total} items
              </span>
              <button
                className="btn btn-ghost"
                disabled={clampedPage >= totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          )}
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
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
          --warning:#ffb020;
          --danger:#ff5d5d;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1fbf75 0%, #06d6a0 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-icon {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: iconFloat 10s ease-in-out infinite;
        }
        
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .shop-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .shop-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .toolbar {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .toolbar.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .grid {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.3s;
        }
        
        .grid.animate-in {
          opacity: 1;
        }
        
        .grid.animate-in .card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          animation: cardSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .pagination {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.5s;
        }
        
        .pagination.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .shop-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-inner{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:24px;
        }
        
        .hero-content {
          max-width: 600px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(31, 191, 117, 0.1);
          border: 1px solid rgba(31, 191, 117, 0.3);
          border-radius: 20px;
          color: var(--positive);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(31, 191, 117, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(31, 191, 117, 0.5);
          }
        }
        
        .kicker{
          letter-spacing:.2em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 12px;
          font-size: 14px;
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size:clamp(16px,2vw,18px);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .hero-stats {
          display: flex;
          gap: 32px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--brand) 0%, var(--positive) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 13px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           SECTION & TOOLBAR
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .toolbar{
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          justify-content:space-between;
          align-items:flex-end;
          margin-bottom:32px;
          padding: 24px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
        
        .toolbar-left,.toolbar-right{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          align-items:flex-end;
        }
        
        .field{
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        
        label{
          font-size:13px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input,select{
          height:44px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:10px;
          color:var(--text);
          padding:0 14px;
          font-size: 14px;
          transition: all 0.3s;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        input[type="number"]{
          width:120px;
        }
        
        .field.price .price-row{
          display:flex;
          gap:8px;
          align-items:center;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:10px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-ghost:hover {
          background: rgba(35, 36, 52, 0.9);
        }
        
        .btn-clear {
          background: rgba(255, 93, 93, 0.1);
          border-color: rgba(255, 93, 93, 0.3);
          color: var(--danger);
        }
        
        .btn-clear:hover {
          background: rgba(255, 93, 93, 0.2);
          border-color: var(--danger);
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        
        /* ========================================
           NOTICES
           ======================================== */
        
        .notice{
          border:1px solid rgba(109, 116, 255, 0.3);
          background: rgba(109, 116, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding:20px;
          border-radius:12px;
          color:var(--muted);
          margin:24px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .notice.loading {
          color: var(--brand);
        }
        
        .notice.empty {
          flex-direction: column;
          padding: 60px 20px;
          color: var(--muted);
        }
        
        .notice.empty svg {
          opacity: 0.3;
          margin-bottom: 12px;
        }
        
        .notice.empty p {
          margin: 0 0 16px 0;
          font-size: 16px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .error{
          border:1px solid rgba(255, 93, 93, 0.5);
          background: rgba(255, 93, 93, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding:16px 20px;
          border-radius:12px;
          color:#ffbcbc;
          margin:24px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        /* ========================================
           PRODUCT GRID
           ======================================== */
        
        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        .card{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:16px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          transition: all 0.3s;
          position: relative;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .card-img{
          display:block;
          aspect-ratio:4/3;
          background:var(--surface);
          border-bottom:1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .card-img img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition: transform 0.5s;
        }
        
        .card:hover .card-img img {
          transform: scale(1.1);
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .card:hover .card-overlay {
          opacity: 1;
        }
        
        .view-details {
          color: white;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 20px;
          background: rgba(109, 116, 255, 0.9);
          border-radius: 8px;
        }
        
        .card-body{
          padding:20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .meta{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px;
        }
        
        .tag{
          font-size:12px;
          color:var(--muted);
          padding:4px 12px;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:999px;
          background:rgba(35, 36, 52, 0.6);
          font-weight: 600;
        }
        
        .price{
          font-weight:700;
          font-size: 16px;
          color: var(--positive);
        }
        
        .card-title{
          display:inline-block;
          margin-top:4px;
          color:var(--text);
          text-decoration:none;
          font-weight:600;
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: auto;
        }
        
        .card-title:hover{
          color: var(--brand);
        }
        
        .card-actions{
          display:flex;
          gap:10px;
          margin-top:16px;
        }
        
        /* ========================================
           PAGINATION
           ======================================== */
        
        .pagination{
          display:flex;
          gap:16px;
          justify-content:center;
          align-items:center;
          margin-top:48px;
          padding: 20px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        
        .page-info{
          color:var(--muted);
          font-size: 14px;
        }
        
        .page-info strong {
          color: var(--brand);
          font-weight: 700;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:1024px){
          .grid{
            grid-template-columns:repeat(2,1fr);
          }
        }
        
        @media (max-width:768px){
          .hero-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .headline {
            font-size: 32px;
          }
          
          .toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          
          .toolbar-left, .toolbar-right {
            width: 100%;
            flex-direction: column;
          }
          
          .field {
            width: 100%;
          }
          
          input[type="number"] {
            width: 100%;
          }
        }
        
        @media (max-width:640px){
          .grid{
            grid-template-columns:1fr;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 16px;
          }
          
          .card-actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
