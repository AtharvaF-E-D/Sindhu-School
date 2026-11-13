import React from "react";
import heroQuadrantGraphic from "../../assets/academics/hero-quadrant-graphic.png";

const ApproachHeroSection: React.FC = () => {
  return (
    <section
      id="our-approach-hero"
      aria-labelledby="our-approach-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:pl-[146px] xl:pr-[144px] pt-10 sm:pt-14 lg:pt-[62px] pb-12 sm:pb-16 lg:pb-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-[48px]">
          {/* Left Copy & CTA */}
          <div className="w-full lg:w-[634px] shrink-0 lg:pt-[110px]">
            <h1
              id="our-approach-heading"
              className="font-extrabold text-[36px] sm:text-[44px] xl:text-[48px] leading-[1.12] xl:leading-[54px] tracking-[-1.35px] text-[#1e2432]"
            >
              Our Approach
            </h1>

            <p className="mt-[20px] text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#6b7280] max-w-[634px]">
              A thoughtfully designed learning journey that builds knowledge,
              nurtures creativity, and develops essential skills to prepare every
              student for a successful future.
            </p>

            <div className="mt-[32px]">
              <a
                href="#schools-curriculum"
                className="inline-flex items-center justify-center min-w-[150px] h-[40px] px-[28px] rounded-full bg-[#40c843] hover:bg-[#36b339] text-white text-[12px] leading-[16px] font-semibold tracking-[0.3px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
              >
                See Our School
              </a>
            </div>
          </div>

          {/* Right Multi-Segment 4-Quadrant Circular Graphic (351x351 base frame with Figma overflow bounds) */}
          <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 lg:w-[351px] lg:h-[351px] shrink-0 select-none">
            <img
              src={heroQuadrantGraphic}
              alt="Sindhu Education Society learning stages and campus collage"
              className="w-full h-auto lg:absolute lg:top-0 lg:-left-[36.5px] lg:w-[407.5px] lg:h-[388.5px] lg:max-w-none object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachHeroSection;

