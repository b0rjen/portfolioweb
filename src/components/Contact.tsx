import React, { useState } from 'react';
import { Mail, Send, User, MessageCircle, Instagram, Twitter, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulación de envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de envío del formulario
      console.log('Datos del formulario:', formData);
      
      setStatus('success');
      setStatusMessage('¡Mensaje enviado correctamente! Te contactaré pronto.');
      setFormData({ nombre: '', apellidos: '', email: '', mensaje: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/BorjaRamosOliva',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/borjaramosoliva/',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/b0rjen/',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:borjendev@proton.me',
      color: '#EA4335'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            ¿Me das un toque?
          </h2>
          <p className="section-description">
            Estas son las maneras más rápidas de contactar conmigo
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">
                    <User size={18} />
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="apellidos">
                    <User size={18} />
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={18} />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">
                  <MessageCircle size={18} />
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto de análisis de datos, machine learning o IA. ¿Qué desafío necesitas resolver?"
                ></textarea>
              </div>

              {status !== 'idle' && (
                <div className={`status-message ${status}`}>
                  {status === 'success' && <CheckCircle size={20} />}
                  {status === 'error' && <AlertCircle size={20} />}
                  {status === 'loading' && <div className="spinner"></div>}
                  <span>{statusMessage || 'Enviando mensaje...'}</span>
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>¿Hablamos?</h3>
              <p>
                Como especialista en las técnicas modernas de análisis, aprendizaje automático e inteligencia artificial, estoy dispuesto a ayudarte. ¡Contáctame!
              </p>
            </div>

            <div className="social-links">
              <h4>Sígueme en redes</h4>
              <div className="social-grid">
                {socialLinks.map(({ name, icon: Icon, url, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--hover-color': color } as React.CSSProperties}
                    aria-label={`Seguir a Borjen Dev en ${name}`}
                  >
                    <Icon size={24} />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .title-icon {
          color: var(--primary-color);
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-container {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .contact-form {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px color-mix(in srgb, var(--text-primary) 10%, transparent);
          border: 1px solid var(--border-color);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: var(--card-bg);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 10%, transparent);
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .status-message.success {
          background: color-mix(in srgb, #22c55e 10%, transparent);
          color: #166534;
          border: 1px solid color-mix(in srgb, #22c55e 20%, transparent);
        }

        .status-message.error {
          background: color-mix(in srgb, #ef4444 10%, transparent);
          color: #991b1b;
          border: 1px solid color-mix(in srgb, #ef4444 20%, transparent);
        }

        .status-message.loading {
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
          color: var(--primary-color);
          border: 1px solid color-mix(in srgb, var(--primary-color) 20%, transparent);
        }

        .submit-button {
          width: 100%;
          padding: 1rem 2rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-button:hover:not(:disabled) {
          background: var(--gradient-secondary);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px color-mix(in srgb, var(--primary-color) 30%, transparent);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .contact-info {
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .info-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--text-primary) 8%, transparent);
          margin-bottom: 2rem;
          border: 1px solid var(--border-color);
        }

        .info-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .info-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
        }

        .info-card li {
          color: var(--text-muted);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
          position: relative;
          padding-left: 1.5rem;
        }

        .info-card li:before {
          content: "•";
          color: var(--primary-color);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .social-links h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .social-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1rem;
          background: var(--card-bg);
          color: var(--text-muted);
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px color-mix(in srgb, var(--text-primary) 5%, transparent);
          border: 1px solid var(--border-color);
        }

        .social-link:hover {
          color: var(--hover-color);
          background: var(--card-bg);
          transform: translateX(8px);
          box-shadow: 0 4px 20px color-mix(in srgb, var(--text-primary) 10%, transparent);
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

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .contact-form {
            padding: 2rem 1.5rem;
          }

          .section-title {
            flex-direction: column;
            gap: 0.5rem;
          }

          .social-grid {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;