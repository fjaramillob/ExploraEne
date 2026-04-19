import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, blogCategories } from '../data/blogData';

const BlogIndex = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured && (activeCategory === 'todos' || post.category === blogCategories.find(c => c.id === activeCategory)?.label));

  return (
    <>
      <Helmet>
        <title>Blog - Explora ENE | Trekking y Aventuras en Santiago</title>
        <meta name="description" content="Descubre rutas, consejos y escapadas de trekking cerca de Santiago. Explora la naturaleza con los expertos de Explora ENE." />
      </Helmet>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container blog-hero-container">
          <h1 className="section-title">Nuestro <span>Blog</span></h1>
          <p className="section-subtitle">Descubre el mundo outdoor: trekking, escapadas y experiencias cautivadoras muy cerca de Santiago.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-categories bg-light">
        <div className="container">
          <div className="categories-wrapper">
            {blogCategories.map(category => (
              <button
                key={category.id}
                className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'todos' && (
        <section className="featured-post-section">
          <div className="container">
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Artículo Destacado</h2>
            <Link to={`/blog/${featuredPost.slug}`} className="featured-card">
              <div className="featured-image">
                <img src={featuredPost.featuredImage} alt={featuredPost.title} />
              </div>
              <div className="featured-content">
                <span className="category-tag">{featuredPost.category}</span>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <span className="read-more">Leer artículo →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="posts-grid-section">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            {activeCategory === 'todos' ? 'Últimos Artículos' : blogCategories.find(c => c.id === activeCategory)?.label}
          </h2>
          
          <div className="posts-grid">
            {regularPosts.map(post => (
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
            
            {regularPosts.length === 0 && (
              <p className="no-posts">Próximamente publicaremos artículos en esta categoría.</p>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-hero {
          padding: 8rem 0 4rem;
          background: linear-gradient(to bottom, var(--bg-color), #ffffff);
          text-align: center;
        }

        .blog-hero h1 span {
          color: var(--accent-primary);
        }

        .bg-light {
          background-color: var(--surface-color);
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .categories-wrapper {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: none; /* Firefox */
        }
        
        .categories-wrapper::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .category-pill {
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }

        .category-pill:hover, .category-pill.active {
          background-color: var(--text-primary);
          color: white;
          border-color: var(--text-primary);
        }

        .featured-post-section, .posts-grid-section {
          padding: 4rem 0;
        }

        .featured-card {
          display: flex;
          flex-direction: column;
          background: var(--surface-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: var(--transition-smooth);
        }

        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .featured-image {
          width: 100%;
          height: 300px;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .category-tag {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .featured-title {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .featured-excerpt {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 800px;
        }

        .read-more {
          font-weight: 600;
          color: var(--text-primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .post-card {
          background: var(--surface-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
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
        }

        .post-excerpt {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .no-posts {
          color: var(--text-secondary);
          font-style: italic;
          padding: 2rem 0;
        }

        @media (min-width: 992px) {
          .featured-card {
            flex-direction: row;
          }
          
          .featured-image {
            width: 50%;
            height: 400px;
          }
          
          .featured-content {
            width: 50%;
            padding: 3rem;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default BlogIndex;
