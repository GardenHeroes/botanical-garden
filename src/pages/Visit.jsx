import './PageTemplate.css'

function Visit() {
  return (
    <div className="page">
      <section className="hero-section">
        <h1>Plan Your Visit</h1>
        <p>Everything you need to know for a wonderful garden experience</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Hours</h2>
              <p>Monday: Closed</p>
              <p>Tuesday–Sunday: 9:00 AM – 5:00 PM</p>
              <p>Extended hours June–August: 9:00 AM – 7:00 PM</p>
            </div>
            <div>
              <h2>Admission</h2>
              <p>Adults: $15</p>
              <p>Seniors (65+): $10</p>
              <p>Children (6–12): $8</p>
              <p>Under 6: Free</p>
            </div>
            <div>
              <h2>Parking</h2>
              <p>Free parking available in our main lot</p>
              <p>Handicap accessible spaces near entrance</p>
            </div>
            <div>
              <h2>Accessibility</h2>
              <p>Wheelchair accessible pathways throughout</p>
              <p>Accessible restrooms available</p>
              <p>Assistance dogs welcome</p>
            </div>
          </div>

          <div className="team-section">
            <h2>Getting Here</h2>
            <p>Located at 123 Garden Lane, our botanical garden is easily accessible from downtown. Use the interactive map below for directions and parking information.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Visit
