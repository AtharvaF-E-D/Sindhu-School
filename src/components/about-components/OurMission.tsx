import React from "react";
import schoolBuildingImg from "../../assets/home-khubchand.png";
import missionPodiumImg from "../../assets/about-mission-podium.png";

interface MissionPoint {
  title: string;
  description: string;
}

const missionPoints: MissionPoint[] = [
  {
    title: "Quality Learning",
    description: "Delivering meaningful and effective education.",
  },
  {
    title: "Student Empowerment",
    description: "Building confidence, skills, and independence.",
  },
  {
    title: "Inclusive Environment",
    description: "Respecting diversity and equal opportunities.",
  },
  {
    title: "Care & Compassion",
    description: "Prioritising safety, wellbeing, and mutual respect.",
  },
  {
    title: "Community Partnership",
    description: "Building strong relationships with families and communities.",
  },
  {
    title: "Lifelong Growth",
    description: "Encouraging continuous learning and personal development.",
  },
];

const OurMission: React.FC = () => {
  return (
    <section
      id="our-mission"
      className="relative w-full bg-white pt-2 sm:pt-8 lg:pt-[90px] pb-8 sm:pb-16 lg:pb-[129px] select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-[54px] lg:pr-[93px]">
        {/* On mobile (< lg): Photo on top, text below (flex-col-reverse lg:flex-row) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-[2px] gap-6 sm:gap-10">
          {/* Narrative & Mission Points */}
          <div className="flex flex-col justify-center w-full lg:w-[747px] text-left">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#0f172a] leading-tight lg:leading-[40px]">
              Our Mission
            </h2>

            <div
              className="w-[130px] sm:w-[180px] lg:w-[213px] h-[2.5px] bg-[#10b981] mt-2 mb-3.5 sm:mt-[19px] sm:mb-[21px]"
              aria-hidden="true"
            />

            <h3 className="max-w-[656px] text-[13.5px] xs:text-[14px] sm:text-[18px] lg:text-[20px] font-bold text-[#1e293b] leading-[19px] sm:leading-[24px] mb-2 sm:mb-[12px]">
              We provide and support the highest quality education for the
              community of children and adult learners.
            </h3>

            <p className="max-w-[656px] text-[10.5px] xs:text-[11px] sm:text-[14px] lg:text-[16px] text-[#64748b] font-normal leading-[16px] sm:leading-[24px] lg:leading-[26px] mb-3 sm:mb-[18px]">
              We are committed to building positive relationships through
              compassion which enhance the self-esteem, safety, and wellbeing of
              our students, families, and staff.
            </p>

            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-0">
              {missionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-[10.5px] xs:text-[11px] sm:text-[14px] lg:text-[16px] text-[#64748b] leading-[16px] sm:leading-[24px] lg:leading-[31px]"
                >
                  <strong className="font-bold text-[#475569]">
                    {point.title}
                  </strong>{" "}
                  <span>– {point.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mirrored Dual-Photo Composition */}
          <div className="relative w-full max-w-[325px] xs:max-w-[345px] sm:max-w-[480px] lg:max-w-[544px] lg:w-[544px] h-[285px] xs:h-[310px] sm:h-[420px] lg:h-[487px] shrink-0 mx-auto lg:mx-0 flex justify-end mt-2 mb-4 sm:my-8 lg:my-0">
            {/* Base Photo: Arch shaped top on mobile */}
            <div className="relative w-[70%] sm:w-[76%] lg:w-[427px] h-[270px] xs:h-[295px] sm:h-[400px] lg:h-[487px] rounded-t-[72px] sm:rounded-t-[90px] lg:rounded-t-[64px] rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[64px] overflow-hidden bg-white shadow-md">
              <img
                src={schoolBuildingImg}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Inset Photo (Figma 1:1441: 244 x 294) - Podium kids on left */}
            <div className="absolute left-0 top-[26%] sm:top-[22%] lg:top-[96px] w-[50%] sm:w-[46%] lg:w-[244px] h-[145px] xs:h-[155px] sm:h-[230px] lg:h-[294px] rounded-[24px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden border-[6px] sm:border-[10px] lg:border-[13px] border-white shadow-xl z-10 bg-white">
              <img
                src={missionPodiumImg}
                alt="Students on sports achievement podium holding trophies with their teacher"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
