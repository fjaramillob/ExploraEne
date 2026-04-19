import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main>
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
            padding-top: 80px; /* offset for fixed header */
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;
