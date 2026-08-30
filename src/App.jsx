import { useLayoutEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  useLayoutEffect(() => {
    if (introComplete) return undefined

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [introComplete])

  return (
    <div className="portfolio">
      {!introComplete ? (
        <Hero onComplete={() => setIntroComplete(true)} />
      ) : (
        <>
          <Navbar />
          <main className="main">
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}

export default App
