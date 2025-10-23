import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../lib/cart'

export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useCart()
  const [bump, setBump] = useState(false)
  const [open, setOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Close menus on route change
    setOpen(false)
    setUserOpen(false)

    // Force blur on all focused elements when route changes
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }, 100)
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

  // Animate cart badge when count changes
  useEffect(() => {
    if (count <= 0) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 300)
    return () => clearTimeout(t)
  }, [count])

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

  // Custom class function for auth buttons
  const authLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'auth-btn active' : 'auth-btn'

  const inAdmin = location.pathname.startsWith('/admin')
  
  return (
    <header className="header" ref={headerRef}>
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
          <Link to="/" className="brand">Own Setup 💼</Link>
        </div>

        <nav id="main-menu" className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {!inAdmin && (
            <>
              <NavLink to="/" end className={linkClass}>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              {user && (
                <>
                  <NavLink to="/shop" className={linkClass}>Shop</NavLink>
                  <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                  <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link active' : 'nav-link cart-link'}>
                    Cart
                    <span className={`badge ${bump ? 'bump' : ''}`} aria-label={`${count} items in cart`}>{count}</span>
                  </NavLink>
                </>
              )}
            </>
          )}

          <div className="divider" aria-hidden />

          {user ? (
            <div className="user-wrap" ref={menuRef}>
              {user.is_staff && !inAdmin && (
                <NavLink to="/admin" className={linkClass}>Admin</NavLink>
              )}
              <button
                className="user-btn"
                aria-haspopup="menu"
                aria-expanded={userOpen}
                onClick={() => setUserOpen(v => !v)}
                title={user.email}
              >
                <div className="avatar" aria-hidden>
                  {user?.avatar_url ? <img src={user.avatar_url} alt="" /> : null}
                </div>
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
              <NavLink 
                to="/login" 
                end 
                className={authLinkClass}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={authLinkClass}
              >
                Register
              </NavLink>
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
        
        /* Base nav-link styles */
        .nav-link{
          color:var(--text);
          text-decoration:none;
          padding:8px 10px;
          border-radius:8px;
          transition:background 0.2s ease, color 0.2s ease;
          position:relative;
        }
        
        /* Hover state - only on NON-active links */
        .nav-link:not(.active):hover{
          background:var(--ghost);
          color:var(--text);
        }
        
        /* Active state */
        .nav-link.active{
          color:white;
          background:var(--brand);
        }
        
        /* Keep active state even when hovered */
        .nav-link.active:hover{
          color:white;
          background:var(--brand);
          cursor:default;
        }
        
        /* Prevent focus styles from interfering */
        .nav-link:focus{
          outline:none;
        }
        
        /* Only show focus-visible ring on keyboard navigation, not on active state */
        .nav-link:not(.active):focus-visible{
          outline:2px solid var(--brand);
          outline-offset:2px;
        }
        
        .cart-link{display:inline-flex;align-items:center;gap:8px}
        .badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:var(--brand);color:white;font-size:12px}
        .badge.bump{animation: cart-bounce .3s ease}
        @keyframes cart-bounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.25); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        /* Sparkle pulse when fly-to-cart lands */
        .badge.sparkle{
          box-shadow: 0 0 0 0 rgba(109,116,255,0.6);
          animation: badge-glow .6s ease-out;
        }
        .badge.sparkle::after{
          content:"";
          position:absolute;left:50%;top:50%;
          width:6px;height:6px;border-radius:50%;
          background:white;
          transform:translate(-50%,-50%) scale(.2);
          box-shadow: 0 0 0 8px rgba(109,116,255,0.3), 0 0 18px 8px rgba(109,116,255,0.25);
          opacity:.9;
          animation: sparkle-pop .6s ease-out forwards;
          pointer-events:none;
        }
        @keyframes badge-glow {
          0% { box-shadow: 0 0 0 0 rgba(109,116,255,0.6); }
          80% { box-shadow: 0 0 0 10px rgba(109,116,255,0); }
          100% { box-shadow: none; }
        }
        @keyframes sparkle-pop {
          0% { transform: translate(-50%,-50%) scale(.2); opacity:.9; }
          70% { transform: translate(-50%,-50%) scale(2.4); opacity:.35; box-shadow: 0 0 0 14px rgba(109,116,255,0); }
          100% { transform: translate(-50%,-50%) scale(2.8); opacity:0; box-shadow:none; }
        }
        .divider{width:1px;height:24px;background:var(--line);margin:0 6px}
        .auth{display:flex;align-items:center;gap:10px}
        
        /* Auth button styles - separate from regular nav-link */
        .auth-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius:8px;
          padding:8px 16px;
          border:1px solid var(--line);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.2s ease;
          font-weight:500;
        }
        
        /* Remove focus outline */
        .auth-btn:focus {
          outline:none;
        }
        
        /* Hover state - only on NON-active buttons */
        .auth-btn:not(.active):hover{
          background:var(--brand-600);
          border-color:var(--brand-600);
          color:white;
        }
        
        /* Active state - ONLY when route matches */
        .auth-btn.active{
          background:var(--brand);
          border-color:var(--brand);
          color:white;
          box-shadow:0 4px 12px rgba(109,116,255,0.3);
        }
        
        /* Ensure active state persists even on hover */
        .auth-btn.active:hover {
          background:var(--brand);
          border-color:var(--brand);
        }
        
        /* Focus-visible only on non-active buttons */
        .auth-btn:not(.active):focus-visible {
          outline:2px solid var(--brand);
          outline-offset:2px;
        }
        
        .user-wrap{position:relative;display:flex;align-items:center;gap:8px}
        .user-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:4px 8px;border:1px solid var(--line);background:transparent;color:var(--text);cursor:pointer}
        .user-btn:hover{background:var(--ghost)}
        .user-btn:focus{outline:none}
        .user-btn:active{background:var(--ghost)}
  .avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#2a2b36,#171821);border:1px solid var(--line);overflow:hidden}
  .avatar img{width:100%;height:100%;object-fit:cover;display:block}
        .email{color:var(--muted);font-size:12px;user-select:none}
        .user-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:180px;border:1px solid var(--line);background:var(--surface);border-radius:10px;box-shadow:0 6px 22px rgba(0,0,0,.3);padding:6px;z-index:100}
        .menu-item{display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;color:var(--text) !important;text-decoration:none;border:none;background:transparent !important;cursor:pointer;font-size:14px;font-family:inherit;user-select:none;-webkit-tap-highlight-color:transparent}
        .menu-item:hover{background:var(--ghost) !important;color:var(--text) !important}
        .menu-item:active{background:var(--ghost) !important;color:var(--text) !important}
        .menu-item:focus{outline:none;box-shadow:none;background:transparent !important;color:var(--text) !important}
        .menu-item:focus-visible{outline:2px solid var(--brand);outline-offset:-2px;background:var(--ghost) !important}
        .menu-item::-moz-focus-inner{border:0} 
        .menu-item:visited{color:var(--text) !important}
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.4)}
        @media (max-width:900px){
          .hamburger{display:flex}
          .nav{position:fixed;inset:64px 0 auto auto;top:64px;right:0;flex-direction:column;align-items:stretch;background:var(--surface);border-left:1px solid var(--line);padding:12px;gap:6px;width:min(300px,90vw);height:calc(100vh - 64px);transform:translateX(100%);transition:.2s}
          .nav.open{transform:translateX(0)}
          .divider{display:none}
          .auth{margin-top:6px;flex-direction:column;width:100%}
          .auth-btn{width:100%}
        }
      `}</style>
    </header>
  )
}
