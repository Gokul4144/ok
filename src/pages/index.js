import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="GlowEssence | Home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Reveal Your Natural Glow with GlowEssence</h1>
          <p className="hero-subtitle">
            Clean, conscious skincare made for every skin type.
          </p>
          <div className="hero-logos">
            <img src="/images/BrandA.jpg" alt="Brand A" />
            <img src="/images/BrandB.jpg" alt="Brand B" />
            <img src="/images/BrandC.jpg" alt="Brand C" />
          </div>
          <div className="hero-cta">
            <button className="shop-now-btn">Shop Now</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <img src="/images/glowessence-logo.webp" alt="GlowEssence Logo" className="logo" />
        <video autoPlay muted loop className="full-video">
          <source src="/videos/skincare-promo.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="features-overview">
        <div className="feature-card">
          <h3>Hydration Boost</h3>
          <p>Lock in moisture with plant-based serums.</p>
        </div>
        <div className="feature-card">
          <h3>Vegan Formulas</h3>
          <p>100% cruelty-free and eco-conscious ingredients.</p>
        </div>
        <div className="feature-card">
          <h3>Dermatologist-Tested</h3>
          <p>Safe for sensitive skin, tested by experts.</p>
        </div>
      </section>

      <section className="product-preview">
        <h2>Best Sellers</h2>
        <div className="product-row">
          <div className="product-card">
            <img src="/images/serum.jpg" alt="Glow Serum" />
            <h4>Glow Boost Serum</h4>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/images/cleanser.jpg" alt="Foam Cleanser" />
            <h4>Gentle Foam Cleanser</h4>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/images/moisturizer.jpg" alt="Moisturizer" />
            <h4>Daily Hydrating Moisturizer</h4>
            <p>$24.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <blockquote>
          “GlowEssence made my skin feel brand new within weeks!”
          <footer>– Jenna L., Verified Customer</footer>
        </blockquote>
      </section>
    </Layout>
  );
}
