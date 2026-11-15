import React from "react";
import heroStudents from "../../assets/hero-students.png";

interface HeroSectionProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  highlightYear?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badgeText = "Education Society",
  titleLine1 = "Where learning",
  titleLine2 = "meets legacy!",
  highlightYear = "Since 1952",
  subtitle = "Sindhu Education Society’s glorious journey from humble beginnings to a premier educational institution in North Nagpur.",
  ctaText = "Admissions Open for AY 2017–28",
  ctaHref = "#admissions",
}) => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white select-none"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 65% 80% at 15% 15%, rgba(239, 246, 255, 0.85) 0%, rgba(255, 255, 255, 0) 65%), radial-gradient(ellipse 55% 70% at 88% 20%, rgba(236, 253, 245, 0.45) 0%, rgba(255, 255, 255, 0) 60%)",
      }}
      aria-label="Hero Banner"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[32px] pt-[28px] sm:pt-[36px] lg:pt-[40px] pb-0 lg:h-[573px] relative">
        <div className="relative h-full flex flex-col lg:block">
          {/* Left Hero Content (Figma 1:374) */}
          <div className="relative z-10 w-full lg:w-[664px] lg:pt-[62px] flex flex-col items-start gap-[18px] sm:gap-[27px]">
            {/* Badge Pill (1:375) */}
            <div className="inline-flex items-center h-[28px] px-[14px] py-[4px] rounded-full bg-[#eff6ff] border border-[#dbeafe] text-[#073c96] text-[13px] font-medium leading-[16px]">
              <span>{badgeText}</span>
              <span className="ml-[6px] text-[#073c96]" aria-hidden="true">
                •
              </span>
            </div>

            {/* Heading 1 (1:380) */}
            <div className="pt-[2px] sm:pt-[7px]">
              <h1 className="max-w-[511px] text-[34px] sm:text-[48px] lg:text-[60px] font-extrabold text-[#0f172a] leading-[1.1] lg:leading-[60px] tracking-[-1.2px] lg:tracking-[-1.5px]">
                {titleLine1}
                <br />
                {titleLine2}
              </h1>

              {/* Highlighted Year with curved underline under "Since 1952" */}
              <div className="relative inline-block mt-1 sm:mt-0 py-[4px] sm:py-[7.5px]">
                <span className="text-[34px] sm:text-[48px] lg:text-[60px] font-extrabold text-[#073c96] leading-[1.1] lg:leading-[60px] tracking-[-1.2px] lg:tracking-[-1.5px]">
                  {highlightYear}
                </span>
                <svg
                  className="block absolute left-[2%] sm:left-[30%] lg:left-[48%] -bottom-[2px] sm:bottom-[4px] w-[110px] sm:w-[108px] h-[8px] pointer-events-none"
                  viewBox="0 0 108 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.5C32 1.5 76 1.5 106 5"
                    stroke="#2B4BEE"
                    strokeOpacity="0.35"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle (1:387) */}
            <p className="max-w-[512px] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] text-[#64748b]">
              {subtitle}
            </p>

            {/* Primary CTA Button (1:388) */}
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-[10px] w-auto px-[20px] sm:px-[22px] py-[12px] sm:py-[14px] rounded-[10px] sm:rounded-[8px] bg-[#3bb748] hover:bg-[#32a23e] text-white text-[14px] sm:text-[16px] font-semibold leading-[20px] shadow-[0_10px_20px_-5px_rgba(59,183,72,0.45)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{ctaText}</span>
              <svg
                className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] shrink-0 stroke-current"
                fill="none"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                />
              </svg>
            </a>
          </div>

          {/* Right Student Showcase (Figma 1:394: bottom flush) */}
          <div className="mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:right-[32px] lg:bottom-0 w-full lg:w-[843px] lg:h-[533px] pointer-events-none flex items-end justify-center lg:justify-end z-0">
            <img
              src={heroStudents}
              alt="Sindhu Education Society Students"
              className="w-full max-w-[580px] lg:max-w-none h-auto lg:h-full object-contain object-bottom block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
