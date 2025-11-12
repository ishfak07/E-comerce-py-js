import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SiteSettings = {
  siteName: string
  supportEmail: string
  supportPhone: string
  currency: string
  brandColor: string
  bankTransferNote: string
  heroImage1: string
  heroImage2: string
}

const defaultSettings: SiteSettings = {
  siteName: 'Own Setup 💼',
  supportEmail: '',
  supportPhone: '',
  currency: 'LKR',
  brandColor: '#6D74FF',
  bankTransferNote: '',
  heroImage1: '/images/hero-1.jpg',
  heroImage2: '/images/hero-2.jpg',
}

export default function AdminSettings() {
  const navigate = useNavigate()
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState<{[key: string]: boolean}>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true)
  }, [])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/v1/admin/settings')
        if (res.ok) {
          const data = await res.json()
          setSettings((prev) => ({ ...prev, ...data }))
        }
      } catch (err) {
        console.error('Failed to load settings', err)
      }
    }
    load()
  }, [])

  async function saveSettings() {
    setSaving(true)
    try {
      const res = await fetch('/api/v1/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` },
        body: JSON.stringify(settings),
      })
      if (res.ok) {
        alert('Settings saved')
        navigate('/admin')
      } else {
        alert('Failed to save settings')
      }
    } catch (err) {
      console.error('Save error', err)
      alert('Error saving settings')
    } finally {
      setSaving(false)
    }
  }

  async function uploadImage(field: 'heroImage1' | 'heroImage2', file: File) {
    setUploading(prev => ({ ...prev, [field]: true }))
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      const res = await fetch('/api/v1/admin/settings/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` },
        body: formData,
      })
      
      if (res.ok) {
        const data = await res.json()
        setSettings(prev => ({ ...prev, [field]: data.url }))
        alert('Image uploaded successfully')
      } else {
        alert('Failed to upload image')
      }
    } catch (err) {
      console.error('Upload error', err)
      alert('Error uploading image')
    } finally {
      setUploading(prev => ({ ...prev, [field]: false }))
    }
  }

  return (
    <div className="admin-settings-page">
      {/* Header Section */}
      <div className={`page-header ${mounted ? 'animate-in' : ''}`}>
        <div className="header-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6"/>
            <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
            <path d="M1 12h6m6 0h6"/>
            <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
          </svg>
        </div>
        <div className="header-content">
          <h1 className="page-title">Site Settings</h1>
          <p className="page-subtitle">Configure your store's appearance, contact information, and payment details</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="content-container">
        {/* Settings Form */}
        <div className={`settings-section ${mounted ? 'animate-in' : ''}`}>
          <div className="section-header">
            <div className="section-icon">⚙️</div>
            <div>
              <h2 className="section-title">General Settings</h2>
              <p className="section-subtitle">Basic store configuration and contact information</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="siteName">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                Site Name <span className="required">*</span>
              </label>
              <input 
                id="siteName" 
                type="text"
                value={settings.siteName} 
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} 
                placeholder="e.g., Own Setup Store"
              />
            </div>

            <div className="form-group">
              <label htmlFor="supportEmail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Support Email <span className="required">*</span>
              </label>
              <input 
                id="supportEmail" 
                type="email" 
                value={settings.supportEmail} 
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })} 
                placeholder="e.g., support@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="supportPhone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Support Phone
              </label>
              <input 
                id="supportPhone" 
                type="tel"
                value={settings.supportPhone} 
                onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })} 
                placeholder="e.g., +94 76 897 6222"
              />
            </div>

            <div className="form-group">
              <label htmlFor="currency">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Currency <span className="required">*</span>
              </label>
              <select 
                id="currency" 
                value={settings.currency} 
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
              >
                <option value="USD">USD - US Dollar</option>
                <option value="LKR">LKR - Sri Lankan Rupee</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="brandColor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
                Brand Color
              </label>
              <div className="color-input-group">
                <input 
                  id="brandColor" 
                  type="color" 
                  value={settings.brandColor} 
                  onChange={(e) => setSettings({ ...settings, brandColor: e.target.value })} 
                  className="color-picker"
                />
                <input 
                  type="text" 
                  value={settings.brandColor} 
                  onChange={(e) => setSettings({ ...settings, brandColor: e.target.value })} 
                  placeholder="#6D74FF"
                  className="color-text-input"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="bankTransferNote">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
                Bank Transfer Note
              </label>
              <textarea 
                id="bankTransferNote" 
                rows={4} 
                value={settings.bankTransferNote} 
                onChange={(e) => setSettings({ ...settings, bankTransferNote: e.target.value })} 
                placeholder="Add instructions for customers making bank transfers..."
              />
            </div>
          </div>
        </div>

        {/* Hero Images Section */}
        <div className={`settings-section ${mounted ? 'animate-in delay-1' : ''}`}>
          <div className="section-header">
            <div className="section-icon">🖼️</div>
            <div>
              <h2 className="section-title">Hero Images</h2>
              <p className="section-subtitle">Upload or set URLs for homepage hero section images</p>
            </div>
          </div>

          <div className="images-grid">
            {/* Hero Image 1 */}
            <div className="image-upload-card">
              <div className="image-card-header">
                <h3 className="image-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  Hero Image 1
                </h3>
              </div>
              
              {settings.heroImage1 && (
                <div className="image-preview">
                  <img src={settings.heroImage1} alt="Hero 1" />
                  <div className="image-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="16 12 12 8 8 12"/>
                      <line x1="12" y1="16" x2="12" y2="8"/>
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="heroImage1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                  Image URL
                </label>
                <input 
                  id="heroImage1" 
                  type="url" 
                  value={settings.heroImage1} 
                  onChange={(e) => setSettings({ ...settings, heroImage1: e.target.value })} 
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="upload-area">
                <p className="upload-label">Or upload from device:</p>
                <label className="upload-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  {uploading.heroImage1 ? (
                    <>
                      <span className="spinner-small"></span>
                      Uploading...
                    </>
                  ) : (
                    'Choose File'
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) uploadImage('heroImage1', file)
                    }}
                    disabled={uploading.heroImage1}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>

            {/* Hero Image 2 */}
            <div className="image-upload-card">
              <div className="image-card-header">
                <h3 className="image-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  Hero Image 2
                </h3>
              </div>
              
              {settings.heroImage2 && (
                <div className="image-preview">
                  <img src={settings.heroImage2} alt="Hero 2" />
                  <div className="image-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="16 12 12 8 8 12"/>
                      <line x1="12" y1="16" x2="12" y2="8"/>
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="heroImage2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                  Image URL
                </label>
                <input 
                  id="heroImage2" 
                  type="url" 
                  value={settings.heroImage2} 
                  onChange={(e) => setSettings({ ...settings, heroImage2: e.target.value })} 
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="upload-area">
                <p className="upload-label">Or upload from device:</p>
                <label className="upload-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  {uploading.heroImage2 ? (
                    <>
                      <span className="spinner-small"></span>
                      Uploading...
                    </>
                  ) : (
                    'Choose File'
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) uploadImage('heroImage2', file)
                    }}
                    disabled={uploading.heroImage2}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`action-buttons ${mounted ? 'animate-in delay-2' : ''}`}>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/admin')}
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Cancel
          </button>
          <button 
            className="btn btn-primary" 
            onClick={saveSettings} 
            disabled={saving} 
            type="button"
          >
            {saving ? (
              <>
                <span className="spinner"></span>
                Saving…
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                  <polyline points="17 21 17 13 7 13 7 21"/>
                  <polyline points="7 3 7 8 15 8"/>
                </svg>
                Save Settings
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .admin-settings-page {
          min-height: 100vh;
          padding: 0;
          margin: 0;
          background: #f3f4f6;
        }

        /* ========================================
           ENTRANCE ANIMATIONS
           ======================================== */
        
        .page-header {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .page-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .settings-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .settings-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .settings-section.animate-in.delay-1 {
          transition-delay: 0.2s;
        }

        .action-buttons {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .action-buttons.animate-in.delay-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        /* ========================================
           PAGE HEADER
           ======================================== */
        
        .page-header {
          background: #fff;
          padding: 32px 40px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .header-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .header-content {
          flex: 1;
        }

        .page-title {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #111827;
        }

        .page-subtitle {
          font-size: 16px;
          color: #6b7280;
          margin: 0;
        }

        /* ========================================
           CONTENT CONTAINER
           ======================================== */

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px;
        }

        .settings-section {
          background: white;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .settings-section:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f3f4f6;
        }

        .section-icon {
          font-size: 32px;
          animation: iconBounce 2s ease-in-out infinite;
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .section-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        /* ========================================
           FORM STYLES
           ======================================== */

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .required {
          color: #ef4444;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="url"],
        select,
        textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          color: #111827;
          background: white;
          transition: all 0.3s;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          transform: translateY(-1px);
        }

        input:hover,
        select:hover,
        textarea:hover {
          border-color: #d1d5db;
        }

        textarea {
          resize: vertical;
          font-family: inherit;
        }

        /* ========================================
           COLOR PICKER
           ======================================== */

        .color-input-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .color-picker {
          width: 60px;
          height: 48px;
          padding: 4px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .color-picker:hover {
          border-color: #6366f1;
          transform: scale(1.05);
        }

        .color-text-input {
          flex: 1;
        }

        /* ========================================
           IMAGE UPLOAD CARDS
           ======================================== */

        .images-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .image-upload-card {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
          background: #f9fafb;
          transition: all 0.3s;
        }

        .image-upload-card:hover {
          border-color: #6366f1;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .image-card-header {
          margin-bottom: 16px;
        }

        .image-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .image-preview {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
        }

        .image-preview:hover {
          border-color: #6366f1;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .image-preview:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(99, 102, 241, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .image-preview:hover .image-overlay {
          opacity: 1;
        }

        .upload-area {
          margin-top: 16px;
        }

        .upload-label {
          font-size: 13px;
          color: #6b7280;
          margin: 0 0 8px 0;
          font-weight: 500;
        }

        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          box-shadow: 0 4px 6px rgba(99, 102, 241, 0.3);
        }

        .upload-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(99, 102, 241, 0.4);
        }

        .upload-btn:active {
          transform: translateY(0);
        }

        /* ========================================
           ACTION BUTTONS
           ======================================== */

        .action-buttons {
          display: flex;
          gap: 16px;
          justify-content: flex-end;
          padding: 24px 0;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 6px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-secondary {
          background: white;
          color: #374151;
          border: 2px solid #e5e7eb;
        }

        .btn-secondary:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary:active {
          transform: translateY(0);
        }

        /* ========================================
           SPINNER ANIMATIONS
           ======================================== */

        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .spinner-small {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ========================================
           RESPONSIVE STYLES
           ======================================== */

        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .images-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            padding: 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }

          .header-icon {
            width: 56px;
            height: 56px;
          }

          .content-container {
            padding: 20px;
          }

          .settings-section {
            padding: 24px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
