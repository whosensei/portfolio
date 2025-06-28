"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, User, Folder, Briefcase, Mail } from "lucide-react";
import { useDarkMode } from "@/utils/DarkModeContext";
import { personalInfo } from "@/data/portfolio";
import About from "@/components/tabs/About";
import Projects from "@/components/tabs/Projects";
import Experiences from "@/components/tabs/Experiences";
import Connect from "@/components/tabs/Connect";
import { TypingText } from "@/components/ui/Typingtext";

const tabComponents = {
  About: <About />,
  Projects: <Projects />,
  Experiences: <Experiences />,
  Connect: <Connect />,
};

const tabIcons = {
  About: User,
  Projects: Folder,
  Experiences: Briefcase,
  Connect: Mail,
};

export default function HomeContent() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const tab = searchparams.get("tab");

  const defaultTab =
    tab && typeof tab === "string" && tab in tabComponents ? tab : "About";
  const [activeTab, setActiveTab] = useState<keyof typeof tabComponents>(
    defaultTab as keyof typeof tabComponents
  );

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (tab && typeof tab === "string" && tab in tabComponents) {
      setActiveTab(tab as keyof typeof tabComponents);
    }
  }, [tab]);

  return (
    <div
      className={`relative flex justify-center py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out min-h-screen ${
        isDarkMode ? "bg-[#131313] text-white" : "bg-[#fbf8f0af] text-black"
      }`}
    >
      {/* Left Sidebar Navigation - Fixed position in middle left */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 w-48 z-10 hidden lg:block">
        <ul className="space-y-2">
          {Object.keys(tabComponents).map((tab) => (
            <li key={tab} className="relative">
              <button
                onClick={() => router.push(`/?tab=${tab}`, undefined)}
                className={`relative w-full text-left px-4 py-3 transition-all duration-300 font-large text-base rounded-lg group ${
                  activeTab === tab
                    ? isDarkMode
                      ? "text-white"
                      : "text-black"
                    : isDarkMode
                    ? "text-gray-400 hover:text-orange-300"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {/* Glowing dash marker (like Notion) */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? "h-6 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                      : `h-0 ${
                          isDarkMode
                            ? "bg-gray-600 group-hover:bg-orange-400"
                            : "bg-gray-300 group-hover:bg-orange-400"
                        } group-hover:h-3`
                  }`}
                />

                {/* Tab text with padding for the marker */}
                <span className="text-lg ml-4 block">{tab}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area - Full original width */}
      <main className="relative max-w-4xl w-full transition-all duration-300 ease-in-out lg:pb-0 pb-15">
        {/* Header Section with Background */}
        <section
          className={`mb-8 relative overflow-hidden rounded-2xl border transition-all duration-300 ${
            isDarkMode
              ? "border-gray-900 bg-transparent"
              : "border-gray-200 bg-transparent"
          }`}
        >
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 rounded-2xl ${
              isDarkMode
                ? "bg-gradient-to-br from-orange-500/12 via-transparent to-purple-500/12"
                : "bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/15"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
                <Image
                  src={personalInfo.heroImage}
                  height={120}
                  width={120}
                  alt={personalInfo.name}
                  className="rounded-full shadow-lg"
                />

                <div className="flex flex-col items-center sm:items-start gap-0">
                  <div>
                    <h1 className="font-machina text-xl sm:text-2xl">
                      {personalInfo.name}
                    </h1>
                    <h2
                      className={`font-raleway text-sm sm:text-base pb-3 ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      @whosensei
                    </h2>
                  </div>
                  <TypingText isDarkMode={isDarkMode} />
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Dark Mode Toggle - Minimal */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <a
                  href={personalInfo.resumeUrl}
                  download
                  className={`text-sm sm:text-base leading-relaxed relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full ${
                    isDarkMode
                      ? "after:bg-white hover:text-gray-300"
                      : "after:bg-black hover:text-gray-700"
                  }`}
                >
                  Hiring? Check out my CV.
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Navigation - Floating Bottom Navbar */}
        <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`relative px-4 py-2 rounded-full backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 border ${
              isDarkMode
                ? "border-white/20 backdrop-brightness-110 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-black/30"
                : "border-gray-300/60 backdrop-brightness-90 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] bg-white/30"
            }`}
          >
            {/* Subtle glass highlight - adapts to background */}
            <div
              className={`absolute inset-[0.5px] rounded-full border ${
                isDarkMode ? "border-gray-600/30" : "border-white/40"
              }`}
            />

            {/* Minimal inner glow that enhances rather than covers */}
            <div
              className={`absolute inset-0 rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-700/30 via-transparent to-black/30"
                  : "bg-gradient-to-br from-white/20 via-transparent to-gray-100/10"
              }`}
            />

            <ul className="relative flex gap-4">
              {Object.keys(tabComponents).map((tab) => {
                const IconComponent = tabIcons[tab as keyof typeof tabIcons];
                return (
                  <li key={tab}>
                    <button
                      onClick={() => router.push(`/?tab=${tab}`, undefined)}
                      className={`relative p-2 rounded-full transition-all duration-300 group ${
                        activeTab === tab
                          ? "text-white"
                          : `${
                              isDarkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`
                      }`}
                    >
                      {/* Active tab glass background */}
                      {activeTab === tab && (
                        <>
                          {/* Glass orange background */}
                          <div
                            className={`absolute inset-0 backdrop-blur-sm rounded-full border ${
                              isDarkMode
                                ? "bg-orange-500/20 border-orange-400/50"
                                : "bg-orange-500/30 border-orange-500/60"
                            }`}
                          />

                          {/* Subtle outer glow */}
                          <div
                            className={`absolute inset-0 rounded-full ${
                              isDarkMode
                                ? "shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                                : "shadow-[0_0_8px_rgba(249,115,22,0.2)]"
                            }`}
                          />

                          {/* Glass highlight */}
                          <div
                            className={`absolute inset-[0.5px] rounded-full ${
                              isDarkMode
                                ? "bg-gradient-to-b from-gray-400/20 via-transparent to-black/10"
                                : "bg-gradient-to-b from-white/30 via-white/10 to-transparent"
                            }`}
                          />
                        </>
                      )}

                      {/* Hover effect for inactive tabs */}
                      {activeTab !== tab && (
                        <div
                          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            isDarkMode ? "bg-white/10" : "bg-black/10"
                          }`}
                        />
                      )}

                      <IconComponent size={18} className="relative z-10" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Content Area */}
        <section>
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {tabComponents[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
