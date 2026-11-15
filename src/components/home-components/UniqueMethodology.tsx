import React from "react";
import methodologyBg from "../../assets/methodology-bg.png";
import methodologyBgMobile from "../../assets/methodology-bg-mobile.png";
import iconEdu from "../../assets/home-edu.png";
import iconLearning from "../../assets/home-learning.png";
import iconEarthCare from "../../assets/home-earthcare.png";
import iconSkills from "../../assets/home-skills.png";

interface MethodologyCard {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: string;
  positionClass: string;
  iconPadClass: string;
  titleGapClass: string;
  descWidthClass: string;
}

const cards: MethodologyCard[] = [
  {
    id: "educational-excellence",
    title: "Educational Excellence",
    description: (
      <>
        We uphold rigorous academic standards, employ highly qualified educators,
        and continuously innovate to ensure that every student receives a world-class
        education.
        <br className="hidden sm:block" />
        Our commitment to excellence is evident in our students&apos; outstanding
        achievements and successful academic journeys.
      </>
    ),
    icon: iconEdu,
    positionClass:
      "xl:absolute xl:left-[15.764%] xl:top-[198px] xl:w-[472px] xl:h-[438px]",
    iconPadClass: "pt-[33px]",
    titleGapClass: "mt-[1px]",
    descWidthClass: "max-w-[327px]",
  },
  {
    id: "global-perspective",
    title: "Global Perspective",
    description:
      "We prepare students for success in an interconnected world by incorporating international viewpoints, cultural awareness, and global citizenship into our curriculum. Our programs emphasize cross-cultural understanding and collaboration.",
    icon: iconEarthCare,
    positionClass:
      "xl:absolute xl:left-[15.764%] xl:top-[673px] xl:w-[472px] xl:h-[438px]",
    iconPadClass: "pt-[43px]",
    titleGapClass: "mt-[3px]",
    descWidthClass: "max-w-[337px]",
  },
  {
    id: "student-centered-learning",
    title: "Student–Centered Learning",
    description:
      "Our approach places students at the heart of the educational process, fostering critical thinking, creativity, and independent learning skills. We create personalized learning experiences that adapt to each student's unique needs and learning style.",
    icon: iconLearning,
    positionClass:
      "xl:absolute xl:left-[51.319%] xl:top-[274px] xl:w-[474px] xl:h-[438px]",
    iconPadClass: "pt-[50px]",
    titleGapClass: "mt-[9px]",
    descWidthClass: "max-w-[347px]",
  },
  {
    id: "future-ready-skills",
    title: "Future–Ready Skills",
    description:
      "Beyond traditional academics, we focus on developing essential skills for the future workplace. From digital literacy to problem-solving and adaptability, our students graduate ready to face tomorrow's challenges with confidence.",
    icon: iconSkills,
    positionClass:
      "xl:absolute xl:left-[51.319%] xl:top-[750px] xl:w-[474px] xl:h-[438px]",
    iconPadClass: "pt-[40px]",
    titleGapClass: "mt-[6px]",
    descWidthClass: "max-w-[337px]",
  },
];

const UniqueMethodology: React.FC = () => {
  return (
    <section
      id="methodology"
      className="relative w-full bg-[#073c96] overflow-hidden select-none"
      aria-label="Our Unique Methodology"
    >
      {/* Mobile Background Canvas: Uncompressed natural proportions matching mobile aspect ratio */}
      <img
        src={methodologyBgMobile}
        alt=""
        aria-hidden="true"
        className="xl:hidden absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* Desktop Background Canvas (exact 1440x1337 placement) */}
      <img
        src={methodologyBg}
        alt=""
        aria-hidden="true"
        className="hidden xl:block absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0 opacity-95"
      />

      {/* 1440px Stage on Desktop */}
      <div className="max-w-[1440px] mx-auto relative xl:h-[1337px] px-3 sm:px-6 xl:px-0 pt-7 pb-10 sm:py-16 xl:py-0">
        {/* Section Heading */}
        <h2 className="relative z-10 text-center text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold leading-[1.2] lg:leading-[40px] text-white mb-6 sm:mb-10 xl:mb-0 xl:pt-[78px]">
          Our Unique
          <br className="sm:hidden" /> Methodology
        </h2>

        {/* Cards Layout: Compact centered cards on mobile so side doodles remain completely visible */}
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:grid md:grid-cols-2 xl:block mx-auto w-full">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-[76%] min-w-[240px] max-w-[280px] sm:w-full sm:max-w-[380px] xl:max-w-none bg-[#f1f7ff] rounded-[26px] sm:rounded-[36px] xl:rounded-[64px] shadow-[0_14px_36px_rgba(3,20,60,0.22)] px-5 py-5 sm:px-8 sm:py-7 xl:pb-0 xl:px-0 ${
                index === 2
                  ? "xl:pl-[64px] xl:pr-[62px]"
                  : index === 3
                  ? "xl:pl-[68px] xl:pr-[68px]"
                  : "xl:pl-[69px] xl:pr-[66px]"
              } ${card.positionClass}`}
            >
              <div className={`xl:${card.iconPadClass} pt-0`}>
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] xl:w-[67px] xl:h-[67px] object-contain"
                />
              </div>

              <h3
                className={`${card.titleGapClass} text-[16px] sm:text-[20px] xl:text-[24px] font-bold leading-[1.25] xl:leading-[40px] text-[#0f172a] mt-2.5 xl:mt-0`}
              >
                {card.title}
              </h3>

              <p
                className={`${
                  index === 0 ? "mt-[5px] sm:mt-[8px]" : "mt-[6px] sm:mt-[10px]"
                } ${card.descWidthClass} text-[11.5px] sm:text-[14px] xl:text-[18px] font-medium leading-[17px] sm:leading-[22px] xl:leading-[27px] text-[#073c96]`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueMethodology;
