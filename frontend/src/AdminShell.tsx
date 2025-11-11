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
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

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
          <div className="brand-info">
            <span className="admin-brand animated-text">Own Setup</span>
            <span className="brand-tagline">Admin Dashboard</span>
          </div>
        </div>
        <div className="admin-header-right">
          {/* Digital Clock */}
          <div className="admin-clock">
            <div className="clock-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
              </svg>
            </div>
            <div className="clock-content">
              <div className="clock-time">{formatTime(currentTime)}</div>
              <div className="clock-date">{formatDate(currentTime)}</div>
            </div>
          </div>

          <button className="admin-btn-icon" title="Notifications">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <span className="notification-badge">3</span>
            <span className="btn-glow"></span>
          </button>
          
          <div className="admin-user-menu">
            <div className="admin-user-info">
              <div className="admin-avatar">
                <div className={`avatar-inner ${user?.avatar_url ? 'has-image' : ''}`}>
                  {user?.avatar_url ? (
                    <img 
                      src={user.avatar_url} 
                      alt="Profile" 
                      style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
                    />
                  ) : (
                    user?.email?.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="avatar-ring"></div>
              </div>
              <div className="admin-user-details">
                <div className="admin-user-name">{user?.full_name || user?.email}</div>
                <div className="admin-user-role">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  {user?.is_superuser ? 'Super Admin' : 'Admin'}
                </div>
              </div>
            </div>
            <button className="admin-btn-logout" onClick={handleLogout}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-layout">
        {/* Sidebar Navigation */}
        <aside className="admin-sidebar">
          <div className="sidebar-header">
            <h3>Navigation</h3>
            <div className="sidebar-decoration"></div>
          </div>
          <nav className="admin-nav">
            <Link to="/admin" className={`admin-nav-item ${pathname === '/admin' ? 'active' : ''}`}>
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <span className="nav-text">Dashboard</span>
              <div className="nav-shine"></div>
            </Link>
            
            <Link to="/admin/products" className={`admin-nav-item ${pathname.startsWith('/admin/products') ? 'active' : ''}`}>
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
              </div>
              <span className="nav-text">Products</span>
              <div className="nav-shine"></div>
            </Link>
            
            <Link to="/admin/users" className={`admin-nav-item ${pathname.startsWith('/admin/users') ? 'active' : ''}`}>
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <span className="nav-text">Users</span>
              <div className="nav-shine"></div>
            </Link>
            
            <Link to="/admin/orders" className={`admin-nav-item ${pathname.startsWith('/admin/orders') ? 'active' : ''}`}>
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"/>
                </svg>
              </div>
              <span className="nav-text">Orders</span>
              <div className="nav-shine"></div>
            </Link>

            <div className="admin-nav-divider">
              <span>Quick Actions</span>
            </div>

            <Link to="/" className="admin-nav-item back-to-site">
              <div className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"/>
                </svg>
              </div>
              <span className="nav-text">Back to Site</span>
              <div className="nav-shine"></div>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>

      <style>{`
        /* Global Styles */
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        .admin-container {
          min-height: 100vh;
          background: #0f0f1e;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        /* ========================================
           HEADER STYLES (GLASSMORPHISM)
           ======================================== */
        
        .admin-header {
          height: 80px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .admin-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }
        
        .admin-header-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        /* ========================================
           LOGO STYLES (KEEP ORIGINAL ANIMATIONS)
           ======================================== */
        
        .admin-brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          overflow: hidden;
        }
        
        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
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
        
        .logo-wrapper img {
          display: block;
          height: 35px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }
        
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
        
        .logo-glow {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle at center, rgba(102, 126, 234, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(12px);
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        .logo-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          z-index: 2;
        }
        
        .ring-1 {
          width: 42px;
          height: 42px;
          border-top-color: rgba(102, 126, 234, 0.8);
          border-right-color: rgba(102, 126, 234, 0.4);
          animation: ringRotate 4s linear infinite;
        }
        
        .ring-2 {
          width: 48px;
          height: 48px;
          border-bottom-color: rgba(118, 75, 162, 0.7);
          border-left-color: rgba(118, 75, 162, 0.3);
          animation: ringRotate 6s linear infinite reverse;
        }
        
        .ring-3 {
          width: 54px;
          height: 54px;
          border-top-color: rgba(240, 147, 251, 0.6);
          border-bottom-color: rgba(240, 147, 251, 0.2);
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
        
        .admin-brand-link:hover .logo-wrapper img {
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite, logoHoverBounce 0.6s ease;
        }
        
        @keyframes logoHoverBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        /* ========================================
           BRAND INFO
           ======================================== */
        
        .brand-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-brand {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
        }
        
        .brand-tagline {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        /* ========================================
           DIGITAL CLOCK (GLASSMORPHISM)
           ======================================== */
        
        .admin-clock {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 12px 20px;
          min-width: 200px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .admin-clock::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        .admin-clock:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
        }
        
        .clock-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        
        .clock-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .clock-time {
          font-family: 'Courier New', monospace;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
        }
        
        .clock-date {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           NOTIFICATION BUTTON
           ======================================== */
        
        .admin-btn-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          position: relative;
        }
        
        .admin-btn-icon:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }
        
        .notification-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(15, 15, 30, 0.8);
          animation: pulse 2s ease-in-out infinite;
        }
        
        .btn-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.2);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .admin-btn-icon:hover .btn-glow {
          opacity: 1;
        }
        
        /* ========================================
           USER MENU (GLASSMORPHISM)
           ======================================== */
        
        .admin-user-menu {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .admin-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px 8px 8px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s;
        }
        
        .admin-user-info:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }
        
        .admin-avatar {
          position: relative;
          width: 44px;
          height: 44px;
        }
        
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          position: relative;
          z-index: 2;
        }
        
        .avatar-inner.has-image {
          background: none;
          box-shadow: none;
        }
        
        .avatar-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 14px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          animation: ringRotate 3s linear infinite;
          z-index: 1;
        }
        
        .admin-user-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-user-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        
        .admin-user-role {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* ========================================
           LOGOUT BUTTON
           ======================================== */
        
        .admin-btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.3);
          background: rgba(239, 68, 68, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #ef4444;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .admin-btn-logout:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
        }
        
        /* ========================================
           LAYOUT STYLES
           ======================================== */
        
        .admin-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          padding: 32px;
          min-height: calc(100vh - 80px);
          position: relative;
          z-index: 1;
        }
        
        /* ========================================
           SIDEBAR (GLASSMORPHISM)
           ======================================== */
        
        .admin-sidebar {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          height: fit-content;
          position: sticky;
          top: 112px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .sidebar-header {
          margin-bottom: 24px;
          position: relative;
        }
        
        .sidebar-header h3 {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        
        .sidebar-decoration {
          height: 2px;
          background: linear-gradient(90deg, rgba(102, 126, 234, 0.5), transparent);
          border-radius: 1px;
        }
        
        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        
        .nav-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
          position: relative;
          z-index: 2;
        }
        
        .nav-text {
          flex: 1;
          position: relative;
          z-index: 2;
        }
        
        .nav-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .admin-nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          transform: translateX(4px);
        }
        
        .admin-nav-item:hover .nav-icon {
          background: rgba(102, 126, 234, 0.3);
          transform: scale(1.05);
        }
        
        .admin-nav-item:hover .nav-shine {
          left: 100%;
        }
        
        .admin-nav-item.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          border: 1px solid rgba(102, 126, 234, 0.5);
        }
        
        .admin-nav-item.active .nav-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
        
        .admin-nav-item.back-to-site {
          color: rgba(255, 255, 255, 0.5);
          margin-top: 8px;
        }
        
        .admin-nav-item.back-to-site .nav-icon {
          background: rgba(148, 163, 184, 0.1);
        }
        
        .admin-nav-item.back-to-site:hover {
          background: rgba(148, 163, 184, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        
        .admin-nav-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 16px 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .admin-nav-divider span {
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(15, 15, 30, 0.8);
          padding: 4px 12px;
          border-radius: 8px;
        }
        
        /* ========================================
           MAIN CONTENT (GLASSMORPHISM)
           ======================================== */
        
        .admin-main {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 0;
          min-height: 600px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .content-wrapper {
          padding: 32px;
          background: rgba(255, 255, 255, 0.98);
          min-height: 100%;
          border-radius: 20px;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }
          
          .admin-sidebar {
            position: static;
          }
          
          .admin-header {
            padding: 0 20px;
          }
          
          .brand-tagline {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .admin-header {
            height: 70px;
            padding: 0 16px;
          }
          
          .admin-header-left {
            gap: 16px;
          }
          
          .logo-wrapper img {
            height: 30px;
          }
          
          .admin-brand {
            font-size: 20px;
          }
          
          .admin-user-details,
          .clock-date {
            display: none;
          }
          
          .admin-clock {
            min-width: 120px;
            padding: 10px 16px;
          }
          
          .clock-time {
            font-size: 14px;
          }
          
          .admin-layout {
            padding: 16px;
            gap: 16px;
          }
          
          .content-wrapper {
            padding: 20px;
          }
          
          .admin-sidebar {
            padding: 20px;
          }
          
          .admin-nav-item {
            padding: 12px 16px;
            font-size: 14px;
          }
          
          .nav-icon {
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .admin-header-right {
            gap: 12px;
          }
          
          .admin-user-info {
            padding: 6px;
          }
          
          .avatar-inner {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
          
          .admin-btn-logout span {
            display: none;
          }
          
          .admin-btn-logout {
            padding: 12px;
          }
          
          .brand-info {
            display: none;
          }
          
          .admin-clock {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
