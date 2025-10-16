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

  if (loading) return <div aria-busy="true">Loading…</div>
  if (error) return <div className="alert error" role="alert">{error}</div>

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="cards" role="region" aria-label="Key performance indicators">
        <div className="card">
          <div className="k">Users</div>
          <div className="v" aria-live="polite">{safe.users}</div>
        </div>
        <div className="card">
          <div className="k">Products</div>
          <div className="v" aria-live="polite">{safe.products}</div>
        </div>
        <div className="card">
          <div className="k">Orders</div>
          <div className="v" aria-live="polite">{safe.orders}</div>
        </div>
        <div className="card">
          <div className="k">Sales</div>
          <div className="v" aria-live="polite">
            ${Number.isFinite(safe.sales) ? safe.sales.toFixed(2) : '0.00'}
          </div>
        </div>
      </div>

      <style>{`
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}
        .card{border:1px solid #2a2b36;border-radius:12px;padding:12px;background:#14151d;color:#e9e9ef}
        .k{color:#b8bbd9;font-size:12px}
        .v{font-size:22px;font-weight:800;margin-top:4px}
        .alert.error{background:#3b1111;color:#ffd1d1;border:1px solid #5b1a1a;padding:12px;border-radius:8px}
      `}</style>
    </div>
  )
}
