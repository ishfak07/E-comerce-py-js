# 🔐 Authentication Quick Reference

## Public Routes (No Login Required)
- `/` - Home (limited)
- `/about` - About (limited)
- `/login` - Login
- `/register` - Register

## Protected Routes (Login Required)
- `/shop` - Browse products
- `/product/:slug` - Product details
- `/contact` - Contact form
- `/cart` - Shopping cart
- `/checkout` - Checkout
- `/orders` - Order history
- `/orders/:orderId` - Order details

## User Capabilities

### Without Login ❌
- Cannot shop
- Cannot add to cart
- Cannot checkout
- Cannot view products
- Cannot contact support

### With Login ✅
- Full shop access
- Add items to cart
- Complete purchases
- View order history
- Contact support
- Manage account

## For Developers

### Check if user is logged in:
```typescript
import { useAuth } from '../context/AuthProvider'

const { user, accessToken } = useAuth()
const isLoggedIn = !!(user && accessToken)
```

### Protect a route:
```typescript
import ProtectedRoute from '../components/ProtectedRoute'

<Route path="/my-route" element={
  <ProtectedRoute>
    <MyComponent />
  </ProtectedRoute>
} />
```

### Protect an action:
```typescript
const { isAuthenticated } = useCart()

if (!isAuthenticated) {
  alert('Please login first')
  navigate('/login')
  return
}
```
