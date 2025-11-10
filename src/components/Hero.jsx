import './Hero.css'
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to My Portfolio</h2>
          <p className="hero-subtitle">Computer Science and Math Student at CUNY Baruch College</p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button">View My Work</a>
            <a href="/resume.pdf" download="Zachary Stybel Resume.pdf" className="cta-button secondary">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* profile image served from public/assets */}
            <img src="/assets/profile.jpeg" alt="selfie" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
