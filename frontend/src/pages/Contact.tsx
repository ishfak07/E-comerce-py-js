import { useEffect, useRef, useState } from 'react'
import { getFormspreeEndpoint } from '../lib/config'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
  orderId: string
  channel: 'email' | 'phone' | 'whatsapp'
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderId: '',
    channel: 'email',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const liveRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true)
  }, [])

  useEffect(() => {
    // Fix Leaflet default marker icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    })
  }, [])

  useEffect(() => {
    if (success && liveRef.current) liveRef.current.focus()
    if (error && liveRef.current) liveRef.current.focus()
  }, [success, error])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(null)
    setError(null)
    try {
      const endpoint = getFormspreeEndpoint()
      if (!endpoint) {
        throw new Error('Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.')
      }

      const payload = {
        name: form.name,
        email: form.email,
        _replyto: form.email, // helps Formspree set Reply-To
        subject: form.subject,
        message: form.message,
        order_id: form.orderId,
        preferred_channel: form.channel,
        // Optional: tag messages from this site/app
        _subject: `[Store Contact] ${form.subject}`,
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        // Try to extract Formspree error details
        let msg = 'Could not send message. Please try again.'
        try {
          const data = await res.json()
          if (data?.errors?.length) {
            msg = data.errors.map((e: any) => e.message).join('\n')
          }
        } catch (_) { /* ignore JSON parse errors */ }
        throw new Error(msg)
      }

      setSuccess('Message sent! We\'ll reply to your email within 1–2 business days.')
      setForm({ name: '', email: '', subject: '', message: '', orderId: '', channel: 'email' })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Could not send message. Please try again or use another contact method.'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  const whatsappHref = `https://wa.me/94768976222?text=${encodeURIComponent(
    `Hello, I need help with my order.\nName: ${form.name}\nEmail: ${form.email}\nOrder ID: ${form.orderId || '-'}\nSubject: ${form.subject}\nMessage: ${form.message}`
  )}`

  const LockButton = () => {
    const map = useMap()
    useEffect(() => {
      if (isLocked) {
        map.dragging.disable()
        map.scrollWheelZoom.disable()
        map.doubleClickZoom.disable()
        map.touchZoom.disable()
      } else {
        map.dragging.enable()
        map.scrollWheelZoom.enable()
        map.doubleClickZoom.enable()
        map.touchZoom.enable()
      }
    }, [map, isLocked])
    return (
      <button
        onClick={() => setIsLocked(!isLocked)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          background: 'white',
          border: '1px solid #ccc',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        {isLocked ? '🔒 Unlock Map' : '🔓 Lock Map'}
      </button>
    )
  }

  return (
    <>
      {/* Animated Background */}
      <div className="page-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="floating-element" style={{
              left: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}>
              {i % 3 === 0 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )}
              {i % 3 === 1 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              )}
              {i % 3 === 2 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className={`contact-hero ${mounted ? 'animate-in' : ''}`}>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Get in Touch
            </div>
            <p className="kicker">Contact</p>
            <h1 className="headline">How can we help?</h1>
            <p className="subhead">Questions about orders, sizing, delivery, or returns—support is here.</p>
            <div className="hero-features">
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>1-2 day response</span>
              </div>
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Multiple channels</span>
              </div>
              <div className="feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div className={`panel form-panel ${mounted ? 'animate-in' : ''}`}>
            <div className="panel-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send a message
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
              {success && (
                <div className="alert success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {success}
                </div>
              )}
              {error && (
                <div className="alert error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  {error}
                </div>
              )}
            </div>

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="row">
                <div className="field">
                  <label htmlFor="name">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Name<span aria-hidden="true"> *</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    autoComplete="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Email<span aria-hidden="true"> *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="orderId">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Order ID
                  </label>
                  <input
                    id="orderId"
                    name="orderId"
                    type="text"
                    value={form.orderId}
                    onChange={onChange}
                    placeholder="Optional, helps us locate your order"
                  />
                </div>
                <div className="field">
                  <label htmlFor="channel">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Preferred channel
                  </label>
                  <select
                    id="channel"
                    name="channel"
                    value={form.channel}
                    onChange={onChange}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"/>
                    <line x1="8" y1="12" x2="21" y2="12"/>
                    <line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                  Subject<span aria-hidden="true"> *</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={onChange}
                  placeholder="How can we help you?"
                />
              </div>

              <div className="field">
                <label htmlFor="message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Message<span aria-hidden="true"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="actions">
                <button className="btn btn-primary" type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <svg className="spinner" width="18" height="18" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send message
                    </>
                  )}
                </button>
                <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              <p className="tiny muted">Fields marked with * are required.</p>
            </form>
          </div>

          {/* Sidebar info */}
          <aside className={`panel info-panel ${mounted ? 'animate-in' : ''}`}>
            <div className="panel-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                Contact details
              </h2>
              <div className="title-underline"></div>
            </div>
            <ul className="list contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>memberofpfc20@gmail.com</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+94 76 89 76 222</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>+94 76 897 6222</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>252/1A Mannar Road, Puttalam</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Mon–Fri, 9:00–17:00 (UTC+5:30)</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                <span>Response time: 1–2 business days</span>
              </li>
            </ul>

            <div className="divider" />

            <h3 className="quick-help-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Quick help
            </h3>
            <ul className="list quick-help-list">
              <li>
                <a href="/faq">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping-returns">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/orders">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  Track orders
                </a>
              </li>
              <li>
                <a href="/care">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                  Care guides
                </a>
              </li>
            </ul>

            <div className="mapbox">
              {/* @ts-ignore */}
              <MapContainer center={[8.0386019, 79.8309999]} zoom={15} style={{ height: '300px', width: '100%' }}>
                {/* @ts-ignore */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[8.0386019, 79.8309999]}>
                  <Popup>
                    Palace of Rumiii<br />87 Nedumkulam Rd, Puttalam
                  </Popup>
                </Marker>
                <LockButton />
              </MapContainer>
            </div>
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
          --danger:#ff5d5d;
          --positive:#1fbf75;
          --whatsapp:#25D366;
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
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-element {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: elementFloat 10s ease-in-out infinite;
        }
        
        @keyframes elementFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .contact-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .contact-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .form-panel {
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .form-panel.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .info-panel {
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.3s;
        }
        
        .info-panel.animate-in {
          opacity: 1;
          transform: translateX(0);
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
        
        .contact-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-inner{
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        
        .hero-content {
          max-width: 700px;
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
          margin-bottom: 16px;
          width: fit-content;
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
        
        .kicker{
          letter-spacing:.2em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 12px;
          font-size: 14px;
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
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .hero-features {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          font-size: 14px;
        }
        
        .feature svg {
          color: var(--brand);
        }
        
        /* ========================================
           SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .contact-grid{
          display:grid;
          grid-template-columns:1.4fr .9fr;
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
          gap: 10px;
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
        
        .row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
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
        
        input,select,textarea{
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:12px 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        textarea{
          resize:vertical;
          font-family: inherit;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .actions{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:10px;
          border-radius:12px;
          padding:14px 24px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
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
          flex: 1;
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
        
        .btn-whatsapp {
          background: rgba(37, 211, 102, 0.1);
          border-color: rgba(37, 211, 102, 0.3);
          color: var(--whatsapp);
        }
        
        .btn-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: var(--whatsapp);
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .tiny{
          font-size:12px;
          margin-top: 8px;
        }
        
        .muted{
          color:var(--muted);
        }
        
        /* ========================================
           LISTS
           ======================================== */
        
        .list{
          list-style:none;
          margin:0;
          padding:0;
          display:grid;
          gap:12px;
        }
        
        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--muted);
          line-height: 1.6;
        }
        
        .contact-list svg {
          flex-shrink: 0;
          color: var(--brand);
          margin-top: 2px;
        }
        
        .divider{
          height:1px;
          background: rgba(255, 255, 255, 0.1);
          margin:24px 0;
        }
        
        .quick-help-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 16px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .quick-help-list li {
          padding: 0;
        }
        
        .quick-help-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 10px;
          transition: all 0.3s;
        }
        
        .quick-help-list a:hover {
          background: rgba(109, 116, 255, 0.1);
          color: var(--brand);
          transform: translateX(4px);
        }
        
        .quick-help-list svg {
          color: var(--brand);
        }
        
        /* ========================================
           MAP
           ======================================== */
        
        .mapbox{
          margin-top:24px;
        }
        
        .map-fallback{
          height:200px;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          display:flex;
          flex-direction: column;
          align-items:center;
          justify-content:center;
          gap: 12px;
          color:var(--muted);
          background: rgba(23, 24, 33, 0.6);
        }
        
        .map-fallback svg {
          color: var(--brand);
        }
        
        /* ========================================
           ALERTS
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
          .contact-grid{
            grid-template-columns:1fr;
          }
          
          .row{
            grid-template-columns:1fr;
          }
          
          .hero-features {
            flex-direction: column;
            gap: 16px;
          }
          
          .headline {
            font-size: 36px;
          }
        }
        
        @media (max-width:640px){
          .actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
                  