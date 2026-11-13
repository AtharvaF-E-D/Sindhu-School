import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import CurriculumHeroSection from "../components/academics/CurriculumHeroSection";
import CurriculumsSection from "../components/academics/CurriculumsSection";
import ReadyCTA from "../components/home-components/ReadyCTA";
import Footer from "../components/Footer";

const AcademicsCurriculumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 bg-white">
        <CurriculumHeroSection />
        <CurriculumsSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsCurriculumPage;

