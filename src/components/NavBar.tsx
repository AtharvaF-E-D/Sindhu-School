import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import logo from '../assets/logo.png';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '#about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Society', href: '#about-society' },
      { label: 'Schools & Curriculum', href: '#schools-curriculum' },
      { label: 'Core Values', href: '#core-values' },
      { label: 'Legacy & Leadership', href: '#leadership' },
      { label: 'Why Choose SES', href: '#why-choose-ses' },
    ],
  },
  {
    label: 'Academics',
    href: '#academics',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Curriculum', href: '#curriculum' },
      { label: 'Our Approach', href: '#our-approach' },
      { label: 'Roll of Honour', href: '#roll-of-honour' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  { label: 'Admissions', href: '#admissions' },
  {
    label: 'Students Chronicle',
    href: '#students-chronicle',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Life at SES', href: '#students-chronicle' },
      { label: 'Creative Arts & Gallery', href: '#creative-arts-gallery' },
      { label: 'Sports', href: '#sports' },
    ],
  },
  { label: 'Parents Pathway', href: '#student-protected-app' },
  {
    label: 'Alumni Connect',
    href: '#alumni-connect',
    hasDropdown: true,
    dropdownItems: [
      { label: 'SES Alumni', href: '#ses-alumni' },
      { label: 'Notable Alumni', href: '#notable-alumni' },
    ],
  },
];

const ABOUT_ROUTE_HASHES = new Set([
  '#about',
  '#about-society',
  '#about-us',
  '#schools-curriculum',
  '#schools',
  '#vision-mission',
  '#vision',
  '#our-vision',
  '#mission',
  '#our-mission',
  '#core-values',
  '#values',
  '#heritage',
  '#leadership',
  '#legacy-leadership',
  '#legacy',
  '#founder-tribute',
  '#presidents-message',
  '#why-choose-ses',
  '#why-choose',
]);

const ACADEMICS_ROUTE_HASHES = new Set([
  '#academics',
  '#curriculum',
  '#our-curriculum',
  '#academics-curriculum',
  '#our-approach',
  '#approach',
  '#academics-approach',
  '#academics-our-approach',
  '#roll-of-honour',
  '#honour',
  '#academics-roll-of-honour',
  '#faq',
  '#academics-faq',
]);

const STUDENTS_CHRONICLE_ROUTE_HASHES = new Set([
  '#students-chronicle',
  '#life-at-ses',
  '#ses-chronicles',
  '#students-chronicle-life',
  '#creative-arts-gallery',
  '#creative-arts',
  '#creative-art-gallery',
  '#gallery',
  '#students-chronicle-creative-arts',
  '#students-chronicle-gallery',
  '#sports',
  '#students-chronicle-sports',
]);

const PARENTS_PATHWAY_ROUTE_HASHES = new Set([
  '#parents-pathway',
  '#parent-pathway',
  '#student-protected-app',
  '#students-protected-app',
  '#kids-protect',
  '#attendance',
  '#family-participation',
]);

const ALUMNI_ROUTE_HASHES = new Set([
  '#alumni-connect',
  '#alumni-connected',
  '#alumani-connected',
  '#ses-alumni',
  '#ses-alumani',
  '#alumni-register',
  '#alumni-highlights',
  '#distinguished-alumni',
  '#alumni-network',
  '#notable-alumni',
  '#noatble-alumani',
  '#alumni-event-gallery',
  '#event-gallery',
  '#event-gallary',
]);

const isDropdownGroupActive = (label: string, activeHash: string) => {
  if (label === 'About') return ABOUT_ROUTE_HASHES.has(activeHash);
  if (label === 'Academics') return ACADEMICS_ROUTE_HASHES.has(activeHash);
  if (label === 'Students Chronicle') {
    return STUDENTS_CHRONICLE_ROUTE_HASHES.has(activeHash);
  }
  if (label === 'Parents Pathway') {
    return PARENTS_PATHWAY_ROUTE_HASHES.has(activeHash);
  }
  if (label === 'Alumni Connect') {
    return ALUMNI_ROUTE_HASHES.has(activeHash);
  }
  return false;
};

const isDropdownItemActive = (href: string, activeHash: string) => {
  if (!activeHash) return false;
  if (href === '#leadership') {
    return (
      activeHash === '#leadership' ||
      activeHash === '#legacy-leadership' ||
      activeHash === '#legacy' ||
      activeHash === '#founder-tribute'
    );
  }
  if (href === '#why-choose-ses') {
    return activeHash === '#why-choose-ses' || activeHash === '#why-choose';
  }
  if (href === '#about-society') {
    return (
      activeHash === '#about-society' ||
      activeHash === '#about' ||
      activeHash === '#about-us'
    );
  }
  if (href === '#schools-curriculum') {
    return (
      activeHash === '#schools-curriculum' ||
      activeHash === '#schools'
    );
  }
  if (href === '#curriculum') {
    return (
      activeHash === '#curriculum' ||
      activeHash === '#our-curriculum' ||
      activeHash === '#academics-curriculum' ||
      activeHash === '#academics'
    );
  }
  if (href === '#our-approach') {
    return (
      activeHash === '#our-approach' ||
      activeHash === '#approach' ||
      activeHash === '#academics-approach' ||
      activeHash === '#academics-our-approach'
    );
  }
  if (href === '#roll-of-honour') {
    return (
      activeHash === '#roll-of-honour' ||
      activeHash === '#honour' ||
      activeHash === '#academics-roll-of-honour'
    );
  }
  if (href === '#faq') {
    return activeHash === '#faq' || activeHash === '#academics-faq';
  }
  if (href === '#students-chronicle') {
    return (
      activeHash === '#students-chronicle' ||
      activeHash === '#life-at-ses' ||
      activeHash === '#ses-chronicles' ||
      activeHash === '#students-chronicle-life'
    );
  }
  if (href === '#creative-arts-gallery') {
    return (
      activeHash === '#creative-arts-gallery' ||
      activeHash === '#creative-arts' ||
      activeHash === '#creative-art-gallery' ||
      activeHash === '#gallery' ||
      activeHash === '#students-chronicle-creative-arts' ||
      activeHash === '#students-chronicle-gallery'
    );
  }
  if (href === '#sports') {
    return activeHash === '#sports' || activeHash === '#students-chronicle-sports';
  }
  if (href === '#ses-alumni') {
    return (
      activeHash === '#ses-alumni' ||
      activeHash === '#ses-alumani' ||
      activeHash === '#alumni-connect' ||
      activeHash === '#alumni-connected' ||
      activeHash === '#alumani-connected' ||
      activeHash === '#alumni-register' ||
      activeHash === '#alumni-highlights' ||
      activeHash === '#distinguished-alumni' ||
      activeHash === '#alumni-network'
    );
  }
  if (href === '#notable-alumni') {
    return activeHash === '#notable-alumni' || activeHash === '#noatble-alumani';
  }
  if (href === '#core-values') {
    return activeHash === '#core-values' || activeHash === '#values';
  }
  return activeHash === href;
};

interface NavBarProps {
  overlay?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ overlay = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState(() =>
    window.location.hash.toLowerCase()
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash.toLowerCase());
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  // Auto-close mobile menu on desktop screen resize and reset body scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll on mobile only while full-screen menu is open
  useEffect(() => {
    if (mobileMenuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const activeGroupItem = navItems.find(
        (item) => item.hasDropdown && isDropdownGroupActive(item.label, activeHash)
      );
      if (activeGroupItem) {
        setExpandedMobileGroup(activeGroupItem.label);
      }
    }
  }, [mobileMenuOpen, activeHash]);

  const isTransparent = overlay && !isScrolled;

  return (
    <nav
      className={`w-full overflow-visible transition-all duration-300 z-40 ${
        overlay
          ? isTransparent && !mobileMenuOpen
            ? "absolute top-0 left-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent border-transparent"
            : "sticky top-0 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "sticky top-0 bg-white border-b border-slate-100 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* 1. Left: Overhanging Logo Badge (Anchored flush to top across all pages) */}
          <div className="self-start relative shrink-0">
            <a
              href="#home"
              className="absolute top-0 left-0 bg-white shadow-xl shadow-black/20 rounded-t-none rounded-b-2xl border-x border-b border-slate-200/80 px-3 sm:px-4.5 pt-2 sm:pt-2.5 pb-3 sm:pb-4.5 z-50 flex flex-col items-center justify-center transition-all duration-200 hover:shadow-2xl hover:translate-y-0.5 group cursor-pointer"
              aria-label="Sindhu Education Society Homepage"
            >
              <img
                src={logo}
                alt="Sindhu Education Society Logo"
                className="h-14 sm:h-18 lg:h-22 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Spacer placeholder to reserve width so links never collide with the hanging badge */}
            <div className="w-[84px] sm:w-[110px] lg:w-[130px] h-1" aria-hidden="true" />
          </div>

          {/* 2. Center: Navigation Links */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 text-[14px] font-medium flex-1 px-3">
            {navItems.map((item) => {
              const isGroupActive = isDropdownGroupActive(item.label, activeHash);
              if (!item.hasDropdown) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`transition-colors py-2 whitespace-nowrap ${
                      isTransparent
                        ? isGroupActive
                          ? "text-white font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] underline underline-offset-8 decoration-2 decoration-[#60a5fa]"
                          : "text-white/95 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                        : isGroupActive
                        ? "text-[#073c96] font-semibold"
                        : "text-slate-700 hover:text-[#073c96]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }

              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer whitespace-nowrap ${
                      isTransparent
                        ? isGroupActive
                          ? "text-white font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] underline underline-offset-8 decoration-2 decoration-[#60a5fa]"
                          : "text-white/95 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                        : isGroupActive
                        ? "text-[#073c96] font-semibold"
                        : "text-slate-700 hover:text-[#073c96]"
                    }`}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 " + (isTransparent ? "text-white" : "text-[#073c96]")
                          : isTransparent
                          ? "text-white/80"
                          : isGroupActive
                          ? "text-[#073c96]"
                          : "text-slate-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu (Always White Card with Dark Text) */}
                  {isOpen && (
                    <div
                      role="menu"
                      aria-label={`${item.label} menu`}
                      className="absolute left-0 top-full w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 text-slate-700 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      {item.dropdownItems?.map((drop) => {
                        const active = isDropdownItemActive(drop.href, activeHash);
                        return (
                          <a
                            key={drop.label}
                            href={drop.href}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-xs sm:text-sm transition-colors ${
                              active
                                ? 'text-[#073c96] font-semibold bg-slate-50'
                                : 'text-slate-600 hover:text-[#073c96] hover:bg-slate-50'
                            }`}
                          >
                            {drop.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Right: Mobile Actions (Call Button + Menu Toggle, Hidden on Desktop) & Desktop Balancing Spacer */}
          <div className="flex items-center shrink-0">
            {/* Mobile Actions: Phone Icon Button + Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-2.5">
              {/* Direct Phone Call Button */}
              <a
                href="tel:+917122640243"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#073c96] hover:bg-[#06307a] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all"
                aria-label="Call SES Helpline"
                title="Call Helpline"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
                </svg>
              </a>

              {/* Menu Toggle Button (Hamburger / Close 'X') */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-colors cursor-pointer flex items-center justify-center border ${
                  isTransparent && !mobileMenuOpen
                    ? "text-white hover:bg-white/20 border-white/30 backdrop-blur-xs drop-shadow-sm"
                    : "text-slate-800 hover:text-[#073c96] bg-slate-100 hover:bg-slate-200 border-slate-200/80"
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                title="Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Balancing Spacer (Preserves center alignment on desktop) */}
            <div className="hidden lg:block w-[84px] sm:w-[110px] lg:w-[130px] h-1" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Portal (Directly rendered into document.body to ensure 100% viewport coverage) */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[99999] bg-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-150">
            {/* Top Bar inside Fullscreen Portal */}
            <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between shrink-0 shadow-xs">
              {/* Left: Overhanging Logo Badge */}
              <div className="self-start relative shrink-0">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-0 left-0 bg-white shadow-xl shadow-black/20 rounded-t-none rounded-b-2xl border-x border-b border-slate-200/80 px-3 sm:px-4.5 pt-2 sm:pt-2.5 pb-3 sm:pb-4.5 z-50 flex flex-col items-center justify-center cursor-pointer"
                  aria-label="Sindhu Education Society Homepage"
                >
                  <img
                    src={logo}
                    alt="Sindhu Education Society Logo"
                    className="h-14 sm:h-18 w-auto object-contain"
                  />
                </a>
                <div className="w-[84px] sm:w-[110px] h-1" aria-hidden="true" />
              </div>

              {/* Right: Phone Call Button + Close 'X' Button */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href="tel:+917122640243"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#073c96] hover:bg-[#052e75] text-white flex items-center justify-center shadow-sm active:scale-95 transition-all"
                  aria-label="Call SES Helpline"
                  title="Call Helpline"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80"
                  aria-label="Close navigation menu"
                  title="Close Menu"
                >
                  <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Navigation List */}
            <div className="flex-1 divide-y divide-slate-100 bg-white">
              {navItems.map((item) => {
                const isGroupActive = isDropdownGroupActive(item.label, activeHash);
                const isExpanded = expandedMobileGroup === item.label;

                if (!item.hasDropdown) {
                  return (
                    <div key={item.label} className="bg-white">
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-4 px-5 sm:px-6 text-[16px] sm:text-[17px] font-bold tracking-tight transition-colors hover:bg-slate-50 ${
                          isGroupActive ? 'text-[#ea580c]' : 'text-slate-900'
                        }`}
                      >
                        {item.label}
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={item.label} className="bg-white">
                    <button
                      type="button"
                      onClick={() => setExpandedMobileGroup(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 px-5 sm:px-6 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span
                        className={`text-[16px] sm:text-[17px] font-bold tracking-tight ${
                          isGroupActive ? 'text-[#ea580c]' : 'text-slate-900'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-[#ea580c] text-[22px] font-black w-6 h-6 flex items-center justify-center shrink-0 transition-transform select-none"
                        aria-hidden="true"
                      >
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="bg-slate-50/70 border-t border-slate-100 py-2 px-5 sm:px-6 space-y-1">
                        {item.dropdownItems?.map((drop) => {
                          const active = isDropdownItemActive(drop.href, activeHash);
                          return (
                            <a
                              key={drop.label}
                              href={drop.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2.5 px-3 rounded-lg text-[14px] sm:text-[15px] font-medium transition-colors ${
                                active
                                  ? 'text-[#073c96] font-bold bg-blue-50/80'
                                  : 'text-slate-600 hover:text-[#073c96] hover:bg-white'
                              }`}
                            >
                              {drop.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Direct Contact item */}
              <div className="bg-white">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-5 sm:px-6 text-[16px] sm:text-[17px] font-bold text-slate-900 tracking-tight transition-colors hover:bg-slate-50"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Quick Action Footer at bottom of full-screen menu */}
            <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-100 space-y-3 mt-auto shrink-0 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#40c843] hover:bg-[#38b53b] text-white text-[14px] font-bold shadow-md shadow-[#40c843]/20 active:scale-[0.99] transition-all"
              >
                <span>Apply for Admission AY 2027–28 →</span>
              </a>
              <div className="flex items-center justify-between text-[12px] text-slate-500 font-medium px-1">
                <a href="tel:+917122640243" className="flex items-center gap-1.5 hover:text-[#073c96]">
                  <svg className="w-3.5 h-3.5 text-[#073c96]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
                  </svg>
                  <span>+91 712 2640243</span>
                </a>
                <span className="text-slate-300">•</span>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#073c96]">
                  FAQ
                </a>
                <span className="text-slate-300">•</span>
                <a href="mailto:info@sindhueducation.org" className="hover:text-[#073c96]">
                  Email Us
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
};

export default NavBar;
