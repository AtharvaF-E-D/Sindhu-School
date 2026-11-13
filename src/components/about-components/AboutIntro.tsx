import React from "react";

interface AboutIntroProps {
  title?: string;
  description?: string;
}

const AboutIntro: React.FC<AboutIntroProps> = ({
  title = "Sindhu Education Society",
  description = "From the very outset, an all-encompassing educational journey paves the way for the students\u2019 lifelong personal growth and holistic well-being. At Sindhu Education Society, we prioritize the comprehensive and harmonious growth of every student, encompassing both economic and non-economic domains.",
}) => {
  return (
    <section className="relative w-full bg-white pt-0 pb-8 lg:pb-0 select-none overflow-hidden">
      {/* Vertical accent line touching InfoBar (Figma 1:1412: h:107, 2px #073c96) */}
      <div
        className="w-[2px] h-[72px] sm:h-[90px] lg:h-[107px] lg:-mt-[3px] bg-[#073c96] mx-auto"
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 text-center pt-3 lg:pt-[6px]">
        {/* Main Title (Figma 1:1417: 60px/64px Bold -1.5px, #40c843 -> #073c96) */}
        <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold tracking-[-1.5px] leading-[1.1] lg:leading-[64px] mb-3 lg:mb-[13px] bg-[linear-gradient(187deg,#40c843_0%,#073c96_100%)] bg-clip-text text-transparent inline-block">
          {title}
        </h1>

        {/* Narrative Description (Figma 1:1413: w:1102, 20px/31px Regular, #64748b) */}
        <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-[#64748b] font-normal leading-[1.6] lg:leading-[31px] max-w-[1102px] mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
