import Link from "next/link";
import { TechBadge } from "./TechBadge";
import { Github, ExternalLink } from "lucide-react";
import { useDarkMode } from "@/utils/DarkModeContext";

interface ProjectCardProps {
  heading: string;
  description: string;
  link?: string;
  github: string;
  techstack: string[];
  isOngoing?: boolean;
}

export const ProjectCard = ({
  heading,
  description,
  link,
  github,
  techstack,
  isOngoing = false,
}: ProjectCardProps) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`group relative border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
      isDarkMode 
        ? "border-gray-700 hover:border-gray-600 bg-transparent hover:bg-gray-900/10" 
        : "border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50/20"
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className={`text-lg leading-relaxed ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              {heading}
            </h3>
            {isOngoing && (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                isDarkMode 
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/30" 
                  : "bg-orange-100 text-orange-700 border border-orange-200"
              }`}>
                ongoing
              </span>
            )}
          </div>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            {description}
          </p>
        </div>
        
        {/* Action Links */}
        <div className="flex items-center gap-2 ml-4">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
              }`}
              title="View Live Site"
            >
              <ExternalLink size={18} />
            </Link>
          )}
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
            }`}
            title="View Source Code"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {techstack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

              {/* Subtle gradient border on hover */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDarkMode
            ? "bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10"
            : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
        }`} />
    </div>
  );
};
