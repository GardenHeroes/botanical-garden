import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Gardens() {
  const { language } = useLanguage()
  const t = translations[language]

  const gardensData = [
    { key: 'oriental', icon: '🧘' },
    { key: 'desert', icon: '🌵' },
    { key: 'foodForest', icon: '🌳' },
    { key: 'pharmacy', icon: '🌿' },
    { key: 'maya', icon: '🏛️' },
    { key: 'pollinators', icon: '🦋' },
    { key: 'orchids', icon: '🌸' },
    { key: 'onsen', icon: '♨️' },
    { key: 'bamboo', icon: '🎋' }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.gardens.title}</h1>
        <p>{t.gardens.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="gardens-grid">
            {gardensData.map(garden => (
              <div key={garden.key} className="garden-card">
                <div className="garden-icon">{garden.icon}</div>
                <h3>{t.gardens[`${garden.key}`]}</h3>
                <p>{t.gardens[`${garden.key}Desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gardens
