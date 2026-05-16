import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const collections = [
    {
      id: 1,
      name: 'Tropical House',
      description: 'Lush rainforest plants in a controlled climate environment.',
      image: 'https://picsum.photos/400/300?random=1'
    },
    {
      id: 2,
      name: 'Native Plants',
      description: 'Local species adapted to our climate and ecosystem.',
      image: 'https://picsum.photos/400/300?random=2'
    },
    {
      id: 3,
      name: 'Desert Succulents',
      description: 'Drought-resistant plants from arid climates.',
      image: 'https://picsum.photos/400/300?random=3'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Discover Nature's Beauty</h1>
              <p className="hero-subtitle">Explore our living collections and seasonal discoveries</p>
              <div className="hero-ctas">
                <Link to="/" className="btn-primary">Get Tickets Now</Link>
                <Link to="/plants" className="btn-secondary">Explore Our Plants</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://picsum.photos/500/400?random=hero" alt="Botanical garden greenhouse" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section featured-collections">
        <div className="container">
          <h2>What's Blooming Now</h2>
          <div className="collections-grid">
            {collections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="card-image">
                  <img src={collection.image} alt={collection.name} />
                </div>
                <div className="card-content">
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                  <Link to="/plants" className="card-link">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated on Seasonal Blooms</h2>
            <p>Get plant care tips and garden news delivered monthly</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
