import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './Home.css'

function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  const gardens = [
    { name: t.gardens.oriental, icon: '🧘' },
    { name: t.gardens.desert, icon: '🌵' },
    { name: t.gardens.foodForest, icon: '🌳' },
    { name: t.gardens.pharmacy, icon: '🌿' },
    { name: t.gardens.maya, icon: '🏛️' },
    { name: t.gardens.pollinators, icon: '🦋' },
    { name: t.gardens.orchids, icon: '🌸' },
    { name: t.gardens.onsen, icon: '♨️' },
    { name: t.gardens.bamboo, icon: '🎋' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Jardín Botánico de 5 Colores</h1>
              <p className="hero-subtitle">{t.home.subtitle}</p>
              <p className="status-badge">{t.home.preOpening}</p>
              <div className="hero-ctas">
                <Link to="/visit" className="btn-primary">{t.home.cta1}</Link>
                <Link to="/gardens" className="btn-secondary">{t.home.cta2}</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://picsum.photos/500/400?random=hero" alt="Botanical garden" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gardens */}
      <section className="section featured-collections">
        <div className="container">
          <h2>{t.home.featuredTitle}</h2>
          <p className="section-subtitle">{t.home.featuredDesc}</p>
          <div className="gardens-preview">
            {gardens.slice(0, 6).map((garden, idx) => (
              <div key={idx} className="garden-preview">
                <div className="garden-preview-icon">{garden.icon}</div>
                <p>{garden.name}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/gardens" className="btn-primary">Explore All 9 Gardens</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for an Immersive Experience?</h2>
            <p>Book your visit to Jardín Botánico de 5 Colores and discover the magic of sustainable tourism and nature connection.</p>
            <Link to="/visit" className="btn-primary">Book Your Visit</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
