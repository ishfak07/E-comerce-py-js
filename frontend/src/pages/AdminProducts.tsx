import { useEffect, useMemo, useState, useCallback } from 'react'
import { api } from '../lib/api'
import Cropper from 'react-easy-crop'
import type { Area } from 'react-easy-crop'

type ProdId = string

type Prod = {
  id?: ProdId
  name: string
  slug: string
  price: number
  stock: number
  images?: string[]
  is_published?: boolean
  description?: string
}

type ProductsResponse = {
  items: Prod[]
}

type UploadResponse = {
  url: string
}

type ApiError = {
  response?: {
    status?: number
    data?: { detail?: string; message?: string }
  }
  message?: string
}

export default function AdminProducts() {
  const [items, setItems] = useState<Prod[]>([])
  const [form, setForm] = useState<Prod>({ name: '', slug: '', price: 0, stock: 0, images: [], description: '' })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [editingProduct, setEditingProduct] = useState<Prod | null>(null)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const [showImagePreview, setShowImagePreview] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  
  // Image cropper state
  const [showCropper, setShowCropper] = useState<boolean>(false)
  const [cropImageIndex, setCropImageIndex] = useState<number>(0)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  // Validation
  const validation = useMemo(() => {
    const name = form.name.trim()
    const slug = form.slug.trim()
    const description = form.description?.trim() || ''
    const priceOk = Number.isFinite(form.price) && form.price >= 0
    const stockOk = Number.isInteger(form.stock) && form.stock >= 0
    return {
      nameOk: name.length > 1,
      slugOk: slug.length > 1,
      descriptionOk: description.length >= 10,
      priceOk,
      stockOk,
    }
  }, [form])

  const isValid = validation.nameOk && validation.slugOk && validation.descriptionOk && validation.priceOk && validation.stockOk

  // Helpers
  function parseMoneyInput(v: string): number {
    const n = parseFloat(v)
    return Number.isFinite(n) && n >= 0 ? n : 0
  }
  function parseIntInput(v: string): number {
    const n = parseInt(v, 10)
    return Number.isFinite(n) && n >= 0 ? n : 0
  }

  // API
  async function load() {
    setLoading(true)
    setError(null)
    try {
      const r = await api.get<ProductsResponse>('/admin/products')
      setItems(Array.isArray(r.data?.items) ? r.data.items : [])
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  // Upload multiple images
  async function uploadImages(files: File[]): Promise<string[]> {
    if (files.length === 0) {
      return []
    }
    
    console.log(`Uploading ${files.length} files...`)
    const uploadedUrls: string[] = []
    
    for (const file of files) {
      try {
        console.log('Uploading file:', file.name, file.type, file.size, 'bytes')
        const fd = new FormData()
        fd.append('file', file, file.name)
        
        const up = await api.post<UploadResponse>('/admin/products/upload', fd)
        console.log('Upload successful, URL:', up.data.url)
        uploadedUrls.push(up.data.url)
      } catch (e) {
        const err = e as ApiError
        console.error('Upload error for file:', file.name, err)
        const status = err?.response?.status
        if (status === 401) {
          console.error('Upload failed: 401 Unauthorized')
          try { window.location.href = '/login' } catch {}
          return []
        }
        const errorMsg = err?.response?.data?.detail || err?.response?.data?.message || 'Upload failed'
        console.error('Upload failed with message:', errorMsg)
        throw new Error(`Failed to upload ${file.name}: ${errorMsg}`)
      }
    }
    
    return uploadedUrls
  }

  // Handle file selection for new product
  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    
    // Limit to 5 images
    if (files.length > 5) {
      setError('Maximum 5 images allowed per product')
      return
    }
    
    setSelectedFiles(files)
    
    // Create preview URLs
    const urls = files.map(f => URL.createObjectURL(f))
    setPreviewUrls(urls)
    
    // Automatically open preview modal if files selected
    if (files.length > 0) {
      setShowImagePreview(true)
      setCurrentImageIndex(0)
    }
  }

  // Remove a preview image
  function removePreviewImage(index: number) {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
    setPreviewUrls(prev => {
      // Revoke the URL to free memory
      URL.revokeObjectURL(prev[index])
      return prev.filter((_, i) => i !== index)
    })
    
    // Close preview if no images left
    if (selectedFiles.length <= 1) {
      setShowImagePreview(false)
    } else if (currentImageIndex >= selectedFiles.length - 1) {
      setCurrentImageIndex(Math.max(0, selectedFiles.length - 2))
    }
  }
  
  // Image preview navigation
  function nextImage() {
    setCurrentImageIndex((prev) => (prev + 1) % previewUrls.length)
  }
  
  function prevImage() {
    setCurrentImageIndex((prev) => (prev - 1 + previewUrls.length) % previewUrls.length)
  }

  // Open crop modal for specific image
  function openCropModal(index: number) {
    setCropImageIndex(index)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setCroppedAreaPixels(null)
    setShowCropper(true)
  }

  // Callback when crop completes
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  // Create cropped image
  async function createCroppedImage(imageSrc: string, pixelCrop: Area): Promise<Blob> {
    const image = new Image()
    image.src = imageSrc
    
    await new Promise((resolve) => {
      image.onload = resolve
    })

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      throw new Error('Failed to get canvas context')
    }

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Canvas is empty'))
        }
      }, 'image/jpeg', 0.95)
    })
  }

  // Apply crop to current image
  async function applyCrop() {
    if (!croppedAreaPixels) return
    
    try {
      const currentUrl = previewUrls[cropImageIndex]
      const croppedBlob = await createCroppedImage(currentUrl, croppedAreaPixels)
      
      // Get original file name
      const originalFile = selectedFiles[cropImageIndex]
      const fileName = originalFile.name.replace(/\.[^/.]+$/, '_cropped.jpg')
      
      // Create new file from cropped blob
      const croppedFile = new File([croppedBlob], fileName, { type: 'image/jpeg' })
      
      // Replace the file in selectedFiles
      setSelectedFiles(prev => {
        const newFiles = [...prev]
        newFiles[cropImageIndex] = croppedFile
        return newFiles
      })
      
      // Update preview URL
      setPreviewUrls(prev => {
        const newUrls = [...prev]
        URL.revokeObjectURL(newUrls[cropImageIndex]) // Clean up old URL
        newUrls[cropImageIndex] = URL.createObjectURL(croppedFile)
        return newUrls
      })
      
      // Close cropper
      setShowCropper(false)
    } catch (error) {
      console.error('Error cropping image:', error)
      setError('Failed to crop image')
    }
  }

  async function create() {
    setError(null)
    
    if (!isValid) {
      setError('Please fill all fields correctly')
      return
    }
    
    // Validate images: must have at least 1, max 5
    if (selectedFiles.length === 0 && (!form.images || form.images.length === 0)) {
      setError('Please add at least 1 image (maximum 5 images)')
      return
    }
    
    setSubmitting(true)
    try {
      console.log('Creating product, uploading images first...')
      console.log('Selected files:', selectedFiles.length, 'files')
      
      // Upload new images
      const uploadedUrls = await uploadImages(selectedFiles)
      console.log('✅ Image upload complete! URLs:', uploadedUrls)
      
      // Combine existing images with newly uploaded ones
      const allImages = [...(form.images || []), ...uploadedUrls]
      
      // Ensure we don't exceed 5 images
      const finalImages = allImages.slice(0, 5)
      
      console.log('📸 Final images array:', finalImages)
      
      if (finalImages.length === 0) {
        setError('At least 1 image is required')
        setSubmitting(false)
        return
      }
      
      const payload: Partial<Prod> = {
        name: form.name.trim(),
        slug: form.slug.trim(),
        description: form.description?.trim(),
        price: form.price,
        stock: form.stock,
        images: finalImages,
        is_published: true,
      }
      
      console.log('📦 Creating product with payload:', JSON.stringify(payload, null, 2))

      // Optimistic update
      const optimistic: Prod = {
        id: `tmp-${Date.now()}`,
        ...payload,
        name: payload.name || '',
        slug: payload.slug || '',
        description: payload.description || '',
        price: payload.price || 0,
        stock: payload.stock || 0,
        images: payload.images || [],
      }
      setItems((prev) => [optimistic, ...prev])

      const response = await api.post('/admin/products', payload)
      console.log('✅ Product created successfully! Response:', response.data)

      // Reset form
      setForm({ name: '', slug: '', price: 0, stock: 0, images: [], description: '' })
      setSelectedFiles([])
      setPreviewUrls(prev => {
        prev.forEach(url => URL.revokeObjectURL(url))
        return []
      })
      setShowImagePreview(false)

      // Re-sync with server
      await load()
      // notify other tabs (shop page) that products changed so users see new product immediately
      try {
        localStorage.setItem('products:update', String(Date.now()))
      } catch (e) {
        // ignore
      }
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      // prefer backend detail if present, otherwise fallback to message
      const backendMsg = err?.response?.data?.detail || err?.response?.data?.message
      const userMsg = backendMsg || err?.message || 'Failed to create product'
      console.error('create product error', err)
      setError(userMsg)
    } finally {
      setSubmitting(false)
    }
  }

  async function update(id: ProdId, fields: Partial<Prod>) {
    setError(null)
    try {
      // Optimistic local update
      setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...fields } : p)))
      await api.put(`/admin/products/${id}`, fields)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update')
      // Revert by reloading authoritative state
      await load()
    }
  }

  async function remove(id: ProdId) {
    setError(null)
    try {
      // Optimistic remove
      const snapshot = items
      setItems((prev) => prev.filter((p) => p.id !== id))
      await api.delete(`/admin/products/${id}`)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to delete')
      await load()
    }
  }

  // Open edit modal
  function openEditModal(product: Prod) {
    setEditingProduct({ ...product })
    setShowEditModal(true)
    setError(null)
  }

  // Close edit modal
  function closeEditModal() {
    setEditingProduct(null)
    setShowEditModal(false)
    setSelectedFiles([])
    setPreviewUrls(prev => {
      prev.forEach(url => URL.revokeObjectURL(url))
      return []
    })
    setError(null)
  }

  // Remove image from editing product
  function removeProductImage(index: number) {
    if (!editingProduct) return
    setEditingProduct({
      ...editingProduct,
      images: editingProduct.images?.filter((_, i) => i !== index) || []
    })
  }

  // Save edited product
  async function saveEditedProduct() {
    if (!editingProduct || !editingProduct.id) return
    
    setError(null)
    setSubmitting(true)
    
    try {
      // Upload any new images
      const newImageUrls = await uploadImages(selectedFiles)
      
      // Combine existing images with new ones
      const allImages = [...(editingProduct.images || []), ...newImageUrls]
      
      // Ensure we have 1-5 images
      if (allImages.length === 0) {
        setError('At least 1 image is required')
        setSubmitting(false)
        return
      }
      
      if (allImages.length > 5) {
        setError('Maximum 5 images allowed')
        setSubmitting(false)
        return
      }
      
      const updatePayload: Partial<Prod> = {
        name: editingProduct.name.trim(),
        slug: editingProduct.slug.trim(),
        description: editingProduct.description?.trim(),
        price: editingProduct.price,
        stock: editingProduct.stock,
        images: allImages
      }
      
      await api.put(`/admin/products/${editingProduct.id}`, updatePayload)
      
      // Update local state
      setItems(prev => prev.map(p => 
        p.id === editingProduct.id ? { ...p, ...updatePayload } : p
      ))
      
      // Close modal and reload
      closeEditModal()
      await load()
      
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try { window.location.href = '/login' } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update product')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            <div className="title-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
            </div>
            Product Management
          </h1>
          <p className="page-subtitle">Manage your product catalog and inventory</p>
        </div>
        <div className="page-header-stats">
          <div className="stat-card total">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">{items.length}</div>
              <div className="stat-label">Total Products</div>
            </div>
          </div>
          <div className="stat-card published">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">{items.filter(p => p.is_published).length}</div>
              <div className="stat-label">Published</div>
            </div>
          </div>
          <div className="stat-card draft">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-value">{items.filter(p => !p.is_published).length}</div>
              <div className="stat-label">Draft</div>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Add Product Card */}
      <div className="card-modern">
        <div className="card-header">
          <div>
            <h2 className="card-title">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
              </svg>
              Add New Product
            </h2>
            <p className="card-subtitle">Fill in the product details and upload images</p>
          </div>
        </div>
        
        <div className="card-body">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Product Name
                <span className="required">*</span>
              </label>
              <input
                className={`form-input ${!validation.nameOk && form.name ? 'error' : ''}`}
                placeholder="e.g., Premium Wireless Headphones"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {!validation.nameOk && form.name && <span className="form-error">Name must be at least 2 characters</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                </svg>
                URL Slug
                <span className="required">*</span>
              </label>
              <input
                className={`form-input ${!validation.slugOk && form.slug ? 'error' : ''}`}
                placeholder="e.g., premium-wireless-headphones"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
              {!validation.slugOk && form.slug && <span className="form-error">Slug must be at least 2 characters</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
                </svg>
                Price (LKR)
                <span className="required">*</span>
              </label>
              <input
                className={`form-input ${!validation.priceOk && form.price > 0 ? 'error' : ''}`}
                placeholder="e.g., 15000.00"
                type="number"
                inputMode="decimal"
                value={Number.isFinite(form.price) ? form.price : 0}
                onChange={(e) => setForm({ ...form, price: parseMoneyInput(e.target.value) })}
                min={0}
                step="0.01"
              />
              {!validation.priceOk && form.price > 0 && <span className="form-error">Price must be ≥ 0</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
                Stock Quantity
                <span className="required">*</span>
              </label>
              <input
                className={`form-input ${!validation.stockOk && form.stock > 0 ? 'error' : ''}`}
                placeholder="e.g., 50"
                type="number"
                inputMode="numeric"
                value={Number.isFinite(form.stock) ? form.stock : 0}
                onChange={(e) => setForm({ ...form, stock: parseIntInput(e.target.value) })}
                min={0}
                step={1}
              />
              {!validation.stockOk && form.stock > 0 && <span className="form-error">Stock must be an integer ≥ 0</span>}
            </div>
          </div>
        
          <div className="form-group-full">
            <label className="form-label">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"/>
              </svg>
              Product Description
              <span className="required">*</span>
            </label>
            <textarea
              className={`form-input ${!validation.descriptionOk && form.description ? 'error' : ''}`}
              placeholder="Describe your product in detail (minimum 10 characters)..."
              value={form.description || ''}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
            />
            {!validation.descriptionOk && form.description && <span className="form-error">Description must be at least 10 characters</span>}
          </div>
        
          <div className="form-group-full">
            <label className="form-label">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
              Product Images
              <span className="badge-count">{selectedFiles.length}/5</span>
              <span className="required">*</span>
            </label>
            <div className="upload-zone">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                id="file-upload"
                className="file-input"
              />
              <label htmlFor="file-upload" className="upload-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
                </svg>
                Choose Images
              </label>
              {selectedFiles.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowImagePreview(true)}
                  className="preview-button"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                  Preview & Edit
                </button>
              )}
            </div>
            {selectedFiles.length > 0 && (
              <div className="image-preview-grid">
                {previewUrls.map((url, index) => (
                  <div key={index} className="image-preview-item">
                    <img src={url} alt={`Preview ${index + 1}`} />
                    <div className="image-overlay">
                      <button
                        onClick={() => openCropModal(index)}
                        className="btn-overlay btn-crop-overlay"
                        type="button"
                        title="Crop image"
                      >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => removePreviewImage(index)}
                        className="btn-overlay btn-remove-overlay"
                        type="button"
                      >
                        ×
                      </button>
                    </div>
                    <div className="image-badge">{index + 1}</div>
                  </div>
                ))}
              </div>
            )}
            {selectedFiles.length === 0 && (
              <div className="empty-state-upload">
                <svg width="48" height="48" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
                <p>No images selected</p>
                <span>Upload 1-5 product images</span>
              </div>
            )}
          </div>
        
          <button 
            onClick={create} 
            disabled={!isValid || submitting || selectedFiles.length === 0} 
            type="button"
            className="btn-primary"
          >
            {submitting ? (
              <>
                <svg className="spinner" width="18" height="18" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
                </svg>
                Creating Product...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
                </svg>
                Add Product
              </>
            )}
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="card-modern" style={{ marginTop: 24 }}>
        <div className="card-header">
          <div>
            <h2 className="card-title">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
              </svg>
              All Products
            </h2>
            <p className="card-subtitle">Manage existing products</p>
          </div>
          <span className="badge-count-lg">{items.length} total</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner-modern">
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
            </div>
            <p>Loading products...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="empty-state-large">
            <svg width="80" height="80" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
            </svg>
            <h3>No Products Yet</h3>
            <p>Start by adding your first product using the form above</p>
          </div>
        ) : (
          <div className="products-table-wrapper">
            <div className="products-table">
              <div className="table-header">
                <div className="th-product">Product</div>
                <div className="th-slug">Slug</div>
                <div className="th-price">Price</div>
                <div className="th-stock">Stock</div>
                <div className="th-status">Status</div>
                <div className="th-actions">Actions</div>
              </div>
              
              {items.map((p) => (
                <div key={p.id || `${p.slug}-${p.name}`} className="table-row">
                  <div className="td-product">
                    <div className="product-cell">
                      {p.images && p.images.length > 0 ? (
                        <div className="product-images">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="product-thumbnail-main"
                          />
                          {p.images.length > 1 && (
                            <span className="image-count-badge">+{p.images.length - 1}</span>
                          )}
                        </div>
                      ) : (
                        <div className="no-image">
                          <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                          </svg>
                        </div>
                      )}
                      <div className="product-info">
                        <span className="product-name">{p.name}</span>
                        {p.description && <span className="product-desc">{p.description.substring(0, 50)}...</span>}
                      </div>
                    </div>
                  </div>
                  <div className="td-slug"><code>{p.slug}</code></div>
                  <div className="td-price">
                    <input
                      type="number"
                      className="inline-input"
                      defaultValue={p.price}
                      onBlur={(e) => {
                        const next = parseMoneyInput(e.target.value)
                        if (p.id && next !== p.price) update(p.id, { price: next })
                      }}
                      min={0}
                      step="0.01"
                    />
                  </div>
                  <div className="td-stock">
                    <input
                      type="number"
                      className="inline-input"
                      defaultValue={p.stock}
                      onBlur={(e) => {
                        const next = parseIntInput(e.target.value)
                        if (p.id && next !== p.stock) update(p.id, { stock: next })
                      }}
                      min={0}
                      step={1}
                    />
                  </div>
                  <div className="td-status">
                    <span className={`status-badge ${p.is_published ? 'published' : 'draft'}`}>
                      {p.is_published ? (
                        <>
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                          </svg>
                          Published
                        </>
                      ) : (
                        <>
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"/>
                          </svg>
                          Draft
                        </>
                      )}
                    </span>
                  </div>
                  <div className="td-actions">
                    <div className="action-buttons">
                      <button 
                        onClick={() => openEditModal(p)} 
                        type="button"
                        className="btn-action btn-edit"
                        title="Edit product"
                      >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => p.id && update(p.id, { is_published: !p.is_published })}
                        type="button"
                        className={`btn-action ${p.is_published ? 'btn-unpublish' : 'btn-publish'}`}
                        title={p.is_published ? 'Unpublish' : 'Publish'}
                      >
                        {p.is_published ? (
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/>
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                          </svg>
                        )}
                      </button>
                      <button 
                        onClick={() => p.id && remove(p.id)} 
                        type="button"
                        className="btn-action btn-delete"
                        title="Delete product"
                      >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content-modern" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-modern">
              <h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                Edit Product
              </h2>
              <button onClick={closeEditModal} className="btn-close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>
            
            {error && (
              <div className="alert-error" style={{ margin: '0 24px 16px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                </svg>
                <span>{error}</span>
              </div>
            )}
            
            <div className="modal-body-modern">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editingProduct.slug}
                    onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Price (LKR)</label>
                  <input
                    type="number"
                    className="form-input"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseMoneyInput(e.target.value) })}
                    min={0}
                    step="0.01"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-input"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseIntInput(e.target.value) })}
                    min={0}
                    step={1}
                  />
                </div>
              </div>
              
              <div className="form-group-full">
                <label className="form-label">Description</label>
                <textarea
                  className="form-input"
                  value={editingProduct.description || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  rows={4}
                />
              </div>
              
              <div className="form-group-full">
                <label className="form-label">
                  Current Images ({editingProduct.images?.length || 0}/5)
                </label>
                {editingProduct.images && editingProduct.images.length > 0 ? (
                  <div className="image-preview-grid">
                    {editingProduct.images.map((imgUrl, index) => (
                      <div key={index} className="image-preview-item">
                        <img src={imgUrl} alt={`Product ${index + 1}`} />
                        <div className="image-overlay">
                          <button
                            onClick={() => removeProductImage(index)}
                            className="btn-overlay btn-remove-overlay"
                            type="button"
                          >
                            ×
                          </button>
                        </div>
                        <div className="image-badge">{index + 1}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state-upload">
                    <svg width="48" height="48" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                    </svg>
                    <p>No images yet</p>
                  </div>
                )}
                
                <label className="form-label" style={{ marginTop: 16 }}>
                  Add New Images
                </label>
                <div className="upload-zone">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    id="edit-file-upload"
                    className="file-input"
                  />
                  <label htmlFor="edit-file-upload" className="upload-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
                    </svg>
                    Choose Images
                  </label>
                </div>
                {previewUrls.length > 0 && (
                  <div className="image-preview-grid" style={{ marginTop: 12 }}>
                    {previewUrls.map((url, index) => (
                      <div key={index} className="image-preview-item">
                        <img src={url} alt={`New ${index + 1}`} />
                        <div className="image-overlay">
                          <button
                            onClick={() => removePreviewImage(index)}
                            className="btn-overlay btn-remove-overlay"
                            type="button"
                          >
                            ×
                          </button>
                        </div>
                        <div className="image-badge new">New</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <button 
                  onClick={closeEditModal} 
                  type="button"
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button 
                  onClick={saveEditedProduct} 
                  disabled={submitting}
                  type="button"
                  className="btn-primary"
                >
                  {submitting ? (
                    <>
                      <svg className="spinner" width="18" height="18" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {showImagePreview && selectedFiles.length > 0 && (
        <div className="modal-overlay" onClick={() => setShowImagePreview(false)}>
          <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="preview-modal-header">
              <h2>
                Image Preview ({currentImageIndex + 1}/{selectedFiles.length})
              </h2>
              <button onClick={() => setShowImagePreview(false)} className="btn-close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>

            <div className="preview-image-container">
              {previewUrls[currentImageIndex] && (
                <img
                  src={previewUrls[currentImageIndex]}
                  alt={`Preview ${currentImageIndex + 1}`}
                />
              )}
            </div>

            <div className="preview-controls">
              <button
                onClick={prevImage}
                disabled={selectedFiles.length <= 1}
                className="btn-nav"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
                </svg>
                Previous
              </button>

              <button onClick={() => openCropModal(currentImageIndex)} className="btn-crop-main">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                </svg>
                Crop Image
              </button>

              <button onClick={() => removePreviewImage(currentImageIndex)} className="btn-remove-main">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                </svg>
                Remove
              </button>

              <button
                onClick={nextImage}
                disabled={selectedFiles.length <= 1}
                className="btn-nav"
              >
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </button>
            </div>

            {selectedFiles.length > 1 && (
              <div className="preview-thumbnails">
                {previewUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className={`preview-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={url} alt={`Thumbnail ${idx + 1}`} />
                    <div className="thumbnail-number">{idx + 1}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Image Cropper Modal */}
      {showCropper && previewUrls[cropImageIndex] && (
        <div className="modal-overlay" onClick={() => setShowCropper(false)}>
          <div className="cropper-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-modern">
              <h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                </svg>
                Crop Image ({cropImageIndex + 1}/{selectedFiles.length})
              </h2>
              <button onClick={() => setShowCropper(false)} className="btn-close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>

            <div className="cropper-container">
              <Cropper
                image={previewUrls[cropImageIndex]}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="cropper-controls">
              <label className="zoom-label">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"/>
                  <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
                Zoom: {zoom.toFixed(1)}x
              </label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="zoom-slider"
              />
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowCropper(false)} className="btn-secondary">
                Cancel
              </button>
              <button onClick={applyCrop} className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Apply Crop
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .products-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card.total { border-left: 4px solid #667eea; }
        .stat-card.published { border-left: 4px solid #10b981; }
        .stat-card.draft { border-left: 4px solid #f59e0b; }
        
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card.published .stat-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card.draft .stat-icon {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-info {
          flex: 1;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          margin-bottom: 24px;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .badge-count-lg {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
        }
        
        .card-body {
          padding: 24px;
        }
        
        /* Forms */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group-full {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .required {
          color: #ef4444;
          font-weight: 700;
        }
        
        .form-input {
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          color: #0f172a;
          transition: all 0.2s;
          background: white;
          font-family: inherit;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-input.error {
          border-color: #ef4444;
        }
        
        .form-input.error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        
        .form-error {
          font-size: 13px;
          color: #ef4444;
          font-weight: 500;
        }
        
        textarea.form-input {
          resize: vertical;
          min-height: 100px;
        }
        
        /* Upload Zone */
        .upload-zone {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        
        .file-input {
          display: none;
        }
        
        .upload-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          border: none;
        }
        
        .upload-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .preview-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preview-button:hover {
          background: #667eea;
          color: white;
        }
        
        /* Image Preview Grid */
        .image-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        
        .image-preview-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
          background: #f8fafc;
          min-height: 140px;
        }
        
        .image-preview-item:hover {
          border-color: #667eea;
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .image-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.65);
          opacity: 0;
          transition: opacity 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px;
          pointer-events: none;
        }
        
        .image-preview-item:hover .image-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        
        .btn-overlay {
          width: 42px;
          height: 42px;
          min-width: 42px;
          min-height: 42px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: 600;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        
        .btn-overlay:active {
          transform: scale(0.92);
        }
        
        .btn-crop-overlay {
          background: #667eea;
          color: white;
        }
        
        .btn-crop-overlay:hover {
          background: #5568d3;
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.5);
        }
        
        .btn-remove-overlay {
          background: #ef4444;
          color: white;
          font-size: 26px;
          line-height: 1;
          font-weight: 400;
        }
        
        .btn-remove-overlay:hover {
          background: #dc2626;
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5);
        }
        
        .image-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
        }
        
        .image-badge.new {
          background: #10b981;
        }
        
        /* Empty State */
        .empty-state-upload {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 2px dashed #cbd5e1;
          margin-top: 12px;
        }
        
        .empty-state-upload svg {
          opacity: 0.3;
          margin-bottom: 12px;
        }
        
        .empty-state-upload p {
          margin: 0 0 4px 0;
          color: #64748b;
          font-weight: 600;
          font-size: 15px;
        }
        
        .empty-state-upload span {
          color: #94a3b8;
          font-size: 13px;
        }
        
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
          color: #94a3b8;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          margin: 0;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        
        /* Buttons */
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          margin-top: 20px;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background: white;
          color: #64748b;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #475569;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        /* Products Table */
        .products-table-wrapper {
          overflow-x: auto;
        }
        
        .products-table {
          display: flex;
          flex-direction: column;
          min-width: 1000px;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2.5fr 1.5fr 1fr 1fr 1.2fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f8fafc;
          font-weight: 700;
          font-size: 13px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2.5fr 1.5fr 1fr 1fr 1.2fr 140px;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row:hover {
          background: #f8fafc;
        }
        
        .td-product {
          display: flex;
          align-items: center;
        }
        
        .product-cell {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .product-images {
          position: relative;
          flex-shrink: 0;
        }
        
        .product-thumbnail-main {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
        }
        
        .product-thumbnail-main:hover {
          border-color: #667eea;
          transform: scale(1.1);
        }
        
        .image-count-badge {
          position: absolute;
          bottom: -6px;
          right: -6px;
          background: #667eea;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          border: 2px solid white;
        }
        
        .no-image {
          width: 64px;
          height: 64px;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e5e7eb;
          flex-shrink: 0;
        }
        
        .no-image svg {
          opacity: 0.3;
        }
        
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .product-name {
          font-weight: 600;
          color: #0f172a;
          font-size: 15px;
        }
        
        .product-desc {
          font-size: 13px;
          color: #64748b;
        }
        
        .td-slug code {
          background: #f8fafc;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: #475569;
          font-family: 'Monaco', 'Menlo', monospace;
          border: 1px solid #e5e7eb;
        }
        
        .inline-input {
          padding: 8px 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
          max-width: 120px;
          transition: all 0.2s;
          font-family: inherit;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #667eea;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .status-badge.published {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.draft {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-edit {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .btn-edit:hover {
          background: #667eea;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-publish {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .btn-publish:hover {
          background: #10b981;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-unpublish {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .btn-unpublish:hover {
          background: #f59e0b;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
        }
        
        /* Modals */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content-modern,
        .preview-modal-content,
        .cropper-modal-content {
          background: white;
          border-radius: 16px;
          max-width: 700px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s;
        }
        
        .preview-modal-content {
          max-width: 1000px;
        }
        
        .cropper-modal-content {
          max-width: 800px;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .modal-header-modern,
        .preview-modal-header {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header-modern h2,
        .preview-modal-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-close {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-close:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .modal-body-modern {
          padding: 24px;
          max-height: calc(90vh - 180px);
          overflow-y: auto;
        }
        
        .modal-body-modern::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-body-modern::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .modal-body-modern::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 4px;
        }
        
        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        /* Preview Modal */
        .preview-image-container {
          background: #0f172a;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative;
          overflow: hidden;
        }
        
        .preview-image-container img {
          max-width: 100%;
          max-height: 500px;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
        }
        
        .preview-modal-content .image-overlay {
          display: none !important;
        }
        
        .preview-controls {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          color: #64748b;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-nav:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #475569;
        }
        
        .btn-nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .btn-crop-main {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-crop-main:hover {
          background: #5568d3;
        }
        
        .btn-remove-main {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-remove-main:hover {
          background: #dc2626;
        }
        
        .preview-thumbnails {
          padding: 20px 24px;
          display: flex;
          gap: 12px;
          overflow-x: auto;
        }
        
        .preview-thumbnail {
          position: relative;
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          border: 3px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preview-thumbnail:hover {
          border-color: #cbd5e1;
        }
        
        .preview-thumbnail.active {
          border-color: #667eea;
        }
        
        .preview-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .thumbnail-number {
          position: absolute;
          top: 4px;
          left: 4px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
        }
        
        /* Cropper Modal */
        .cropper-container {
          position: relative;
          width: 100%;
          height: 450px;
          background: #0f172a;
        }
        
        .cropper-controls {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .zoom-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 12px;
        }
        
        .zoom-slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          outline: none;
          cursor: pointer;
        }
        
        .zoom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .zoom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header-stats {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .products-page {
            padding: 16px;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .page-header-stats {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            padding: 16px;
          }
          
          .stat-value {
            font-size: 24px;
          }
          
          .card-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .badge-count-lg {
            align-self: flex-start;
          }
          
          .products-table {
            min-width: 800px;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 100px;
          }
          
          .th-slug, .td-slug,
          .th-price, .td-price,
          .th-stock, .td-stock {
            display: none;
          }
          
          .preview-image-container {
            min-height: 300px;
            padding: 20px;
          }
          
          .preview-image-container img {
            max-height: 300px;
          }
          
          .preview-controls {
            flex-direction: column;
          }
          
          .cropper-container {
            height: 300px;
          }
          
          .image-preview-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 12px;
          }
          
          .image-preview-item {
            min-height: 110px;
          }
          
          .btn-overlay {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          
          .btn-overlay svg {
            width: 14px;
            height: 14px;
          }
          
          .image-overlay {
            gap: 6px;
            padding: 6px;
          }
        }
      `}</style>
    </div>
  )
}
