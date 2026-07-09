import './Hero.css'

function Hero() {
  const highlights = [
    { label: 'Currently', value: 'SWE Intern at Bloomberg' },
    { label: 'Focus', value: 'Backend + Full-Stack' },
    { label: 'Base', value: 'New York City' }
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-badge">Computer Science and Math at Baruch College</p>
          <p className="hero-eyebrow">SWE intern at Bloomberg</p>
          <h2 className="hero-title">Zachary Stybel</h2>
          <p className="hero-subtitle">I’m a junior studying Computer Science at Baruch College, graduating in 2027. This summer, I’m working on the data delivery team for fixed income pricing at Bloomberg.</p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
          <div className="hero-highlights">
            {highlights.map((item) => (
              <div key={item.label} className="highlight-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          {/* <div className="hero-card">
            <span className="hero-card-label">Current work</span>
            <h3>Fixed Income Pricing</h3>
            <p>I’m working on the data delivery team for fixed income at Bloomberg.</p>
          </div> */}
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="/assets/profile.jpeg" alt="Zachary Stybel portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
