import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import FaqHeroSection from "../components/academics/FaqHeroSection";
import AdmissionDocumentsSection from "../components/academics/AdmissionDocumentsSection";
import FaqAccordionSection from "../components/academics/FaqAccordionSection";
import ReadyCTA from "../components/home-components/ReadyCTA";
import Footer from "../components/Footer";

const AcademicsFaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 bg-white">
        <FaqHeroSection />
        <AdmissionDocumentsSection />
        <FaqAccordionSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsFaqPage;

