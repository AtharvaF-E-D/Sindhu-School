import React, { useState } from "react";
import logo from "../assets/logo.png";
import footerBg from "../assets/footer-bg.jpg";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat pt-10 lg:pt-[40px] pb-6 lg:pb-[24px] select-none overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})` }}
      aria-label="Site Footer"
    >
      <div className="max-w-[1361px] mx-auto px-4 xl:px-0">
        {/* ========================================================================= */}
        {/* TOP FLOATING WHITE CARD (Figma 1:1260: 1361 x 406, rounded:16px, p:32/40) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-[16px] px-6 sm:px-10 lg:px-[40px] py-8 lg:py-[32px] lg:min-h-[406px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] mb-10 lg:mb-[48px]">
          {/* Main 5-Column Navigation Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
            {/* Column 1: Logo */}
            <div className="flex flex-col items-start">
              <a href="#" className="inline-block" aria-label="Sindhu Education Society Home">
                <img
                  src={logo}
                  alt="Sindhu Education Society Emblem Since 1952 Jaripatka Nagpur"
                  className="w-28 sm:w-32 md:w-36 h-auto object-contain"
                />
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[15px] font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[13px] text-slate-600 font-normal">
                <li>
                  <a href="#home" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#073c96] hover:underline transition-colors block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#schools-curriculum" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Schools &amp; Curriculum
                  </a>
                </li>
                <li>
                  <a href="#core-values" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Core Values
                  </a>
                </li>
                <li>
                  <a href="#legacy-leadership" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Legacy &amp; Leadership
                  </a>
                </li>
                <li>
                  <a href="#why-choose-ses" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Why Choose SES
                  </a>
                </li>
                <li>
                  <a href="#about-society" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Sindhu Education Society
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#academics" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Academic
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Academics */}
            <div>
              <h4 className="text-[15px] font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
                Academics
              </h4>
              <ul className="space-y-2 text-[13px] text-slate-600 font-normal">
                <li>
                  <a href="#state-board" className="hover:text-[#073c96] hover:underline transition-colors block">
                    State Board
                  </a>
                </li>
                <li>
                  <a href="#cbse" className="hover:text-[#073c96] hover:underline transition-colors block">
                    CBSE
                  </a>
                </li>
                <li>
                  <a href="#pre-primary" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Pre-Primary
                  </a>
                </li>
                <li>
                  <a href="#parent-resources" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Parent Resources
                  </a>
                </li>
                <li>
                  <a href="#teacher-support" className="hover:text-[#073c96] hover:underline transition-colors block">
                    Teacher Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Students Protected App */}
            <div>
              <h4 className="text-[15px] font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
                Students Protected App
              </h4>
              <ul className="space-y-2 text-[13px] text-slate-600 font-normal">
                <li>
                  <a href="#kids-protect" className="hover:text-[#073c96] hover:underline transition-colors leading-relaxed block">
                    Stay Connected with the Kids Protect App
                  </a>
                </li>
                <li>
                  <a href="#attendance" className="hover:text-[#073c96] hover:underline transition-colors leading-relaxed block">
                    Attendance and Homework at Your Fingertips
                  </a>
                </li>
                <li>
                  <a href="#family-participation" className="hover:text-[#073c96] hover:underline transition-colors leading-relaxed block">
                    Family Participation Highlights
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Us & Address (Right Aligned on Desktop) */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
              {/* Black Contact Us Pill Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 mb-4 cursor-pointer"
              >
                Contact Us
              </a>

              {/* Phone, Email & Address */}
              <div className="space-y-1 text-xs sm:text-[13px] text-slate-700">
                <p>
                  <a
                    href="tel:+919765587755"
                    className="hover:text-[#073c96] transition-colors font-medium text-slate-800"
                  >
                    +91 97655 87755
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@sindhueducationsociety.com"
                    className="hover:text-[#073c96] transition-colors text-slate-600 break-all"
                  >
                    info@sindhueducationsociety.com
                  </a>
                </p>
                <p className="text-[12px] text-slate-500 font-normal leading-relaxed pt-1.5">
                  Sindhu Education Society, Hemu
                  <br />
                  Kalani Chowk Jaripatka Nagpur,
                  <br />
                  Maharashtra-440014.(India)
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row inside White Card (Social Icons, Ethos, Feature Highlight) */}
          <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            {/* 4 Circular Black Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#111827] hover:bg-[#073c96] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#111827] hover:bg-[#ff0000] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#111827] hover:bg-[#e1306c] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919765587755"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#111827] hover:bg-[#25d366] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.531 1.765.813 2.796.813 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm3.391 8.232c-.145.409-.844.772-1.164.819-.32.046-.738.066-2.399-.588-1.996-.787-3.267-2.824-3.366-2.955-.1-.131-.809-1.077-.809-2.054 0-.978.508-1.46.688-1.657.18-.198.394-.247.525-.247.13 0 .262.001.377.007.121.006.284-.046.444.339.164.394.557 1.36.607 1.46.049.1.082.214.016.346-.066.13-.1.213-.197.327-.099.115-.208.257-.297.346-.1.099-.204.207-.088.407.115.197.513.847 1.101 1.37.758.675 1.397.884 1.594.982.197.098.312.082.427-.049.115-.131.492-.574.623-.77.131-.197.262-.164.443-.098.18.066 1.147.541 1.344.64.197.099.328.148.377.23.049.082.049.476-.096.885z" />
                </svg>
              </a>
            </div>

            {/* Center Slogan */}
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium max-w-md">
              Committed to academic excellence and nurturing every student's potential.
            </p>

            {/* Right App Feature Callout */}
            <p className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight text-center md:text-right">
              Stay Connected with the Kids Protect App
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LOWER SECTION OVER GRADIENT (Figma 1:1323: 1360 x 120, mb:48px)           */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-4 mb-10 lg:mb-[48px]">
          {/* Slogan on Left (1:1324: w:652, 40px/40px ExtraBold -2%) */}
          <div className="w-full lg:max-w-[652px]">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-white tracking-[-0.02em] leading-[1.15] lg:leading-[40px]">
              Committed to academic
              <br className="hidden sm:block" />
              excellence and nurturing every
              <br className="hidden sm:block" />
              student&apos;s potential.
            </h2>
          </div>

          {/* Newsletter Box on Right (1:1325: w:692, field 670x56, rounded:12px) */}
          <div className="w-full lg:w-[670px] flex flex-col items-start shrink-0">
            <div className="w-full">
              <span className="block text-[13px] sm:text-[14px] font-medium text-white tracking-wider uppercase mb-[8px]">
                NEWSLETTER
              </span>

              {/* Newsletter Rounded Outlined Form */}
              <form
                onSubmit={handleSubscribe}
                className="relative flex items-center justify-between border border-white/50 hover:border-white focus-within:border-white rounded-[12px] h-[56px] pl-[16px] pr-[24px] py-[8px] transition-colors duration-200 bg-white/5 backdrop-blur-xs"
              >
                <div className="flex-1 pr-3">
                  <label
                    htmlFor="footer-newsletter-email"
                    className="block text-[10px] font-semibold text-white/75 tracking-wider uppercase leading-tight"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nicksam@gmail.com"
                    required
                    className="w-full bg-transparent text-white placeholder-white/60 text-sm sm:text-base font-normal outline-none border-none p-0 focus:ring-0 leading-normal"
                  />
                </div>

                {/* Submit Arrow Button */}
                <button
                  type="submit"
                  className="text-white hover:text-white/80 p-1.5 transition-transform hover:translate-x-1 cursor-pointer shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </form>

              {subscribed && (
                <p className="text-xs font-semibold text-white mt-2">
                  Thank you for subscribing to our newsletter!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM LEGAL ROW (Copyright on left, Links on right)                      */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/80 text-[10px] sm:text-[11px] font-normal leading-[14px]">
          <p className="text-center sm:text-left">
            Copyright © 2025 Sindhu Education Society | All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            <a href="#sitemap" className="hover:text-white hover:underline transition-colors">
              Site Map
            </a>
            <a href="#privacy-policy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white hover:underline transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
