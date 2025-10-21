import { useState } from 'react'
import { useCart } from '../lib/cart'
import { api } from '../lib/api'

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
  const [address, setAddress] = useState({ line1: '', city: '', postal_code: '', country: 'LK' })
  const [orderId, setOrderId] = useState<string | null>(null)
  const [bankInfo, setBankInfo] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
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
      if (!customerName || !customerPhone || !selectedBank || !receiptUrl) {
        setError('Please fill all required fields and upload receipt')
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
            placeholder="Email Address (optional)"
            type="email"
            value={customerEmail}
            onChange={e => setCustomerEmail(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />

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
        <div style={{ padding: '24px', backgroundColor: '#f0fff0', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#0a0', marginBottom: '16px' }}>✓ Order Placed Successfully!</h2>
          <div style={{ fontSize: '18px', marginBottom: '16px' }}>Order ID: <strong>#{orderId}</strong></div>
          <p style={{ marginBottom: '12px' }}>Your order has been received and is pending verification.</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            We will review your payment receipt and update your order status shortly.
            You will be notified once your payment is verified.
          </p>
        </div>
      )}
    </div>
  )
}


