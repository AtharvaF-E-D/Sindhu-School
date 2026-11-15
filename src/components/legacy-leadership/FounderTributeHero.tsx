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
      <div className="relative w-full min-h-[220px] xs:min-h-[240px] sm:min-h-[320px] lg:h-[536px]">
        {/* Textured Aqua/Mint Gradient Backdrop */}
        <img
          src={founderHeroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* MOBILE VIEW (< lg): Quote on Left, Portrait + Name/Dates on Right */}
        <div className="lg:hidden relative z-30 px-3 xs:px-4 sm:px-6 pt-4 xs:pt-5 pb-3">
          <div className="flex items-start justify-between gap-2 xs:gap-3">
            {/* Left Quote */}
            <div className="flex-1 min-w-0 pr-1">
              <OpeningQuoteIcon className="w-[26px] h-[26px] xs:w-[30px] xs:h-[30px] text-[#7cc4a8] shrink-0" />
              <blockquote className="font-cursive font-semibold text-[13px] xs:text-[14px] sm:text-[17px] leading-[1.32] xs:leading-[1.38] text-[#1e3a8a] mt-1 pl-1">
                Shri Khubchand Bajaj was a visionary leader and a distinguished
                personality whose remarkable contributions to education,
                community service, and social development have left an enduring
                legacy.
              </blockquote>
            </div>

            {/* Right Portrait & Name/Dates */}
            <div className="w-[125px] xs:w-[138px] sm:w-[170px] shrink-0 flex flex-col items-end">
              <div className="relative w-full aspect-[138/150] overflow-hidden">
                <img
                  src={founderKcBajaj}
                  alt="Late Shri. K.C. Bajaj"
                  className="w-full h-full object-contain object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[45px] bg-gradient-to-b from-transparent to-white/90"
                />
              </div>

              <div className="text-right mt-1 w-full">
                <h2 className="font-bold text-[13px] xs:text-[14px] sm:text-[16px] leading-tight text-[#073c96]">
                  Late Shri. K.C. Bajaj
                </h2>
                <p className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] leading-tight font-normal text-[#64748b] mt-0.5">
                  Born on: 11/04/1931
                </p>
                <p className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] leading-tight font-normal text-[#64748b]">
                  Expired on: 24/08/2003
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (lg+) */}
        <div className="hidden lg:block relative max-w-[1440px] mx-auto h-full lg:min-h-[536px]">
          {/* Right Founder Portrait (Desktop exact x:927 y:38 w:374 h:461) */}
          <div className="pointer-events-none select-none absolute right-[139px] top-[38px] w-[374px] h-[461px] z-10">
            <img
              src={founderKcBajaj}
              alt="Late Shri. K.C. Bajaj"
              className="w-full h-full object-contain object-top"
            />
          </div>

          {/* Bottom White Fade Overlay + Soft White Radial Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] lg:h-[290px] bg-gradient-to-b from-transparent via-white/70 to-white z-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[729px] top-[298px] w-[348px] h-[221px] rounded-full bg-white blur-[75px] opacity-90 z-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-92px] top-[246px] w-[324px] h-[324px] rounded-full bg-white blur-[75px] opacity-90 z-20"
          />

          {/* Foreground Content Aligned to 1226px Grid (x: 108) */}
          <div className="relative z-30 max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[108px] pt-10 pb-8 lg:pt-[74px] lg:pb-[36px] min-h-[460px] lg:min-h-[536px] flex flex-col justify-between">
            {/* Quote Tribute Block */}
            <div className="max-w-[740px]">
              <OpeningQuoteIcon className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] text-[#7cc4a8]" />
              <blockquote className="mt-1 sm:mt-2 pl-4 sm:pl-9 font-cursive font-semibold text-[24px] xl:text-[28px] leading-[1.4] text-[#1e3a8a]">
                Shri Khubchand Bajaj was a visionary leader and a distinguished
                personality whose remarkable contributions to education,
                community service, and social development have left an enduring
                legacy.
              </blockquote>
            </div>

            {/* Founder Name & Dates (Bottom-Right) */}
            <div className="relative z-30 self-end text-right pt-2 lg:pt-0 lg:pr-[6px] lg:pb-[10px]">
              <h2 className="font-bold text-[24px] sm:text-[30px] xl:text-[34px] leading-[1.2] tracking-[-0.01em] text-[#073c96]">
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

