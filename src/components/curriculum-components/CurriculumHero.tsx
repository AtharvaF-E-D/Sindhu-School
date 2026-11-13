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
    <section className="relative w-full bg-white overflow-x-clip pt-10 sm:pt-12 pb-12 lg:pt-[58px] lg:pb-[37px] select-none">
      {/* Top-Right Green Circle (Figma 1:1731: 176 x 176 at x:1318, y:85, #40c843) */}
      <div
        className="hidden sm:block absolute -top-[19px] -right-[54px] w-[176px] h-[176px] rounded-full bg-[#40c843] pointer-events-none z-0"
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

      {/* Main 1224px Content Stage (Figma 1:1732: x:108, w:1224) */}
      <div className="relative max-w-[1224px] mx-auto px-4 sm:px-6 xl:px-0 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8">
          {/* LEFT COLUMN: Title, Description & CTA (Figma 1:1733: w:588, y:266) */}
          <div className="relative w-full lg:w-[588px] lg:pt-[104px] text-left">
            {/* Background Smiley Watermark (Figma 1:1734: 176 x 176, left:428, top:72 rel stage) */}
            <svg
              className="hidden lg:block absolute left-[428px] top-[72px] w-[176px] h-[176px] opacity-30 pointer-events-none z-0"
              viewBox="0 0 176 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8.80005 88C8.80005 131.712 44.2884 167.2 88 167.2C131.712 167.2 167.2 131.712 167.2 88C167.2 44.2884 131.712 8.80005 88 8.80005C44.2884 8.80005 8.80005 44.2884 8.80005 88V88"
                stroke="#D1D5DB"
                strokeWidth="3.52"
              />
              <path
                d="M55.4404 70.3998C55.4404 74.1726 56.6145 77.6587 58.5204 79.5451C60.4263 81.4314 62.7745 81.4314 64.6804 79.5451C66.5863 77.6587 67.7604 74.1726 67.7604 70.3998C67.7604 66.6271 66.5863 63.141 64.6804 61.2546C62.7745 59.3683 60.4263 59.3683 58.5204 61.2546C56.6145 63.141 55.4404 66.6271 55.4404 70.3998V70.3998"
                fill="#D1D5DB"
                stroke="#D1D5DB"
                strokeWidth="1.76"
              />
              <path
                d="M108.24 70.4001C108.24 74.1728 109.414 77.659 111.32 79.5453C113.226 81.4317 115.574 81.4317 117.48 79.5453C119.386 77.659 120.56 74.1728 120.56 70.4001C120.56 66.6274 119.386 63.1412 117.48 61.2549C115.574 59.3685 113.226 59.3685 111.32 61.2549C109.414 63.1412 108.24 66.6274 108.24 70.4001V70.4001"
                fill="#D1D5DB"
                stroke="#D1D5DB"
                strokeWidth="1.76"
              />
              <path
                d="M56.3203 109.12C77.4403 127.893 98.5603 127.893 119.68 109.12"
                stroke="#D1D5DB"
                strokeWidth="4.4"
                strokeLinecap="round"
              />
            </svg>

            {/* Headline (Figma 1:1741: w:480, 60px/54px ExtraBold -1.35px) */}
            <h1 className="relative z-10 max-w-[480px] text-[42px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-[-1.35px] leading-[1.08] lg:leading-[54px]">
              <span className="text-[#1e2432]">Schools &amp; </span>
              <span className="text-[#073c96]">Curriculum</span>
            </h1>

            {/* Subtitle (Figma 1:1743: max-w:448, 16px/24px Regular #6b7280) */}
            <p className="relative z-10 mt-5 lg:mt-[20px] max-w-[448px] text-[15px] sm:text-[16px] leading-[24px] text-[#6b7280] font-normal">
              Discover our diverse schools and comprehensive curriculum designed to
              inspire learning, nurture talent, and empower every student to achieve
              their full potential.
            </p>

            {/* Primary CTA Button (Figma 1:1745: 150 x 40, #40c843) */}
            <div className="relative z-10 mt-7 lg:mt-[32px]">
              <button
                type="button"
                onClick={handleScrollToSchools}
                className="inline-flex items-center justify-center w-[150px] h-[40px] rounded-full bg-[#40c843] hover:bg-[#36b339] text-white text-[12px] font-semibold leading-[16px] tracking-[0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer active:scale-95"
              >
                See Our School
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Collage + Floating Pastel Dots (Figma 1:1747..1:1761: 480 x 480) */}
          <div className="relative w-full max-w-[480px] lg:w-[480px] shrink-0">
            {/* Decorative Floating Pastel Dots (positioned relative to 480x480 collage at x:852, y:162) */}
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

            {/* 2x2 Grid (226.5 x 232 each, gap-x:27, gap-y:20 -> total 480 x 484) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-x-[27px] sm:gap-y-[20px]">
              {/* Top-Left Oval (Figma 1:1761: 226.5 x 232, rounded-full) */}
              <div className="group relative w-full aspect-[226.5/232] lg:w-[226.5px] lg:h-[232px] rounded-full overflow-hidden bg-slate-100">
                <img
                  src={schoolsHero1Img}
                  alt="Sindhu School students running in sports day race"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Top-Right Rounded Rect (Figma 1:1754: 226.5 x 232, r:28) */}
              <div className="group relative w-full aspect-[226.5/232] lg:w-[226.5px] lg:h-[232px] rounded-[28px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
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

              {/* Bottom-Left Rounded Rect (Figma 1:1757: 226.5 x 232, r:28) */}
              <div className="group relative w-full aspect-[226.5/232] lg:w-[226.5px] lg:h-[232px] rounded-[28px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
                <img
                  src={schoolsHero3Img}
                  alt="Student balancing open book on head in library"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Bottom-Right Arch Corner Rect (Figma 1:1760: 226.5 x 232, radii 114/10/10/10) */}
              <div className="group relative w-full aspect-[226.5/232] lg:w-[226.5px] lg:h-[232px] rounded-tl-[84px] sm:rounded-tl-[114px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-slate-100">
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
