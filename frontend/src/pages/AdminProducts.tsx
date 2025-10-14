import { useEffect, useState } from 'react'
import { api } from '../lib/api'

type Prod = { id?: string; name:string; slug:string; price:number; stock:number }

export default function AdminProducts(){
  const [items, setItems] = useState<Prod[]>([])
  const [form, setForm] = useState<Prod>({name:'',slug:'',price:0,stock:0})
  const [error, setError] = useState<string|null>(null)

  async function load(){
    try{ const r = await api.get('/admin/products'); setItems(r.data.items) }catch(e:any){ setError(e?.response?.data?.detail||'Failed to load') }
  }
  useEffect(()=>{ load() },[])

  async function create(){
    setError(null)
    try{ await api.post('/admin/products', form); setForm({name:'',slug:'',price:0,stock:0}); await load() }catch(e:any){ setError(e?.response?.data?.detail||'Failed') }
  }
  async function update(id:string, fields:Partial<Prod>){ await api.put(`/admin/products/${id}`, fields); await load() }
  async function remove(id:string){ await api.delete(`/admin/products/${id}`); await load() }

  return (
    <div>
      <h1>Products</h1>
      {error && <div className="alert error">{error}</div>}
      <div className="row">
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Slug" value={form.slug} onChange={e=>setForm({...form,slug:e.target.value})}/>
        <input placeholder="Price" type="number" value={form.price} onChange={e=>setForm({...form,price:parseFloat(e.target.value)})}/>
        <input placeholder="Stock" type="number" value={form.stock} onChange={e=>setForm({...form,stock:parseInt(e.target.value)})}/>
        <button onClick={create}>Add</button>
      </div>
      <table className="tbl"><thead><tr><th>Name</th><th>Slug</th><th>Price</th><th>Stock</th><th/></tr></thead>
        <tbody>
          {items.map(p=> (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.slug}</td>
              <td>
                <input type="number" defaultValue={p.price} onBlur={e=>update(p.id!, {price:parseFloat(e.target.value)})}/>
              </td>
              <td>
                <input type="number" defaultValue={p.stock} onBlur={e=>update(p.id!, {stock:parseInt(e.target.value)})}/>
              </td>
              <td><button onClick={()=>remove(p.id!)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`.row{display:flex;gap:8px;margin:8px 0}.tbl{width:100%;border-collapse:collapse}.tbl th,.tbl td{border-bottom:1px solid #2a2b36;padding:8px}`}</style>
    </div>
  )
}
