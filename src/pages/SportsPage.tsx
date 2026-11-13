import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import SportsHeroSection from '../components/students-chronicle/SportsHeroSection';
import SportsAchievementsSection from '../components/students-chronicle/SportsAchievementsSection';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

const SportsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <SportsHeroSection />
        <SportsAchievementsSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SportsPage;

