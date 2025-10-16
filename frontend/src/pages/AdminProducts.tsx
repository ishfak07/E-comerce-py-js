import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

type ProdId = string

type Prod = {
  id?: ProdId
  name: string
  slug: string
  price: number
  stock: number
  images?: string[]
}

type ProductsResponse = {
  items: Prod[]
}

type ApiError = {
  response?: {
    status?: number
    data?: { detail?: string; message?: string }
  }
  message?: string
}

export default function AdminProducts() {
  const [items, setItems] = useState<Prod[]>([])
  const [form, setForm] = useState<Prod>({ name: '', slug: '', price: 0, stock: 0, images: [] })
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const isValid = useMemo(() => {
    const hasName = form.name.trim().length > 0
    const hasSlug = form.slug.trim().length > 0
    const priceOk = Number.isFinite(form.price) && form.price >= 0
    const stockOk = Number.isInteger(form.stock) && form.stock >= 0
    return hasName && hasSlug && priceOk && stockOk
  }, [form])

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const r = await api.get<ProductsResponse>('/admin/products')
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
    load()
  }, [])

  function parseMoneyInput(v: string): number {
    // Allow empty to become 0, clamp NaN to 0
    const n = parseFloat(v)
    return Number.isFinite(n) ? n : 0
  }

  function parseIntInput(v: string): number {
    const n = parseInt(v, 10)
    return Number.isFinite(n) ? n : 0
  }

  async function create() {
    setError(null)
    if (!isValid) {
      setError('Please fill all required fields correctly')
      return
    }

    setSubmitting(true)
    try {
      const payload: Partial<Prod> = {
        name: form.name.trim(),
        slug: form.slug.trim(),
        price: form.price,
        stock: form.stock,
        images: form.images && form.images.length ? form.images : undefined,
      }

      // Optional file upload
      if (file) {
        const fd = new FormData()
        fd.append('file', file)
        // Note: Axios can infer multipart boundary from FormData; explicit header not required in browsers
        // Keep header if your backend expects it; otherwise you can omit it.
        const up = await api.post<{ url: string }>('/admin/products/upload', fd /*, { headers: { 'Content-Type': 'multipart/form-data' } }*/ )
        payload.images = [up.data.url]
      }

      await api.post('/admin/products', payload)
      setForm({ name: '', slug: '', price: 0, stock: 0, images: [] })
      setFile(null)
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
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed')
    } finally {
      setSubmitting(false)
    }
  }

  async function update(id: ProdId, fields: Partial<Prod>) {
    try {
      await api.put(`/admin/products/${id}`, fields)
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
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update')
    }
  }

  async function remove(id: ProdId) {
    try {
      await api.delete(`/admin/products/${id}`)
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
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to delete')
    }
  }

  return (
    <div>
      <h1>Products</h1>

      {error && (
        <div className="alert error" role="alert">
          {error}
        </div>
      )}

      <div className="row" aria-label="Create product">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          inputMode="decimal"
          value={Number.isFinite(form.price) ? form.price : 0}
          onChange={(e) => setForm({ ...form, price: parseMoneyInput(e.target.value) })}
          min={0}
          step="0.01"
        />
        <input
          placeholder="Stock"
          type="number"
          inputMode="numeric"
          value={Number.isFinite(form.stock) ? form.stock : 0}
          onChange={(e) => setForm({ ...form, stock: parseIntInput(e.target.value) })}
          min={0}
          step={1}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button onClick={create} disabled={!isValid || submitting}>
          {submitting ? 'Adding…' : 'Add'}
        </button>
      </div>

      <div style={{ margin: '8px 0', color: '#8aa' }}>
        {loading ? 'Loading products…' : `Total: ${items.length}`}
      </div>

      <table className="tbl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th style={{ textAlign: 'right' }}>Price</th>
            <th style={{ textAlign: 'right' }}>Stock</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ padding: 12, textAlign: 'center', color: '#8aa' }}>
                {loading ? 'Loading…' : 'No products'}
              </td>
            </tr>
          ) : (
            items.map((p) => (
              <tr key={p.id || `${p.slug}-${p.name}`}>
                <td>
                  {p.images && p.images.length > 0 ? (
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      style={{ height: 48, marginRight: 8, verticalAlign: 'middle' }}
                    />
                  ) : null}
                  <span style={{ verticalAlign: 'middle' }}>{p.name}</span>
                </td>
                <td>{p.slug}</td>
                <td style={{ textAlign: 'right' }}>
                  <input
                    type="number"
                    defaultValue={p.price}
                    onBlur={(e) => {
                      const next = parseMoneyInput(e.target.value)
                      if (next !== p.price && p.id) update(p.id, { price: next })
                    }}
                    min={0}
                    step="0.01"
                  />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <input
                    type="number"
                    defaultValue={p.stock}
                    onBlur={(e) => {
                      const next = parseIntInput(e.target.value)
                      if (next !== p.stock && p.id) update(p.id, { stock: next })
                    }}
                    min={0}
                    step={1}
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => p.id && remove(p.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <style>{`
        .row{display:flex;gap:8px;margin:8px 0;flex-wrap:wrap}
        .tbl{width:100%;border-collapse:collapse}
        .tbl th,.tbl td{border-bottom:1px solid #2a2b36;padding:8px}
        input[type="number"] { width: 120px }
        .alert.error{background:#3b1111;color:#ffd1d1;border:1px solid #5b1a1a;padding:10px;border-radius:8px;margin:8px 0}
      `}</style>
    </div>
  )
}
