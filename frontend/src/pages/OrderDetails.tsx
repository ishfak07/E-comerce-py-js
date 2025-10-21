import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

type Order = {
  id: string
  created_at: string
  total_amount: number
  tracking_status: string
  payment_status: string
  customer_name: string
  customer_phone: string
  customer_email?: string
  shipping_address: {
    line1: string
    city: string
    postal_code: string
    country: string
  }
  selected_bank?: string
  transfer_receipt_url?: string
  transaction_reference?: string
  additional_notes?: string
  admin_feedback?: string
  resubmit_required?: boolean
  estimated_delivery_date?: string
  items?: any[]
}

export default function OrderDetails() {
  const { orderId } = useParams<{ orderId: string }>()
  const navigate = useNavigate()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [uploadingReceipt, setUploadingReceipt] = useState(false)

  useEffect(() => {
    fetchOrderDetails()
  }, [orderId])

  async function fetchOrderDetails() {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get(`/orders/${orderId}`)
      setOrder(res.data)
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to load order details')
    } finally {
      setLoading(false)
    }
  }

  async function handleReceiptReupload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingReceipt(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      await api.put(`/orders/${orderId}/receipt`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      
      alert('Receipt uploaded successfully! Awaiting admin verification.')
      fetchOrderDetails()
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to upload receipt')
    } finally {
      setUploadingReceipt(false)
    }
  }

  function formatDate(dateString?: string): string {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  function formatMoney(amount: number): string {
    return `LKR ${amount.toFixed(2)}`
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '18px', color: '#6b7280' }}>Loading order details...</div>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <h2 style={{ marginBottom: '8px' }}>{error || 'Order not found'}</h2>
          <button
            onClick={() => navigate('/orders')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#6D74FF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '16px'
            }}
          >
            Back to Orders
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/orders')}
          style={{
            padding: '8px 16px',
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '24px',
            fontSize: '14px'
          }}
        >
          ← Back to Orders
        </button>

        {/* Header */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
                Order #{order.id.slice(-8)}
              </h1>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                Placed on {formatDate(order.created_at)}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#6D74FF' }}>
                {formatMoney(order.total_amount)}
              </div>
              <div style={{ 
                marginTop: '8px',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 'bold',
                backgroundColor: order.payment_status === 'verified' ? '#d1fae5' : order.payment_status === 'rejected' ? '#fee2e2' : '#fef3c7',
                color: order.payment_status === 'verified' ? '#065f46' : order.payment_status === 'rejected' ? '#991b1b' : '#92400e'
              }}>
                {order.payment_status === 'verified' && '✅ Payment Verified'}
                {order.payment_status === 'pending' && '⏳ Pending Verification'}
                {order.payment_status === 'rejected' && '❌ Payment Rejected'}
              </div>
            </div>
          </div>
        </div>

        {/* Admin Feedback */}
        {order.admin_feedback && (
          <div style={{
            backgroundColor: order.payment_status === 'rejected' ? '#fef2f2' : '#fef3c7',
            border: `2px solid ${order.payment_status === 'rejected' ? '#dc2626' : '#f59e0b'}`,
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e' }}>
              📝 Admin Feedback:
            </div>
            <div style={{ color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e' }}>
              {order.admin_feedback}
            </div>
            
            {/* Receipt Reupload */}
            {order.resubmit_required && (
              <div style={{ marginTop: '16px' }}>
                <label style={{ 
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  {uploadingReceipt ? 'Uploading...' : '📤 Re-upload Receipt'}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleReceiptReupload}
                    disabled={uploadingReceipt}
                    style={{ display: 'none' }}
                  />
                </label>
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>
                  Please upload a valid payment receipt (PDF, JPG, PNG)
                </p>
              </div>
            )}
          </div>
        )}

        {/* Timeline */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            📍 Order Timeline
          </h2>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            {['placed', 'verified', 'processing', 'shipped', 'delivered'].map((status, index) => {
              const isActive = ['placed', 'verified', 'processing', 'shipped', 'delivered'].indexOf(order.tracking_status) >= index
              const isCurrent = order.tracking_status === status
              
              return (
                <div key={status} style={{ position: 'relative', paddingBottom: '24px' }}>
                  {index < 4 && (
                    <div style={{
                      position: 'absolute',
                      left: '-20px',
                      top: '24px',
                      width: '2px',
                      height: '24px',
                      backgroundColor: isActive ? '#6D74FF' : '#e5e7eb'
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-26px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#6D74FF' : '#e5e7eb',
                      border: isCurrent ? '3px solid #6D74FF' : 'none',
                      boxShadow: isCurrent ? '0 0 0 3px rgba(109, 116, 255, 0.2)' : 'none'
                    }} />
                    <div>
                      <div style={{ 
                        fontWeight: isCurrent ? 'bold' : 'normal',
                        color: isActive ? '#111827' : '#9ca3af',
                        textTransform: 'capitalize'
                      }}>
                        {status}
                      </div>
                      {isCurrent && order.estimated_delivery_date && status === 'shipped' && (
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          Est. delivery: {formatDate(order.estimated_delivery_date)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Customer & Delivery Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          {/* Customer Info */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>
              👤 Customer Information
            </h3>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div><strong>Name:</strong> {order.customer_name}</div>
              <div><strong>Phone:</strong> {order.customer_phone}</div>
              {order.customer_email && <div><strong>Email:</strong> {order.customer_email}</div>}
            </div>
          </div>

          {/* Delivery Address */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>
              📍 Delivery Address
            </h3>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div>{order.shipping_address.line1}</div>
              <div>{order.shipping_address.city}, {order.shipping_address.postal_code}</div>
              <div>{order.shipping_address.country}</div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>
            💳 Payment Information
          </h3>
          <div style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
            <div><strong>Bank:</strong> {order.selected_bank || 'N/A'}</div>
            {order.transaction_reference && (
              <div><strong>Reference:</strong> {order.transaction_reference}</div>
            )}
          </div>

          {order.transfer_receipt_url && (
            <div>
              <a
                href={order.transfer_receipt_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#6D74FF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold'
                }}
              >
                📥 View Receipt
              </a>
            </div>
          )}

          {order.additional_notes && (
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <strong>Notes:</strong> {order.additional_notes}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
