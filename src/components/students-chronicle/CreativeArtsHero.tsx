import React from 'react';
import creativeArtsHero from '../../assets/creative-arts-hero.png';

const CreativeArtsHero: React.FC = () => {
  return (
    <section
      id="creative-arts-hero"
      aria-labelledby="creative-arts-hero-heading"
      className="w-full bg-white lg:pt-[14px]"
    >
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[568px] overflow-hidden bg-[#171717]">
        {/* Background campus photo matching Figma Rectangle 167 crop */}
        <img
          src={creativeArtsHero}
          alt="Sindhu Education Society campus aerial view"
          className="absolute max-w-none w-full h-full object-cover object-top lg:object-fill lg:left-[-0.17%] lg:top-0 lg:w-[100.34%] lg:h-[115.14%]"
        />

        {/* Dark scrim matching Figma Rectangle 168 (#171717 @ 59%) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#171717]/[0.59]"
        />

        {/* Centered Hero Copy & CTA */}
        <div className="relative z-10 max-w-[1440px] mx-auto h-full px-4 sm:px-8 flex flex-col items-center justify-center lg:block lg:pt-[187px]">
          <div className="w-full max-w-[631px] mx-auto text-center">
            <h1
              id="creative-arts-hero-heading"
              className="font-extrabold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.12] lg:leading-[54px] tracking-[-1.35px] text-white"
            >
              Creative Arts &amp; Gallery
            </h1>

            <p className="mt-[20px] text-[15px] sm:text-[16px] leading-[24px] font-normal text-white max-w-[631px] mx-auto">
              Explore the experiences, achievements, celebrations, and
              unforgettable memories that make student life at Sindhu Education
              Society special.
            </p>

            <div className="mt-[32px] flex justify-center">
              <a
                href="#about"
                className="w-[111px] h-[40px] rounded-full bg-[#40c843] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#38b53b] transition-colors flex items-center justify-center text-[12px] leading-[16px] font-semibold tracking-[0.3px] text-white"
              >
                About us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeArtsHero;

