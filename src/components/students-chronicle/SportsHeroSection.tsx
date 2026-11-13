import React from 'react';
import sportsTeamCutout from '../../assets/sports-team-cutout.png';

const SportsHeroSection: React.FC = () => {
  return (
    <section
      id="sports-hero"
      aria-labelledby="sports-hero-heading"
      className="w-full bg-white pt-10 sm:pt-12 lg:pt-[56px]"
    >
      {/* Top Heading & Subtitle */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
        <div className="max-w-[678px] mx-auto">
          <h1
            id="sports-hero-heading"
            className="max-w-[554px] mx-auto font-extrabold text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.14] lg:leading-[54px] tracking-[-1.35px] text-[#073c96]"
          >
            Building Champions Beyond the Classroom.
          </h1>

          <p className="mt-4 lg:mt-[20px] text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#737373] max-w-[678px] mx-auto">
            Encouraging teamwork, discipline, and sportsmanship through exciting
            sporting experiences that help students stay active, build
            confidence, and discover their potential.
          </p>
        </div>
      </div>

      {/* Layered Team Cutout + Blue Football Quote Card */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:pl-[68px] xl:pr-[67px]">
        {/* Transparent cutout photo overlapping top edge of blue card (Figma HRMS 1: y=319..783) */}
        <div className="relative z-10 max-w-[1271px] mx-auto w-full aspect-[1271/464] overflow-hidden -mt-2 sm:-mt-3 lg:-mt-[17px] pointer-events-none select-none">
          <img
            src={sportsTeamCutout}
            alt="Sindhu Education Society football team athletes with coaches and trophy"
            className="absolute max-w-none left-[-0.71%] top-[-54.04%] w-[104.01%] h-[160.22%]"
          />
        </div>

        {/* Blue rounded quote banner (Figma Rectangle 186: y=680..1235, h=555, r=51) */}
        <div className="relative z-0 max-w-[1305px] mx-auto -mt-[44px] sm:-mt-[68px] lg:-mt-[86px] xl:-mt-[103px] rounded-[28px] sm:rounded-[38px] lg:rounded-[51px] bg-[#073c96] px-6 sm:px-10 lg:pl-[61px] lg:pr-[100px] xl:pr-[144px] pt-16 sm:pt-24 lg:pt-[122px] xl:pt-[142px] pb-10 sm:pb-14 lg:pb-[85px]">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-[39px]">
            {/* Decorative opening quotation mark matching Figma 33:1571 */}
            <div className="shrink-0" aria-hidden="true">
              <svg
                width="58"
                height="42"
                viewBox="0 0 58 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[44px] h-[32px] lg:w-[58px] lg:h-[42px]"
              >
                <g clipPath="url(#clip0_sports_quote)">
                  <path
                    d="M24.0463 3.76018C14.8422 6.25466 8.8519 11.4705 7.36225 20.5476C6.9567 23.0177 7.52311 21.1518 9.23705 19.899C14.8331 15.8087 25.8362 17.2563 27.3632 26.6012C30.4354 43.144 9.26198 46.0081 2.99526 36.8712C1.53733 34.7475 0.57217 32.2685 0.224397 29.5461C-1.28564 17.7056 4.92557 7.15993 15.8368 2.20639C17.8555 1.29005 19.9829 0.572911 22.2723 0.0472329C23.4187 -0.179639 24.2514 0.430148 24.6354 1.46048C24.9605 2.34029 25.0715 3.31086 24.0463 3.76018ZM54.3808 3.76018C45.1767 6.25466 39.1852 11.4705 37.6967 20.5476C37.2912 23.0177 37.8576 21.1518 39.5715 19.899C45.1676 15.8087 56.1706 17.2563 57.6965 26.6012C60.7698 43.144 39.5964 46.0081 33.3297 36.8712C31.8718 34.7475 30.9066 32.2685 30.5589 29.5461C29.0488 17.7056 35.2589 7.15993 46.1713 2.20639C48.1899 1.29005 50.3162 0.572911 52.6068 0.0472329C53.7532 -0.179639 54.5858 0.430148 54.9698 1.46048C55.2949 2.34029 55.406 3.31086 54.3808 3.76018Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#0049C4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_sports_quote">
                    <rect width="58" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Football program statement (Figma Frame 129: 24px/41px SemiBold Justified) */}
            <div className="flex-1 max-w-[1003px] text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.65] lg:leading-[41px] font-semibold text-white text-justify">
              <p>
                At Sindhu Education Society, we are committed to nurturing young
                football talent by providing top-tier training, modern
                facilities, and expert coaching. Our structured football
                programs help students develop skills, discipline, and teamwork.
              </p>
              <p>
                We collaborate with experienced coaches and sports academies to
                offer professional guidance. Our students participate in
                inter-school, district, and national-level football tournaments,
                gaining valuable exposure.
              </p>
              <p>
                With a strong focus on both fitness and strategy, we ensure that
                aspiring footballers receive the right platform to excel in the
                sport and build a promising future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsHeroSection;

