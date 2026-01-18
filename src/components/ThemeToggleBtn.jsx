import React, { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {

  // Detect system theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, [setTheme]);

  // Apply theme to HTML & save it
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <button>
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          onClick={() => setTheme('light')}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt="light mode"
        />
      ) : (
        <img
          src={assets.moon_icon}
          onClick={() => setTheme('dark')}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt="dark mode"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
