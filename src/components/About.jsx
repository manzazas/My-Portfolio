import './About.css'

function About() {
  return (
    <section id="about" className="about fade-in">
      <div className="container about-layout">
        <div className="about-copy">
          <span className="section-kicker">About</span>
          <h2 className="section-title">About me and how I work.</h2>
          <p className="section-summary">
            I’m a junior studying Computer Science at Baruch College, graduating in 2027. I’m currently interning at Bloomberg on the software engineering side.
          </p>
          <p className="about-text">
            I enjoy participating in hackathons and recently won prizes at Columbia and CCNY. Technically, I work most with JavaScript and Python, and I have experience with cloud tools like AWS and Google Cloud.
          </p>
          <p className="about-text">
            Outside of work and school, I like playing Rainbow Six Siege, watching soccer, and going to the gym.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
