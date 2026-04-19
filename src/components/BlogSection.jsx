import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogSection = () => {
  // Take last 3 posts to show on home page
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="posts-grid-section" id="blog-preview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Últimos Artículos</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            Descubre nuestras experiencias, consejos y filosofías para acompañar en cada paso.
          </p>
        </div>
        
        <div className="posts-grid">
          {latestPosts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.featuredImage} alt={post.title} />
                <span className="post-category-tag">{post.category}</span>
              </div>
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="read-more">Leer artículo →</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="view-all-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/blog" className="button-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Ver todos los artículos
          </Link>
        </div>
      </div>

      <style jsx>{`
        .posts-grid-section {
          padding: 6rem 0;
          background-color: var(--surface-color);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .post-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
        }

        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.06);
        }

        .post-image {
          position: relative;
          height: 220px;
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
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .post-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .post-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .post-excerpt {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .read-more {
          font-weight: 600;
          color: var(--text-primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
