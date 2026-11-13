import React from "react";

const SesChroniclesBanner: React.FC = () => {
  return (
    <section
      id="life-at-ses"
      className="w-full bg-white pb-12 sm:pb-16 lg:pb-[109px] select-none"
    >
      <div className="max-w-[1305px] mx-auto px-4 xl:px-0">
        {/* Blue Rounded Quote Banner (Figma 33:1401: 1305 x 536, rounded:51px, #073c96) */}
        <div className="relative w-full lg:min-h-[536px] rounded-[28px] sm:rounded-[38px] lg:rounded-[51px] bg-[#073c96] px-6 sm:px-10 py-10 sm:py-14 lg:pt-[84px] lg:pb-[83px] lg:pl-[158px] lg:pr-[100px]">
          {/* Decorative Opening Quote Icon (Figma 33:1402: x:129->left:61, y:812->top:84, #0049c4) */}
          <svg
            className="w-[42px] h-[30px] lg:w-[58px] lg:h-[42px] mb-5 lg:mb-0 lg:absolute lg:left-[61px] lg:top-[84px] pointer-events-none shrink-0"
            viewBox="0 0 58 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M24.0463 3.76018C14.8422 6.25466 8.8519 11.4705 7.36225 20.5476C6.9567 23.0177 7.52311 21.1518 9.23705 19.899C14.8331 15.8087 25.8362 17.2563 27.3632 26.6012C30.4354 43.144 9.26198 46.0081 2.99526 36.8712C1.53733 34.7475 0.57217 32.2685 0.224397 29.5461C-1.28564 17.7056 4.92557 7.15993 15.8368 2.20639C17.8555 1.29005 19.9829 0.572911 22.2723 0.0472329C23.4187 -0.179639 24.2514 0.430148 24.6354 1.46048C24.9605 2.34029 25.0715 3.31086 24.0463 3.76018ZM54.3808 3.76018C45.1767 6.25466 39.1852 11.4705 37.6967 20.5476C37.2912 23.0177 37.8576 21.1518 39.5715 19.899C45.1676 15.8087 56.1706 17.2563 57.6965 26.6012C60.7698 43.144 39.5964 46.0081 33.3297 36.8712C31.8718 34.7475 30.9066 32.2685 30.5589 29.5461C29.0488 17.7056 35.2589 7.15993 46.1713 2.20639C48.1899 1.29005 50.3162 0.572911 52.6068 0.0472329C53.7532 -0.179639 54.5858 0.430148 54.9698 1.46048C55.2949 2.34029 55.406 3.31086 54.3808 3.76018Z"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#0049C4"
            />
          </svg>

          {/* Content Column (Figma 33:1404: x:226, y:812) */}
          <div className="w-full">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold leading-[1.2] lg:leading-[40px] text-white">
              SES Chronicles
            </h2>

            <div
              className="w-full max-w-[877px] h-[2px] bg-white mt-4 mb-5 lg:mt-[19px] lg:mb-[21px]"
              aria-hidden="true"
            />

            <p className="max-w-[969px] text-[17px] sm:text-[20px] lg:text-[24px] font-normal leading-[1.6] lg:leading-[41px] text-white">
              Welcome to the enchanting world of SES Chronicles, where every
              page is a treasure trove of tales that showcase the incredible
              academic and emotional growth of our students. From the very first
              day of Kindergarten to the bittersweet final moments of High School,
              these chronicles beautifully capture the remarkable journey.
              <br />
              As you delve deeper into the SES Chronicles, you&rsquo;ll witness
              the transformative power of our inclusive community. The stories
              within these pages showcase the diverse backgrounds, talents, and
              dreams of our students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SesChroniclesBanner;

