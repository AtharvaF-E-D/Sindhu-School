import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import ApproachHeroSection from "../components/academics/ApproachHeroSection";
import UniqueMethodologySection from "../components/academics/UniqueMethodologySection";
import ApproachCarouselSection from "../components/academics/ApproachCarouselSection";
import EducationStagesSection from "../components/academics/EducationStagesSection";
import ReadyCTA from "../components/home-components/ReadyCTA";
import Footer from "../components/Footer";

const AcademicsApproachPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 bg-white">
        <ApproachHeroSection />
        <UniqueMethodologySection />
        <ApproachCarouselSection />
        <EducationStagesSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsApproachPage;

