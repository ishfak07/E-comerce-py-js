import { useCart } from '../lib/cart'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, update, remove, clear } = useCart()
  const total = items.reduce((a, b) => a + b.price * b.qty, 0)
  return (
    <div className="container" style={{ padding: 24 }}>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <div>Cart is empty. <Link to="/">Continue shopping</Link></div>
      ) : (
        <>
          <table>
            <thead>
              <tr><th>Product</th><th>Qty</th><th>Price</th><th>Action</th></tr>
            </thead>
            <tbody>
              {items.map(i => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>
                    <input type="number" min={1} value={i.qty} onChange={e => update(i.id, Number(e.target.value))} />
                  </td>
                  <td>${(i.price * i.qty).toFixed(2)}</td>
                  <td><button onClick={() => remove(i.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 12 }}>Total: <strong>${total.toFixed(2)}</strong></div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button className="btn" onClick={clear}>Clear</button>
            <Link className="btn" to="/checkout">Checkout</Link>
          </div>
        </>
      )}
    </div>
  )
}


