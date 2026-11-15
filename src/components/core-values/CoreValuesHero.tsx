import React from "react";

interface CoreValuesHeroProps {
  onDiscoverClick?: () => void;
}

const CoreValuesHero: React.FC<CoreValuesHeroProps> = ({ onDiscoverClick }) => {
  const handleCtaClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
      return;
    }
    window.location.hash = "#schools-curriculum";
  };

  return (
    <section className="relative z-10 w-full pt-3 sm:pt-6 md:pt-[78px] pb-4 sm:pb-8 md:pb-12 select-none">
      <div className="max-w-[896px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center rounded-full bg-[#e0f2fe]/80 border border-[#bae6fd]/60 px-3.5 sm:px-4 pt-[4px] pb-[5px] mb-3 sm:mb-5 shadow-xs">
          <span className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.2px] text-[#073c96]">
            Secure Task Management for Teams
          </span>
        </div>

        {/* Main Display Heading */}
        <h1 className="text-[32px] sm:text-[50px] md:text-[62px] font-bold leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.55px] text-[#111827]">
          <span className="block">Building Values,</span>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-2.5 mt-1 sm:mt-1.5 md:mt-[4px]">
            <span>Shaping</span>
            <span
              className="inline-flex items-center justify-center bg-[#073c96] text-white px-2.5 sm:px-3.5 md:px-[14px] py-0.5 sm:py-1 rounded-[3px] shadow-xs"
              style={{ transform: "rotate(3.22deg)" }}
            >
              <span
                className="inline-block"
                style={{ transform: "rotate(-3.22deg)" }}
              >
                Futures
              </span>
            </span>
          </span>
        </h1>

        {/* Descriptive Paragraph */}
        <p className="mt-3 sm:mt-5 max-w-[620px] md:max-w-[784px] mx-auto text-[13.5px] sm:text-[16px] md:text-[20px] leading-[21px] sm:leading-[25px] font-normal tracking-[0px] text-[#6b7280]">
          Our values go beyond education. They inspire excellence, encourage
          inclusivity, and nurture responsible individuals who make a positive
          difference in society.
        </p>

        {/* Dark Pill CTA Button */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center rounded-full bg-[#1e293b] hover:bg-[#0f172a] text-white text-[12px] sm:text-[14px] font-medium leading-[18px] sm:leading-[20px] tracking-[0px] px-5 sm:px-6 py-2 sm:py-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer active:scale-95"
          >
            Discover Our Schools
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesHero;
