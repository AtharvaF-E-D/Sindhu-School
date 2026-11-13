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
      className="relative w-full bg-white pt-10 sm:pt-14 lg:pt-[99px] pb-10 sm:pb-14 lg:pb-0 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[54px]">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[44px] gap-10 sm:gap-12">
          {/* LEFT: Dual-Photo Composition (Figma 1:1418: 541 x 487) */}
          <div className="relative w-full max-w-[460px] sm:max-w-[541px] lg:w-[541px] lg:h-[487px] shrink-0 mx-auto lg:mx-0">
            {/* Base Photo (Figma 1:1419: 427 x 487, rounded:64px) */}
            <div className="relative w-[79%] sm:w-[427px] h-[340px] sm:h-[440px] lg:h-[487px] rounded-[42px] sm:rounded-[64px] overflow-hidden bg-white">
              <img
                src={schoolBuildingImg}
                alt="Khubchand Bajaj Central Public School campus facade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Inset Photo (Figma 1:1420: 244 x 291, rounded:43px, 13px white border) */}
            <div className="absolute right-0 lg:left-[297px] top-[20%] lg:top-[98px] w-[45%] sm:w-[244px] h-[210px] sm:h-[260px] lg:h-[291px] rounded-[32px] sm:rounded-[43px] overflow-hidden border-[8px] sm:border-[13px] border-white z-10 bg-white">
              <img
                src={culturalDanceImg}
                alt="Students performing cultural dance in front of Ganesha backdrop"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* RIGHT: Narrative & Vision Points (Figma 1:1421: w:747, h:398) */}
          <div className="flex flex-col justify-center w-full lg:w-[747px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0f172a] leading-[1.15] lg:leading-[40px]">
              Our Vision
            </h2>

            <div
              className="w-[160px] sm:w-[213px] h-[2px] bg-[#10b981] mt-[19px] mb-[21px]"
              aria-hidden="true"
            />

            <h3 className="max-w-[656px] text-[18px] lg:text-[20px] font-medium text-[#171717] leading-[24px] mb-[12px]">
              To become the leader in providing world-class education for all.
            </h3>

            <p className="max-w-[656px] text-[15px] lg:text-[16px] text-[#64748b] font-normal leading-[26px] mb-[18px]">
              We honour and foster the diversity of our community by working
              collaboratively for the educational success of our students and
              recognise that our obligations go beyond our professional
              responsibilities to promote democratic principles.
            </p>

            <ul className="space-y-2 lg:space-y-0">
              {visionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-[15px] lg:text-[16px] lg:tracking-[-0.014em] text-[#64748b] leading-[1.6] lg:leading-[31px]"
                >
                  <strong className="font-bold text-[#64748b]">
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
