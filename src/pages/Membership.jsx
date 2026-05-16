import './PageTemplate.css'

function Membership() {
  const tiers = [
    {
      name: 'Individual',
      price: '$75/year',
      benefits: ['Unlimited visits', 'Free guest passes (2)', 'Member events', '10% shop discount']
    },
    {
      name: 'Family',
      price: '$125/year',
      benefits: ['Unlimited visits for 4', 'Free guest passes (4)', 'Family events', '15% shop discount']
    },
    {
      name: 'Supporter',
      price: '$250/year',
      benefits: ['Everything in Family', 'Priority event access', 'Exclusive tours', 'Recognition in newsletter']
    }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Become a Member</h1>
        <p>Support the garden and enjoy exclusive benefits</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            {tiers.map((tier, idx) => (
              <div key={idx} className="grid-item" style={{ border: idx === 1 ? '2px solid #5B8E7D' : '1px solid rgba(92, 142, 125, 0.15)' }}>
                {idx === 1 && <span style={{ color: '#5B8E7D', fontWeight: '600', fontSize: '0.85rem' }}>MOST POPULAR</span>}
                <h3 style={{ marginBottom: '0.5rem' }}>{tier.name}</h3>
                <p style={{ fontSize: '1.5rem', color: '#5B8E7D', fontWeight: '600', marginBottom: '1.5rem' }}>{tier.price}</p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {tier.benefits.map((benefit, bidx) => (
                    <li key={bidx} style={{ marginBottom: '0.75rem', color: '#5B8E7D' }}>✓ {benefit}</li>
                  ))}
                </ul>
                <button className="btn-primary" style={{width: '100%'}}>Join Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Membership
