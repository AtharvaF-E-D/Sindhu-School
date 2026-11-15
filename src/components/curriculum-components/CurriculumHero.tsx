import React from "react";
import schoolsHero1Img from "../../assets/schools-hero-1.png";
import schoolsHero2Img from "../../assets/schools-hero-2.png";
import schoolsHero3Img from "../../assets/schools-hero-3.jpg";
import schoolsHero4Img from "../../assets/schools-hero-4.jpg";

interface CurriculumHeroProps {
  onExploreClick?: () => void;
}

const CurriculumHero: React.FC<CurriculumHeroProps> = ({ onExploreClick }) => {
  const handleScrollToSchools = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const target =
      document.getElementById("our-schools-network") ||
      document.getElementById("schools-directory");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white overflow-x-clip pt-6 sm:pt-12 pb-10 sm:pb-12 lg:pt-[58px] lg:pb-[37px] select-none">
      {/* Top-Right Green Circle (Desktop only) */}
      <div
        className="hidden lg:block absolute -top-[19px] -right-[54px] w-[176px] h-[176px] rounded-full bg-[#40c843] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Far Right Flowing Contour Lines (Figma 1:1727..1:1730) */}
      <svg
        className="hidden lg:block absolute right-0 top-[21px] w-[274px] h-[511px] pointer-events-none z-0"
        viewBox="0 0 275 511"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.75 0C0.75 180 130.75 140 160.75 260C190.75 380 310.75 420 380.75 450"
          stroke="#E5E7EB"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
        <path
          d="M40.75 0C40.75 170 160.75 150 190.75 270C220.75 390 320.75 440 380.75 470"
          stroke="#E5E7EB"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
        <path
          d="M80.75 0C80.75 160 190.75 160 220.75 280C250.75 400 340.75 460 380.75 490"
          stroke="#E5E7EB"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
        <path
          d="M120.75 0C120.75 150 220.75 170 250.75 290C280.75 410 350.75 480 380.75 510"
          stroke="#E5E7EB"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
      </svg>

      {/* Main Content Stage */}
      <div className="relative max-w-[1224px] mx-auto px-4 sm:px-6 xl:px-0 z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-6 sm:gap-10 lg:gap-8">
          {/* LEFT COLUMN: Title, Description & CTA with Background Smiley Watermark */}
          <div className="relative w-full lg:w-[588px] lg:pt-[104px] text-left">
            {/* Background Smiley Watermark (Visible on Mobile & Desktop) */}
            <svg
              className="absolute right-0 sm:right-6 lg:left-[428px] top-0 sm:top-4 lg:top-[72px] w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[176px] lg:h-[176px] opacity-40 pointer-events-none z-0"
              viewBox="0 0 176 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="88"
                cy="88"
                r="79.2"
                stroke="#D1D5DB"
                strokeWidth="3.5"
              />
              <ellipse
                cx="61.6"
                cy="70.4"
                rx="6.16"
                ry="9.24"
                fill="#D1D5DB"
              />
              <ellipse
                cx="114.4"
                cy="70.4"
                rx="6.16"
                ry="9.24"
                fill="#D1D5DB"
              />
              <path
                d="M56 108C76 128 100 128 120 108"
                stroke="#D1D5DB"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Headline */}
            <h1 className="relative z-10 max-w-[480px] text-[28px] xs:text-[32px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-[-1px] sm:tracking-[-1.35px] leading-[1.08] lg:leading-[54px]">
              <span className="text-[#1e2432]">Schools &amp; </span>
              <br className="sm:hidden" />
              <span className="text-[#073c96]">Curriculum</span>
            </h1>

            {/* Subtitle */}
            <p className="relative z-10 mt-3 sm:mt-5 lg:mt-[20px] max-w-[448px] text-[12px] xs:text-[12.5px] sm:text-[16px] leading-[19px] sm:leading-[24px] text-[#6b7280] font-normal">
              Discover our diverse schools and comprehensive curriculum designed to
              inspire learning, nurture talent, and empower every student to achieve
              their full potential.
            </p>

            {/* Primary CTA Button */}
            <div className="relative z-10 mt-4 sm:mt-7 lg:mt-[32px]">
              <button
                type="button"
                onClick={handleScrollToSchools}
                className="inline-flex items-center justify-center w-[130px] sm:w-[150px] h-[36px] sm:h-[40px] rounded-full bg-[#40c843] hover:bg-[#36b339] text-white text-[11px] sm:text-[12px] font-semibold leading-[16px] tracking-[0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer active:scale-95"
              >
                See Our School
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Collage + Floating Pastel Dots */}
          <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] lg:w-[480px] shrink-0 mx-auto mt-4 sm:mt-8 lg:mt-0">
            {/* Top-left subtle yellow dot */}
            <div
              className="hidden sm:block absolute left-[39px] -top-[12px] w-[15.86px] h-[14px] rounded-[19px] bg-[#fcc636] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -left-[92px] top-[195px] w-[30px] h-[30px] rounded-full bg-[#b6a6ce] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -left-[116px] top-[432px] w-[24px] h-[24px] rounded-full bg-[#5fb2c9] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden sm:block absolute left-[207.68px] top-[192px] w-[13.6px] h-[12px] rounded-full bg-[#e5e7eb] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden sm:block absolute left-[452px] top-[464px] w-[20px] h-[20px] rounded-full bg-[#8eaa83] pointer-events-none"
              aria-hidden="true"
            />

            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 xs:gap-3.5 sm:gap-x-[27px] sm:gap-y-[20px]">
              {/* Top-Left: Perfect Circle with lavender dot accent */}
              <div className="relative">
                <div className="group relative w-full aspect-square rounded-full overflow-hidden bg-slate-100 shadow-sm">
                  <img
                    src={schoolsHero1Img}
                    alt="Sindhu School students running in sports day race"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                {/* Purple dot accent at bottom-left outside circle */}
                <div
                  className="absolute -left-1 bottom-1 sm:-left-2 sm:bottom-2 w-[16px] h-[16px] sm:w-[22px] sm:h-[22px] rounded-full bg-[#b6a6ce] pointer-events-none z-20 shadow-xs"
                  aria-hidden="true"
                />
              </div>

              {/* Top-Right: Rounded Rectangle */}
              <div className="group relative w-full aspect-square rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
                <img
                  src={schoolsHero2Img}
                  alt="K.C. Bajaj College of Pharmacy and Research faculty office"
                  style={{
                    left: "-107.06%",
                    top: "-15.41%",
                    width: "234.88%",
                    height: "128.88%",
                  }}
                  className="absolute max-w-none group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Bottom-Left: Arch Top Image with cyan dot accent */}
              <div className="relative">
                <div className="group relative w-full aspect-square rounded-t-[44px] sm:rounded-t-[60px] rounded-b-[20px] sm:rounded-b-[28px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
                  <img
                    src={schoolsHero3Img}
                    alt="Student balancing open book on head in library"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                {/* Cyan dot accent at bottom-left */}
                <div
                  className="absolute -left-1 bottom-4 sm:-left-2 sm:bottom-6 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#5fb2c9] pointer-events-none z-20 shadow-xs"
                  aria-hidden="true"
                />
              </div>

              {/* Bottom-Right: Curved Top-Left Corner Rect */}
              <div className="group relative w-full aspect-square rounded-tl-[54px] sm:rounded-tl-[84px] lg:rounded-tl-[114px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] sm:rounded-tr-[24px] sm:rounded-br-[24px] sm:rounded-bl-[24px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
                <img
                  src={schoolsHero4Img}
                  alt="Young student painting creatively in arts class"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-Left Subtle Blue Arch Stroke (Figma 1:1762: x:108, y:690 -> top:528 rel stage) */}
        <svg
          className="hidden lg:block absolute left-0 top-[528px] w-[101px] h-[9px] pointer-events-none"
          viewBox="0 0 101 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1.50049 7.5C26.5005 -0.5 73.5005 -0.5 99.5005 7.5"
            stroke="#2B4BEE"
            strokeOpacity="0.3"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default CurriculumHero;
