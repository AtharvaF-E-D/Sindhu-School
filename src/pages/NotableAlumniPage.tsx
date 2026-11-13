import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import NotableAlumniHero from '../components/alumni/NotableAlumniHero';
import NotableAlumniStoriesSection from '../components/alumni/NotableAlumniStoriesSection';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

const NotableAlumniPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <NotableAlumniHero />
        <NotableAlumniStoriesSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default NotableAlumniPage;

