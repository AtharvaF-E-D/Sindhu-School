import React from "react";
import heroFlagCeremony from "../../assets/legacy-leadership/hero-flag-ceremony.png";

interface HighlightItem {
  label: string;
}

const HERO_HIGHLIGHTS: HighlightItem[] = [
  { label: "Certified Tutors" },
  { label: "Safety Guaranteed" },
  { label: "Active Play" },
];

const LegacyHero: React.FC = () => {
  return (
    <section className="relative mt-0 w-full bg-[#bedbff]/[0.17] overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[32px] pt-6 pb-12 sm:pt-10 sm:pb-14 lg:pt-[64px] lg:pb-[91px]">
        <div className="relative max-w-[1376px] mx-auto lg:min-h-[460px] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-0">
          {/* Left Text Content */}
          <div className="relative z-10 w-full lg:w-[609px] xl:ml-[55px] flex flex-col gap-4 sm:gap-5 lg:gap-[26px]">
            {/* Mobile Paper-Plane Icon (centered above heading) */}
            <div className="flex lg:hidden justify-center w-full mb-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 30 30"
                fill="none"
                className="w-[28px] h-[28px] text-[#5d5fef]/30 -rotate-12"
              >
                <path
                  d="M26.8 3.2L3.8 13.6C2.7 14.1 2.8 15.7 3.9 16.1L11.4 18.9L14.2 26.4C14.6 27.5 16.2 27.6 16.7 26.5L27.1 3.5C27.4 2.9 27.4 2.9 26.8 3.2ZM12.8 17.5L22.3 8.1L15.6 23.2L13.5 17.8C13.3 17.6 13.1 17.5 12.8 17.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Floating Yellow Star Behind "Foundation" (Desktop only) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 25 24"
              fill="none"
              className="pointer-events-none hidden xl:block absolute left-[254px] top-[80px] w-[24.76px] h-[24px] text-[#fcd34d] z-0"
            >
              <path
                d="M12.38 1.2L15.46 7.45L22.36 8.45L17.37 13.31L18.55 20.18L12.38 16.94L6.21 20.18L7.39 13.31L2.4 8.45L9.3 7.45L12.38 1.2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>

            <h1 className="relative z-10 font-bold text-[32px] sm:text-[46px] lg:text-[50px] xl:text-[60px] leading-[1.15] xl:leading-[60px] tracking-[0px] text-[#1b2a47] xl:w-[718px]">
              <span className="block xl:whitespace-nowrap text-[#1b2a47]">
                More Than Education,
              </span>
              <span className="relative mt-[2px] block xl:whitespace-nowrap">
                <span className="relative inline-block text-[#073c96]">
                  A Foundation
                  {/* Curved underline below "A Foundation" */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 322 10"
                    fill="none"
                    className="pointer-events-none absolute left-[3px] -bottom-[10px] sm:-bottom-[13px] w-[88%] sm:w-[78%] xl:w-[353px] max-w-none h-[6px] sm:h-[8px]"
                  >
                    <path
                      d="M2 2.5C95.31 11 230.58 8.5 317.39 2.5"
                      stroke="#073c96"
                      strokeOpacity="0.4"
                      strokeWidth="4.054"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <span className="text-[#171717]">for Life.</span>
              </span>
            </h1>

            <div className="relative z-10 max-w-[600px] pt-[2px] lg:pt-[4px]">
              <p className="text-[13px] sm:text-[15px] lg:text-[16px] font-normal leading-[22px] sm:leading-[26px] text-[#6c757d]">
                We go beyond traditional learning by creating opportunities that
                help students discover their strengths, develop essential
                skills, and become responsible individuals.
              </p>
            </div>

            {/* Small Highlights Bar */}
            <div className="relative z-10 w-full max-w-[609px] border-t border-[#cbd8ef] pt-4 lg:pt-[24px] flex flex-wrap items-center gap-x-[16px] sm:gap-x-[24px] gap-y-[10px]">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-[6px]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full bg-[#22c55e] shrink-0"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-[8px] h-[8px] text-white"
                    >
                      <path
                        d="M2.5 6.2L4.9 8.5L9.5 3.6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[11px] sm:text-[12px] leading-[16px] font-medium text-[#64748b]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Yellow Star Icon on Mobile beneath highlights */}
            <div className="flex lg:hidden mt-0 sm:mt-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 25 24"
                fill="none"
                className="w-[24px] h-[24px] text-[#facc15]"
              >
                <path
                  d="M12.38 1.2L15.46 7.45L22.36 8.45L17.37 13.31L18.55 20.18L12.38 16.94L6.21 20.18L7.39 13.31L2.4 8.45L9.3 7.45L12.38 1.2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Graphic with Asymmetric Circles, Glass Photo Card & Floating Badge */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none lg:w-[664px] h-[330px] sm:h-[420px] lg:h-[460px] flex justify-center items-center lg:block shrink-0 mt-2 lg:mt-0">
            {/* Floating Paper-Plane Icon Above Top-Left of Card (Desktop only) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 30 30"
              fill="none"
              className="pointer-events-none hidden xl:block absolute left-[182px] -top-[31px] w-[30px] h-[30px] text-[#5d5fef]/20 z-0"
            >
              <path
                d="M26.8 3.2L3.8 13.6C2.7 14.1 2.8 15.7 3.9 16.1L11.4 18.9L14.2 26.4C14.6 27.5 16.2 27.6 16.7 26.5L27.1 3.5C27.4 2.9 27.4 2.9 26.8 3.2ZM12.8 17.5L22.3 8.1L15.6 23.2L13.5 17.8C13.3 17.6 13.1 17.5 12.8 17.5Z"
                fill="currentColor"
              />
            </svg>

            {/* Green Soft-Blurred Circle Backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-20px] sm:right-0 lg:right-auto bottom-[-20px] sm:bottom-[-30px] lg:bottom-auto lg:left-[400px] lg:top-[172px] w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[288px] lg:h-[288px] rounded-full bg-[#40c843]/[0.45] lg:bg-[#40c843]/[0.76] blur-[36px] lg:blur-[44px]"
            />

            {/* Deep Blue Circle Backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-30px] sm:right-[-20px] lg:right-auto top-[-10px] sm:top-[-20px] lg:top-[-64px] lg:left-[344px] w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[384px] lg:h-[384px] rounded-full bg-[#073c96]"
            />

            {/* Glass Photo Frame */}
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[460px] lg:h-[460px] lg:ml-[102px] rounded-[36px] sm:rounded-[44px] lg:rounded-[50px] bg-white/70 border-4 border-white p-[10px] sm:p-[14px] lg:p-[16px] backdrop-blur-[4px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
              <div className="w-full h-full rounded-[28px] sm:rounded-[34px] lg:rounded-[40px] overflow-hidden bg-slate-100">
                <img
                  src={heroFlagCeremony}
                  alt="Sindhu Education Society faculty and students gathered beneath school banner"
                  className="w-full h-full object-cover object-[31%_50%]"
                />
              </div>

              {/* Floating Top-Rated Badge */}
              <div className="absolute -left-[16px] sm:-left-[24px] bottom-[-16px] sm:bottom-[-20px] lg:bottom-auto lg:top-[398px] w-[185px] sm:w-[210px] lg:w-[222px] h-[58px] sm:h-[68px] lg:h-[74px] rounded-[14px] sm:rounded-[16px] bg-white border border-[#ffedd5] px-[10px] sm:px-[14px] lg:px-[16px] py-[8px] sm:py-[10px] lg:py-[12px] flex items-center gap-[10px] sm:gap-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.14)] z-20">
                <div className="w-[38px] sm:w-[44px] lg:w-[48px] h-[38px] sm:h-[44px] lg:h-[48px] shrink-0 rounded-[10px] sm:rounded-[12px] bg-[#ffedd5] flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 26 20"
                    fill="none"
                    className="w-[20px] sm:w-[23px] lg:w-[25px] h-[15px] sm:h-[17px] lg:h-[18px] text-[#f26b38]"
                  >
                    <path
                      d="M13 1.5L1 7.2L13 12.9L22.8 8.2V14.8H25V7.2L13 1.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.5 11.4V15.4C5.5 17.5 8.8 19.2 13 19.2C17.2 19.2 20.5 17.5 20.5 15.4V11.4L13 15L5.5 11.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] lg:text-[12px] leading-[14px] sm:leading-[16px] font-bold tracking-[0.6px] uppercase text-[#94a3b8]">
                    TOP RATED
                  </span>
                  <span className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[18px] sm:leading-[20px] font-bold text-[#1b2a47] whitespace-nowrap">
                    Kindergarten 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyHero;

