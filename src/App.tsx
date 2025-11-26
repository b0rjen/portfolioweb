import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Estados para controlar la transición y navegación
  const [showLanding, setShowLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mainContentVisible, setMainContentVisible] = useState(false);

  // Función para activar la transición desde landing hacia el contenido principal
  const handleLandingActivation = () => {
    if (isTransitioning) return; // Prevenir múltiples activaciones

    setIsTransitioning(true);

    // Después de la animación de fade out de landing (800ms)
    setTimeout(() => {
      setShowLanding(false);
      setMainContentVisible(true);
    }, 800);

    // Reset del estado de transición
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  // Función para navegar entre secciones del contenido principal
  const handleNavigation = (section: string) => {
    setActiveSection(section);

    // Scroll suave hacia la sección
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Detectar scroll para actualizar la sección activa
  useEffect(() => {
    if (showLanding) return;

    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLanding]);

  return (
    <div className="App">
      {/* Landing Page - Se muestra inicialmente */}
      {showLanding && (
        <LandingPage
          isVisible={showLanding}
          isTransitioning={isTransitioning}
          onActivate={handleLandingActivation}
        />
      )}

      {/* Contenido Principal - Se muestra después de la transición */}
      {!showLanding && (
        <div className={`main-content ${mainContentVisible ? 'visible' : 'hidden'}`}>
          <Header
            activeSection={activeSection}
            onNavigate={handleNavigation}
          />
          <main>
            <Home />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;