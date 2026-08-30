import './Hero.css'

function Hero({ onComplete }) {
  return (
    <section id="hero" className="crawl-hero" aria-label="About Zachary Stybel">
      <button className="crawl-exit" type="button" onClick={onComplete}>
        Enter site <span aria-hidden="true">&#8594;</span>
      </button>
      <div className="crawl-wrapper">
        <div className="crawl-text" onAnimationEnd={onComplete}>
          <h2>Zachary Stybel</h2>
          <h3>Software Engineer / New York City</h3>
          <p>I'm a senior studying Computer Science at CUNY Baruch College, graduating in 2027. I just wrapped up my internship at Bloomberg where I worked on Bloomberg’s award-winning evaluated pricing service, BVAL.</p>
          <p>I mainly worked with Python and got hands on experience with docker for local devlopment, unit and integration testing, desgining distributed systems, and database/schema design.</p>
          <p>I enjoy participating in hackathons and won prizes at Columbia and City College. Those events taught me how to turn ambitious ideas into useful products under pressure and work collaboratively.</p>
          <p>Outside of work and school, you I usually play Rainbow Six Siege, watch football, go to the gym, or chefing up in the kitchen.</p>
          <p>This portfolio is a record of the projects, tools, and experiences that have shaped the engineer I'm becoming and I hope Disney does not sue me.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
