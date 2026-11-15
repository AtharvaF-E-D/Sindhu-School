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
    <section className="relative w-full bg-white pt-0 pb-2 sm:pb-6 lg:pb-0 select-none overflow-hidden">
      {/* Vertical accent line touching InfoBar (Figma 1:1412: h:107, 2px #073c96) */}
      <div
        className="w-[2px] h-[52px] sm:h-[80px] lg:h-[107px] lg:-mt-[3px] bg-[#073c96] mx-auto"
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 text-center pt-3 lg:pt-[6px]">
        {/* Main Title: Sindhu in blue, Education Society in teal-green */}
        <h1 className="text-[22px] xs:text-[24px] sm:text-[38px] lg:text-[60px] font-black tracking-tight leading-tight mb-2.5 sm:mb-4 lg:mb-[13px] inline-block">
          {title === "Sindhu Education Society" ? (
            <>
              <span className="text-[#073c96]">Sindhu </span>
              <span className="text-[#0d9488]">Education Society</span>
            </>
          ) : (
            <span className="text-[#073c96]">{title}</span>
          )}
        </h1>

        {/* Narrative Description */}
        <p className="text-[12px] xs:text-[12.5px] sm:text-[16px] lg:text-[20px] text-[#64748b] font-normal leading-[19px] sm:leading-[26px] lg:leading-[31px] max-w-[325px] xs:max-w-[345px] sm:max-w-[800px] lg:max-w-[1102px] mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
