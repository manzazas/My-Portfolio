import './Certifications.css'

function Certifications() {
  const certifications = [
    {
      title: "CodePath Course",
      issuer: "CodePath",
      date: "2024",
      description: "Completed comprehensive software engineering course covering modern development practices and industry standards."
    },
    {
      title: "Udemy Course",
      issuer: "Udemy",
      date: "2024", 
      description: "Advanced programming course focusing on practical skills and real-world application development."
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon">🏆</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
