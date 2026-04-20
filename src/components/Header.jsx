import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/LOGOTIPO EXPLORAENE_LOGOTIPO COLOR.png';
import logoWhiteImg from '../assets/LOGOTIPO EXPLORAENE_LOGOTIPO BLANCO.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const headerClass = isHomePage 
    ? (isScrolled ? 'glass' : 'transparent') 
    : 'glass';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${headerClass}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img 
              src={headerClass === 'transparent' ? logoWhiteImg : logoImg} 
              alt="Explora ENE" 
              className="logo-img" 
            />
          </Link>
        </div>
        
        <nav className={`nav-desktop ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/#experiencias" onClick={closeMobileMenu}>Experiencias</a>
          <a href="/#filosofia" onClick={closeMobileMenu}>Filosofía</a>
          <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
        </nav>
        
        <div className="header-actions">
          <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer" className="button-primary">
            Reservar
          </a>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          background-color: transparent;
          backdrop-filter: none;
          box-shadow: none;
          border-bottom: 1px solid transparent;
        }

        .header.transparent .nav-desktop a {
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .header.transparent .nav-desktop a:hover {
          color: white;
        }

        .header.glass {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
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
          transition: color 0.3s ease;
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
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header.transparent .mobile-menu-toggle {
          color: rgba(255, 255, 255, 0.9);
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
          .nav-desktop.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            padding: var(--spacing-lg) var(--spacing-md);
            gap: var(--spacing-md);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }
          
          .nav-desktop.mobile-open a {
            font-size: 1.1rem;
            padding: var(--spacing-sm) 0;
            text-align: center;
            color: var(--text-primary) !important;
            text-shadow: none !important;
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }

          .nav-desktop.mobile-open a:last-child {
            border-bottom: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }
          .header-actions {
            gap: var(--spacing-sm);
          }
          .button-primary {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
