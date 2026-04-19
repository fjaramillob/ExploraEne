import React from 'react';
import { motion } from 'framer-motion';

// Imágenes premium
import imgMovimiento from '../assets/Filosofia_Movimiento.png';
import imgSentidos from '../assets/Filosofia_Sentidos.png';
import imgNaturaleza from '../assets/Filosofia_Naturaleza.png';

const Philosophy = () => {
  const cards = [
    {
      image: imgMovimiento,
      title: 'Movimiento',
      text: 'Activamos tu vitalidad con mecánicas funcionales que desafían y reconfortan tu cuerpo, convirtiendo el esfuerzo en energía pura.'
    },
    {
      image: imgSentidos,
      title: 'Sentidos',
      text: 'Despertamos una percepción aguda, permitiéndote asimilar cada textura, sonido y atmósfera inexplorada que el entorno ofrece.'
    },
    {
      image: imgNaturaleza,
      title: 'Naturaleza',
      text: 'Una inmersión absoluta donde la inmensidad del paisaje se convierte en tu ecosistema personal y en el reflejo de tu mayor calma.'
    }
  ];

  return (
    <section id="filosofia" className="philosophy">
      <div className="container">
        <div className="philosophy-layout">
          <div className="philosophy-text">
            <motion.span 
              className="label"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NUESTRA FILOSOFÍA
            </motion.span>
            
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              El Arte del <span className="highlight-text">Movimiento Consciente</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="description lead">
                No somos simples espectadores del paisaje; somos parte de él.
              </p>
              
              <p className="description">
                Desafiamos la noción tradicional de exploración. Aquí, el entorno no es
                sólo un escenario majestuoso, sino un catalizador vital diseñado para tu propia 
                transformación.
              </p>
              
              <p className="description">
                Elevamos la experiencia fusionando exigencia exterior con revelación interior, 
                forjando un equilibrio sublime donde cada paso te acerca a tu mejor versión.
              </p>
            </motion.div>
          </div>
          
          <div className="philosophy-cards">
            {cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="p-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: 0.2 + (index * 0.15), 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div className="p-image-wrapper">
                  <img src={card.image} alt={card.title} />
                  <div className="p-image-overlay"></div>
                </div>
                <div className="p-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .philosophy {
          background-color: var(--surface-color);
          padding: 8rem 0; /* Mayor respiración visual */
        }
        
        .philosophy-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        
        .label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 1.5rem;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
        }

        .highlight-text {
          color: var(--accent-primary);
        }
        
        .description.lead {
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          max-width: 540px;
        }

        .description:last-child {
          margin-bottom: 0;
        }
        
        .philosophy-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .p-card {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: grid;
          grid-template-columns: 85px 1fr;
          gap: 1.75rem;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        
        .p-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,0,0,0.06);
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
        }
        
        .p-image-wrapper {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .p-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .p-card:hover .p-image-wrapper img {
          transform: scale(1.1);
        }

        .p-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, var(--accent-primary) 0%, transparent 100%);
          opacity: 0.15;
          mix-blend-mode: overlay;
          transition: opacity 0.5s ease;
        }

        .p-card:hover .p-image-overlay {
          opacity: 0;
        }
        
        .p-card-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }
        
        .p-card-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .philosophy {
            padding: 5rem 0;
          }
          .philosophy-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .philosophy-text {
            text-align: center;
          }
          .description, .description.lead {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 600px) {
          .p-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1.25rem;
          }
          .p-image-wrapper {
            width: 70px;
            height: 70px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
