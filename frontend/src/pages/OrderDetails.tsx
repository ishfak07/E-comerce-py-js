import { useEffect, useState, useCallback, useMemo } from 'react'
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

// Extract helper functions outside component
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

// Status icon and color mappings
const STATUS_CONFIG = {
  placed: { icon: '📦', color: '#FFD700' },
  verified: { icon: '✅', color: '#0284c7' },
  processing: { icon: '⚙️', color: '#ea580c' },
  shipped: { icon: '🚚', color: '#2563eb' },
  delivered: { icon: '🎉', color: '#11998e' }
}

const TIMELINE_STEPS = ['placed', 'verified', 'processing', 'shipped', 'delivered'] as const

export default function OrderDetails() {
  const { orderId } = useParams<{ orderId: string }>()
  const navigate = useNavigate()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [uploadingReceipt, setUploadingReceipt] = useState(false)

  const fetchOrderDetails = useCallback(async () => {
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
  }, [orderId])

  useEffect(() => {
    fetchOrderDetails()
  }, [fetchOrderDetails])

  const handleReceiptReupload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    [orderId, fetchOrderDetails]
  )

  // Optimized polling with shallow comparison
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    let stopped = false

    async function pollOnce() {
      try {
        const res = await api.get(`/orders/${orderId}`)
        if (stopped) return
        const fresh = res.data as Order
        // Only update if relevant fields changed
        if (
          !order ||
          fresh.tracking_status !== order.tracking_status ||
          fresh.payment_status !== order.payment_status
        ) {
          setOrder(fresh)
        }
        if (
          (fresh.tracking_status === 'delivered' ||
            fresh.tracking_status === 'cancelled') &&
          intervalId
        ) {
          clearInterval(intervalId)
          intervalId = null
        }
      } catch (e) {
        // Silently continue polling
      }
    }

    if (
      order &&
      order.tracking_status !== 'delivered' &&
      order.tracking_status !== 'cancelled'
    ) {
      pollOnce()
      intervalId = setInterval(pollOnce, 5000)
    }

    return () => {
      stopped = true
      if (intervalId) clearInterval(intervalId)
    }
  }, [order?.tracking_status, order?.payment_status, orderId])

  // Memoized computed values
  const currentStepIndex = useMemo(() => {
    if (!order) return -1
    return TIMELINE_STEPS.indexOf(order.tracking_status as any)
  }, [order?.tracking_status])

  const statusConfig = useMemo(() => {
    if (!order) return null
    return STATUS_CONFIG[order.tracking_status as keyof typeof STATUS_CONFIG] || {
      icon: '📝',
      color: '#6D74FF'
    }
  }, [order?.tracking_status])

  if (loading) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{ fontSize: '18px', color: 'var(--muted)' }}>Loading order details...</div>
        </div>
      </section>
    )
  }

  if (error || !order) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '48px 0' }}>
          <div className="empty-state" style={{ padding: '48px', background: 'var(--card)', borderRadius: '14px', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
            <h2>{error || 'Order not found'}</h2>
            <button
              onClick={() => navigate('/orders')}
              className="btn"
              style={{ marginTop: '16px' }}
            >
              Back to Orders
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        {/* Back Button */}
        <button
          onClick={() => navigate('/orders')}
          className="btn"
          style={{ marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Orders
        </button>

        {/* Header Card */}
        <div className="order-detail-header">
          <div className="order-detail-header-left">
            <h1 className="section-title">Order #{order.id.slice(-8)}</h1>
            <p style={{ color: 'var(--muted)', margin: '4px 0 0' }}>
              📅 {formatDate(order.created_at)}
            </p>
          </div>
          
          <div className="order-detail-header-right">
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>
              Total Amount
            </div>
            <div className="price" style={{ fontSize: '32px', margin: '0 0 12px' }}>
              {formatMoney(order.total_amount)}
            </div>
            <div 
              className="status-badge"
              style={{ 
                backgroundColor: statusConfig?.color || '#6D74FF',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {statusConfig?.icon} {order.tracking_status.charAt(0).toUpperCase() + order.tracking_status.slice(1)}
            </div>
          </div>
        </div>

        {/* Admin Feedback */}
        {order.admin_feedback && (
          <div 
            className="alert"
            style={{
              background: order.payment_status === 'rejected' 
                ? '#fee2e2'
                : '#fef3c7',
              border: `1px solid ${order.payment_status === 'rejected' ? '#dc2626' : '#f59e0b'}`,
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <div style={{ 
              fontWeight: 'bold', 
              fontSize: '16px',
              color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e',
              marginBottom: '12px'
            }}>
              ⚠️ Admin Feedback
            </div>
            
            <div style={{ 
              color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: order.resubmit_required ? '16px' : '0'
            }}>
              {order.admin_feedback}
            </div>
            
            {order.resubmit_required && (
              <div>
                <label 
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: uploadingReceipt ? 'not-allowed' : 'pointer',
                    opacity: uploadingReceipt ? 0.7 : 1
                  }}
                >
                  📤 {uploadingReceipt ? 'Uploading...' : 'Re-upload Receipt'}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleReceiptReupload}
                    disabled={uploadingReceipt}
                    style={{ display: 'none' }}
                  />
                </label>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
                  Please upload a valid payment receipt (PDF, JPG, PNG)
                </p>
              </div>
            )}
          </div>
        )}

        {/* Order Items Section */}
        {order.items && order.items.length > 0 && (
          <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px' }}>
              🛒 Order Items
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {order.items.map((item: any, index: number) => (
                <div 
                  key={index} 
                  className="order-item"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'var(--bg)',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                      {item.title || item.name || 'Product'}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                      Quantity: {item.quantity} × {formatMoney(item.price)}
                    </div>
                  </div>
                  <div className="price" style={{ fontSize: '18px' }}>
                    {formatMoney(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '2px solid var(--bg)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Total Amount</span>
              <span className="price" style={{ fontSize: '24px' }}>
                {formatMoney(order.total_amount)}
              </span>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '24px' }}>
            📊 Order Timeline
          </h3>
          
          <div style={{ position: 'relative', paddingLeft: '48px' }}>
            {TIMELINE_STEPS.map((status, index) => {
              const isActive = currentStepIndex >= index
              const isCurrent = order.tracking_status === status
              const config = STATUS_CONFIG[status]
              
              return (
                <div key={status} style={{ position: 'relative', paddingBottom: index < 4 ? '32px' : '0' }}>
                  {index < 4 && (
                    <div style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '32px',
                      width: '3px',
                      height: '32px',
                      background: isActive ? 'var(--primary)' : '#e5e7eb'
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-36px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: isActive ? 'var(--primary)' : '#e5e7eb',
                      border: isCurrent ? '4px solid rgba(109, 40, 217, 0.3)' : 'none',
                      boxShadow: isCurrent ? '0 0 0 4px rgba(109, 40, 217, 0.1)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {isCurrent && (
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'white'
                        }} />
                      )}
                    </div>
                    <div style={{
                      flex: 1,
                      padding: '16px',
                      background: isCurrent ? 'rgba(109, 40, 217, 0.05)' : 'transparent',
                      borderRadius: '12px',
                      border: isCurrent ? '2px solid rgba(109, 40, 217, 0.2)' : 'none'
                    }}>
                      <div style={{ 
                        fontWeight: isCurrent ? 'bold' : '600',
                        fontSize: isCurrent ? '18px' : '16px',
                        color: isActive ? 'var(--text)' : 'var(--muted)',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>{config.icon}</span>
                        {status}
                        {isCurrent && (
                          <span style={{
                            marginLeft: '8px',
                            padding: '4px 12px',
                            background: 'var(--primary)',
                            color: 'white',
                            fontSize: '12px',
                            borderRadius: '12px',
                            fontWeight: 'bold'
                          }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                      {isCurrent && order.estimated_delivery_date && status === 'shipped' && (
                        <div style={{ 
                          fontSize: '14px', 
                          color: 'var(--muted)',
                          marginTop: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          {/* Customer Info */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px' }}>
              👤 Customer Information
            </h3>
            
            <div style={{ fontSize: '15px', lineHeight: '2' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: 'var(--muted)' }}>Name:</strong>{' '}
                <span style={{ fontWeight: '600' }}>{order.customer_name}</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: 'var(--muted)' }}>Phone:</strong>{' '}
                <span style={{ fontWeight: '600' }}>{order.customer_phone}</span>
              </div>
              {order.customer_email && (
                <div>
                  <strong style={{ color: 'var(--muted)' }}>Email:</strong>{' '}
                  <span style={{ fontWeight: '600', wordBreak: 'break-all' }}>{order.customer_email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px' }}>
              📍 Delivery Address
            </h3>
            
            <div style={{ fontSize: '15px', lineHeight: '2' }}>
              <div style={{ marginBottom: '8px', fontWeight: '600' }}>
                {order.shipping_address.line1}
              </div>
              <div style={{ marginBottom: '8px', fontWeight: '600' }}>
                {order.shipping_address.city}, {order.shipping_address.postal_code}
              </div>
              <div style={{ fontWeight: '600' }}>
                {order.shipping_address.country}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px' }}>
            💳 Payment Information
          </h3>
          
          <div style={{ fontSize: '15px', lineHeight: '2', marginBottom: '16px' }}>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--muted)' }}>Bank:</strong>{' '}
              <span style={{ fontWeight: '600' }}>{order.selected_bank || 'N/A'}</span>
            </div>
            {order.transaction_reference && (
              <div>
                <strong style={{ color: 'var(--muted)' }}>Reference:</strong>{' '}
                <span 
                  style={{ 
                    fontWeight: '600',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    background: 'var(--bg)',
                    padding: '4px 8px',
                    borderRadius: '6px'
                  }}
                >
                  {order.transaction_reference}
                </span>
              </div>
            )}
          </div>

          {order.transfer_receipt_url && (
            <div style={{ marginBottom: '16px' }}>
              <a
                href={order.transfer_receipt_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                📄 View Receipt
              </a>
            </div>
          )}

          {order.additional_notes && (
            <div 
              style={{ 
                marginTop: '16px', 
                padding: '12px', 
                background: 'var(--bg)', 
                borderRadius: '8px'
              }}
            >
              <strong style={{ color: 'var(--muted)', fontSize: '14px' }}>Additional Notes:</strong>
              <div style={{ marginTop: '8px', fontSize: '15px', lineHeight: '1.6' }}>
                {order.additional_notes}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .order-detail-header {
          background: var(--card);
          border-radius: 14px;
          box-shadow: var(--shadow);
          padding: 24px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border: 1px solid #eee;
        }
        
        .order-detail-header-left h1 {
          margin: 0;
        }
        
        .order-detail-header-right {
          text-align: right;
        }

        @media (max-width: 768px) {
          .order-detail-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .order-detail-header-right {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}
