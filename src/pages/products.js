import Layout from '@/components/Layout';

const products = [
  { id: 1, name: "Hydrating Serum", price: "$29.99", image: "/images/serum.jpg" },
  { id: 2, name: "Daily Cleanser", price: "$19.99", image: "/images/cleanser.jpg" },
  { id: 3, name: "Night Cream", price: "$34.99", image: "/images/nightcream.jpg" },
];

export default function Products() {
  return (
    <Layout title="GlowEssence | Products">
      <section className="content-section">
        <h2>Our Skincare Collection</h2>
        <div className="card-grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="card-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
