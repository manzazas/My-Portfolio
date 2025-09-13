import './Navbar.css'

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>Zachary Stybel</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
