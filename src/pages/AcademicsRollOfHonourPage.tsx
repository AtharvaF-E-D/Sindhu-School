import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import RollOfHonourHeroSection from "../components/academics/RollOfHonourHeroSection";
import HonourRankCardsSection from "../components/academics/HonourRankCardsSection";
import ReadyCTA from "../components/home-components/ReadyCTA";
import Footer from "../components/Footer";

const AcademicsRollOfHonourPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 bg-white">
        <RollOfHonourHeroSection />
        <HonourRankCardsSection />
        <ReadyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsRollOfHonourPage;

