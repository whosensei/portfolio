import { ConnectDetail } from "../ui/ConnectDetail";
import { useDarkMode } from "@/utils/DarkModeContext";

const connects = [
  {
    item: "‎ ‎ X",
    link: "https://x.com/dipesshhhh",
    username: "@dipesshhhh",
  },
  {
    item: "Linkedin",
    link: "https://www.linkedin.com/in/dipesh-singnurkar/",
    username: "@dipesh-singnurkar",
  },
  {
    item: "Github",
    link: "https://github.com/whosensei",
    username: "@whosensei",
  },
  {
    item: "Email",
    link: "mailto:dip.singnurkar31@gmail.com",
    username: "dip.singnurkar31@gmail.com",
  },
];

export default function Connect() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div>
      <h2 className={`text-lg leading-relaxed font-semibold mb-6 ${
        isDarkMode ? "text-white" : "text-gray-600"
      }`}>Connect </h2>
      <div className="space-y-3">
        {connects.map((connect, index) => (
          <ConnectDetail
            key={index}
            item={connect.item}
            link={connect.link}
            username={connect.username}
          />
        ))}
      </div>
    </div>
  );
}
