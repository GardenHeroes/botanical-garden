import './PageTemplate.css'

function Events() {
  const events = [
    { name: 'Spring Garden Tour', date: 'May 25, 2026', time: '2:00 PM' },
    { name: 'Plant Care Workshop', date: 'June 1, 2026', time: '10:00 AM' },
    { name: 'Summer Concert Series', date: 'June 15, 2026', time: '6:00 PM' },
    { name: 'Botanical Photography Walk', date: 'July 10, 2026', time: '9:00 AM' }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Events & Workshops</h1>
        <p>Join us for educational and celebratory experiences</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div className="grid-items">
            {events.map((event, idx) => (
              <div key={idx} className="grid-item">
                <h3>{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <button className="btn-primary" style={{marginTop: '1rem', width: '100%'}}>Register</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
