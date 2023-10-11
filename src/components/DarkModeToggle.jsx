const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      className="bg-gray-300 dark:bg-gray-700 rounded-full w-12 h-6 p-1 flex items-center"
      onClick={toggleDarkMode}
    >
      <div
        className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6 bg-[#fff]" : "translate-x-0 bg-[#374151]"
        }`}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
