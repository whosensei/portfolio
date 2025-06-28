import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";

export const TypingText = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
  
    const subtitles = [personalInfo.title, personalInfo.alternateSubtitle];
  
    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      let currentIndex = 0;
      let isErasing = false;
      let isComplete = false;
  
      const currentSubtitle = subtitles[currentTextIndex];
  
      const animate = () => {
        if (!isErasing) {
          // Typing phase
          if (currentIndex <= currentSubtitle.length) {
            setDisplayedText(currentSubtitle.slice(0, currentIndex));
            currentIndex++;
            timeoutId = setTimeout(animate, 100);
          } else if (!isComplete) {
            // Finished typing, wait then start erasing
            isComplete = true;
            timeoutId = setTimeout(() => {
              isErasing = true;
              isComplete = false;
              animate();
            }, 3000);
          }
        } else {
          // Erasing phase
          if (currentIndex > 0) {
            currentIndex--;
            setDisplayedText(currentSubtitle.slice(0, currentIndex));
            timeoutId = setTimeout(animate, 100);
          } else {
            // Finished erasing, move to next text
            isErasing = false;
            setCurrentTextIndex((prev) => (prev + 1) % subtitles.length);
          }
        }
      };
  
      // Start the animation
      timeoutId = setTimeout(animate, 300);
  
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [currentTextIndex]);
  
    // Cursor blinking effect
    useEffect(() => {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorTimer);
    }, []);
  
    return (
      <h2 className={`font-raleway text-sm sm:text-base leading-relaxed h-6 flex items-center ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}>
        {displayedText}
        {showCursor && displayedText.length > 0 && (
          <span className={`${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>_</span>
        )}
      </h2>
    );
  };