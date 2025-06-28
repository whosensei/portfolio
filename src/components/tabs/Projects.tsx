import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "@/data/portfolio";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function Projects() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className="mb-12">
      <h2 className={`text-lg leading-relaxed mb-4 font-semibold ${
        isDarkMode ? "text-white" : "text-gray-600"
      }`}>
        Projects {" "}
        <span className={`text-lg leading-relaxed font-semibold ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}>
          (sorted by most recent)
        </span>
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              heading={project.heading}
              description={project.description}
              link={project.link}
              github={project.github}
              techstack={project.techstack}
              isOngoing={project.isOngoing}
            />
          );
        })}
      </div>
    </div>
  );
}
