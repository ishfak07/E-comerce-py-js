import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthProvider'

export default function OrderHistory() {
  const navigate = useNavigate()
  const { user } = useAuth()
  type Order = {
    id: string
    created_at?: string
    total_amount?: number
    tracking_status?: 'placed' | 'verified' | 'processing' | 'shipped' | 'delivered' | 'rejected' | 'cancelled' | string
    payment_status?: 'pending' | 'verified' | 'failed' | string
  }
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')
  const [unauth, setUnauth] = useState(false)
  const [downloadingId, setDownloadingId] = useState<string | null>(null)
  const [showAdminBlock, setShowAdminBlock] = useState(false)

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get('/orders/history', { params: { status_filter: filter } })
      setOrders(res.data.orders || [])
    } catch (err: any) {
      const status = err?.response?.status
      if (status === 401) {
        setUnauth(true)
        setError('Not authenticated')
      } else {
        setError(err.response?.data?.detail || 'Failed to load orders')
      }
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => { fetchOrders() }, [fetchOrders])

  // Block Admin access
  useEffect(() => {
    if (user?.is_staff || user?.is_superuser) {
      setShowAdminBlock(true)
      setTimeout(() => navigate('/'), 3000)
    }
  }, [user, navigate])

  // Removed auto-refresh - now manual only via refresh button

  if (showAdminBlock) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        animation: 'fadeIn 0.3s ease-out'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          padding: '3rem',
          borderRadius: '24px',
          maxWidth: '500px',
          width: '90%',
          boxShadow: '0 20px 60px rgba(250, 112, 154, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
          animation: 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}>
            {[...Array(15)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }} />)
            )}
          </div>
          
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" style={{
                animation: 'shake 0.5s ease-in-out'
              }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
              </svg>
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '1.75rem',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>Order History Restricted</h2>
            <p style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.1rem',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Admin accounts cannot view customer order history. Manage orders from the Admin Dashboard.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              opacity: 0.8
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              Redirecting to home...
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    )
  }

  function formatDate(dateString?: string) {
    if (!dateString) return 'N/A'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    } catch {
      return 'N/A'
    }
  }

  function formatMoney(amount?: number) {
    if (!amount) return 'LKR 0.00'
    return `LKR ${amount.toFixed(2)}`
  }

  function getStatusColor(status?: string) {
    switch (status) {
      case 'placed': return '#d97706'
      case 'verified': return '#0284c7'
      case 'processing': return '#ea580c'
      case 'shipped': return '#2563eb'
      case 'delivered': return '#16a34a'
      case 'rejected': return '#dc2626'
      case 'cancelled': return '#9ca3af'
      default: return '#6D74FF'
    }
  }

  function getProgressPercentage(status?: string) {
    switch (status) {
      case 'placed': return 20
      case 'verified': return 40
      case 'processing': return 60
      case 'shipped': return 80
      case 'delivered': return 100
      default: return 0
    }
  }

  function getFilterLabel(key: string): string {
    switch (key) {
      case 'all': return 'All'
      case 'pending': return 'In Progress'
      case 'completed': return 'Completed'
      case 'cancelled': return 'Cancelled'
      default: return key.charAt(0).toUpperCase() + key.slice(1)
    }
  }

  async function handleReorder(orderId: string) {
    try {
      await api.post(`/orders/${orderId}/reorder`)
      alert('Items added to cart!')
      navigate('/cart')
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to reorder')
    }
  }

  async function handleDownloadInvoice(orderId: string) {
    // set UI feedback
    setDownloadingId(orderId)
    // Most robust approach: trigger a file download via a hidden iframe using a tokenized URL.
    // This avoids XHR/fetch blob issues and pop-up blockers.
    const token = localStorage.getItem('access_token') || ''
    if (!token) {
      alert('Not authenticated')
      return
    }

    const url = `/api/v1/orders/${orderId}/invoice?token=${encodeURIComponent(token)}`

    try {
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = url
      document.body.appendChild(iframe)

      // Remove downloading state when iframe loads (best-effort)
      const onLoad = () => {
        setDownloadingId(null)
        try { iframe.removeEventListener('load', onLoad) } catch {}
      }
      try { iframe.addEventListener('load', onLoad) } catch {}

      // Best-effort cleanup after a few seconds
      setTimeout(() => {
        try { document.body.removeChild(iframe) } catch {}
        setDownloadingId(null)
      }, 10000)
    } catch (err) {
      console.error('Invoice download error:', err)
      // Final fallback: navigate current tab
      try { window.location.href = url } catch {}
      setDownloadingId(null)
    }
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h1 className="section-title">📦 Order History</h1>
              <p className="lead">Track your orders and manage your purchase history.</p>
            </div>
            
            {/* Manual Refresh Button */}
            <button
              onClick={() => fetchOrders()}
              disabled={loading}
              style={{
                padding: '12px 24px',
                background: loading ? '#ccc' : '#6D74FF',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(109, 116, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#5a61d6'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(109, 116, 255, 0.4)'
                }
              }}
              onMouseOut={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#6D74FF'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(109, 116, 255, 0.3)'
                }
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{
                  animation: loading ? 'spin 1s linear infinite' : 'none'
                }}
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {/* Filters */}
          <div className="order-filters">
            {['all','pending','completed','cancelled'].map((key) => (
              <button
                key={key}
                className={`btn ${filter === key ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setFilter(key)}
              >
                {getFilterLabel(key)}
              </button>
            ))}
          </div>
          
          {/* Add CSS for spin animation */}
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>

          {/* Messages */}
          {error && <div className="alert error">{error}</div>}
          {unauth && (
            <div className="alert warning">
              <button onClick={() => navigate('/login?next=/orders')} className="btn btn-primary">
                Go to Login
              </button>
            </div>
          )}

          {/* Loading */}
          {loading && <div className="loading">Loading orders...</div>}

          {/* No Orders */}
          {!loading && orders.length === 0 && (
            <div className="empty-state">
              <div>📭</div>
              <h3>No Orders Found</h3>
              <p>{filter === 'all' ? 'You haven’t placed any orders yet.' : `No ${getFilterLabel(filter)} orders found.`}</p>
              <button onClick={() => navigate('/shop')} className="btn btn-primary">Start Shopping</button>
            </div>
          )}

          {/* Orders List */}
          {!loading && orders.length > 0 && (
            <div className="order-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <h3>Order #{order.id.slice(-8)}</h3>
                      <p>{formatDate(order.created_at)}</p>
                    </div>
                    <div className="order-total">{formatMoney(order.total_amount)}</div>
                  </div>

                  <div className="order-progress">
                    <div className="progress-bar">
                      <div
                        style={{
                          width: `${getProgressPercentage(order.tracking_status)}%`,
                          backgroundColor: getStatusColor(order.tracking_status)
                        }}
                      />
                    </div>
                    <p className="status" style={{ color: getStatusColor(order.tracking_status) }}>
                      {order.tracking_status?.toUpperCase()}
                    </p>
                  </div>

                  <div className="actions">
                    <button onClick={() => navigate(`/orders/${order.id}`)} className="btn btn-primary">View</button>
                    <button onClick={() => handleReorder(order.id)} className="btn btn-ghost">🔁 Reorder</button>
                    {order.payment_status === 'verified' && (
                      <button
                        onClick={() => handleDownloadInvoice(order.id)}
                        className="btn btn-ghost invoice-btn"
                        disabled={downloadingId === order.id}
                        aria-busy={downloadingId === order.id}
                      >
                        {downloadingId === order.id ? (
                          <>
                            <svg className="invoice-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                              <path d="M22 12a10 10 0 0 1-10 10" strokeLinecap="round"></path>
                            </svg>
                            Downloading...
                          </>
                        ) : (
                          <>📄 Invoice</>
                        )}
                      </button>
                    )}
                    {order.tracking_status === 'delivered' && (
                      <button
                        onClick={() => navigate(`/orders/${order.id}/review`)}
                        className="btn btn-ghost"
                      >
                        ⭐ Review
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inline Dark Theme */}
      <style>{`
        .order-filters{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap}
        .order-list{display:flex;flex-direction:column;gap:16px}
        .order-card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px;transition:.2s}
        .order-card:hover{transform:translateY(-2px);border-color:var(--brand)}
        .order-header{display:flex;justify-content:space-between;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:12px}
        .order-header h3{margin:0;font-size:18px}
        .order-header p{color:var(--muted);margin:4px 0 0}
        .order-total{font-size:20px;font-weight:600;color:var(--brand)}
        .progress-bar{height:6px;background:var(--surface-alt);border-radius:4px;overflow:hidden}
        .progress-bar div{height:100%;transition:width .3s ease}
        .status{text-align:right;font-size:13px;font-weight:600;margin-top:8px}
        .loading{text-align:center;padding:32px;color:var(--muted)}
        .empty-state{text-align:center;padding:48px;background:var(--surface-alt);border-radius:12px}
        .empty-state div{font-size:48px;margin-bottom:8px}
        .empty-state h3{font-size:20px;margin:0 0 8px}
        .empty-state p{color:var(--muted);margin-bottom:16px}
        .alert{padding:16px;border-radius:8px;margin-bottom:16px}
        .alert.error{background:#3b0d0d;color:#ffbaba}
        .alert.warning{background:#302b0b;color:#fff1b0;text-align:center}
        .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}
        .invoice-btn[disabled]{opacity:0.7;cursor:not-allowed}
        .invoice-spinner{display:inline-block;margin-right:8px;vertical-align:middle;animation:spinner-rotate 1s linear infinite}
        @keyframes spinner-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      `}</style> 
    </> 
  )
}    
 