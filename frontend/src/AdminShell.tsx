import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'
import { useState, useEffect } from 'react'

export default function AdminShell() {
  const { pathname } = useLocation()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState(new Date())

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time and date
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="admin-container">
      {/* Top Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <Link to="/" className="admin-brand-link" aria-label="Home">
            <div className="logo-container">
              <div className="logo-wrapper">
                <img 
                  src="/images/title1.png" 
                  alt="Own Setup logo"
                />
                <div className="logo-glow" aria-hidden="true" />
                <div className="logo-ring ring-1" aria-hidden="true" />
                <div className="logo-ring ring-2" aria-hidden="true" />
                <div className="logo-ring ring-3" aria-hidden="true" />
              </div>
            </div>
          </Link>
          <span className="admin-brand animated-text">Own Setup</span>
        </div>
        <div className="admin-header-right">
          {/* Digital Clock */}
          <div className="admin-clock">
            <div className="clock-time">{formatTime(currentTime)}</div>
            <div className="clock-date">{formatDate(currentTime)}</div>
          </div>

          <button className="admin-btn-icon" title="Notifications">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
          </button>
          <div className="admin-user-menu">
            <div className="admin-user-info">
              <div className="admin-avatar">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              <div className="admin-user-details">
                <div className="admin-user-name">{user?.full_name || user?.email}</div>
                <div className="admin-user-role">{user?.is_superuser ? 'Super Admin' : 'Admin'}</div>
              </div>
            </div>
            <button className="admin-btn-logout" onClick={handleLogout}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3zm7.5 10.5L7 8l3.5-3.5.707.707L8.914 7.5H14v1H8.914l2.293 2.293-.707.707z"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-layout">
        {/* Sidebar Navigation */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <Link to="/admin" className={`admin-nav-item ${pathname === '/admin' ? 'active' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span>Dashboard</span>
            </Link>
            
            <Link to="/admin/products" className={`admin-nav-item ${pathname.startsWith('/admin/products') ? 'active' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              <span>Products</span>
            </Link>
            
            <Link to="/admin/users" className={`admin-nav-item ${pathname.startsWith('/admin/users') ? 'active' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span>Users</span>
            </Link>
            
            <Link to="/admin/orders" className={`admin-nav-item ${pathname.startsWith('/admin/orders') ? 'active' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
              </svg>
              <span>Orders</span>
            </Link>

            <div className="admin-nav-divider"></div>

            <Link to="/" className="admin-nav-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"/>
              </svg>
              <span>Back to Site</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main">
          <Outlet />
        </main>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-attachment: fixed;
        }
        
        .admin-header {
          height: 64px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .admin-header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .admin-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .admin-brand {
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .admin-btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .admin-btn-icon:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-1px);
        }
        
        .admin-user-menu {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .admin-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.08);
        }
        
        .admin-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .admin-user-details {
          display: flex;
          flex-direction: column;
        }
        
        .admin-user-name {
          font-size: 14px;
          font-weight: 600;
          color: #1a202c;
        }
        
        .admin-user-role {
          font-size: 12px;
          color: #718096;
        }
        
        .admin-btn-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid rgba(239, 68, 68, 0.2);
          background: white;
          color: #ef4444;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .admin-btn-logout:hover {
          background: #fef2f2;
          border-color: #ef4444;
        }
        
        .admin-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          padding: 24px;
          min-height: calc(100vh - 64px);
        }
        
        .admin-sidebar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 16px;
          height: fit-content;
          position: sticky;
          top: 88px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #4a5568;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
        }
        
        .admin-nav-item:hover {
          background: rgba(102, 126, 234, 0.08);
          color: #667eea;
        }
        
        .admin-nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .admin-nav-item svg {
          flex-shrink: 0;
        }
        
        .admin-nav-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin: 8px 0;
        }
        
        .admin-main {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          min-height: 600px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        @media (max-width: 900px) {
          .admin-layout {
            grid-template-columns: 1fr;
          }
          
          .admin-sidebar {
            position: static;
          }
          
          .admin-user-details {
            display: none;
          }
        }

        /* ========================================
           LOGO ANIMATIONS FOR ADMIN HEADER
           ======================================== */

        .admin-brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-right: 12px;
        }

        /* Container to clip all effects within bounds */
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 42px;
          overflow: hidden;
        }

        /* ========================================
           CONTINUOUS AUTO-ANIMATING LOGO EFFECTS
           ======================================== */

        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Entrance animation */
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          60% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* Logo image - continuous floating + subtle rotation */
        .logo-wrapper img {
          display: block;
          height: 30px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.4));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }

        /* Continuous floating motion - reduced range */
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-3px) scale(1.05);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-2px) scale(1.02);
          }
        }

        /* Subtle continuous rotation */
        @keyframes logoRotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Animated pulsing glow behind logo - contained size */
        .logo-glow {
          position: absolute;
          width: 45px;
          height: 45px;
          background: radial-gradient(circle at center, rgba(0, 0, 0, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(9px);
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        /* Rotating rings around logo - smaller sizes */
        .logo-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          z-index: 2;
        }

        .ring-1 {
          width: 38px;
          height: 38px;
          border-top-color: rgba(0, 0, 0, 0.6);
          border-right-color: rgba(0, 0, 0, 0.3);
          animation: ringRotate 4s linear infinite;
        }

        .ring-2 {
          width: 42px;
          height: 42px;
          border-bottom-color: rgba(0, 0, 0, 0.5);
          border-left-color: rgba(0, 0, 0, 0.2);
          animation: ringRotate 6s linear infinite reverse;
        }

        .ring-3 {
          width: 46px;
          height: 46px;
          border-top-color: rgba(0, 0, 0, 0.4);
          border-bottom-color: rgba(0, 0, 0, 0.1);
          animation: ringRotate 8s linear infinite;
        }

        @keyframes ringRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Enhanced hover effect on top of continuous animation */
        .admin-brand-link:hover .logo-wrapper img {
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite, logoHoverBounce 0.6s ease;
        }

        @keyframes logoHoverBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .admin-brand-link:hover .logo-glow {
          filter: blur(12px);
          animation: glowPulse 1.5s ease-in-out infinite;
        }

        .admin-brand-link:hover .ring-1 {
          border-top-color: rgba(109, 116, 255, 1);
          border-right-color: rgba(109, 116, 255, 0.6);
        }

        .admin-brand-link:hover .ring-2 {
          border-bottom-color: rgba(109, 116, 255, 0.9);
          border-left-color: rgba(109, 116, 255, 0.5);
        }

        .admin-brand-link:hover .ring-3 {
          border-top-color: rgba(109, 116, 255, 0.8);
          border-bottom-color: rgba(109, 116, 255, 0.4);
        }

        /* ========================================
           END LOGO ANIMATIONS
           ======================================== */

        /* ========================================
           DIGITAL CLOCK STYLES
           ======================================== */

        .admin-clock {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(103, 126, 234, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(103, 126, 234, 0.3);
          border-radius: 12px;
          padding: 8px 16px;
          margin-right: 16px;
          min-width: 140px;
          box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2);
          animation: clockGlow 2s ease-in-out infinite alternate;
        }

        .clock-time {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          animation: timePulse 1s ease-in-out infinite;
          letter-spacing: 1px;
        }

        .clock-date {
          font-size: 10px;
          color: rgba(0, 0, 0, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 2px;
          font-weight: 500;
          animation: dateFade 3s ease-in-out infinite;
        }

        /* Clock glow animation */
        @keyframes clockGlow {
          0% {
            box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2), 0 0 20px rgba(103, 126, 234, 0.1);
          }
          100% {
            box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2), 0 0 30px rgba(103, 126, 234, 0.2);
          }
        }

        /* Time pulse animation */
        @keyframes timePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        /* Date fade animation */
        @keyframes dateFade {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Hover effects for clock */
        .admin-clock:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }

        .admin-clock:hover .clock-time {
          animation: timePulse 0.5s ease-in-out infinite, timeGlow 0.5s ease-in-out;
        }

        @keyframes timeGlow {
          0% {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          }
          100% {
            text-shadow: 0 0 20px rgba(103, 126, 234, 1), 0 0 30px rgba(103, 126, 234, 0.5);
          }
        }

        /* ========================================
           END DIGITAL CLOCK STYLES
           ======================================== */

        /* ========================================
           ANIMATED TEXT STYLES
           ======================================== */

        .animated-text {
          font-size: 24px;
          font-weight: 800;
          color: #000000 !important;
          background: none !important;
          -webkit-background-clip: initial !important;
          -webkit-text-fill-color: initial !important;
          background-clip: initial !important;
          position: relative;
          display: inline-block;
          margin-left: -30px;
        }

        /* Text glow animation */
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(103, 126, 234, 0.5), 0 0 30px rgba(103, 126, 234, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(103, 126, 234, 0.8), 0 0 40px rgba(103, 126, 234, 0.5), 0 0 50px rgba(103, 126, 234, 0.3);
          }
        }

        /* Text floating animation */
        @keyframes textFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-2px) scale(1.02);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-1px) scale(1.01);
          }
        }

        /* Hover effects for animated text */
        .animated-text:hover {
          /* No animations */
        }

        /* ========================================
           END ANIMATED TEXT STYLES
           ======================================== */
      `}</style>
    </div>
  )
}
