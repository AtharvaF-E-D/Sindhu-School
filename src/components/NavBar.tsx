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

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

          {/* Right Action: Announcement Button */}
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

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#announcements"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#073c96] text-white text-xs font-semibold"
            >
              <span>News</span>
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 space-y-2">
            {navItems.map((item) => {
              const isGroupActive = isDropdownGroupActive(item.label, activeHash);
              return (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors hover:text-[#073c96] hover:bg-slate-50 ${
                      isGroupActive ? 'text-[#073c96] font-semibold bg-slate-50' : 'font-medium text-slate-700'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems?.map((drop) => {
                        const active = isDropdownItemActive(drop.href, activeHash);
                        return (
                          <a
                            key={drop.label}
                            href={drop.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-1.5 text-xs rounded-md transition-colors ${
                              active
                                ? 'text-[#073c96] font-semibold bg-slate-50'
                                : 'text-slate-500 hover:text-[#073c96]'
                            }`}
                          >
                            • {drop.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
