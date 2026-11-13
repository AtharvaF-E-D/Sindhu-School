import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import CreativeArtsHero from '../components/students-chronicle/CreativeArtsHero';
import CreativeArtsGalleryGrid from '../components/students-chronicle/CreativeArtsGalleryGrid';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

const CreativeArtsGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <CreativeArtsHero />
        <CreativeArtsGalleryGrid />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CreativeArtsGalleryPage;

