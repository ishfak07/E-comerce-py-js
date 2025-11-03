import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from './toast'
import { useAuth } from '../context/AuthProvider'
import { api } from './api'

export type CartItem = { id: string; productId: string | number; slug: string; name: string; price: number; qty: number; image?: string }

type CartContextType = {
  items: CartItem[]
  count: number
  add: (item: Omit<CartItem, 'id' | 'qty'>, qty?: number) => void
  remove: (id: string) => void
  update: (id: string, qty: number) => void
  clear: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  // Load cart from server when user logs in
  useEffect(() => {
    if (!user?.email) {
      // User logged out - clear cart
      setItems([])
      return
    }

    // User logged in - load cart from server
    const loadCart = async () => {
      setIsLoading(true)
      try {
        const response = await api.get('/cart')
        const cartData = response.data
        setItems(cartData.items || [])
        
        // Clear localStorage cart after successful sync
        localStorage.removeItem(`cart_${user.email}`)
        localStorage.removeItem('cart_guest')
      } catch (error) {
        console.error('Failed to load cart from server:', error)
        
        // Fallback: try to sync local cart to server
        try {
          const localCart = localStorage.getItem(`cart_${user.email}`)
          if (localCart) {
            const localItems = JSON.parse(localCart) as CartItem[]
            if (localItems.length > 0) {
              await api.post('/cart/sync', localItems)
              // Reload cart after sync
              const response = await api.get('/cart')
              setItems(response.data.items || [])
              localStorage.removeItem(`cart_${user.email}`)
            }
          }
        } catch (syncError) {
          console.error('Failed to sync cart:', syncError)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadCart()
  }, [user?.email])

  const value = useMemo(() => {
    // Get auth status from localStorage to avoid circular dependency
    const token = localStorage.getItem('access_token')
    const isAuthenticated = !!token

    return {
      items,
      count: items.reduce((a, b) => a + b.qty, 0),
      isAuthenticated,
      isLoading,
      add: (item: Omit<CartItem, 'id' | 'qty'>, qty: number = 1) => {
        // Only allow adding to cart if authenticated
        if (!isAuthenticated) {
          alert('Please login or register to add items to cart')
          window.location.href = '/login'
          return
        }
        
        // Optimistically update UI immediately
        const tempId = crypto.randomUUID()
        setItems(prev => {
          const existing = prev.find(p => p.productId === item.productId)
          if (existing) {
            return prev.map(p => p.productId === item.productId ? { ...p, qty: p.qty + qty } : p)
          }
          return [...prev, { ...item, id: tempId, qty }]
        })
        
        // Fire friendly feedback immediately
        try { toast(`${item.name} added to cart`, 'success') } catch {}
        
        // Call backend API in background
        api.post('/cart/add', {
          productId: item.productId,
          slug: item.slug,
          name: item.name,
          price: item.price,
          qty,
          image: item.image
        })
        .then(() => {
          // Reload cart from server to get correct IDs
          return api.get('/cart')
        })
        .then((response) => {
          setItems(response.data.items || [])
        })
        .catch((error) => {
          console.error('Failed to add item to cart:', error)
          toast('Failed to sync cart with server', 'error')
          // Reload cart to sync with server state
          api.get('/cart')
            .then((response) => {
              setItems(response.data.items || [])
            })
            .catch(() => {})
        })
      },
      remove: (id: string) => {
        // Optimistically update UI
        setItems(prev => prev.filter(p => p.id !== id))
        
        // Call backend API in background
        api.delete(`/cart/remove/${id}`)
          .catch((error) => {
            console.error('Failed to remove item from cart:', error)
            // Reload cart to sync with server state
            api.get('/cart')
              .then((response) => {
                setItems(response.data.items || [])
              })
              .catch(() => {})
          })
      },
      update: (id: string, qty: number) => {
        if (qty < 1) return
        
        // Optimistically update UI
        setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
        
        // Call backend API in background
        api.put(`/cart/update/${id}`, null, { params: { qty } })
          .catch((error) => {
            console.error('Failed to update cart item:', error)
            // Reload cart to sync with server state
            api.get('/cart')
              .then((response) => {
                setItems(response.data.items || [])
              })
              .catch(() => {})
          })
      },
      clear: () => {
        // Optimistically update UI
        setItems([])
        
        // Call backend API in background
        api.delete('/cart/clear')
          .catch((error) => {
            console.error('Failed to clear cart:', error)
            // Reload cart to sync with server state
            api.get('/cart')
              .then((response) => {
                setItems(response.data.items || [])
              })
              .catch(() => {})
          })
      }
    }
  }, [items, isLoading])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


