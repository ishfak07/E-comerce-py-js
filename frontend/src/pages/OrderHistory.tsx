import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function OrderHistory() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [unauth, setUnauth] = useState(false)

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get('/orders/history', { params: { status_filter: filter } })
      setOrders(res.data.orders || [])
    } catch (err) {
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

  // Removed auto-refresh - now manual only via refresh button

  function formatDate(dateString) {
    if (!dateString) return 'N/A'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    } catch {
      return 'N/A'
    }
  }

  function formatMoney(amount) {
    if (!amount) return 'LKR 0.00'
    return `LKR ${amount.toFixed(2)}`
  }

  function getStatusColor(status) {
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

  function getProgressPercentage(status) {
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

  async function handleReorder(orderId) {
    try {
      await api.post(`/orders/${orderId}/reorder`)
      alert('Items added to cart!')
      navigate('/cart')
    } catch (err) {
      alert(err.response?.data?.detail || 'Failed to reorder')
    }
  }

  async function handleDownloadInvoice(orderId: string) {
    try {
      // Use api instance which includes auth headers
      const response = await api.get(`/orders/${orderId}/invoice`, {
        responseType: 'blob' // Important: tell axios to expect binary data
      })
      
      // Create a blob URL and trigger download
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Invoice_${orderId.slice(-8)}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Invoice download error:', err)
      alert(err.response?.data?.detail || 'Failed to download invoice. Please try again.')
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
                        className="btn btn-ghost"
                      >
                        📄 Invoice
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
      `}</style> 
    </> 
  )
}    
 