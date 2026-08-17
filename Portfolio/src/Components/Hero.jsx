import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';


function Hero(){
    return(
        <>
        

        
         <div className="mx-auto grid w-full max-w-8xl items-center gap-16 md:grid-cols-2 bg-slate-950">

        


        {/* LEFT SIDE */}
        <div>

            <div className="flex items-center justify-center  bg-slate-950 h-20 pl-3 text-white">
            <h1 className="ml-200  text-2xl ">My Portfolio</h1>
            <div className="ml-200">
            <NavLink to="/Hero" className="ml-5 rounded-md bg-blue-500 px-6 py-3 font-semibold text-white transition hover:border-blue-600 hover:bg-transparent">Hero</NavLink>
            <NavLink to="/AboutMe" className="ml-5">AboutMe</NavLink>
            <NavLink to="/Projects" className="ml-5">Projects</NavLink>
            <NavLink to="/Skills" className="ml-5">Skills</NavLink>
            <NavLink to="/Experience" className="ml-5">Experience</NavLink>
            <NavLink to="/Achievements" className="ml-5">Achievements</NavLink>
            <NavLink to="/Contact" className="ml-5">Contact</NavLink>
            </div>
        </div>

        <div className="pl-35">
          <p className="mb-2 text-gray-300">
            Hi, I am
          </p>

          <h2 className="mb-2 text-xl font-bold text-orange-500">
            Ire Olowoyo
          </h2>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl text-white">

            MSci SOFTWARE

            <span className="block text-orange-500">
              ENGINEERING
            </span>

          </h1>

          <p className="mt-6 max-w-lg leading-7 text-gray-400">
            Software Engineering student passionate about building modern,
            responsive and user-friendly web applications using React,
            JavaScript and other modern technologies.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#projects"
              className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-md border border-gray-500 px-6 py-3 text-white font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              Contact Me
            </a>
            
          </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">

          <img
            src="src/assets/Profile Picture.jpg"
            alt="Ire Olowoyo"
            className="h-80 w-72 rounded-lg border-4 border-gray-300 object-cover shadow-xl"
          />

          {/* Social media links */}
          <div className="mt-5 flex gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-300 hover:text-orange-500"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-300 hover:text-orange-500"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
        
        

        </>
    )
}
export default Hero



