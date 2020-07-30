import React, { useState, useContext, useEffect } from 'react';
import * as z from 'zod';

import { getStorageItem, setStorageItem } from '../utils/storage';

const THEME = 'theme';

type State = 'light' | 'dark';
type ToggleTheme = () => void;
type ThemeProviderProps = { children: React.ReactNode };

const IsLightThemeContext = React.createContext<boolean | undefined>(undefined);
const ToggleThemeContext = React.createContext<ToggleTheme | undefined>(
  undefined
);

const themeSchema = z.union([z.literal('light'), z.literal('dark')]);
function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<State>(
    themeSchema.parse(getStorageItem(THEME) || 'light')
  );
  const isLightTheme = theme === 'light';
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  useEffect(() => setStorageItem(THEME, theme), [theme]);

  return (
    <IsLightThemeContext.Provider value={isLightTheme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </IsLightThemeContext.Provider>
  );
}

function useIsLightTheme() {
  const context = useContext(IsLightThemeContext);
  if (context === undefined) {
    throw new Error('useIsLightTheme must be used within a ThemeProvider');
  }
  return context;
}

function useToggleTheme() {
  const context = useContext(ToggleThemeContext);
  if (context === undefined) {
    throw new Error('useToggleTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useIsLightTheme, useToggleTheme };
