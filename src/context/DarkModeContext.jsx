import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
