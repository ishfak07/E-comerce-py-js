import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Register() {
  const { register: signup } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [fullName, setFullName] = useState('')
  const [agree, setAgree] = useState(false)
  const [news, setNews] = useState(true)
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const liveRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if ((message || error) && liveRef.current) {
      liveRef.current.focus()
    }
  }, [message, error])

  const strength = useMemo(() => {
    let s = 0
    if (password.length >= 8) s++
    if (/[A-Z]/.test(password)) s++
    if (/[a-z]/.test(password)) s++
    if (/\d/.test(password)) s++
    if (/[^A-Za-z0-9]/.test(password)) s++
    return s // 0-5
  }, [password])

  const strengthLabel = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'][strength]

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setMessage(null)
    if (!fullName || !email || !password || !confirm) {
      setError('All fields are required.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (!agree) {
      setError('Please agree to the Terms and Privacy Policy.')
      return
    }
    try {
      setSubmitting(true)
      await signup(email, password, fullName)
      setMessage('Check the inbox to verify the account. Redirecting to Login…')
      setTimeout(() => navigate('/login'), 1000)
    } catch (e) {
      setError('Could not create the account. Try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="register-hero">
        <div className="container">
          <h1 className="headline">Create an account</h1>
          <p className="subhead">Join to track orders, save preferences, and get faster checkout.</p>
        </div>
      </section>

      <section className="section">
        <div className="container reg-wrap">
          <div className="panel">
            <h2 className="section-title">Register</h2>

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

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g., Ishfaque Mif"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>
                <div className="pw-wrap">
                  <input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    aria-describedby="pw-help"
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    aria-pressed={showPw}
                    aria-controls="password"
                    onClick={() => setShowPw(v => !v)}
                  >
                    {showPw ? '🙈' : '👁️'}
                  </button>
                </div>
                <div id="pw-help" className="tiny muted">
                  Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol.
                </div>
                <div className="meter" aria-hidden="true">
                  <span className={`m${strength}`} />
                  <em className="muted">{strengthLabel}</em>
                </div>
                <ul className="reqs">
                  <li className={password.length >= 8 ? 'ok' : ''}>8+ characters</li>
                  <li className={/[A-Z]/.test(password) ? 'ok' : ''}>Uppercase letter</li>
                  <li className={/[a-z]/.test(password) ? 'ok' : ''}>Lowercase letter</li>
                  <li className={/\d/.test(password) ? 'ok' : ''}>Number</li>
                  <li className={/[^A-Za-z0-9]/.test(password) ? 'ok' : ''}>Symbol</li>
                </ul>
              </div>

              <div className="field">
                <label htmlFor="confirm">Confirm password</label>
                <div className="pw-wrap">
                  <input
                    id="confirm"
                    type={showConfirm ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Re-enter password"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                    aria-pressed={showConfirm}
                    aria-controls="confirm"
                    onClick={() => setShowConfirm(v => !v)}
                  >
                    {showConfirm ? '🙈' : '👁️'}
                  </button>
                </div>
                {confirm && confirm !== password && (
                  <div className="tiny error-text">Passwords do not match.</div>
                )}
              </div>

              <label className="check">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                  required
                />
                <span>
                  I agree to the <Link to="/terms" className="link">Terms</Link> and{' '}
                  <Link to="/privacy" className="link">Privacy Policy</Link>.
                </span>
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={news}
                  onChange={e => setNews(e.target.checked)}
                />
                <span>Send occasional product updates and offers.</span>
              </label>

              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Creating…' : 'Create account'}
              </button>

              <div className="row between">
                <span className="tiny muted">Already have an account?</span>
                <Link to="/login" className="link">Login</Link>
              </div>
            </form>
          </div>

          <aside className="panel tips">
            <h3>Why create an account?</h3>
            <ul className="list">
              <li>Faster checkout and saved details.</li>
              <li>Order history and tracking.</li>
              <li>Early access to limited releases.</li>
            </ul>
            <div className="support">
              <p className="muted">Need help?</p>
              <Link to="/contact" className="btn">Contact support</Link>
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
        .register-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .reg-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .pw-wrap{position:relative}
        .pw-toggle{position:absolute;right:6px;top:50%;transform:translateY(-50%);height:28px;width:32px;border-radius:8px;border:1px solid var(--line);background:var(--surface-alt);color:var(--text)}
        .meter{display:flex;align-items:center;gap:8px;margin-top:6px}
        .meter span{display:block;height:6px;border-radius:999px;background:var(--surface-alt);position:relative;flex:1;overflow:hidden}
        .meter span::after{content:'';position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#ff6363,#ffd166,#06d6a0);width:0%}
        .meter span.m0::after{width:5%}
        .meter span.m1::after{width:20%}
        .meter span.m2::after{width:40%}
        .meter span.m3::after{width:60%}
        .meter span.m4::after{width:80%}
        .meter span.m5::after{width:100%}
        .reqs{display:grid;gap:4px;font-size:12px;color:var(--muted);margin:6px 0 0;padding-left:16px;list-style:disc}
        .reqs .ok{color:#9be7c4}
        .check{display:flex;align-items:center;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .row.between{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
        .list{list-style:disc;padding-left:18px;margin:0 0 8px}
        .support{display:flex;gap:8px;align-items:center}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .reg-wrap{grid-template-columns:1fr}
        }
        .link{color:var(--brand);text-decoration:none}
        .link:hover{text-decoration:underline}
        .error-text{color:#ffbcbc}
      `}</style>
    </>
  )
}
