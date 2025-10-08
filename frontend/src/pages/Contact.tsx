import { useEffect, useRef, useState } from 'react'

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
  const liveRef = useRef<HTMLDivElement | null>(null)

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
      // TODO: Replace with real API call, e.g.:
      // await fetch('/api/v1/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      await new Promise(res => setTimeout(res, 800))
      setSuccess('Thanks for reaching out. The team will reply within 1–2 business days.')
      setForm({ name: '', email: '', subject: '', message: '', orderId: '', channel: 'email' })
    } catch (err) {
      setError('Could not send message. Please try again or use another contact method.')
    } finally {
      setSubmitting(false)
    }
  }

  const whatsappHref = `https://wa.me/94768976222?text=${encodeURIComponent(
    `Hello, I need help with my order.\nName: ${form.name}\nEmail: ${form.email}\nOrder ID: ${form.orderId || '-'}\nSubject: ${form.subject}\nMessage: ${form.message}`
  )}`

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="container hero-inner">
          <div>
            <p className="kicker">Contact</p>
            <h1 className="headline">How can we help?</h1>
            <p className="subhead">Questions about orders, sizing, delivery, or returns—support is here.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div className="panel">
            <h2 className="section-title">Send a message</h2>

            <div
              ref={liveRef}
              tabIndex={-1}
              aria-live="polite"
              aria-atomic="true"
              className="live"
            >
              {success && <div className="alert success">{success}</div>}
              {error && <div className="alert error">{error}</div>}
            </div>

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="row">
                <div className="field">
                  <label htmlFor="name">Name<span aria-hidden="true"> *</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email<span aria-hidden="true"> *</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="orderId">Order ID</label>
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
                  <label htmlFor="channel">Preferred channel</label>
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
                <label htmlFor="subject">Subject<span aria-hidden="true"> *</span></label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={onChange}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message<span aria-hidden="true"> *</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                />
              </div>

              <div className="actions">
                <button className="btn btn-primary" type="submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
                <a className="btn btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </div>

              <p className="tiny muted">Fields marked with * are required.</p>
            </form>
          </div>

          {/* Sidebar info */}
          <aside className="panel">
            <h2 className="section-title">Contact details</h2>
            <ul className="list">
              <li>Email: support@yourstore.com</li>
              <li>Phone: +94 11 234 5678</li>
              <li>WhatsApp: +94 76 897 6222</li>
              <li>Address: 123 Market Street, Colombo</li>
              <li>Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)</li>
              <li>Response time: within 1–2 business days</li>
            </ul>

            <div className="divider" />

            <h3>Quick help</h3>
            <ul className="list">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping-returns">Shipping & Returns</a></li>
              <li><a href="/orders">Track orders</a></li>
              <li><a href="/care">Care guides</a></li>
            </ul>

            <div className="mapbox">
              <div className="map-fallback">Map placeholder</div>
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
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .contact-hero{padding:48px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;flex-direction:column;gap:8px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,46px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:36px 0;border-top:1px solid var(--line)}
        .contact-grid{display:grid;grid-template-columns:1.4fr .9fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 14px;font-size:20px}
        .form{display:grid;gap:12px}
        .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input,select,textarea{background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:10px}
        textarea{resize:vertical}
        .actions{display:flex;gap:8px;flex-wrap:wrap}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
        .divider{height:1px;background:var(--line);margin:12px 0}
        .mapbox{margin-top:12px}
        .map-fallback{height:160px;border:1px dashed var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--muted)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .contact-grid{grid-template-columns:1fr}
          .row{grid-template-columns:1fr}
        }
      `}</style>
    </>
  )
}
