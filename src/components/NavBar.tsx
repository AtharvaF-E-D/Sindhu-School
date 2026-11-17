import React, { useEffect, useState } from 'react';
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

interface CategoryMeta {
  desc: string;
  icon: React.ReactNode;
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  About: {
    desc: 'Legacy, leadership, core values & schools',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  Academics: {
    desc: 'Curriculum, methodology, honours & FAQ',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    ),
  },
  Admissions: {
    desc: 'Admissions open for AY 2027–28',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  'Students Chronicle': {
    desc: 'Campus life, creative arts gallery & sports',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  'Parents Pathway': {
    desc: 'Kids Protect app & attendance monitoring',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  'Alumni Connect': {
    desc: 'Distinguished alumni & notable stories',
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
};

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState(() =>
    window.location.hash.toLowerCase()
  );

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash.toLowerCase());
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  // When mobile drawer opens, lock body scroll, auto-expand active group, and notify mobile bottom bar to hide
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-navbar-open');
      window.dispatchEvent(
        new CustomEvent('ses:navbar-toggle', { detail: { open: true } })
      );
      const activeGroupItem = navItems.find(
        (item) => item.hasDropdown && isDropdownGroupActive(item.label, activeHash)
      );
      if (activeGroupItem) {
        setExpandedMobileGroup(activeGroupItem.label);
      }
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-navbar-open');
      window.dispatchEvent(
        new CustomEvent('ses:navbar-toggle', { detail: { open: false } })
      );
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-navbar-open');
      window.dispatchEvent(
        new CustomEvent('ses:navbar-toggle', { detail: { open: false } })
      );
    };
  }, [mobileMenuOpen, activeHash]);

  return (
    <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo on Left */}
          <a href="#home" className="flex items-center gap-3 shrink-0 py-1" aria-label="Go to Homepage">
            <img
              src={logo}
              alt="Sindhu Education Society Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[14px] font-medium text-slate-700">
            {navItems.map((item) => {
              const isGroupActive = isDropdownGroupActive(item.label, activeHash);
              if (!item.hasDropdown) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`hover:text-[#073c96] transition-colors py-2 ${
                      isGroupActive ? 'text-[#073c96] font-semibold' : ''
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
                    className={`flex items-center gap-1.5 hover:text-[#073c96] py-2 transition-colors cursor-pointer ${
                      isGroupActive ? 'text-[#073c96] font-semibold' : ''
                    }`}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 text-[#073c96]'
                          : isGroupActive
                          ? 'text-[#073c96]'
                          : 'text-slate-400'
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

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      role="menu"
                      aria-label={`${item.label} menu`}
                      className="absolute left-0 top-full w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
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

          {/* Right Action: Announcement Button (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center">
            <a
              href="#announcements"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#073c96] hover:bg-[#06307a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow-md"
            >
              <span>Announcement</span>
              {/* Megaphone Icon */}
              <svg
                className="w-4 h-4 shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -mr-1 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Off-canvas Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas Mobile Navigation Drawer (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-slate-100 shrink-0 bg-white">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
            aria-label="Sindhu Education Society"
          >
            <img
              src={logo}
              alt="Sindhu Education Society Logo"
              className="h-11 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#073c96] leading-tight">
                Sindhu Education
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                Society • Nagpur
              </span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5 bg-slate-50/40">
          {/* Announcement Card */}
          <a
            href="#announcements"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#073c96] text-white shadow-sm hover:bg-[#06307a] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <span className="text-[13px] font-bold block leading-tight">School Announcements</span>
                <span className="text-[10.5px] text-blue-100 font-normal">View latest circulars & dates</span>
              </div>
            </div>
            <svg className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Navigation Items */}
          {navItems.map((item) => {
            const isGroupActive = isDropdownGroupActive(item.label, activeHash);
            const isExpanded = expandedMobileGroup === item.label;
            const meta = CATEGORY_META[item.label];

            if (!item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isGroupActive
                      ? 'bg-blue-50/70 border-[#073c96]/30 shadow-xs'
                      : 'bg-white border-slate-200/70 hover:border-slate-300'
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isGroupActive
                            ? 'bg-[#073c96] text-white'
                            : 'bg-slate-100 text-[#073c96]'
                        }`}
                      >
                        {meta?.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[14px] font-bold ${
                              isGroupActive ? 'text-[#073c96]' : 'text-slate-800'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.label === 'Admissions' && (
                            <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#40c843]/15 text-[#2ca52f] uppercase tracking-wide">
                              Open
                            </span>
                          )}
                        </div>
                        {meta?.desc && (
                          <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                            {meta.desc}
                          </p>
                        )}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              );
            }

            return (
              <div
                key={item.label}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isGroupActive
                    ? 'bg-blue-50/40 border-[#073c96]/30 shadow-xs'
                    : isExpanded
                    ? 'bg-white border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200/70 hover:border-slate-300'
                }`}
              >
                {/* Accordion Group Header */}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileGroup(isExpanded ? null : item.label)
                  }
                  className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isGroupActive
                          ? 'bg-[#073c96] text-white'
                          : isExpanded
                          ? 'bg-blue-50 text-[#073c96]'
                          : 'bg-slate-100 text-[#073c96]'
                      }`}
                    >
                      {meta?.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[14px] font-bold ${
                            isGroupActive || isExpanded ? 'text-[#073c96]' : 'text-slate-800'
                          }`}
                        >
                          {item.label}
                        </span>
                        {isGroupActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#073c96]" />
                        )}
                      </div>
                      {meta?.desc && (
                        <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                          {meta.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pl-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isExpanded ? 'bg-blue-100 rotate-180' : 'bg-slate-100'
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-colors ${
                          isExpanded ? 'text-[#073c96]' : 'text-slate-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Submenu Accordion Items */}
                {isExpanded && (
                  <div className="px-3 pb-3 pt-1 border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="grid grid-cols-1 gap-1 pl-11">
                      {item.dropdownItems?.map((drop) => {
                        const active = isDropdownItemActive(drop.href, activeHash);
                        return (
                          <a
                            key={drop.label}
                            href={drop.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between py-2 px-3 rounded-xl text-[12.5px] transition-colors ${
                              active
                                ? 'text-[#073c96] font-bold bg-[#073c96]/10'
                                : 'text-slate-600 hover:text-[#073c96] hover:bg-slate-50 font-medium'
                            }`}
                          >
                            <span>{drop.label}</span>
                            <svg
                              className={`w-3.5 h-3.5 ${
                                active ? 'text-[#073c96]' : 'text-slate-300'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Action Footer */}
        <div className="p-4 border-t border-slate-100 bg-white shrink-0 space-y-2.5">
          <a
            href="#admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#40c843] hover:bg-[#38b53b] text-white text-[13.5px] font-bold shadow-md shadow-[#40c843]/20 active:scale-[0.98] transition-all"
          >
            <span>Apply for Admission AY 2027–28</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <div className="pt-1 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
            <a href="tel:+917122520000" className="flex items-center gap-1 hover:text-[#073c96]">
              <svg className="w-3.5 h-3.5 text-[#073c96]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Helpline: +91 712 252 0000</span>
            </a>
            <span className="text-slate-300">•</span>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#073c96]">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
