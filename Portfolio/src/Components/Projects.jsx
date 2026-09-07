import ProjectCard from "/src/CardComponents/ProjectCard";
import {Recipe} from "/src/assets/Recipe Website.png"
import {Glasletsgo} from "/src/assets/GlasLet'sGo.png"
import {Database} from  "/src/assets/database.jpg"

function Projects() {
  return (
    <section className="min-h-screen bg-slate-950 px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-4xl font-bold">
          Projects
        </h1>

      

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard
            image={Glasletsgo}
            title="GlasLet'sgow"
            description="Built a React and TypeScript frontend for discovering events using live weather, event data and AI-powered recommendations. Integrated with backend services capable of surfacing 300+ live events daily and earned an Honourable Mention at GUTS DYHTG 2025."
            framework="React · TypeScript · Vite"
            featured={true}
            link="https://github.com/shreyeahhs/GlasLet-sgow"
          />

          <ProjectCard
            image={Database}
            title="Academic Institution Database"
            description="Designed and normalised a relational MySQL database for managing students, courses, enrolments and grades. Built queries, joins and relationships to support efficient reporting while maintaining data integrity."
            framework="MySQL"
            featured={false}
            link="https://github.com/ireoluwa10olowoyo-dot/Academia-Institution"
          />

          <ProjectCard
            image={Recipe}
            title="Recipe Sharing Website"
            description="Developed a full-stack Django application with secure authentication, personalised profiles and responsive recipe discovery features. Worked within a 5-person Agile team to build and integrate core platform functionality."
            framework="Django · Python · JavaScript"
            featured={false}
            link="https://github.com/Shathaalaa/Recipe_Website"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;