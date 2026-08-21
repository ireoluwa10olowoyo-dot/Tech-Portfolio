function Skills() {
  const languages = [
    { name: "Java", level: "Intermediate", width: "70%" },
    { name: "Python", level: "Advanced", width: "85%" },
    { name: "C/C++", level: "Beginner", width: "65%" },
    { name: "JavaScript", level: "Intermediate", width: "75%" },
    { name: "TypeScript", level: "Intermediate", width: "70%" },
    { name: "HTML/CSS", level: "Intermediate", width: "90%" },
    { name: "MySQL", level: "Intermediate", width: "70%" },
  ];

  const frameworks = [
    { name: "React", level: "Intermediate", width: "65%" },
    { name: "Vite", level: "Intermediate", width: "60%" },
    { name: "Django", level: "Intermediate", width: "60%" },
  ];

  const tools = [
    { name: "Git", level: "Intermediate", width: "65%" },
    { name: "GitHub", level: "Intermediate", width: "85%" },
    { name: "VS Code", level: "Advanced", width: "90%" },
    { name: "REST APIs", level: "Intermediate", width: "60%" },
  ];

  const SkillCard = ({ name, level, width }) => {
    return (
      <div className="rounded-md bg-slate-800 p-5 shadow-md transition hover:-translate-y-1 hover:bg-slate-700">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {name}
        </h3>

        <p className="mb-3 text-xs text-slate-400">
          Level: {level}
        </p>

        <div className="h-2 w-full rounded-full bg-slate-600">
          <div
            className="h-2 rounded-full bg-blue-500"
            style={{ width: width }}
          ></div>
        </div>
      </div>
    );
  };

  const SkillSection = ({ title, skills }) => {
    return (
      <div className="mb-10">
        <div className="mb-4 bg-white py-2 text-center">
          <h2 className="font-bold text-red-500">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              width={skill.width}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-slate-950 px-8 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold">
            Skills
          </h1>

         
        </div>

        <SkillSection
          title="Programming Languages"
          skills={languages}
        />

        <SkillSection
          title="Frameworks & Libraries"
          skills={frameworks}
        />

        <SkillSection
          title="Developer Tools"
          skills={tools}
        />

      </div>
    </section>
  );
}

export default Skills;