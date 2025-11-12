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
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
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

  return (
    <div>
      <h1 className="title">Settings</h1>
      <div className="panel">
        <div className="form-grid">
          <div className="field">
            <label htmlFor="siteName">Site name</label>
            <input id="siteName" value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="supportEmail">Support email</label>
            <input id="supportEmail" type="email" value={settings.supportEmail} onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="supportPhone">Support phone</label>
            <input id="supportPhone" value={settings.supportPhone} onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="currency">Currency</label>
            <select id="currency" value={settings.currency} onChange={(e) => setSettings({ ...settings, currency: e.target.value })}>
              <option value="USD">USD</option>
              <option value="LKR">LKR</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="brandColor">Brand color</label>
            <input id="brandColor" type="color" value={settings.brandColor} onChange={(e) => setSettings({ ...settings, brandColor: e.target.value })} />
          </div>

          <div className="field col-span">
            <label htmlFor="bankTransferNote">Bank transfer note</label>
            <textarea id="bankTransferNote" rows={4} value={settings.bankTransferNote} onChange={(e) => setSettings({ ...settings, bankTransferNote: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="heroImage1">Hero image 1 URL</label>
            <input id="heroImage1" type="url" value={settings.heroImage1} onChange={(e) => setSettings({ ...settings, heroImage1: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="heroImage2">Hero image 2 URL</label>
            <input id="heroImage2" type="url" value={settings.heroImage2} onChange={(e) => setSettings({ ...settings, heroImage2: e.target.value })} />
          </div>
        </div>

        <div className="actions" style={{ marginTop: 12 }}>
          <button className="btn btn-primary" onClick={saveSettings} disabled={saving} type="button">{saving ? 'Saving…' : 'Save settings'}</button>
        </div>
      </div>
    </div>
  )
}
