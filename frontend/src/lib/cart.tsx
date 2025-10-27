import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from './toast'
import { useAuth } from '../context/AuthProvider'

export type CartItem = { id: string; productId: number; slug: string; name: string; price: number; qty: number; image?: string }

type CartContextType = {
  items: CartItem[]
  count: number
  add: (item: Omit<CartItem, 'id' | 'qty'>, qty?: number) => void
  remove: (id: string) => void
  update: (id: string, qty: number) => void
  clear: () => void
  isAuthenticated: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize cart synchronously from localStorage to avoid a mount-effect race
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('cart')
      return stored ? JSON.parse(stored) as CartItem[] : []
    } catch {
      return []
    }
  })

  // Persist cart to localStorage. If cart is empty, remove the key so cleared state is explicit.
  useEffect(() => {
    try {
      if (!items || items.length === 0) {
        localStorage.removeItem('cart')
      } else {
        localStorage.setItem('cart', JSON.stringify(items))
      }
    } catch {}
  }, [items])

  const value = useMemo(() => {
    // Get auth status from localStorage to avoid circular dependency
    const token = localStorage.getItem('access_token')
    const isAuthenticated = !!token

    return {
      items,
      count: items.reduce((a, b) => a + b.qty, 0),
      isAuthenticated,
      add: (item: Omit<CartItem, 'id' | 'qty'>, qty: number = 1) => {
        // Only allow adding to cart if authenticated
        if (!isAuthenticated) {
          alert('Please login or register to add items to cart')
          window.location.href = '/login'
          return
        }
        setItems(prev => {
          const existing = prev.find(p => p.productId === item.productId)
          if (existing) {
            const next = prev.map(p => p.productId === item.productId ? { ...p, qty: p.qty + qty } : p)
            return next
          }
          const next = [...prev, { ...item, id: crypto.randomUUID(), qty }]
          return next
        })
        // Fire friendly feedback
        try { toast(`${item.name} added to cart`, 'success') } catch {}
      },
      remove: (id: string) => setItems(prev => prev.filter(p => p.id !== id)),
      update: (id: string, qty: number) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p)),
      clear: () => setItems([])
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


