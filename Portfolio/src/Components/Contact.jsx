import { NavLink } from "react-router-dom";
import resume from "../assets/New_Tech_Resume__.pdf"

function Contact() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="mx-auto max-w-7xl px-8 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* LEFT SECTION */}
          <div>
            <h2 className="text-4xl font-bold">
              Ire<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Software Engineering student passionate about building
              practical, user-friendly and meaningful digital experiences.
            </p>

            {/* Download CV */}
            <a
              href={resume}
              download
              className="
                mt-7
                inline-block
                rounded-lg
                border
                border-blue-500
                px-5
                py-2.5
                font-semibold
                text-blue-400
                transition
                duration-300
                hover:bg-blue-500
                hover:text-white
              "
            >
              Download CV
            </a>
          </div>


          {/* MIDDLE SECTION */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-gray-500">
              NAVIGATE
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <NavLink
                to="/Hero"
                className="transition hover:text-blue-400"
              >
                Home
              </NavLink>

              <NavLink
                to="/AboutMe"
                className="transition hover:text-blue-400"
              >
                About
              </NavLink>

              <NavLink
                to="/Skills"
                className="transition hover:text-blue-400"
              >
                Skills
              </NavLink>

              <NavLink
                to="/Projects"
                className="transition hover:text-blue-400"
              >
                Projects
              </NavLink>

              <NavLink
                to="/Experience"
                className="transition hover:text-blue-400"
              >
                Experience
              </NavLink>

              <NavLink
                to="/Achievements"
                className="transition hover:text-blue-400"
              >
                Achievements
              </NavLink>

            </div>
          </div>


          {/* RIGHT SECTION */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-gray-500">
              CONNECT
            </h3>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-gray-400">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ireoluwa-olowoyo-50063b299/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition duration-300 hover:text-blue-400"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ireoluwa10olowoyo-dot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition duration-300 hover:text-blue-400"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              {/* Email */}
              <a
                href="mailto:ireoluwa.10olowoyo@gmail.com"
                aria-label="Email"
                className="transition duration-300 hover:text-blue-400"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>

            </div>

            {/* Contact Details */}
            <div className="mt-7 space-y-3 text-gray-400">

              <p>
                <i className="fa-solid fa-envelope mr-3 text-blue-400"></i>
                ireoluwa.10olowoyo@gmail.com
              </p>

              <p>
                <i className="fa-solid fa-location-dot mr-3 text-blue-400"></i>
                Glasgow, Scotland
              </p>

            </div>
          </div>

        </div>


        {/* BOTTOM SECTION */}
        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Ire Olowoyo. All rights reserved.
            </p>

            <p>
              Built with React · Vite · Tailwind CSS
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Contact;