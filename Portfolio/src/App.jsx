import { useState } from 'react';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Achievements/>
    <Contact/>
      
    </>
  )
}

export default App
