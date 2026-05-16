import './PageTemplate.css'

function About() {
  return (
    <div className="page">
      <section className="hero-section">
        <h1>About Our Garden</h1>
        <p>Discover the story behind our botanical oasis</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Our Mission</h2>
              <p>To cultivate a thriving botanical space that inspires discovery, fosters learning, and celebrates the diversity of plant life. We believe in the transformative power of nature and its importance in building a sustainable future.</p>
            </div>
            <div>
              <h2>Our History</h2>
              <p>Founded in 1985, our botanical garden has grown from a modest local initiative to a renowned destination attracting thousands of visitors annually. Our collection spans over 5,000 plant species from around the world.</p>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <p>Dedicated botanists, horticulturists, and educators working together to protect and showcase plant diversity.</p>
          </div>

          <div className="conservation-section">
            <h2>Conservation Efforts</h2>
            <p>We partner with global conservation organizations to protect endangered plant species and support sustainable agricultural practices worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
