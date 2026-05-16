import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Wellness() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.wellness.title}</h1>
        <p>{t.wellness.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            <div className="grid-item wellness-card">
              <h3>🧘‍♀️ {t.wellness.yoga}</h3>
              <p>{t.wellness.yogaDesc}</p>
              <p className="highlight">Daily classes in different garden settings</p>
            </div>
            <div className="grid-item wellness-card">
              <h3>💪 {t.wellness.pilates}</h3>
              <p>{t.wellness.pilatesDesc}</p>
              <p className="highlight">Outdoor training with nature views</p>
            </div>
            <div className="grid-item wellness-card">
              <h3>🧘 {t.wellness.meditation}</h3>
              <p>{t.wellness.meditationDesc}</p>
              <p className="highlight">Guided sessions in peaceful garden spaces</p>
            </div>
            <div className="grid-item wellness-card">
              <h3>✨ {t.wellness.spa}</h3>
              <p>{t.wellness.spaDesc}</p>
              <p className="highlight">Create your personalized wellness journey</p>
            </div>
          </div>

          <div className="team-section">
            <h2>Why Wellness at Our Garden?</h2>
            <p>Connect with nature's healing energy. Our garden environments are designed to promote relaxation, mindfulness, and physical wellbeing. Every activity is infused with the philosophy of harmony between body, mind, and nature.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wellness
