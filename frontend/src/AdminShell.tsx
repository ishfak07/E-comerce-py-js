import { Outlet, Link, useLocation } from 'react-router-dom'

export default function AdminShell() {
  const { pathname } = useLocation()
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="brand">Admin</div>
        <nav>
          <Link to="/admin" className={pathname === '/admin' ? 'active' : ''}>Dashboard</Link>
          <Link to="/admin/products" className={pathname.startsWith('/admin/products') ? 'active' : ''}>Products</Link>
          <Link to="/admin/users" className={pathname.startsWith('/admin/users') ? 'active' : ''}>Users</Link>
          <Link to="/admin/orders" className={pathname.startsWith('/admin/orders') ? 'active' : ''}>Orders</Link>
          <Link to="/admin/reports" className={pathname.startsWith('/admin/reports') ? 'active' : ''}>Reports</Link>
          <Link to="/admin/settings" className={pathname.startsWith('/admin/settings') ? 'active' : ''}>Settings</Link>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
      <style>{`
      .admin-layout{display:grid;grid-template-columns:240px 1fr;min-height:100vh}
      .admin-sidebar{border-right:1px solid #2a2b36;padding:16px}
      .brand{font-weight:800;margin-bottom:12px}
      nav{display:grid;gap:8px}
      nav a{color:#e9e9ef;text-decoration:none;padding:8px;border-radius:8px}
      nav a.active, nav a:hover{background:#232434}
      .admin-main{padding:16px}
      @media (max-width:900px){.admin-layout{grid-template-columns:1fr}}
      `}</style>
    </div>
  )
}
