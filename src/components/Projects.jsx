import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      title: "Lemonaid",
      description: "An Amazon product analysis tool that retrieves and processes listing data via the Rainforest API. Built with a React frontend and Node.js/Express backend, it features a MongoDB caching layer that stores frequent requests to cut data retrieval times from 5 seconds to under 500ms. The system is deployed on AWS using Lambda and S3, with a GitHub Actions pipeline that automates the entire infrastructure and deployment process.",
      githubUrl: "https://github.com/manzazas/Lemonaid.git",
      liveUrl: "https://d2c7lelrnuzuqf.cloudfront.net/"
    },
    {
      title: "Crypto Palace",
      description: "A cryptocurrency tracking application featuring real-time market data from CoinGecko API, interactive price charts with Google Charts, and multi-currency support. Built with React, Vite, and Firebase authentication, featuring responsive design with minimalist gradients and smooth hover interactions.",
      githubUrl: "https://github.com/manzazas/Crypto-Palace.git",
      liveUrl: "https://crypto-palace-mauve.vercel.app/"
    },
    {
      title: "RentMinder",
      description: "A lightweight copilot for renters — parse your lease, spot red flags, and never miss a due date. Built with Flask and Gemini AI, featuring PDF parsing and automated reminders via Gmail and Google Calendar.",
      githubUrl: "https://github.com/manzazas/RentMinder.git",
      liveUrl: "https://devpost.com/software/rentminder"
    },
    {
      title: "Soccer Management Database", 
      description: "Fully normalized relational database in Microsoft Access for soccer operations management. Features 15+ optimized SQL queries for data analysis, structured forms for streamlined data entry, and comprehensive reporting capabilities for players, contracts, injuries, and transfers.",
      githubUrl: "https://github.com/manzazas/Soccer-Database.git"
    },
    {
      title: "AI Study Assistant",
      description: "Multi-agent AI system with custom tools and parsers for educational workflows. Features Quiz, Summarizer, and Planner agents that convert lecture notes into interactive study materials, generating 10-20 multiple-choice questions in under 5 seconds and reducing manual prep time by 80%.",
      githubUrl: "https://github.com/manzazas/StudyPal.git",
      
    }, {
      title: "Kinective",
      description: "A fitness assistant that uses YOLO pose estimation and computer vision to track your form, count reps, and provide real-time feedback through a live camera feed. It helps users exercise confidently and safely without needing a personal trainer.",
      githubUrl: "https://github.com/DianaAleksieieva/Kinective.git",
      liveUrl: "https://devpost.com/software/kinective"
    },

    {
      title: "Gym Website",
      description: "Website template for a gym, built with HTML, CSS, and JavaScript. Features a responsive design with a modern aesthetic and smooth hover interactions, along with a contact form and form submission functionality.",
      githubUrl: "https://github.com/manzazas/Metro-Fitness.git",
      liveUrl: "https://manzazas.github.io/Metro-Fitness/"
    }
    
   
  ]

  return (
    <section id="projects" className="projects fade-in">
      <div className="container">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Projects I’ve worked on.</h2>
        <p className="section-summary">A mix of class projects, hackathon builds, and tools I made to solve real problems or learn something new.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
