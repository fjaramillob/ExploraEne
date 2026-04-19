import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Experiences from '../components/Experiences';
import SocialProof from '../components/SocialProof';
import BlogSection from '../components/BlogSection';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Experiences />
      <SocialProof />
      <BlogSection />
      <CTA />
    </>
  );
};

export default Home;
