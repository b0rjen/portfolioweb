import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  isVisible: boolean;
  isTransitioning: boolean;
  onActivate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ isVisible, isTransitioning, onActivate }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const targetText = 'borjen.dev';
  const languages = ['presiona cualquier tecla', 'press any key'];

  // Efecto de escritura animada y configuración inicial
  useEffect(() => {
    if (!isVisible) return;

    // Efecto de escritura animada
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= targetText.length) {
        setDisplayedText(targetText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setAnimationComplete(true);
      }
    }, 150);

    // Parpadeo del cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Alternancia de idiomas
    const languageInterval = setInterval(() => {
      setCurrentLanguage(prev => (prev + 1) % languages.length);
    }, 2000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearInterval(languageInterval);
    };
  }, [isVisible]);

  // Event listeners para múltiples métodos de activación
  useEffect(() => {
    if (!animationComplete || isTransitioning) return;

    // 1. Activación por teclado
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignorar teclas de navegación
      if (['Tab', 'Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;
      onActivate();
    };

    // 2. Activación por scroll
    const handleScroll = () => {
      if (window.scrollY > 30) {
        onActivate();
      }
    };

    // 3. Activación por touch (móviles)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // Swipe hacia arriba (scroll down)
      if (deltaY > 50) {
        onActivate();
      }
    };

    // Agregar event listeners
    document.addEventListener('keydown', handleKeyPress);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [animationComplete, isTransitioning, onActivate]);

  // 4. Activación por click
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (animationComplete && !isTransitioning) {
      onActivate();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`landing-page ${isTransitioning ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      <div className="landing-content">
        <h1 className="brand-name">
          {displayedText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </h1>
        <p className={`activation-text ${animationComplete ? 'fade-in' : ''}`}>
          {languages[currentLanguage]}
        </p>

        {/* Indicadores visuales de interacción */}
        {animationComplete && (
          <div className="interaction-hints fade-in">
            <div className="hint-item">
              <span className="hint-icon">⌨️</span>
              <span>Presiona cualquier tecla</span>
            </div>
            <div className="hint-item">
              <span className="hint-icon">🖱️</span>
              <span>Haz click</span>
            </div>
            <div className="hint-item">
              <span className="hint-icon">📱</span>
              <span>Desliza hacia arriba</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .landing-page {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: pointer;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .landing-page.fade-out {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        .landing-content {
          text-align: center;
          color: white;
          max-width: 600px;
          padding: 2rem;
        }

        .brand-name {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 600;
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          color: #f97316;
          text-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .brand-name:hover {
          transform: scale(1.5);
          text-shadow: 0 0 30px rgba(249, 115, 22, 0.5), 0 0 60px rgba(249, 115, 22, 0.2);
          letter-spacing: 0.05em;
        }

        .cursor {
          opacity: 0;
          transition: opacity 0.2s ease;
          color: #3b82f6;
        }

        .cursor.visible {
          opacity: 1;
        }

        .activation-text {
          font-size: 1.2rem;
          color: #94a3b8;
          font-weight: 400;
          text-transform: lowercase;
          letter-spacing: 0.05em;
          animation: pulse 3s ease-in-out infinite;
          margin-bottom: 3rem;
        }

        .interaction-hints {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          opacity: 0.7;
        }

        .hint-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #64748b;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .hint-item:hover {
          color: #94a3b8;
          transform: translateY(-2px);
        }

        .hint-icon {
          font-size: 1.5rem;
          filter: grayscale(0.3);
          transition: filter 0.3s ease;
        }

        .hint-item:hover .hint-icon {
          filter: grayscale(0);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .brand-name {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
          
          .activation-text {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .interaction-hints {
            gap: 1rem;
          }

          .hint-item {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;