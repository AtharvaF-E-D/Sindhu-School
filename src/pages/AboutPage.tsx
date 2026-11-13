import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/about-components/HeroSection";
import InfoBar from "../components/home-components/InfoBar";
import AboutIntro from "../components/about-components/AboutIntro";
import OurVision from "../components/about-components/OurVision";
import OurMission from "../components/about-components/OurMission";
import OurJourney from "../components/about-components/OurJourney";
import Footer from "../components/Footer";
import ReadyCTA from "../components/home-components/ReadyCTA";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <InfoBar />
        <AboutIntro />
        <OurVision />
        <OurMission />
        <OurJourney />
        <div className="lg:pt-[57px]">
          <ReadyCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
