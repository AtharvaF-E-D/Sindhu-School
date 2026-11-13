import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import ParentPathwayHero from '../components/parent-pathway/ParentPathwayHero';
import KidsProtectFeaturesSection from '../components/parent-pathway/KidsProtectFeaturesSection';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

const ParentPathwayAppPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <ParentPathwayHero />
        <KidsProtectFeaturesSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ParentPathwayAppPage;

