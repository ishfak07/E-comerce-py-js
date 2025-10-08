import { useEffect, useState, useRef } from 'react'
import { api } from '../lib/api'

type Order = { id: number; status: string; total_amount: number }

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [page, setPage] = useState(1)
  const [size] = useState(10)
  const [total, setTotal] = useState(0)
  const polling = useRef<number | null>(null)

  async function fetchPage(p = page) {
    try {
      const res = await api.get('/admin/orders', { params: { page: p, size } })
      setOrders(res.data.items)
      setTotal(res.data.total)
      setPage(res.data.page)
    } catch (err) {
      console.error('Failed to fetch orders', err)
    }
  }

  useEffect(() => {
    // initial load
    fetchPage(1)
    // poll every 5s
    polling.current = window.setInterval(() => fetchPage(page), 5000)
    return () => { if (polling.current) window.clearInterval(polling.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => { fetchPage(page) }, [page])

  const pages = Math.max(1, Math.ceil(total / size))

  async function setStatus(orderId: number, status: string) {
    try {
      await api.put(`/admin/orders/${orderId}/status`, null, { params: { new_status: status } })
      fetchPage(page)
    } catch (err) {
      console.error('Failed to update status', err)
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Orders</h1>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => fetchPage(1)}>Refresh</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th style={{ textAlign: 'left' }}>ID</th><th style={{ textAlign: 'left' }}>Status</th><th style={{ textAlign: 'right' }}>Total</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} style={{ borderTop: '1px solid #eee' }}>
              <td>{o.id}</td>
              <td>{o.status}</td>
              <td style={{ textAlign: 'right' }}>${o.total_amount}</td>
              <td>
                <button onClick={() => setStatus(o.id, 'processing')}>Mark Processing</button>
                <button onClick={() => setStatus(o.id, 'shipped')}>Mark Shipped</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}>Prev</button>
        <div>Page {page} / {pages} — {total} orders</div>
        <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page >= pages}>Next</button>
      </div>
    </div>
  )
}



