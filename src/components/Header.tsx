import React from 'react';
import { Menu, X, Code2, Database, Mail } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { id: 'home', label: 'Inicio', icon: Code2 },
    { id: 'projects', label: 'Proyectos', icon: Database },
    { id: 'contact', label: 'Contacto', icon: Mail }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <ThemeSelector />
        
        <div className="header-brand">
          <button
            onClick={() => onNavigate('home')}
            className="brand-link"
            aria-label="Ir al inicio"
          >
            borjen.dev
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {navigation.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        aria-label="Navegación móvil"
      >
        <ul className="mobile-nav-list">
          {navigation.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => {
                  onNavigate(id);
                  setIsMenuOpen(false);
                }}
                className={`mobile-nav-link ${activeSection === id ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: color-mix(in srgb, var(--bg-primary) 95%, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-brand {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .brand-link {
          font-size: 1.5rem;
          font-weight: 600;
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          color: var(--text-primary);
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.02em;
        }

        .brand-link:hover {
          color: var(--primary-color);
          text-shadow: 0 0 15px color-mix(in srgb, var(--primary-color) 40%, transparent);
          letter-spacing: 0.02em;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: none;
          border: none;
          border-radius: 8px;
          color: var(--text-muted);
          font-weight: 500;
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
        }

        .nav-link.active {
          color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--bg-tertiary);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 1rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 1rem;
          background: none;
          border: none;
          border-radius: 8px;
          color: var(--text-muted);
          font-weight: 500;
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-nav {
            display: none;
          }

          .header-container {
            padding: 1.5rem 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;