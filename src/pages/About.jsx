import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.about.title}</h1>
        <p>Ubicación: Cozumel, Quintana Roo, México</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>{t.about.mission}</h2>
              <p>{t.about.missionText}</p>
            </div>
            <div>
              <h2>{t.about.model}</h2>
              <p>{t.about.modelText}</p>
            </div>
          </div>

          <div className="team-section">
            <h2>{t.about.values}</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">📚</div>
                <p>{t.about.value1}</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <p>{t.about.value2}</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🏛️</div>
                <p>{t.about.value3}</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌿</div>
                <p>{t.about.value4}</p>
              </div>
            </div>
          </div>

          <div className="conservation-section">
            <h2>{t.about.audiences}</h2>
            <div className="audiences-list">
              <div className="audience">
                <h4>👨‍👩‍👧‍👦</h4>
                <p>{t.about.audience1}</p>
              </div>
              <div className="audience">
                <h4>🌍</h4>
                <p>{t.about.audience2}</p>
              </div>
              <div className="audience">
                <h4>🎓</h4>
                <p>{t.about.audience3}</p>
              </div>
              <div className="audience">
                <h4>💼</h4>
                <p>{t.about.audience4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
