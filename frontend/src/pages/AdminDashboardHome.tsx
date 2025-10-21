import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

type Metrics = {
  total_users: number
  total_products: number
  total_orders: number
  total_sales: number
}

type ApiError = {
  response?: {
    status?: number
    data?: { detail?: string; message?: string }
  }
  message?: string
}

export default function AdminDashboardHome() {
  const [data, setData] = useState<Metrics | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let mounted = true
    // Axios cancellation
    const controller = new AbortController()

    ;(async () => {
      try {
        const r = await api.get<Metrics>('/admin/metrics', { signal: controller.signal })
        if (!mounted) return
        setData(r.data)
        setError(null)
      } catch (err) {
        if (!mounted) return
        const e = err as ApiError
        const status = e?.response?.status

        if (status === 401) {
          // redirect to login (hard redirect to clear state if needed)
          try {
            window.location.href = '/login'
          } catch {}
          return
        }

        const serverDetail = e?.response?.data?.detail || e?.response?.data?.message
        setError(serverDetail || 'Failed to load metrics')
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  const safe = useMemo(() => {
    const totals = {
      users: data?.total_users ?? 0,
      products: data?.total_products ?? 0,
      orders: data?.total_orders ?? 0,
      sales: data?.total_sales ?? 0,
    }
    return totals
  }, [data])

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="loading-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spinner">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="dashboard-page">
        <div className="alert-error" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '10px' }}>
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Dashboard Overview
          </h1>
          <p className="page-subtitle">Monitor your e-commerce metrics at a glance</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="metrics-grid" role="region" aria-label="Key performance indicators">
        <div className="metric-card users">
          <div className="metric-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Users</div>
            <div className="metric-value" aria-live="polite">{safe.users.toLocaleString()}</div>
            <div className="metric-subtitle">Registered accounts</div>
          </div>
        </div>

        <div className="metric-card products">
          <div className="metric-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Products</div>
            <div className="metric-value" aria-live="polite">{safe.products.toLocaleString()}</div>
            <div className="metric-subtitle">In catalog</div>
          </div>
        </div>

        <div className="metric-card orders">
          <div className="metric-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Orders</div>
            <div className="metric-value" aria-live="polite">{safe.orders.toLocaleString()}</div>
            <div className="metric-subtitle">All time orders</div>
          </div>
        </div>

        <div className="metric-card sales">
          <div className="metric-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Sales</div>
            <div className="metric-value" aria-live="polite">
              LKR {Number.isFinite(safe.sales) ? safe.sales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
            </div>
            <div className="metric-subtitle">Revenue generated</div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="card-modern welcome-card">
        <div className="welcome-content">
          <div className="welcome-text">
            <h2>Welcome to Your Dashboard!</h2>
            <p>Your e-commerce platform is running smoothly. Monitor key metrics and manage your store efficiently.</p>
          </div>
          <div className="welcome-stats">
            <div className="welcome-stat">
              <span className="stat-number">{((safe.sales / safe.orders) || 0).toFixed(2)}</span>
              <span className="stat-label">Avg Order Value</span>
            </div>
            <div className="welcome-stat">
              <span className="stat-number">{safe.orders > 0 ? ((safe.products / safe.orders) * 100).toFixed(1) : '0'}%</span>
              <span className="stat-label">Conversion Rate</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Page Layout */
        .dashboard-page {
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
        
        /* Loading & Error States */
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
        
        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        
        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        
        .metric-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .metric-card.users .metric-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .metric-card.users:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.products .metric-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .metric-card.products:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.orders .metric-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
        
        .metric-card.orders:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.sales .metric-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: white;
        }
        
        .metric-card.sales:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .metric-label {
          font-size: 13px;
          color: #718096;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          font-size: 32px;
          font-weight: 700;
          color: #1a202c;
          line-height: 1.2;
        }
        
        .metric-subtitle {
          font-size: 12px;
          color: #a0aec0;
        }
        
        /* Welcome Card */
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .welcome-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
        }
        
        .welcome-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }
        
        .welcome-text h2 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
        }
        
        .welcome-text p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.6;
        }
        
        .welcome-stats {
          display: flex;
          gap: 32px;
        }
        
        .welcome-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 20px 32px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: white;
        }
        
        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          font-weight: 500;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .welcome-content {
            grid-template-columns: 1fr;
          }
          
          .welcome-stats {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .metric-card {
            gap: 16px;
          }
          
          .metric-icon {
            width: 56px;
            height: 56px;
          }
          
          .metric-icon svg {
            width: 28px;
            height: 28px;
          }
          
          .metric-value {
            font-size: 28px;
          }
          
          .welcome-stats {
            flex-direction: column;
            gap: 16px;
          }
          
          .welcome-stat {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
