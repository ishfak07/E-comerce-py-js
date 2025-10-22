import { createContext, useContext, useEffect, useMemo, useState } from 'react'
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
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
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
            return prev.map(p => p.productId === item.productId ? { ...p, qty: p.qty + qty } : p)
          }
          return [...prev, { ...item, id: crypto.randomUUID(), qty }]
        })
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


