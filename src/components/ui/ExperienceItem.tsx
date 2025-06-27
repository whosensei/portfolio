import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useDarkMode } from "@/utils/DarkModeContext";

interface Props {
  heading: string;
  subheading: string;
  points: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceItem = ({
  heading,
  subheading,
  points,
  isExpanded,
  onToggle,
}: Props) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`group relative border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] ${
      isDarkMode 
        ? "border-gray-700 hover:border-gray-600 bg-transparent hover:bg-gray-900/10" 
        : "border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50/20"
    }`}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group/button"
        aria-expanded={isExpanded}
        aria-label={
          isExpanded
            ? "Collapse experience details"
            : "Expand experience details"
        }
      >
        <div className="flex-1">
          <h3 className={`text-lg leading-relaxed mb-1 group-hover/button:${
            isDarkMode ? "text-white" : "text-gray-900"
          } transition-colors duration-200 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}>
            {heading}
          </h3>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            {subheading}
          </p>
        </div>
        
        {/* Expand/Collapse Button */}
        <div className={`p-2 rounded-lg transition-all duration-300 ${
          isExpanded ? "rotate-180" : "rotate-0"
        } ${
          isDarkMode 
            ? "text-gray-400 hover:text-white hover:bg-gray-800/50" 
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
        }`}>
          <ChevronDown size={20} />
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <ul className={`space-y-3 text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isDarkMode ? "bg-orange-500" : "bg-orange-500"
                    }`} />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isDarkMode
          ? "bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10"
          : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
      }`} />
    </div>
  );
};
