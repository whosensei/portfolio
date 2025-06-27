import { useDarkMode } from "@/utils/DarkModeContext";

export const TechBadge = ({ tech }: { tech: string }) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <span className={`relative group inline-flex items-center px-3 py-1.5 text-sm leading-relaxed rounded-lg border transition-all duration-200 hover:scale-105 ${
      isDarkMode 
        ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800/20" 
        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-100/20"
    }`}>
      <span className="relative z-10">{tech}</span>
      
      {/* Subtle gradient overlay on hover */}
      <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
        isDarkMode
          ? "bg-gradient-to-r from-orange-500/5 to-purple-500/5"
          : "bg-gradient-to-r from-orange-500/3 to-blue-500/3"
      }`} />
    </span>
  );
};
