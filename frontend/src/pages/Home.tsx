import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero / Welcome Banner */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="kicker">Welcome to</p>
            <h1 className="headline">Everyday Essentials, Thoughtfully Made</h1>
            <p className="subhead">
              Curated apparel and accessories crafted for comfort, durability, and timeless style.
            </p>
            <div className="hero-ctas">
              <Link to="/about" className="btn btn-primary">Learn More</Link>
              <Link to="/shop" className="btn btn-ghost">Visit Shop</Link>
            </div>
          </div>
          <div className="hero-images">
            <img
              src="/images/hero-1.jpg"
              alt="Lifestyle banner"
            />
            <img
              src="/images/hero-2.jpg"
              alt="Crafted details"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="lead">
            We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance.
            Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care.
          </p>
          <div className="cards three">
            <div className="info-card">
              <h3>What we do</h3>
              <p>
                From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use.
              </p>
            </div>
            <div className="info-card">
              <h3>How we work</h3>
              <p>
                Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered.
              </p>
            </div>
            <div className="info-card">
              <h3>Our promise</h3>
              <p>
                Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="lead">
            Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends.
          </p>
          <ul className="bullets">
            <li>Material-first design choices with soft-hand, responsibly sourced textiles.</li>
            <li>Timeless palettes and silhouettes that pair across wardrobes.</li>
            <li>Continuous improvements guided by real customer feedback.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid-2">
            <div className="feature">
              <div className="feature-badge">Quality</div>
              <h3>Built to last</h3>
              <p>
                Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer.
              </p>
            </div>
            <div className="feature">
              <div className="feature-badge">Trust</div>
              <h3>Transparent sourcing</h3>
              <p>
                Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed.
              </p>
            </div>
            <div className="feature">
              <div className="feature-badge">Care</div>
              <h3>Responsive support</h3>
              <p>
                Friendly, prompt help from real people for sizing, care, and post-purchase questions.
              </p>
            </div>
            <div className="feature">
              <div className="feature-badge">Value</div>
              <h3>Fair pricing</h3>
              <p>
                Essentials priced for everyday use without compromising on materials or finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Customers Say</h2>
          <div className="testimonials">
            <blockquote className="quote">
              “The fabric quality is excellent and the fit stays consistent after washes. Great staples.”
              <footer>— A. Perera</footer>
            </blockquote>
            <blockquote className="quote">
              “Support was quick to help with sizing. Delivery was on time and packaging was neat.”
              <footer>— S. Fernando</footer>
            </blockquote>
            <blockquote className="quote">
              “Clean design and no loud branding. Exactly what I wanted for daily wear.”
              <footer>— N. Jayasuriya</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Special Offers / Highlights */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Special Highlights</h2>
          <div className="cards three">
            <div className="promo-card">
              <h3>Seasonal Edit</h3>
              <p>Limited colorways and refreshed textures—perfect for the current season.</p>
              <Link to="/shop" className="btn btn-link">Explore</Link>
            </div>
            <div className="promo-card">
              <h3>Bundle Savings</h3>
              <p>Save on curated combos like tee + cap or backpack + organizer.</p>
              <Link to="/shop" className="btn btn-link">View Bundles</Link>
            </div>
            <div className="promo-card">
              <h3>Student Perks</h3>
              <p>Verified students enjoy an extra 10% off select collections.</p>
              <Link to="/shop" className="btn btn-link">Check Eligibility</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Returns */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Delivery & Returns</h2>
          <div className="grid-3">
            <div className="mini-feature">
              <h3>Fast Dispatch</h3>
              <p>Orders ship within 1–2 business days with tracked delivery.</p>
            </div>
            <div className="mini-feature">
              <h3>Easy Returns</h3>
              <p>30-day returns on unused items in original condition and packaging.</p>
            </div>
            <div className="mini-feature">
              <h3>Care Guides</h3>
              <p>Simple wash and storage instructions included with every order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Contact Info</h2>
          <div className="contact">
            <div>
              <p>Email: support@yourstore.com</p>
              <p>Phone: +94 11 234 5678</p>
              <p>Hours: Mon–Fri, 9:00–17:00</p>
            </div>
            <div>
              <p>Address: 123 Market Street, Colombo</p>
              <p>Instagram: @yourstore</p>
              <p>Facebook: /yourstore</p>
            </div>
          </div>
          <div className="contact-cta">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/shop" className="btn btn-ghost">Browse Collections</Link>
          </div>
        </div>
      </section>

      {/* Inline styles: keeps component self-contained. Move to CSS files as preferred. */}
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
        *{box-sizing:border-box}
        body{background:var(--bg); color:var(--text)}
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,48px);line-height:1.1;margin:0 0 12px}
        .subhead{color:var(--muted);font-size:clamp(16px,2.2vw,18px)}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 16px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .btn-link{background:transparent;border:none;color:var(--brand);padding:0}
        .hero{padding:64px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 50%)}
        .hero-inner{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center}
        .hero-images{display:grid;gap:14px}
        .hero-images img{width:100%;height:280px;object-fit:cover;border-radius:14px;border:1px solid var(--line);background:var(--card)}
        .hero-ctas{display:flex;gap:12px;margin-top:16px}
        .section{padding:56px 0;border-top:1px solid var(--line)}
        .section.alt{background:var(--surface)}
        .section-title{margin:0 0 16px;font-size:24px}
        .lead{color:var(--muted);margin:0 0 18px;max-width:70ch}
        .bullets{margin:0;padding:0 0 0 18px;color:var(--text)}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .cards.three{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .info-card,.promo-card,.feature,.mini-feature{border:1px solid var(--line);background:var(--card);padding:16px;border-radius:12px}
        .feature-badge{display:inline-block;font-size:12px;padding:4px 8px;border-radius:999px;background:var(--surface-alt);border:1px solid var(--line);color:var(--muted);margin-bottom:8px}
        .testimonials{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
        .quote{margin:0;border:1px solid var(--line);background:var(--card);padding:16px;border-radius:12px;color:var(--muted);font-style:italic}
        .quote footer{margin-top:10px;color:var(--text);font-style:normal}
        .contact{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:8px 0 18px}
        .contact-cta{display:flex;gap:12px}
        @media (max-width:900px){
          .hero-inner{grid-template-columns:1fr}
          .grid-2,.grid-3,.cards.three,.testimonials,.contact{grid-template-columns:1fr}
          .hero-images img{height:220px}
        }
      `}</style>
    </>
  )
}
