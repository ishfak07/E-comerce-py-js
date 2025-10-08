import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../lib/cart'

type Product = {
  id: number
  name: string
  slug: string
  price: number
  images: string[]
}

const demoProducts: Product[] = [
  { id: 101, name: 'Classic Tee', slug: 'classic-tee', price: 19.99, images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'] },
  { id: 102, name: 'Leather Backpack', slug: 'leather-backpack', price: 89.99, images: ['https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop'] },
  { id: 103, name: 'Sneakers', slug: 'sneakers', price: 59.99, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'] },
  { id: 104, name: 'Wireless Headphones', slug: 'wireless-headphones', price: 129.00, images: ['https://images.unsplash.com/photo-1518449032315-66c8f2dc39cf?q=80&w=1200&auto=format&fit=crop'] },
  { id: 105, name: 'Minimal Watch', slug: 'minimal-watch', price: 75.00, images: ['https://images.unsplash.com/photo-1518441902117-f26a60b6c0a4?q=80&w=1200&auto=format&fit=crop'] },
  { id: 106, name: 'Sunglasses', slug: 'sunglasses', price: 35.00, images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop'] }
]

export default function Home() {
  const [products, setProducts] = useState<Product[]>(demoProducts)
  const { add } = useCart()

  useEffect(() => {
    axios.get('/api/v1/products').then(r => {
      if (r.data?.items?.length) setProducts(r.data.items)
    }).catch(() => {})
  }, [])

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Fresh styles for every day</h1>
            <p>Discover curated essentials with modern design and comfort.</p>
            <Link to="/" className="btn">Shop Now</Link>
          </div>
          <div className="hero-images">
            <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1200&auto=format&fit=crop" alt="Hero 1" />
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" alt="Hero 2" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid">
            {products.map(p => (
              <div className="card" key={p.id}>
                <Link to={`/product/${p.slug}`}>
                  <div className="card-img">
                    <img src={p.images?.[0] || 'https://via.placeholder.com/300x200'} alt={p.name} />
                  </div>
                </Link>
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{p.name}</div>
                      <div className="price">${Number(p.price).toFixed(2)}</div>
                    </div>
                    <button className="btn" onClick={() => add({ productId: p.id, slug: p.slug, name: p.name, price: p.price, image: p.images?.[0] })}>Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


