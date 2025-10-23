import { useEffect, useRef, useState } from 'react'
import { api } from '../lib/api'
import { useAuth } from '../context/AuthProvider'
import { toast } from '../lib/toast'

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
  const liveRef = useRef<HTMLDivElement | null>(null)

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
    if (!/image\/(png|jpe?g|webp)/.test(file.type)) { toast('Please select a PNG, JPG, or WEBP image', 'error'); return }
    if (file.size > 3 * 1024 * 1024) { toast('Image must be under 3MB', 'error'); return }
    const form = new FormData()
    form.append('file', file)
    try {
      const res = await api.post('/auth/avatar', form, { headers: { 'Content-Type': 'multipart/form-data' } })
      let url = res.data?.avatar_url as string
      // Bust cache so the freshly uploaded image is displayed immediately
      if (url) url = `${url}${url.includes('?') ? '&' : '?'}v=${Date.now()}`
      setAvatarUrl(url)
      updateUser({ avatar_url: url })
      toast('Profile picture updated', 'success')
    } catch (e) {
      toast('Failed to upload picture', 'error')
    }
  }

  return (
    <>
      <section className="account-hero">
        <div className="container">
          <h1 className="headline">Account Settings</h1>
          <p className="subhead">Update your profile details, password, and picture.</p>
        </div>
      </section>

      <section className="section">
        <div className="container acct-wrap">
          <div className="panel">
            <h2 className="section-title">Profile</h2>

            <div
              ref={liveRef}
              tabIndex={-1}
              aria-live="polite"
              aria-atomic="true"
              className="live"
            >
              {message && <div className="alert success">{message}</div>}
              {error && <div className="alert error">{error}</div>}
            </div>

            <form className="form" onSubmit={onSaveProfile} noValidate>
              <div className="avatar-row">
                <div className="avatar" aria-label="Profile picture">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Profile" />
                  ) : (
                    <div className="img-fallback" aria-hidden />
                  )}
                </div>
                <label className="btn" role="button">
                  Change picture
                  <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={onAvatarChange} hidden />
                </label>
              </div>

              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="row2">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Optional" />
                </div>
                <div className="field">
                  <label htmlFor="address">Address</label>
                  <input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Optional" />
                </div>
              </div>
              <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</button>
            </form>
          </div>

          <aside className="panel">
            <h2 className="section-title">Change password</h2>
            <form className="form" onSubmit={onChangePassword} noValidate>
              <div className="field">
                <label htmlFor="old">Current password</label>
                <input id="old" type="password" value={oldPw} onChange={e => setOldPw(e.target.value)} autoComplete="current-password" required />
              </div>
              <div className="field">
                <label htmlFor="new">New password</label>
                <input id="new" type="password" value={newPw} onChange={e => setNewPw(e.target.value)} autoComplete="new-password" required />
              </div>
              <div className="field">
                <label htmlFor="confirm">Confirm new password</label>
                <input id="confirm" type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} autoComplete="new-password" required />
              </div>
              <button className="btn btn-primary" type="submit" disabled={pwSaving}>{pwSaving ? 'Updating…' : 'Update password'}</button>
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
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .account-hero{padding:40px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .acct-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .avatar-row{display:flex;align-items:center;gap:12px}
        .avatar{width:64px;height:64px;border-radius:50%;overflow:hidden;border:1px solid var(--line);background:var(--surface)}
        .avatar img{width:100%;height:100%;object-fit:cover}
        .img-fallback{width:100%;height:100%;background:linear-gradient(135deg,#2a2b36,#171821)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .acct-wrap{grid-template-columns:1fr}
        }
      `}</style>
    </>
  )
}
