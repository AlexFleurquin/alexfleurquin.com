import React, { useEffect, useState } from 'react';

function ThemeSwitch() {
  // Handle light modes
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem('dark-mode');
    if (dark === null) {
      return true;
    } else {
      return dark === 'true';
    }
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="form-switch">
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch-desktop"
        className="light-switch sr-only"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="relative" htmlFor="light-switch-desktop">
        <span
          className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
          aria-hidden="true"
        ></span>
        <svg
          className="absolute inset-0"
          width="44"
          height="24"
          viewBox="0 0 44 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="fill-current text-white"
            fillRule="nonzero"
            opacity=".88"
          >
            <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
            <circle cx="32" cy="12" r="3" />
            <circle fillOpacity=".4" cx="12" cy="12" r="6" />
            <circle fillOpacity=".88" cx="12" cy="12" r="3" />
          </g>
        </svg>
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}

export default ThemeSwitch;
