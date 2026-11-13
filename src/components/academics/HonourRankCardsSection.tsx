import React from "react";
import poojaPatilImg from "../../assets/academics/honour-pooja-patil.png";
import sarrenaSheikhImg from "../../assets/academics/honour-sarrena-sheikh.png";
import honourTrophyImg from "../../assets/academics/honour-trophy.png";

interface HonourTopper {
  id: string;
  name: string;
  rank: string;
  school: string;
  photo: string;
}

const HONOUR_TOPPERS: HonourTopper[] = [
  {
    id: "pooja-patil",
    name: "Pooja Patil",
    rank: "1st Rank",
    school: "Mahatma Gandhi Centennial Sindhu English Primary High school",
    photo: poojaPatilImg,
  },
  {
    id: "sarrena-sheikh",
    name: "Sarrena Sheikh",
    rank: "2'nd Rank",
    school: "Mahatma Gandhi Centennial Sindhu English Primary High school",
    photo: sarrenaSheikhImg,
  },
];

const HonourRankCardsSection: React.FC = () => {
  return (
    <section
      id="roll-of-honour-toppers"
      aria-label="Top Academic Rank Holders"
      className="w-full bg-white pt-10 sm:pt-12 lg:pt-[43px] pb-12 sm:pb-16 lg:pb-[102px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[42px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-[20px]">
          {HONOUR_TOPPERS.map((student) => (
            <article
              key={student.id}
              id={student.id}
              className="w-full flex flex-col sm:flex-row items-stretch gap-3 sm:gap-[10px]"
            >
              {/* Student Portrait */}
              <div className="w-full sm:w-[220px] xl:w-[266px] h-[300px] sm:h-[385px] shrink-0 overflow-hidden rounded-[13px] sm:rounded-l-[13px] sm:rounded-r-none bg-slate-100">
                <img
                  src={student.photo}
                  alt={`${student.name} — ${student.rank}`}
                  className="w-full h-full object-cover object-top block"
                />
              </div>

              {/* Rank & Achievement Card Panel */}
              <div className="flex-1 sm:h-[385px] rounded-[13px] sm:rounded-l-none sm:rounded-r-[13px] bg-[#40c843]/15 pt-[29px] pr-6 xl:pr-[39px] pb-[33px] pl-6 xl:pl-[27px] flex flex-col items-start gap-[23px]">
                <img
                  src={honourTrophyImg}
                  alt="Academic excellence trophy"
                  className="w-[86px] h-[86px] object-contain shrink-0 block"
                />

                <span className="inline-flex items-center justify-center h-[40px] px-[28px] py-[12px] rounded-full bg-[#40c843] shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-white font-semibold text-[20px] leading-[16px] tracking-[0.3px] whitespace-nowrap">
                  {student.rank}
                </span>

                <div className="w-full max-w-[326px] flex flex-col gap-[18px]">
                  <div className="w-full max-w-[325px] flex flex-col gap-[19px]">
                    <h2 className="font-extrabold text-[26px] xl:text-[28px] leading-[40px] tracking-[0px] text-[#0f172a]">
                      {student.name}
                    </h2>
                    <div
                      aria-hidden="true"
                      className="w-full h-[2px] bg-[#10b981]"
                    />
                  </div>

                  <p className="font-normal text-[17px] xl:text-[18px] leading-[28px] tracking-[0px] text-[#64748b]">
                    {student.school}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonourRankCardsSection;

