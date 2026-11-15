import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import ChronicleHero from "../components/students-chronicle/ChronicleHero";
import SesChroniclesBanner from "../components/students-chronicle/SesChroniclesBanner";
import Footer from "../components/Footer";

const StudentsChroniclePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Contact Bar & Main Navigation */}
      <TopBar />
      <NavBar />

      <main className="flex-1">
        {/* Hero Split Section (Figma 33:1239) */}
        <ChronicleHero />

        {/* Blue SES Chronicles Quote Banner */}
        <SesChroniclesBanner />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default StudentsChroniclePage;

