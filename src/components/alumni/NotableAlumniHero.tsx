import React from 'react';
import notableHeroImg from '../../assets/alumni-notable-hero.png';

const NotableAlumniHero: React.FC = () => {
  return (
    <section
      id="notable-alumni-hero"
      aria-labelledby="notable-alumni-hero-heading"
      className="w-full bg-white lg:pt-[14px]"
    >
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[568px] overflow-hidden bg-[#171717]">
        {/* Background alumni assembly photo matching Figma 37:2813 */}
        <img
          src={notableHeroImg}
          alt="Sindhu Education Society alumni community gathering"
          className="w-full h-full object-cover object-center lg:object-fill lg:max-w-none lg:absolute lg:left-0 lg:top-[-34.5393%] lg:w-full lg:h-[169.0617%]"
        />

        {/* Dark scrim matching Figma 37:2814 (#171717 @ 59%) */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#171717]/[0.59]" />

        {/* Centered Headline & CTA (Figma 37:2815: top=187px relative to hero) */}
        <div className="relative z-10 max-w-[1440px] mx-auto h-full px-4 sm:px-8 flex flex-col items-center justify-center lg:block lg:pt-[187px]">
          <div className="w-full max-w-[631px] mx-auto text-center">
            <h1
              id="notable-alumni-hero-heading"
              className="font-extrabold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.12] lg:leading-[54px] tracking-[-1.35px] text-white"
            >
              Alumni Connect
            </h1>

            <div className="mt-[32px] flex justify-center">
              <a
                href="#alumni-connect"
                className="px-[28px] h-[40px] rounded-full bg-[#40c843] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-[#38b53b] transition-colors inline-flex items-center justify-center text-[12px] leading-[16px] font-semibold tracking-[0.3px] text-white"
              >
                Apply for Alumni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotableAlumniHero;

