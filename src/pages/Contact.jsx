import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'
import './PageTemplate.css'

function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(language === 'en' ? 'Thank you for contacting us!' : '¡Gracias por contactarnos!')
    setFormData({ name: '', email: '', message: '' })
  }

  const labels = {
    en: { name: 'Name', email: 'Email', message: 'Message', send: 'Send Message' },
    es: { name: 'Nombre', email: 'Correo Electrónico', message: 'Mensaje', send: 'Enviar Mensaje' }
  }

  const label = labels[language]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>{language === 'en' ? 'Contact Us' : 'Contacto'}</h1>
        <p>{language === 'en' ? "We'd love to hear from you" : 'Nos encantaría saber de ti'}</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{label.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>{label.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>{label.message}</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%'}}>{label.send}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
