import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function AdminDashboardHome(){
  const [data, setData] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => { (async () => {
    try { const r = await api.get('/admin/metrics'); setData(r.data) }
    catch (e:any) { setError(e?.response?.data?.detail || 'Failed to load metrics') }
  })() }, [])
  if (error) return <div className="alert error">{error}</div>
  if (!data) return <div>Loading…</div>
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card"><div className="k">Users</div><div className="v">{data.total_users}</div></div>
        <div className="card"><div className="k">Products</div><div className="v">{data.total_products}</div></div>
        <div className="card"><div className="k">Orders</div><div className="v">{data.total_orders}</div></div>
        <div className="card"><div className="k">Sales</div><div className="v">${data.total_sales.toFixed(2)}</div></div>
      </div>
      <style>{`.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.card{border:1px solid #2a2b36;border-radius:12px;padding:12px}.k{color:#b8bbd9}.v{font-size:22px}`}</style>
    </div>
  )
}
