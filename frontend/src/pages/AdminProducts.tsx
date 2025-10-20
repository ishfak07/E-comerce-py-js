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
  const [form, setForm] = useState<Prod>({ name: '', slug: '', price: 0, stock: 0, images: [] })
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
    const priceOk = Number.isFinite(form.price) && form.price >= 0
    const stockOk = Number.isInteger(form.stock) && form.stock >= 0
    return {
      nameOk: name.length > 1,
      slugOk: slug.length > 1,
      priceOk,
      stockOk,
    }
  }, [form])

  const isValid = validation.nameOk && validation.slugOk && validation.priceOk && validation.stockOk

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
        price: payload.price || 0,
        stock: payload.stock || 0,
        images: payload.images || [],
      }
      setItems((prev) => [optimistic, ...prev])

      const response = await api.post('/admin/products', payload)
      console.log('✅ Product created successfully! Response:', response.data)

      // Reset form
      setForm({ name: '', slug: '', price: 0, stock: 0, images: [] })
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
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 12 }}>
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            </svg>
            Product Management
          </h1>
          <p className="page-subtitle">Manage your product inventory</p>
        </div>
        <div className="page-header-stats">
          <div className="stat-card">
            <div className="stat-value">{items.length}</div>
            <div className="stat-label">Total Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{items.filter(p => p.is_published).length}</div>
            <div className="stat-label">Published</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{items.filter(p => !p.is_published).length}</div>
            <div className="stat-label">Draft</div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
          </svg>
          {error}
        </div>
      )}

      {/* Add Product Card */}
      <div className="card-modern">
        <div className="card-header">
          <h2 className="card-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 8 }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
            </svg>
            Add New Product
          </h2>
          <p className="card-subtitle">Fill in the details below to add a new product</p>
        </div>
        
        <div className="card-body">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Product Name *
              </label>
              <input
                className="form-input"
                placeholder="e.g., Premium Headphones"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {!validation.nameOk && <span className="form-error">Name must be at least 2 characters</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                </svg>
                URL Slug *
              </label>
              <input
                className="form-input"
                placeholder="e.g., premium-headphones"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
              {!validation.slugOk && <span className="form-error">Slug must be at least 2 characters</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
                </svg>
                Price (LKR) *
              </label>
              <input
                className="form-input"
                placeholder="e.g., 5000.00"
                type="number"
                inputMode="decimal"
                value={Number.isFinite(form.price) ? form.price : 0}
                onChange={(e) => setForm({ ...form, price: parseMoneyInput(e.target.value) })}
                min={0}
                step="0.01"
              />
              {!validation.priceOk && <span className="form-error">Price must be ≥ 0</span>}
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
                </svg>
                Stock Quantity *
              </label>
              <input
                className="form-input"
                placeholder="e.g., 100"
                type="number"
                inputMode="numeric"
                value={Number.isFinite(form.stock) ? form.stock : 0}
                onChange={(e) => setForm({ ...form, stock: parseIntInput(e.target.value) })}
                min={0}
                step={1}
              />
              {!validation.stockOk && <span className="form-error">Stock must be an integer ≥ 0</span>}
            </div>
          </div>
        
        <div className="form-group-full">
          <label className="form-label">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
            </svg>
            Product Images <span className="badge-info">{selectedFiles.length}/5 selected</span>
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
              Choose Images (1-5)
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
                Preview & Edit ({selectedFiles.length})
              </button>
            )}
          </div>
          {selectedFiles.length > 0 && (
            <div className="image-preview-grid">
              {previewUrls.map((url, index) => (
                <div key={index} className="image-preview-item">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                  />
                  <button
                    onClick={() => openCropModal(index)}
                    className="btn-crop"
                    type="button"
                    title="Crop image"
                  >
                    ✂️
                  </button>
                  <button
                    onClick={() => removePreviewImage(index)}
                    className="btn-remove"
                    type="button"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
          {selectedFiles.length === 0 && (
            <div className="empty-state">
              <svg width="48" height="48" viewBox="0 0 20 20" fill="currentColor" opacity="0.3">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
              <p>No images selected. Please select 1-5 images.</p>
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
              Adding Product...
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

      <div style={{ margin: '8px 0', color: '#8aa' }}>
        {loading ? 'Loading products…' : `Total: ${items.length}`}
      </div>

      {/* Products List */}
      <div className="card-modern" style={{ marginTop: 24 }}>
        <div className="card-header">
          <h2 className="card-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 8 }}>
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
            </svg>
            All Products
          </h2>
          <span className="badge-count">{items.length} total</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <svg className="spinner" width="48" height="48" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
            </svg>
            <p>Loading products...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="empty-state-large">
            <svg width="64" height="64" viewBox="0 0 20 20" fill="currentColor" opacity="0.2">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
            </svg>
            <h3>No Products Yet</h3>
            <p>Start by adding your first product above</p>
          </div>
        ) : (
          <div className="products-table">
            <div className="table-header">
              <div className="th-product">Product</div>
              <div className="th-slug">Slug</div>
              <div className="th-price">Price (LKR)</div>
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
                        {p.images.slice(0, 3).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${p.name} ${idx + 1}`}
                            className="product-thumbnail"
                            title={`Image ${idx + 1} of ${p.images?.length || 0}`}
                          />
                        ))}
                        {p.images.length > 3 && (
                          <span className="image-count">+{p.images.length - 3}</span>
                        )}
                      </div>
                    ) : (
                      <div className="no-image">
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" opacity="0.3">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                        </svg>
                      </div>
                    )}
                    <span className="product-name">{p.name}</span>
                  </div>
                </div>
                <td className="td-slug"><code>{p.slug}</code></td>
                <td className="td-price">
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
                </td>
                <td className="td-stock">
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
                </td>
                <td className="td-status">
                  <span className={`status-badge ${p.is_published ? 'published' : 'draft'}`}>
                    {p.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="td-actions">
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
                </td>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content-modern" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-modern">
              <h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 8 }}>
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
              <div className="alert-error" style={{ margin: '16px 0' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                </svg>
                {error}
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
                  style={{ width: '100%', padding: 8, borderRadius: 4, background: '#14151d', border: '1px solid #2a2b36', color: '#e9e9ef' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>Slug</label>
                <input
                  type="text"
                  value={editingProduct.slug}
                  onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                  style={{ width: '100%', padding: 8, borderRadius: 4, background: '#14151d', border: '1px solid #2a2b36', color: '#e9e9ef' }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>Price</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseMoneyInput(e.target.value) })}
                    min={0}
                    step="0.01"
                    style={{ width: '100%', padding: 8, borderRadius: 4, background: '#14151d', border: '1px solid #2a2b36', color: '#e9e9ef' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>Stock</label>
                  <input
                    type="number"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseIntInput(e.target.value) })}
                    min={0}
                    step={1}
                    style={{ width: '100%', padding: 8, borderRadius: 4, background: '#14151d', border: '1px solid #2a2b36', color: '#e9e9ef' }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>
                  Current Images ({editingProduct.images?.length || 0}/5)
                </label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                  {editingProduct.images && editingProduct.images.length > 0 ? (
                    editingProduct.images.map((imgUrl, index) => (
                      <div key={index} style={{ position: 'relative', width: 100, height: 100 }}>
                        <img
                          src={imgUrl}
                          alt={`Product ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 8,
                            border: '2px solid #6D74FF'
                          }}
                        />
                        <button
                          onClick={() => removeProductImage(index)}
                          style={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: '#ff5d5d',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 14,
                            lineHeight: '24px',
                            padding: 0
                          }}
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#b8bbd9' }}>No images yet</p>
                  )}
                </div>
                
                <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>
                  Add New Images (Total must be 1-5)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  style={{ marginBottom: 8 }}
                />
                {previewUrls.length > 0 && (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                    {previewUrls.map((url, index) => (
                      <div key={index} style={{ position: 'relative', width: 80, height: 80 }}>
                        <img
                          src={url}
                          alt={`New ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 8,
                            border: '2px solid #4ade80'
                          }}
                        />
                        <button
                          onClick={() => removePreviewImage(index)}
                          style={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: '#ff5d5d',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 14,
                            lineHeight: '24px',
                            padding: 0
                          }}
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
                <button 
                  onClick={closeEditModal} 
                  type="button"
                  style={{ padding: '10px 20px', background: '#2a2b36', color: '#e9e9ef' }}
                >
                  Cancel
                </button>
                <button 
                  onClick={saveEditedProduct} 
                  disabled={submitting}
                  type="button"
                  style={{ padding: '10px 20px', background: '#6D74FF', color: 'white' }}
                >
                  {submitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Image Preview Modal */}
      {showImagePreview && selectedFiles.length > 0 && (
        <div className="modal-overlay" onClick={() => setShowImagePreview(false)}>
          <div 
            className="preview-modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#14151d',
              borderRadius: 12,
              padding: 24,
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              border: '1px solid #2a2b36'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0 }}>
                Image Preview ({currentImageIndex + 1}/{selectedFiles.length})
              </h2>
              <button
                onClick={() => setShowImagePreview(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#e9e9ef',
                  fontSize: 24,
                  cursor: 'pointer',
                  padding: 0,
                  width: 32,
                  height: 32
                }}
              >
                ×
              </button>
            </div>

            {/* Main Image Display - UNIFORM SIZE */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0f',
              borderRadius: 8,
              padding: 16,
              width: '100%',
              height: 500, // Fixed height for uniform display
              position: 'relative',
              overflow: 'hidden'
            }}>
              {previewUrls[currentImageIndex] && (
                <img
                  src={previewUrls[currentImageIndex]}
                  alt={`Preview ${currentImageIndex + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // Maintains aspect ratio within fixed frame
                    borderRadius: 4
                  }}
                />
              )}
            </div>

            {/* Navigation & Actions */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={prevImage}
                disabled={selectedFiles.length <= 1}
                style={{
                  padding: '8px 16px',
                  background: selectedFiles.length > 1 ? '#2a2b36' : '#1a1b26',
                  color: selectedFiles.length > 1 ? '#e9e9ef' : '#666',
                  border: 'none',
                  borderRadius: 4,
                  cursor: selectedFiles.length > 1 ? 'pointer' : 'not-allowed'
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => openCropModal(currentImageIndex)}
                style={{
                  padding: '8px 16px',
                  background: '#6D74FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                ✂️ Crop Image
              </button>

              <button
                onClick={() => removePreviewImage(currentImageIndex)}
                style={{
                  padding: '8px 16px',
                  background: '#5b1a1a',
                  color: '#ffd1d1',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                🗑️ Remove
              </button>

              <button
                onClick={nextImage}
                disabled={selectedFiles.length <= 1}
                style={{
                  padding: '8px 16px',
                  background: selectedFiles.length > 1 ? '#2a2b36' : '#1a1b26',
                  color: selectedFiles.length > 1 ? '#e9e9ef' : '#666',
                  border: 'none',
                  borderRadius: 4,
                  cursor: selectedFiles.length > 1 ? 'pointer' : 'not-allowed'
                }}
              >
                Next →
              </button>
            </div>

            {/* Thumbnail Strip */}
            {selectedFiles.length > 1 && (
              <div style={{
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
                padding: '8px 0',
                borderTop: '1px solid #2a2b36',
                paddingTop: 16
              }}>
                {previewUrls.map((url, idx) => (
                  <div key={idx} style={{ position: 'relative', flexShrink: 0 }}>
                    <img
                      src={url}
                      alt={`Thumbnail ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 4,
                        cursor: 'pointer',
                        border: idx === currentImageIndex ? '3px solid #6D74FF' : '3px solid transparent',
                        opacity: idx === currentImageIndex ? 1 : 0.6,
                        transition: 'all 0.2s',
                        display: 'block'
                      }}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openCropModal(idx)
                      }}
                      style={{
                        position: 'absolute',
                        bottom: 4,
                        right: 4,
                        background: 'rgba(109, 116, 255, 0.9)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 3,
                        padding: '2px 6px',
                        fontSize: 11,
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                      title="Crop this image"
                    >
                      ✂️
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div style={{ textAlign: 'center', color: '#999', fontSize: 14 }}>
              Navigate with arrow buttons or click thumbnails • Remove unwanted images • Close when done
            </div>
          </div>
        </div>
      )}

      {/* Image Cropper Modal */}
      {showCropper && previewUrls[cropImageIndex] && (
        <div className="modal-overlay" onClick={() => setShowCropper(false)}>
          <div 
            className="cropper-modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#14151d',
              borderRadius: 12,
              padding: 24,
              maxWidth: '800px',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              border: '1px solid #2a2b36'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0 }}>
                ✂️ Crop Image ({cropImageIndex + 1}/{selectedFiles.length})
              </h2>
              <button
                onClick={() => setShowCropper(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#e9e9ef',
                  fontSize: 24,
                  cursor: 'pointer',
                  padding: 0,
                  width: 32,
                  height: 32
                }}
              >
                ×
              </button>
            </div>

            {/* Cropper Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: 400,
              background: '#0a0a0f',
              borderRadius: 8,
              overflow: 'hidden'
            }}>
              <Cropper
                image={previewUrls[cropImageIndex]}
                crop={crop}
                zoom={zoom}
                aspect={1} // Square crop (1:1 ratio)
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* Zoom Control */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ color: '#e9e9ef', minWidth: 60 }}>Zoom:</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ color: '#999', minWidth: 40 }}>{zoom.toFixed(1)}x</span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowCropper(false)}
                style={{
                  padding: '10px 20px',
                  background: '#2a2b36',
                  color: '#e9e9ef',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={applyCrop}
                style={{
                  padding: '10px 20px',
                  background: '#6D74FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                ✓ Apply Crop
              </button>
            </div>

            <div style={{ textAlign: 'center', color: '#999', fontSize: 14 }}>
              Drag to position • Scroll or use slider to zoom • Square crop (1:1 ratio)
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Page Layout */
        .products-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        /* Modern Card */
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .card-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 4px 0 0 0;
        }
        
        .card-body {
          padding: 24px;
        }
        
        .badge-info {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        /* Forms */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group-full {
          width: 100%;
        }
        
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .form-label svg {
          opacity: 0.6;
        }
        
        .form-input {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          color: #2d3748;
          transition: all 0.2s;
          background: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-error {
          font-size: 13px;
          color: #ef4444;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* Upload Zone */
        .upload-zone {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 12px;
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
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
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
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        
        .image-preview-item {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #e2e8f0;
          transition: all 0.2s;
        }
        
        .image-preview-item:hover {
          border-color: #667eea;
          transform: scale(1.05);
        }
        
        .image-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .btn-crop {
          position: absolute;
          bottom: 6px;
          left: 6px;
          background: rgba(102, 126, 234, 0.95);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .btn-crop:hover {
          background: rgba(102, 126, 234, 1);
          transform: scale(1.05);
        }
        
        .btn-remove {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
        }
        
        .btn-remove:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .empty-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
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
          transition: all 0.2s;
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
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Products Table */
        .products-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row:hover {
          background: #f7fafc;
        }
        
        .td-product, .td-slug, .td-price, .td-stock, .td-status, .td-actions {
          display: flex;
          align-items: center;
        }
        
        .product-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .product-images {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        
        .product-thumbnail {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          transition: all 0.2s;
        }
        
        .product-thumbnail:hover {
          border-color: #667eea;
          transform: scale(1.1);
        }
        
        .image-count {
          font-size: 12px;
          color: #a0aec0;
          font-weight: 600;
        }
        
        .no-image {
          width: 48px;
          height: 48px;
          background: #f7fafc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e2e8f0;
        }
        
        .product-name {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .td-slug code {
          background: #f7fafc;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 13px;
          color: #4a5568;
          font-family: 'Consolas', monospace;
        }
        
        .inline-input {
          padding: 8px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          width: 100px;
          transition: all 0.2s;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #667eea;
        }
        
        .status-badge {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .status-badge.published {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.draft {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
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
          transform: scale(1.05);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.05);
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
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
        
        .modal-content-modern {
          background: white;
          border-radius: 16px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header-modern {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header-modern h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .btn-close {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #4a5568;
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
          max-height: calc(90vh - 200px);
          overflow-y: auto;
        }
        
        .modal-content {
          background: #14151d;
          border: 1px solid #2a2b36;
          border-radius: 12px;
          padding: 24px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .modal-content::-webkit-scrollbar,
        .modal-body-modern::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track,
        .modal-body-modern::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .modal-content::-webkit-scrollbar-thumb,
        .modal-body-modern::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 4px;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .table-header, .table-row {
            grid-template-columns: 2fr 1fr 1fr 1fr 100px;
          }
          .td-slug, .th-slug {
            display: none;
          }
        }
        
        @media (max-width: 900px) {
          .table-header, .table-row {
            grid-template-columns: 2fr 1fr 80px;
          }
          .td-price, .th-price, .td-stock, .th-stock, .td-status, .th-status {
            display: none;
          }
          .page-header-stats {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
