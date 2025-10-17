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
  is_published?: boolean
}

type ProductsResponse = {
  items: Prod[]
}

type UploadResponse = {
  url: string
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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)

  // Validation
  const validation = useMemo(() => {
    const name = form.name.trim()
    const slug = form.slug.trim()
    const priceOk = Number.isFinite(form.price) && form.price >= 0
    const stockOk = Number.isInteger(form.stock) && form.stock >= 0
    return {
      nameOk: name.length > 1,
      slugOk: slug.length > 1,
      priceOk,
      stockOk,
    }
  }, [form])

  const isValid = validation.nameOk && validation.slugOk && validation.priceOk && validation.stockOk

  // Helpers
  function parseMoneyInput(v: string): number {
    const n = parseFloat(v)
    return Number.isFinite(n) && n >= 0 ? n : 0
  }
  function parseIntInput(v: string): number {
    const n = parseInt(v, 10)
    return Number.isFinite(n) && n >= 0 ? n : 0
  }

  // API
  async function load() {
    setLoading(true)
    setError(null)
    try {
      const r = await api.get<ProductsResponse>('/admin/products')
      setItems(Array.isArray(r.data?.items) ? r.data.items : [])
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
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

  async function uploadImageIfNeeded(): Promise<string[] | undefined> {
    if (!file) return form.images && form.images.length ? form.images : undefined
    const fd = new FormData()
    // Include filename and type for stricter servers
    fd.append('file', file, file.name)
    try {
      // Let Axios/browser set multipart boundaries automatically
      const up = await api.post<UploadResponse>('/admin/products/upload', fd)
  return [up.data.url]
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return undefined
      }
      throw new Error(err?.response?.data?.detail || err?.response?.data?.message || 'Upload failed')
    }
  }

  async function create() {
    setError(null)
    if (!isValid) {
      setError('Please fill all fields correctly')
      return
    }
    setSubmitting(true)
    try {
      const images = await uploadImageIfNeeded()
      const payload: Partial<Prod> = {
        name: form.name.trim(),
        slug: form.slug.trim(),
        price: form.price,
        stock: form.stock,
        images,
        // publish immediately so users see new products
        is_published: true,
      }

      // Optimistic update for snappy UX
      const optimistic: Prod = {
        id: `tmp-${Date.now()}`,
        ...payload,
        name: payload.name || '',
        slug: payload.slug || '',
        price: payload.price || 0,
        stock: payload.stock || 0,
        images: payload.images || [],
      }
      setItems((prev) => [optimistic, ...prev])

      await api.post('/admin/products', payload)

      // Reset form
      setForm({ name: '', slug: '', price: 0, stock: 0, images: [] })
      setFile(null)

      // Re-sync with server (ensures IDs/images are canonical)
      await load()
      // notify other tabs (shop page) that products changed so users see new product immediately
      try {
        localStorage.setItem('products:update', String(Date.now()))
      } catch (e) {
        // ignore
      }
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      // prefer backend detail if present, otherwise fallback to message
      const backendMsg = err?.response?.data?.detail || err?.response?.data?.message
      const userMsg = backendMsg || err?.message || 'Failed to create product'
      console.error('create product error', err)
      setError(userMsg)
    } finally {
      setSubmitting(false)
    }
  }

  async function update(id: ProdId, fields: Partial<Prod>) {
    setError(null)
    try {
      // Optimistic local update
      setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...fields } : p)))
      await api.put(`/admin/products/${id}`, fields)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update')
      // Revert by reloading authoritative state
      await load()
    }
  }

  async function remove(id: ProdId) {
    setError(null)
    try {
      // Optimistic remove
      const snapshot = items
      setItems((prev) => prev.filter((p) => p.id !== id))
      await api.delete(`/admin/products/${id}`)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to delete')
      await load()
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {!validation.nameOk && <small style={{ color: '#ffbcbc' }}>Name must be at least 2 characters</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
          {!validation.slugOk && <small style={{ color: '#ffbcbc' }}>Slug must be at least 2 characters</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Price"
            type="number"
            inputMode="decimal"
            value={Number.isFinite(form.price) ? form.price : 0}
            onChange={(e) => setForm({ ...form, price: parseMoneyInput(e.target.value) })}
            min={0}
            step="0.01"
          />
          {!validation.priceOk && <small style={{ color: '#ffbcbc' }}>Price must be ≥ 0</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Stock"
            type="number"
            inputMode="numeric"
            value={Number.isFinite(form.stock) ? form.stock : 0}
            onChange={(e) => setForm({ ...form, stock: parseIntInput(e.target.value) })}
            min={0}
            step={1}
          />
          {!validation.stockOk && <small style={{ color: '#ffbcbc' }}>Stock must be an integer ≥ 0</small>}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0] || null
            setFile(f)
            if (f) {
              const url = URL.createObjectURL(f)
              setPreviewUrl(url)
            } else {
              setPreviewUrl(null)
            }
          }}
        />
        {previewUrl && (
          <img src={previewUrl} alt="preview" style={{ height: 48, marginLeft: 8, verticalAlign: 'middle' }} />
        )}
        <button onClick={create} disabled={!isValid || submitting} type="button">
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
                      if (p.id && next !== p.price) update(p.id, { price: next })
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
                      if (p.id && next !== p.stock) update(p.id, { stock: next })
                    }}
                    min={0}
                    step={1}
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => p.id && remove(p.id)} type="button">
                    Delete
                  </button>
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
