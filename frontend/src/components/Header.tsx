import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../lib/cart'

export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Close menus on route change
    setOpen(false)
    setUserOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setUserOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) {
        setUserOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="left">
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-controls="main-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <Link to="/" className="brand">Ecommerce</Link>
        </div>

        <nav id="main-menu" className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            <span className="badge" aria-label={`${count} items in cart`}>{count}</span>
          </Link>

          <div className="divider" aria-hidden />

          {user ? (
            <div className="user-wrap" ref={menuRef}>
              {user.is_staff && (
                <Link to="/admin" className="nav-link">Admin</Link>
              )}
              <button
                className="user-btn"
                aria-haspopup="menu"
                aria-expanded={userOpen}
                onClick={() => setUserOpen(v => !v)}
                title={user.email}
              >
                <div className="avatar" aria-hidden />
                <span className="email">{user.email}</span>
              </button>
              {userOpen && (
                <div className="user-menu" role="menu">
                  <Link to="/account" className="menu-item" role="menuitem">Account</Link>
                  <Link to="/orders" className="menu-item" role="menuitem">Orders</Link>
                  <button className="menu-item" role="menuitem" onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} aria-hidden />}

      <style>{`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --ghost:#232434;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .header{position:sticky;top:0;z-index:50;background:rgba(13,13,15,.8);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
        .left{display:flex;align-items:center;gap:10px}
        .brand{color:var(--text);text-decoration:none;font-weight:800;letter-spacing:.2px}
        .hamburger{display:none;flex-direction:column;gap:4px;width:36px;height:36px;align-items:center;justify-content:center;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text)}
        .hamburger span{display:block;width:18px;height:2px;background:var(--text);border-radius:2px}
        .nav{display:flex;align-items:center;gap:14px}
        .nav-link{color:var(--text);text-decoration:none;padding:8px 10px;border-radius:8px}
        .nav-link:hover{background:var(--ghost)}
        .nav-link.active{color:white;background:var(--brand)}
        .cart-link{display:inline-flex;align-items:center;gap:8px}
        .badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:var(--brand);color:white;font-size:12px}
        .divider{width:1px;height:24px;background:var(--line);margin:0 6px}
        .auth{display:flex;align-items:center;gap:10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:8px 12px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .user-wrap{position:relative;display:flex;align-items:center;gap:8px}
        .user-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:4px 8px;border:1px solid var(--line);background:transparent;color:var(--text)}
        .avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#2a2b36,#171821);border:1px solid var(--line)}
        .email{color:var(--muted);font-size:12px}
        .user-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:180px;border:1px solid var(--line);background:var(--surface);border-radius:10px;box-shadow:0 6px 22px rgba(0,0,0,.3);padding:6px}
        .menu-item{display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;color:var(--text);text-decoration:none;border:none;background:transparent}
        .menu-item:hover{background:var(--ghost)}
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.4)}
        @media (max-width:900px){
          .hamburger{display:flex}
          .nav{position:fixed;inset:64px 0 auto auto;top:64px;right:0;flex-direction:column;align-items:stretch;background:var(--surface);border-left:1px solid var(--line);padding:12px;gap:6px;width:min(300px,90vw);height:calc(100vh - 64px);transform:translateX(100%);transition:.2s}
          .nav.open{transform:translateX(0)}
          .divider{display:none}
          .auth{margin-top:6px}
        }
      `}</style>
    </header>
  )
}
