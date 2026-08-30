import './About.css'

function About() {
  const interests = [
    ['Rainbow Six Siege', 'Strategy, Rage'],
    ['FIFA', 'Hatred, Anger'],
    ['Skyrim', 'Peace']
  ]

  return (
    <section id="about" className="about fade-in">
      <div className="container about-layout">
        <div className="about-copy">
          <h2 className="section-title">About <em>Me</em></h2>
          <p className="about-lede">I'm a senior studying Computer Science at CUNY Baruch College, graduating in 2027. I recently completed a Bloomberg internship where I worked on BVAL, Bloomberg's evaluated pricing service.</p>
          <p>I primarily worked with Python and gained hands-on experience with Docker-based local development, unit and integration testing, distributed-system design, and database schema design.</p>
          <p>I also enjoy hackathons and have won prizes at Columbia and City College. Those events taught me how to turn ambitious ideas into useful products under pressure while working collaboratively.</p>
          <p>This portfolio is a record of the projects, tools, and experiences shaping the engineer I'm becoming. Hopefully Disney appreciates the homage.</p>

          <div className="about-interests" aria-label="Hobbies and skills learned">
            <div className="interests-heading"><span>Favorite Games</span><span>Skills learned</span></div>
            {interests.map(([title, skill]) => (
              <div className="interest-row" key={title}>
                <strong>{title}</strong>
                <small>{skill}</small>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-visual" aria-label="Zachary's profile and lightsaber preference">
          <figure className="about-portrait">
            <img src="/assets/profile.jpeg" alt="Zachary Stybel" />
          </figure>

          <div className="saber-readout">
            <div className="saber-heading"><span>Kyber preference</span><strong>Green</strong></div>
            <div className="simple-saber" aria-hidden="true"><i></i><b></b></div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
