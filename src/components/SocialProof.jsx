import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Andrés Rivera",
      text: "No es un viaje típico. La combinación de entrenamiento funcional y el entorno de la Patagonia chilena cambió mi perspectiva sobre lo que es descansar.",
      role: "Emprendedor"
    },
    {
      name: "Valentina Soto",
      text: "La atención al detalle en la curaduría de las experiencias es de otro nivel. Me sentí segura, inspirada y conectada en todo momento.",
      role: "Diseñadora"
    },
    {
      name: "Marco Torres",
      text: "Explora ENE logra lo que pocos: una desconexión real del ruido digital y una reconexión profunda con el cuerpo y la naturaleza.",
      role: "Arquitecto"
    }
  ];

  const signals = [
    "Grupos reducidos (Máx 8)",
    "Experiencias curadas",
    "Guías especializados",
    "Enfoque humano"
  ];

  return (
    <section className="social-proof">
      <div className="container">
        <div className="trust-signals">
          {signals.map((signal, index) => (
            <div key={index} className="signal">
              <CheckCircle2 size={16} color="var(--accent-primary)" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
        
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          Testimonios
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />)}
              </div>
              <p className="test-text">"{test.text}"</p>
              <div className="test-author">
                <strong>{test.name}</strong>
                <span>{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-proof {
          background-color: var(--surface-color);
          border-top: 1px solid var(--border-color);
        }
        
        .trust-signals {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          flex-wrap: wrap;
          margin-bottom: var(--spacing-xxl);
        }
        
        .signal {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        
        .testimonial-card {
          padding: var(--spacing-lg);
          background: var(--bg-color);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
        }
        
        .stars {
          display: flex;
          gap: 2px;
          margin-bottom: var(--spacing-md);
        }
        
        .test-text {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: var(--spacing-lg);
          flex-grow: 1;
        }
        
        .test-author {
          display: flex;
          flex-direction: column;
        }
        
        .test-author strong {
          color: var(--text-primary);
        }
        
        .test-author span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
          .trust-signals {
            gap: var(--spacing-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
