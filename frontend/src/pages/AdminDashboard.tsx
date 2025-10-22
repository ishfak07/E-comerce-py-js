import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* =========================
   Types
   ========================= */

type Currency = 'USD' | 'LKR' | 'EUR'

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

type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'canceled'

type Order = {
  id: number
  number: string
  customerId: number
  customerName: string
  total: number
  status: OrderStatus
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
  currency: Currency
  brandColor: string
  bankTransferNote: string
}

/* =========================
   Demo seed
   ========================= */

const defaultSettings: SiteSettings = {
  siteName: 'Ecommerce',
  supportEmail: '',
  supportPhone: '',
  currency: 'LKR',
  brandColor: '#6D74FF',
  bankTransferNote: '',
}

/* =========================
   Helpers
   ========================= */

function formatMoney(x: number, currency: Currency) {
  const sym = currency === 'USD' ? '$' : currency === 'LKR' ? 'LKR ' : '€'
  return `${sym}${x.toFixed(2)}`
}

function safeString(v: unknown): string {
  return typeof v === 'string' ? v : ''
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
  // Decorate-sort-undecorate for stability
  return array
    .map((el, index) => ({ el, index }))
    .sort((a, b) => {
      const order = comparator(a.el, b.el)
      if (order !== 0) return order
      return a.index - b.index
    })
    .map(({ el }) => el)
}

function defaultComparator(a: unknown, b: unknown): number {
  const at = typeof a
  const bt = typeof b
  if (at === 'number' && bt === 'number') return (a as number) - (b as number)
  return String(a ?? '').localeCompare(String(b ?? ''))
}

/* =========================
   Reusable UI
   ========================= */

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
  actions?: React.ReactNode
  labelledById?: string
  describedById?: string
}

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement>, onEscape?: () => void) {
  useEffect(() => {
    if (!active || !containerRef.current) return
    const container = containerRef.current
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',')

    const previouslyFocused = document.activeElement as HTMLElement | null

    const focusFirst = () => {
      const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors))
      const first = focusables[0]
      if (first) first.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onEscape?.()
        return
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
          (el) => el.offsetParent !== null || el.getClientRects().length > 0
        )
        if (focusables.length === 0) {
          e.preventDefault()
          return
        }
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const current = document.activeElement as HTMLElement
        if (e.shiftKey) {
          if (!current || current === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (!current || current === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    // Move focus in
    const timer = setTimeout(focusFirst, 0)
    document.addEventListener('keydown', handleKeyDown, true)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown, true)
      // Restore focus out
      previouslyFocused?.focus?.()
    }
  }, [active, containerRef, onEscape])
}

function Modal({ open, title, onClose, children, actions, labelledById, describedById }: ModalProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  useFocusTrap(open, cardRef, onClose)

  if (!open) return null
  const titleId = labelledById || 'modal-title'
  const descId = describedById || 'modal-desc'

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" ref={cardRef}>
        <div className="modal-head">
          <h3 id={titleId}>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">
            ✕
          </button>
        </div>
        <div className="modal-body" id={descId}>
          {children}
        </div>
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  )
}

type ColumnDef<T> = {
  key: keyof T | 'actions'
  label: string
  width?: string
  render?: (row: T) => React.ReactNode
  sortable?: boolean
}

type TableProps<T> = {
  columns: ColumnDef<T>[]
  rows: T[]
  keyField: keyof T
  onSort?: (key: string) => void
  sortKey?: string
  sortDir?: 'asc' | 'desc'
  empty?: string
}

function Table<T extends Record<string, unknown>>({
  columns,
  rows,
  keyField,
  onSort,
  sortKey,
  sortDir,
  empty,
}: TableProps<T>) {
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
                    <button
                      className="sort-btn"
                      onClick={() => onSort(String(c.key))}
                      aria-label={`Sort by ${c.label}`}
                      title={`Sort by ${c.label}`}
                      type="button"
                    >
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
              <td colSpan={columns.length} className="empty">
                {empty || 'No data'}
              </td>
            </tr>
          ) : (
            rows.map((r) => (
              <tr key={String(r[keyField])}>
                {columns.map((c) => (
                  <td key={String(c.key)}>{c.render ? c.render(r) : String(r[c.key as keyof T] ?? '')}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

/* =========================
   Admin Root
   ========================= */

type Tab = 'dashboard' | 'products' | 'orders' | 'customers' | 'settings'

export default function AdminDashboard() {
  const navigate = useNavigate()

  const [tab, setTab] = useState<Tab>('dashboard')

  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)

  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState<string>('')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  // Selection/Edit state
  const [showProdModal, setShowProdModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const [showOrderModal, setShowOrderModal] = useState(false)
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)

  const onSort = useCallback((key: string) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
        return prev
      }
      setSortDir('asc')
      return key
    })
  }, [])

  // Derived filters + stable sort
  const filteredProducts = useMemo(() => {
    const s = query.trim().toLowerCase()
    let rows = s
      ? products.filter((p) => {
          const n = p.name.toLowerCase()
          const sl = p.slug.toLowerCase()
          const cat = (p.category || '').toLowerCase()
          return n.includes(s) || sl.includes(s) || cat.includes(s)
        })
      : [...products]

    if (sortKey) {
      rows = stableSort(rows, (a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        const cmp = defaultComparator(va, vb)
        return sortDir === 'asc' ? cmp : -cmp
      })
    }
    return rows
  }, [products, query, sortKey, sortDir])

  const filteredOrders = useMemo(() => {
    const s = query.trim().toLowerCase()
    let rows = s
      ? orders.filter((o) => {
          const num = o.number.toLowerCase()
          const cn = o.customerName.toLowerCase()
          const st = o.status.toLowerCase()
          return num.includes(s) || cn.includes(s) || st.includes(s)
        })
      : [...orders]

    if (sortKey) {
      rows = stableSort(rows, (a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        const cmp = defaultComparator(va, vb)
        return sortDir === 'asc' ? cmp : -cmp
      })
    }
    return rows
  }, [orders, query, sortKey, sortDir])

  const filteredCustomers = useMemo(() => {
    const s = query.trim().toLowerCase()
    let rows = s
      ? customers.filter((c) => c.name.toLowerCase().includes(s) || c.email.toLowerCase().includes(s))
      : [...customers]

    if (sortKey) {
      rows = stableSort(rows, (a: any, b: any) => {
        const va = a[sortKey]
        const vb = b[sortKey]
        const cmp = defaultComparator(va, vb)
        return sortDir === 'asc' ? cmp : -cmp
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
      images: [],
    })
    setShowProdModal(true)
  }
  function openEditProduct(p: Product) {
    setEditingProduct({ ...p, images: [...(p.images || [])] })
    setShowProdModal(true)
  }
  function saveProduct() {
    if (!editingProduct) return
    setProducts((prev) => {
      const exists = prev.some((x) => x.id === editingProduct.id)
      if (exists) return prev.map((x) => (x.id === editingProduct.id ? editingProduct : x))
      return [editingProduct, ...prev]
    })
    setShowProdModal(false)
  }
  function deleteProduct(id: number) {
    if (!window.confirm('Delete this product?')) return
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  // Order update
  function openEditOrder(o: Order) {
    setEditingOrder({ ...o })
    setShowOrderModal(true)
  }
  function saveOrder() {
    if (!editingOrder) return
    setOrders((prev) => prev.map((o) => (o.id === editingOrder.id ? editingOrder : o)))
    setShowOrderModal(false)
  }

  // Dashboard metrics
  const totalRevenue = useMemo(() => orders.reduce((a, b) => a + b.total, 0), [orders])
  const totalOrders = orders.length
  const lowStock = products.filter((p) => p.stock <= 10).length
  const activeProducts = products.filter((p) => p.active).length

  // Reset sort when tab changes to avoid confusing cross-entity keys
  useEffect(() => {
    setSortKey('')
    setSortDir('asc')
    setQuery('')
  }, [tab])

  return (
    <div className="admin">
      <aside className="sidebar">
        <div className="brand">Admin</div>
        <nav className="menu" aria-label="Admin navigation">
          <button
            className={`menu-item ${tab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setTab('dashboard')}
            type="button"
          >
            Dashboard
          </button>
          <button
            className={`menu-item ${tab === 'products' ? 'active' : ''}`}
            onClick={() => setTab('products')}
            type="button"
          >
            Products
          </button>
          <button
            className={`menu-item ${tab === 'orders' ? 'active' : ''}`}
            onClick={() => setTab('orders')}
            type="button"
          >
            Orders
          </button>
          <button
            className={`menu-item ${tab === 'customers' ? 'active' : ''}`}
            onClick={() => setTab('customers')}
            type="button"
          >
            Customers
          </button>
          <button
            className={`menu-item ${tab === 'settings' ? 'active' : ''}`}
            onClick={() => setTab('settings')}
            type="button"
          >
            Settings
          </button>
        </nav>
        <div className="sidebar-foot">
          <button className="btn btn-ghost" onClick={() => navigate('/')} type="button">
            View site
          </button>
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
            {tab === 'products' && (
              <button className="btn btn-primary" onClick={openCreateProduct} type="button">
                Add product
              </button>
            )}
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
                    {
                      key: 'status',
                      label: 'Status',
                      sortable: true,
                      render: (r) => <span className={`pill ${r.status}`}>{r.status}</span>,
                    },
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
                    {
                      key: 'name',
                      label: 'Name',
                      sortable: true,
                      render: (r) => (
                        <div className="cell-main">
                          <div className="cell-strong">{r.name}</div>
                          <div className="cell-muted">{r.slug}</div>
                        </div>
                      ),
                    },
                    { key: 'category', label: 'Category', sortable: true, render: (r) => safeString(r.category) },
                    { key: 'price', label: 'Price', sortable: true, render: (r) => formatMoney(r.price, settings.currency) },
                    {
                      key: 'stock',
                      label: 'Stock',
                      sortable: true,
                      render: (r) => <span className={r.stock <= 10 ? 'danger' : ''}>{r.stock}</span>,
                    },
                    {
                      key: 'active',
                      label: 'Active',
                      sortable: true,
                      render: (r) => (
                        <span className={`pill ${r.active ? 'paid' : 'canceled'}`}>{r.active ? 'Yes' : 'No'}</span>
                      ),
                    },
                    { key: 'createdAt', label: 'Created', sortable: true, render: (r) => safeString(r.createdAt) },
                    {
                      key: 'actions',
                      label: 'Actions',
                      render: (r) => (
                        <div className="actions">
                          <button className="btn btn-ghost" onClick={() => openEditProduct(r)} type="button">
                            Edit
                          </button>
                          <button className="btn btn-ghost danger" onClick={() => deleteProduct(r.id)} type="button">
                            Delete
                          </button>
                        </div>
                      ),
                    },
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
                    {
                      key: 'status',
                      label: 'Status',
                      sortable: true,
                      render: (r) => <span className={`pill ${r.status}`}>{r.status}</span>,
                    },
                    { key: 'createdAt', label: 'Date', sortable: true },
                    {
                      key: 'actions',
                      label: 'Actions',
                      render: (r) => (
                        <div className="actions">
                          <button className="btn btn-ghost" onClick={() => openEditOrder(r)} type="button">
                            Update
                          </button>
                        </div>
                      ),
                    },
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
                    {
                      key: 'totalSpent',
                      label: 'Total Spent',
                      sortable: true,
                      render: (r) => formatMoney(r.totalSpent, settings.currency),
                    },
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
                    <input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="supportEmail">Support email</label>
                    <input
                      id="supportEmail"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="supportPhone">Support phone</label>
                    <input
                      id="supportPhone"
                      value={settings.supportPhone}
                      onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="currency">Currency</label>
                    <select
                      id="currency"
                      value={settings.currency}
                      onChange={(e) => setSettings({ ...settings, currency: e.target.value as Currency })}
                    >
                      <option value="USD">USD</option>
                      <option value="LKR">LKR</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="brandColor">Brand color</label>
                    <input
                      id="brandColor"
                      type="color"
                      value={settings.brandColor}
                      onChange={(e) => setSettings({ ...settings, brandColor: e.target.value })}
                    />
                  </div>
                  <div className="field col-span">
                    <label htmlFor="bankTransferNote">Bank transfer note</label>
                    <textarea
                      id="bankTransferNote"
                      rows={4}
                      value={settings.bankTransferNote}
                      onChange={(e) => setSettings({ ...settings, bankTransferNote: e.target.value })}
                    />
                  </div>
                </div>
                <div className="actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.alert('Settings saved (TODO: wire API)')}
                    type="button"
                  >
                    Save settings
                  </button>
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
            <button className="btn btn-ghost" onClick={() => setShowProdModal(false)} type="button">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveProduct} type="button">
              Save
            </button>
          </>
        }
      >
        {editingProduct && (
          <div className="form-grid">
            <div className="field">
              <label htmlFor="pname">Name</label>
              <input
                id="pname"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="pslug">Slug</label>
              <input
                id="pslug"
                value={editingProduct.slug}
                onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="pcat">Category</label>
              <input
                id="pcat"
                value={editingProduct.category || ''}
                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="pprice">Price</label>
              <input
                id="pprice"
                type="number"
                step="0.01"
                value={editingProduct.price}
                onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) || 0 })}
              />
            </div>
            <div className="field">
              <label htmlFor="pstock">Stock</label>
              <input
                id="pstock"
                type="number"
                value={editingProduct.stock}
                onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) || 0 })}
              />
            </div>
            <div className="field">
              <label htmlFor="pactive">Active</label>
              <select
                id="pactive"
                value={editingProduct.active ? 'yes' : 'no'}
                onChange={(e) => setEditingProduct({ ...editingProduct, active: e.target.value === 'yes' })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="field col-span">
              <label htmlFor="pimages">Image URLs (comma separated)</label>
              <textarea
                id="pimages"
                rows={3}
                value={(editingProduct.images || []).join(', ')}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    images: e.target.value
                      .split(',')
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
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
            <button className="btn btn-ghost" onClick={() => setShowOrderModal(false)} type="button">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveOrder} type="button">
              Save
            </button>
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
                onChange={(e) => setEditingOrder({ ...editingOrder, status: e.target.value as OrderStatus })}
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
              <input
                type="number"
                step="0.01"
                value={editingOrder.total}
                onChange={(e) => setEditingOrder({ ...editingOrder, total: Number(e.target.value) || 0 })}
              />
            </div>
            <div className="field">
              <label>Date</label>
              <input
                type="date"
                value={editingOrder.createdAt}
                onChange={(e) => setEditingOrder({ ...editingOrder, createdAt: e.target.value })}
              />
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
          --brand:${settings.brandColor};
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
        .menu-item{appearance:none;border:none;background:transparent;text-align:left;color:var(--text);padding:10px 12px;border-radius:8px;cursor:pointer}
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
        thead th{position:sticky;top:0;background:var(--surface-alt);text-align:left;padding:10px;border-bottom:1px solid var(--line);z-index:1}
        tbody td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}
        .empty{color:var(--muted);text-align:center;padding:14px}
        .th-inner{display:flex;align-items:center;gap:6px}
        .sort-btn{border:1px solid var(--line);background:var(--ghost);border-radius:6px;color:var(--text);padding:0 6px;height:22px;cursor:pointer}
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
