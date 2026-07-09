import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "C++", "Java", "HTML", "CSS", "Verilog"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Developer Tools",
      skills: ["GitHub", "Git", "Docker", "Vercel", "Firebase", "Postman", "Pandas", "Google Agent Developer Kit"]
    }
  ]

  return (
    <section id="skills" className="skills fade-in">
      <div className="container">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">Tools and languages I use often.</h2>
        <p className="section-summary">This is the stack I reach for most when I am building, debugging, or trying something new.</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category fade-in">
              <div className="category-header">
                <h3>{category.title}</h3>
              </div>
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
