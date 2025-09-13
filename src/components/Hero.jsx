import './Hero.css'
import profileImage from '../assets/profile.jpeg'
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to My Portfolio</h2>
          <p className="hero-subtitle">Computer Science and Math Student at CUNY Baruch College</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src={profileImage} alt="selfie" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
