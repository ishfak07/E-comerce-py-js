import { useEffect, useRef, useState } from 'react'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthProvider'
import { toast } from '../lib/toast'
import ImageEditor from '../components/ImageEditor'

export default function Account() {
  const { user, updateUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [pwSaving, setPwSaving] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [oldPw, setOldPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [showImageEditor, setShowImageEditor] = useState(false)
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('')
  const [mounted, setMounted] = useState(false)
  const liveRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true)
  }, [])

  useEffect(() => {
    if ((message || error) && liveRef.current) {
      liveRef.current.focus()
    }
  }, [message, error])

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const res = await api.get('/auth/me')
        const u = res.data || {}
        setFullName(u.full_name || '')
        setEmail(u.email || '')
        setPhone(u.phone || '')
        setAddress(u.address || '')
        setAvatarUrl(u.avatar_url || user?.avatar_url || undefined)
      } catch (e) {
        // If /me fails, fallback to context user
        setFullName(user?.full_name || '')
        setEmail(user?.email || '')
        setPhone(user?.phone || '')
        setAddress(user?.address || '')
        setAvatarUrl(user?.avatar_url || undefined)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function onSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    setError(null); setMessage(null)
    if (!email) { setError('Email is required'); return }
    try {
      setSaving(true)
      const res = await api.put('/auth/me', { email, full_name: fullName, phone, address })
      const updated = res.data
      updateUser({ email: updated.email, full_name: updated.full_name, phone: updated.phone, address: updated.address })
      setMessage('Profile updated successfully')
      toast('Profile updated', 'success')
    } catch (e: any) {
      const msg = e?.response?.data?.detail || 'Failed to update profile'
      setError(String(msg))
      toast('Could not update profile', 'error')
    } finally {
      setSaving(false)
    }
  }

  async function onChangePassword(e: React.FormEvent) {
    e.preventDefault()
    setError(null); setMessage(null)
    if (!oldPw || !newPw || !confirmPw) { setError('Please fill all password fields'); return }
    if (newPw.length < 8) { setError('New password must be at least 8 characters'); return }
    if (newPw !== confirmPw) { setError('Passwords do not match'); return }
    try {
      setPwSaving(true)
      await api.post('/auth/change-password', { old_password: oldPw, new_password: newPw })
      setMessage('Password changed successfully')
      setOldPw(''); setNewPw(''); setConfirmPw('')
      toast('Password updated', 'success')
    } catch (e: any) {
      const msg = e?.response?.data?.detail || 'Failed to change password'
      setError(String(msg))
      toast('Could not change password', 'error')
    } finally {
      setPwSaving(false)
    }
  }

  async function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!/image\/(png|jpe?g|webp)/.test(file.type)) {
      toast('Please select a PNG, JPG, or WEBP image', 'error')
      return
    }
    if (file.size > 3 * 1024 * 1024) {
      toast('Image must be under 3MB', 'error')
      return
    }

    // Create object URL for the selected image
    const imageUrl = URL.createObjectURL(file)
    setSelectedImageFile(file)
    setSelectedImageUrl(imageUrl)
    setShowImageEditor(true)
  }

  async function onImageEdited(editedImageBlob: Blob) {
    if (!selectedImageFile) return

    const form = new FormData()
    form.append('file', editedImageBlob, selectedImageFile.name)

    try {
      const res = await api.post('/auth/avatar', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      let url = res.data?.avatar_url as string
      // Bust cache so the freshly uploaded image is displayed immediately
      if (url) url = `${url}${url.includes('?') ? '&' : '?'}v=${Date.now()}`
      setAvatarUrl(url)
      updateUser({ avatar_url: url })
      toast('Profile picture updated', 'success')
      setShowImageEditor(false)
      setSelectedImageFile(null)
      setSelectedImageUrl('')
    } catch (e) {
      toast('Failed to upload picture', 'error')
    }
  }

  function onImageEditorCancel() {
    setShowImageEditor(false)
    setSelectedImageFile(null)
    setSelectedImageUrl('')
    // Clear the file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  function onEditAvatar() {
    if (!avatarUrl) return
    setSelectedImageUrl(avatarUrl)
    setShowImageEditor(true)
  }

  return (
    <>
      {/* Animated Background */}
      <div className="page-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className={`account-hero ${mounted ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"/>
              </svg>
              Your Profile
            </div>
            <h1 className="headline">Account Settings</h1>
            <p className="subhead">Update your profile details, password, and picture.</p>
            <div className="hero-decorations">
              <div className="decoration-wave wave-1"></div>
              <div className="decoration-wave wave-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container acct-wrap ${mounted ? 'animate-in' : ''}`}>
          <div className="panel main-panel">
            <div className="panel-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                Profile
              </h2>
              <div className="title-underline"></div>
            </div>

            <div
              ref={liveRef}
              tabIndex={-1}
              aria-live="polite"
              aria-atomic="true"
              className="live"
            >
              {message && (
                <div className="alert success">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  {message}
                </div>
              )}
              {error && (
                <div className="alert error">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                  </svg>
                  {error}
                </div>
              )}
            </div>

            <form className="form" onSubmit={onSaveProfile} noValidate>
              <div className="avatar-row">
                <div className="avatar-container">
                  <div className="avatar" aria-label="Profile picture">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Profile" />
                    ) : (
                      <div className="img-fallback" aria-hidden>
                        <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="avatar-ring"></div>
                  <div className="avatar-pulse"></div>
                </div>
                <div className="avatar-buttons">
                  <label className="btn btn-upload" role="button">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"/>
                    </svg>
                    Change picture
                    <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={onAvatarChange} hidden />
                  </label>
                  {avatarUrl && (
                    <button className="btn btn-secondary" type="button" onClick={onEditAvatar}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                      </svg>
                      Edit picture
                    </button>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="fullName">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                  </svg>
                  Full name
                </label>
                <input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Email
                </label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="row2">
                <div className="field">
                  <label htmlFor="phone">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Phone
                  </label>
                  <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Optional" />
                </div>
                <div className="field">
                  <label htmlFor="address">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    Address
                  </label>
                  <input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Optional" />
                </div>
              </div>
              <button className="btn btn-primary" type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <svg className="spinner-icon" width="18" height="18" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
                    </svg>
                    Saving…
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                    </svg>
                    Save changes
                  </>
                )}
              </button>
            </form>
          </div>

          <aside className="panel side-panel">
            <div className="panel-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                </svg>
                Change password
              </h2>
              <div className="title-underline"></div>
            </div>
            <form className="form" onSubmit={onChangePassword} noValidate>
              <div className="field">
                <label htmlFor="old">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"/>
                  </svg>
                  Current password
                </label>
                <input id="old" type="password" value={oldPw} onChange={e => setOldPw(e.target.value)} autoComplete="current-password" required />
              </div>
              <div className="field">
                <label htmlFor="new">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                  </svg>
                  New password
                </label>
                <input id="new" type="password" value={newPw} onChange={e => setNewPw(e.target.value)} autoComplete="new-password" required />
              </div>
              <div className="field">
                <label htmlFor="confirm">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Confirm new password
                </label>
                <input id="confirm" type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} autoComplete="new-password" required />
              </div>
              <button className="btn btn-primary" type="submit" disabled={pwSaving}>
                {pwSaving ? (
                  <>
                    <svg className="spinner-icon" width="18" height="18" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
                    </svg>
                    Updating…
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Update password
                  </>
                )}
              </button>
            </form>
          </aside>
        </div>
      </section>

      <style>{`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #00f2fe 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          right: 20%;
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .shape {
          position: absolute;
          border: 2px solid rgba(109, 116, 255, 0.2);
          animation: shapeFloat 15s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          top: 60%;
          right: 15%;
          animation-delay: -5s;
        }
        
        .shape-3 {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          bottom: 15%;
          left: 20%;
          animation-delay: -10s;
        }
        
        .shape-4 {
          width: 70px;
          height: 70px;
          border-radius: 12px;
          top: 40%;
          right: 25%;
          animation-delay: -7.5s;
        }
        
        @keyframes shapeFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translate(-10px, 30px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(30px, 10px) rotate(270deg);
            opacity: 0.4;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .account-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .account-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .acct-wrap {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .acct-wrap.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .account-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          position: relative;
          text-align: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }
        
        .decoration-wave {
          position: absolute;
          height: 100px;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(109, 116, 255, 0.1), transparent);
          filter: blur(20px);
        }
        
        .wave-1 {
          top: 20%;
          animation: waveMove 8s ease-in-out infinite;
        }
        
        .wave-2 {
          bottom: 20%;
          animation: waveMove 8s ease-in-out infinite;
          animation-delay: -4s;
        }
        
        @keyframes waveMove {
          0%, 100% {
            transform: translateX(-50%) scaleY(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(50%) scaleY(1.2);
            opacity: 0.5;
          }
        }
        
        /* ========================================
           MAIN SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .acct-wrap{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           PANEL STYLES (GLASSMORPHISM)
           ======================================== */
        
        .panel{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:20px;
          padding:32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }
        
        .main-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .side-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          animation-delay: 0.15s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        @keyframes panelSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .panel-header {
          margin-bottom: 24px;
        }
        
        .section-title{
          margin:0 0 8px;
          font-size:24px;
          font-weight: 700;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        /* ========================================
           FORM STYLES
           ======================================== */
        
        .form{
          display:grid;
          gap:20px;
        }
        
        .field{
          display:grid;
          gap:10px;
        }
        
        label{
          font-size:14px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input{
          height:48px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:0 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        /* ========================================
           AVATAR SECTION
           ======================================== */
        
        .avatar-row{
          display:flex;
          align-items:center;
          gap:20px;
          padding: 20px;
          background: rgba(109, 116, 255, 0.05);
          border: 1px solid rgba(109, 116, 255, 0.1);
          border-radius: 16px;
        }
        
        .avatar-container {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .avatar{
          width:80px;
          height:80px;
          border-radius:50%;
          overflow:hidden;
          border:3px solid rgba(109, 116, 255, 0.3);
          background:var(--surface);
          position: relative;
          z-index: 3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .avatar img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        
        .img-fallback{
          width:100%;
          height:100%;
          background:linear-gradient(135deg,rgba(109, 116, 255, 0.2),rgba(118, 75, 162, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
        }
        
        .avatar-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: var(--brand);
          border-right-color: var(--brand);
          animation: avatarRingRotate 3s linear infinite;
          z-index: 2;
        }
        
        @keyframes avatarRingRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .avatar-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(109, 116, 255, 0.3), transparent 70%);
          transform: translate(-50%, -50%);
          animation: avatarPulse 2s ease-in-out infinite;
          z-index: 1;
        }
        
        @keyframes avatarPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
        
        .avatar-buttons{
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:12px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          cursor:pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-secondary{
          background: rgba(35, 36, 52, 0.6);
          border-color: rgba(255, 255, 255, 0.1);
          color:var(--text);
        }
        
        .btn-secondary:hover{
          background: rgba(35, 36, 52, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .btn-upload {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-upload:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .spinner-icon {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .row2{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }
        
        /* ========================================
           ALERT STYLES
           ======================================== */
        
        .live{
          outline:none;
        }
        
        .alert{
          border-radius:12px;
          padding:14px 16px;
          margin-bottom:16px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: alertSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes alertSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .alert.success{
          border:1px solid rgba(31,191,117,.5);
          background: rgba(31,191,117,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#c7f5df;
        }
        
        .alert.error{
          border:1px solid rgba(255,93,93,.5);
          background: rgba(255,93,93,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#ffc9c9;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .acct-wrap{
            grid-template-columns:1fr;
          }
          
          .hero-decorations {
            display: none;
          }
          
          .headline {
            font-size: 36px;
          }
          
          .subhead {
            font-size: 16px;
          }
          
          .panel {
            padding: 24px;
          }
          
          .row2 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width:480px){
          .avatar-row {
            flex-direction: column;
            text-align: center;
          }
          
          .avatar-buttons {
            width: 100%;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>

      {showImageEditor && selectedImageUrl && (
        <ImageEditor
          imageSrc={selectedImageUrl}
          onSave={onImageEdited}
          onCancel={onImageEditorCancel}
        />
      )}
    </>
  )
}
