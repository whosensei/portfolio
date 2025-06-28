import { ConnectDetail } from "../ui/ConnectDetail";
import { socialLinks } from "@/data/portfolio";
import { useDarkMode } from "@/utils/DarkModeContext";

export default function Connect() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div>
      <h2 className={`text-lg leading-relaxed font-semibold mb-6 ${
        isDarkMode ? "text-white" : "text-gray-600"
      }`}>Connect </h2>
      <div className="space-y-3">
        {socialLinks.map((connect, index) => (
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
