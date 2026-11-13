import React from "react";
import holisticFencing from "../../assets/legacy-leadership/holistic-fencing.png";
import facultyCeremony from "../../assets/legacy-leadership/faculty-ceremony.png";
import facilitiesComputerLab from "../../assets/legacy-leadership/facilities-computer-lab.png";

interface LegacyPillar {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPositionClass: string;
  photoSide: "left" | "right";
  tintBgClass: string;
  dividerColorClass: string;
  dividerMaxWidthClass: string;
  textWidthClass: string;
  textTopPaddingClass: string;
  rowSpacingClass: string;
}

const LEGACY_PILLARS: LegacyPillar[] = [
  {
    id: "holistic-education",
    title: "Holistic Education",
    description:
      "We believe in nurturing well-rounded individuals. Our curriculum goes beyond textbooks, focusing on character development, values, and practical skills.",
    image: holisticFencing,
    imageAlt: "Students practicing fencing in sports training session",
    objectPositionClass: "object-[100%_50%]",
    photoSide: "left",
    tintBgClass: "bg-[#f26b38]/20",
    dividerColorClass: "bg-[#dc4345]",
    dividerMaxWidthClass: "max-w-[373px]",
    textWidthClass: "min-[1400px]:max-w-[496px]",
    textTopPaddingClass: "min-[1400px]:pt-[135px]",
    rowSpacingClass: "",
  },
  {
    id: "experienced-faculty",
    title: "Experienced Faculty",
    description:
      "Our dedicated team of educators brings a wealth of experience and passion to the classroom. We prioritize quality teaching to ensure students receive the best education.",
    image: facultyCeremony,
    imageAlt:
      "Faculty members and students holding certificates and bouquets at an academic celebration",
    objectPositionClass: "object-[54%_50%]",
    photoSide: "right",
    tintBgClass: "bg-[#60a5fa]/20",
    dividerColorClass: "bg-[#60a5fa]",
    dividerMaxWidthClass: "max-w-[469px]",
    textWidthClass: "min-[1400px]:max-w-[469px]",
    textTopPaddingClass: "min-[1400px]:pt-[123px]",
    rowSpacingClass: "mt-12 lg:mt-20 min-[1400px]:mt-[90px]",
  },
  {
    id: "state-of-the-art-facilities",
    title: "State-of-the-Art Facilities",
    description:
      "We provide modern infrastructure and facilities that contribute to a conducive learning environment. From well-equipped classrooms to advanced laboratories, we invest in the overall development of our students.",
    image: facilitiesComputerLab,
    imageAlt:
      "Students learning at desktop workstations in a modern computer laboratory",
    objectPositionClass: "object-[50.5%_50%]",
    photoSide: "left",
    tintBgClass: "bg-[#bdcf20]/20",
    dividerColorClass: "bg-[#bdcf20]",
    dividerMaxWidthClass: "max-w-[516px]",
    textWidthClass: "min-[1400px]:max-w-[516px]",
    textTopPaddingClass: "min-[1400px]:pt-[123px]",
    rowSpacingClass: "mt-12 lg:mt-20 min-[1400px]:mt-[80px]",
  },
  {
    id: "focus-on-values",
    title: "Focus on Values",
    description:
      "Sindhu Education Society instills strong moral values and ethics in students. We believe in shaping responsible citizens who contribute positively to society.",
    image: facultyCeremony,
    imageAlt:
      "Students and educators honored on stage at a Sindhu Education Society ceremony",
    objectPositionClass: "object-[54%_50%]",
    photoSide: "right",
    tintBgClass: "bg-[#60a5fa]/20",
    dividerColorClass: "bg-[#60a5fa]",
    dividerMaxWidthClass: "max-w-[469px]",
    textWidthClass: "min-[1400px]:max-w-[469px]",
    textTopPaddingClass: "min-[1400px]:pt-[114px]",
    rowSpacingClass: "mt-12 lg:mt-20 min-[1400px]:mt-[90px]",
  },
];

const LegacyPillars: React.FC = () => {
  return (
    <section
      id="why-choose-ses"
      aria-label="Our Educational Pillars"
      className="scroll-mt-24 w-full bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 min-[1400px]:pt-[82px] min-[1400px]:pb-[96px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 min-[1400px]:pl-[112px] min-[1400px]:pr-[109px]">
        {LEGACY_PILLARS.map((pillar) => {
          const isPhotoLeft = pillar.photoSide === "left";

          return (
            <article
              key={pillar.id}
              className={`relative rounded-[24px] lg:rounded-none ${pillar.tintBgClass} lg:bg-transparent p-5 sm:p-7 lg:p-0 ${pillar.rowSpacingClass}`}
            >
              {/* Desktop Translucent Card Backdrop */}
              <div
                aria-hidden="true"
                className={`hidden lg:block absolute top-[20px] h-[calc(100%-40px)] min-[1400px]:h-[392px] rounded-[18px] ${
                  pillar.tintBgClass
                } ${
                  isPhotoLeft
                    ? "left-[14px] right-0 min-[1400px]:w-[1199px]"
                    : "left-0 right-[20px] min-[1400px]:w-[1199px]"
                }`}
              />

              {/* Foreground Flex Row */}
              <div
                className={`relative z-10 flex flex-col gap-6 sm:gap-8 lg:gap-0 min-[1400px]:min-h-[440px] ${
                  isPhotoLeft
                    ? "lg:flex-row lg:items-start"
                    : "lg:flex-row lg:items-start lg:justify-between"
                }`}
              >
                {/* Photo Block */}
                <div
                  className={`relative w-full lg:w-[440px] xl:w-[500px] min-[1400px]:w-[572px] shrink-0 h-[260px] sm:h-[360px] lg:h-[380px] min-[1400px]:h-[440px] ${
                    isPhotoLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Decorative Rotated Tint Layer */}
                  <div
                    aria-hidden="true"
                    className={`hidden lg:block absolute left-[-14px] min-[1400px]:left-[-21.41px] top-[-0.13px] w-[96.6%] h-full rounded-[50px] min-[1400px]:rounded-[60px] -rotate-[2.08deg] ${pillar.tintBgClass}`}
                  />

                  {/* White-Bordered Rounded Photo Card */}
                  <div className="relative z-10 w-full h-full rounded-[28px] sm:rounded-[40px] min-[1400px]:rounded-[50px] border-4 border-white overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className={`w-full h-full object-cover ${pillar.objectPositionClass}`}
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div
                  className={`relative z-10 flex-1 ${
                    isPhotoLeft
                      ? `lg:order-2 lg:pl-10 min-[1400px]:pl-[54px] lg:pr-8 min-[1400px]:pr-[71px] lg:pt-[86px] ${pillar.textTopPaddingClass}`
                      : `lg:order-1 lg:pl-12 min-[1400px]:pl-[71px] lg:pr-10 min-[1400px]:pr-0 lg:pt-[82px] ${pillar.textTopPaddingClass}`
                  }`}
                >
                  <div className={pillar.textWidthClass}>
                    <h2 className="font-extrabold text-[26px] sm:text-[32px] min-[1400px]:text-[36px] leading-[1.15] min-[1400px]:leading-[40px] tracking-[0px] text-[#0f172a]">
                      {pillar.title}
                    </h2>

                    <div
                      aria-hidden="true"
                      className={`mt-[19px] h-[2px] w-full ${pillar.dividerMaxWidthClass} ${pillar.dividerColorClass}`}
                    />

                    <p className="mt-[24px] min-[1400px]:mt-[31px] font-medium text-[16px] sm:text-[18px] min-[1400px]:text-[20px] leading-[24px] tracking-[0px] text-[#383232]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LegacyPillars;

