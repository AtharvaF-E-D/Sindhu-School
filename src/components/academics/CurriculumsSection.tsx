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
}

const CURRICULUM_BOARDS: CurriculumBoardCard[] = [
  {
    id: "ssc-curriculum",
    title: "S.S.C.",
    description:
      "The Secondary School Certificate (SSC) examination is also known as the 10th board exam. The SSC curriculum is well regarded for its relaxed nature. It encourages students to develop a strong foundation in their local language while also providing exposure to other languages. It aims to create steps free learning fostering creativity, critical thinking, and holistic development.",
    logo: sscLogo,
    logoAlt: "Maharashtra State Board of Secondary and Higher Secondary Education emblem",
    logoClass: "w-[84px] h-[85px] sm:w-[120px] sm:h-[121px] lg:w-[165px] lg:h-[166px]",
    highlighted: false,
  },
  {
    id: "cbse-curriculum",
    title: "C.B.S.E.",
    description:
      "The Central Board Of Secondary Education (CBSE) offers a well-structured curriculum and academic excellence. It emphasizes the development of critical thinking, problem-solving skills, and application-based learning, encouraging students to participate in extra-curricular activities, sports, and community service.",
    logo: cbseLogo,
    logoAlt: "Central Board of Secondary Education emblem",
    logoClass: "w-[84px] h-[91px] sm:w-[120px] sm:h-[130px] lg:w-[165px] lg:h-[179px]",
    highlighted: true,
  },
];

const CurriculumsSection: React.FC = () => {
  return (
    <section
      id="curriculums"
      aria-labelledby="curriculums-heading"
      className="w-full bg-[#f0f6ff] pt-8 sm:pt-14 lg:pt-[70px] pb-14 sm:pb-16 lg:pb-[91px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[62px]">
        {/* Section Heading */}
        <div className="max-w-[672px] mx-auto flex flex-col items-center gap-2 sm:gap-[12px]">
          <h2
            id="curriculums-heading"
            className="font-bold text-[22px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] tracking-wide text-[#1b2a47] text-center uppercase"
          >
            CURRICULUMS
          </h2>
          <div
            aria-hidden="true"
            className="w-[52px] sm:w-[64px] h-[3.5px] sm:h-[4px] rounded-full bg-[#073c96]"
          />
        </div>

        {/* Two Board Comparison Cards */}
        <div className="mt-8 sm:mt-12 lg:mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] items-stretch max-w-[360px] sm:max-w-[480px] lg:max-w-none mx-auto">
          {CURRICULUM_BOARDS.map((board) => (
            <article
              key={board.id}
              id={board.id}
              className={`rounded-[28px] sm:rounded-[32px] p-6 sm:p-[32px] flex flex-col justify-between ${
                board.highlighted
                  ? "bg-[#073c96] text-white shadow-[0_8px_28px_rgba(7,60,150,0.18)] lg:mt-[3px] lg:min-h-[464px]"
                  : "bg-white text-[#1b2a47] shadow-[0_4px_24px_rgba(7,60,150,0.06)] border border-[#e8f1ff]/60 lg:min-h-[467px]"
              }`}
            >
              <div>
                <div className="shrink-0">
                  <img
                    src={board.logo}
                    alt={board.logoAlt}
                    className={`${board.logoClass} object-contain`}
                  />
                </div>

                <h3
                  className={`font-extrabold text-[19px] sm:text-[20px] leading-[28px] tracking-wider mt-4 sm:mt-5 ${
                    board.highlighted ? "text-white" : "text-[#1b2a47]"
                  }`}
                >
                  {board.title}
                </h3>

                <p
                  className={`mt-2.5 sm:mt-3 font-normal text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[21px] sm:leading-[23px] lg:leading-[24px] ${
                    board.highlighted ? "text-slate-100" : "text-[#475569]"
                  }`}
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

