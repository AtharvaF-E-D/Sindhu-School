import React from "react";
import heroQuadrantGraphic from "../../assets/academics/hero-quadrant-graphic.png";

const ApproachHeroSection: React.FC = () => {
  return (
    <section
      id="our-approach-hero"
      aria-labelledby="our-approach-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:pl-[146px] xl:pr-[144px] pt-4 sm:pt-8 lg:pt-[62px] pb-12 sm:pb-16 lg:pb-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-[48px]">
          {/* Top Graphic on mobile, Right Multi-Segment 4-Quadrant Circular Graphic on desktop */}
          <div className="order-1 lg:order-2 relative w-full max-w-[320px] sm:max-w-[350px] mx-auto lg:mx-0 lg:w-[351px] lg:h-[351px] shrink-0 select-none">
            <img
              src={heroQuadrantGraphic}
              alt="Sindhu Education Society learning stages and campus collage"
              className="w-full h-auto lg:absolute lg:top-0 lg:-left-[36.5px] lg:w-[407.5px] lg:h-[388.5px] lg:max-w-none object-contain pointer-events-none"
            />
          </div>

          {/* Bottom Copy & CTA on mobile, Left Copy & CTA on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-[634px] shrink-0 lg:pt-[110px]">
            <h1
              id="our-approach-heading"
              className="font-semibold sm:font-bold lg:font-extrabold text-[24px] sm:text-[32px] xl:text-[48px] leading-[1.2] xl:leading-[54px] tracking-normal lg:tracking-[-1.35px] text-[#1e2432]"
            >
              Our Approach
            </h1>

            <p className="mt-3 sm:mt-4 lg:mt-[20px] text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[21px] sm:leading-[24px] font-normal text-[#64748b] max-w-[634px]">
              A thoughtfully designed learning journey that builds knowledge,
              nurtures creativity, and develops essential skills to prepare every
              student for a successful future.
            </p>

            <div className="mt-4 sm:mt-6 lg:mt-[32px]">
              <a
                href="#schools-curriculum"
                className="inline-flex items-center justify-center min-w-[130px] sm:min-w-[150px] h-[36px] sm:h-[40px] px-5 sm:px-[28px] rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-[12px] leading-[16px] font-medium tracking-[0.2px] shadow-sm transition-colors"
              >
                See Our School
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachHeroSection;

