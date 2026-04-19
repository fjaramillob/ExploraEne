import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Listo para comenzar tu transformación?</h2>
          <p>Conecta con nosotros directamente para resolver tus dudas y organizar tu próxima experiencia en la naturaleza.</p>
          
          <div className="cta-action">
            <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer" className="button-dark">
              Contáctanos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-section {
          background-color: var(--bg-color);
          padding-bottom: var(--spacing-xxl);
        }
        
        .cta-card {
          background-color: var(--accent-primary);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xxl) var(--spacing-lg);
          text-align: center;
          color: white;
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 30px 60px rgba(240, 123, 58, 0.2);
        }
        
        h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: var(--spacing-md);
        }
        
        p {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }
        
        .cta-action {
          margin-top: var(--spacing-md);
        }
        
        .button-dark {
          display: inline-block;
          background: var(--text-primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        
        .button-dark:hover {
          transform: translateY(-2px);
          background: #000;
        }
        
        @media (max-width: 640px) {
          .cta-card {
            padding: var(--spacing-xl) var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
