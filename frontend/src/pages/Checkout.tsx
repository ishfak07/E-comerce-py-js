import { useState } from 'react'
import { useCart } from '../lib/cart'
import { api } from '../lib/api'

export default function Checkout() {
  const { items, clear } = useCart()
  const [address, setAddress] = useState({ line1: '', city: '', postal_code: '', country: 'US' })
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [orderId, setOrderId] = useState<number | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'bank_transfer'>('stripe')
  const [bankInfo, setBankInfo] = useState<any | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await api.post('/checkout', { shipping_address: address, payment_method: paymentMethod })
    if (paymentMethod === 'stripe') {
      setClientSecret(res.data.payment_intent_client_secret)
      setOrderId(res.data.order_id)
      clear()
    } else {
      // bank transfer
      setOrderId(res.data.order_id)
      setBankInfo(res.data.bank_transfer)
      clear()
    }
  }

  return (
    <div className="container" style={{ padding: 24 }}>
      <h1>Checkout</h1>
      {!clientSecret ? (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 400 }}>
          <input placeholder="Address line 1" value={address.line1} onChange={e => setAddress({ ...address, line1: e.target.value })} />
          <input placeholder="City" value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} />
          <input placeholder="Postal code" value={address.postal_code} onChange={e => setAddress({ ...address, postal_code: e.target.value })} />
          <input placeholder="Country" value={address.country} onChange={e => setAddress({ ...address, country: e.target.value })} />
          <div>
            <label><input type="radio" checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} /> Pay with Card (Stripe)</label>
            <br/>
            <label><input type="radio" checked={paymentMethod === 'bank_transfer'} onChange={() => setPaymentMethod('bank_transfer')} /> Bank Transfer</label>
          </div>
          <button className="btn" type="submit" disabled={items.length === 0}>Create Payment</button>
        </form>
      ) : (
        <div>
          <div>Order #{orderId}</div>
          {clientSecret && <div>Client secret: {clientSecret}</div>}
          {bankInfo && (
            <div style={{ marginTop: 12 }}>
              <h3>Bank Transfer Instructions</h3>
              <div>Name: {bankInfo.name}</div>
              <div>Bank: {bankInfo.bank}</div>
              <div>Branch: {bankInfo.branch}</div>
              <div>Account number: {bankInfo.account_number}</div>
              <div>WhatsApp: {bankInfo.whatsapp}</div>
              <p style={{ marginTop: 8 }}>{bankInfo.instructions}</p>
              <p>Please make the transfer and send confirmation to the WhatsApp number. You can upload a payment screenshot from your Orders page after the transfer.</p>
            </div>
          )}
          {!bankInfo && <div>Use Stripe test cards to confirm payment in your Stripe dashboard.</div>}
        </div>
      )}
    </div>
  )
}


