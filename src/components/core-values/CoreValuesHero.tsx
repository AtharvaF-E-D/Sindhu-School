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
    <section className="relative z-10 w-full pt-14 sm:pt-[78px] pb-10 sm:pb-12 select-none">
      <div className="max-w-[896px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center rounded-full bg-[#eff6ff] border border-[#eff6ff]/60 px-4 pt-[6px] pb-[8px] mb-6">
          <span className="text-[14px] leading-[20px] font-medium tracking-[0.35px] text-[#073c96]">
            Our Core Values
          </span>
        </div>

        {/* Main Display Heading */}
        <h1 className="text-[40px] sm:text-[54px] md:text-[62px] font-bold leading-[1.08] md:leading-[62px] tracking-[-1.2px] md:tracking-[-1.55px] text-[#111827]">
          <span className="block">Building Values,</span>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 mt-1 md:mt-[4px]">
            <span>Shaping</span>
            <span
              className="inline-flex items-center justify-center bg-[#073c96] text-white px-3.5 sm:px-[14px] pt-[1px] pb-[4px]"
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
        <p className="mt-6 max-w-[784px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] md:leading-[25px] font-normal tracking-[0px] text-[#6b7280]">
          Our values go beyond education. They inspire excellence, encourage
          inclusivity, and nurture responsible individuals who make a positive
          difference in society.
        </p>

        {/* Dark Pill CTA Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center rounded-full bg-[#27282c] hover:bg-[#18191c] text-white text-[14px] font-normal leading-[20px] tracking-[0px] px-6 py-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer active:scale-95"
          >
            Discover Our Schools
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesHero;
