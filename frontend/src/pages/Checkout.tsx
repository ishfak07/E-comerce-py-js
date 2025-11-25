import { useState, useEffect } from 'react'
import { useCart } from '../lib/cart'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const SRI_LANKAN_BANKS = [
  'Commercial Bank of Ceylon',
  'Bank of Ceylon (BOC)',
  'Hatton National Bank (HNB)',
  'Sampath Bank',
  'Nations Trust Bank',
  'DFCC Bank',
  'Seylan Bank',
  'Union Bank',
  'Pan Asia Banking Corporation',
  'Amana Bank',
  'Cargills Bank',
  'National Development Bank (NDB)',
  'People\'s Bank',
]

const COMPANY_BANK_DETAILS = {
  accountHolder: 'Ishfaque Mif',
  bank: 'Bank of Ceylon (BOC)',
  branch: 'Puttalam',
  accountNumber: '89001476',
  whatsapp: '+94 76 897 6222',
}

export default function Checkout() {
  const { items, clear } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [address, setAddress] = useState({ line1: '', city: '', postal_code: '', country: 'LK' })
  const [orderId, setOrderId] = useState<string | null>(null)
  const [bankInfo, setBankInfo] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [showAdminBlock, setShowAdminBlock] = useState(false)

  // New fields for bank transfer
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [selectedBank, setSelectedBank] = useState('')
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null)
  const [uploadingReceipt, setUploadingReceipt] = useState(false)
  const [transactionRef, setTransactionRef] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')

  // Block Admin access
  useEffect(() => {
    if (user?.is_staff || user?.is_superuser) {
      setShowAdminBlock(true)
      setTimeout(() => navigate('/'), 3000)
    }
  }, [user, navigate])

  // Auto-fill email if user is logged in
  useEffect(() => {
    if (user?.email && !customerEmail) {
      setCustomerEmail(user.email)
    }
  }, [user, customerEmail])

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      setError('Only PDF, JPG, and PNG files are allowed')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }

    setReceiptFile(file)
    setError(null)

    // Upload immediately
    setUploadingReceipt(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await api.post('/checkout/upload-receipt', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setReceiptUrl(res.data.url)
    } catch (err) {
      setError('Failed to upload receipt. Please try again.')
      setReceiptFile(null)
    } finally {
      setUploadingReceipt(false)
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Validate required fields
      if (!customerName || !customerPhone || !customerEmail || !selectedBank || !receiptUrl) {
        setError('Please fill all required fields and upload receipt')
        setLoading(false)
        return
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(customerEmail)) {
        setError('Please enter a valid email address')
        setLoading(false)
        return
      }

      const payload = {
        shipping_address: address,
        payment_method: 'bank_transfer',
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_email: customerEmail,
        selected_bank: selectedBank,
        transfer_receipt_url: receiptUrl,
        transaction_reference: transactionRef,
        additional_notes: additionalNotes,
        items: items.map(item => ({
          product_id: item.id,
          title: item.name,
          quantity: item.qty,
          price: item.price
        })),
        total_amount: items.reduce((sum, item) => sum + (item.price * item.qty), 0)
      }

      const res = await api.post('/checkout', payload)
      setOrderId(res.data.order_id)
      setBankInfo(res.data.bank_transfer)
      clear()
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to create order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (showAdminBlock) {
    return (
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
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          padding: '3rem',
          borderRadius: '24px',
          maxWidth: '500px',
          width: '90%',
          boxShadow: '0 20px 60px rgba(245, 87, 108, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
          animation: 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </div>
          </div>
          
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
            }}>Checkout Restricted</h2>
            <p style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.1rem',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Admin accounts cannot proceed with checkout. This platform belongs to you!
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
    )
  }

  return (
    <div className="checkout-wrap">
      <div className="container">
        <div className="head">
          <div>
            <p className="kicker">Checkout</p>
            <h1 className="headline">Complete your order</h1>
            <p className="muted">Secure bank transfer • Upload receipt • Fast verification</p>
          </div>
          {items.length > 0 && (
            <div className="pill"><span>{items.reduce((s,i)=>s+i.qty,0)}</span> items</div>
          )}
        </div>

        {error && (
          <div className="alert error">{error}</div>
        )}

        {!orderId ? (
          <div className="grid">
            {/* LEFT: form */}
            <form onSubmit={onSubmit} className="panel form">
              {/* Customer */}
              <h3 className="section-title">Customer information</h3>
              <div className="row">
                <div className="field">
                  <label>Full name<span aria-hidden> *</span></label>
                  <input value={customerName} onChange={e=>setCustomerName(e.target.value)} required placeholder="e.g. John Perera" />
                </div>
                <div className="field">
                  <label>Phone number<span aria-hidden> *</span></label>
                  <input type="tel" value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} required placeholder="07x xxx xxxx" />
                </div>
              </div>
              <div className="field">
                <label>Email<span aria-hidden> *</span></label>
                <input type="email" value={customerEmail} onChange={e=>setCustomerEmail(e.target.value)} required disabled={!!user?.email} placeholder="you@example.com" />
                {user?.email && <p className="tiny muted">Using logged-in account email</p>}
              </div>

              {/* Address */}
              <h3 className="section-title">Delivery address</h3>
              <div className="field">
                <label>Address line 1<span aria-hidden> *</span></label>
                <input value={address.line1} onChange={e=>setAddress({...address,line1:e.target.value})} required />
              </div>
              <div className="row">
                <div className="field">
                  <label>City<span aria-hidden> *</span></label>
                  <input value={address.city} onChange={e=>setAddress({...address,city:e.target.value})} required />
                </div>
                <div className="field">
                  <label>Postal code<span aria-hidden> *</span></label>
                  <input value={address.postal_code} onChange={e=>setAddress({...address,postal_code:e.target.value})} required />
                </div>
              </div>

              {/* Payment */}
              <h3 className="section-title">Bank transfer</h3>
              <div className="field">
                <label>Select your bank<span aria-hidden> *</span></label>
                <select value={selectedBank} onChange={e=>setSelectedBank(e.target.value)} required>
                  <option value="">-- Select your bank --</option>
                  {SRI_LANKAN_BANKS.map(bank => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Upload transfer receipt<span aria-hidden> *</span></label>
                <div className="drop">
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} disabled={uploadingReceipt} />
                  <div className="note">
                    <strong>{uploadingReceipt ? 'Uploading…' : (receiptFile ? `${receiptFile.name}` : 'Choose PDF/JPG/PNG (max 5MB)')}</strong>
                    {receiptFile && !uploadingReceipt && <span className="ok">✓ Ready</span>}
                  </div>
                </div>
                <p className="tiny muted">We’ll verify the receipt within 24 hours.</p>
              </div>

              <div className="row">
                <div className="field">
                  <label>Transaction / reference (optional)</label>
                  <input value={transactionRef} onChange={e=>setTransactionRef(e.target.value)} placeholder="e.g. BOCPAY12345" />
                </div>
                <div className="field">
                  <label>Additional notes (optional)</label>
                  <input value={additionalNotes} onChange={e=>setAdditionalNotes(e.target.value)} placeholder="Delivery instructions, etc." />
                </div>
              </div>

              <button className="btn btn-primary" type="submit" disabled={items.length===0||loading||!receiptUrl}>
                {loading? 'Processing…' : 'Complete order'}
              </button>
            </form>

            {/* RIGHT: bank + order summary */}
            <aside className="stack">
              <div className="panel sticky">
                <h3 className="section-title">Company bank account</h3>
                <div className="kv">
                  <div>
                    <span className="muted">Account holder</span>
                    <div className="val">{COMPANY_BANK_DETAILS.accountHolder}</div>
                  </div>
                  <div>
                    <span className="muted">Bank</span>
                    <div className="val">{COMPANY_BANK_DETAILS.bank}</div>
                  </div>
                  <div>
                    <span className="muted">Branch</span>
                    <div className="val">{COMPANY_BANK_DETAILS.branch}</div>
                  </div>
                  <div>
                    <span className="muted">Account number</span>
                    <div className="val row-inline">
                      <code className="code">{COMPANY_BANK_DETAILS.accountNumber}</code>
                      <button type="button" className="btn btn-ghost sm" onClick={()=>{navigator.clipboard.writeText(COMPANY_BANK_DETAILS.accountNumber);setCopied('acc'); setTimeout(()=>setCopied(null),1500)}}>Copy</button>
                    </div>
                  </div>
                  <div>
                    <span className="muted">WhatsApp</span>
                    <div className="val row-inline">
                      <code className="code">{COMPANY_BANK_DETAILS.whatsapp}</code>
                      <a className="btn btn-ghost sm" href={`https://wa.me/${COMPANY_BANK_DETAILS.whatsapp.replace(/[^\d]/g,'')}`} target="_blank">Chat</a>
                    </div>
                  </div>
                </div>
                <p className="tiny muted">Transfer the total to this account, then upload the receipt on the left.</p>
                {copied==='acc' && <div className="toast">Account number copied</div>}
              </div>

              <div className="panel">
                <h3 className="section-title">Order summary</h3>
                <div className="items">
                  {items.length===0 ? (
                    <p className="muted">Your cart is empty.</p>
                  ) : (
                    items.map(i=> (
                      <div key={i.id} className="item">
                        <div className="name">{i.name} <span className="muted">×{i.qty}</span></div>
                        <div className="price">Rs. {(i.price*i.qty).toFixed(2)}</div>
                      </div>
                    ))
                  )}
                </div>
                <div className="total">
                  <div>Total</div>
                  <div className="price">Rs. {items.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)}</div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div style={{ 
            maxWidth: '600px', 
            margin: '40px auto', 
            padding: '0',
            position: 'relative'
          }}>
            {/* Success Animation Container */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '48px 32px',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative circles */}
              <div style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                top: '-100px',
                right: '-100px'
              }} />
              <div style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                bottom: '-75px',
                left: '-75px'
              }} />

              {/* Success Icon */}
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 24px',
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(56, 239, 125, 0.4)',
                position: 'relative',
                animation: 'bounce 1s ease infinite'
              }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              {/* Main Heading */}
              <h1 style={{ 
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                marginBottom: '16px',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                position: 'relative'
              }}>
                Order Placed Successfully!
              </h1>

              {/* Order ID Box */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
                position: 'relative'
              }}>
                <div style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Order ID
                </div>
                <div style={{ 
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  fontFamily: 'monospace'
                }}>
                  #{orderId}
                </div>
              </div>

              {/* Status Message */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
                textAlign: 'left',
                position: 'relative'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(255, 183, 77, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <span style={{ fontSize: '24px' }}>⏳</span>
                  </div>
                  <div>
                    <div style={{ 
                      color: 'white', 
                      fontSize: '16px',
                      fontWeight: 'bold'
                    }}>
                      Pending Verification
                    </div>
                    <div style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '13px'
                    }}>
                      Your order is being reviewed
                    </div>
                  </div>
                </div>
                <div style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  We will review your payment receipt and update your order status shortly. 
                  You will be notified once your payment is verified.
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                position: 'relative'
              }}>
                <button
                  onClick={() => window.location.href = '/orders'}
                  style={{
                    padding: '14px 32px',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  View Order History
                </button>
                
                <button
                  onClick={() => window.location.href = '/shop'}
                  style={{
                    padding: '14px 32px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Additional Info Card */}
            <div style={{
              marginTop: '24px',
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#333'
              }}>
                What's Next?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#e3f2fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '18px' }}>📧</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>
                      Email Confirmation
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      Check your email for order confirmation and receipt
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#fff3e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '18px' }}>🔍</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>
                      Payment Review
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      Our team will verify your payment receipt within 24 hours
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#e8f5e9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '18px' }}>📦</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>
                      Track Your Order
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      Monitor your order status in real-time from Order History
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add CSS animation */}
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
          </div>
        )}

        {/* Styles */}
        <style>{`
          :root{
            --bg:#0d0d0f;--surface:#121216;--surface-alt:#171821;--text:#e9e9ef;--muted:#b8bbd9;--brand:#6D74FF;--brand-600:#5860ff;--line:#2a2b36;--card:#14151d;--ghost:#232434;
          }
          .checkout-wrap{background:var(--bg);color:var(--text)}
          .container{max-width:1120px;margin:0 auto;padding:24px 20px}
          .head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:12px}
          .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 6px}
          .headline{font-size:clamp(26px,3.5vw,36px);line-height:1.1;margin:0}
          .pill{border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:6px 10px;color:var(--muted)}
          .grid{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
          .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px;position:relative}
          .sticky{position:sticky;top:12px}
          .section-title{margin:0 0 10px;font-size:18px}
          .form{display:grid;gap:12px}
          .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
          .row-inline{display:flex;gap:8px;align-items:center}
          .field{display:grid;gap:6px}
          label{font-size:13px;color:var(--muted)}
          input,select,textarea{background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:10px}
          .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
          .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
          .btn-primary:disabled{opacity:.6}
          .btn-ghost{background:transparent}
          .btn.sm{padding:6px 10px;font-size:12px}
          .muted{color:var(--muted)}
          .tiny{font-size:12px}
          .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9;border-radius:10px;padding:12px;margin:10px 0}
          .kv{display:grid;gap:10px}
          .val{font-weight:600}
          .code{background:var(--surface-alt);border:1px solid var(--line);padding:4px 8px;border-radius:6px}
          .items{display:grid;gap:8px;margin:10px 0}
          .item{display:flex;justify-content:space-between;align-items:center;border-bottom:1px dashed var(--line);padding-bottom:8px}
          .total{display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-weight:700}
          .drop{border:1px dashed var(--line);border-radius:10px;padding:10px;background:var(--surface);display:flex;align-items:center;justify-content:space-between}
          .drop input{background:transparent;border:none;padding:0}
          .drop .ok{color:#1fbf75;margin-left:8px}
          .toast{position:absolute;right:12px;top:12px;background:var(--surface-alt);border:1px solid var(--line);padding:6px 8px;border-radius:8px;color:var(--muted);font-size:12px}
          @media(max-width:900px){.grid{grid-template-columns:1fr}}
        `}</style>
      </div>
    </div>
  )
}
 


