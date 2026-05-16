import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Visit() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{t.visit.title}</h1>
        <p>{t.visit.subtitle}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="alert-box">
            <h3>📌 {t.visit.status}</h3>
            <p>{t.visit.appointment}</p>
          </div>

          <div className="content-grid">
            <div>
              <h2>{t.visit.location}</h2>
              <p>{t.visit.address}</p>
            </div>
            <div>
              <h2>{t.visit.hours}</h2>
              <p>{t.visit.contact}</p>
            </div>
          </div>

          <div className="team-section">
            <h2>{t.visit.amenities}</h2>
            <ul className="features-list">
              <li>✓ {t.visit.amenity1}</li>
              <li>✓ {t.visit.amenity2}</li>
              <li>✓ {t.visit.amenity3}</li>
              <li>✓ {t.visit.amenity4}</li>
              <li>✓ {t.visit.amenity5}</li>
            </ul>
          </div>

          <div className="team-section booking-section">
            <h2>Book Your Visit</h2>
            <p>Use the calendar below to schedule your immersive experience at Jardín Botánico de 5 Colores. All visits include welcome breakfast and 24-hour garden access.</p>
            <div className="cal-com-container">
              <iframe
                src="https://cal.com/embed?calLink=YOUR_CAL_LINK"
                style={{
                  width: '100%',
                  height: '500px',
                  border: '1px solid var(--border-whisper)',
                  borderRadius: '12px',
                  marginTop: '2rem'
                }}
                frameBorder="0"
                title="Booking Calendar"
              ></iframe>
            </div>
            <p style={{ marginTop: '1.5rem', color: 'var(--taupe)', fontSize: '0.9rem' }}>
              Replace "YOUR_CAL_LINK" with your actual Cal.com calendar link in the iframe src attribute.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Visit
