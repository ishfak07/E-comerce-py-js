import { useMemo, useState } from 'react'
import { useCart } from '../lib/cart'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  const { items, update, remove, clear } = useCart()
  const navigate = useNavigate()
  const [showTransfer, setShowTransfer] = useState(false)

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
      <section className="cart-hero">
        <div className="container">
          <h1 className="headline">Your Cart</h1>
          <p className="subhead">Review items and complete checkout using bank transfer.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div className="empty">
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
              <p>Your cart is empty</p>
              <div className="actions">
                <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="cart-wrap">
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
                      {items.map((i) => (
                        <tr key={i.id}>
                          <td className="prod-cell">
                            <div className="prod">
                              {i.image ? (
                                <img src={i.image} alt={i.name} />
                              ) : (
                                <div className="img-fallback" aria-hidden />
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
                                −
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
                                +
                              </button>
                            </div>
                          </td>
                          <td>LKR {Number(i.price).toFixed(2)}</td>
                          <td>LKR {(i.price * i.qty).toFixed(2)}</td>
                          <td>
                            <button className="btn btn-ghost" onClick={() => remove(i.id)}>
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
                  <h2 className="summary-title">Order Summary</h2>
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
                      Proceed with Bank Transfer
                    </button>
                    <button className="btn btn-ghost" onClick={clear}>
                      Clear Cart
                    </button>
                    <Link className="btn" to="/shop">
                      Continue Shopping
                    </Link>
                  </div>

                  {showTransfer && (
                    <div className="transfer">
                      <h3>Bank Transfer Instructions</h3>
                      <p className="muted">
                        Please transfer the estimated total amount to the bank account listed below.
                        After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification.
                      </p>

                      <div className="bank-box">
                        <div className="row">
                          <span>Name</span>
                          <span>Ishfaque Mif</span>
                        </div>
                        <div className="row">
                          <span>Bank</span>
                          <span>BOC</span>
                        </div>
                        <div className="row">
                          <span>Branch</span>
                          <span>Puttalam</span>
                        </div>
                        <div className="row">
                          <span>Account No.</span>
                          <span>89001476</span>
                        </div>
                        <div className="row">
                          <span>Amount</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="row">
                          <span>Reference</span>
                          <span>Order by your full name</span>
                        </div>
                      </div>

                      <div className="transfer-actions">
                        <a
                          className="btn btn-primary"
                          href={`https://wa.me/94768976222?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Send Confirmation via WhatsApp
                        </a>

                        {/* MAX-ATTENTION CTA: neon border trail + magnetic tilt + burst */}
                        <button
                          className="btn-cta mega-cta"
                          onClick={(e) => {
                            const btn = e.currentTarget
                            const rect = btn.getBoundingClientRect()
                            const x = e.clientX - rect.left
                            const y = e.clientY - rect.top
                            // click burst ring
                            const burst = document.createElement('span')
                            burst.className = 'burst'
                            burst.style.left = `${x}px`
                            burst.style.top = `${y}px`
                            btn.appendChild(burst)
                            setTimeout(() => burst.remove(), 800)
                            // slight press feedback
                            btn.classList.add('pressed')
                            setTimeout(() => btn.classList.remove('pressed'), 150)
                            navigate('/checkout')
                          }}
                          onMouseMove={(e) => {
                            // magnetic hover: cursor-based tilt/shift
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
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .cart-hero{padding:40px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}

        .empty{border:1px dashed var(--line);padding:16px;border-radius:12px;background:var(--surface);text-align:center}
        .empty-anim{display:flex;justify-content:center;margin:6px 0 10px}
        .cart-svg{width:120px;height:120px;filter:drop-shadow(0 6px 20px rgba(109,116,255,0.15))}
        .animate-cart{animation: cartFloat 2.6s ease-in-out infinite}
        .float-bubbles circle:nth-child(1){animation: bubbleUp 3s ease-in-out infinite}
        .float-bubbles circle:nth-child(2){animation: bubbleUp 2.6s ease-in-out infinite 0.3s}
        .float-bubbles circle:nth-child(3){animation: bubbleUp 2.2s ease-in-out infinite 0.6s}
        @keyframes cartFloat{
          0%,100%{ transform: translateY(0) }
          50%{ transform: translateY(-6px) }
        }
        @keyframes bubbleUp{
          0%{ transform: translateY(0); opacity:.8 }
          70%{ transform: translateY(-10px); opacity:.3 }
          100%{ transform: translateY(0); opacity:.8 }
        }
        .actions{margin-top:10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}

        .cart-wrap{display:grid;grid-template-columns:1.5fr .8fr;gap:16px}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--card)}
        table{width:100%;border-collapse:separate;border-spacing:0}
        thead th{position:sticky;top:0;background:var(--surface);text-align:left;padding:12px;border-bottom:1px solid var(--line)}
        tbody td{padding:12px;border-bottom:1px solid var(--line)}
        tfoot td{padding:12px;background:var(--surface);font-weight:700;border-top:1px solid var(--line)}
        .right{text-align:right}
        .subtotal{font-weight:800}

        .prod{display:grid;grid-template-columns:64px 1fr;gap:10px;align-items:center}
        .prod img,.img-fallback{width:64px;height:64px;border-radius:8px;object-fit:cover;border:1px solid var(--line);background:var(--surface)}
        .prod-name{color:var(--text);text-decoration:none;font-weight:600}
        .prod-name:hover{text-decoration:underline}
        .sku{font-size:12px;color:var(--muted)}

        .qty{display:flex;align-items:center;gap:8px}
        .btn-qty{width:28px;height:28px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text)}
        .qty input{width:64px;height:32px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);text-align:center}

        .summary{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:14px;position:sticky;top:16px;height:max-content}
        .summary-title{margin:0 0 8px;font-size:18px}
        .summary-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);color:var(--muted)}
        .summary-total{display:flex;justify-content:space-between;padding:10px 0;margin-top:6px;font-weight:800}
        .summary-actions{display:flex;flex-direction:column;gap:8px;margin-top:8px}

        .transfer{margin-top:12px;border:1px solid var(--line);background:var(--surface);border-radius:12px;padding:12px}
        .transfer h3{margin:0 0 6px}
        .muted{color:var(--muted)}
        .bank-box{margin:10px 0;border:1px solid var(--line);background:var(--card);border-radius:10px}
        .bank-box .row{display:flex;justify-content:space-between;padding:10px 12px;border-top:1px dashed var(--line)}
        .bank-box .row:first-child{border-top:none}
 .transfer-actions{display:flex;gap:8px;flex-wrap:wrap}
 /* Original CTA base */
        .btn-cta{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:10px;background:linear-gradient(90deg,var(--brand),#8a6bff);color:white;border:none;font-weight:700;box-shadow:0 10px 30px rgba(109,116,255,0.08);transition:transform .16s ease,box-shadow .16s ease,opacity .12s ease}
        .btn-cta:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(109,116,255,0.14);opacity:0.98}
        .btn-cta:active{transform:translateY(-1px)}
        .btn-cta:focus{outline:none;box-shadow:0 0 0 4px rgba(109,116,255,0.14),0 18px 40px rgba(109,116,255,0.14)}
        .btn-cta svg{opacity:.95}

        /* MAX-ATTENTION version */
        .mega-cta{
          position:relative;
          overflow:hidden;
          isolation:isolate;
          border-radius:14px;
          padding:14px 22px;
          color:#0b0b11;
          background:#111;
          border:1px solid rgba(255,255,255,0.06);
          /* intense neon stack */
          box-shadow:
            0 0 0 2px rgba(109,116,255,0.25) inset,
            0 12px 30px rgba(109,116,255,0.25),
            0 0 60px rgba(138,107,255,0.25);
          transform:
            translate(var(--tx,0), var(--ty,0))
            rotateX(var(--rx,0)) rotateY(var(--ry,0));
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
          will-change: transform, box-shadow;
        }
        /* vivid gradient background layer */
        .mega-cta .mega-cta__bg{
          position:absolute; inset:0; z-index:0;
          background: radial-gradient(120% 180% at var(--mx,50%) 50%, #b07cff 0%, #6D74FF 40%, #4250ff 70%, #1d213a 90%);
          filter: saturate(1.2) brightness(1.05);
          transition: opacity .25s ease;
        }
        /* animated border trail */
        .mega-cta .mega-cta__border{
          position:absolute; inset:0; z-index:2; pointer-events:none;
          background:
            conic-gradient(from 0deg, rgba(255,255,255,0.0) 0 20%, rgba(255,255,255,0.45) 21% 23%, rgba(255,255,255,0.0) 24% 100%);
          mix-blend-mode:screen;
          animation: border-spin 2.2s linear infinite;
          opacity:.85;
        }
        @keyframes border-spin{
          0% { transform: rotate(0deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1.02); }
        }
        /* outer neon aura */
        .mega-cta .mega-cta__glow{
          position:absolute; inset:-12%;
          background: radial-gradient(60% 60% at 50% 50%, rgba(141,116,255,0.55), rgba(141,116,255,0) 60%),
                      radial-gradient(80% 80% at 30% 120%, rgba(109,116,255,0.45), rgba(109,116,255,0) 70%);
          filter: blur(14px);
          z-index:0; pointer-events:none; opacity:.9;
          animation: glow-pulse 2.6s ease-in-out infinite;
        }
        @keyframes glow-pulse{
          0%,100%{ opacity:.7; }
          50%{ opacity:1; }
        }
        /* moving sheen */
        .mega-cta .mega-cta__sheen{
          position:absolute; inset:-35%; z-index:3; pointer-events:none;
          background: linear-gradient(110deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.28) 45%, rgba(255,255,255,0) 60%);
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
          position:relative; z-index:4; color:#fff; text-shadow:0 2px 10px rgba(0,0,0,0.35);
          letter-spacing:.2px;
        }
        /* magnetic hover depth */
        .mega-cta:hover{
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.08) inset,
            0 22px 60px rgba(109,116,255,0.35),
            0 0 90px rgba(138,107,255,0.35);
          filter: drop-shadow(0 12px 28px rgba(109,116,255,.25));
        }
        .mega-cta svg{ position:relative; z-index:4; color:#fff; }

        /* click burst ring */
        .mega-cta .burst{
          position:absolute; width:10px; height:10px; border-radius:999px;
          left:50%; top:50%; transform:translate(-50%,-50%);
          z-index:1; pointer-events:none;
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.65),
            0 0 20px 4px rgba(141,116,255,0.6);
          background: rgba(255,255,255,0.35);
          animation: burst-out .8s ease-out forwards;
        }
        @keyframes burst-out{
          0%{ opacity:0.9; transform:translate(-50%,-50%) scale(1); }
          70%{ opacity:0.35; transform:translate(-50%,-50%) scale(16); }
          100%{ opacity:0; transform:translate(-50%,-50%) scale(24); }
        }
        /* pressed micro feedback */
        .mega-cta.pressed{ transform: translate(0,2px) scale(0.99); }

        @media (prefers-reduced-motion: reduce){
          .mega-cta, .mega-cta * { animation: none !important; transition: none !important; }
        }

        @media (max-width:1024px){
          .cart-wrap{grid-template-columns:1fr}
          .summary{position:static}
        }
      `}</style>
    </>
  )
}
