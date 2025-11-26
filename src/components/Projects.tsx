import React from 'react';
import { ExternalLink, Github, Database, Brain, TrendingUp, Zap, BarChart3, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Análisis Predictivo',
      description: 'Plataforma de machine learning para predicción de tendencias de mercado usando Python, scikit-learn y análisis de series temporales.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      icon: TrendingUp,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard de Business Intelligence',
      description: 'Visualización interactiva de datos empresariales con análisis en tiempo real y KPIs automatizados para toma de decisiones.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Power BI', 'Python', 'SQL', 'Data Visualization'],
      icon: BarChart3,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: true
    },
    {
      id: 3,
      title: 'Procesamiento de Lenguaje Natural',
      description: 'Sistema de análisis de sentimientos y clasificación de texto usando NLP avanzado con bibliotecas especializadas de Python.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NLP', 'NLTK', 'spaCy', 'TensorFlow'],
      icon: Brain,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    },
    {
      id: 4,
      title: 'Automatización de Procesos ETL',
      description: 'Pipeline automatizado para extracción, transformación y carga de datos de múltiples fuentes con validación y monitoreo.',
      image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ETL', 'Apache Airflow', 'PostgreSQL', 'Python'],
      icon: Zap,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    },
    {
      id: 5,
      title: 'Sistema de Recomendación IA',
      description: 'Algoritmo de recomendación personalizado usando collaborative filtering y deep learning para e-commerce.',
      image: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Recommendation Systems', 'Deep Learning', 'Collaborative Filtering'],
      icon: Database,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    },
    {
      id: 6,
      title: 'Análisis de Datos Financieros',
      description: 'Herramienta de análisis cuantitativo para mercados financieros con modelos de riesgo y backtesting automatizado.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Quantitative Analysis', 'Risk Modeling', 'Financial Data'],
      icon: FileText,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    },
    {
      id: 7,
      title: 'Computer Vision para Detección',
      description: 'Sistema de visión artificial para detección y clasificación de objetos en tiempo real usando OpenCV y deep learning.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Computer Vision', 'OpenCV', 'Deep Learning', 'Real-time'],
      icon: Brain,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    },
    {
      id: 8,
      title: 'Optimización de Algoritmos ML',
      description: 'Framework de optimización automática de hiperparámetros para modelos de machine learning con técnicas avanzadas.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Hyperparameter Tuning', 'AutoML', 'Optimization', 'Performance'],
      icon: Zap,
      demoUrl: 'https://github.com/b0rjen',
      codeUrl: 'https://github.com/b0rjen',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Proyectos de <span className="gradient-text">Análisis de Datos</span> e IA
          </h2>
          <p className="section-description">
            Una selección de proyectos que demuestran mi experiencia en <strong>análisis de datos con Python</strong>, 
            <strong> machine learning</strong> e implementación de <strong>soluciones de inteligencia artificial</strong> 
            para resolver problemas empresariales complejos.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="subsection-title">Proyectos Destacados</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          <h3 className="subsection-title">Más Proyectos</h3>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .featured-projects,
        .other-projects {
          margin-bottom: 4rem;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          text-align: center;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
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
          .container {
            padding: 0 1rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const { title, description, image, tags, icon: Icon, demoUrl, codeUrl } = project;

  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img
          src={image}
          alt={`${title} - Proyecto de análisis de datos y machine learning`}
          loading="lazy"
        />
        <div className="project-overlay">
          <div className="project-actions">
            <a
              href={demoUrl}
              className="action-button"
              aria-label={`Ver demo de ${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={codeUrl}
              className="action-button"
              aria-label={`Ver código de ${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <div className="project-icon">
            <Icon size={24} />
          </div>
          <h3 className="project-title">{title}</h3>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: var(--card-bg);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--text-primary) 8%, transparent);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          animation: fadeInUp 0.6s ease-out both;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .project-card.featured {
          border: 2px solid color-mix(in srgb, var(--primary-color) 20%, transparent);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-card.featured .project-image {
          height: 250px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, color-mix(in srgb, var(--primary-color) 80%, transparent), color-mix(in srgb, var(--secondary-color) 80%, transparent));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-button {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: white;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .action-button:hover {
          transform: scale(1.1);
          background: var(--primary-color);
          color: white;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-card.featured .project-content {
          padding: 2rem;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .project-card.featured .project-title {
          font-size: 1.375rem;
        }

        .project-description {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
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
      `}</style>
    </article>
  );
};

export default Projects;