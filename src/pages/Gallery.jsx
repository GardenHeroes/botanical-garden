import './PageTemplate.css'

function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/400/300?random=${i + 10}`
  }))

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Garden Gallery</h1>
        <p>Beautiful moments from our botanical collections</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {images.map(img => (
              <div key={img.id} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }} className="gallery-item">
                <img src={img.src} alt={`Gallery ${img.id}`} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
