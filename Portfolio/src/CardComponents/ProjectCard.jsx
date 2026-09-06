function ProjectCard({
  image,
  title,
  description,
  framework,
  featured,
  link
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        group block overflow-hidden rounded-2xl
        border border-slate-700 bg-slate-800
        transition duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-900">

        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition duration-500
            group-hover:scale-105
          "
        />

        {/* Tech Stack */}
        <span
          className="
            absolute left-4 top-4
            rounded-lg border border-blue-500
            bg-slate-950/90
            px-3 py-1
            text-sm font-semibold text-blue-300
          "
        >
          {framework}
        </span>

        {/* Featured */}
        {featured && (
          <span
            className="
              absolute right-4 top-4
              rounded-lg bg-blue-500
              px-3 py-1
              text-sm font-semibold text-white
            "
          >
            ★ Featured
          </span>
        )}

      </div>

      {/* Card Content */}
      <div className="p-6">

        <h2
          className="
            text-2xl font-bold text-white
            transition
            group-hover:text-blue-400
          "
        >
          {title}
        </h2>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 font-semibold text-blue-400">
          View Project
          <span className="transition group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>

    </a>
  );
}

export default ProjectCard;