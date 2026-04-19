import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import mountainImg from '../assets/exp_mountain_1775951509664.png';
import coastImg from '../assets/exp_coast_1775951526936.png';
import desertImg from '../assets/exp_desert_1775951544289.png';

const Experiences = () => {
  const experiences = [
    {
      img: mountainImg,
      tag: 'ALTA MONTAÑA',
      title: 'Yoga & Trekking',
      duration: '7 días',
      desc: 'Desafía tus límites físicos mientras encuentras paz mental en las cumbres nevadas.'
    },
    {
      img: coastImg,
      tag: 'COSTA',
      title: 'Ciclismo & Gastronomía',
      duration: '5 días',
      desc: 'Recorre rutas costeras vírgenes y disfruta de la pesca artesanal en su estado más puro.'
    },
    {
      img: desertImg,
      tag: 'DESIERTO',
      title: 'Meditación & Silencio',
      duration: '10 días',
      desc: 'Una inmersión profunda en la vastedad del desierto para reconectar con tu esencia.'
    }
  ];

  return (
    <section id="experiencias" className="experiences">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experiencias Destacadas</h2>
          <p className="section-subtitle">Selecciones curadas para aquellos que buscan propósito en cada kilómetro recorrido.</p>
        </div>
        
        <div className="exp-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="exp-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="exp-img-wrapper">
                <img src={exp.img} alt={exp.title} />
                <span className="exp-tag">{exp.tag}</span>
              </div>
              <div className="exp-content">
                <div className="exp-meta">
                  <span><Calendar size={14} /> {exp.duration}</span>
                </div>
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <button className="exp-cta">Explorar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experiences {
          background-color: var(--bg-color);
        }
        
        .section-head {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: var(--spacing-xl);
        }
        
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        
        .exp-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
          border: 1px solid var(--border-color);
        }
        
        .exp-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: transparent;
        }
        
        .exp-img-wrapper {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        
        .exp-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        
        .exp-card:hover .exp-img-wrapper img {
          transform: scale(1.1);
        }
        
        .exp-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(18, 18, 18, 0.8);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-pill);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
        }
        
        .exp-content {
          padding: var(--spacing-md);
        }
        
        .exp-meta {
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          gap: 1rem;
        }
        
        .exp-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        
        .exp-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .exp-content p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: var(--spacing-md);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .exp-cta {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--accent-primary);
          padding-bottom: 2px;
          transition: var(--transition-smooth);
        }
        
        .exp-cta:hover {
          color: var(--accent-primary);
          padding-right: 5px;
        }
        
        @media (max-width: 1024px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Experiences;
