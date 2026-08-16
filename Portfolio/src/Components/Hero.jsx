import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';


function Hero(){
    return(
        <>
        <div>

        <div className="flex items-center justify-center  bg-slate-950 h-20 pl-3 text-white">
            <h1 className="mr-200 text-2xl ">Ire Olowoyo</h1>
            <div>
            <NavLink to="/Hero" className="ml-5 ">Hero</NavLink>
            <NavLink to="/AboutMe" className="ml-5">AboutMe</NavLink>
            <NavLink to="/Projects" className="ml-5">Projects</NavLink>
            <NavLink to="/Skills" className="ml-5">Skills</NavLink>
            <NavLink to="/Experience" className="ml-5">Experience</NavLink>
            <NavLink to="/Achievements" className="ml-5">Achievements</NavLink>
            <NavLink to="/Contact" className="mr-5">Contact</NavLink>
            </div>
        </div>
        <div className="bg-slate-900 text-white ">
            <div className="h-60 pl-4 pt-3 flex justify-center">
            <img src="src/assets/uofg.jpg" className="w-50 h-50 "/>
            <div>
            <h1>Hi! I'm Ire</h1>
            <h1> MSci 3RD YEAR SOFTWARE ENGINEERING STUDENT at UNIVERSITY OF GLASGOW </h1>
             <p className="text-white w-150">I build responsive and user-friendly web applications using React, JavaScript, Python, and modern web technologies. I enjoy turning ideas into functional digital experiences, combining clean interfaces with reliable functionality across both frontend and backend development. I’m always looking to improve my skills, explore new technologies, and build solutions that create real value for users.
</p>          </div>
            <img src="src/assets/Profile Picture.jpg" alt="Profile Picture" className="ml-20 rounded-xl w-50 h-50 mb-"/>
            
          
    
        </div>
            <div>
            <p>View My Socials</p>
            <a href="https://github.com/ireoluwa10olowoyo-dot" className="">
                <button className="bg-black text-white rounded-lg">
                   <i class="fa-brands fa-github "></i> Github
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ireoluwa-olowoyo-50063b299/">
                <button className="bg-[#0A66C2] text-white rounded-lg">
                <i class="fa-brands fa-linkedin"></i>Linkedin
                </button>
            </a>
            </div>
            
        </div>
        </div>
        

        </>
    )
}
export default Hero