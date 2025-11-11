import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

type Metrics = {
  total_users: number
  total_products: number
  total_orders: number
  total_sales: number
  total_revenue?: number
}

type ApiError = {
  response?: {
    status?: number
    data?: { detail?: string; message?: string }
  }
  message?: string
}

type ChartData = {
  data: Array<{
    date?: string
    month?: string
    orders?: number
    revenue?: number
    registrations?: number
  }>
}

export default function AdminDashboardHome() {
  const [data, setData] = useState<Metrics | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // Chart data states
  const [salesTrends, setSalesTrends] = useState<ChartData | null>(null)
  const [revenueGrowth, setRevenueGrowth] = useState<ChartData | null>(null)
  const [userActivity, setUserActivity] = useState<ChartData | null>(null)

  useEffect(() => {
    let mounted = true
    // Axios cancellation
    const controller = new AbortController()

    ;(async () => {
      try {
        // Fetch main metrics
        const metricsResponse = await api.get<Metrics>('/admin/metrics', { signal: controller.signal })
        if (!mounted) return
        setData(metricsResponse.data)

        // Fetch chart data in parallel
        const [salesResponse, revenueResponse, userResponse] = await Promise.all([
          api.get<ChartData>('/admin/metrics/charts/sales-trends', { signal: controller.signal }),
          api.get<ChartData>('/admin/metrics/charts/revenue-growth', { signal: controller.signal }),
          api.get<ChartData>('/admin/metrics/charts/user-activity', { signal: controller.signal })
        ])

        if (!mounted) return
        setSalesTrends(salesResponse.data)
        setRevenueGrowth(revenueResponse.data)
        setUserActivity(userResponse.data)

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
        setError(serverDetail || 'Failed to load dashboard data')
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  // Polling to refresh dashboard data periodically (every 30 seconds)
  useEffect(() => {
    let mounted = true

    const fetchLatest = async () => {
      try {
        const [metricsResp, salesResp, revenueResp, usersResp] = await Promise.all([
          api.get<Metrics>('/admin/metrics'),
          api.get<ChartData>('/admin/metrics/charts/sales-trends'),
          api.get<ChartData>('/admin/metrics/charts/revenue-growth'),
          api.get<ChartData>('/admin/metrics/charts/user-activity'),
        ])
        if (!mounted) return
        setData(metricsResp.data)
        setSalesTrends(salesResp.data)
        setRevenueGrowth(revenueResp.data)
        setUserActivity(usersResp.data)
      } catch (e) {
        // polling errors should not break the UI; ignore silently
      }
    }

    const id = setInterval(fetchLatest, 30_000)
    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [])

  // Real-time metrics updates via SSE
  useEffect(() => {
    let mounted = true
    let eventSource: EventSource | null = null

    const connectSSE = () => {
      if (!mounted) return

      // Get auth token for SSE
      const token = localStorage.getItem('access_token')
      if (!token) return

      const url = `${window.location.origin}/api/v1/admin/stream-metrics?token=${encodeURIComponent(token)}`
      eventSource = new EventSource(url)

      eventSource.onmessage = (event) => {
        if (!mounted) return
        try {
          const metrics = JSON.parse(event.data)
          if (metrics && typeof metrics === 'object' && !metrics.error) {
            setData(metrics)
          }
        } catch (e) {
          // Ignore parse errors
        }
      }

      eventSource.onerror = () => {
        // On error, close and retry after a delay
        if (eventSource) {
          eventSource.close()
          eventSource = null
        }
        setTimeout(connectSSE, 5000)
      }
    }

    connectSSE()

    return () => {
      mounted = false
      if (eventSource) {
        eventSource.close()
      }
    }
  }, [])

  const safe = useMemo(() => {
    const totals = {
      users: data?.total_users ?? 0,
      products: data?.total_products ?? 0,
      orders: data?.total_orders ?? 0,
      sales: data?.total_sales ?? 0,
      revenue: data?.total_revenue ?? 0,
    }
    return totals
  }, [data])

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="loading-state">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
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
          <span>{error}</span>
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
            <div className="title-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            Dashboard Overview
          </h1>
          <p className="page-subtitle">Real-time insights and analytics for your e-commerce platform</p>
        </div>
        <div className="header-badge">
          <div className="live-indicator"></div>
          <span>Live Data</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="metrics-grid" role="region" aria-label="Key performance indicators">
        <div className="metric-card users">
          <div className="metric-header">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="metric-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Users</div>
            <div className="metric-value" aria-live="polite">{safe.users.toLocaleString()}</div>
            <div className="metric-footer">
              <span className="metric-subtitle">Registered accounts</span>
            </div>
          </div>
        </div>

        <div className="metric-card products">
          <div className="metric-header">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <div className="metric-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Products</div>
            <div className="metric-value" aria-live="polite">{safe.products.toLocaleString()}</div>
            <div className="metric-footer">
              <span className="metric-subtitle">In catalog</span>
            </div>
          </div>
        </div>

        <div className="metric-card orders">
          <div className="metric-header">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <div className="metric-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Orders</div>
            <div className="metric-value" aria-live="polite">{safe.orders.toLocaleString()}</div>
            <div className="metric-footer">
              <span className="metric-subtitle">All time orders</span>
            </div>
          </div>
        </div>

        <div className="metric-card revenue">
          <div className="metric-header">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="metric-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="metric-content">
            <div className="metric-label">Total Revenue</div>
            <div className="metric-value" aria-live="polite">
              LKR {Number.isFinite(safe.revenue) ? safe.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
            </div>
            <div className="metric-footer">
              <span className="metric-subtitle">Total earnings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Banner */}
      <div className="quick-stats-banner">
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">LKR {((safe.revenue / safe.orders) || 0).toFixed(2)}</div>
            <div className="stat-name">Avg Order Value</div>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">{safe.orders > 0 ? ((safe.orders / safe.users) * 100).toFixed(1) : '0'}%</div>
            <div className="stat-name">Order Rate</div>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">{safe.products > 0 ? (safe.products / 10).toFixed(0) : '0'}</div>
            <div className="stat-name">Product Categories</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Analytics & Insights</h2>
            <p className="section-subtitle">Track your business performance over time</p>
          </div>
          <div className="time-filter">
            <button className="filter-btn active">30D</button>
            <button className="filter-btn">90D</button>
            <button className="filter-btn">1Y</button>
          </div>
        </div>

        <div className="charts-grid">
          {/* Sales Trends Chart */}
          <div className="chart-card featured">
            <div className="chart-header">
              <div className="chart-title-group">
                <h3 className="chart-title">Sales Performance</h3>
                <p className="chart-subtitle">Last 30 days overview</p>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-dot orders"></div>
                  <span>Orders</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot revenue"></div>
                  <span>Revenue</span>
                </div>
              </div>
            </div>
            <div className="chart-container">
              {salesTrends?.data ? (
                <Line
                  data={{
                    labels: salesTrends.data.map(item => {
                      const date = new Date(item.date!)
                      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    }),
                    datasets: [
                      {
                        label: 'Orders',
                        data: salesTrends.data.map(item => item.orders || 0),
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#667eea',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                      },
                      {
                        label: 'Revenue (LKR)',
                        data: salesTrends.data.map(item => item.revenue || 0),
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                      }
                    ]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                      mode: 'index',
                      intersect: false,
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        displayColors: true,
                        callbacks: {
                          label: function(context) {
                            if (context.datasetIndex === 0) {
                              return `Orders: ${context.parsed.y || 0}`
                            } else {
                              return `Revenue: LKR ${(context.parsed.y || 0).toLocaleString()}`
                            }
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          }
                        }
                      },
                      y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                          display: true,
                          text: 'Orders',
                          color: '#667eea',
                          font: {
                            size: 12,
                            weight: '600'
                          }
                        },
                        grid: {
                          color: 'rgba(0, 0, 0, 0.05)',
                          drawBorder: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          }
                        }
                      },
                      y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                          display: true,
                          text: 'Revenue (LKR)',
                          color: '#10b981',
                          font: {
                            size: 12,
                            weight: '600'
                          }
                        },
                        grid: {
                          drawOnChartArea: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          }
                        }
                      }
                    }
                  }}
                />
              ) : (
                <div className="chart-loading">
                  <div className="loading-spinner-small">
                    <div className="spinner-ring-small"></div>
                  </div>
                  <p>Loading sales data...</p>
                </div>
              )}
            </div>
          </div>

          {/* Revenue Growth Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title-group">
                <h3 className="chart-title">Revenue Growth</h3>
                <p className="chart-subtitle">Monthly performance</p>
              </div>
            </div>
            <div className="chart-container">
              {revenueGrowth?.data ? (
                <Bar
                  data={{
                    labels: revenueGrowth.data.map(item => {
                      const [year, month] = (item.month || '').split('-')
                      const date = new Date(parseInt(year), parseInt(month) - 1)
                      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                    }),
                    datasets: [{
                      label: 'Revenue (LKR)',
                      data: revenueGrowth.data.map(item => item.revenue || 0),
                      backgroundColor: 'rgba(16, 185, 129, 0.8)',
                      borderColor: '#10b981',
                      borderWidth: 0,
                      borderRadius: 8,
                      borderSkipped: false,
                      hoverBackgroundColor: 'rgba(16, 185, 129, 1)',
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        callbacks: {
                          label: function(context) {
                            return `Revenue: LKR ${(context.parsed.y || 0).toLocaleString()}`
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          }
                        }
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(0, 0, 0, 0.05)',
                          drawBorder: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          },
                          callback: function(value) {
                            return 'LKR ' + value.toLocaleString()
                          }
                        }
                      }
                    }
                  }}
                />
              ) : (
                <div className="chart-loading">
                  <div className="loading-spinner-small">
                    <div className="spinner-ring-small"></div>
                  </div>
                  <p>Loading revenue data...</p>
                </div>
              )}
            </div>
          </div>

          {/* User Activity Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title-group">
                <h3 className="chart-title">User Growth</h3>
                <p className="chart-subtitle">New registrations</p>
              </div>
            </div>
            <div className="chart-container">
              {userActivity?.data ? (
                <Bar
                  data={{
                    labels: userActivity.data.map(item => {
                      const date = new Date(item.date!)
                      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    }),
                    datasets: [{
                      label: 'Registrations',
                      data: userActivity.data.map(item => item.registrations || 0),
                      backgroundColor: 'rgba(102, 126, 234, 0.8)',
                      borderColor: '#667eea',
                      borderWidth: 0,
                      borderRadius: 8,
                      borderSkipped: false,
                      hoverBackgroundColor: 'rgba(102, 126, 234, 1)',
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        callbacks: {
                          label: function(context) {
                            return `Registrations: ${context.parsed.y}`
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          }
                        }
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(0, 0, 0, 0.05)',
                          drawBorder: false,
                        },
                        ticks: {
                          color: '#6b7280',
                          font: {
                            size: 11,
                          },
                          precision: 0,
                        }
                      }
                    }
                  }}
                />
              ) : (
                <div className="chart-loading">
                  <div className="loading-spinner-small">
                    <div className="spinner-ring-small"></div>
                  </div>
                  <p>Loading user data...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .dashboard-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
          }
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
        
        .title-icon {
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
          font-weight: 400;
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
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
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
        
        /* Loading State */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 20px;
        }
        
        .loading-spinner {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        
        .loading-state p {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }
        
        .loading-spinner-small {
          position: relative;
          width: 40px;
          height: 40px;
        }
        
        .spinner-ring-small {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid #e5e7eb;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        /* Error State */
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
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }
        
        .metric-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .metric-card:nth-child(1) { animation-delay: 0.2s; }
        .metric-card:nth-child(2) { animation-delay: 0.3s; }
        .metric-card:nth-child(3) { animation-delay: 0.4s; }
        .metric-card:nth-child(4) { animation-delay: 0.5s; }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: rgba(102, 126, 234, 0.2);
        }
        
        .metric-card:hover::before {
          opacity: 1;
        }
        
        .metric-card.users::before {
          background: linear-gradient(90deg, transparent, #667eea, transparent);
        }
        
        .metric-card.products::before {
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
        }
        
        .metric-card.orders::before {
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        }
        
        .metric-card.revenue::before {
          background: linear-gradient(90deg, transparent, #10b981, transparent);
        }
        
        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .metric-card.users .metric-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
        }
        
        .metric-card.products .metric-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
        }
        
        .metric-card.orders .metric-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }
        
        .metric-card.revenue .metric-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }
        
        .metric-card:hover .metric-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .metric-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #f0fdf4;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .metric-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .metric-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          font-size: 36px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -1px;
        }
        
        .metric-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
        }
        
        .metric-subtitle {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
        }
        
        /* Quick Stats Banner */
        .quick-stats-banner {
          background: white;
          border-radius: 16px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 32px;
          margin-bottom: 32px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
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
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }
        
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        .stat-name {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 40px;
          background: #e5e7eb;
        }
        
        /* Charts Section */
        .charts-section {
          margin-top: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }
        
        .section-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          font-weight: 400;
        }
        
        .time-filter {
          display: flex;
          gap: 8px;
          background: white;
          padding: 4px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }
        
        .filter-btn {
          padding: 8px 16px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .filter-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }
        
        .filter-btn.active {
          background: #667eea;
          color: white;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 24px;
        }
        
        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .chart-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }
        
        .chart-card.featured {
          grid-column: 1 / -1;
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .chart-title-group {
          flex: 1;
        }
        
        .chart-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }
        
        .chart-subtitle {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }
        
        .chart-legend {
          display: flex;
          gap: 20px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        
        .legend-dot.orders {
          background: #667eea;
        }
        
        .legend-dot.revenue {
          background: #10b981;
        }
        
        .chart-container {
          height: 350px;
          position: relative;
        }
        
        .chart-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: #94a3b8;
        }
        
        .chart-loading p {
          font-size: 14px;
          margin: 0;
          font-weight: 500;
        }
        
        /* Responsive Design */
        @media (max-width: 1400px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .quick-stats-banner {
            flex-direction: column;
            gap: 20px;
          }
          
          .stat-divider {
            display: none;
          }
          
          .stat-item {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-page {
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
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .metric-value {
            font-size: 28px;
          }
          
          .charts-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .chart-card {
            padding: 20px;
          }
          
          .chart-container {
            height: 280px;
          }
          
          .chart-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .section-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .time-filter {
            align-self: flex-start;
          }
        }
        
        @media (max-width: 480px) {
          .page-title {
            font-size: 20px;
          }
          
          .title-icon {
            width: 40px;
            height: 40px;
          }
          
          .title-icon svg {
            width: 22px;
            height: 22px;
          }
          
          .metric-icon {
            width: 40px;
            height: 40px;
          }
          
          .metric-icon svg {
            width: 20px;
            height: 20px;
          }
          
          .metric-value {
            font-size: 24px;
          }
          
          .stat-value {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}
