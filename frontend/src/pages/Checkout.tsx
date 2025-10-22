import { useState, useEffect } from 'react'
import { useCart } from '../lib/cart'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthProvider'

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
  const [address, setAddress] = useState({ line1: '', city: '', postal_code: '', country: 'LK' })
  const [orderId, setOrderId] = useState<string | null>(null)
  const [bankInfo, setBankInfo] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // New fields for bank transfer
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  
  // Auto-fill email if user is logged in
  useEffect(() => {
    if (user?.email && !customerEmail) {
      setCustomerEmail(user.email)
    }
  }, [user])
  const [selectedBank, setSelectedBank] = useState('')
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null)
  const [uploadingReceipt, setUploadingReceipt] = useState(false)
  const [transactionRef, setTransactionRef] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')

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

  return (
    <div className="container" style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Checkout</h1>

      {error && (
        <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#fee', color: '#c00', borderRadius: '4px' }}>
          {error}
        </div>
      )}

      {!orderId ? (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '16px' }}>
          {/* Company Bank Details - Show First */}
          <div style={{ padding: '16px', backgroundColor: '#f0f0ff', borderRadius: '8px', marginBottom: '8px' }}>
            <h3 style={{ marginBottom: '12px', color: '#333' }}>📋 Company Bank Account Details</h3>
            <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
              <div><strong>Account Holder:</strong> {COMPANY_BANK_DETAILS.accountHolder}</div>
              <div><strong>Bank:</strong> {COMPANY_BANK_DETAILS.bank}</div>
              <div><strong>Branch:</strong> {COMPANY_BANK_DETAILS.branch}</div>
              <div><strong>Account Number:</strong> <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#6D74FF' }}>{COMPANY_BANK_DETAILS.accountNumber}</span></div>
              <div><strong>WhatsApp:</strong> {COMPANY_BANK_DETAILS.whatsapp}</div>
            </div>
            <p style={{ marginTop: '12px', fontSize: '13px', color: '#666' }}>
              ⚠️ Please transfer the payment to the above account and upload your receipt below.
            </p>
          </div>

          {/* Customer Information */}
          <h3 style={{ marginTop: '8px' }}>Customer Information</h3>
          <input
            placeholder="Full Name *"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            placeholder="Phone Number *"
            type="tel"
            value={customerPhone}
            onChange={e => setCustomerPhone(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            placeholder="Email Address"
            type="email"
            value={customerEmail}
            onChange={e => setCustomerEmail(e.target.value)}
            disabled={!!user?.email}
            required
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              backgroundColor: user?.email ? '#f5f5f5' : 'white'
            }}
          />
          {user?.email && (
            <p style={{ fontSize: '12px', color: '#666', marginTop: '-8px' }}>
              ✓ Using logged-in account email
            </p>
          )}

          {/* Delivery Address */}
          <h3 style={{ marginTop: '8px' }}>Delivery Address</h3>
          <input
            placeholder="Address Line 1 *"
            value={address.line1}
            onChange={e => setAddress({ ...address, line1: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            placeholder="City *"
            value={address.city}
            onChange={e => setAddress({ ...address, city: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            placeholder="Postal Code *"
            value={address.postal_code}
            onChange={e => setAddress({ ...address, postal_code: e.target.value })}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />

          {/* Bank Selection */}
          <h3 style={{ marginTop: '8px' }}>Select Your Bank *</h3>
          <select
            value={selectedBank}
            onChange={e => setSelectedBank(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Select your bank --</option>
            {SRI_LANKAN_BANKS.map(bank => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>

          {/* Receipt Upload */}
          <h3 style={{ marginTop: '8px' }}>Upload Transfer Receipt *</h3>
          <div>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              disabled={uploadingReceipt}
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
            />
            {uploadingReceipt && <p style={{ marginTop: '8px', color: '#666' }}>Uploading...</p>}
            {receiptFile && !uploadingReceipt && (
              <p style={{ marginTop: '8px', color: '#0a0' }}>✓ {receiptFile.name} uploaded successfully</p>
            )}
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Accepted formats: PDF, JPG, PNG (Max 5MB)
            </p>
          </div>

          {/* Transaction Reference */}
          <input
            placeholder="Transaction/Reference ID (optional)"
            value={transactionRef}
            onChange={e => setTransactionRef(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />

          {/* Additional Notes */}
          <textarea
            placeholder="Additional Notes (optional)"
            value={additionalNotes}
            onChange={e => setAdditionalNotes(e.target.value)}
            rows={3}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />

          <button
            className="btn"
            type="submit"
            disabled={items.length === 0 || loading || !receiptUrl}
            style={{
              padding: '12px',
              backgroundColor: '#6D74FF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: items.length === 0 || loading || !receiptUrl ? 'not-allowed' : 'pointer',
              opacity: items.length === 0 || loading || !receiptUrl ? 0.6 : 1,
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            {loading ? 'Processing...' : 'Complete Order'}
          </button>
        </form>
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
    </div>
  )
}


