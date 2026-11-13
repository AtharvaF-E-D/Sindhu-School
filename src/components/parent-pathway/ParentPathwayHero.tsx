import React from 'react';
import meetingDeskImg from '../../assets/parent-pathway-meeting-desk.png';
import kidProtectImg from '../../assets/parent-pathway-kid-protect.png';

const ParentPathwayHero: React.FC = () => {
  return (
    <section
      id="parent-pathway-hero"
      aria-labelledby="parent-pathway-hero-heading"
      className="w-full bg-white overflow-x-clip"
    >
      <div className="max-w-[1440px] mx-auto relative px-4 sm:px-8 lg:px-12 pt-10 pb-12 xl:px-0 xl:pt-0 xl:pb-0 xl:h-[713px]">
        {/* Left Column: Copy & CTAs (Figma 37:2125: x=122, y=228 -> 124px below header) */}
        <div className="w-full max-w-[601px] mx-auto xl:mx-0 xl:max-w-[723px] xl:pl-[122px] xl:pt-[124px] text-center xl:text-left">
          <p className="pt-[8px] text-[14px] sm:text-[15px] leading-[24px] font-normal text-[#737373] max-w-[518px] mx-auto xl:mx-0">
            WELCOME TO THE PARENT PATHWAY
          </p>

          <h1
            id="parent-pathway-hero-heading"
            className="mt-[10px] max-w-[480px] mx-auto xl:mx-0 text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.12] lg:leading-[54px] font-extrabold tracking-[-1.35px] text-[#073c96]"
          >
            Together, We Make Learning Better.
          </h1>

          <p className="mt-[18px] max-w-[552px] mx-auto xl:mx-0 text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#737373]">
            At Sindhu Education Society, we believe parents are essential partners
            in every child&apos;s growth. Through open communication, active
            participation, and continuous support, we create a positive environment
            where every student can thrive.
          </p>

          <div className="mt-[30px] flex justify-center xl:justify-start">
            <a
              href="#about"
              className="w-[111px] h-[40px] rounded-full bg-[#40c843] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#38b53b] transition-colors flex items-center justify-center text-[12px] leading-[16px] font-semibold tracking-[0.3px] text-white"
            >
              About us
            </a>
          </div>
        </div>

        {/* Right Collage Column (Figma 37:2141: origin x=801, y=163 -> top=59px, width=507, height=520) */}
        <div className="mt-10 xl:mt-0 xl:absolute xl:left-[801px] xl:top-[59px] w-full max-w-[507px] mx-auto xl:mx-0 aspect-[507/520] xl:w-[507px] xl:h-[520px] relative">
          {/* Decorative Soft Lilac Dot: Top Right (37:2142) */}
          <div
            aria-hidden="true"
            className="absolute left-[83.04%] top-[9.23%] w-[2.76%] aspect-square rounded-full bg-[#c8c2ee]"
          />

          {/* Card 2: Top Right - Lavender Card (37:2143: 232x250 at 275,65) */}
          <div className="absolute left-[54.24%] top-[12.5%] w-[45.76%] h-[48.08%] rounded-[24px] sm:rounded-[36px] bg-[#c3baf0] shadow-[0_4px_6px_-4px_#eef2ff,0_10px_15px_-3px_#eef2ff] overflow-hidden">
            <img
              src={meetingDeskImg}
              alt="Parent reviewing student progress materials with faculty at desk"
              className="absolute max-w-none left-[-126.29%] top-[-60.8%] w-[278.02%] h-[193.6%]"
            />
          </div>

          {/* Decorative Sparkle: Left of Blue Card (37:2146: 24x24 at 0,12) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-0 top-[2.31%] w-[4.73%] aspect-square"
          >
            <path
              d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0V0"
              fill="#A5D0B2"
            />
          </svg>

          {/* Decorative Sparkle: Center Right (37:2148: 20x20 at 325,306) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="absolute left-[64.10%] top-[58.85%] w-[3.94%] aspect-square"
          >
            <path
              d="M10 0C10 5.5225 5.5225 10 0 10C5.5225 10 10 14.4775 10 20C10 14.4775 14.4775 10 20 10C14.4775 10 10 5.5225 10 0V0"
              fill="#A2C7AD"
            />
          </svg>

          {/* Card 1: Top Left - Sky Blue Card (37:2151: 238x260 at 20,20) */}
          <div className="absolute left-[3.94%] top-[3.85%] w-[46.94%] h-[50%] rounded-[24px] sm:rounded-[36px] bg-[#97cce6] shadow-[0_4px_6px_-4px_#e0f2fe,0_10px_15px_-3px_#e0f2fe] overflow-hidden">
            <img
              src={meetingDeskImg}
              alt="Teacher engaging with parents during classroom consultation"
              className="absolute max-w-none left-[-39.5%] top-[-55.77%] w-[308.4%] h-[211.54%]"
            />
          </div>

          {/* Arrow Feature Badge (37:2154: 48x48 at 227,10) */}
          <a
            href="#kids-protect"
            aria-label="Explore Kids Protect App features"
            className="absolute left-[44.77%] top-[1.92%] w-[9.47%] aspect-square rounded-full bg-[#073c96] border-2 border-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#052e75] transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="w-[41.67%] h-[41.67%]"
            >
              <path
                d="M3.75 16.25L16.25 3.75M16.25 3.75H6.875M16.25 3.75V13.125"
                stroke="white"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Card 3: Bottom - Mint Kid Protect Card (37:2158: 270x200 at 6,305) */}
          <div className="absolute left-[1.18%] top-[58.65%] w-[53.25%] h-[38.46%] rounded-[24px] sm:rounded-[36px] bg-[#80b68c] shadow-[0_4px_6px_-4px_#ecfdf5,0_10px_15px_-3px_#ecfdf5] overflow-hidden">
            <img
              src={kidProtectImg}
              alt="Staff coordinating student safety updates on the Kid Protect system"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Pill Badge: Abstract Loops beside Bottom Card (37:2161: 74x38 at 233,286) */}
          <div
            aria-hidden="true"
            className="absolute left-[45.96%] top-[55%] w-[14.60%] h-[7.31%] rounded-full bg-[#40c843] border border-white/60 backdrop-blur-[8px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center"
          >
            <svg
              viewBox="0 0 40 20"
              fill="none"
              className="w-[54.05%] h-[52.63%]"
            >
              <path
                d="M5.1875 10.0012C5.1875 14.0894 7.5109 17.4086 10.3727 17.4086C13.2345 17.4086 15.5579 14.0894 15.5579 10.0012C15.5579 5.9129 13.2345 2.59375 10.3727 2.59375C7.5109 2.59375 5.1875 5.9129 5.1875 10.0012V10.0012"
                stroke="white"
                strokeWidth="1.48148"
              />
              <path
                d="M11.1094 10.0012C11.1094 14.0894 13.4328 17.4086 16.2946 17.4086C19.1563 17.4086 21.4797 14.0894 21.4797 10.0012C21.4797 5.9129 19.1563 2.59375 16.2946 2.59375C13.4328 2.59375 11.1094 5.9129 11.1094 10.0012V10.0012"
                stroke="white"
                strokeWidth="1.48148"
              />
              <path
                d="M17.0391 10.0012C17.0391 14.0894 19.3625 17.4086 22.2242 17.4086C25.086 17.4086 27.4094 14.0894 27.4094 10.0012C27.4094 5.9129 25.086 2.59375 22.2242 2.59375C19.3625 2.59375 17.0391 5.9129 17.0391 10.0012V10.0012"
                stroke="white"
                strokeWidth="1.48148"
              />
              <path
                d="M22.9609 10.0012C22.9609 14.0894 25.2843 17.4086 28.1461 17.4086C31.0079 17.4086 33.3313 14.0894 33.3313 10.0012C33.3313 5.9129 31.0079 2.59375 28.1461 2.59375C25.2843 2.59375 22.9609 5.9129 22.9609 10.0012V10.0012"
                stroke="white"
                strokeWidth="1.48148"
              />
            </svg>
          </div>

          {/* Decorative Soft Blue Dot: Bottom Right (37:2168: 16x16 at 270,455) */}
          <div
            aria-hidden="true"
            className="absolute left-[53.25%] top-[87.5%] w-[3.16%] aspect-square rounded-full bg-[#a8d3e6]"
          />
        </div>
      </div>
    </section>
  );
};

export default ParentPathwayHero;

