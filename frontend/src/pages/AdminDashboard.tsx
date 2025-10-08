import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Types
type Product = {
  id: number
  name: string
  slug: string
  price: number
  stock: number
  category?: string
  images?: string[]
  active?: boolean
  createdAt?: string
}

type Order = {
  id: number
  number: string
  customerId: number
  customerName: string
  total: number
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'canceled'
  createdAt: string
}

type Customer = {
  id: number
  name: string
  email: string
  orders: number
  totalSpent: number
  createdAt: string
}

type SiteSettings = {
  siteName: string
  supportEmail: string
  supportPhone: string
  currency: 'USD' | 'LKR' | 'EUR'
  brandColor: string
  bankTransferNote: string
}

// Demo seed
const seedProducts: Product[] = [
  { id: 1001, name: 'Classic Tee', slug: 'classic-tee', price: 19.99, stock: 48, category: 'Apparel', active: true, createdAt: '2025-02-01' },
  { id: 1002, name: 'Leather Backpack', slug: 'leather-backpack', price: 89.99, stock: 12, category: 'Bags', active: true, createdAt: '2025-02-10' },
  { id: 1003, name: 'Minimal Watch', slug: 'minimal-watch', price: 75.0, stock: 20, category: 'Accessories', active: true, createdAt: '2025-03-01' },
  { id: 1004, name: 'Wireless Headphones', slug: 'wireless-headphones', price: 129.0, stock: 7, category: 'Electronics', active: true, createdAt: '2025-03-12' },
  { id: 1005, name: 'Sunglasses', slug: 'sunglasses', price: 35.0, stock: 60, category: 'Accessories', active: false, createdAt: '2025-01-22' },
]

const seedOrders: Order[] = [
  { id: 7001, number: 'ORD-000701', customerId: 3001, customerName: 'A. Perera', total: 129.0, status: 'pending', createdAt: '2025-03-23' },
  { id: 7002, number: 'ORD-000702', customerId: 3002, customerName: 'S. Fernando', total: 75.0, status: 'paid', createdAt: '2025-03-22' },
  { id: 7003, number: 'ORD-000703', customerId: 3003, customerName: 'N. Jayasuriya', total: 54.99, status: 'shipped', createdAt: '2025-03-22' },
  { id: 7004, number: 'ORD-000704', customerId: 3004, customerName: 'I. Silva', total: 209.98, status: 'delivered', createdAt: '2025-03-20' },
]

const seedCustomers: Customer[] = [
  { id: 3001, name: 'A. Perera', email: 'aperera@example.com', orders: 4, totalSpent: 412.4, createdAt: '2024-12-12' },
  { id: 3002, name: 'S. Fernando', email: 'sfernando@example.com', orders: 2, totalSpent: 129.99, createdAt: '2025-01-05' },
  { id: 3003, name: 'N. Jayasuriya', email: 'njaya@example.com', orders: 3, totalSpent: 265.0, createdAt: '2025-02-16' },
  { id: 3004, name: 'I. Silva', email: 'isilva@example.com', orders: 1, totalSpent: 209.98, createdAt: '2025-03-10' },
]

const seedSettings: SiteSettings = {
  siteName: 'Ecommerce',
  supportEmail: 'support@yourstore.com',
  supportPhone: '+94 11 234 5678',
  currency: 'USD',
  brandColor: '#6D74FF',
  bankTransferNote:
    'Bank transfer accepted: Name: Ishfaque Mif · Bank: BOC · Branch: Puttalam · Account: 89001476 · WhatsApp: +94 76 897 6222. Include order number as reference.',
}

// Helpers
function formatMoney(x: number, currency: SiteSettings['currency']) {
  const sym = currency === 'USD' ? '$' : currency === 'LKR' ? 'Rs ' : '€'
  return `${sym}${x.toFixed(2)}`
}

// Reusable UI
function Modal({
  open,
  title,
  onClose,
  children,
  actions,
}: {
  open: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
  actions?: React.ReactNode
}) {
  if (!open) return null
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-head">
          <h3 id="modal-title">{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">{children}</div>
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  )
}

function Table<T>({
  columns,
  rows,
  keyField,
  onSort,
  sortKey,
  sortDir,
  empty,
}: {
  columns: { key: keyof T | string; label: string; width?: string; render?: (row: T) => React.ReactNode; sortable?: boolean }[]
  rows: T[]
  keyField: keyof T
  onSort?: (key: string) => void
  sortKey?: string
  sortDir?: 'asc' | 'desc'
  empty?: string
}) {
  return (
    <div className="table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} style={c.width ? { width: c.width } : undefined}>
                <div className="th-inner">
                  <span>{c.label}</span>
                  {c.sortable && onSort && (
                    <button className="sort-btn" onClick={() => onSort(String(c.key))} aria-label={`Sort by ${c.label}`}>
                      {sortKey === c.key ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="empty">{empty || 'No data'}</td>
            </tr>
          ) : (
            rows.map((r) => (
              <tr key={String(r[keyField])}>
                {columns.map((c) => (
                  <td key={String(c.key)}>{c.render ? c.render(r) : String((r as any)[c.key])}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

// Admin Root
export default function AdminDashboard() {
  const navigate = useNavigate()
  // In a real app, protect route: if not admin, redirect.
  // Example:
  // const { user } = useAuth()
  // useEffect(() => { if (!user?.is_staff) navigate('/') }, [user])

  const [tab, setTab] = useState<'dashboard' | 'products' | 'orders' | 'customers' | 'settings'>('dashboard')

  const [products, setProducts] = useState<Product[]>(seedProducts)
  const [orders, setOrders] = useState<Order[]>(seedOrders)
  const [customers, setCustomers] = useState<Customer[]>(seedCustomers)
  const [settings, setSettings] = useState<SiteSettings>(seedSettings)

  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState<string>('')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  // Selection/Edit state
  const [showProdModal, setShowProdModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const [showOrderModal, setShowOrderModal] = useState(false)
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)

  function onSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const filteredProducts = useMemo(() => {
    let rows = [...products]
    if (query.trim()) {
      const s = query.toLowerCase()
      rows = rows.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.slug.toLowerCase().includes(s) ||
          (p.category || '').toLowerCase().includes(s),
      )
    }
    if (sortKey) {
      rows.sort((a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        if (typeof va === 'number' && typeof vb === 'number') return sortDir === 'asc' ? va - vb : vb - va
        return sortDir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va))
      })
    }
    return rows
  }, [products, query, sortKey, sortDir])

  const filteredOrders = useMemo(() => {
    let rows = [...orders]
    if (query.trim()) {
      const s = query.toLowerCase()
      rows = rows.filter(
        (o) =>
          o.number.toLowerCase().includes(s) ||
          o.customerName.toLowerCase().includes(s) ||
          o.status.toLowerCase().includes(s),
      )
    }
    if (sortKey) {
      rows.sort((a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        if (typeof va === 'number' && typeof vb === 'number') return sortDir === 'asc' ? va - vb : vb - va
        return sortDir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va))
      })
    }
    return rows
  }, [orders, query, sortKey, sortDir])

  const filteredCustomers = useMemo(() => {
    let rows = [...customers]
    if (query.trim()) {
      const s = query.toLowerCase()
      rows = rows.filter(
        (c) =>
          c.name.toLowerCase().includes(s) ||
          c.email.toLowerCase().includes(s),
      )
    }
    if (sortKey) {
      rows.sort((a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        if (typeof va === 'number' && typeof vb === 'number') return sortDir === 'asc' ? va - vb : vb - va
        return sortDir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va))
      })
    }
    return rows
  }, [customers, query, sortKey, sortDir])

  // Product CRUD
  function openCreateProduct() {
    setEditingProduct({
      id: Date.now(),
      name: '',
      slug: '',
      price: 0,
      stock: 0,
      category: '',
      active: true,
      createdAt: new Date().toISOString().slice(0, 10),
    })
    setShowProdModal(true)
  }
  function openEditProduct(p: Product) {
    setEditingProduct({ ...p })
    setShowProdModal(true)
  }
  function saveProduct() {
    if (!editingProduct) return
    // TODO: Replace with API call
    setProducts((prev) => {
      const exists = prev.some((x) => x.id === editingProduct.id)
      if (exists) return prev.map((x) => (x.id === editingProduct.id ? editingProduct : x))
      return [editingProduct, ...prev]
    })
    setShowProdModal(false)
  }
  function deleteProduct(id: number) {
    if (!confirm('Delete this product?')) return
    // TODO: API delete
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  // Order update
  function openEditOrder(o: Order) {
    setEditingOrder({ ...o })
    setShowOrderModal(true)
  }
  function saveOrder() {
    if (!editingOrder) return
    // TODO: API update
    setOrders((prev) => prev.map((o) => (o.id === editingOrder.id ? editingOrder : o)))
    setShowOrderModal(false)
  }

  // Dashboard metrics
  const totalRevenue = useMemo(() => orders.reduce((a, b) => a + b.total, 0), [orders])
  const totalOrders = orders.length
  const lowStock = products.filter((p) => p.stock <= 10).length
  const activeProducts = products.filter((p) => p.active).length

  return (
    <div className="admin">
      <aside className="sidebar">
        <div className="brand">Admin</div>
        <nav className="menu" aria-label="Admin navigation">
          <button className={`menu-item ${tab === 'dashboard' ? 'active' : ''}`} onClick={() => setTab('dashboard')}>Dashboard</button>
          <button className={`menu-item ${tab === 'products' ? 'active' : ''}`} onClick={() => setTab('products')}>Products</button>
          <button className={`menu-item ${tab === 'orders' ? 'active' : ''}`} onClick={() => setTab('orders')}>Orders</button>
          <button className={`menu-item ${tab === 'customers' ? 'active' : ''}`} onClick={() => setTab('customers')}>Customers</button>
          <button className={`menu-item ${tab === 'settings' ? 'active' : ''}`} onClick={() => setTab('settings')}>Settings</button>
        </nav>
        <div className="sidebar-foot">
          <button className="btn btn-ghost" onClick={() => navigate('/')}>View site</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <input
            className="search"
            placeholder={`Search ${tab}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="top-actions">
            {tab === 'products' && <button className="btn btn-primary" onClick={openCreateProduct}>Add product</button>}
          </div>
        </header>

        <section className="content">
          {tab === 'dashboard' && (
            <>
              <h1 className="title">Overview</h1>
              <div className="cards">
                <div className="kpi">
                  <div className="kpi-label">Total revenue</div>
                  <div className="kpi-value">{formatMoney(totalRevenue, settings.currency)}</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Orders</div>
                  <div className="kpi-value">{totalOrders}</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Active products</div>
                  <div className="kpi-value">{activeProducts}</div>
                </div>
                <div className="kpi warn">
                  <div className="kpi-label">Low stock</div>
                  <div className="kpi-value">{lowStock}</div>
                </div>
              </div>

              <div className="panel">
                <h2 className="panel-title">Recent orders</h2>
                <Table<Order>
                  keyField="id"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={onSort}
                  empty="No recent orders"
                  columns={[
                    { key: 'number', label: 'Order', sortable: true },
                    { key: 'customerName', label: 'Customer', sortable: true },
                    { key: 'total', label: 'Total', sortable: true, render: (r) => formatMoney(r.total, settings.currency) },
                    { key: 'status', label: 'Status', sortable: true, render: (r) => <span className={`pill ${r.status}`}>{r.status}</span> },
                    { key: 'createdAt', label: 'Date', sortable: true },
                  ]}
                  rows={[...orders].slice(0, 5)}
                />
              </div>
            </>
          )}

          {tab === 'products' && (
            <>
              <h1 className="title">Products</h1>
              <div className="panel">
                <Table<Product>
                  keyField="id"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={onSort}
                  empty="No products found"
                  columns={[
                    { key: 'name', label: 'Name', sortable: true, render: (r) => <div className="cell-main"><div className="cell-strong">{r.name}</div><div className="cell-muted">{r.slug}</div></div> },
                    { key: 'category', label: 'Category', sortable: true },
                    { key: 'price', label: 'Price', sortable: true, render: (r) => formatMoney(r.price, settings.currency) },
                    { key: 'stock', label: 'Stock', sortable: true, render: (r) => <span className={r.stock <= 10 ? 'danger' : ''}>{r.stock}</span> },
                    { key: 'active', label: 'Active', sortable: true, render: (r) => <span className={`pill ${r.active ? 'paid' : 'canceled'}`}>{r.active ? 'Yes' : 'No'}</span> },
                    { key: 'createdAt', label: 'Created', sortable: true },
                    { key: 'actions', label: 'Actions', render: (r) => (
                      <div className="actions">
                        <button className="btn btn-ghost" onClick={() => openEditProduct(r)}>Edit</button>
                        <button className="btn btn-ghost danger" onClick={() => deleteProduct(r.id)}>Delete</button>
                      </div>
                    )},
                  ]}
                  rows={filteredProducts}
                />
              </div>
            </>
          )}

          {tab === 'orders' && (
            <>
              <h1 className="title">Orders</h1>
              <div className="panel">
                <Table<Order>
                  keyField="id"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={onSort}
                  empty="No orders found"
                  columns={[
                    { key: 'number', label: 'Order', sortable: true },
                    { key: 'customerName', label: 'Customer', sortable: true },
                    { key: 'total', label: 'Total', sortable: true, render: (r) => formatMoney(r.total, settings.currency) },
                    { key: 'status', label: 'Status', sortable: true, render: (r) => <span className={`pill ${r.status}`}>{r.status}</span> },
                    { key: 'createdAt', label: 'Date', sortable: true },
                    { key: 'actions', label: 'Actions', render: (r) => (
                      <div className="actions">
                        <button className="btn btn-ghost" onClick={() => openEditOrder(r)}>Update</button>
                      </div>
                    ) },
                  ]}
                  rows={filteredOrders}
                />
              </div>
            </>
          )}

          {tab === 'customers' && (
            <>
              <h1 className="title">Customers</h1>
              <div className="panel">
                <Table<Customer>
                  keyField="id"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={onSort}
                  empty="No customers found"
                  columns={[
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'orders', label: 'Orders', sortable: true },
                    { key: 'totalSpent', label: 'Total Spent', sortable: true, render: (r) => formatMoney(r.totalSpent, settings.currency) },
                    { key: 'createdAt', label: 'Since', sortable: true },
                  ]}
                  rows={filteredCustomers}
                />
              </div>
            </>
          )}

          {tab === 'settings' && (
            <>
              <h1 className="title">Settings</h1>
              <div className="panel">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="siteName">Site name</label>
                    <input id="siteName" value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="supportEmail">Support email</label>
                    <input id="supportEmail" type="email" value={settings.supportEmail} onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="supportPhone">Support phone</label>
                    <input id="supportPhone" value={settings.supportPhone} onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })} />
                  </div>
                  <div className="field">
                    <label htmlFor="currency">Currency</label>
                    <select id="currency" value={settings.currency} onChange={(e) => setSettings({ ...settings, currency: e.target.value as any })}>
                      <option value="USD">USD</option>
                      <option value="LKR">LKR</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="brandColor">Brand color</label>
                    <input id="brandColor" type="color" value={settings.brandColor} onChange={(e) => setSettings({ ...settings, brandColor: e.target.value })} />
                  </div>
                  <div className="field col-span">
                    <label htmlFor="bankTransferNote">Bank transfer note</label>
                    <textarea id="bankTransferNote" rows={4} value={settings.bankTransferNote} onChange={(e) => setSettings({ ...settings, bankTransferNote: e.target.value })} />
                  </div>
                </div>
                <div className="actions">
                  <button className="btn btn-primary" onClick={() => alert('Settings saved (TODO: wire API)')}>Save settings</button>
                </div>
              </div>
            </>
          )}
        </section>
      </main>

      {/* Product Modal */}
      <Modal
        open={showProdModal}
        title={editingProduct?.name ? 'Edit product' : 'Add product'}
        onClose={() => setShowProdModal(false)}
        actions={
          <>
            <button className="btn btn-ghost" onClick={() => setShowProdModal(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={saveProduct}>Save</button>
          </>
        }
      >
        {editingProduct && (
          <div className="form-grid">
            <div className="field">
              <label htmlFor="pname">Name</label>
              <input id="pname" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="pslug">Slug</label>
              <input id="pslug" value={editingProduct.slug} onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="pcat">Category</label>
              <input id="pcat" value={editingProduct.category || ''} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="pprice">Price</label>
              <input id="pprice" type="number" step="0.01" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label htmlFor="pstock">Stock</label>
              <input id="pstock" type="number" value={editingProduct.stock} onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label htmlFor="pactive">Active</label>
              <select id="pactive" value={editingProduct.active ? 'yes' : 'no'} onChange={(e) => setEditingProduct({ ...editingProduct, active: e.target.value === 'yes' })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="field col-span">
              <label htmlFor="pimages">Image URLs (comma separated)</label>
              <textarea id="pimages" rows={3} value={(editingProduct.images || []).join(', ')} onChange={(e) => setEditingProduct({ ...editingProduct, images: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} />
            </div>
          </div>
        )}
      </Modal>

      {/* Order Modal */}
      <Modal
        open={showOrderModal}
        title="Update order"
        onClose={() => setShowOrderModal(false)}
        actions={
          <>
            <button className="btn btn-ghost" onClick={() => setShowOrderModal(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={saveOrder}>Save</button>
          </>
        }
      >
        {editingOrder && (
          <div className="form-grid">
            <div className="field">
              <label>Order</label>
              <input disabled value={editingOrder.number} />
            </div>
            <div className="field">
              <label>Customer</label>
              <input disabled value={editingOrder.customerName} />
            </div>
            <div className="field">
              <label>Status</label>
              <select
                value={editingOrder.status}
                onChange={(e) => setEditingOrder({ ...editingOrder, status: e.target.value as Order['status'] })}
              >
                <option value="pending">pending</option>
                <option value="paid">paid</option>
                <option value="shipped">shipped</option>
                <option value="delivered">delivered</option>
                <option value="canceled">canceled</option>
              </select>
            </div>
            <div className="field">
              <label>Total</label>
              <input type="number" step="0.01" value={editingOrder.total} onChange={(e) => setEditingOrder({ ...editingOrder, total: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label>Date</label>
              <input type="date" value={editingOrder.createdAt} onChange={(e) => setEditingOrder({ ...editingOrder, createdAt: e.target.value })} />
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
          --warn:#ffb020;
        }
        .admin{display:grid;grid-template-columns:260px 1fr;min-height:100vh;background:var(--bg);color:var(--text)}
        .sidebar{position:sticky;top:0;height:100vh;border-right:1px solid var(--line);background:var(--surface);display:flex;flex-direction:column}
        .brand{padding:16px;font-weight:800;letter-spacing:.2px;color:white;border-bottom:1px solid var(--line)}
        .menu{display:flex;flex-direction:column;padding:8px}
        .menu-item{appearance:none;border:none;background:transparent;text-align:left;color:var(--text);padding:10px 12px;border-radius:8px}
        .menu-item:hover{background:var(--ghost)}
        .menu-item.active{background:var(--brand);color:white}
        .sidebar-foot{margin-top:auto;padding:8px;border-top:1px solid var(--line)}
        .main{display:flex;flex-direction:column;min-width:0}
        .topbar{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--line);background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 80%)}
        .search{flex:1;min-width:200px;height:38px;background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--text);padding:0 12px}
        .top-actions{display:flex;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .btn-ghost.danger{color:#ffbcbc;border-color:var(--line)}
        .content{padding:16px;display:grid;gap:16px}
        .title{margin:0 0 4px;font-size:22px}
        .cards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .kpi{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .kpi.warn{box-shadow:inset 0 0 0 1px rgba(255,176,32,.25)}
        .kpi-label{color:var(--muted);font-size:12px}
        .kpi-value{font-size:22px;font-weight:800;margin-top:4px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .panel-title{margin:0 0 8px;font-size:16px}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-top:8px}
        table{width:100%;border-collapse:separate;border-spacing:0}
        thead th{position:sticky;top:0;background:var(--surface-alt);text-align:left;padding:10px;border-bottom:1px solid var(--line)}
        tbody td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}
        .empty{color:var(--muted);text-align:center;padding:14px}
        .th-inner{display:flex;align-items:center;gap:6px}
        .sort-btn{border:1px solid var(--line);background:var(--ghost);border-radius:6px;color:var(--text);padding:0 6px;height:22px}
        .cell-main{display:flex;flex-direction:column}
        .cell-strong{font-weight:600}
        .cell-muted{color:var(--muted);font-size:12px}
        .pill{display:inline-flex;align-items:center;justify-content:center;padding:2px 8px;border-radius:999px;border:1px solid var(--line);background:var(--surface)}
        .pill.pending{background:rgba(255,176,32,.08);color:#ffd891;border-color:rgba(255,176,32,.3)}
        .pill.paid{background:rgba(31,191,117,.08);color:#9be7c4;border-color:rgba(31,191,117,.3)}
        .pill.shipped{background:rgba(109,116,255,.08);color:#bfc4ff;border-color:rgba(109,116,255,.3)}
        .pill.delivered{background:rgba(31,191,117,.1);color:#d5f7e9;border-color:rgba(31,191,117,.35)}
        .pill.canceled{background:rgba(255,93,93,.08);color:#ffbcbc;border-color:rgba(255,93,93,.3)}
        .danger{color:#ffbcbc}
        .actions{display:flex;gap:8px}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .field{display:grid;gap:6px}
        .field.col-span{grid-column:1 / -1}
        label{font-size:12px;color:var(--muted)}
        input, select, textarea{background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--text);padding:10px}
        textarea{resize:vertical}
        .icon-btn{border:1px solid var(--line);background:var(--ghost);color:var(--text);border-radius:8px;padding:6px 8px}
        .modal{position:fixed;inset:0;z-index:100}
        .modal-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.5)}
        .modal-card{position:relative;z-index:101;max-width:720px;margin:10vh auto;background:var(--card);border:1px solid var(--line);border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.4);padding:12px}
        .modal-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--line)}
        .modal-body{padding:12px 0}
        .modal-actions{display:flex;gap:8px;justify-content:flex-end;padding-top:8px;border-top:1px solid var(--line)}
        @media (max-width:1200px){ .cards{grid-template-columns:repeat(2,1fr)} .form-grid{grid-template-columns:1fr} }
        @media (max-width:900px){ .admin{grid-template-columns:1fr} .sidebar{position:static;height:auto} }
      `}</style>
    </div>
  )
}
