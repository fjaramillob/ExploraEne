import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/LOGOTIPO EXPLORAENE_LOGOTIPO COLOR.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'glass' : 'transparent'}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="Explora ENE" className="logo-img" />
          </Link>
        </div>
        
        <nav className="nav-desktop">
          <a href="/#experiencias">Experiencias</a>
          <a href="/#filosofia">Filosofía</a>
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
          height: 110px;
          display: flex;
          align-items: center;
          transition: height 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease;
        }

        .header.transparent {
          background: transparent;
          backdrop-filter: blur(0px);
          border-bottom: 1px solid transparent;
        }

        .header.glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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

        .logo-img {
          height: 95px;
          display: block;
          transition: height 0.3s ease;
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
          .header {
            height: 80px;
          }
          .logo-img {
            height: 65px;
          }
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
