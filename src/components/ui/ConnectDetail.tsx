import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useDarkMode } from "@/utils/DarkModeContext";

export const ConnectDetail = ({
  item,
  link,
  username,
}: {
  item: string;
  link: string;
  username: string;
}) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <Link
      href={link}
      target="_blank"
      className={`group relative border rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] block ${
        isDarkMode 
          ? "border-gray-700 hover:border-gray-600 bg-transparent hover:bg-gray-900/10" 
          : "border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50/20"
      }`}
    >
      {/* Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Platform Label */}
          <div className={`text-lg leading-relaxed min-w-[80px] ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            {item}
          </div>
          
                     {/* Username/Handle */}
           <div className="flex-1">
             <p className={`text-lg leading-relaxed ${
               isDarkMode ? "text-gray-300" : "text-gray-700"
             }`}>
               {username}
             </p>
           </div>
        </div>
        
        {/* External Link Icon */}
        <div className={`p-1.5 rounded-lg transition-all duration-200 group-hover:scale-110 ${
          isDarkMode
            ? "text-gray-400 group-hover:text-white group-hover:bg-gray-800/50"
            : "text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-100/50"
        }`}>
          <ExternalLink size={16} />
        </div>
      </div>

              {/* Subtle gradient border on hover */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDarkMode
            ? "bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20"
            : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
        }`} />
    </Link>
  );
};
