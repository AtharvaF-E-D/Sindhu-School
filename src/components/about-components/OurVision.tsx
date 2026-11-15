import React from "react";
import schoolBuildingImg from "../../assets/home-khubchand.png";
import culturalDanceImg from "../../assets/vision-cultural-dance.png";

interface VisionPoint {
  title: string;
  description: string;
}

const visionPoints: VisionPoint[] = [
  {
    title: "Excellence in Education",
    description: "Promote high academic standards and lifelong learning.",
  },
  {
    title: "Inclusive Learning",
    description:
      "Ensure equal educational opportunities for students from diverse backgrounds.",
  },
  {
    title: "Holistic Development",
    description:
      "Nurture intellectual, social, emotional, and ethical growth.",
  },
  {
    title: "Innovation & Creativity",
    description:
      "Encourage critical thinking, innovation, and problem-solving.",
  },
  {
    title: "Strong Values",
    description: "Build responsible, confident, and compassionate individuals.",
  },
  {
    title: "Community Empowerment",
    description: "Work together to create a positive impact on society.",
  },
];

const OurVision: React.FC = () => {
  return (
    <section
      id="our-vision"
      className="relative w-full bg-white pt-2 sm:pt-8 lg:pt-[99px] pb-4 sm:pb-8 lg:pb-0 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[54px]">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[44px] gap-6 sm:gap-10">
          {/* LEFT: Dual-Photo Composition */}
          <div className="relative w-full max-w-[325px] xs:max-w-[345px] sm:max-w-[480px] lg:max-w-[541px] lg:w-[541px] h-[285px] xs:h-[310px] sm:h-[420px] lg:h-[487px] shrink-0 mx-auto lg:mx-0">
            {/* Base Photo: Arch shaped top on mobile */}
            <div className="relative w-[70%] sm:w-[76%] lg:w-[427px] h-[270px] xs:h-[295px] sm:h-[400px] lg:h-[487px] rounded-t-[72px] sm:rounded-t-[90px] lg:rounded-t-[64px] rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[64px] overflow-hidden bg-white shadow-md">
              <img
                src={schoolBuildingImg}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Inset Photo: Overlapping right side */}
            <div className="absolute right-0 top-[26%] sm:top-[22%] lg:top-[98px] lg:left-[297px] w-[50%] sm:w-[46%] lg:w-[244px] h-[145px] xs:h-[155px] sm:h-[230px] lg:h-[291px] rounded-[24px] sm:rounded-[36px] lg:rounded-[43px] overflow-hidden border-[6px] sm:border-[10px] lg:border-[13px] border-white shadow-xl z-10 bg-white">
              <img
                src={culturalDanceImg}
                alt="Students performing cultural dance in front of Ganesha backdrop"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: Narrative & Vision Points (Figma 1:1421: w:747, h:398) */}
          <div className="flex flex-col justify-center w-full lg:w-[747px] text-left">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-[#0f172a] leading-tight lg:leading-[40px]">
              Our Vision
            </h2>

            <div
              className="w-[130px] sm:w-[180px] lg:w-[213px] h-[2.5px] bg-[#10b981] mt-2 mb-3.5 sm:mt-[19px] sm:mb-[21px]"
              aria-hidden="true"
            />

            <h3 className="max-w-[656px] text-[13.5px] xs:text-[14px] sm:text-[18px] lg:text-[20px] font-bold text-[#1e293b] leading-[19px] sm:leading-[24px] mb-2 sm:mb-[12px]">
              To become the leader in providing world-class education for all.
            </h3>

            <p className="max-w-[656px] text-[10.5px] xs:text-[11px] sm:text-[14px] lg:text-[16px] text-[#64748b] font-normal leading-[16px] sm:leading-[24px] lg:leading-[26px] mb-3 sm:mb-[18px]">
              We honour and foster the diversity of our community by working
              collaboratively for the educational success of our students and
              recognise that our obligations go beyond our professional
              responsibilities to promote democratic principles.
            </p>

            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-0">
              {visionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-[10.5px] xs:text-[11px] sm:text-[14px] lg:text-[16px] lg:tracking-[-0.014em] text-[#64748b] leading-[16px] sm:leading-[24px] lg:leading-[31px]"
                >
                  <strong className="font-bold text-[#475569]">
                    {point.title}:
                  </strong>{" "}
                  <span>{point.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
