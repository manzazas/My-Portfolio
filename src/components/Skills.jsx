import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      saber: "green",
      skills: ["Python", "JavaScript", "SQL", "C++", "Java", "HTML", "CSS", "Verilog"]
    },
    {
      title: "Frameworks & Libraries",
      saber: "blue",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Developer Tools",
      saber: "red",
      skills: ["GitHub", "Git", "Docker", "Kubernetes", "Argo Workflows", "Vercel", "Firebase", "Postman", "Pandas", "Google Agent Developer Kit"]
    }
  ]

  return (
    <section id="skills" className="skills fade-in">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category fade-in">
              <div className="category-header">
                <h3>{category.title}</h3>
                <div className={`skill-saber skill-saber-${category.saber}`} aria-hidden="true">
                  <i></i><span></span>
                </div>
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
