import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import { useEffect } from 'react';


function Portfolio() {

  const location = useLocation();

  useEffect(() => {

    const sectionMap = {
      "/Hero": "hero",
      "/AboutMe": "about",
      "/Projects": "projects",
      "/Skills": "skills",
      "/Experience": "experience",
      "/Achievements": "achievements",
      "/Contact": "contact"
    };

    const sectionId = sectionMap[location.pathname];

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [location]);

  return (
    <>
      <Hero />

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/Hero" replace />}
        />

        <Route path="/Hero" element={<Portfolio />} />
        <Route path="/AboutMe" element={<Portfolio />} />
        <Route path="/Projects" element={<Portfolio />} />
        <Route path="/Skills" element={<Portfolio />} />
        <Route path="/Experience" element={<Portfolio />} />
        <Route path="/Achievements" element={<Portfolio />} />
        <Route path="/Contact" element={<Portfolio />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;