import React from 'react';
import { Code, Database, Brain, TrendingUp, Zap, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { effectiveTheme } = useTheme();

  const base = import.meta.env.BASE_URL;
  
  const profileImageSrc =
    effectiveTheme === 'dark'
      ? `${base}b0rjen_dark.jpg`
      : `${base}b0rjen_light.jpg`;

  const skills = [
    {
      icon: Code,
      title: 'Análisis de Datos',
      description: 'Especialista en Python, pandas, NumPy y visualización de datos con matplotlib y seaborn.'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Desarrollo de modelos predictivos usando scikit-learn, TensorFlow y análisis estadístico avanzado.'
    },
    {
      icon: Database,
      title: 'Inteligencia Artificial',
      description: 'Implementación de soluciones de IA, procesamiento de lenguaje natural y computer vision.'
    },
    {
      icon: TrendingUp,
      title: 'Data Science',
      description: 'Transformación de datos complejos en insights accionables para la toma de decisiones.'
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Desarrollo de pipelines automatizados y procesos ETL para optimizar workflows.'
    },
    {
      icon: Shield,
      title: 'Consultoría IA',
      description: 'Asesoramiento estratégico en implementación de soluciones de inteligencia artificial.'
    }
  ];

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Programador</span>
            </div>

            <div className="hero-badge">
              <span>Freelancer</span>
            </div>

            <h1 className="hero-title">
              <span className="gradient-text">La inteligencia no necesita dejar de ser humana</span>
            </h1>

            <p className="hero-description">
              ¡Hola, mundo! Soy <strong>Borja</strong>, y ayudo a las empresas a desarrollar herramientas para tomar decisiones, basadas en datos que no solo hacen crecer el negocio, sino que lo hacen de forma sostenible, cercana y ante todo, ética.
            </p>

            <div className="hero-actions">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button primary"
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button secondary"
              >
                Contactar
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img
                src={profileImageSrc}
                alt="Desarrollador | Data Analyst y Machine Learning | Inteligencia Artificial | Python"
                className="profile-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="skill-card stagger-animation" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">
                <Icon size={28} />
              </div>
              <h3 className="skill-title">{title}</h3>
              <p className="skill-description">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .home-section {
          min-height: 100vh;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .hero-badge {
          display: inline-block;
          background: var(--gradient-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
        }

        .cta-button {
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .cta-button.primary {
          background: var(--gradient-primary);
          color: white;
        }

        .cta-button.primary:hover {
          background: var(--gradient-secondary);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px color-mix(in srgb, var(--primary-color) 30%, transparent);
        }

        .cta-button.secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .cta-button.secondary:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px) scale(1.02);
        }

        .hero-image {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s both;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transform: rotate(3deg);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-container:hover {
          transform: rotate(0deg) scale(1.05);
        }

        .profile-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--text-primary) 8%, transparent);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .skill-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .skill-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .skill-description {
          color: var(--text-muted);
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .home-section {
            padding: 100px 0 60px;
          }

          .container {
            padding: 0 1rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 280px;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;