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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-[102px] pt-10 sm:pt-14 lg:pt-[80px] pb-12 sm:pb-16 lg:pb-[89px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-[48px]">
          {/* Left Copy & CTA */}
          <div className="w-full lg:w-[634px] shrink-0 lg:pt-[6px]">
            <h1
              id="our-curriculum-heading"
              className="font-extrabold text-[36px] sm:text-[44px] xl:text-[48px] leading-[1.12] xl:leading-[54px] tracking-[-1.35px] text-[#1e2432]"
            >
              Our Curriculum
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

          {/* Right Overlapping Photo Collage (Desktop exact 549x333) */}
          <div className="relative w-full max-w-[549px] mx-auto lg:mx-0 lg:w-[549px] aspect-[549/333] shrink-0">
            <div className="absolute right-0 top-0 w-[88.89%] h-[99.7%] rounded-[24px] sm:rounded-[35px] overflow-hidden bg-slate-100">
              <img
                src={heroSchoolBuilding}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute left-0 bottom-0 w-[41.71%] h-[51.05%] pointer-events-none select-none">
              <img
                src={heroStudentsTrophy}
                alt="Students celebrating achievement with trophy and educators"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumHeroSection;

