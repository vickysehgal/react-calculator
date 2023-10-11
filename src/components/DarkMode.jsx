import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode") || false);
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((preMode) => !preMode);
  };

  return (
    <div className="transition-colors duration-300">
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default DarkMode;
