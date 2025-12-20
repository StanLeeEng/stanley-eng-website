interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export default function Project({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: Project) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Left side - Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="font-bold text-lg text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="py-0.5 px-2 text-[0.6rem] sm:text-sm border border-white/20 bg-white/5 rounded-full text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {(githubUrl || liveUrl) && (
          <div className="flex gap-4 pt-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right side - Image */}
      {image && (
        <div className="pb-8 pt-8">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  )
}   
