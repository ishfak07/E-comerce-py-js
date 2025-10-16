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
    return `$${v.toFixed(2)}`
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
    <div style={{ padding: 24 }}>
      <h1>Admin Orders</h1>

      <div style={{ marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => fetchPage(1)} disabled={loading} type="button">
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
        <span style={{ color: '#888' }}>{loading ? 'Loading…' : error ? error : ''}</span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>ID</th>
            <th style={{ textAlign: 'left' }}>Status</th>
            <th style={{ textAlign: 'right' }}>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: 12, textAlign: 'center', color: '#888' }}>
                {loading ? 'Loading…' : 'No orders'}
              </td>
            </tr>
          ) : (
            orders.map((o) => (
              <tr key={o.id} style={{ borderTop: '1px solid #eee' }}>
                <td>{o.id}</td>
                <td>{o.status}</td>
                <td style={{ textAlign: 'right' }}>{formatMoney(o.total_amount)}</td>
                <td style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                  <button onClick={() => setStatus(o.id, 'processing')} type="button">
                    Mark Processing
                  </button>
                  <button onClick={() => setStatus(o.id, 'shipped')} type="button">
                    Mark Shipped
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={!canPrev} type="button">
          Prev
        </button>
        <div>
          Page {page} / {pages} — {total} orders
        </div>
        <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={!canNext} type="button">
          Next
        </button>
      </div>
    </div>
  )
}
