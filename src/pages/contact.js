import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout title="GlowEssence | Contact">
      <section className="content-section">
        <h2>Contact Us</h2>
        <p>
          Have a question about your order, our products, or skincare in general?
          We’re here to help! Fill out the form below or reach out to us directly.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <p><strong>Email:</strong> support@glowessence.com</p>
          <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>Hours:</strong> Mon–Fri, 9AM–6PM IST</p>
        </div>
      </section>
    </Layout>
  );
}
