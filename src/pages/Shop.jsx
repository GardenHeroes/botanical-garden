import './PageTemplate.css'

function Shop() {
  const products = [
    { name: 'Potted Succulent', price: '$12' },
    { name: 'Botanical Tote Bag', price: '$18' },
    { name: 'Plant Care Guide', price: '$8' },
    { name: 'Garden Tool Set', price: '$35' },
    { name: 'Seed Collection', price: '$15' },
    { name: 'Botanical Art Print', price: '$25' }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Shop</h1>
        <p>Take home the beauty of our garden</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            {products.map((product, idx) => (
              <div key={idx} className="grid-item">
                <img src={`https://picsum.photos/200/200?random=${idx}`} alt={product.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
                <h3>{product.name}</h3>
                <p style={{ fontSize: '1.25rem', color: '#5B8E7D', fontWeight: '600', marginBottom: '1rem' }}>{product.price}</p>
                <button className="btn-primary" style={{width: '100%'}}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
