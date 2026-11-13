import React from "react";
import sscLogo from "../../assets/academics/ssc-board-logo.png";
import cbseLogo from "../../assets/academics/cbse-board-logo.png";

interface CurriculumBoardCard {
  id: string;
  title: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoClass: string;
  highlighted?: boolean;
  gapClass: string;
  descriptionMaxWClass?: string;
}

const CURRICULUM_BOARDS: CurriculumBoardCard[] = [
  {
    id: "ssc-curriculum",
    title: "S.S.C.",
    description:
      "The Secondary School Certificate (SSC) examination is also known as the 10th board exam. The SSC curriculum is well regarded for its relaxed nature. It encourages students to develop a strong foundation in their local language while also providing exposure to other languages. It aims to create steps free learning fostering creativity, critical thinking, and holistic development.",
    logo: sscLogo,
    logoAlt: "Maharashtra State Board of Secondary and Higher Secondary Education emblem",
    logoClass: "w-[132px] h-[133px] sm:w-[165px] sm:h-[166px]",
    highlighted: false,
    gapClass: "gap-[22px]",
  },
  {
    id: "cbse-curriculum",
    title: "C.B.S.E.",
    description:
      "The Central Board Of Secondary Education (CBSE) offers a well-structured curriculum and academic excellence. It emphasizes the development of critical thinking, problem-solving skills, and application-based learning, encouraging students to participate in extra-curricular activities, sports, and community service.",
    logo: cbseLogo,
    logoAlt: "Central Board of Secondary Education emblem",
    logoClass: "w-[132px] h-[143px] sm:w-[165px] sm:h-[179px]",
    highlighted: true,
    gapClass: "gap-[4px]",
    descriptionMaxWClass: "max-w-[555px]",
  },
];

const CurriculumsSection: React.FC = () => {
  return (
    <section
      id="curriculums"
      aria-labelledby="curriculums-heading"
      className="w-full bg-[#bfd8f8]/30 pt-12 sm:pt-16 lg:pt-[70px] pb-14 sm:pb-16 lg:pb-[91px] mb-8 lg:mb-[55px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[62px]">
        {/* Section Heading */}
        <div className="max-w-[672px] mx-auto flex flex-col items-center gap-[12px]">
          <h2
            id="curriculums-heading"
            className="font-bold text-[28px] sm:text-[34px] lg:text-[36px] leading-[40px] tracking-[0px] text-[#1b2a47] text-center uppercase"
          >
            CURRICULUMS
          </h2>
          <div
            aria-hidden="true"
            className="w-[64px] h-[4px] rounded-full bg-[#073c96]"
          />
        </div>

        {/* Two Board Comparison Cards */}
        <div className="mt-10 sm:mt-14 lg:mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] items-stretch">
          {CURRICULUM_BOARDS.map((board) => (
            <article
              key={board.id}
              id={board.id}
              className={`rounded-[24px] p-6 sm:p-[32px] flex flex-col ${board.gapClass} ${
                board.highlighted
                  ? "lg:mt-[3px] lg:min-h-[464px] bg-[#073c96] text-white"
                  : "lg:min-h-[467px] bg-white border border-[#e8f1ff] shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[#1b2a47]"
              }`}
            >
              <div className="shrink-0">
                <img
                  src={board.logo}
                  alt={board.logoAlt}
                  className={`${board.logoClass} object-contain`}
                />
              </div>

              <div className="flex flex-col gap-[8px] pb-4 sm:pb-[32px]">
                <h3
                  className={`font-extrabold text-[20px] leading-[28px] tracking-[0px] ${
                    board.highlighted ? "text-white" : "text-[#1b2a47]"
                  }`}
                >
                  {board.title}
                </h3>

                <p
                  className={`pt-[1px] font-medium text-[15px] sm:text-[16px] leading-[22px] tracking-[0px] ${
                    board.highlighted ? "text-white" : "text-[#475569]"
                  } ${board.descriptionMaxWClass || ""}`}
                >
                  {board.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumsSection;

