import React from "react";
import methodologyBg from "../../assets/methodology-bg.png";
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
        <br />
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
    id: "student-centered-learning",
    title: "Student-Centered Learning",
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
    id: "future-ready-skills",
    title: "Future-Ready Skills",
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
      {/* Fixed 1440px x 1337px Stage on Desktop (matches Figma Desktop - 1 pixel-for-pixel) */}
      <div className="max-w-[1440px] mx-auto relative xl:h-[1337px] px-4 sm:px-6 xl:px-0 py-14 sm:py-16 xl:py-0">
        {/* Background Doodles Canvas (exact 1440 x 1337 placement) */}
        <img
          src={methodologyBg}
          alt=""
          aria-hidden="true"
          className="hidden xl:block absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
        />

        {/* Section Heading (Figma 1:747: top:78px, centered, 36px/40px ExtraBold) */}
        <h2 className="relative z-10 text-center text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[40px] text-white mb-10 xl:mb-0 xl:pt-[78px]">
          Our Unique Methodology
        </h2>

        {/* Cards Layout: Responsive 2-col grid below 1280px, Exact Staggered Stage on xl: */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 xl:block">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-[#f1f7ff] rounded-[40px] sm:rounded-[52px] xl:rounded-[64px] shadow-[0_20px_50px_rgba(3,20,60,0.2)] px-8 sm:px-12 pb-10 xl:pb-0 xl:px-0 ${
                index === 1 ? "xl:pl-[64px] xl:pr-[62px]" : index === 3 ? "xl:pl-[68px] xl:pr-[68px]" : "xl:pl-[69px] xl:pr-[66px]"
              } ${card.positionClass}`}
            >
              <div className={card.iconPadClass}>
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-[67px] h-[67px] object-contain"
                />
              </div>

              <h3
                className={`${card.titleGapClass} text-[21px] sm:text-[24px] font-extrabold leading-[1.3] xl:leading-[40px] text-[#0f172a]`}
              >
                {card.title}
              </h3>

              <p
                className={`${
                  index === 0 ? "mt-[10px]" : "mt-[14px]"
                } ${card.descWidthClass} text-[16px] sm:text-[18px] font-medium leading-[1.5] xl:leading-[27px] text-[#073c96]`}
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
