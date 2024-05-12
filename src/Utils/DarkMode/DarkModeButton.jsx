import React, { useState } from "react";

function GetCurrentTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(GetCurrentTheme());

  document.documentElement.classList.add("dark:bg-gray-800", "dark:text-white", "bg-gray-200", "text-gray-800", "transition-colors", "duration-200", "ease-in-out");
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="fixed bottom-0 end-0 p-2">
      <button className="shadow" onClick={() => setDarkMode(!darkMode)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        </svg>
      </button>
    </div>
  );
};

export default DarkModeButton;
