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

  const handleQty = (id: number, qty: number) => {
    if (qty < 1 || Number.isNaN(qty)) return
    update(id, qty)
  }

  const openTransfer = () => setShowTransfer(true)

  const whatsappMessage = encodeURIComponent(
    `Hello, I have transferred ${subtotal.toFixed(2)} for my order. Here is my payment confirmation.`
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
              <p>Cart is empty.</p>
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
                          <td>${Number(i.price).toFixed(2)}</td>
                          <td>${(i.price * i.qty).toFixed(2)}</td>
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
                        <td colSpan={2} className="subtotal">${subtotal.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <aside className="summary">
                  <h2 className="summary-title">Order Summary</h2>
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="summary-total">
                    <span>Estimated Total</span>
                    <span>${subtotal.toFixed(2)}</span>
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
                        <button
                          className="btn"
                          onClick={() => navigate('/checkout')}
                          title="Optionally upload the payment screenshot on the order page"
                        >
                          Go to Order Page
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

        .empty{border:1px dashed var(--line);padding:16px;border-radius:12px;background:var(--surface)}
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
        .note{color:var(--muted);font-size:14px;margin-top:8px}

        @media (max-width:1024px){
          .cart-wrap{grid-template-columns:1fr}
          .summary{position:static}
        }
      `}</style>
    </>
  )
}
