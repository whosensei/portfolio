import { experiences } from "@/data/portfolio";
import { ExperienceListGroup } from "../ui/ExperienceListGroup";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function Experiences() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div>
      <h2 className={`text-lg leading-relaxed font-semibold mb-4 ${
        isDarkMode ? "text-white" : "text-gray-600"
      }`}>Experiences </h2>
      <ExperienceListGroup experiences={experiences} />
    </div>
  );
}
