import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Activities() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.activities.title}</h1>
        <p>{t.activities.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="team-section">
            <h2>📚 {t.activities.workshops}</h2>
            <div className="grid-items">
              <div className="grid-item">
                <h3>{t.activities.workshop1}</h3>
                <p>Intensive course on home permaculture principles</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop2}</h3>
                <p>Build sustainable garden furniture and structures</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop3}</h3>
                <p>Learn composting and biofuel production</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop4}</h3>
                <p>Community seed exchange and preservation</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop5}</h3>
                <p>Family adventure through the gardens</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop6}</h3>
                <p>Creative art activity for children</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.workshop7}</h3>
                <p>Learn to prepare dishes with garden ingredients</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>🎫 {t.activities.guides}</h2>
            <div className="grid-items">
              <div className="grid-item">
                <h3>{t.activities.tour1}</h3>
                <p>Explore each garden with expert guidance</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.tour2}</h3>
                <p>Garden tour combined with farm-to-table dining</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.tour3}</h3>
                <p>Customized educational experiences for schools</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.tour4}</h3>
                <p>Interactive activities for all ages</p>
              </div>
              <div className="grid-item">
                <h3>{t.activities.tour5}</h3>
                <p>Team building and corporate retreat experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities
