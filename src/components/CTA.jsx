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
          <p>Únete a nuestra comunidad y recibe noticias sobre nuestras próximas expediciones y consejos de movilidad consciente.</p>
          
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button className="button-dark">Suscribirse</button>
          </form>
          
          <span className="cta-alt">
            o <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer">reserva una llamada de WhatsApp ahora</a>
          </span>
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
        
        .cta-form {
          display: flex;
          gap: var(--spacing-sm);
          max-width: 500px;
          margin: 0 auto var(--spacing-md);
        }
        
        input {
          flex-grow: 1;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        input:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
        }
        
        .button-dark {
          background: var(--text-primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          transition: var(--transition-smooth);
        }
        
        .button-dark:hover {
          transform: translateY(-2px);
          background: #000;
        }
        
        .cta-alt {
          display: block;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .cta-alt a {
          text-decoration: underline;
          font-weight: 600;
        }
        
        @media (max-width: 640px) {
          .cta-form {
            flex-direction: column;
          }
          .cta-card {
            padding: var(--spacing-xl) var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
