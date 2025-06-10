import Layout from '@/components/Layout';
import SkinQuizAI from '@/components/SkinQuizAI';
import RoutineBuilder from '@/components/RoutineBuilder';
import ProductMatcher from '@/components/ProductMatcher';
import IngredientExplorer from '@/components/IngredientExplorer';

export default function Features() {
  return (
    <Layout title="GlowEssence | Features">
      
      <section className="features-hero">
        <h1>Glow Smarter with GlowEssence</h1>
        <p>Discover your ideal skincare regimen with smart tools, clean ingredients, and expert-crafted product lines—designed for every skin type.</p>
      </section>

      <section className="content-section">
        <h2>What Sets Us Apart</h2>
        <div className="feature-grid">
          <div className="feature-block">
            <h3>AI Skin Quiz</h3>
            <p>Identify your skin type and concerns with our quick skin quiz.</p>
          </div>
          <div className="feature-block">
            <h3>Routine Builder</h3>
            <p>Get a daily skincare routine tailored to your skin goals.</p>
          </div>
          <div className="feature-block">
            <h3>Product Matcher</h3>
            <p>Find the perfect GlowEssence product for your skin needs.</p>
          </div>
          <div className="feature-block">
            <h3>Ingredient Explorer</h3>
            <p>Learn about the clean, plant-based ingredients we use.</p>
          </div>
        </div>
      </section>

      <section className="interactive-demo">
        <h2>Try It Yourself</h2>
        <div className="demo-components">
          <SkinQuizAI />
          <RoutineBuilder />
          <ProductMatcher />
          <IngredientExplorer />
        </div>
      </section>

      <section className="testimonial-section">
        <blockquote>
          “GlowEssence helped me finally understand what my skin needs. My skin has never looked better!”
          <footer>— Maya R., Verified Customer</footer>
        </blockquote>
        <div className="trust-stats">
          <div><strong>10,000+</strong><br />Happy Customers</div>
          <div><strong>4.8 / 5</strong><br />Average Product Rating</div>
        </div>
      </section>
      
    </Layout>
  );
}
