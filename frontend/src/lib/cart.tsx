import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = { id: string; productId: number; slug: string; name: string; price: number; qty: number; image?: string }

type CartContextType = {
  items: CartItem[]
  count: number
  add: (item: Omit<CartItem, 'id' | 'qty'>, qty?: number) => void
  remove: (id: string) => void
  update: (id: string, qty: number) => void
  clear: () => void
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

  const value = useMemo(() => ({
    items,
    count: items.reduce((a, b) => a + b.qty, 0),
    add: (item, qty = 1) => {
      setItems(prev => {
        const existing = prev.find(p => p.productId === item.productId)
        if (existing) {
          return prev.map(p => p.productId === item.productId ? { ...p, qty: p.qty + qty } : p)
        }
        return [...prev, { ...item, id: crypto.randomUUID(), qty }]
      })
    },
    remove: id => setItems(prev => prev.filter(p => p.id !== id)),
    update: (id, qty) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p)),
    clear: () => setItems([])
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


