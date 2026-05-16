import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Sustainability() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.sustainability.title}</h1>
        <p>{t.sustainability.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            <div className="grid-item">
              <h3>💧 {t.sustainability.water}</h3>
              <p>{t.sustainability.waterDesc}</p>
            </div>
            <div className="grid-item">
              <h3>☀️ {t.sustainability.energy}</h3>
              <p>{t.sustainability.energyDesc}</p>
            </div>
            <div className="grid-item">
              <h3>🏗️ {t.sustainability.construction}</h3>
              <p>{t.sustainability.constructionDesc}</p>
            </div>
            <div className="grid-item">
              <h3>♻️ {t.sustainability.waste}</h3>
              <p>{t.sustainability.wasteDesc}</p>
            </div>
            <div className="grid-item">
              <h3>🌱 {t.sustainability.landscape}</h3>
              <p>{t.sustainability.landscapeDesc}</p>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Sustainability Commitment</h2>
            <p>Every aspect of Jardín Botánico de 5 Colores is designed with environmental regeneration in mind. From rainwater harvesting to zero-waste operations, we demonstrate that tourism and conservation can thrive together.</p>
            <p>We're committed to leaving the ecosystem healthier than we found it, creating a model for sustainable tourism that others can follow.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
