import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import { useLenis } from './hooks/useLenis';

function AppContent() {
  useLenis();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-wrapper">
      <Header />
      <main className={isHomePage ? '' : 'with-header-padding'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      
      <style jsx>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex-grow: 1;
        }

        main.with-header-padding {
          padding-top: 110px; /* offset for fixed header */
        }

        @media (max-width: 768px) {
          main.with-header-padding {
            padding-top: 80px;
          }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
