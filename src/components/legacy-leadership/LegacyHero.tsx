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
    <section className="relative mt-[11px] w-full bg-[#bedbff]/[0.17] overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[32px] pt-10 pb-14 lg:pt-[64px] lg:pb-[91px]">
        <div className="relative max-w-[1376px] mx-auto lg:min-h-[460px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Text Content */}
          <div className="relative z-10 w-full lg:w-[609px] xl:ml-[55px] flex flex-col gap-[26px]">
            {/* Floating Yellow Star Behind "Foundation" */}
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

            <h1 className="relative z-10 font-bold text-[38px] sm:text-[50px] xl:text-[60px] leading-[1.1] xl:leading-[60px] tracking-[0px] text-[#1b2a47] xl:w-[718px]">
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
                    className="pointer-events-none absolute left-[3px] -bottom-[13px] w-[78%] xl:w-[353px] max-w-none h-[8px]"
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

            <div className="relative z-10 max-w-[600px] pt-[4px]">
              <p className="text-[16px] font-normal leading-[26px] text-[#6c757d]">
                We go beyond traditional learning by creating opportunities that
                help students discover their strengths, develop essential
                skills, and become responsible individuals.
              </p>
            </div>

            {/* Small Highlights Bar */}
            <div className="relative z-10 w-full max-w-[609px] border-t border-[#cbd8ef] pt-[24px] flex flex-wrap items-center gap-x-[24px] gap-y-[12px]">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-[6px]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-[12px] h-[12px] rounded-full bg-[#22c55e] shrink-0"
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
                  <span className="text-[12px] leading-[16px] font-normal text-[#64748b]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Graphic with Asymmetric Circles, Glass Photo Card & Floating Badge */}
          <div className="relative w-full max-w-[460px] lg:max-w-none lg:w-[664px] h-[360px] sm:h-[440px] lg:h-[460px] flex justify-center lg:block shrink-0">
            {/* Floating Paper-Plane Icon Above Top-Left of Card */}
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
              className="pointer-events-none absolute left-[55%] sm:left-[320px] lg:left-[400px] top-[120px] sm:top-[155px] lg:top-[172px] w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[288px] lg:h-[288px] rounded-full bg-[#40c843]/[0.76] blur-[44px]"
            />

            {/* Deep Blue Circle Backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[45%] sm:left-[260px] lg:left-[344px] -top-[48px] lg:-top-[64px] w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[384px] lg:h-[384px] rounded-full bg-[#073c96]"
            />

            {/* Glass Photo Frame */}
            <div className="relative lg:ml-[102px] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-[40px] sm:rounded-[50px] bg-white/70 border-4 border-white p-[12px] sm:p-[16px] backdrop-blur-[4px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden bg-slate-100">
                <img
                  src={heroFlagCeremony}
                  alt="Sindhu Education Society faculty and students gathered beneath school banner"
                  className="w-full h-full object-cover object-[31%_50%]"
                />
              </div>

              {/* Floating Top-Rated Badge */}
              <div className="absolute -left-[8px] sm:-left-[20px] top-[262px] sm:top-[356px] lg:top-[398px] w-[210px] sm:w-[222px] h-[70px] sm:h-[74px] rounded-[16px] bg-white border border-[#ffedd5] px-[14px] sm:px-[16px] py-[10px] sm:py-[12px] flex items-center gap-[12px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
                <div className="w-[44px] sm:w-[48px] h-[44px] sm:h-[48px] shrink-0 rounded-[12px] bg-[#ffedd5] flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 26 20"
                    fill="none"
                    className="w-[25px] h-[18px] text-[#f26b38]"
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
                  <span className="text-[12px] leading-[16px] font-bold tracking-[0.6px] uppercase text-[#94a3b8]">
                    TOP RATED
                  </span>
                  <span className="text-[14px] leading-[20px] font-bold text-[#1b2a47] whitespace-nowrap">
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

