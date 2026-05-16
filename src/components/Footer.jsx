import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/gardens">{t.nav.gardens}</Link></li>
              <li><Link to="/restaurant">{t.nav.restaurant}</Link></li>
              <li><Link to="/activities">{t.nav.activities}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.footer.hours}</h4>
            <p>{t.footer.openByAppointment}</p>
            <p>Cozumel, Quintana Roo<br />México</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-underline">
              {language === 'en' ? 'Get Directions' : 'Obtener Indicaciones'} →
            </a>
          </div>
          <div className="footer-section">
            <h4>{t.footer.followUs}</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jardín Botánico de 5 Colores. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
