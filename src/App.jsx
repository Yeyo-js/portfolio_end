import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import FloatingIcons from './components/FloatingIcons'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 })    
  }, [])

  return (
    <>
    <FloatingIcons />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App