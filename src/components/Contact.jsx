import './Contact.css'

function Contact() {
  const contactLinks = [
    {
      text: "Email",
      href: "mailto:zachary.stybel.cs@gmail.com"
    },
    {
      text: "LinkedIn", 
      href: "https://linkedin.com/in/zachary-stybel"
    },
    {
      text: "GitHub",
      href: "https://github.com/manzazas"
    }
  ]

  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <h2 className="section-title">You can <em>find</em> me on...</h2>
        <p className="section-summary">Email, LinkedIn, and GitHub are below if you want to get in touch or look through my work.</p>
        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
