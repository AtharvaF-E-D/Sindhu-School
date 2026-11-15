import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import LegacyHero from "../components/legacy-leadership/LegacyHero";
import WhyChooseCards from "../components/why-choose-ses/WhyChooseCards";
import Footer from "../components/Footer";

const WhyChooseSesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <LegacyHero />
        <WhyChooseCards />
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseSesPage;

