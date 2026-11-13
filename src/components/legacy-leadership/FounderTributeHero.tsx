import React from "react";
import founderHeroBg from "../../assets/legacy-leadership/founder-hero-bg.png";
import founderKcBajaj from "../../assets/legacy-leadership/founder-kc-bajaj.png";
import OpeningQuoteIcon from "./OpeningQuoteIcon";

const FounderTributeHero: React.FC = () => {
  return (
    <section
      id="founder-tribute"
      aria-label="Tribute to Late Shri. K.C. Bajaj"
      className="relative w-full overflow-hidden bg-white scroll-mt-24"
    >
      <div className="relative w-full min-h-[460px] lg:h-[536px]">
        {/* Textured Aqua/Mint Gradient Backdrop */}
        <img
          src={founderHeroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Centered 1440px Portrait & Copy Canvas */}
        <div className="relative max-w-[1440px] mx-auto h-full lg:min-h-[536px]">
          {/* Right Founder Portrait (Desktop exact x:927 y:38 w:374 h:461) */}
          <div className="hidden lg:block pointer-events-none select-none absolute right-[139px] top-[38px] w-[374px] h-[461px] z-10">
            <img
              src={founderKcBajaj}
              alt="Late Shri. K.C. Bajaj"
              className="w-full h-full object-contain object-top"
            />
          </div>

          {/* Bottom White Fade Overlay + Soft White Radial Vignette (Figma 1:4381..1:4384) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] lg:h-[290px] bg-gradient-to-b from-transparent via-white/70 to-white z-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute left-[729px] top-[298px] w-[348px] h-[221px] rounded-full bg-white blur-[75px] opacity-90 z-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute right-[-92px] top-[246px] w-[324px] h-[324px] rounded-full bg-white blur-[75px] opacity-90 z-20"
          />

          {/* Foreground Content Aligned to 1226px Grid (x: 108) */}
          <div className="relative z-30 max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[108px] pt-10 pb-8 lg:pt-[74px] lg:pb-[36px] min-h-[460px] lg:min-h-[536px] flex flex-col justify-between">
            {/* Quote Tribute Block */}
            <div className="max-w-[740px]">
              <OpeningQuoteIcon className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] text-[#7cc4a8]" />
              <blockquote className="mt-1 sm:mt-2 pl-4 sm:pl-9 font-light italic text-[20px] sm:text-[26px] xl:text-[29px] leading-[1.45] sm:leading-[1.52] text-[#223843]">
                Shri Khubchand Bajaj was a visionary leader and a distinguished
                personality whose remarkable contributions to education,
                community service, and social development have left an enduring
                legacy.
              </blockquote>
            </div>

            {/* Mobile Portrait Preview */}
            <div className="lg:hidden relative mt-6 flex justify-center">
              <div className="relative w-[220px] sm:w-[270px] h-[270px] sm:h-[330px]">
                <img
                  src={founderKcBajaj}
                  alt="Late Shri. K.C. Bajaj"
                  className="w-full h-full object-contain object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-b from-transparent to-white"
                />
              </div>
            </div>

            {/* Founder Name & Dates (Bottom-Right) */}
            <div className="relative z-30 self-end text-right pt-2 lg:pt-0 lg:pr-[6px] lg:pb-[10px]">
              <h2 className="font-bold text-[24px] sm:text-[30px] xl:text-[34px] leading-[1.2] tracking-[-0.01em] text-[#111827]">
                Late Shri. K.C. Bajaj
              </h2>
              <p className="mt-1 text-[13px] sm:text-[14px] leading-[20px] font-normal text-[#64748b]">
                Born on: 11/04/1931 &nbsp; Expired on: 24/08/2003
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderTributeHero;

