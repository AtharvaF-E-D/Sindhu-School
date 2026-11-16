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
      className="w-full bg-[#bfd8f8]/20 sm:bg-[#bfd8f8]/30 lg:min-h-[580px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:pl-[160px] xl:pr-[176px] pt-4 sm:pt-8 lg:pt-[52px] pb-10 sm:pb-14 lg:pb-[72px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-[48px]">
            {/* Top Collage on mobile, Right Asymmetric 2x2 Student & Celebration Photo Collage on desktop */}
            <div className="order-1 lg:order-2 w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[440px] lg:max-w-[486px] mx-auto lg:mx-0 lg:w-[486px] shrink-0 flex items-start gap-2.5 sm:gap-3 lg:gap-[15px]">
              <div className="w-[49.59%] lg:w-[241px] flex flex-col items-end gap-2.5 sm:gap-3 lg:gap-[12px] pt-0 lg:pt-[19px]">
                <img
                  src={honourHero1}
                  alt="Students with trophy and faculty leaders celebrating sports victory"
                  className="w-full aspect-[241/202] lg:w-[241px] lg:h-[202px] object-cover block rounded-[4px] sm:rounded-[6px]"
                />
                <img
                  src={honourHero3}
                  alt="Students standing together on campus courtyard with educators"
                  className="w-[95.02%] aspect-[229/193] lg:w-[229px] lg:h-[193px] object-cover block rounded-[4px] sm:rounded-[6px]"
                />
              </div>

              <div className="w-[47.33%] lg:w-[230px] flex flex-col items-start gap-2.5 sm:gap-3 lg:gap-[12px]">
                <img
                  src={honourHero2}
                  alt="Students focused on chess matches under coach supervision"
                  className="w-full aspect-[230/221] lg:w-[230px] lg:h-[221px] object-cover block rounded-[4px] sm:rounded-[6px]"
                />
                <img
                  src={honourHero4}
                  alt="Award winners receiving felicitation certificates and bouquets on stage"
                  className="w-[92.61%] aspect-[213/223] lg:w-[213px] lg:h-[223px] object-cover block rounded-[4px] sm:rounded-[6px]"
                />
              </div>
            </div>

            {/* Bottom Copy & CTA on mobile, Left Copy & CTA on desktop */}
            <div className="order-2 lg:order-1 w-full lg:w-[530px] shrink-0 lg:pt-[102px]">
              <h1
                id="roll-of-honour-heading"
                className="font-bold lg:font-extrabold text-[24px] sm:text-[32px] xl:text-[48px] leading-[1.2] xl:leading-[54px] tracking-normal lg:tracking-[-1.35px] text-[#1e2432]"
              >
                Roll Of Honour
              </h1>

              <p className="mt-3 sm:mt-4 lg:mt-[20px] text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[21px] sm:leading-[24px] font-normal text-[#64748b] max-w-[518px]">
                The prestigious Roll of Honour showcases the cream of the crop
                among all Sindhu Education Society. These are the students who
                have topped the rankings and have beaten other very talented
                peers.
              </p>

              <div className="mt-4 sm:mt-6 lg:mt-[32px]">
                <a
                  href="#schools-curriculum"
                  className="inline-flex items-center justify-center min-w-[130px] sm:min-w-[150px] h-[36px] sm:h-[40px] px-5 sm:px-[28px] rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-[12px] leading-[16px] font-medium tracking-[0.2px] shadow-sm transition-colors"
                >
                  See Our School
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default RollOfHonourHeroSection;

