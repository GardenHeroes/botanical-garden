import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/plants">Plants & Collections</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Hours & Location</h4>
            <p>Open Daily 9am–5pm<br />Closed Mondays</p>
            <p>123 Garden Lane<br />Botanical City, BC 12345</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-underline">
              Get Directions →
            </a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Botanical Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
