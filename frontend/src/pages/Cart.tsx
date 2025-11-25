import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../lib/cart'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Cart() {
  const { items, update, remove, clear } = useCart()
  const navigate = useNavigate()
  const [showTransfer, setShowTransfer] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { user } = useAuth()
  const [showAdminBlock, setShowAdminBlock] = useState(false)

  useEffect(() => {
    // Block Admin access
    if (user?.is_staff || user?.is_superuser) {
      setShowAdminBlock(true)
      setTimeout(() => navigate('/'), 3000)
      return
    }
    // Trigger animations after mount
    setMounted(true)
  }, [user, navigate])

  const subtotal = useMemo(
    () => items.reduce((a, b) => a + b.price * b.qty, 0),
    [items]
  )

  const handleQty = (id: string, qty: number) => {
    if (qty < 1 || Number.isNaN(qty)) return
    update(id, qty)
  }

  const openTransfer = () => setShowTransfer(true)

  const whatsappMessage = encodeURIComponent(
    `Hello, I have transferred LKR ${subtotal.toFixed(2)} for my order. Here is my payment confirmation.`
  )

  return (
    <>
      {/* Admin Block Modal */}
      {showAdminBlock && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '3rem',
            borderRadius: '24px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
            animation: 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated background particles */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden',
              pointerEvents: 'none'
            }}>
              {[...Array(15)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: Math.random() * 10 + 5 + 'px',
                  height: Math.random() * 10 + 5 + 'px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }} />)
              )}
            </div>
            
            {/* Icon */}
            <div style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" style={{
                  animation: 'shake 0.5s ease-in-out'
                }}>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div style={{
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              zIndex: 1
            }}>
              <h2 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.75rem',
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>Admin Access Restricted</h2>
              <p style={{
                margin: '0 0 1.5rem 0',
                fontSize: '1.1rem',
                opacity: 0.95,
                lineHeight: 1.6
              }}>
                Admin accounts cannot access the shopping cart. This feature is exclusively for customers.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                Redirecting to home...
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            @keyframes shake {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-10deg); }
              75% { transform: rotate(10deg); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </div>
      )}
      
      {/* Animated Background */}
      <div className="page-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
        <div className="floating-carts">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="floating-cart" style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      <section className={`cart-hero ${mounted ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Shopping Cart
            </div>
            <h1 className="headline">Your Cart</h1>
            <p className="subhead">Review items and complete checkout using bank transfer.</p>
            {items.length > 0 && (
              <div className="cart-stats">
                <div className="stat">
                  <span className="stat-number">{items.length}</span>
                  <span className="stat-label">{items.length === 1 ? 'Item' : 'Items'}</span>
                </div>
                <div className="stat">
                  <span className="stat-number">LKR {subtotal.toFixed(2)}</span>
                  <span className="stat-label">Total</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div className={`empty ${mounted ? 'animate-in' : ''}`}>
              <div className="empty-anim" aria-hidden>
                <svg className="cart-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="animate-cart">
                    <rect x="26" y="36" width="60" height="34" rx="6" stroke="var(--brand)" strokeWidth="3" fill="rgba(109,116,255,0.08)" />
                    <path d="M20 36h10M86 36h14" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M32 70l-4 12" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M80 70l4 12" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="40" cy="88" r="7" stroke="var(--brand)" strokeWidth="3" fill="rgba(109,116,255,0.1)"/>
                    <circle cx="72" cy="88" r="7" stroke="var(--brand)" strokeWidth="3" fill="rgba(109,116,255,0.1)"/>
                  </g>
                  <g className="float-bubbles">
                    <circle cx="54" cy="26" r="3" fill="var(--brand)"/>
                    <circle cx="68" cy="18" r="2" fill="var(--brand)"/>
                    <circle cx="44" cy="16" r="2.5" fill="var(--brand)"/>
                  </g>
                </svg>
              </div>
              <h2>Your cart is empty</h2>
              <p className="empty-text">Looks like you haven't added any items yet. Start shopping to fill your cart!</p>
              <div className="actions">
                <Link to="/shop" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className={`cart-wrap ${mounted ? 'animate-in' : ''}`}>
                <div className="table-wrap" role="region" aria-label="Cart items">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((i, index) => (
                        <tr key={i.id} style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}>
                          <td className="prod-cell">
                            <div className="prod">
                              {i.image ? (
                                <img src={i.image} alt={i.name} />
                              ) : (
                                <div className="img-fallback" aria-hidden>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                  </svg>
                                </div>
                              )}
                              <div className="prod-meta">
                                <Link to={`/product/${i.slug}`} className="prod-name">
                                  {i.name}
                                </Link>
                                <div className="sku">ID: {i.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="qty-cell">
                            <div className="qty">
                              <button
                                className="btn-qty"
                                aria-label="Decrease quantity"
                                onClick={() => handleQty(i.id, i.qty - 1)}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                              </button>
                              <input
                                type="number"
                                min={1}
                                inputMode="numeric"
                                value={i.qty}
                                onChange={(e) => handleQty(i.id, Number(e.target.value))}
                                aria-label={`Quantity for ${i.name}`}
                              />
                              <button
                                className="btn-qty"
                                aria-label="Increase quantity"
                                onClick={() => handleQty(i.id, i.qty + 1)}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <line x1="12" y1="5" x2="12" y2="19"/>
                                  <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td>LKR {Number(i.price).toFixed(2)}</td>
                          <td className="total-price">LKR {(i.price * i.qty).toFixed(2)}</td>
                          <td>
                            <button className="btn btn-remove" onClick={() => remove(i.id)}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                              </svg>
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="right">Subtotal</td>
                        <td colSpan={2} className="subtotal">LKR {subtotal.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <aside className="summary">
                  <div className="summary-header">
                    <h2 className="summary-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="6" x2="21" y2="6"/>
                        <line x1="8" y1="12" x2="21" y2="12"/>
                        <line x1="8" y1="18" x2="21" y2="18"/>
                        <line x1="3" y1="6" x2="3.01" y2="6"/>
                        <line x1="3" y1="12" x2="3.01" y2="12"/>
                        <line x1="3" y1="18" x2="3.01" y2="18"/>
                      </svg>
                      Order Summary
                    </h2>
                    <div className="title-underline"></div>
                  </div>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>LKR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="summary-total">
                    <span>Estimated Total</span>
                    <span>LKR {subtotal.toFixed(2)}</span>
                  </div>

                  <div className="summary-actions">
                    <button className="btn btn-primary" onClick={openTransfer}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="5" width="20" height="14" rx="2"/>
                        <line x1="2" y1="10" x2="22" y2="10"/>
                      </svg>
                      Proceed with Bank Transfer
                    </button>
                    <button className="btn btn-ghost" onClick={clear}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                      Clear Cart
                    </button>
                    <Link className="btn" to="/shop">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                      Continue Shopping
                    </Link>
                  </div>

                  {showTransfer && (
                    <div className="transfer">
                      <div className="transfer-header">
                        <h3>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="5" width="20" height="14" rx="2"/>
                            <line x1="2" y1="10" x2="22" y2="10"/>
                          </svg>
                          Bank Transfer Instructions
                        </h3>
                      </div>
                      <p className="muted">
                        Please transfer the estimated total amount to the bank account listed below.
                        After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification.
                      </p>

                      <div className="bank-box">
                        <div className="row">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                              <circle cx="12" cy="7" r="4"/>
                            </svg>
                            Name
                          </span>
                          <strong>Ishfaque Mif</strong>
                        </div>
                        <div className="row">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="1" x2="12" y2="23"/>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                            Bank
                          </span>
                          <strong>BOC</strong>
                        </div>
                        <div className="row">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                              <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Branch
                          </span>
                          <strong>Puttalam</strong>
                        </div>
                        <div className="row">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="5" width="20" height="14" rx="2"/>
                              <line x1="2" y1="10" x2="22" y2="10"/>
                            </svg>
                            Account No.
                          </span>
                          <strong>89001476</strong>
                        </div>
                        <div className="row highlight">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="1" x2="12" y2="23"/>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                            Amount
                          </span>
                          <strong>LKR {subtotal.toFixed(2)}</strong>
                        </div>
                        <div className="row">
                          <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14 2 14 8 20 8"/>
                            </svg>
                            Reference
                          </span>
                          <strong>Order by your full name</strong>
                        </div>
                      </div>

                      <div className="transfer-actions">
                        <a
                          className="btn btn-whatsapp"
                          href={`https://wa.me/94768976222?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Send Confirmation via WhatsApp
                        </a>

                        {/* RED THEME MAX-ATTENTION CTA */}
                        <button
                          className="btn-cta mega-cta"
                          onClick={(e) => {
                            const btn = e.currentTarget
                            const rect = btn.getBoundingClientRect()
                            const x = e.clientX - rect.left
                            const y = e.clientY - rect.top
                            const burst = document.createElement('span')
                            burst.className = 'burst'
                            burst.style.left = `${x}px`
                            burst.style.top = `${y}px`
                            btn.appendChild(burst)
                            setTimeout(() => burst.remove(), 800)
                            btn.classList.add('pressed')
                            setTimeout(() => btn.classList.remove('pressed'), 150)
                            navigate('/checkout')
                          }}
                          onMouseMove={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            const r = btn.getBoundingClientRect()
                            const cx = r.left + r.width / 2
                            const cy = r.top + r.height / 2
                            const dx = (e.clientX - cx) / (r.width / 2)
                            const dy = (e.clientY - cy) / (r.height / 2)
                            const tilt = 8
                            btn.style.setProperty('--tx', `${dx * 6}px`)
                            btn.style.setProperty('--ty', `${dy * 6}px`)
                            btn.style.setProperty('--rx', `${-dy * tilt}deg`)
                            btn.style.setProperty('--ry', `${dx * tilt}deg`)
                            btn.style.setProperty('--mx', `${((dx + 1) / 2) * 100}%`)
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            btn.style.removeProperty('--tx')
                            btn.style.removeProperty('--ty')
                            btn.style.removeProperty('--rx')
                            btn.style.removeProperty('--ry')
                            btn.style.removeProperty('--mx')
                          }}
                          title="Optionally upload the payment screenshot on the order page"
                          aria-label="Go to order page"
                        >
                          <span className="mega-cta__bg" aria-hidden="true" />
                          <span className="mega-cta__border" aria-hidden="true" />
                          <span className="mega-cta__glow" aria-hidden="true" />
                          <span className="mega-cta__sheen" aria-hidden="true" />
                          <span className="mega-cta__text">Go to Order Page</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ marginLeft: 10 }}>
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>

                      <p className="note">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        Optional: On the order/checkout page, include an upload option to attach the payment screenshot
                        for records. Ensure the name and order reference match the WhatsApp message.
                      </p>
                    </div>
                  )}
                </aside>
              </div>
            </>
          )}
        </div>
      </section>

      <style>{`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --whatsapp:#25D366;
          --positive:#1fbf75;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
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
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1fbf75 0%, #06d6a0 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #ff5d5d 0%, #ff4444 100%);
          top: 50%;
          right: 20%;
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
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
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
        
        .floating-carts {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-cart {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: cartFloat 10s ease-in-out infinite;
        }
        
        @keyframes cartFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .cart-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cart-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cart-wrap {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .cart-wrap.animate-in {
          opacity: 1;
        }
        
        .cart-wrap.animate-in tbody tr {
          opacity: 0;
          transform: translateX(-30px);
          animation: rowSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes rowSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .empty {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .empty.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .cart-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          max-width: 700px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .cart-stats {
          display: flex;
          gap: 32px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: var(--brand);
        }
        
        .stat-label {
          font-size: 13px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        /* ========================================
           EMPTY CART
           ======================================== */
        
        .empty{
          border:1px solid rgba(255, 255, 255, 0.1);
          padding:60px 20px;
          border-radius:16px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          text-align:center;
        }
        
        .empty h2 {
          font-size: 24px;
          margin: 0 0 8px 0;
        }
        
        .empty-text {
          color: var(--muted);
          margin: 0 0 24px 0;
        }
        
        .empty-anim{
          display:flex;
          justify-content:center;
          margin:0 0 24px;
        }
        
        .cart-svg{
          width:120px;
          height:120px;
          filter:drop-shadow(0 6px 20px rgba(109,116,255,0.15));
        }
        
        .animate-cart{
          animation: cartFloatEmpty 2.6s ease-in-out infinite;
        }
        
        .float-bubbles circle:nth-child(1){
          animation: bubbleUp 3s ease-in-out infinite;
        }
        
        .float-bubbles circle:nth-child(2){
          animation: bubbleUp 2.6s ease-in-out infinite 0.3s;
        }
        
        .float-bubbles circle:nth-child(3){
          animation: bubbleUp 2.2s ease-in-out infinite 0.6s;
        }
        
        @keyframes cartFloatEmpty{
          0%,100%{ transform: translateY(0) }
          50%{ transform: translateY(-6px) }
        }
        
        @keyframes bubbleUp{
          0%{ transform: translateY(0); opacity:.8 }
          70%{ transform: translateY(-10px); opacity:.3 }
          100%{ transform: translateY(0); opacity:.8 }
        }
        
        .actions{
          margin-top:24px;
          display: flex;
          justify-content: center;
        }
        
        /* ========================================
           CART WRAP
           ======================================== */
        
        .cart-wrap{
          display:grid;
          grid-template-columns:1.5fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           TABLE STYLES
           ======================================== */
        
        .table-wrap{
          overflow:auto;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:16px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        table{
          width:100%;
          border-collapse:separate;
          border-spacing:0;
        }
        
        thead th{
          position:sticky;
          top:0;
          background: rgba(18, 18, 22, 0.95);
          backdrop-filter: blur(10px);
          text-align:left;
          padding:16px;
          border-bottom:1px solid rgba(255, 255, 255, 0.1);
          font-weight: 600;
          font-size: 14px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        tbody td{
          padding:16px;
          border-bottom:1px solid rgba(255, 255, 255, 0.05);
        }
        
        tbody tr:last-child td {
          border-bottom: none;
        }
        
        tbody tr:hover {
          background: rgba(109, 116, 255, 0.05);
        }
        
        tfoot td{
          padding:16px;
          background: rgba(18, 18, 22, 0.95);
          font-weight:700;
          border-top:1px solid rgba(255, 255, 255, 0.1);
        }
        
        .right{
          text-align:right;
        }
        
        .subtotal{
          font-weight:800;
          font-size: 18px;
          color: var(--brand);
        }
        
        .total-price {
          font-weight: 600;
          color: var(--positive);
        }
        
        /* ========================================
           PRODUCT CELL
           ======================================== */
        
        .prod{
          display:grid;
          grid-template-columns:80px 1fr;
          gap:12px;
          align-items:center;
        }
        
        .prod img,.img-fallback{
          width:80px;
          height:80px;
          border-radius:12px;
          object-fit:cover;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(23, 24, 33, 0.6);
        }
        
        .img-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
        }
        
        .prod-name{
          color:var(--text);
          text-decoration:none;
          font-weight:600;
          font-size: 15px;
          display: block;
          margin-bottom: 4px;
        }
        
        .prod-name:hover{
          color: var(--brand);
        }
        
        .sku{
          font-size:12px;
          color:var(--muted);
        }
        
        /* ========================================
           QUANTITY CONTROLS
           ======================================== */
        
        .qty{
          display:flex;
          align-items:center;
          gap:8px;
        }
        
        .btn-qty{
          width:32px;
          height:32px;
          border-radius:8px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(35, 36, 52, 0.6);
          color:var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn-qty:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .qty input{
          width:64px;
          height:36px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:8px;
          color:var(--text);
          text-align:center;
          font-weight: 600;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:10px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-remove {
          background: rgba(255, 93, 93, 0.1);
          border-color: rgba(255, 93, 93, 0.3);
          color: var(--danger);
        }
        
        .btn-remove:hover {
          background: rgba(255, 93, 93, 0.2);
          border-color: var(--danger);
        }
        
        .btn-whatsapp {
          background: rgba(37, 211, 102, 0.1);
          border-color: rgba(37, 211, 102, 0.3);
          color: var(--whatsapp);
        }
        
        .btn-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: var(--whatsapp);
        }
        
        /* ========================================
           SUMMARY PANEL
           ======================================== */
        
        .summary{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:16px;
          padding:24px;
          position:sticky;
          top:16px;
          height:max-content;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .summary-header {
          margin-bottom: 20px;
        }
        
        .summary-title{
          margin:0 0 8px;
          font-size:20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .title-underline {
          height: 3px;
          width: 50px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 50px;
            opacity: 1;
          }
        }
        
        .summary-row{
          display:flex;
          justify-content:space-between;
          padding:12px 0;
          border-bottom:1px dashed rgba(255, 255, 255, 0.1);
          color:var(--muted);
        }
        
        .summary-total{
          display:flex;
          justify-content:space-between;
          padding:16px 0;
          margin-top:8px;
          font-weight:800;
          font-size: 18px;
          color: var(--brand);
        }
        
        .summary-actions{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin-top:20px;
        }
        
        /* ========================================
           TRANSFER SECTION
           ======================================== */
        
        .transfer{
          margin-top:20px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(23, 24, 33, 0.6);
          border-radius:12px;
          padding:20px;
          animation: transferSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes transferSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .transfer-header h3{
          margin:0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
        }
        
        .muted{
          color:var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }
        
        .bank-box{
          margin:16px 0;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(18, 18, 22, 0.6);
          border-radius:12px;
        }
        
        .bank-box .row{
          display:flex;
          justify-content:space-between;
          align-items: center;
          padding:14px 16px;
          border-top:1px dashed rgba(255, 255, 255, 0.05);
        }
        
        .bank-box .row:first-child{
          border-top:none;
        }
        
        .bank-box .row span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 14px;
        }
        
        .bank-box .row strong {
          color: var(--text);
        }
        
        .bank-box .row.highlight {
          background: rgba(109, 116, 255, 0.1);
        }
        
        .bank-box .row.highlight strong {
          color: var(--brand);
          font-size: 16px;
        }
        
        .transfer-actions{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top: 16px;
        }
        
        .note {
          margin-top: 16px;
          padding: 12px;
          background: rgba(109, 116, 255, 0.05);
          border: 1px solid rgba(109, 116, 255, 0.1);
          border-radius: 8px;
          font-size: 13px;
          color: var(--muted);
          display: flex;
          gap: 10px;
          line-height: 1.6;
        }
        
        .note svg {
          flex-shrink: 0;
          color: var(--brand);
          margin-top: 2px;
        }
        
        /* ========================================
           RED THEME MAX-ATTENTION CTA
           ======================================== */
        
        .btn-cta{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 18px;
          border-radius:10px;
          background:linear-gradient(90deg,var(--brand),#8a6bff);
          color:white;
          border:none;
          font-weight:700;
          box-shadow:0 10px 30px rgba(109,116,255,0.08);
          transition:transform .16s ease,box-shadow .16s ease,opacity .12s ease;
        }
        
        .btn-cta:hover{
          transform:translateY(-4px);
          box-shadow:0 18px 40px rgba(109,116,255,0.14);
          opacity:0.98;
        }
        
        .btn-cta:active{
          transform:translateY(-1px);
        }
        
        .btn-cta:focus{
          outline:none;
          box-shadow:0 0 0 4px rgba(109,116,255,0.14),0 18px 40px rgba(109,116,255,0.14);
        }
        
        .btn-cta svg{
          opacity:.95;
        }
        
        .mega-cta{
          position:relative;
          overflow:hidden;
          isolation:isolate;
          border-radius:14px;
          padding:14px 22px;
          color:#0b0b11;
          background:#111;
          border:1px solid rgba(255,255,255,0.06);
          box-shadow:
            0 0 0 2px rgba(255, 68, 68, 0.28) inset,
            0 12px 30px rgba(255, 68, 68, 0.35),
            0 0 60px rgba(255, 80, 80, 0.30);
          transform:
            translate(var(--tx,0), var(--ty,0))
            rotateX(var(--rx,0)) rotateY(var(--ry,0));
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
          will-change: transform, box-shadow;
          cursor: pointer;
          width: 100%;
          font-size: 15px;
          font-weight: 700;
        }
        
        .mega-cta .mega-cta__bg{
          position:absolute; inset:0; z-index:0;
          background: radial-gradient(120% 180% at var(--mx,50%) 50%,
            #ff7a7a 0%, #ff4444 35%, #d62828 70%, #1d1a1a 92%);
          filter: saturate(1.15) brightness(1.05);
          transition: opacity .25s ease;
        }
        
        .mega-cta .mega-cta__border{
          position:absolute; inset:0; z-index:2; pointer-events:none;
          background:
            conic-gradient(from 0deg,
              rgba(255,255,255,0.0) 0 20%,
              rgba(255,255,255,0.55) 21% 23%,
              rgba(255,255,255,0.0) 24% 100%);
          mix-blend-mode:screen;
          animation: border-spin 2.2s linear infinite;
          opacity:.9;
        }
        
        @keyframes border-spin{
          0% { transform: rotate(0deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1.02); }
        }
        
        .mega-cta .mega-cta__glow{
          position:absolute; inset:-12%;
          background:
            radial-gradient(60% 60% at 50% 50%, rgba(255, 90, 90, 0.60), rgba(255,90,90,0) 60%),
            radial-gradient(80% 80% at 30% 120%, rgba(214,40,40,0.55), rgba(214,40,40,0) 70%);
          filter: blur(14px);
          z-index:0; pointer-events:none; opacity:.95;
          animation: glow-pulse 2.6s ease-in-out infinite;
        }
        
        @keyframes glow-pulse{
          0%,100%{ opacity:.75; }
          50%{ opacity:1; }
        }
        
        .mega-cta .mega-cta__sheen{
          position:absolute; inset:-35%; z-index:3; pointer-events:none;
          background: linear-gradient(110deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.32) 45%, rgba(255,255,255,0) 60%);
          transform: translateX(-60%);
          animation: sheen-scan 2.1s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        
        @keyframes sheen-scan{
          0%{ transform: translateX(-60%) }
          50%{ transform: translateX(0%) }
          100%{ transform: translateX(60%) }
        }
        
        .mega-cta .mega-cta__text{
          position:relative; z-index:4; color:#fff;
          text-shadow:0 2px 10px rgba(0,0,0,0.4);
          letter-spacing:.2px;
        }
        
        .mega-cta:hover{
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.08) inset,
            0 22px 60px rgba(255, 68, 68, 0.45),
            0 0 90px rgba(255, 80, 80, 0.40);
          filter: drop-shadow(0 12px 28px rgba(255, 64, 64, .32));
        }
        
        .mega-cta svg{ position:relative; z-index:4; color:#fff; }
        
        .mega-cta .burst{
          position:absolute; width:10px; height:10px; border-radius:999px;
          left:50%; top:50%; transform:translate(-50%,-50%);
          z-index:1; pointer-events:none;
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.75),
            0 0 20px 4px rgba(255, 64, 64, 0.6);
          background: rgba(255,255,255,0.45);
          animation: burst-out .8s ease-out forwards;
        }
        
        @keyframes burst-out{
          0%{ opacity:0.95; transform:translate(-50%,-50%) scale(1); }
          70%{ opacity:0.4; transform:translate(-50%,-50%) scale(16); }
          100%{ opacity:0; transform:translate(-50%,-50%) scale(24); }
        }
        
        .mega-cta.pressed{ transform: translate(0,2px) scale(0.99); }
        
        @media (prefers-reduced-motion: reduce){
          .mega-cta, .mega-cta * { animation: none !important; transition: none !important; }
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:1024px){
          .cart-wrap{
            grid-template-columns:1fr;
          }
          
          .summary{
            position:static;
          }
          
          .cart-stats {
            flex-direction: column;
            gap: 16px;
          }
        }
        
        @media (max-width:640px){
          .prod {
            grid-template-columns: 60px 1fr;
          }
          
          .prod img, .img-fallback {
            width: 60px;
            height: 60px;
          }
          
          .transfer-actions {
            flex-direction: column;
          }
          
          .mega-cta {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
