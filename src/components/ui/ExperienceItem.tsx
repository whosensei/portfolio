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

// Helper function to extract date and role from subheading
const parseSubheading = (subheading: string) => {
  const dateMatch = subheading.match(/\(([^)]+)\)$/);
  const date = dateMatch ? dateMatch[1] : '';
  const role = subheading.replace(/\s*\([^)]+\)$/, '').trim();
  return { role, date };
};

export const ExperienceItem = ({
  heading,
  subheading,
  points,
  isExpanded,
  onToggle,
}: Props) => {
  const { isDarkMode } = useDarkMode();
  const { role, date } = parseSubheading(subheading);
  
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
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h3 className={`text-xl font-semibold group-hover/button:${
                isDarkMode ? "text-white" : "text-gray-900"
              } transition-colors duration-200 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}>
                {heading}
              </h3>
              {date && (
                <span className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                  isDarkMode 
                    ? "bg-orange-500/10 text-orange-300 border-orange-500/30 hover:bg-orange-500/20" 
                    : "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                }`}>
                  {date}
                </span>
              )}
            </div>
          </div>
          <p className={`text-base font-medium mb-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            {role}
          </p>
          {/* {points.length > 0 && (
            <p className={`text-sm ${
              isDarkMode ? "text-gray-500" : "text-gray-500"
            }`}>
              Click to view details
            </p>
          )} */}
        </div>
        
        {/* Expand/Collapse Button */}
        {points.length > 0 && (
          <div className={`p-3 rounded-full transition-all duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          } ${
            isDarkMode 
              ? "text-gray-400 hover:text-orange-300 hover:bg-orange-500/10 border border-gray-700 hover:border-orange-500/30" 
              : "text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-gray-200 hover:border-orange-200"
          }`}>
            <ChevronDown size={18} />
          </div>
        )}
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
            <div className={`pt-6 mt-4 border-t transition-colors duration-300 ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}>
              <ul className={`space-y-4 text-base leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${
                      isDarkMode ? "bg-orange-400" : "bg-orange-500"
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
          ? "bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20"
          : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
      }`} />
    </div>
  );
};
