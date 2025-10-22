import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Brand + Tagline */}
          <div className="col brand-col">
            <Link to="/" className="brand">Own Setup 💼</Link>
            <p className="tagline">Everyday essentials with thoughtful design and lasting quality.</p>
          </div>

          {/* Sitemap */}
          <nav className="col" aria-label="Footer navigation">
            <h3 className="col-title">Navigate</h3>
            <ul className="list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </nav>

          {/* Help & Policies */}
          <nav className="col" aria-label="Help and policies">
            <h3 className="col-title">Help</h3>
            <ul className="list">
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="col">
            <h3 className="col-title">Contact</h3>
            <ul className="list">
              <li>Email: support@yourstore.com</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Hours: Mon–Fri, 9:00–17:00</li>
              <li>Address: 123 Market Street, Colombo</li>
            </ul>
            <div className="social">
              <a href="https://instagram.com/yourstore" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://facebook.com/yourstore" aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>
              <a href="https://x.com/yourstore" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col newsletter">
            <h3 className="col-title">Stay in the loop</h3>
            <p className="muted">Subscribe for product drops, care tips, and seasonal edits.</p>
            <form
              className="signup"
              onSubmit={(e) => {
                e.preventDefault()
                // TODO: integrate with backend/ESP
                alert('Thanks for subscribing!')
              }}
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="email@example.com"
                autoComplete="email"
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
            <p className="tiny muted">By subscribing, consent to receive marketing emails; unsubscribe anytime.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="left">
            <span>© {year} Own Setup 💼</span>
            <span className="dot">•</span>
            <Link to="/privacy">Privacy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms</Link>
            <span className="dot">•</span>
            <Link to="/support">Support</Link>
          </div>
          <div className="right">
            <Link to="/sitemap">Sitemap</Link>
            <span className="dot">•</span>
            <button
              className="btn btn-ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>

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
        .footer{border-top:1px solid var(--line);background:linear-gradient(180deg, transparent, rgba(109,116,255,0.06));padding:28px 0 20px}
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .footer-inner{display:flex;flex-direction:column;gap:16px}
        .footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr 1.2fr 1.2fr;gap:16px}
        .brand{color:var(--text);text-decoration:none;font-weight:800;letter-spacing:.2px}
        .tagline{color:var(--muted);margin-top:6px;max-width:36ch}
        .col-title{margin:0 0 8px;font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
        .list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
        .list a{color:var(--text);text-decoration:none}
        .list a:hover{text-decoration:underline}
        .social{display:flex;gap:8px;margin-top:8px}
        .social a{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .newsletter .muted{margin:0 0 8px}
        .signup{display:flex;gap:8px}
        .signup input{flex:1;min-width:0;height:38px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:12px;border-top:1px solid var(--line);padding-top:12px;margin-top:8px}
        .left,.right{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .dot{color:var(--muted)}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

        @media (max-width:1024px){
          .footer-grid{grid-template-columns:1fr 1fr;gap:14px}
        }
        @media (max-width:640px){
          .footer-grid{grid-template-columns:1fr}
          .signup{flex-direction:column}
          .footer-bottom{flex-direction:column;align-items:flex-start}
        }
      `}</style>
    </footer>
  )
}
