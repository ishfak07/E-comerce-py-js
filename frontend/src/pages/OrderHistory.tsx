import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

type TrackingStatus = 'placed' | 'verified' | 'processing' | 'shipped' | 'delivered' | 'rejected' | 'cancelled'
type PaymentStatus = 'pending' | 'verified' | 'rejected'

type Order = {
  id: string
  created_at: string
  total_amount: number
  tracking_status: TrackingStatus
  payment_status: PaymentStatus
  customer_name: string
  selected_bank?: string
  transfer_receipt_url?: string
  admin_feedback?: string
  resubmit_required?: boolean
  estimated_delivery_date?: string
  items?: any[]
}

const STATUS_FILTERS = [
  { key: 'all', label: 'All Orders' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
  { key: 'failed', label: 'Failed' },
  { key: 'cancelled', label: 'Cancelled' },
]

export default function OrderHistory() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchOrders()
  }, [filter])

  async function fetchOrders() {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get('/orders/history', {
        params: { status_filter: filter }
      })
      setOrders(res.data.orders || [])
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to load orders')
    } finally {
      setLoading(false)
    }
  }

  function getStatusColor(status: TrackingStatus): string {
    switch (status) {
      case 'placed': return '#d97706'
      case 'verified': return '#0284c7'
      case 'processing': return '#ea580c'
      case 'shipped': return '#2563eb'
      case 'delivered': return '#16a34a'
      case 'rejected': return '#dc2626'
      case 'cancelled': return '#9ca3af'
      default: return '#666'
    }
  }

  function getPaymentBadgeColor(status: PaymentStatus): string {
    switch (status) {
      case 'pending': return '#fef3c7'
      case 'verified': return '#d1fae5'
      case 'rejected': return '#fee2e2'
      default: return '#f3f4f6'
    }
  }

  function getPaymentTextColor(status: PaymentStatus): string {
    switch (status) {
      case 'pending': return '#92400e'
      case 'verified': return '#065f46'
      case 'rejected': return '#991b1b'
      default: return '#374151'
    }
  }

  function getProgressPercentage(status: TrackingStatus): number {
    switch (status) {
      case 'placed': return 20
      case 'verified': return 40
      case 'processing': return 60
      case 'shipped': return 80
      case 'delivered': return 100
      default: return 0
    }
  }

  async function handleReorder(orderId: string) {
    try {
      await api.post(`/orders/${orderId}/reorder`)
      alert('Items added to cart!')
      navigate('/cart')
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to reorder')
    }
  }

  function formatDate(dateString?: string): string {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  function formatMoney(amount: number): string {
    return `LKR ${amount.toFixed(2)}`
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>
            📦 Order History
          </h1>
          <p style={{ color: '#6b7280' }}>
            Track your orders and manage your purchase history
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '24px', 
          overflowX: 'auto',
          paddingBottom: '8px'
        }}>
          {STATUS_FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: filter === key ? '#6D74FF' : 'white',
                color: filter === key ? 'white' : '#374151',
                fontWeight: filter === key ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#fee2e2', 
            color: '#991b1b', 
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <div style={{ fontSize: '18px', color: '#6b7280' }}>Loading orders...</div>
          </div>
        )}

        {/* No Orders */}
        {!loading && orders.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '48px', 
            backgroundColor: 'white', 
            borderRadius: '12px' 
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>No Orders Found</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              {filter === 'all' 
                ? 'You haven\'t placed any orders yet' 
                : `No ${filter} orders found`}
            </p>
            <button
              onClick={() => navigate('/shop')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#6D74FF',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Start Shopping
            </button>
          </div>
        )}

        {/* Orders List */}
        {!loading && orders.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                {/* Order Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>
                      Order #{order.id.slice(-8)}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>
                      {formatDate(order.created_at)}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#6D74FF' }}>
                      {formatMoney(order.total_amount)}
                    </div>
                  </div>
                </div>

                {/* Payment Status */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Payment:</span>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      backgroundColor: getPaymentBadgeColor(order.payment_status),
                      color: getPaymentTextColor(order.payment_status)
                    }}>
                      {order.payment_status === 'pending' && '⏳ Pending Verification'}
                      {order.payment_status === 'verified' && '✅ Verified'}
                      {order.payment_status === 'rejected' && '❌ Rejected'}
                    </span>
                  </div>

                  {/* Admin Feedback */}
                  {order.admin_feedback && (
                    <div style={{ 
                      padding: '12px', 
                      backgroundColor: '#fef3c7', 
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#92400e',
                      marginTop: '8px'
                    }}>
                      <strong>Admin Feedback:</strong> {order.admin_feedback}
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                {order.tracking_status !== 'rejected' && order.tracking_status !== 'cancelled' && (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '8px',
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      <span>Placed</span>
                      <span>Verified</span>
                      <span>Processing</span>
                      <span>Shipped</span>
                      <span>Delivered</span>
                    </div>
                    <div style={{ 
                      height: '8px', 
                      backgroundColor: '#e5e7eb', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${getProgressPercentage(order.tracking_status)}%`,
                        backgroundColor: getStatusColor(order.tracking_status),
                        transition: 'width 0.3s'
                      }} />
                    </div>
                    <div style={{ 
                      marginTop: '8px', 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: getStatusColor(order.tracking_status)
                    }}>
                      {order.tracking_status.toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Estimated Delivery */}
                {order.estimated_delivery_date && order.tracking_status !== 'delivered' && (
                  <div style={{ marginBottom: '16px', fontSize: '14px', color: '#6b7280' }}>
                    📅 Estimated Delivery: <strong>{formatDate(order.estimated_delivery_date)}</strong>
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#6D74FF',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleReorder(order.id)}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: 'white',
                      color: '#6D74FF',
                      border: '2px solid #6D74FF',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    🔁 Reorder
                  </button>

                  {order.payment_status === 'verified' && (
                    <button
                      onClick={() => window.open(`/api/v1/orders/${order.id}/invoice`, '_blank')}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: 'white',
                        color: '#059669',
                        border: '2px solid #059669',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      📄 Invoice
                    </button>
                  )}

                  {order.tracking_status === 'delivered' && (
                    <button
                      onClick={() => navigate(`/orders/${order.id}/review`)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: 'white',
                        color: '#ea580c',
                        border: '2px solid #ea580c',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      ⭐ Review
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
