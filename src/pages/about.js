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
          At GlowEssence, we believe skincare should be clean, conscious, and empowering. Our mission is to bring natural science-backed skincare to every home.
        </p>
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
    </Layout>
  );
}