import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'dark';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const updateEffectiveTheme = () => {
      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setEffectiveTheme(systemPrefersDark ? 'dark' : 'light');
      } else {
        setEffectiveTheme(theme);
      }
    };

    updateEffectiveTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateEffectiveTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    
    // Update CSS custom properties
    const root = document.documentElement;
    if (effectiveTheme === 'dark') {
      root.style.setProperty('--primary-color', '#f97316');
      root.style.setProperty('--primary-hover', '#ea580c');
      root.style.setProperty('--primary-light', '#fb923c');
      root.style.setProperty('--secondary-color', '#f59e0b');
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--bg-tertiary', '#334155');
      root.style.setProperty('--text-primary', '#f8fafc');
      root.style.setProperty('--text-secondary', '#cbd5e1');
      root.style.setProperty('--text-muted', '#94a3b8');
      root.style.setProperty('--border-color', '#475569');
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #f97316, #fb923c)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #ea580c, #f97316)');
    } else {
      root.style.setProperty('--primary-color', '#2563eb');
      root.style.setProperty('--primary-hover', '#1d4ed8');
      root.style.setProperty('--primary-light', '#3b82f6');
      root.style.setProperty('--secondary-color', '#7c3aed');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--bg-tertiary', '#f1f5f9');
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--text-muted', '#64748b');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #2563eb, #3b82f6)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #1d4ed8, #2563eb)');
    }
  }, [theme, effectiveTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};