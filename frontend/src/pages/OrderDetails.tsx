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

  // Memoized handlers for hover effects
  const createHoverHandler = useCallback(
    (normalStyle: any, hoverStyle: any) => ({
      onMouseOver: (e: React.MouseEvent<HTMLElement>) => {
        Object.assign(e.currentTarget.style, hoverStyle)
      },
      onMouseOut: (e: React.MouseEvent<HTMLElement>) => {
        Object.assign(e.currentTarget.style, normalStyle)
      }
    }),
    []
  )

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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f0f4ff 0%, #f9fafb 100%)', padding: '24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/orders')}
          style={{
            padding: '12px 24px',
            background: 'white',
            border: '2px solid #6D74FF',
            borderRadius: '12px',
            cursor: 'pointer',
            marginBottom: '24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#6D74FF',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 8px rgba(109, 116, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}
          {...createHoverHandler(
            { background: 'white', color: '#6D74FF', transform: 'translateY(0)', boxShadow: '0 2px 8px rgba(109, 116, 255, 0.1)' },
            { background: '#6D74FF', color: 'white', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(109, 116, 255, 0.3)' }
          )}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Orders
        </button>

        {/* Header Card with Gradient */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px', 
          padding: '32px', 
          marginBottom: '24px',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: '-150px',
            right: '-150px'
          }} />
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            bottom: '-100px',
            left: '-100px'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
            <div>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                ORDER DETAILS
              </div>
              <h1 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                marginBottom: '8px',
                color: 'white',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>
                #{order.id.slice(-8)}
              </h1>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '14px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {formatDate(order.created_at)}
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                TOTAL AMOUNT
              </div>
              <div style={{ 
                fontSize: '42px', 
                fontWeight: 'bold', 
                color: 'white',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                marginBottom: '12px'
              }}>
                {formatMoney(order.total_amount)}
              </div>
              <div style={{ 
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                background: statusConfig?.color ? `linear-gradient(135deg, ${statusConfig.color}, ${statusConfig.color}dd)` : '#6D74FF',
                color: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {statusConfig?.icon} {order.tracking_status.charAt(0).toUpperCase() + order.tracking_status.slice(1)}
              </div>
            </div>
          </div>
        </div>

        {/* Admin Feedback */}
        {order.admin_feedback && (
          <div style={{
            background: order.payment_status === 'rejected' 
              ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(239, 68, 68, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.05) 100%)',
            border: `2px solid ${order.payment_status === 'rejected' ? '#dc2626' : '#f59e0b'}`,
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: order.payment_status === 'rejected'
                ? 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: order.payment_status === 'rejected'
                  ? 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
                  : 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div style={{ 
                fontWeight: 'bold', 
                fontSize: '18px',
                color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e',
                position: 'relative',
                zIndex: 1
              }}>
                Admin Feedback
              </div>
            </div>
            
            <div style={{ 
              color: order.payment_status === 'rejected' ? '#991b1b' : '#92400e',
              fontSize: '15px',
              lineHeight: '1.6',
              fontWeight: '500',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              border: `1px solid ${order.payment_status === 'rejected' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`,
              position: 'relative',
              zIndex: 1
            }}>
              {order.admin_feedback}
            </div>
            
            {order.resubmit_required && (
              <div style={{ marginTop: '20px', position: 'relative', zIndex: 1 }}>
                <label style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                  color: 'white',
                  borderRadius: '12px',
                  cursor: uploadingReceipt ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.3s ease',
                  opacity: uploadingReceipt ? 0.7 : 1
                }}
                {...createHoverHandler(
                  { transform: 'translateY(0)', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)' },
                  uploadingReceipt ? {} : { transform: 'translateY(-2px)', boxShadow: '0 6px 16px rgba(220, 38, 38, 0.4)' }
                )}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  {uploadingReceipt ? 'Uploading...' : 'Re-upload Receipt'}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleReceiptReupload}
                    disabled={uploadingReceipt}
                    style={{ display: 'none' }}
                  />
                </label>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#6b7280', 
                  marginTop: '10px',
                  fontWeight: '500'
                }}>
                  Please upload a valid payment receipt (PDF, JPG, PNG)
                </p>
              </div>
            )}
          </div>
        )}

        {/* Order Items Section */}
        {order.items && order.items.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '28px',
            marginBottom: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(109, 116, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Order Items
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {order.items.map((item: any, index: number) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  background: 'linear-gradient(to right, #f8f9ff 0%, #ffffff 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(109, 116, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                {...createHoverHandler(
                  { boxShadow: 'none', transform: 'translateX(0)' },
                  { boxShadow: '0 4px 12px rgba(109, 116, 255, 0.15)', transform: 'translateX(4px)' }
                )}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontWeight: '600', 
                      fontSize: '16px',
                      color: '#1f2937',
                      marginBottom: '4px'
                    }}>
                      {item.title || item.name || 'Product'}
                    </div>
                    <div style={{ 
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      Quantity: {item.quantity} × {formatMoney(item.price)}
                    </div>
                  </div>
                  <div style={{ 
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#6D74FF'
                  }}>
                    {formatMoney(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '2px dashed rgba(109, 116, 255, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px'
              }}>
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  Total Amount
                </span>
                <span style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  {formatMoney(order.total_amount)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(109, 116, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              Order Timeline
            </h2>
          </div>
          
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
                      background: isActive 
                        ? 'linear-gradient(to bottom, #667eea, #764ba2)'
                        : '#e5e7eb'
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-36px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: isActive 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : '#e5e7eb',
                      border: isCurrent ? '4px solid rgba(109, 116, 255, 0.3)' : 'none',
                      boxShadow: isCurrent ? '0 0 0 4px rgba(109, 116, 255, 0.1)' : 'none',
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
                      background: isCurrent 
                        ? 'linear-gradient(to right, rgba(102, 126, 234, 0.1), rgba(255, 255, 255, 0))'
                        : 'transparent',
                      borderRadius: '12px',
                      border: isCurrent ? '2px solid rgba(109, 116, 255, 0.2)' : 'none'
                    }}>
                      <div style={{ 
                        fontWeight: isCurrent ? 'bold' : '600',
                        fontSize: isCurrent ? '18px' : '16px',
                        color: isActive ? '#1f2937' : '#9ca3af',
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
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                          color: '#6b7280',
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
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(109, 116, 255, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Customer Information
              </h3>
            </div>
            
            <div style={{ fontSize: '15px', lineHeight: '2', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <strong style={{ color: '#4b5563', minWidth: '70px' }}>Name:</strong> 
                <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.customer_name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <strong style={{ color: '#4b5563', minWidth: '70px' }}>Phone:</strong> 
                <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.customer_phone}</span>
              </div>
              {order.customer_email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <strong style={{ color: '#4b5563', minWidth: '70px' }}>Email:</strong> 
                  <span style={{ color: '#1f2937', fontWeight: '600', wordBreak: 'break-all' }}>{order.customer_email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Address */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(109, 116, 255, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Delivery Address
              </h3>
            </div>
            
            <div style={{ 
              fontSize: '15px', 
              lineHeight: '2',
              position: 'relative',
              zIndex: 1,
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '12px',
              border: '1px solid rgba(109, 116, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.shipping_address.line1}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                </svg>
                <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.shipping_address.city}, {order.shipping_address.postal_code}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.shipping_address.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(109, 116, 255, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              Payment Information
            </h3>
          </div>
          
          <div style={{ 
            fontSize: '15px', 
            lineHeight: '2', 
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '12px',
              padding: '14px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              border: '1px solid rgba(109, 116, 255, 0.1)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
              <strong style={{ color: '#4b5563', minWidth: '100px' }}>Bank:</strong> 
              <span style={{ color: '#1f2937', fontWeight: '600' }}>{order.selected_bank || 'N/A'}</span>
            </div>
            {order.transaction_reference && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                padding: '14px',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '10px',
                border: '1px solid rgba(109, 116, 255, 0.1)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <strong style={{ color: '#4b5563', minWidth: '100px' }}>Reference:</strong> 
                <span style={{ 
                  color: '#1f2937', 
                  fontWeight: '600',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  background: 'rgba(102, 126, 234, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '6px'
                }}>
                  {order.transaction_reference}
                </span>
              </div>
            )}
          </div>

          {order.transfer_receipt_url && (
            <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              <a
                href={order.transfer_receipt_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                {...createHoverHandler(
                  { transform: 'translateY(0)', boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)' },
                  { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)' }
                )}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                View Receipt
              </a>
            </div>
          )}

          {order.additional_notes && (
            <div style={{ 
              marginTop: '20px', 
              padding: '16px', 
              background: 'rgba(255, 255, 255, 0.7)', 
              borderRadius: '12px',
              border: '1px solid rgba(109, 116, 255, 0.15)',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <strong style={{ color: '#4b5563' }}>Additional Notes:</strong>
              </div>
              <div style={{ 
                color: '#1f2937', 
                fontSize: '15px',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {order.additional_notes}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
