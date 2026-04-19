import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
        <h2>Artículo no encontrado</h2>
        <button onClick={() => navigate('/blog')} className="button-primary" style={{ marginTop: '2rem' }}>
          Volver al Blog
        </button>
      </div>
    );
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} - Explora ENE Blog</title>
        <meta name="description" content="Descubre los 5 mejores trekking fáciles en Santiago, ideales para principiantes y panoramas de baja a media dificultad, con vistas, naturaleza y rutas accesibles." />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="blog-post">
        {/* Breadcrumbs */}
        <div className="container">
          <nav className="breadcrumbs" aria-label="breadcrumb">
            <Link to="/" className="breadcrumb-link">Inicio</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{post.category}</span>
          </nav>
        </div>

        {/* Post Header */}
        <header className="post-header container">
          <span className="post-category">{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <div className="meta-item">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="post-hero-image container">
          <img src={post.featuredImage} alt={post.title} />
        </div>

        {/* Content */}
        <div className="container">
          <div 
            className="prose" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>

        {/* FAQ SEO Block (Hardcoded for this article to fulfill request, but could be dynamic) */}
        {post.slug === 'mejores-trekking-faciles-santiago' && (
          <div className="container">
            <div className="faq-seo-block prose">
              <h2>Preguntas Frecuentes (FAQ)</h2>
              <div className="faq-item">
                <h3>¿Cuál es el trekking más fácil de Santiago?</h3>
                <p>El Sendero Mapuche y el Sendero Ermitaño destacan por ser de los más accesibles, ideales para ir en familia o para un primer acercamiento a la montaña.</p>
              </div>
              <div className="faq-item">
                <h3>¿Qué trekking hacer en Santiago si soy principiante?</h3>
                <p>Te recomendamos comenzar por el Sendero Mapuche o Bosque Panul, y una vez ganes confianza, intentar el Alto del Naranjo o Las Hualtatas.</p>
              </div>
              <div className="faq-item">
                <h3>¿Qué llevar a un trekking fácil?</h3>
                <p>Agua (mínimo 1.5 litros), protección solar, zapatos con buen agarre (idealmente de trekking), un snack ligero (frutos secos) y vestimenta por capas.</p>
              </div>
              <div className="faq-item">
                <h3>¿Cuál es la mejor época para hacer trekking en Santiago?</h3>
                <p>Primavera (septiembre a noviembre) y otoño (marzo a mayo) son ideales, ya que las temperaturas son moderadas y los colores de la naturaleza están en su máximo esplendor.</p>
              </div>
            </div>
          </div>
        )}

        {/* Subtle CTA */}
        <section className="post-cta-section container">
          <div className="post-cta-box glass">
            <h3>¿Listo para pasar a la acción?</h3>
            <p>Descubre más rutas, panoramas y experiencias outdoor estructuradas y guiadas con profesionalismo junto a Explora ENE.</p>
            <div className="cta-actions">
              <a href="https://wa.me/56987617739" target="_blank" rel="noopener noreferrer" className="button-primary">
                Consultar próximas salidas
              </a>
              <Link to="/#experiencias" className="button-outline">
                Ver experiencias
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts bg-light">
            <div className="container">
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
                Artículos Relacionados
              </h2>
              <div className="posts-grid">
                {relatedPosts.map(relPost => (
                  <Link to={`/blog/${relPost.slug}`} key={relPost.id} className="post-card">
                    <div className="post-image">
                      <img src={relPost.featuredImage} alt={relPost.title} />
                      <span className="post-category-tag">{relPost.category}</span>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title" style={{ fontSize: '1.1rem' }}>{relPost.title}</h3>
                      <span className="read-more" style={{ fontSize: '0.9rem' }}>Leer artículo →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <style jsx>{`
        .blog-post {
          padding-top: 100px;
          padding-bottom: 0;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .breadcrumb-link:hover {
          color: var(--text-primary);
        }

        .breadcrumb-current {
          color: var(--text-primary);
          font-weight: 500;
        }

        .post-header {
          max-width: 900px;
          margin-bottom: 2.5rem;
        }

        .post-category {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .post-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .post-hero-image {
          margin-bottom: 4rem;
        }

        .post-hero-image img {
          width: 100%;
          height: 50vh;
          min-height: 400px;
          max-height: 600px;
          object-fit: cover;
          border-radius: var(--radius-lg);
        }

        /* FAQ y CTA */
        .faq-seo-block {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .faq-item {
          margin-bottom: 1.5rem;
        }
        
        .faq-item h3 {
          margin-top: 1rem !important;
          margin-bottom: 0.5rem !important;
          font-size: 1.25rem !important;
        }

        .post-cta-section {
          margin: 4rem auto;
          max-width: 800px;
        }

        .post-cta-box {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: var(--radius-lg);
          background-color: var(--surface-color);
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .post-cta-box h3 {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .post-cta-box p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .related-posts {
          padding: 4rem 0;
          background-color: var(--surface-color);
          border-top: 1px solid var(--border-color);
        }

        /* Reutilización de grilla */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .post-card {
          background: var(--bg-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .post-card:hover {
          transform: translateY(-4px);
        }

        .post-image {
          position: relative;
          height: 180px;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-category-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-pill);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .post-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .read-more {
          margin-top: auto;
          font-weight: 600;
          color: var(--text-primary);
          display: inline-block;
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default BlogPost;
