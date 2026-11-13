import React from "react";
import honourHero1 from "../../assets/academics/honour-hero-1.png";
import honourHero2 from "../../assets/academics/honour-hero-2.png";
import honourHero3 from "../../assets/academics/honour-hero-3.png";
import honourHero4 from "../../assets/academics/honour-hero-4.png";

const RollOfHonourHeroSection: React.FC = () => {
  return (
    <section
      id="roll-of-honour-hero"
      aria-labelledby="roll-of-honour-heading"
      className="w-full bg-white lg:pt-[33px]"
    >
      <div className="w-full bg-[#bfd8f8]/30 lg:min-h-[580px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:pl-[160px] xl:pr-[176px] pt-10 sm:pt-12 lg:pt-[52px] pb-12 sm:pb-14 lg:pb-[72px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-[48px]">
            {/* Left Copy & CTA */}
            <div className="w-full lg:w-[530px] shrink-0 lg:pt-[102px]">
              <h1
                id="roll-of-honour-heading"
                className="font-extrabold text-[36px] sm:text-[44px] xl:text-[48px] leading-[1.12] xl:leading-[54px] tracking-[-1.35px] text-[#1e2432]"
              >
                Roll Of Honour
              </h1>

              <p className="mt-[20px] text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#6b7280] max-w-[518px]">
                The prestigious Roll of Honour showcases the cream of the crop
                among all Sindhu Education Society. These are the students who
                have topped the rankings and have beaten other very talented
                peers.
              </p>

              <div className="mt-[32px]">
                <a
                  href="#schools-curriculum"
                  className="inline-flex items-center justify-center min-w-[150px] h-[40px] px-[28px] rounded-full bg-[#40c843] hover:bg-[#36b339] text-white text-[12px] leading-[16px] font-semibold tracking-[0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
                >
                  See Our School
                </a>
              </div>
            </div>

            {/* Right Asymmetric 2x2 Student & Celebration Photo Collage (exact 486x456 Figma alignment) */}
            <div className="w-full max-w-[486px] mx-auto lg:mx-0 lg:w-[486px] shrink-0 flex items-start gap-3 sm:gap-[15px]">
              <div className="w-[49.59%] lg:w-[241px] flex flex-col items-end gap-3 sm:gap-[12px] pt-[12px] sm:pt-[19px]">
                <img
                  src={honourHero1}
                  alt="Students with trophy and faculty leaders celebrating sports victory"
                  className="w-full aspect-[241/202] lg:w-[241px] lg:h-[202px] object-cover block"
                />
                <img
                  src={honourHero3}
                  alt="Students standing together on campus courtyard with educators"
                  className="w-[95.02%] aspect-[229/193] lg:w-[229px] lg:h-[193px] object-cover block"
                />
              </div>

              <div className="w-[47.33%] lg:w-[230px] flex flex-col items-start gap-3 sm:gap-[12px]">
                <img
                  src={honourHero2}
                  alt="Students focused on chess matches under coach supervision"
                  className="w-full aspect-[230/221] lg:w-[230px] lg:h-[221px] object-cover block"
                />
                <img
                  src={honourHero4}
                  alt="Award winners receiving felicitation certificates and bouquets on stage"
                  className="w-[92.61%] aspect-[213/223] lg:w-[213px] lg:h-[223px] object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollOfHonourHeroSection;

