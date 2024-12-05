import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-xl transition-all duration-300 group relative
        ${darkMode 
          ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
          : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}
        focus:outline-none`}
    >
      {darkMode ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
      <span className={`absolute left-14 bg-gray-800 text-gray-100 text-sm
        px-2 py-1 rounded opacity-0 group-hover:opacity-100
        transition-opacity duration-300 whitespace-nowrap`}>
        Toggle theme
      </span>
    </button>
  );
};

export default ThemeToggle;