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
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Ready to work together? Let's connect!</p>
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
