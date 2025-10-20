import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

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
    <div>
      <h1>Products</h1>

      {error && (
        <div className="alert error" role="alert">
          {error}
        </div>
      )}

      <div className="row" aria-label="Create product">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {!validation.nameOk && <small style={{ color: '#ffbcbc' }}>Name must be at least 2 characters</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
          {!validation.slugOk && <small style={{ color: '#ffbcbc' }}>Slug must be at least 2 characters</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Price"
            type="number"
            inputMode="decimal"
            value={Number.isFinite(form.price) ? form.price : 0}
            onChange={(e) => setForm({ ...form, price: parseMoneyInput(e.target.value) })}
            min={0}
            step="0.01"
          />
          {!validation.priceOk && <small style={{ color: '#ffbcbc' }}>Price must be ≥ 0</small>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            placeholder="Stock"
            type="number"
            inputMode="numeric"
            value={Number.isFinite(form.stock) ? form.stock : 0}
            onChange={(e) => setForm({ ...form, stock: parseIntInput(e.target.value) })}
            min={0}
            step={1}
          />
          {!validation.stockOk && <small style={{ color: '#ffbcbc' }}>Stock must be an integer ≥ 0</small>}
        </div>
        
        <div style={{ width: '100%', marginTop: 12 }}>
          <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>
            Product Images (Min: 1, Max: 5) - {selectedFiles.length} selected
          </label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              style={{ marginBottom: 8 }}
            />
            {selectedFiles.length > 0 && (
              <button
                type="button"
                onClick={() => setShowImagePreview(true)}
                style={{
                  padding: '6px 12px',
                  background: '#6D74FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                👁️ Preview & Edit ({selectedFiles.length})
              </button>
            )}
          </div>
          {selectedFiles.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              {previewUrls.map((url, index) => (
                <div key={index} style={{ position: 'relative', width: 80, height: 80 }}>
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      border: '2px solid #6D74FF'
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
          {selectedFiles.length === 0 && (
            <small style={{ color: '#b8bbd9' }}>No images selected. Please select 1-5 images.</small>
          )}
        </div>
        
        <button 
          onClick={create} 
          disabled={!isValid || submitting || selectedFiles.length === 0} 
          type="button"
          style={{ marginTop: 12 }}
        >
          {submitting ? 'Adding…' : 'Add Product'}
        </button>
      </div>

      <div style={{ margin: '8px 0', color: '#8aa' }}>
        {loading ? 'Loading products…' : `Total: ${items.length}`}
      </div>

      <table className="tbl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th style={{ textAlign: 'right' }}>Price</th>
            <th style={{ textAlign: 'right' }}>Stock</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ padding: 12, textAlign: 'center', color: '#8aa' }}>
                {loading ? 'Loading…' : 'No products'}
              </td>
            </tr>
          ) : (
            items.map((p) => (
              <tr key={p.id || `${p.slug}-${p.name}`}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {p.images && p.images.length > 0 ? (
                      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        {p.images.slice(0, 3).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${p.name} ${idx + 1}`}
                            style={{ 
                              height: 40, 
                              width: 40,
                              objectFit: 'cover',
                              borderRadius: 4,
                              border: '1px solid #6D74FF'
                            }}
                            title={`Image ${idx + 1} of ${p.images?.length || 0}`}
                          />
                        ))}
                        {p.images.length > 3 && (
                          <span style={{ fontSize: 12, color: '#8aa' }}>+{p.images.length - 3}</span>
                        )}
                      </div>
                    ) : (
                      <span style={{ fontSize: 12, color: '#ff5d5d' }}>No images</span>
                    )}
                    <span style={{ verticalAlign: 'middle' }}>{p.name}</span>
                  </div>
                </td>
                <td>{p.slug}</td>
                <td style={{ textAlign: 'right' }}>
                  <input
                    type="number"
                    defaultValue={p.price}
                    onBlur={(e) => {
                      const next = parseMoneyInput(e.target.value)
                      if (p.id && next !== p.price) update(p.id, { price: next })
                    }}
                    min={0}
                    step="0.01"
                  />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <input
                    type="number"
                    defaultValue={p.stock}
                    onBlur={(e) => {
                      const next = parseIntInput(e.target.value)
                      if (p.id && next !== p.stock) update(p.id, { stock: next })
                    }}
                    min={0}
                    step={1}
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button 
                    onClick={() => openEditModal(p)} 
                    type="button"
                    style={{ marginRight: 8, background: '#6D74FF', color: 'white' }}
                  >
                    Edit
                  </button>
                  <button onClick={() => p.id && remove(p.id)} type="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, color: '#e9e9ef' }}>Edit Product</h2>
            
            {error && (
              <div className="alert error" role="alert">
                {error}
              </div>
            )}
            
            <div style={{ display: 'grid', gap: 12 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 4, color: '#e9e9ef' }}>Name</label>
                <input
                  type="text"
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

            {/* Main Image Display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0f',
              borderRadius: 8,
              padding: 16,
              minHeight: 400,
              position: 'relative'
            }}>
              {previewUrls[currentImageIndex] && (
                <img
                  src={previewUrls[currentImageIndex]}
                  alt={`Preview ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: 4
                  }}
                />
              )}
            </div>

            {/* Navigation & Actions */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
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
                🗑️ Remove This Image
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
                  <img
                    key={idx}
                    src={url}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 4,
                      cursor: 'pointer',
                      border: idx === currentImageIndex ? '2px solid #6D74FF' : '2px solid transparent',
                      opacity: idx === currentImageIndex ? 1 : 0.6,
                      transition: 'all 0.2s'
                    }}
                  />
                ))}
              </div>
            )}

            <div style={{ textAlign: 'center', color: '#999', fontSize: 14 }}>
              Navigate with arrow buttons or click thumbnails • Remove unwanted images • Close when done
            </div>
          </div>
        </div>
      )}

      <style>{`
        .row{display:flex;gap:8px;margin:8px 0;flex-wrap:wrap}
        .tbl{width:100%;border-collapse:collapse}
        .tbl th,.tbl td{border-bottom:1px solid #2a2b36;padding:8px}
        input[type="number"] { width: 120px }
        .alert.error{background:#3b1111;color:#ffd1d1;border:1px solid #5b1a1a;padding:10px;border-radius:8px;margin:8px 0}
        
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
          backdrop-filter: blur(4px);
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
        
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track {
          background: #14151d;
        }
        
        .modal-content::-webkit-scrollbar-thumb {
          background: #6D74FF;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}
