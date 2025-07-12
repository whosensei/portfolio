"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenai,
  SiPostgresql
} from "react-icons/si";
import { techStack, personalInfo } from "@/data/portfolio";
import { useDarkMode } from "@/utils/DarkModeContext";

// Icon mapping
const iconMap: Record<string, React.ReactElement> = {
  "React": <FaReact className="h-5 w-5" />,
  "Next.js": <SiNextdotjs className="h-5 w-5" />,
  "Node.js": <FaNodeJs className="h-5 w-5" />,
  "Python": <SiPython className="h-5 w-5" />,
  "JavaScript": <SiJavascript className="h-5 w-5" />,
  "TypeScript": <SiTypescript className="h-5 w-5" />,
  "Postgresql": <SiPostgresql className="h-5 w-5" />,
  "Golang": <FaGolang className="h-5 w-5" />,
  "Docker": <FaDocker className="h-5 w-5" />,
  "AWS": <FaAws className="h-5 w-5" />,
  "Tailwind": <SiTailwindcss className="h-5 w-5" />,
  "OpenAI": <SiOpenai className="h-5 w-5" />,
};

export default function TechStack() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="space-y-6">
      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {techStack.map((tech, index) => (
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
                {iconMap[tech.label] || <span className="h-5 w-5" />}
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
          {personalInfo.bio.current}
        </p>
      </div>
    </div>
  );
}
