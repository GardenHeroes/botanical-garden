import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            🌿 Botanical Garden
          </Link>
          <nav className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/plants">Plants & Collections</Link>
            <Link to="/events">Events</Link>
            <Link to="/visit">Visit</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Link to="/" className="btn-primary btn-tickets">
            Buy Tickets
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation
