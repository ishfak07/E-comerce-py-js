import { useEffect, useState } from 'react'
import { api } from '../lib/api'

type U = { id:string; email:string; is_active?:boolean; is_staff?:boolean; is_superuser?:boolean }

export default function AdminUsers(){
  const [items, setItems] = useState<U[]>([])
  const [error, setError] = useState<string|null>(null)
  async function load(){ try{ const r = await api.get('/admin/users'); setItems(r.data.items) } catch(e:any){ setError(e?.response?.data?.detail||'Failed to load') } }
  
  // guard 401 -> redirect to login
  useEffect(()=>{
    const origLoad = load
    const wrapped = async () => {
      try { await origLoad() }
      catch (e:any) {
        if (e?.response?.status === 401) { try{ window.location.href = '/login' } catch(_){} }
      }
    }
    // run it once to ensure redirect if unauthorized
    wrapped()
  }, [])
  useEffect(()=>{ load() },[])
  async function block(id:string, b:boolean){ await api.put(`/admin/users/${id}/block`, null, { params: { block: b } }); await load() }
  async function remove(id:string){ await api.delete(`/admin/users/${id}`); await load() }
  return (
    <div>
      <h1>Users</h1>
      {error && <div className="alert error">{error}</div>}
      <table className="tbl"><thead><tr><th>Email</th><th>Active</th><th>Staff</th><th>Superuser</th><th/></tr></thead>
        <tbody>
          {items.map(u => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{String(u.is_active ?? true)}</td>
              <td>{String(u.is_staff ?? false)}</td>
              <td>{String(u.is_superuser ?? false)}</td>
              <td>
                <button onClick={()=>block(u.id, !(u.is_active ?? true))}>{(u.is_active ?? true) ? 'Block' : 'Unblock'}</button>
                <button onClick={()=>remove(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`.tbl{width:100%;border-collapse:collapse}.tbl th,.tbl td{border-bottom:1px solid #2a2b36;padding:8px}`}</style>
    </div>
  )
}
