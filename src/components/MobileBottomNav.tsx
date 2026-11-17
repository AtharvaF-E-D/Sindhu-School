import React, { useEffect, useState } from "react";

interface MobileBottomNavProps {
  currentPage?: string;
  onMenuToggle?: () => void;
}

const getTabFromPageOrHash = (page?: string): string => {
  if (page) {
    if (page === "schools-curriculum") return "admissions";
    if (page === "ses-alumni" || page === "notable-alumni") return "alumani";
    if (["about", "core-values", "legacy-leadership", "why-choose-ses"].includes(page)) return "about";
    if (page === "home") return "home";
  }

  if (typeof window !== "undefined") {
    const hash = window.location.hash.toLowerCase();
    if (
      hash.includes("school") ||
      hash.includes("admission") ||
      hash.includes("curriculum") ||
      hash.includes("curicullam")
    ) {
      return "admissions";
    }
    if (hash.includes("alumni") || hash.includes("alumani")) {
      return "alumani";
    }
    if (
      hash.includes("about") ||
      hash.includes("society") ||
      hash.includes("leadership") ||
      hash.includes("values")
    ) {
      return "about";
    }
  }

  return "home";
};

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPage, onMenuToggle }) => {
  const [hashTab, setHashTab] = useState<string>(() => getTabFromPageOrHash(currentPage));
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTopNavbarOpen, setIsTopNavbarOpen] = useState(false);

  // Sync hashTab on hashchange and popstate
  useEffect(() => {
    const handleHash = () => {
      setHashTab(getTabFromPageOrHash(currentPage));
    };

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("popstate", handleHash);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("popstate", handleHash);
    };
  }, [currentPage]);

  // Listen to top navbar open/close event to hide the mobile footer bar
  useEffect(() => {
    const handleNavbarToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      const isOpen = !!customEvent.detail?.open;
      setIsTopNavbarOpen(isOpen);
      if (isOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("ses:navbar-toggle", handleNavbarToggle);
    return () => {
      window.removeEventListener("ses:navbar-toggle", handleNavbarToggle);
    };
  }, []);

  const activeTab = currentPage ? getTabFromPageOrHash(currentPage) : hashTab;

  const handleNavClick = (tab: string, href: string) => {
    setHashTab(tab);
    setMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.location.hash = href;
  };

  const handleMenuClick = () => {
    if (onMenuToggle) {
      onMenuToggle();
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <>
      {/* Mobile Drawer when Menu is opened */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex flex-col justify-end md:hidden animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full bg-white rounded-t-[32px] max-h-[85vh] overflow-y-auto p-5 pb-24 shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Handle & Title */}
            <div className="flex flex-col items-center pb-3">
              <div className="w-12 h-1.5 rounded-full bg-slate-200 mb-3" />
              <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#073c96]" />
                  <h3 className="text-[16px] font-bold text-[#073c96]">
                    Explore Sindhu Education
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Close Menu"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Quick Links Sections Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-[12.5px]">
              {/* About Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/70">
                  <span className="w-2 h-2 rounded-full bg-[#073c96]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#073c96]">
                    About SES
                  </p>
                </div>
                <a
                  href="#about-society"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  About Society
                </a>
                <a
                  href="#schools-curriculum"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Schools Network
                </a>
                <a
                  href="#core-values"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Core Values
                </a>
                <a
                  href="#leadership"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Leadership
                </a>
                <a
                  href="#why-choose-ses"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Why Choose SES
                </a>
              </div>

              {/* Academics Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/70">
                  <span className="w-2 h-2 rounded-full bg-[#073c96]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#073c96]">
                    Academics
                  </p>
                </div>
                <a
                  href="#curriculum"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Curriculum
                </a>
                <a
                  href="#our-approach"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Our Approach
                </a>
                <a
                  href="#roll-of-honour"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Roll of Honour
                </a>
                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Academics FAQ
                </a>
              </div>

              {/* Campus Life Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/70">
                  <span className="w-2 h-2 rounded-full bg-[#073c96]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#073c96]">
                    Chronicle
                  </p>
                </div>
                <a
                  href="#students-chronicle"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Life at SES
                </a>
                <a
                  href="#creative-arts-gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Creative Arts
                </a>
                <a
                  href="#sports"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Sports Arena
                </a>
              </div>

              {/* Connect Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/70">
                  <span className="w-2 h-2 rounded-full bg-[#073c96]" />
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#073c96]">
                    Connect
                  </p>
                </div>
                <a
                  href="#student-protected-app"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Parents Pathway
                </a>
                <a
                  href="#ses-alumni"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Alumni Network
                </a>
                <a
                  href="#notable-alumni"
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#073c96] font-medium py-0.5 transition-colors"
                >
                  Notable Alumni
                </a>
              </div>
            </div>

            {/* Admission Button in drawer */}
            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                href="#admissions"
                onClick={() => setMenuOpen(false)}
                className="w-full h-11 rounded-2xl bg-[#40c843] hover:bg-[#38b53b] text-white flex items-center justify-center font-bold text-[13.5px] shadow-md shadow-emerald-500/15 transition-all"
              >
                <span>Admissions Open AY 2027–28 • Apply Now →</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FIXED BOTTOM NAVIGATION BAR */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#f8faff] border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden select-none pb-[env(safe-area-inset-bottom,0px)] transition-all duration-300 ease-in-out ${
          isTopNavbarOpen
            ? "translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
        aria-label="Mobile Bottom Navigation"
      >
        <div className="max-w-md mx-auto h-[64px] relative px-2 flex items-center justify-between">
          {/* 1. Admissions Tab -> Schools & Curriculum */}
          <button
            type="button"
            onClick={() => handleNavClick("admissions", "#schools-curriculum")}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === "admissions" ? "text-[#073c96] font-bold" : "text-[#8fa2be] font-medium"
            }`}
          >
            {/* Mortarboard / Academic Cap Icon */}
            <svg
              className="w-[22px] h-[22px]"
              fill="none"
              stroke="currentColor"
              strokeWidth={activeTab === "admissions" ? "2.2" : "1.8"}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4L3 8.5L12 13L21 8.5L12 4Z"
                fill={activeTab === "admissions" ? "currentColor" : "none"}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 10.5V15.5C6 17.5 8.7 19.5 12 19.5C15.3 19.5 18 17.5 18 15.5V10.5"
                fill={activeTab === "admissions" ? "currentColor" : "none"}
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.5V14.5" />
            </svg>
            <span className="text-[11px] leading-tight mt-1">
              Admissions
            </span>
          </button>

          {/* 2. Alumani Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("alumani", "#ses-alumni")}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === "alumani" ? "text-[#073c96]" : "text-[#8fa2be]"
            }`}
          >
            {/* User group outline icon */}
            <svg
              className="w-[22px] h-[22px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="9" cy="8" r="3.2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 18.5C3 15.5 5.7 13.5 9 13.5C12.3 13.5 15 15.5 15 18.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 6.5C16.8 7 17.5 8.2 17.5 9.5C17.5 10.8 16.8 12 15.5 12.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 18C19.5 17.5 20.5 16.5 20.5 15C20.5 13.5 18.5 12.5 16.5 12.5" />
            </svg>
            <span className="text-[11px] font-medium leading-tight mt-1">
              Alumani
            </span>
          </button>

          {/* 3. Center Elevated Floating Button (+) - Floats High Above Top Edge */}
          <div className="relative w-[64px] h-full flex justify-center shrink-0">
            <button
              type="button"
              onClick={handleMenuClick}
              aria-label="Toggle Quick Navigation"
              className="absolute -top-7 w-[62px] h-[62px] rounded-full p-[4.5px] bg-[#9bbbf7]/75 shadow-[0_6px_22px_rgba(7,60,150,0.32)] flex items-center justify-center transition-transform active:scale-95 cursor-pointer z-20"
            >
              <div className="w-full h-full rounded-full bg-[#073c96] flex items-center justify-center text-white">
                {/* Circle with Plus (+) icon */}
                <svg
                  className="w-[28px] h-[28px] text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8.5v7M8.5 12h7" />
                </svg>
              </div>
            </button>
          </div>

          {/* 4. About us Tab */}
          <button
            type="button"
            onClick={() => handleNavClick("about", "#about-society")}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === "about" ? "text-[#073c96]" : "text-[#8fa2be]"
            }`}
          >
            {/* Open book icon */}
            <svg
              className="w-[22px] h-[22px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.5V19.5M12 6.5C10.5 5.5 8.5 5 6 5C3.8 5 2.5 5.5 2 6V18.5C2.5 18 3.8 17.5 6 17.5C8.5 17.5 10.5 18 12 19.5M12 6.5C13.5 5.5 15.5 5 18 5C20.2 5 21.5 5.5 22 6V18.5C21.5 18 20.2 17.5 18 17.5C15.5 17.5 13.5 18 12 19.5"
              />
            </svg>
            <span className="text-[11px] font-medium leading-tight mt-1">
              About us
            </span>
          </button>

          {/* 5. Menu Tab */}
          <button
            type="button"
            onClick={handleMenuClick}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              menuOpen ? "text-[#073c96]" : "text-[#8fa2be]"
            }`}
          >
            {/* 3 Horizontal hamburger lines */}
            <svg
              className="w-[22px] h-[22px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <span className="text-[11px] font-medium leading-tight mt-1">
              Menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;

