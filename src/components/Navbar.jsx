import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const playSound = (audioRef) => {
  const audio = audioRef.current
  if (!audio) return

  audio.currentTime = 0
  audio.volume = 0.55
  audio.play().catch(() => {})
}

function Navbar() {
  const baseUrl = import.meta.env.BASE_URL
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openSoundRef = useRef(null)
  const closeSoundRef = useRef(null)

  const toggleMenu = () => {
    const nextState = !isMenuOpen
    playSound(nextState ? openSoundRef : closeSoundRef)
    setIsMenuOpen(nextState)
  }

  const closeMenu = () => {
    if (!isMenuOpen) return
    playSound(closeSoundRef)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        playSound(closeSoundRef)
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className={`header basic-header ${isMenuOpen ? 'is-open' : ''}`}>
      <nav className="nav" aria-label="Primary navigation">
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <span className="hamburger-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>

        <button className="menu-backdrop" onClick={closeMenu} aria-label="Close navigation" tabIndex={isMenuOpen ? 0 : -1} type="button"></button>

        <div id="primary-navigation" className="nav-menu" aria-hidden={!isMenuOpen}>
          <ul className="nav-links">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><a className="nav-resume" href={`${baseUrl}resume.pdf`} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume &#8599;</a></li>
          </ul>
        </div>

        <audio ref={openSoundRef} src={`${baseUrl}audio/lightsaber-open.mp3`} preload="none" />
        <audio ref={closeSoundRef} src={`${baseUrl}audio/lightsaber-close.mp3`} preload="none" />
      </nav>
    </header>
  )
}

export default Navbar
