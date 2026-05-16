import './PageTemplate.css'

function Blog() {
  const posts = [
    { title: 'Spring Plant Care Tips', date: 'May 15, 2026', excerpt: 'Learn how to prepare your plants for the growing season.' },
    { title: 'The Beauty of Native Plants', date: 'May 8, 2026', excerpt: 'Discover why native plants are essential for local ecosystems.' },
    { title: 'Composting for Gardeners', date: 'April 30, 2026', excerpt: 'Turn your kitchen scraps into nutrient-rich garden gold.' },
    { title: 'Sustainable Gardening Practices', date: 'April 22, 2026', excerpt: 'Garden in harmony with nature and reduce your environmental impact.' }
  ]

  return (
    <div className="page">
      <section className="hero-section">
        <h1>Garden Blog</h1>
        <p>Plant care tips, news, and seasonal updates</p>
      </section>

      <section className="section content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {posts.map((post, idx) => (
              <div key={idx} style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(92, 142, 125, 0.15)' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{post.title}</h3>
                <p style={{ color: '#C9B8A3', marginBottom: '1rem', fontSize: '0.9rem' }}>{post.date}</p>
                <p style={{ color: '#5B8E7D', lineHeight: '1.8' }}>{post.excerpt}</p>
                <a href="#" style={{ color: '#5B8E7D', fontWeight: '500' }}>Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
