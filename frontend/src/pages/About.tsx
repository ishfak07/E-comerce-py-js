import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container hero-inner">
          <div>
            <p className="kicker">About Us</p>
            <h1 className="headline">Design-led essentials, made to last</h1>
            <p className="subhead">
              Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/shop" className="btn btn-ghost">Browse Collections</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="lead">
            Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time.
            We partner with trusted makers and keep batches small, so attention to detail never slips.
          </p>
          <div className="timeline">
            <div className="tl-item">
              <div className="dot" />
              <div>
                <h3>Where it began</h3>
                <p>Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="dot" />
              <div>
                <h3>Finding our partners</h3>
                <p>We sourced mills and workshops that matched our standards for consistency and fair practices.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="dot" />
              <div>
                <h3>Refining the craft</h3>
                <p>With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Mission & Values</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Mission</h3>
              <p>Make everyday dressing simpler through reliable, comfortable essentials that blend form and function.</p>
            </div>
            <div className="card">
              <h3>Quality</h3>
              <p>From reinforced seams to color-fast dyes, we design beyond the first wear and wash.</p>
            </div>
            <div className="card">
              <h3>Trust</h3>
              <p>Clear specs, honest descriptions, and responsive support keep decisions easy and informed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Craft */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Sustainability & Craft</h2>
          <div className="grid-2">
            <div className="info">
              <h3>Responsible choices</h3>
              <p>
                We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high.
              </p>
              <ul className="bullets">
                <li>Material-first selection with long-life wear in mind.</li>
                <li>Repair-friendly construction and care guides.</li>
                <li>Continuous iteration based on real-world use.</li>
              </ul>
            </div>
            <div className="info">
              <h3>Attention to detail</h3>
              <p>
                Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation.
              </p>
              <ul className="bullets">
                <li>Reinforced stress points and reliable hardware.</li>
                <li>Neutral palettes for effortless pairing.</li>
                <li>Consistent measurements for repeat buys.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Customer Promise</h2>
          <div className="grid-3">
            <div className="mini-feature">
              <h3>30-Day Returns</h3>
              <p>Hassle-free returns on unused items in original condition within 30 days.</p>
            </div>
            <div className="mini-feature">
              <h3>Fast Support</h3>
              <p>Friendly assistance with sizing, care, and orders via chat or email.</p>
            </div>
            <div className="mini-feature">
              <h3>Honest Pricing</h3>
              <p>Fair prices without inflated markups—value built into each piece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Snapshot */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="grid-3">
            <div className="person">
              <div className="avatar" />
              <div>
                <h3>Design Lead</h3>
                <p>Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity.</p>
              </div>
            </div>
            <div className="person">
              <div className="avatar" />
              <div>
                <h3>Production</h3>
                <p>Oversees sourcing, QC, and small-batch timelines to maintain consistency.</p>
              </div>
            </div>
            <div className="person">
              <div className="avatar" />
              <div>
                <h3>Care & Support</h3>
                <p>Helps with sizing, exchanges, and care tips to keep favorites in rotation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">FAQs</h2>
          <div className="faq">
            <details>
              <summary>What sizes do you carry?</summary>
              <p>Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages.</p>
            </details>
            <details>
              <summary>How do returns work?</summary>
              <p>Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps.</p>
            </details>
            <details>
              <summary>Do you ship internationally?</summary>
              <p>Yes, with tracked delivery options at checkout. Timelines vary by destination.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section alt">
        <div className="container contact-cta">
          <div>
            <h2 className="section-title">Get in touch</h2>
            <p className="lead">Questions about sizing, care, or orders? The team is ready to help.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Support</Link>
            <Link to="/shop" className="btn btn-ghost">Explore the Shop</Link>
          </div>
        </div>
      </section>

      {/* Inline Styles for consistency with the rest of the app */}
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
        .about-hero{padding:56px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;flex-direction:column;gap:12px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,46px);line-height:1.1;margin:0 0 10px}
        .subhead{color:var(--muted);font-size:clamp(16px,2.2vw,18px)}
        .hero-ctas{display:flex;gap:12px;margin-top:16px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 16px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .section{padding:48px 0;border-top:1px solid var(--line)}
        .section.alt{background:var(--surface)}
        .section-title{margin:0 0 14px;font-size:24px}
        .lead{color:var(--muted);margin:0 0 18px;max-width:70ch}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .card{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .info{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .bullets{margin:8px 0 0; padding-left:18px}
        .mini-feature{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .timeline{display:grid;gap:14px;margin-top:8px}
        .tl-item{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start}
        .tl-item .dot{width:10px;height:10px;border-radius:50%;background:var(--brand);margin-top:8px}
        .person{display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:center;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg, var(--surface-alt), var(--card));border:1px solid var(--line)}
        .faq details{border:1px solid var(--line);background:var(--card);border-radius:10px;padding:12px}
        .faq details + details{margin-top:10px}
        .contact-cta{display:flex;justify-content:space-between;align-items:center;gap:16px}
        .cta-buttons{display:flex;gap:12px}
        @media (max-width:900px){
          .grid-2,.grid-3{grid-template-columns:1fr}
          .contact-cta{flex-direction:column;align-items:flex-start}
        }
      `}</style>
    </>
  )
}
