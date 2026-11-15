import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import FounderTributeHero from "../components/legacy-leadership/FounderTributeHero";
import LeadershipMessages from "../components/legacy-leadership/LeadershipMessages";
import Footer from "../components/Footer";

const LegacyLeadershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">
        <FounderTributeHero />
        <LeadershipMessages />
      </main>
      <Footer />
    </div>
  );
};

export default LegacyLeadershipPage;
