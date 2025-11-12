import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Home() {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true)
  }, [])

  return (
    <>
      {/* Epic Animated Background */}
      <div className="page-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
        <div className="grid-overlay"></div>
        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="star" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Hero / Welcome Banner - FIXED VERSION */}
      <section className={`hero ${mounted ? 'animate-in' : ''}`}>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Welcome to Own Setup
            </div>
            <p className="kicker">WELCOME TO</p>
            <h1 className="headline">Everyday Essentials, Thoughtfully Made</h1>
            <p className="subhead">
              Curated apparel and accessories crafted for comfort, durability, and timeless style.
            </p>
            {!user ? (
              <div className="hero-ctas">
                <Link to="/login" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                  Login to Shop
                </Link>
                <Link to="/register" className="btn btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                  Register
                </Link>
              </div>
            ) : (
              <div className="hero-ctas">
                <Link to="/about" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  Learn More
                </Link>
                <Link to="/shop" className="btn btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  Visit Shop
                </Link>
              </div>
            )}
          </div>
          <div className="hero-images">
            <div className="image-wrapper img-1">
              <img
                src="/images/hero-1.jpg"
                alt="Lifestyle banner"
              />
              <div className="image-shine"></div>
            </div>
            <div className="image-wrapper img-2">
              <img
                src="/images/hero-2.jpg"
                alt="Crafted details"
              />
              <div className="image-shine"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Prompt Banner for Non-Authenticated Users */}
      {!user && (
        <section className={`login-prompt ${mounted ? 'animate-in' : ''}`}>
          <div className="container">
            <div className="prompt-content">
              <div className="prompt-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h2>🔐 Want to See More?</h2>
              <p>
                Login or create an account to explore our full collections, view features, and start shopping!
              </p>
              <div className="prompt-actions">
                <Link to="/login" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                  Login Now
                </Link>
                <Link to="/register" className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All sections below - Only show for authenticated users */}
      {user && (
        <>
          {/* About Us */}
          <section className={`section alt ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  About Us
                </h2>
                <div className="title-underline"></div>
              </div>
              <p className="lead">
                We're a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance.
                Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care.
              </p>
              <div className="cards three">
                <div className="info-card">
                  <div className="card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3>What we do</h3>
                  <p>
                    From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use.
                  </p>
                </div>
                <div className="info-card">
                  <div className="card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <h3>How we work</h3>
                  <p>
                    Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what's delivered.
                  </p>
                </div>
                <div className="info-card">
                  <div className="card-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Our promise</h3>
                  <p>
                    Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className={`section ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                  Our Mission
                </h2>
                <div className="title-underline"></div>
              </div>
              <p className="lead">
                Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends.
              </p>
              <ul className="bullets">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Material-first design choices with soft-hand, responsibly sourced textiles.
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Timeless palettes and silhouettes that pair across wardrobes.
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Continuous improvements guided by real customer feedback.
                </li>
              </ul>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className={`section alt ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Why Choose Us
                </h2>
                <div className="title-underline"></div>
              </div>
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
          <section className={`section ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  What Customers Say
                </h2>
                <div className="title-underline"></div>
              </div>
              <div className="testimonials">
                <blockquote className="quote">
                  <div className="quote-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"The fabric quality is excellent and the fit stays consistent after washes. Great staples."</p>
                  <footer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    A. Perera
                  </footer>
                </blockquote>
                <blockquote className="quote">
                  <div className="quote-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"Support was quick to help with sizing. Delivery was on time and packaging was neat."</p>
                  <footer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    S. Fernando
                  </footer>
                </blockquote>
                <blockquote className="quote">
                  <div className="quote-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"Clean design and no loud branding. Exactly what I wanted for daily wear."</p>
                  <footer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    N. Jayasuriya
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Special Offers / Highlights */}
          <section className={`section alt ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Special Highlights
                </h2>
                <div className="title-underline"></div>
              </div>
              <div className="cards three">
                <div className="promo-card">
                  <div className="promo-icon">🌟</div>
                  <h3>Seasonal Edit</h3>
                  <p>Limited colorways and refreshed textures—perfect for the current season.</p>
                  <Link to="/shop" className="btn btn-link">
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Link>
                </div>
                <div className="promo-card">
                  <div className="promo-icon">💰</div>
                  <h3>Bundle Savings</h3>
                  <p>Save on curated combos like tee + cap or backpack + organizer.</p>
                  <Link to="/shop" className="btn btn-link">
                    View Bundles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Link>
                </div>
                <div className="promo-card">
                  <div className="promo-icon">🎓</div>
                  <h3>Student Perks</h3>
                  <p>Verified students enjoy an extra 10% off select collections.</p>
                  <Link to="/shop" className="btn btn-link">
                    Check Eligibility
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery & Returns */}
          <section className={`section ${mounted ? 'animate-in' : ''}`}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  Delivery & Returns
                </h2>
                <div className="title-underline"></div>
              </div>
              <div className="grid-3">
                <div className="mini-feature">
                  <div className="mini-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  </div>
                  <h3>Fast Dispatch</h3>
                  <p>Orders ship within 1–2 business days with tracked delivery.</p>
                </div>
                <div className="mini-feature">
                  <div className="mini-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="1 4 1 10 7 10"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h3>Easy Returns</h3>
                  <p>30-day returns on unused items in original condition and packaging.</p>
                </div>
                <div className="mini-feature">
                  <div className="mini-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <h3>Care Guides</h3>
                  <p>Simple wash and storage instructions included with every order.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FIXED STYLES */}
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
        
        *{box-sizing:border-box}
        
        body{
          background:var(--bg);
          color:var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           EPIC ANIMATED BACKGROUND
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
          filter: blur(120px);
          opacity: 0.2;
          animation: float 25s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -300px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: -200px;
          right: -150px;
          animation-delay: -8s;
        }
        
        .orb-3 {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          top: 40%;
          left: 60%;
          animation-delay: -16s;
        }
        
        .orb-4 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
          top: 60%;
          right: 70%;
          animation-delay: -12s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100px, -100px) scale(1.1);
          }
          50% {
            transform: translate(-50px, 50px) scale(0.9);
          }
          75% {
            transform: translate(50px, 100px) scale(1.05);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(109, 116, 255, 0.5);
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        /* ========================================
           HERO ENTRANCE ANIMATIONS
           ======================================== */
        
        .hero {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero.animate-in .hero-badge {
          animation: badgeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        @keyframes badgeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero.animate-in .kicker {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .hero.animate-in .headline {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .hero.animate-in .subhead {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .hero.animate-in .hero-ctas {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero.animate-in .image-wrapper {
          animation: imageZoomIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        .hero.animate-in .img-1 {
          animation-delay: 0.5s;
        }
        
        .hero.animate-in .img-2 {
          animation-delay: 0.7s;
        }
        
        @keyframes imageZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .login-prompt {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.8s;
        }
        
        .login-prompt.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section.animate-in .info-card,
        .section.animate-in .promo-card,
        .section.animate-in .feature,
        .section.animate-in .mini-feature,
        .section.animate-in .quote {
          opacity: 0;
          transform: translateY(20px);
          animation: cardSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .section.animate-in .info-card:nth-child(1),
        .section.animate-in .promo-card:nth-child(1),
        .section.animate-in .feature:nth-child(1),
        .section.animate-in .mini-feature:nth-child(1),
        .section.animate-in .quote:nth-child(1) { animation-delay: 0.1s; }
        
        .section.animate-in .info-card:nth-child(2),
        .section.animate-in .promo-card:nth-child(2),
        .section.animate-in .feature:nth-child(2),
        .section.animate-in .mini-feature:nth-child(2),
        .section.animate-in .quote:nth-child(2) { animation-delay: 0.2s; }
        
        .section.animate-in .info-card:nth-child(3),
        .section.animate-in .promo-card:nth-child(3),
        .section.animate-in .feature:nth-child(3),
        .section.animate-in .mini-feature:nth-child(3),
        .section.animate-in .quote:nth-child(3) { animation-delay: 0.3s; }
        
        .section.animate-in .info-card:nth-child(4),
        .section.animate-in .feature:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ========================================
           CONTAINER & LAYOUT
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        /* ========================================
           HERO SECTION - COMPLETELY REDESIGNED
           ======================================== */
        
        .hero{
          padding:100px 0 80px;
          position: relative;
          background: transparent;
        }
        
        .hero-inner{
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:60px;
          align-items:center;
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
          margin-bottom: 20px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(109, 116, 255, 0.4);
          }
        }
        
        .kicker{
          letter-spacing:.25em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 16px;
          font-size: 13px;
        }
        
        .headline{
          font-size:clamp(36px,5.5vw,64px);
          line-height:1.1;
          margin:0 0 24px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -2px;
        }
        
        .subhead{
          color:var(--muted);
          font-size:clamp(17px,2.2vw,20px);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        
        .hero-ctas{
          display:flex;
          gap:16px;
        }
        
        .hero-images{
          display:grid;
          gap:24px;
        }
        
        .image-wrapper {
          position: relative;
          border-radius:20px;
          overflow: hidden;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .hero-images img{
          width:100%;
          height:350px;
          object-fit:cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .image-wrapper:hover img {
          transform: scale(1.05);
        }
        
        .image-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .image-wrapper:hover .image-shine {
          left: 100%;
        }
        
        /* ========================================
           LOGIN PROMPT - REDESIGNED
           ======================================== */
        
        .login-prompt {
          padding: 60px 0;
          background: rgba(18, 18, 22, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(109, 116, 255, 0.2);
          border-bottom: 1px solid rgba(109, 116, 255, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .prompt-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .prompt-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(109, 116, 255, 0.1);
          border: 2px solid rgba(109, 116, 255, 0.3);
          border-radius: 50%;
          color: var(--brand);
          margin-bottom: 24px;
          animation: iconPulse 2s ease-in-out infinite;
        }
        
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(109, 116, 255, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(109, 116, 255, 0);
          }
        }
        
        .login-prompt h2 {
          font-size: 32px;
          margin: 0 0 16px 0;
          color: var(--text);
        }
        
        .login-prompt p {
          font-size: 18px;
          color: var(--muted);
          margin: 0 0 32px 0;
          line-height: 1.7;
        }
        
        .prompt-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          gap:10px;
          border-radius:12px;
          padding:14px 24px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
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
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-ghost:hover {
          background: rgba(35, 36, 52, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-secondary:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .btn-link{
          background:transparent;
          border:none;
          color:var(--brand);
          padding:8px 0;
          font-size: 14px;
        }
        
        .btn-link:hover {
          color: var(--brand-600);
        }
        
        /* ========================================
           SECTION STYLES
           ======================================== */
        
        .section{
          padding:80px 0;
          border-top:1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        
        .section.alt{
          background: rgba(18, 18, 22, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .section-header {
          margin-bottom: 40px;
        }
        
        .section-title{
          margin:0 0 12px;
          font-size:32px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
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
        
        .lead{
          color:var(--muted);
          margin:0 0 32px;
          max-width:70ch;
          font-size: 18px;
          line-height: 1.7;
        }
        
        .bullets{
          margin:0;
          padding:0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.6;
        }
        
        .bullets li svg {
          color: var(--positive);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        /* ========================================
           GRID LAYOUTS
           ======================================== */
        
        .grid-2{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:24px;
        }
        
        .grid-3{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        .cards.three{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        /* ========================================
           CARD STYLES
           ======================================== */
        
        .info-card,.promo-card,.feature,.mini-feature{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding:32px;
          border-radius:16px;
          transition: all 0.3s;
        }
        
        .info-card:hover, .promo-card:hover, .feature:hover, .mini-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .card-icon {
          width: 64px;
          height: 64px;
          background: rgba(109, 116, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin-bottom: 20px;
        }
        
        .info-card h3, .promo-card h3, .feature h3, .mini-feature h3 {
          margin: 0 0 12px 0;
          font-size: 20px;
        }
        
        .info-card p, .promo-card p, .feature p, .mini-feature p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 16px 0;
        }
        
        .feature-badge{
          display:inline-block;
          font-size:12px;
          padding:6px 12px;
          border-radius:999px;
          background: rgba(109, 116, 255, 0.1);
          border:1px solid rgba(109, 116, 255, 0.3);
          color:var(--brand);
          margin-bottom:12px;
          font-weight: 600;
        }
        
        .promo-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .mini-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 116, 255, 0.05));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin: 0 auto 20px;
        }
        
        /* ========================================
           TESTIMONIALS
           ======================================== */
        
        .testimonials{
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          gap:24px;
        }
        
        .quote{
          margin:0;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding:32px;
          border-radius:16px;
          color:var(--muted);
          position: relative;
          transition: all 0.3s;
        }
        
        .quote:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .quote-icon {
          color: rgba(109, 116, 255, 0.3);
          margin-bottom: 16px;
        }
        
        .quote p {
          font-style: italic;
          line-height: 1.7;
          margin: 0 0 16px 0;
        }
        
        .quote footer{
          margin-top:16px;
          color:var(--text);
          font-style:normal;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .quote footer svg {
          color: var(--brand);
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .hero-inner{
            grid-template-columns:1fr;
            gap: 40px;
          }
          
          .grid-2,.grid-3,.cards.three,.testimonials{
            grid-template-columns:1fr;
          }
          
          .hero-images img{
            height:280px;
          }
          
          .hero {
            padding: 80px 0 60px;
          }
          
          .section {
            padding: 60px 0;
          }
          
          .headline {
            font-size: 40px;
          }
        }
      `}</style>
    </>
  )
}
