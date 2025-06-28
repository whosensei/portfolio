import TechStack from "../ui/TechStack";
import { personalInfo } from "@/data/portfolio";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <section>
      <article
        className={`text-lg leading-relaxed space-y-4 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        {personalInfo.bio.main}
      </article>
      <div className="my-4">
        <h2
          className={`text-lg leading-relaxed font-semibold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Tech Stack 
        </h2>
        <TechStack />
      </div>
    </section>
  );
}
