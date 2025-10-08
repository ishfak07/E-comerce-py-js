import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../lib/cart'

export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useCart()

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">Ecommerce</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart ({count})</Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <button className="btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}


