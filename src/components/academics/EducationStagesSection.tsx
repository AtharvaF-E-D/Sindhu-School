import React from "react";
import stageSanctuaryImg from "../../assets/academics/stage-sanctuary.png";
import stageKindergartenImg from "../../assets/academics/stage-kindergarten.png";
import stagePrimaryMiddleImg from "../../assets/academics/stage-primary-middle.png";
import stageJuniorCollegeImg from "../../assets/academics/stage-junior-college.png";
import stageSeniorCollegeImg from "../../assets/academics/stage-senior-college.png";

interface EducationStage {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgClass: string;
  dividerClass: string;
  titleBoxClass: string;
  titleGapClass: string;
  contentGapClass: string;
}

const EDUCATION_STAGES: EducationStage[] = [
  {
    id: "creating-a-sanctuary",
    title: "Creating a Sanctuary: Cultivating and Nurturing Atmosphere",
    description:
      "At Sindhu Education Society, our team works tirelessly to create a secure environment, where students can thrive academically and personally. we leave no stone unturned in ensuring a safe and nurturing atmosphere for all.",
    image: stageSanctuaryImg,
    imageAlt: "Children enjoying guided outdoor activities in school uniform",
    bgClass: "bg-[#ffe555]/10",
    dividerClass: "bg-[#ebd245]",
    titleBoxClass: "lg:min-h-[83px]",
    titleGapClass: "gap-[13px]",
    contentGapClass: "gap-[21px]",
  },
  {
    id: "nursery-and-kindergarten",
    title: "Nursery and Kindergarten- Blossoming Phase",
    description:
      "Our Kindergarten schools focus on developing logical, thinking and concentration that build the strong foundation for future success. Kindergarten students at Sindhu Education Society get to participate in a variety of joyful activities and play way methods which help them to develop independence and self-confidence. It is an amazing way for them to grow and learn.",
    image: stageKindergartenImg,
    imageAlt: "Kindergarten students dressed in traditional outfits for Guru Purnima celebration",
    bgClass: "bg-[#ffdb14]/10",
    dividerClass: "bg-[#efcb00]",
    titleBoxClass: "lg:min-h-[65px]",
    titleGapClass: "gap-[15px]",
    contentGapClass: "gap-[20px]",
  },
  {
    id: "primary-and-middle-school",
    title:
      "Primary and Middle School- Exploring new horizons of Growth and Resilience",
    description:
      "At Sindhu Education Society, we take pride in adopting challenging yet rewarding tasks of fostering Confidence , Curiosity and Creativity in every child. We guide our students to achieve their best potential and break boundaries and develop sound judgement.",
    image: stagePrimaryMiddleImg,
    imageAlt: "Primary and middle school students training outdoors on the field",
    bgClass: "bg-[#ffe555]/10",
    dividerClass: "bg-[#ebd245]",
    titleBoxClass: "lg:min-h-[83px]",
    titleGapClass: "gap-[13px]",
    contentGapClass: "gap-[5px]",
  },
  {
    id: "junior-college",
    title: "Junior College-Crafting Pioneers",
    description:
      "Our Junior College students are elegantly, sculpted individuals who have gone through the Grind and have now emerged as brilliant diamonds, deeply rooted in the rich heritage of Indian culture and ethics, while simultaneously embracing a modern and Knowledgeable approach.",
    image: stageJuniorCollegeImg,
    imageAlt: "Junior College achievers standing with their faculty mentor and trophy",
    bgClass: "bg-[#ffdb14]/10",
    dividerClass: "bg-[#efcb00]",
    titleBoxClass: "lg:min-h-[65px]",
    titleGapClass: "gap-[15px]",
    contentGapClass: "gap-[20px]",
  },
  {
    id: "senior-college",
    title: "Senior College-Unveiling Pioneers",
    description:
      "Our young graduates are like a valuable treasure for every organisation that chooses to hire them. They Are ever ready to go the extra mile and leave their footprints on the sands of time.",
    image: stageSeniorCollegeImg,
    imageAlt: "Senior College students and faculty on campus visit in lab coats",
    bgClass: "bg-[#ffe555]/10",
    dividerClass: "bg-[#ebd245]",
    titleBoxClass: "lg:min-h-[83px]",
    titleGapClass: "gap-[13px]",
    contentGapClass: "gap-[5px]",
  },
];

const EducationStagesSection: React.FC = () => {
  return (
    <section
      id="education-stages"
      aria-label="Academic Stages Approach"
      className="w-full flex flex-col gap-[18px] mb-8 lg:mb-[55px]"
    >
      {EDUCATION_STAGES.map((stage) => (
        <article
          key={stage.id}
          id={stage.id}
          className={`w-full ${stage.bgClass} lg:min-h-[415px] flex items-center`}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[119px] lg:pr-[129px] py-8 lg:pt-[36px] lg:pb-[37px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[65px]">
              <div className="w-full max-w-[428px] lg:w-[428px] aspect-[428/342] lg:h-[342px] shrink-0 rounded-[21px] overflow-hidden">
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="w-full h-full object-cover block"
                />
              </div>

              <div
                className={`w-full lg:w-[699px] flex flex-col ${stage.contentGapClass}`}
              >
                <div className={`flex flex-col ${stage.titleGapClass}`}>
                  <h2
                    className={`font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[34px] tracking-[0px] text-[#171717] ${stage.titleBoxClass}`}
                  >
                    {stage.title}
                  </h2>
                  <div
                    aria-hidden="true"
                    className={`w-full h-[2px] ${stage.dividerClass}`}
                  />
                </div>

                <p className="lg:max-w-[689px] font-medium text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] tracking-[0px] text-[#64748b] sm:text-justify">
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default EducationStagesSection;

