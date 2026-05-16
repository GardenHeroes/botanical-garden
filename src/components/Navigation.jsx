import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './Navigation.css'

function Navigation() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            🌿 Jardín Botánico de 5 Colores
          </Link>
          <nav className="nav-links">
            <Link to="/about">{t.nav.about}</Link>
            <Link to="/gardens">{t.nav.gardens}</Link>
            <Link to="/restaurant">{t.nav.restaurant}</Link>
            <Link to="/activities">{t.nav.activities}</Link>
            <Link to="/wellness">{t.nav.wellness}</Link>
            <Link to="/sustainability">{t.nav.sustainability}</Link>
            <Link to="/visit">{t.nav.visit}</Link>
            <Link to="/contact">{t.nav.contact}</Link>
          </nav>
          <div className="nav-right">
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <Link to="/visit" className="btn-primary btn-tickets">
              {t.nav.bookVisit}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
