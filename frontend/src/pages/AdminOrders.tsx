import { useEffect, useMemo, useRef, useState } from 'react'
import { api } from '../lib/api'

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled'

type Order = {
  id: number
  status: OrderStatus | string
  total_amount: number
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
    return `LKR ${v.toFixed(2)}`
  }

  async function setStatus(orderId: number, status: OrderStatus | string) {
    try {
      await api.put(`/admin/orders/${orderId}/status`, null, { params: { new_status: status } })
      // Refresh current page to reflect the change
      await fetchPage(pageRef.current)
    } catch (err) {
      const e = err as ApiError
      const s = e?.response?.status
      if (s === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      // console.error('Failed to update status', err)
      setError('Failed to update status')
    }
  }

  const canPrev = page > 1
  const canNext = page < pages

  return (
    <div className="orders-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            Order Management
          </h1>
          <p className="page-subtitle">View and manage customer orders</p>
        </div>

        {/* Statistics Cards */}
        <div className="page-header-stats">
          <div className="stat-card">
            <div className="stat-value">{total}</div>
            <div className="stat-label">Total Orders</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{orders.filter(o => o.status === 'pending').length}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{orders.filter(o => o.status === 'processing').length}</div>
            <div className="stat-label">Processing</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{orders.filter(o => o.status === 'delivered').length}</div>
            <div className="stat-label">Delivered</div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      )}

      {/* Orders Card */}
      <div className="card-modern">
        <div className="card-header">
          <h2 className="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M21 10H7"></path>
              <path d="M21 6H3"></path>
              <path d="M21 14H3"></path>
              <path d="M21 18H7"></path>
            </svg>
            All Orders
            <span className="badge-count">{total}</span>
          </h2>
          <button className="btn-refresh" onClick={() => fetchPage(1)} disabled={loading} type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={loading ? 'spinner' : ''}>
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {/* Loading State */}
        {loading && orders.length === 0 && (
          <div className="loading-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spinner">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            <p>Loading orders...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && orders.length === 0 && (
          <div className="empty-state-large">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <h3>No Orders Yet</h3>
            <p>Orders will appear here when customers make purchases</p>
          </div>
        )}

        {/* Orders Grid */}
        {orders.length > 0 && (
          <div className="orders-table">
            <div className="table-header-orders">
              <div className="th-order">Order</div>
              <div className="th-status">Status</div>
              <div className="th-total">Total</div>
              <div className="th-actions-orders">Actions</div>
            </div>
            {orders.map((o) => (
              <div key={o.id} className="table-row-orders">
                <div className="td-order">
                  <div className="order-cell">
                    <div className="order-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                    </div>
                    <div className="order-info">
                      <div className="order-number">Order #{o.id}</div>
                      <div className="order-id">ID: {o.id}</div>
                    </div>
                  </div>
                </div>
                <div className="td-status">
                  <span className={`status-badge status-${o.status}`}>
                    {o.status === 'pending' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    )}
                    {o.status === 'processing' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                    )}
                    {o.status === 'shipped' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    )}
                    {o.status === 'delivered' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    )}
                    {o.status === 'canceled' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                    )}
                    {o.status}
                  </span>
                </div>
                <div className="td-total">
                  <div className="amount-display">{formatMoney(o.total_amount)}</div>
                </div>
                <div className="td-actions-orders">
                  <div className="action-buttons">
                    {o.status !== 'processing' && (
                      <button
                        className="btn-action btn-processing"
                        onClick={() => setStatus(o.id, 'processing')}
                        type="button"
                        title="Mark as Processing"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                      </button>
                    )}
                    {o.status !== 'shipped' && (
                      <button
                        className="btn-action btn-shipped"
                        onClick={() => setStatus(o.id, 'shipped')}
                        type="button"
                        title="Mark as Shipped"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="3" width="15" height="13"></rect>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                          <circle cx="5.5" cy="18.5" r="2.5"></circle>
                          <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                      </button>
                    )}
                    {o.status !== 'delivered' && (
                      <button
                        className="btn-action btn-delivered"
                        onClick={() => setStatus(o.id, 'delivered')}
                        type="button"
                        title="Mark as Delivered"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {orders.length > 0 && (
          <div className="pagination-footer">
            <div className="pagination-info">
              Showing page <strong>{page}</strong> of <strong>{pages}</strong> — <strong>{total}</strong> total orders
            </div>
            <div className="pagination-controls">
              <button
                className="btn-page"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!canPrev}
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Previous
              </button>
              <div className="page-number">
                <span>{page}</span>
              </div>
              <button
                className="btn-page"
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={!canNext}
                type="button"
              >
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Page Layout */
        .orders-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
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
          transition: all 0.2s;
        }
        
        .btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Orders Table */
        .orders-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-orders {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 180px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row-orders {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 180px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row-orders:hover {
          background: #f7fafc;
        }
        
        .td-order, .td-status, .td-total, .td-actions-orders {
          display: flex;
          align-items: center;
        }
        
        .order-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .order-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .order-info {
          display: flex;
          flex-direction: column;
        }
        
        .order-number {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .order-id {
          font-size: 12px;
          color: #a0aec0;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .status-badge.status-pending {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .status-badge.status-processing {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .status-badge.status-shipped {
          background: rgba(139, 92, 246, 0.1);
          color: #7c3aed;
        }
        
        .status-badge.status-delivered {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.status-canceled {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .amount-display {
          font-weight: 700;
          color: #059669;
          font-size: 16px;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-processing {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .btn-processing:hover:not(:disabled) {
          background: #2563eb;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-shipped {
          background: rgba(139, 92, 246, 0.1);
          color: #7c3aed;
        }
        
        .btn-shipped:hover:not(:disabled) {
          background: #7c3aed;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-delivered {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .btn-delivered:hover:not(:disabled) {
          background: #059669;
          color: white;
          transform: scale(1.05);
        }
        
        /* Pagination */
        .pagination-footer {
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .pagination-info {
          font-size: 14px;
          color: #718096;
        }
        
        .pagination-info strong {
          color: #2d3748;
          font-weight: 600;
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
          padding: 8px 16px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-page:hover:not(:disabled) {
          background: #f7fafc;
          border-color: #667eea;
          color: #667eea;
        }
        
        .btn-page:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-number {
          padding: 8px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          min-width: 48px;
          text-align: center;
        }
        
        @media (max-width: 900px) {
          .table-header-orders, .table-row-orders {
            grid-template-columns: 2fr 1fr 140px;
          }
          .th-total, .td-total {
            display: none;
          }
          .pagination-footer {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  )
}
