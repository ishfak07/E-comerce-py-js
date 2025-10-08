import { useEffect, useState } from 'react'
import { api } from '../lib/api'

type Order = { id: number; status: string; total_amount: number }

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get('/admin/orders').then(r => setOrders(r.data))
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Orders</h1>
      <table>
        <thead>
          <tr><th>ID</th><th>Status</th><th>Total</th></tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}><td>{o.id}</td><td>{o.status}</td><td>${o.total_amount}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



