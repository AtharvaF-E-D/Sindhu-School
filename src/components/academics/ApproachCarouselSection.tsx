import React, { useState } from "react";
import carouselStudentCenteredImg from "../../assets/academics/carousel-student-centered.png";
import stageSanctuaryImg from "../../assets/academics/stage-sanctuary.png";
import stagePrimaryMiddleImg from "../../assets/academics/stage-primary-middle.png";

interface ApproachSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const APPROACH_SLIDES: ApproachSlide[] = [
  {
    id: "student-centered",
    title: "Student-Centered Approach",
    description:
      "Our learner-centric methodologies focus on activity-based hands-on experimental learning. We blend established learning theories with innovative ideas and programs, enhancing learning outcomes and allowing every child to unlock his full potential.",
    image: carouselStudentCenteredImg,
    imageAlt: "Students receiving an award with an educator on campus",
  },
  {
    id: "experiential-learning",
    title: "Activity-Based Experiential Learning",
    description:
      "Classrooms extend beyond textbooks through group activities, sports, and practical demonstrations that nurture curiosity, foundational problem-solving, and collaborative spirit from early childhood onward.",
    image: stageSanctuaryImg,
    imageAlt: "Young learners participating in guided outdoor sports activities",
  },
  {
    id: "holistic-mentorship",
    title: "Holistic Growth & Value Foundation",
    description:
      "Dedicated educators mentor every learner across academics, athletics, cultural expression, and ethical values, empowering confident students to break boundaries and excel in every sphere.",
    image: stagePrimaryMiddleImg,
    imageAlt: "Primary and middle school students training in athletics with a coach",
  },
];

const ApproachCarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = APPROACH_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + APPROACH_SLIDES.length) % APPROACH_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % APPROACH_SLIDES.length);
  };

  return (
    <section
      id="student-centered-approach"
      aria-labelledby="carousel-approach-heading"
      className="w-full bg-white pt-12 sm:pt-16 lg:pt-[107px] pb-14 sm:pb-20 lg:pb-[95px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[84px] lg:pr-[75px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-[51px]">
          {/* Left Image Carousel + Dots */}
          <div className="w-full max-w-[637px] mx-auto lg:mx-0 lg:w-[637px] shrink-0">
            <div className="relative w-full aspect-[637/428] lg:h-[428px]">
              <div className="w-full h-full rounded-[24px] sm:rounded-[34px] overflow-hidden bg-slate-100">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.imageAlt}
                  className="w-full h-full object-cover block"
                />
              </div>

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous highlight"
                className="absolute left-2 sm:-left-[25px] top-1/2 -translate-y-1/2 w-[43px] h-[42px] rounded-[22px] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.12)] hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12.5 15.833L7.06667 10.4C6.425 9.75833 6.425 8.70833 7.06667 8.06667L12.5 2.63333"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next highlight"
                className="absolute right-2 sm:-right-[26px] top-1/2 -translate-y-1/2 w-[43px] h-[42px] rounded-[22px] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.12)] hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7.425 16.6L12.8583 11.1667C13.5 10.525 13.5 9.475 12.8583 8.83333L7.425 3.4"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Carousel Pagination Squares */}
            <div
              className="mt-[20px] flex items-center justify-center gap-[12px]"
              role="tablist"
              aria-label="Approach highlights"
            >
              {APPROACH_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${slide.title}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-[8px] h-[8px] transition-colors cursor-pointer ${
                      isActive ? "bg-[#71e674]" : "bg-[#e9e9e9] hover:bg-slate-300"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Highlight Copy */}
          <div className="w-full lg:w-[557px] lg:pt-[100px] flex flex-col gap-[21px]">
            <div className="flex flex-col gap-[19px]">
              <h2
                id="carousel-approach-heading"
                className="font-extrabold text-[26px] sm:text-[30px] lg:text-[32px] leading-[1.25] lg:leading-[40px] tracking-[0px] text-[#0f172a]"
              >
                {currentSlide.title}
              </h2>
              <div
                aria-hidden="true"
                className="w-full h-[2px] bg-[#10b981]"
              />
            </div>

            <p className="font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] tracking-[0px] text-[#64748b]">
              {currentSlide.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachCarouselSection;

