function Experience() {
  const experiences = [
    {
      date: "Jan 2022 - Jan 2022",
      title: "Coding Tutor",
      company: "Freelance",
      location: "Glasgow, Scotland",
      description:
        "Taught coding fundamentals using Scratch to beginner students, simplifying technical concepts into engaging and understandable lessons.",
      skills: ["Scratch", "Teaching", "Communication"],
    },
    {
      date: "Sep 2023 - Sep 2023",
      title: "Cyber Security Workshop Participant",
      company: "Science Centre",
      location: "Glasgow, Scotland",
      description:
        "Collaborated in a team-based cybersecurity workshop, solving technical and logic-based security challenges under time pressure.",
      skills: ["Cybersecurity", "Problem Solving", "Teamwork"],
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 px-8 py-20 text-white">
      
      {/* Heading */}
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">
          Experience
        </h1>
        

        {/* Timeline */}
        <div className="relative mt-20">
          
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-3 hidden h-0.5 bg-slate-700 md:block"></div>

          <div className="grid gap-10 md:grid-cols-2">
            
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                
                {/* Timeline dot */}
                <div className="mb-5 hidden md:flex">
                  <div className="z-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-blue-500"></div>
                </div>

                {/* Date */}
                <p className="mb-3 font-semibold text-blue-400">
                  {experience.date}
                </p>

                {/* Card */}
                <div
                  className="
                    h-full
                    rounded-2xl
                    border border-slate-700
                    bg-slate-800
                    p-7
                    shadow-lg
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500
                  "
                >
                  <h2 className="text-2xl font-bold">
                    {experience.title}
                  </h2>

                  <p className="mt-2 font-semibold text-blue-400">
                    {experience.company}
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    {experience.location}
                  </p>

                  <p className="mt-5 leading-7 text-gray-300">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          bg-slate-700
                          px-3
                          py-1
                          text-sm
                          text-blue-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;