import { useState } from 'react'
import './PageTemplate.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
