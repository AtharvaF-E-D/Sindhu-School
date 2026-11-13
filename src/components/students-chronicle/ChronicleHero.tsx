import React from "react";
import chronicleHeroImg from "../../assets/chronicle-hero.png";

const ChronicleHero: React.FC = () => {
  return (
    <section
      id="students-chronicle-hero"
      className="w-full bg-white pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-[35px] lg:pb-[41px] select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-[103px] lg:pr-[65px]">
        <div className="flex flex-col lg:flex-row items-start lg:gap-[48px] gap-8 sm:gap-10">
          {/* Left Column: Headline, Description & CTA (Figma 33:1393: x:103, y:260, w:530) */}
          <div className="w-full lg:w-[530px] lg:pt-[121px] shrink-0">
            <h1 className="max-w-[480px] text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.14] lg:leading-[54px] tracking-[-1.35px] text-[#073c96]">
              Every Student Has a Story. Every Moment Matters.
            </h1>

            <p className="mt-4 lg:mt-[20px] max-w-[518px] text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#737373]">
              Explore the experiences, achievements, celebrations, and
              unforgettable memories that make student life at Sindhu Education
              Society special.
            </p>

            <div className="mt-6 lg:mt-[32px]">
              <a
                href="#about"
                className="inline-flex items-center justify-center w-[111px] h-[40px] rounded-full bg-[#40c843] hover:bg-[#36b339] text-white text-[12px] font-semibold leading-[16px] tracking-[0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 active:scale-95"
              >
                About us
              </a>
            </div>
          </div>

          {/* Right Column: Rectangular Hero Photo (Figma 33:1240: 694 x 548) */}
          <div className="relative w-full h-[260px] sm:h-[380px] lg:w-[694px] lg:h-[548px] overflow-hidden bg-slate-100 shrink-0">
            <img
              src={chronicleHeroImg}
              alt="Students performing outdoor stretching exercises together on the campus field"
              className="w-full h-full object-cover object-center lg:object-fill lg:absolute lg:top-0 lg:left-[-25.37%] lg:w-[150.73%] lg:h-full lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChronicleHero;

