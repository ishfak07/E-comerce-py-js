import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../lib/cart'

type Product = {
  id: number
  name: string
  slug: string
  price: number
  images: string[]
  description?: string
}

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { add } = useCart()

  useEffect(() => {
    if (!slug) return
    axios.get(`/api/v1/products/${slug}`).then(r => setProduct(r.data))
  }, [slug])

  if (!product) return <div className="container" style={{ padding: 24 }}>Loading...</div>

  return (
    <div className="container" style={{ padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <img src={product.images?.[0] || 'https://via.placeholder.com/600x400'} alt={product.name} style={{ width: '100%', borderRadius: 12, boxShadow: 'var(--shadow)' }} />
        </div>
        <div>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <div className="price" style={{ fontSize: 22 }}>LKR {product.price}</div>
          <p style={{ color: 'var(--muted)' }}>{product.description || 'A beautiful product made for you.'}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => add({ productId: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images?.[0] })}>Add to Cart</button>
            <button className="btn" onClick={() => add({ productId: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images?.[0] })}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}


