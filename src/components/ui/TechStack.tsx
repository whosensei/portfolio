"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJava } from "react-icons/fa";
import {
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenai,
  SiPostgresql
} from "react-icons/si";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function TechStack() {
  const { isDarkMode } = useDarkMode();
  
  const stack = [
    { label: "React", icon: <FaReact className="h-5 w-5" /> },
    { label: "Next.js", icon: <SiNextdotjs className="h-5 w-5" /> },
    { label: "Node.js", icon: <FaNodeJs className="h-5 w-5" /> },
    { label: "Python", icon: <SiPython className="h-5 w-5" /> },
    { label: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
    { label: "TypeScript", icon: <SiTypescript className="h-5 w-5" /> },
    { label: "Postgresql", icon: <SiPostgresql className="h-5 w-5" /> },
    { label: "Prisma", icon: <SiPrisma className="h-5 w-5" /> },
    { label: "Docker", icon: <FaDocker className="h-5 w-5" /> },
    { label: "AWS", icon: <FaAws className="h-5 w-5" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="h-5 w-5" /> },
    { label: "OpenAI", icon: <SiOpenai className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6">
      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {stack.map((tech, index) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`group relative border rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? "border-gray-700 hover:border-gray-600 bg-transparent hover:bg-gray-900/10" 
                : "border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50/20"
            }`}
          >
            {/* Content */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className={`transition-colors duration-300 ${
                isDarkMode 
                  ? "text-gray-400 group-hover:text-white" 
                  : "text-gray-600 group-hover:text-gray-900"
              }`}>
                {tech.icon}
              </div>
              <span className={`text-sm leading-relaxed transition-colors duration-300 ${
                isDarkMode 
                  ? "text-gray-300 group-hover:text-white" 
                  : "text-gray-700 group-hover:text-gray-900"
              }`}>
                {tech.label}
              </span>
            </div>

            {/* Subtle gradient border on hover */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
              isDarkMode
                ? "bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20"
                : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-4 pt-4">
        <p className={`text-lg leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          My strength is building core web applications which can serve people
          throughout the globe. I&apos;m currently working with TypeScript and
          TurboRepos.
        </p>
        <p className={`text-lg leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          Currently learning more about FinTech, with a focus on how tech can
          solve real problems in finance.
        </p>
      </div>
    </div>
  );
}
