import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import AlumniRegistrationHero from '../components/alumni/AlumniRegistrationHero';
import AlumniStatsSection from '../components/alumni/AlumniStatsSection';
import DistinguishedAlumniSection from '../components/alumni/DistinguishedAlumniSection';
import SearchNetworkGrid from '../components/alumni/SearchNetworkGrid';
import ReadyCTA from '../components/home-components/ReadyCTA';
import Footer from '../components/Footer';

const SesAlumniPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <AlumniRegistrationHero />
        <AlumniStatsSection />
        <DistinguishedAlumniSection />
        <SearchNetworkGrid />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SesAlumniPage;

