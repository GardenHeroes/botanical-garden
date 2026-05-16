import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Restaurant() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.restaurant.title}</h1>
        <p>{t.restaurant.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>{t.restaurant.concept}</h2>
              <p>{t.restaurant.conceptText}</p>
            </div>
          </div>

          <div className="team-section">
            <h2>{t.restaurant.menu}</h2>
            <div className="menu-grid">
              <div className="menu-item">
                <h4>🥤 {t.restaurant.beverages}</h4>
                <p>Smoothies, herbal infusions, fresh juices</p>
              </div>
              <div className="menu-item">
                <h4>🥗 {t.restaurant.salads}</h4>
                <p>Fresh greens from our gardens daily</p>
              </div>
              <div className="menu-item">
                <h4>🍄 {t.restaurant.mushrooms}</h4>
                <p>Cultivated in-situ, farm fresh</p>
              </div>
              <div className="menu-item">
                <h4>🍎 {t.restaurant.fruits}</h4>
                <p>From our orchards to your plate</p>
              </div>
              <div className="menu-item">
                <h4>🍽️ {t.restaurant.mains}</h4>
                <p>Prepared with garden ingredients</p>
              </div>
              <div className="menu-item">
                <h4>🍰 {t.restaurant.desserts}</h4>
                <p>Sweet treats from our harvest</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>{t.restaurant.features}</h2>
            <ul className="features-list">
              <li>✓ {t.restaurant.feature1}</li>
              <li>✓ {t.restaurant.feature2}</li>
              <li>✓ {t.restaurant.feature3}</li>
              <li>✓ {t.restaurant.feature4}</li>
            </ul>
          </div>

          <div className="team-section">
            <h2>{t.restaurant.operations}</h2>
            <p><strong>{t.restaurant.breakfast}</strong> • {t.restaurant.lunch}</p>
            <p>{t.restaurant.reservations}</p>
            <p>{t.restaurant.catering}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Restaurant
