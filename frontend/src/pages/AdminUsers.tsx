import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

type UserId = string

type U = {
  id: UserId
  email: string
  is_active?: boolean
  is_staff?: boolean
  is_superuser?: boolean
}

type UsersResponse = {
  items: U[]
}

type ApiError = {
  response?: { status?: number; data?: { detail?: string; message?: string } }
  message?: string
}

export default function AdminUsers() {
  const [items, setItems] = useState<U[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [acting, setActing] = useState<boolean>(false)

  const normalized = useMemo(
    () =>
      items.map((u) => ({
        ...u,
        is_active: u.is_active ?? true,
        is_staff: u.is_staff ?? false,
        is_superuser: u.is_superuser ?? false,
      })),
    [items]
  )

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const r = await api.get<UsersResponse>('/admin/users')
      const arr = Array.isArray(r.data?.items) ? r.data.items : []
      setItems(arr)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Single effect to load; no duplicate calls
    load()
  }, [])

  async function block(id: UserId, b: boolean) {
    setActing(true)
    try {
      await api.put(`/admin/users/${id}/block`, null, { params: { block: b } })
      await load()
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update user')
    } finally {
      setActing(false)
    }
  }

  async function remove(id: UserId) {
    setActing(true)
    try {
      await api.delete(`/admin/users/${id}`)
      await load()
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to delete user')
    } finally {
      setActing(false)
    }
  }

  function BoolPill({ value }: { value: boolean }) {
    return (
      <span
        style={{
          display: 'inline-block',
          minWidth: 64,
          textAlign: 'center',
          padding: '2px 8px',
          borderRadius: 999,
          border: '1px solid #2a2b36',
          background: value ? 'rgba(31,191,117,.08)' : 'rgba(255,93,93,.08)',
          color: value ? '#9be7c4' : '#ffbcbc',
        }}
        aria-label={value ? 'True' : 'False'}
      >
        {value ? 'Yes' : 'No'}
      </span>
    )
  }

  return (
    <div>
      <h1>Users</h1>

      {error && (
        <div className="alert error" role="alert">
          {error}
        </div>
      )}

      <div style={{ margin: '8px 0', color: '#8aa' }}>
        {loading ? 'Loading users…' : `Total: ${items.length}`}
      </div>

      <table className="tbl">
        <thead>
          <tr>
            <th>Email</th>
            <th>Active</th>
            <th>Staff</th>
            <th>Superuser</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {normalized.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ padding: 12, textAlign: 'center', color: '#8aa' }}>
                {loading ? 'Loading…' : 'No users'}
              </td>
            </tr>
          ) : (
            normalized.map((u) => (
              <tr key={u.id}>
                <td>{u.email}</td>
                <td><BoolPill value={u.is_active!} /></td>
                <td><BoolPill value={u.is_staff!} /></td>
                <td><BoolPill value={u.is_superuser!} /></td>
                <td style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                  <button
                    onClick={() => block(u.id, !u.is_active)}
                    disabled={acting}
                    type="button"
                    title={u.is_active ? 'Block user' : 'Unblock user'}
                  >
                    {u.is_active ? 'Block' : 'Unblock'}
                  </button>
                  <button
                    onClick={() => remove(u.id)}
                    disabled={acting}
                    type="button"
                    title="Delete user"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <style>{`
        .tbl{width:100%;border-collapse:collapse}
        .tbl th,.tbl td{border-bottom:1px solid #2a2b36;padding:8px}
        .alert.error{background:#3b1111;color:#ffd1d1;border:1px solid #5b1a1a;padding:10px;border-radius:8px;margin:8px 0}
      `}</style>
    </div>
  )
}
