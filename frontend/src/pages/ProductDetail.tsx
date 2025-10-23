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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { add } = useCart()

  useEffect(() => {
    if (!slug) return
    axios.get(`/api/v1/products/${slug}`).then(r => setProduct(r.data))
  }, [slug])

  if (!product) return <div className="container" style={{ padding: 24 }}>Loading...</div>

  const images = product.images && product.images.length > 0 
    ? product.images 
    : ['https://via.placeholder.com/600x400']

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="container" style={{ padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Image Gallery */}
        <div>
          {/* Main Image Display */}
          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <img 
              src={images[currentImageIndex]} 
              alt={`${product.name} - Image ${currentImageIndex + 1}`} 
              style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} 
            />
            
            {/* Navigation Arrows - Only show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPreviousImage}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                
                <button
                  onClick={goToNextImage}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* Image Counter */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500
                  }}
                >
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Gallery - Only show if multiple images */}
          {images.length > 1 && (
            <div style={{ 
              display: 'flex', 
              gap: 8, 
              marginTop: 12, 
              overflowX: 'auto',
              paddingBottom: 8
            }}>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  style={{
                    border: currentImageIndex === index ? '2px solid var(--brand)' : '2px solid transparent',
                    borderRadius: 8,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    padding: 0,
                    background: 'transparent',
                    flexShrink: 0,
                    opacity: currentImageIndex === index ? 1 : 0.6,
                    transition: 'opacity 0.2s, border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = currentImageIndex === index ? '1' : '0.6'}
                  aria-label={`View image ${index + 1}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    style={{ 
                      width: 80, 
                      height: 80, 
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <div className="price" style={{ fontSize: 22 }}>LKR {product.price}</div>
          <p style={{ color: 'var(--muted)' }}>{product.description || 'A beautiful product made for you.'}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => add({ productId: product.id, slug: product.slug, name: product.name, price: product.price, image: images[0] })}>Add to Cart</button>
            <button className="btn" onClick={() => add({ productId: product.id, slug: product.slug, name: product.name, price: product.price, image: images[0] })}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}


