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
      className="relative w-full bg-white pt-10 sm:pt-14 lg:pt-[90px] pb-14 sm:pb-20 lg:pb-[129px] select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-[54px] lg:pr-[93px]">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[2px] gap-10 sm:gap-12">
          {/* LEFT: Narrative & Mission Points (Figma 1:1430: w:747, h:396) */}
          <div className="flex flex-col justify-center w-full lg:w-[747px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0f172a] leading-[1.15] lg:leading-[40px]">
              Our Mission
            </h2>

            <div
              className="w-[160px] sm:w-[213px] h-[2px] bg-[#10b981] mt-[19px] mb-[21px]"
              aria-hidden="true"
            />

            <h3 className="max-w-[656px] text-[18px] lg:text-[20px] font-medium text-[#171717] leading-[24px] mb-[12px]">
              We provide and support the highest quality education for the
              community of children and adult learners.
            </h3>

            <p className="max-w-[656px] text-[15px] lg:text-[16px] text-[#64748b] font-normal leading-[26px] mb-[18px]">
              We are committed to building positive relationships through
              compassion which enhance the self-esteem, safety, and wellbeing of
              our students, families, and staff.
            </p>

            <ul className="space-y-2 lg:space-y-0">
              {missionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-[15px] lg:text-[16px] text-[#64748b] leading-[1.6] lg:leading-[31px]"
                >
                  <strong className="font-bold text-[#64748b]">
                    {point.title}
                  </strong>{" "}
                  <span>– {point.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Mirrored Dual-Photo Composition (Figma 1:1439: 544 x 487) */}
          <div className="relative w-full max-w-[460px] sm:max-w-[544px] lg:w-[544px] lg:h-[487px] shrink-0 mx-auto lg:mx-0 flex justify-end">
            {/* Base Photo (Figma 1:1440: 427 x 487, rounded:64px) */}
            <div className="relative w-[79%] sm:w-[427px] h-[340px] sm:h-[440px] lg:h-[487px] rounded-[42px] sm:rounded-[64px] overflow-hidden bg-white">
              <img
                src={schoolBuildingImg}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Inset Photo (Figma 1:1441: 244 x 294, rounded:64px, 13px white border) */}
            <div className="absolute left-0 top-[20%] lg:top-[96px] w-[45%] sm:w-[244px] h-[210px] sm:h-[264px] lg:h-[294px] rounded-[42px] sm:rounded-[64px] overflow-hidden border-[8px] sm:border-[13px] border-white z-10 bg-white">
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
