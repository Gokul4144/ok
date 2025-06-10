import Layout from '@/components/Layout';

const team = [
  { name: 'Emily Rose', role: 'Founder & Skincare Expert', image: '/images/emily.jpg' },
  { name: 'Liam Patel', role: 'Chief Scientist', image: '/images/liam.jpg' },
];

export default function About() {
  return (
    <Layout title="GlowEssence | About">
      
      <section className="about-hero">
        <h1>About GlowEssence</h1>
        <p>
          At GlowEssence, we believe skincare should be clean, conscious, and empowering. Our mission is to bring natural, science-backed skincare to every home.
        </p>
      </section>

      <section className="content-section about-story">
        <h2>Our Journey</h2>
        <p>
          GlowEssence started with a simple goal: to create effective skincare without compromising on ethics or ingredients. What began as a home-blend experiment quickly turned into a trusted skincare brand loved by thousands.
        </p>
      </section>

      <section className="content-section about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Transparency:</strong> Full ingredient disclosure and research-backed formulations.</li>
          <li><strong>Sustainability:</strong> Eco-friendly packaging and cruelty-free products.</li>
          <li><strong>Inclusivity:</strong> Products formulated for every skin tone and type.</li>
        </ul>
      </section>

      <section className="content-section about-team">
        <h2>Meet the Founders</h2>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-member">
              <img src={m.image} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section about-impact">
        <h2>Our Impact</h2>
        <p>
          Since 2020, we've helped over 20,000 customers achieve healthy skin, diverted 5 tons of plastic through our recycling program, and maintained a 4.9/5 average rating.
        </p>
      </section>

    </Layout>
  );
}
