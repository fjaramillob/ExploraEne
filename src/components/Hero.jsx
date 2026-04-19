import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero_nature_1775951489814.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImg})` }}
        >
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Desconéctate y Conéctate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Viajes experienciales que combinan ejercicio, movilidad y los cinco sentidos para una transformación profunda en los entornos más puros del planeta.
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#experiencias" className="button-primary">Explora Experiencias</a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          padding-top: 120px;
          padding-bottom: 60px;
        }
        
        .hero-card {
          height: 80vh;
          min-height: 600px;
          border-radius: var(--radius-xl);
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
          position: relative;
        }
        
        .hero-content {
          max-width: 850px;
          padding: 0 var(--spacing-lg);
          z-index: 2;
        }
        
        h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          margin-bottom: var(--spacing-md);
          font-weight: 800;
        }
        
        p {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
          font-weight: 400;
          line-height: 1.4;
        }
        
        .hero-btns {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
        }
        
        .button-outline-white {
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 0.75rem 2rem;
          border-radius: var(--radius-pill);
          font-weight: 600;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition-smooth);
          backdrop-filter: blur(4px);
        }
        
        .button-outline-white:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .hero-card {
            height: 70vh;
            border-radius: var(--radius-lg);
          }
          .hero-btns {
            flex-direction: column;
            align-items: center;
          }
          .hero-btns button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
