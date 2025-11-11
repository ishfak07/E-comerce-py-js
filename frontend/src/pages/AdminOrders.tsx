import { useEffect, useMemo, useRef, useState } from 'react'
import { api } from '../lib/api'

type OrderStatus = 
  | 'pending_verification' 
  | 'payment_verified' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled'

type Order = {
  id: string
  status: OrderStatus | string
  total_amount: number
  customer_name?: string
  customer_phone?: string
  customer_email?: string
  shipping_address?: {
    line1: string
    city: string
    postal_code: string
    country: string
  }
  selected_bank?: string
  transfer_receipt_url?: string
  transaction_reference?: string
  additional_notes?: string
  created_at?: string
  payment_status?: string
}

type OrdersResponse = {
  items: Order[]
  total: number
  page: number
  size: number
}

type ApiError = {
  response?: { status?: number; data?: any }
  message?: string
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [page, setPage] = useState(1)
  const [size] = useState(10)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Keep latest page in a ref to avoid stale value inside interval callback
  const pageRef = useRef(page)
  useEffect(() => {
    pageRef.current = page
  }, [page])

  // Fetch a page (with cancellation)
  async function fetchPage(p: number) {
    setLoading(true)
    setError(null)
    const controller = new AbortController()
    try {
      const res = await api.get<OrdersResponse>('/admin/orders', {
        params: { page: p, size },
        signal: controller.signal,
      })
      const data = res.data
      setOrders(Array.isArray(data.items) ? data.items : [])
      setTotal(Number.isFinite(data.total) ? data.total : 0)
      // Trust backend page echo if present, else keep requested page
      setPage(Number.isFinite(data.page) ? data.page : p)
    } catch (err) {
      const e = err as ApiError
      const status = e?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      // Ignore abort errors silently
      setError('Failed to fetch orders')
      // Keep previous data on error
      // console.error('Failed to fetch orders', err)
    } finally {
      setLoading(false)
    }
    // Return aborter for external cancellation when needed
    return () => controller.abort()
  }

  // Initial load
  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    ;(async () => {
      try {
        const res = await api.get<OrdersResponse>('/admin/orders', {
          params: { page: 1, size },
          signal: controller.signal,
        })
        if (cancelled) return
        setOrders(Array.isArray(res.data.items) ? res.data.items : [])
        setTotal(Number.isFinite(res.data.total) ? res.data.total : 0)
        setPage(Number.isFinite(res.data.page) ? res.data.page : 1)
        setError(null)
      } catch (err) {
        if (cancelled) return
        const e = err as ApiError
        const status = e?.response?.status
        if (status === 401) {
          try { window.location.href = '/login' } catch {}
          return
        }
        setError('Failed to fetch orders')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Poll every 5s without stale closure
  useEffect(() => {
    const id = window.setInterval(() => {
      const currentPage = pageRef.current
      fetchPage(currentPage)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  // Fetch when page changes (user pagination)
  useEffect(() => {
    // Skip immediate refetch on very first mount (already fetched)
    if (page <= 0) return
    fetchPage(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const pages = useMemo(() => {
    return Math.max(1, Math.ceil((total || 0) / size))
  }, [total, size])

  function formatMoney(n: number) {
    const v = Number.isFinite(n) ? n : 0
    return `LKR ${v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  async function setStatus(orderId: string, status: OrderStatus | string) {
    try {
      await api.put(`/admin/orders/${orderId}/status`, {
        new_status: status,
        admin_feedback: null,
        resubmit_required: false,
        estimated_delivery_date: null
      })
      // Refresh current page to reflect the change
      await fetchPage(pageRef.current)
    } catch (err) {
      const e = err as ApiError
      const s = e?.response?.status
      if (s === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      console.error('Failed to update status', err)
      alert('Failed to update status. Please try again.')
    }
  }

  const canPrev = page > 1
  const canNext = page < pages

  // Get status badge styling
  function getStatusBadge(status: string) {
    const configs: Record<string, { bg: string; color: string; icon: string; label: string }> = {
      pending_verification: { bg: '#fff4e5', color: '#d97706', icon: '⏳', label: 'Pending Verification' },
      payment_verified: { bg: '#dbeafe', color: '#2563eb', icon: '✓', label: 'Payment Verified' },
      processing: { bg: '#fef3c7', color: '#f59e0b', icon: '⚙️', label: 'Processing' },
      shipped: { bg: '#e0e7ff', color: '#6366f1', icon: '🚚', label: 'Shipped' },
      delivered: { bg: '#d1fae5', color: '#10b981', icon: '✓', label: 'Delivered' },
      cancelled: { bg: '#fee2e2', color: '#ef4444', icon: '✕', label: 'Cancelled' }
    }
    return configs[status] || { bg: '#f3f4f6', color: '#6b7280', icon: '?', label: status }
  }

  return (
    <div className="orders-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            <div className="title-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
              </svg>
            </div>
            Order Management
          </h1>
          <p className="page-subtitle">Track and manage customer orders in real-time</p>
        </div>
        <div className="header-badge">
          <div className="live-indicator"></div>
          <span>Auto-refresh: 5s</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card-modern total">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Total Orders</div>
            <div className="stat-value-modern">{total}</div>
          </div>
        </div>

        <div className="stat-card-modern pending">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Pending</div>
            <div className="stat-value-modern">{orders.filter(o => o.status === 'pending_verification').length}</div>
          </div>
        </div>

        <div className="stat-card-modern verified">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Verified</div>
            <div className="stat-value-modern">{orders.filter(o => o.status === 'payment_verified').length}</div>
          </div>
        </div>

        <div className="stat-card-modern processing">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Processing</div>
            <div className="stat-value-modern">{orders.filter(o => o.status === 'processing').length}</div>
          </div>
        </div>

        <div className="stat-card-modern delivered">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Delivered</div>
            <div className="stat-value-modern">{orders.filter(o => o.status === 'delivered').length}</div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Orders Card */}
      <div className="card-modern">
        <div className="card-header-orders">
          <div>
            <h2 className="card-title-orders">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
              </svg>
              All Orders
            </h2>
            <p className="card-subtitle-orders">Manage and track order status</p>
          </div>
          <button className="btn-refresh" onClick={() => fetchPage(1)} disabled={loading} type="button">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className={loading ? 'spinner' : ''}>
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
            </svg>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {/* Loading State */}
        {loading && orders.length === 0 && (
          <div className="loading-state">
            <div className="loading-spinner-modern">
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
            </div>
            <p>Loading orders...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && orders.length === 0 && (
          <div className="empty-state-large">
            <svg width="80" height="80" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
            </svg>
            <h3>No Orders Yet</h3>
            <p>Orders will appear here when customers make purchases</p>
          </div>
        )}

        {/* Orders List */}
        {orders.length > 0 && (
          <div className="orders-list">
            {orders.map((o) => {
              const statusConfig = getStatusBadge(o.status)
              return (
                <div key={o.id} className="order-card">
                  {/* Order Header */}
                  <div className="order-header">
                    <div className="order-id-section">
                      <div className="order-id-badge">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="order-number">Order #{o.id.substring(0, 8)}</h3>
                        <p className="order-date">
                          {o.created_at ? new Date(o.created_at).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          }) : 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className="order-amount">{formatMoney(o.total_amount)}</div>
                  </div>

                  {/* Order Content - 2 Columns */}
                  <div className="order-content">
                    {/* Left Column - Customer Info */}
                    <div className="order-section">
                      <h4 className="section-title-order">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                        Customer Information
                      </h4>
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">Name:</span>
                          <span className="info-value">{o.customer_name || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Phone:</span>
                          <span className="info-value">{o.customer_phone || 'N/A'}</span>
                        </div>
                        {o.customer_email && (
                          <div className="info-item">
                            <span className="info-label">Email:</span>
                            <span className="info-value">{o.customer_email}</span>
                          </div>
                        )}
                      </div>

                      <h4 className="section-title-order" style={{ marginTop: '20px' }}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                        </svg>
                        Delivery Address
                      </h4>
                      <div className="address-box">
                        {o.shipping_address ? (
                          <>
                            <div>{o.shipping_address.line1}</div>
                            <div>{o.shipping_address.city}, {o.shipping_address.postal_code}</div>
                            <div>{o.shipping_address.country}</div>
                          </>
                        ) : (
                          <div className="text-muted">No address provided</div>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Payment Info */}
                    <div className="order-section">
                      <h4 className="section-title-order">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                        </svg>
                        Payment Information
                      </h4>
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">Bank:</span>
                          <span className="info-value">{o.selected_bank || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Status:</span>
                          <span className="info-value">{o.payment_status || 'N/A'}</span>
                        </div>
                        {o.transaction_reference && (
                          <div className="info-item">
                            <span className="info-label">Reference:</span>
                            <span className="info-value">{o.transaction_reference}</span>
                          </div>
                        )}
                      </div>

                      {o.transfer_receipt_url && (
                        <>
                          <h4 className="section-title-order" style={{ marginTop: '20px' }}>
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                            </svg>
                            Transfer Receipt
                          </h4>
                          <a 
                            href={o.transfer_receipt_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="receipt-link"
                          >
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                            </svg>
                            View Receipt
                          </a>
                        </>
                      )}

                      {o.additional_notes && (
                        <>
                          <h4 className="section-title-order" style={{ marginTop: '20px' }}>
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                            </svg>
                            Notes
                          </h4>
                          <div className="notes-box">{o.additional_notes}</div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="order-footer">
                    <div className="status-badge-order" style={{ 
                      backgroundColor: statusConfig.bg,
                      color: statusConfig.color
                    }}>
                      <span className="status-icon">{statusConfig.icon}</span>
                      {statusConfig.label}
                    </div>

                    <select
                      onChange={(e) => setStatus(o.id, e.target.value)}
                      value={o.status}
                      className="status-select"
                    >
                      <option value="pending_verification">⏳ Pending Verification</option>
                      <option value="payment_verified">✓ Payment Verified</option>
                      <option value="processing">⚙️ Processing</option>
                      <option value="shipped">🚚 Shipped</option>
                      <option value="delivered">✓ Delivered</option>
                      <option value="cancelled">✕ Cancelled</option>
                    </select>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Pagination */}
        {orders.length > 0 && (
          <div className="pagination-footer">
            <div className="pagination-info">
              Showing <strong>page {page}</strong> of <strong>{pages}</strong> — <strong>{total}</strong> total orders
            </div>
            <div className="pagination-controls">
              <button
                className="btn-page"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!canPrev}
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
                </svg>
                Previous
              </button>
              <div className="page-indicator">
                <span>{page}</span>
              </div>
              <button
                className="btn-page"
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={!canNext}
                type="button"
              >
                Next
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .orders-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          flex: 1;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        .header-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 10px 18px;
          border-radius: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.1);
        }
        
        .live-indicator {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        /* Statistics Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card-modern {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card-modern:hover::before {
          opacity: 1;
        }
        
        .stat-card-modern.total { color: #667eea; }
        .stat-card-modern.pending { color: #f59e0b; }
        .stat-card-modern.verified { color: #3b82f6; }
        .stat-card-modern.processing { color: #8b5cf6; }
        .stat-card-modern.delivered { color: #10b981; }
        
        .stat-icon-modern {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .stat-card-modern.total .stat-icon-modern {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card-modern.pending .stat-icon-modern {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-card-modern.verified .stat-icon-modern {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        .stat-card-modern.processing .stat-icon-modern {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }
        
        .stat-card-modern.delivered .stat-icon-modern {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card-modern:hover .stat-icon-modern {
          transform: scale(1.1) rotate(5deg);
        }
        
        .stat-content-modern {
          flex: 1;
        }
        
        .stat-label-modern {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .stat-value-modern {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header-orders {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title-orders {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle-orders {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        
        .btn-refresh {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        
        /* Empty State */
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
        }
        
        /* Orders List */
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px;
        }
        
        .order-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 24px;
          background: white;
          transition: all 0.3s;
        }
        
        .order-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 2px solid #f1f5f9;
          margin-bottom: 20px;
        }
        
        .order-id-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .order-id-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .order-number {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }
        
        .order-date {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }
        
        .order-amount {
          font-size: 24px;
          font-weight: 700;
          color: #667eea;
        }
        
        .order-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 20px;
        }
        
        .order-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .section-title-order {
          font-size: 14px;
          font-weight: 700;
          color: #374151;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .info-item {
          display: flex;
          gap: 8px;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .info-label {
          font-weight: 600;
          color: #64748b;
          min-width: 80px;
        }
        
        .info-value {
          color: #0f172a;
        }
        
        .address-box {
          background: #f8fafc;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          line-height: 1.8;
          color: #0f172a;
          border: 1px solid #e5e7eb;
        }
        
        .notes-box {
          background: #fef3c7;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          color: #92400e;
          font-style: italic;
          border: 1px solid #fbbf24;
        }
        
        .text-muted {
          color: #94a3b8;
          font-style: italic;
        }
        
        .receipt-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .receipt-link:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
          gap: 16px;
        }
        
        .status-badge-order {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          text-transform: capitalize;
        }
        
        .status-icon {
          font-size: 16px;
        }
        
        .status-select {
          padding: 10px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
        }
        
        .status-select:hover {
          border-color: #667eea;
        }
        
        .status-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        /* Pagination */
        .pagination-footer {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .pagination-info {
          font-size: 14px;
          color: #64748b;
        }
        
        .pagination-info strong {
          color: #0f172a;
          font-weight: 700;
        }
        
        .pagination-controls {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .btn-page {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-page:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #667eea;
          color: #667eea;
        }
        
        .btn-page:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-indicator {
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 16px;
          min-width: 56px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .order-content {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .orders-page {
            padding: 16px;
          }
          
          .page-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .header-badge {
            align-self: flex-start;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .stat-card-modern {
            padding: 20px;
          }
          
          .stat-value-modern {
            font-size: 28px;
          }
          
          .orders-list {
            padding: 16px;
            gap: 16px;
          }
          
          .order-card {
            padding: 20px;
          }
          
          .order-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .order-amount {
            font-size: 20px;
          }
          
          .order-footer {
            flex-direction: column;
            gap: 12px;
          }
          
          .status-select {
            width: 100%;
          }
          
          .pagination-footer {
            flex-direction: column;
            gap: 16px;
          }
          
          .card-header-orders {
            flex-direction: column;
            gap: 16px;
          }
          
          .btn-refresh {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .order-id-badge {
            width: 40px;
            height: 40px;
          }
          
          .order-number {
            font-size: 16px;
          }
          
          .stat-icon-modern {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  )
}
