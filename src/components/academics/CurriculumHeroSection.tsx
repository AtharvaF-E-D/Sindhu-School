import React from "react";
import heroSchoolBuilding from "../../assets/academics/hero-school-building.png";
import heroStudentsTrophy from "../../assets/academics/hero-students-trophy.png";

const CurriculumHeroSection: React.FC = () => {
  return (
    <section
      id="our-curriculum-hero"
      aria-labelledby="our-curriculum-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-[102px] pt-4 sm:pt-8 lg:pt-[80px] pb-10 sm:pb-14 lg:pb-[89px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-[48px]">
          {/* Top on Mobile / Right on Desktop Overlapping Photo Collage (Desktop exact 549x333) */}
          <div className="order-1 lg:order-2 relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[549px] aspect-[549/333] shrink-0 mx-auto lg:mx-0">
            <div className="absolute right-0 top-0 w-[88.89%] h-[99.7%] rounded-[24px] sm:rounded-[35px] overflow-hidden bg-slate-100 shadow-xs">
              <img
                src={heroSchoolBuilding}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute left-0 bottom-0 w-[41.71%] h-[51.05%] pointer-events-none select-none drop-shadow-md">
              <img
                src={heroStudentsTrophy}
                alt="Students celebrating achievement with trophy and educators"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom on Mobile / Left on Desktop Copy & CTA */}
          <div className="order-2 lg:order-1 w-full lg:w-[634px] shrink-0 lg:pt-[6px]">
            <h1
              id="our-curriculum-heading"
              className="font-semibold sm:font-bold lg:font-extrabold text-[24px] sm:text-[36px] xl:text-[48px] leading-[1.2] xl:leading-[54px] tracking-normal lg:tracking-[-1.35px] text-[#1e2432] mt-2 sm:mt-4 lg:mt-0"
            >
              Our Curriculum
            </h1>

            <p className="mt-3 sm:mt-4 lg:mt-[20px] text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[21px] sm:leading-[24px] font-normal text-[#64748b] max-w-[634px]">
              A thoughtfully designed learning journey that builds knowledge,
              nurtures creativity, and develops essential skills to prepare every
              student for a successful future.
            </p>

            <div className="mt-4 sm:mt-6 lg:mt-[32px]">
              <a
                href="#schools-curriculum"
                className="inline-flex items-center justify-center min-w-[130px] sm:min-w-[150px] h-[36px] sm:h-[40px] px-5 sm:px-[28px] rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-[12px] leading-[16px] font-semibold tracking-[0.3px] shadow-xs transition-colors"
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

export default CurriculumHeroSection;

