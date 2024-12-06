import { useState } from 'react';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return {
    isDarkMode,
    toggleTheme
  };
}