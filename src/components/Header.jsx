import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/LOGOTIPO EXPLORAENE_LOGOTIPO COLOR.png';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="Explora ENE" style={{ height: '65px', display: 'block' }} />
          </Link>
        </div>
        
        <nav className="nav-desktop">
          <a href="/#experiencias">Experiencias</a>
          <a href="/#filosofia">Filosofía</a>
          <a href="/#destinos">Destinos</a>
          <Link to="/blog">Blog</Link>
        </nav>
        
        <div className="header-actions">
          <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer" className="button-primary">
            Reservar
          </a>

          <button className="mobile-menu-toggle">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          color: var(--text-primary);
        }
        
        .logo span {
          color: var(--accent-primary);
        }
        
        .nav-desktop {
          display: flex;
          gap: var(--spacing-lg);
        }
        
        .nav-desktop a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        
        .nav-desktop a:hover {
          color: var(--text-primary);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        

        
        .mobile-menu-toggle {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }

        }
      `}</style>
    </header>
  );
};

export default Header;
