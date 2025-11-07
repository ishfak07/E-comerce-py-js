import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderHistory from './pages/OrderHistory'
import OrderDetails from './pages/OrderDetails'
import AppShell from './AppShell'
import { AuthProvider } from './context/AuthProvider'
import { CartProvider } from './lib/cart'
import AdminOrders from './pages/AdminOrders'
import AdminDashboardHome from './pages/AdminDashboardHome'
import AdminProducts from './pages/AdminProducts'
import AdminUsers from './pages/AdminUsers'
import AdminRoute from './components/AdminRoute'
import ProtectedRoute from './components/ProtectedRoute'
import AdminShell from './AdminShell'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles.css'
import Toaster from './components/Toaster'
import Account from './pages/Account'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Suppress specific React Router future-flag warnings in development only.
  // These are informational and originate from react-router's deprecations module.
  // We filter them to keep the console clean during local development.
  (function AppWrapper() {
    if (import.meta.env.DEV) {
      const _warn = console.warn.bind(console)
      console.warn = (...args: any[]) => {
        try {
          const m = args[0]
          if (typeof m === 'string' && m.includes('React Router Future Flag Warning')) {
            return
          }
        } catch (e) {}
        _warn(...args)
      }
    }
    return (
      <React.StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <Toaster />
              <Routes>
                {/* Public site uses AppShell (Header/Footer) */}
                <Route element={<AppShell />}>
                  {/* Public routes - accessible without login */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Protected routes - require authentication */}
                  <Route path="/product/:slug" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                  <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
                  <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                  <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                  <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                  <Route path="/orders" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
                  <Route path="/orders/:orderId" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
                </Route>
                {/* Admin site uses its own shell (no public header/footer) */}
                <Route path="/admin" element={<AdminRoute><AdminShell /></AdminRoute>}>
                  <Route index element={<AdminDashboardHome />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="orders" element={<AdminOrders />} />
                </Route>
              </Routes>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
    )
  })()
)


