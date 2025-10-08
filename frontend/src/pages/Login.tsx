import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const liveRef = useRef<HTMLDivElement | null>(null)
  const from = (location.state as any)?.from || '/'

  useEffect(() => {
    if (error && liveRef.current) {
      liveRef.current.focus()
    }
  }, [error])

  useEffect(() => {
    let t: number | undefined
    if (showPw) {
      t = window.setTimeout(() => setShowPw(false), 5000)
    }
    return () => { if (t) window.clearTimeout(t) }
  }, [showPw])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Email and password are required.')
      return
    }
    try {
      setSubmitting(true)
      await login(email, password)
      // Optionally persist session preference
      if (remember && typeof localStorage !== 'undefined') {
        localStorage.setItem('remember', '1')
      } else {
        localStorage.removeItem('remember')
      }
      navigate(from)
    } catch (e) {
      setError('Invalid credentials')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="login-hero">
        <div className="container">
          <h1 className="headline">Welcome back</h1>
          <p className="subhead">Sign in to manage orders, track deliveries, and update account details.</p>
        </div>
      </section>

      <section className="section">
        <div className="container login-wrap">
          <div className="panel">
            <h2 className="section-title">Login</h2>

            <div
              ref={liveRef}
              tabIndex={-1}
              aria-live="assertive"
              aria-atomic="true"
              className="live"
            >
              {error && <div className="alert error">{error}</div>}
            </div>

            <form className="form" onSubmit={onSubmit} noValidate>
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
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgot" className="link">Forgot password?</Link>
                </div>
                <div className="pw-wrap">
                  <input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    aria-pressed={showPw}
                    aria-controls="password"
                    onClick={() => setShowPw(v => !v)}
                    title={showPw ? 'Hide password' : 'Show password'}
                  >
                    {showPw ? '🙈' : '👁️'}
                  </button>
                </div>
                <p className="tiny muted">Password visibility will auto-hide after 5 seconds.</p>
              </div>

              <div className="row between">
                <label className="check">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <span className="tiny muted">Need an account? <Link to="/register" className="link">Register</Link></span>
              </div>

              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Signing in…' : 'Login'}
              </button>

              <div className="or">
                <span className="line" />
                <span className="muted">or continue with</span>
                <span className="line" />
              </div>

              <div className="oauth">
                <button type="button" className="btn btn-ghost" onClick={() => alert('Coming soon')}>Google</button>
                <button type="button" className="btn btn-ghost" onClick={() => alert('Coming soon')}>GitHub</button>
              </div>
            </form>
          </div>

          <aside className="panel tips">
            <h3>Tips</h3>
            <ul className="list">
              <li>Use the email registered during checkout.</li>
              <li>Passwords are case-sensitive; check CAPS LOCK.</li>
              <li>After multiple failed attempts, wait a minute before retrying.</li>
            </ul>
            <div className="support">
              <p className="muted">Still need help?</p>
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
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .login-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .login-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        .label-row{display:flex;justify-content:space-between;align-items:center}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .pw-wrap{position:relative}
        .pw-toggle{position:absolute;right:6px;top:50%;transform:translateY(-50%);height:28px;width:32px;border-radius:8px;border:1px solid var(--line);background:var(--surface-alt);color:var(--text)}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .row.between{display:flex;justify-content:space-between;align-items:center}
        .check{display:flex;align-items:center;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .or{display:flex;align-items:center;gap:8px;margin:8px 0}
        .line{flex:1;height:1px;background:var(--line)}
        .oauth{display:flex;gap:8px;flex-wrap:wrap}
        .tips h3{margin:0 0 8px}
        .list{list-style:disc;padding-left:18px;margin:0 0 8px}
        .support{display:flex;gap:8px;align-items:center}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px;border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .login-wrap{grid-template-columns:1fr}
        }
        .link{color:var(--brand);text-decoration:none}
        .link:hover{text-decoration:underline}
      `}</style>
    </>
  )
}
