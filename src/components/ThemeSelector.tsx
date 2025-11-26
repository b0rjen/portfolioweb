import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, label: 'Claro', icon: Sun },
    { value: 'dark' as const, label: 'Oscuro', icon: Moon },
    { value: 'system' as const, label: 'Sistema', icon: Monitor }
  ];

  return (
    <div className="theme-selector">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          className={`theme-option ${theme === value ? 'active' : ''}`}
          onClick={() => setTheme(value)}
          aria-label={`Cambiar a tema ${label}`}
          title={`Tema ${label}`}
        >
          <Icon size={18} />
        </button>
      ))}

      <style jsx>{`
        .theme-selector {
          display: flex;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 4px;
          gap: 2px;
        }

        .theme-option {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 6px;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .theme-option:hover {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .theme-option.active {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 2px 4px color-mix(in srgb, var(--primary-color) 30%, transparent);
        }

        .theme-option.active:hover {
          background: var(--primary-hover);
        }

        @media (max-width: 768px) {
          .theme-selector {
            padding: 2px;
          }

          .theme-option {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeSelector;