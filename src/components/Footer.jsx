import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              Explora <span>ENE</span>
            </div>
            <p>Experiencias premium en el fin del mundo. Conectando lo humano con lo salvaje.</p>
            <div className="social-links">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>Compañía</h4>
              <a href="/#nosotros">Nosotros</a>
              <a href="/#filosofia">Filosofía</a>
              <Link to="/blog">Blog</Link>
              <a href="/#prensa">Prensa</a>
            </div>
            <div className="link-col">
              <h4>Viajes</h4>
              <a href="/#experiencias">Alta Montaña</a>
              <a href="/#experiencias">Costa</a>
              <a href="/#experiencias">Desierto</a>
              <a href="/#experiencias">Personalizados</a>
            </div>
            <div className="link-col">
              <h4>Soporte</h4>
              <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer">Contacto</a>
              <a href="/#faq">FAQ</a>
              <a href="/#terminos">Términos</a>
              <a href="/#privacidad">Privacidad</a>
            </div>
            <div className="link-col">
              <h4>Marca</h4>
              <a href="/#diseño">Stitch Design</a>
              <a href="/#kit">Brand Kit</a>
              <a href="/#assets">Assets</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Explora ENE. Todos los derechos reservados.</p>
          <button className="scroll-btn" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: var(--spacing-xxl) 0 var(--spacing-md);
          background: var(--surface-color);
          border-top: 1px solid var(--border-color);
        }
        
        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-xxl);
          margin-bottom: var(--spacing-xxl);
        }
        
        .footer-brand {
          max-width: 300px;
        }
        
        .logo {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          margin-bottom: var(--spacing-md);
        }
        
        .logo span {
          color: var(--accent-primary);
        }
        
        .footer-brand p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }
        
        .social-links a {
          color: var(--text-secondary);
        }
        
        .social-links a:hover {
          color: var(--accent-primary);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
        }
        
        .link-col h4 {
          margin-bottom: var(--spacing-md);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }
        
        .link-col a {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .link-col a:hover {
          color: var(--text-primary);
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        
        .scroll-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        
        .scroll-btn:hover {
          background: var(--text-primary);
          color: white;
          border-color: var(--text-primary);
        }
        
        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
