import './Certifications.css'

function Certifications() {
  const certifications = [
    {
      title: "Internship Connection Program",
      issuer: "CodePath",
      date: "2025",
      description: "Selected for CodePath's competitive Internship Connection Program (ICP), a 10-week career accelerator providing technical interview prep, professional development workshops, mentorship, and direct recruiter connections to support students in securing their first software engineering internship."
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2025",
      description: "Completed The Complete Web Development Bootcamp, a 60+ hour full-stack program covering HTML, CSS, JavaScript, React, Node.js, SQL, and modern developer practices. Built 30+ real-world mini projects, gaining hands-on experience in front-end, back-end, databases, APIs, and deployment."
    }
  ]

  return (
    <section id="certifications" className="certifications fade-in">
      <div className="container">
        <h2 className="section-title">Courses/Programs I completed.</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="cert-card fade-in">
              <div className="cert-header">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
