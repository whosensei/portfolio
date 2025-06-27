import TechStack from "../ui/TechStack";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <section>
      <article
        className={`text-lg leading-relaxed space-y-4 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        I&apos;m <span className="font-machina"> Dipesh</span>,
        tech enthusiast who&apos;s been deep in the world of web
        apps, AI , and startup hustle. From shipping features to building my own
        SaaS, I love transforming ideas into user-centric products.  When I’m not writing or debugging TypeScript code or fine-tuning ML models
        , you&apos;ll find me working on side projects, exploring web3 or other new technologies,
        watching F1, or playing football.
        My strength is building core web applications which can serve people throughout the globe.
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
