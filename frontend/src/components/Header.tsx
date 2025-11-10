import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../lib/cart'
import { api } from '../lib/api'


export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useCart()
  const [bump, setBump] = useState(false)
  const [open, setOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Array<{
    id: string;
    name: string;
    type: 'product' | 'faq' | 'page';
    url: string;
    content?: string;
  }>>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const location = useLocation()
  const navigate = useNavigate()
  const headerRef = useRef<HTMLElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const searchRef = useRef<HTMLDivElement | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)


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
        setShowSuggestions(false)
        setSelectedSuggestion(-1)
        searchInputRef.current?.blur()
      } else if (showSuggestions && suggestions.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedSuggestion(prev => 
            prev < suggestions.length - 1 ? prev + 1 : 0
          )
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedSuggestion(prev => 
            prev > 0 ? prev - 1 : suggestions.length - 1
          )
        } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
          e.preventDefault()
          const selectedProduct = suggestions[selectedSuggestion]
          navigate(`/search?q=${encodeURIComponent(selectedProduct.name)}`)
          setSearchQuery('')
          setShowSuggestions(false)
          setSelectedSuggestion(-1)
          setOpen(false)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showSuggestions, suggestions, selectedSuggestion, navigate])


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
      if (!searchRef.current) return
      if (!searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
        setSelectedSuggestion(-1)
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
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = selectedSuggestion >= 0 ? suggestions[selectedSuggestion].name : searchQuery.trim()
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
      setSearchQuery('')
      setShowSuggestions(false)
      setSelectedSuggestion(-1)
      setOpen(false) // Close mobile menu if open
    }
  }

  // Debounced search suggestions
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      setSelectedSuggestion(-1)
      return
    }

    const timeoutId = setTimeout(async () => {
      try {
        // Fetch products
        const productsResponse = await api.get('/api/v1/products', {
          params: { q: searchQuery.trim(), size: 10 }
        })
        const products = productsResponse.data?.items || []

        // Static content for other pages
        const staticContent: Array<{
          id: string;
          name: string;
          type: 'product' | 'faq' | 'page';
          url: string;
          content: string;
        }> = [
          // FAQ content
          {
            id: 'faq-general',
            name: 'What is this platform?',
            type: 'faq',
            url: '/faq',
            content: 'modern e-commerce platform built with FastAPI backend and React frontend'
          },
          {
            id: 'faq-account',
            name: 'How do I create an account?',
            type: 'faq',
            url: '/faq',
            content: 'Click on Register in the navigation menu, fill in your details'
          },
          {
            id: 'faq-payment',
            name: 'What payment methods are available?',
            type: 'faq',
            url: '/faq',
            content: 'Stripe credit/debit cards and Bank Transfer'
          },
          {
            id: 'faq-shopping',
            name: 'How do I browse products?',
            type: 'faq',
            url: '/faq',
            content: 'After logging in, click Shop in the navigation menu'
          },
          {
            id: 'faq-cart',
            name: 'How do I add items to my cart?',
            type: 'faq',
            url: '/faq',
            content: 'On the product detail page, select quantity and click Add to Cart'
          },
          {
            id: 'faq-checkout',
            name: 'What information do I need to provide during checkout?',
            type: 'faq',
            url: '/faq',
            content: 'Customer name, contact information, shipping address, payment method'
          },
          {
            id: 'faq-orders',
            name: 'How do I view my order history?',
            type: 'faq',
            url: '/faq',
            content: 'Access your order history from the Orders page in navigation'
          },
          {
            id: 'faq-password',
            name: 'I forgot my password. What should I do?',
            type: 'faq',
            url: '/faq',
            content: 'Contact support through the contact page for assistance'
          },

          // About page content
          {
            id: 'about-story',
            name: 'Our Story',
            type: 'page',
            url: '/about',
            content: 'Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability'
          },
          {
            id: 'about-values',
            name: 'Our Values',
            type: 'page',
            url: '/about',
            content: 'Quality, sustainability, transparency, and customer satisfaction'
          },
          {
            id: 'about-team',
            name: 'Our Team',
            type: 'page',
            url: '/about',
            content: 'Passionate designers and craftsmen dedicated to creating timeless pieces'
          },

          // Contact page content
          {
            id: 'contact-support',
            name: 'Contact Support',
            type: 'page',
            url: '/contact',
            content: 'Get in touch with our support team for help with orders, products, or account issues'
          },
          {
            id: 'contact-form',
            name: 'Contact Form',
            type: 'page',
            url: '/contact',
            content: 'Send us a message through our contact form and we\'ll respond within 1-2 business days'
          },
          {
            id: 'contact-whatsapp',
            name: 'WhatsApp Support',
            type: 'page',
            url: '/contact',
            content: 'Chat with us on WhatsApp for immediate assistance'
          },
          {
            id: 'contact-phone',
            name: 'Phone Support',
            type: 'page',
            url: '/contact',
            content: 'Call us directly for urgent inquiries and support'
          },

          // Other pages
          {
            id: 'home',
            name: 'Home',
            type: 'page',
            url: '/',
            content: 'Welcome to our e-commerce platform. Browse our latest collections and featured products'
          },
          {
            id: 'shop',
            name: 'Shop',
            type: 'page',
            url: '/shop',
            content: 'Browse our complete product catalog with advanced filtering and search'
          }
        ]

        // Filter static content based on search query
        const searchTerm = searchQuery.toLowerCase()
        const filteredStatic = staticContent.filter(item =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.content.toLowerCase().includes(searchTerm)
        )

        // Combine and format suggestions
        const allSuggestions: Array<{
          id: string;
          name: string;
          type: 'product' | 'faq' | 'page';
          url: string;
          content?: string;
        }> = [
          ...products.map((p: any) => ({
            id: `product-${p.id}`,
            name: p.name,
            type: 'product' as const,
            url: `/product/${p.slug}`,
            content: p.category || 'Product'
          })),
          ...filteredStatic
        ].slice(0, 8) // Limit to 8 total suggestions

        setSuggestions(allSuggestions)
        setShowSuggestions(true)
        setSelectedSuggestion(-1)
      } catch (error) {
        // Even if API fails, show static content
        const staticContent: Array<{
          id: string;
          name: string;
          type: 'product' | 'faq' | 'page';
          url: string;
          content: string;
        }> = [
          // FAQ content
          {
            id: 'faq-general',
            name: 'What is this platform?',
            type: 'faq',
            url: '/faq',
            content: 'modern e-commerce platform built with FastAPI backend and React frontend'
          },
          {
            id: 'faq-account',
            name: 'How do I create an account?',
            type: 'faq',
            url: '/faq',
            content: 'Click on Register in the navigation menu, fill in your details'
          },
          {
            id: 'faq-payment',
            name: 'What payment methods are available?',
            type: 'faq',
            url: '/faq',
            content: 'Stripe credit/debit cards and Bank Transfer'
          },
          {
            id: 'faq-shopping',
            name: 'How do I browse products?',
            type: 'faq',
            url: '/faq',
            content: 'After logging in, click Shop in the navigation menu'
          },
          {
            id: 'faq-cart',
            name: 'How do I add items to my cart?',
            type: 'faq',
            url: '/faq',
            content: 'On the product detail page, select quantity and click Add to Cart'
          },
          {
            id: 'faq-checkout',
            name: 'What information do I need to provide during checkout?',
            type: 'faq',
            url: '/faq',
            content: 'Customer name, contact information, shipping address, payment method'
          },
          {
            id: 'faq-orders',
            name: 'How do I view my order history?',
            type: 'faq',
            url: '/faq',
            content: 'Access your order history from the Orders page in navigation'
          },
          {
            id: 'faq-password',
            name: 'I forgot my password. What should I do?',
            type: 'faq',
            url: '/faq',
            content: 'Contact support through the contact page for assistance'
          },

          // About page content
          {
            id: 'about-story',
            name: 'Our Story',
            type: 'page',
            url: '/about',
            content: 'Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability'
          },
          {
            id: 'about-values',
            name: 'Our Values',
            type: 'page',
            url: '/about',
            content: 'Quality, sustainability, transparency, and customer satisfaction'
          },
          {
            id: 'about-team',
            name: 'Our Team',
            type: 'page',
            url: '/about',
            content: 'Passionate designers and craftsmen dedicated to creating timeless pieces'
          },

          // Contact page content
          {
            id: 'contact-support',
            name: 'Contact Support',
            type: 'page',
            url: '/contact',
            content: 'Get in touch with our support team for help with orders, products, or account issues'
          },
          {
            id: 'contact-form',
            name: 'Contact Form',
            type: 'page',
            url: '/contact',
            content: 'Send us a message through our contact form and we\'ll respond within 1-2 business days'
          },
          {
            id: 'contact-whatsapp',
            name: 'WhatsApp Support',
            type: 'page',
            url: '/contact',
            content: 'Chat with us on WhatsApp for immediate assistance'
          },
          {
            id: 'contact-phone',
            name: 'Phone Support',
            type: 'page',
            url: '/contact',
            content: 'Call us directly for urgent inquiries and support'
          },

          // Other pages
          {
            id: 'home',
            name: 'Home',
            type: 'page',
            url: '/',
            content: 'Welcome to our e-commerce platform. Browse our latest collections and featured products'
          },
          {
            id: 'shop',
            name: 'Shop',
            type: 'page',
            url: '/shop',
            content: 'Browse our complete product catalog with advanced filtering and search'
          }
        ]

        const searchTerm = searchQuery.toLowerCase()
        const filteredStatic = staticContent.filter(item =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.content.toLowerCase().includes(searchTerm)
        )
        setSuggestions(filteredStatic.slice(0, 8))
        setShowSuggestions(filteredStatic.length > 0)
        setSelectedSuggestion(-1)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])
  
  return (
    <header className="header" ref={headerRef}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
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
          <Link to="/" className="brand" aria-label="Home">
            <div className="logo-container">
              <div className={`logo-wrapper ${logoLoaded ? 'loaded' : ''}`}>
                <img 
                  src="/images/title.png" 
                  alt="Own Setup logo"
                  onLoad={() => setLogoLoaded(true)}
                />
                <div className="logo-glow" aria-hidden="true" />
                <div className="logo-ring ring-1" aria-hidden="true" />
                <div className="logo-ring ring-2" aria-hidden="true" />
                <div className="logo-ring ring-3" aria-hidden="true" />
              </div>
            </div>
          </Link>
        </div>


        <nav id="main-menu" className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {!inAdmin && (
            <>
              <NavLink to="/" end className={linkClass}>Home</NavLink>
               <NavLink to="/shop" className={linkClass}>Shop</NavLink>
              
              {/* Search Form */}
              <div className="search-container" ref={searchRef}>
                <form onSubmit={handleSearch} className="search-form">
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      if (suggestions.length > 0) {
                        setShowSuggestions(true)
                      }
                    }}
                    className="search-input"
                    aria-label="Search"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      className="search-clear" 
                      onClick={() => {
                        setSearchQuery('')
                        setShowSuggestions(false)
                        setSelectedSuggestion(-1)
                        searchInputRef.current?.focus()
                      }}
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                  <button type="submit" className="search-btn" aria-label="Submit search">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </form>
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="search-suggestions">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={suggestion.id}
                        type="button"
                        className={`suggestion-item ${selectedSuggestion === index ? 'selected' : ''}`}
                        onClick={() => {
                          navigate(suggestion.url)
                          setSearchQuery('')
                          setShowSuggestions(false)
                          setSelectedSuggestion(-1)
                          setOpen(false)
                        }}
                        onMouseEnter={() => setSelectedSuggestion(index)}
                      >
                        <div className="suggestion-icon">
                          {suggestion.type === 'product' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"/>
                              <line x1="7" y1="7" x2="7" y2="7"/>
                            </svg>
                          )}
                          {suggestion.type === 'faq' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                              <line x1="12" y1="17" x2="12.01" y2="17"/>
                            </svg>
                          )}
                          {suggestion.type === 'page' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14,2 14,8 20,8"/>
                            </svg>
                          )}
                        </div>
                        <div className="suggestion-content">
                          <span className="suggestion-title">{suggestion.name}</span>
                          <span className="suggestion-type">{suggestion.type}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <NavLink to="/about" className={linkClass}>About</NavLink>
              {user && (
                <>
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


          {!user && (
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
        {user && (
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
        )}
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
        .skip-link{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;background:var(--brand);color:white;padding:8px;text-decoration:none;border-radius:4px;z-index:1000}
        .skip-link:focus{left:20px;top:20px;width:auto;height:auto}
        .header{
          position:sticky;
          top:0;
          z-index:50;
          background:rgba(13,13,15,.8);
          backdrop-filter:blur(8px);
          border-bottom:1px solid var(--line);
        }
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
        .left{display:flex;align-items:center;gap:10px}
        .brand{
          display:inline-flex;
          align-items:center;
          text-decoration:none;
        }
        
        /* Container to clip all effects within bounds */
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 56px;
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
          opacity: 0;
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
          height: 40px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 8px rgba(109, 116, 255, 0.4));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }
        
        /* Continuous floating motion - reduced range */
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-4px) scale(1.05);
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
          width: 60px;
          height: 60px;
          background: radial-gradient(circle at center, rgba(109, 116, 255, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(12px);
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
          width: 50px;
          height: 50px;
          border-top-color: rgba(109, 116, 255, 0.6);
          border-right-color: rgba(109, 116, 255, 0.3);
          animation: ringRotate 4s linear infinite;
        }
        
        .ring-2 {
          width: 56px;
          height: 56px;
          border-bottom-color: rgba(109, 116, 255, 0.5);
          border-left-color: rgba(109, 116, 255, 0.2);
          animation: ringRotate 6s linear infinite reverse;
        }
        
        .ring-3 {
          width: 62px;
          height: 62px;
          border-top-color: rgba(109, 116, 255, 0.4);
          border-bottom-color: rgba(109, 116, 255, 0.1);
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
        
        /* Shimmer sweep effect - contained within logo-container */
       /* .logo-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 0, 0, 1) 50%,
            transparent 50%
          );
          z-index: 4;
          pointer-events: none;
          animation: shimmerSweep 10s ease-in-out infinite;
        }*/
        
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        /* Particle effect - smaller and contained */
        /* .logo-wrapper::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(109, 116, 255, 0.8);
          border-radius: 50%;
          box-shadow: 
            6px 8px 0 rgba(109, 116, 255, 0.6),
            -8px 10px 0 rgba(109, 116, 255, 0.5),
            10px -6px 0 rgba(109, 116, 255, 0.7),
            -6px -8px 0 rgba(109, 116, 255, 0.4);
          animation: particleFloat 5s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
        } */
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(4px, -6px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translate(-3px, 5px) scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translate(5px, 4px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        /* Enhanced hover effect on top of continuous animation */
        .brand:hover .logo-wrapper img {
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
        
        .brand:hover .logo-glow {
          filter: blur(16px);
          animation: glowPulse 1.5s ease-in-out infinite;
        }
        
        .brand:hover .ring-1 {
          border-top-color: rgba(109, 116, 255, 1);
          border-right-color: rgba(109, 116, 255, 0.6);
        }
        
        .brand:hover .ring-2 {
          border-bottom-color: rgba(109, 116, 255, 0.9);
          border-left-color: rgba(109, 116, 255, 0.5);
        }
        
        .brand:hover .ring-3 {
          border-top-color: rgba(109, 116, 255, 0.8);
          border-bottom-color: rgba(109, 116, 255, 0.4);
        }
        
        /* ========================================
           END LOGO ANIMATIONS
           ======================================== */
        
        .hamburger{display:none;flex-direction:column;gap:4px;width:36px;height:36px;align-items:center;justify-content:center;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text)}
        .hamburger span{display:block;width:18px;height:2px;background:var(--text);border-radius:2px}
        .nav{display:flex;align-items:center;gap:14px}
        
        /* Search form styles */
        .search-container{position:relative}
        .search-form{display:flex;align-items:center;gap:8px;border-radius:8px;border:1px solid var(--line);background:var(--ghost);padding:0 12px;min-width:200px;max-width:300px}
        .search-input{flex:1;border:none;background:transparent;color:var(--text);font-size:14px;padding:8px 0;outline:none}
        .search-input::placeholder{color:var(--muted)}
        .search-clear{border:none;background:transparent;color:var(--muted);cursor:pointer;padding:4px;border-radius:4px;font-size:18px;line-height:1;transition:all 0.2s ease}
        .search-clear:hover{color:var(--text);background:var(--ghost)}
        .search-btn{border:none;background:transparent;color:var(--text);cursor:pointer;padding:4px;border-radius:4px;transition:background 0.2s ease}
        
        /* Search suggestions dropdown */
        .search-suggestions{position:absolute;top:100%;left:0;right:0;background:var(--surface);border:1px solid var(--line);border-radius:8px;margin-top:4px;max-height:300px;overflow-y:auto;z-index:1000;box-shadow:0 6px 22px rgba(0,0,0,.3)}
        .suggestion-item{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:12px;border:none;background:transparent;color:var(--text);cursor:pointer;border-radius:6px;font-size:14px;font-family:inherit;transition:background 0.2s ease}
        .suggestion-item:hover,.suggestion-item.selected{background:var(--ghost)}
        .suggestion-icon{flex-shrink:0;color:var(--muted);display:flex;align-items:center;justify-content:center;width:16px;height:16px}
        .suggestion-content{flex:1;display:flex;flex-direction:column;gap:2px}
        .suggestion-title{font-weight:500;color:var(--text)}
        .suggestion-type{font-size:11px;color:var(--muted);text-transform:capitalize}
        .search-btn:hover{background:var(--ghost)}
        .search-btn:focus{outline:2px solid var(--brand);outline-offset:-2px}
        
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
        
        /* Auth button styles */
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
        
        .auth-btn:focus {
          outline:none;
        }
        
        .auth-btn:not(.active):hover{
          background:var(--brand-600);
          border-color:var(--brand-600);
          color:white;
        }
        
        .auth-btn.active{
          background:var(--brand);
          border-color:var(--brand);
          color:white;
          box-shadow:0 4px 12px rgba(109,116,255,0.3);
        }
        
        .auth-btn.active:hover {
          background:var(--brand);
          border-color:var(--brand);
        }
        
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
          .search-container{min-width:unset;max-width:unset;width:100%;margin:6px 0}
          .search-suggestions{position:static;border:none;border-radius:0;margin-top:0;max-height:200px;box-shadow:none}
          .divider{display:none}
          .auth{margin-top:6px;flex-direction:column;width:100%}
          .auth-btn{width:100%}
        }
      `}</style>
    </header>
  )
}
