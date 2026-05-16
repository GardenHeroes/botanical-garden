import './PageTemplate.css'

function Plants() {
  const plants = [
    { name: 'Monstera Deliciosa', family: 'Tropical', climate: 'Warm' },
    { name: 'Fern Collection', family: 'Ferns', climate: 'Humid' },
    { name: 'Agave americana', family: 'Succulents', climate: 'Dry' },
    { name: 'Orchids', family: 'Orchidaceae', climate: 'Tropical' },
    { name: 'Cacti', family: 'Cactaceae', climate: 'Desert' },
    { name: 'Native Grasses', family: 'Poaceae', climate: 'Temperate' }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Plants & Collections</h1>
        <p>Explore our diverse plant collections from around the world</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            {plants.map((plant, idx) => (
              <div key={idx} className="grid-item">
                <h3>{plant.name}</h3>
                <p><strong>Family:</strong> {plant.family}</p>
                <p><strong>Climate:</strong> {plant.climate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Plants
