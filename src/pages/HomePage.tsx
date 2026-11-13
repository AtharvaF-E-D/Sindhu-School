import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import HeroSection from '../components/home-components/HeroSection';
import InfoBar from '../components/home-components/InfoBar';
import AboutSociety from '../components/home-components/AboutSociety';
import OurCampuses from '../components/home-components/OurCampuses';
import UniqueMethodology from '../components/home-components/UniqueMethodology';
import ExploreFeedback from '../components/home-components/ExploreFeedback';
import BetterFuture from '../components/home-components/BetterFuture';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <NavBar />
      <HeroSection />
      <InfoBar />
      <AboutSociety />
      <OurCampuses />
      <UniqueMethodology />
      <ExploreFeedback />
      <BetterFuture />
      <ReadyCTA />
      <Footer />
    </div>
  );
}

export default HomePage;
