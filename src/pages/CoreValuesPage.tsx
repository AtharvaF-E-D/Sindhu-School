import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import CoreValuesHero from "../components/core-values/CoreValuesHero";
import CoreValuesTimeline from "../components/core-values/CoreValuesTimeline";
import Footer from "../components/Footer";

const CoreValuesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Contact Bar & Main Navigation */}
      <TopBar />
      <NavBar />

      <main className="flex-1 relative overflow-x-clip bg-gradient-to-b from-[#edf5fe] via-[#f7faff] to-white md:bg-white">
        {/* Subtle Figma Background Polygons (Rectangle 149 & Rectangle 150) */}
        <svg
          className="pointer-events-none select-none absolute top-0 left-0 w-full h-[793px] z-0"
          viewBox="0 0 1440 793"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0H1440V537.825L0 793V0Z"
            fill="#60A5FA"
            fillOpacity="0.14"
          />
        </svg>
        <svg
          className="pointer-events-none select-none hidden md:block absolute top-[792px] left-0 w-full h-[988px] z-0"
          viewBox="0 0 1440 988"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1440 0L0 317.923V988H1440V0Z"
            fill="#60A5FA"
            fillOpacity="0.1"
          />
        </svg>

        {/* Core Values Hero */}
        <CoreValuesHero />

        {/* 5 Core Values Notebook Binder Cards Showcase */}
        <CoreValuesTimeline />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default CoreValuesPage;

