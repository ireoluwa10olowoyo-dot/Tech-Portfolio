import { useState } from 'react';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Hero" replace/>}/>
      <Route path="/Hero" element={<Hero/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Achievements" element={<Achievements/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
