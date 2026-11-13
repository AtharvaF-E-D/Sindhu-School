import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import CurriculumHero from "../components/curriculum-components/CurriculumHero";
import OurSchoolsGrid from "../components/curriculum-components/OurSchoolsGrid";
import ReadyCTA from "../components/home-components/ReadyCTA";
import Footer from "../components/Footer";

const SchoolsCurriculumPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Contact Bar & Main Navigation */}
      <TopBar />
      <NavBar />

      <main className="flex-1">
        {/* Hero Section matching provided mockup */}
        <CurriculumHero />

        {/* Our Schools Network 12-Card Grid (matches user provided design) */}
        <OurSchoolsGrid />

        {/* Call to Action Banner */}
        <ReadyCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default SchoolsCurriculumPage;
