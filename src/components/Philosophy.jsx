import React from 'react';
import { Activity, Eye, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const cards = [
    {
      icon: <Activity size={32} />,
      title: 'Movimiento',
      text: 'Ejercicios funcionales para mejorar tu movilidad y vitalidad diaria.'
    },
    {
      icon: <Eye size={32} />,
      title: 'Sentidos',
      text: 'Experiencias sensoriales que despiertan tu percepción del entorno.'
    },
    {
      icon: <Mountain size={32} />,
      title: 'Naturaleza',
      text: 'Inmersión profunda en paisajes naturales que inspiran calma.'
    }
  ];

  return (
    <section id="filosofia" className="philosophy">
      <div className="container">
        <div className="philosophy-layout">
          <div className="philosophy-text">
            <span className="label">NUESTRA FILOSOFÍA</span>
            <h2 className="section-title">El Arte del Movimiento Consciente</h2>
            <p className="description">
              Creemos que el viaje exterior es solo el comienzo. En cada exploración, 
              integramos prácticas que desafían el cuerpo y nutren la mente, 
              creando un equilibrio perfecto entre esfuerzo y contemplación.
            </p>
            <p className="description">
              No se trata solo de llegar al destino, sino de cómo te transformas 
              en el camino. Nuestra metodología combina la ciencia del ejercicio 
              con la sabiduría de la naturaleza.
            </p>
          </div>
          
          <div className="philosophy-cards">
            {cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="p-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="p-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .philosophy {
          background-color: var(--surface-color);
        }
        
        .philosophy-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        
        .label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--accent-primary);
          display: block;
          margin-bottom: var(--spacing-sm);
        }
        
        .description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          max-width: 500px;
        }
        
        .philosophy-cards {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        
        .p-card {
          background: var(--bg-color);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: var(--spacing-md);
          transition: var(--transition-smooth);
          border: 1px solid transparent;
        }
        
        .p-card:hover {
          transform: scale(1.02);
          border-color: var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          background: white;
        }
        
        .p-icon {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .p-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        
        .p-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        @media (max-width: 1024px) {
          .philosophy-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
          .philosophy-text {
            text-align: center;
          }
          .description {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
