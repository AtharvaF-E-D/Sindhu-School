import React from "react";
import methodologyCampusImg from "../../assets/academics/methodology-campus.png";

const UniqueMethodologySection: React.FC = () => {
  return (
    <section
      id="unique-methodology"
      aria-labelledby="unique-methodology-heading"
      className="w-full bg-[#ebf5ff] pt-8 sm:pt-12 lg:pt-[50px] pb-8 sm:pb-14 lg:pb-[75px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[76px] lg:pr-[75px]">
        <div className="max-w-[919px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-2 sm:gap-[12px]">
            <h2
              id="unique-methodology-heading"
              className="max-w-[340px] sm:max-w-[613px] font-bold lg:font-extrabold text-[17px] xs:text-[18px] sm:text-[24px] lg:text-[32px] leading-[23px] sm:leading-[32px] lg:leading-[40px] tracking-normal text-[#073c96] text-center"
            >
              Our Unique Methodology: Unleashing The Potential Of Education
            </h2>
            <div
              aria-hidden="true"
              className="w-full h-[2px] bg-[#10b981]"
            />
          </div>

          <p className="mt-3 sm:mt-[17px] w-full font-normal text-[11.5px] xs:text-[12px] sm:text-[15px] lg:text-[18px] leading-[17px] xs:leading-[18px] sm:leading-[26px] lg:leading-[30px] tracking-normal text-[#4b5563] text-center max-w-[919px]">
            From the very outset, an all encompassing educational journey paves
            the way for the students’ life long personal growth and holistic
            well-being. At Sindhu Education Society, we prioritise the
            comprehensive and harmonious growth of every student, encompassing
            both economic and noneconomic domains.
          </p>
        </div>

        <div className="mt-4 sm:mt-8 lg:mt-[62px] w-full overflow-hidden rounded-[14px] sm:rounded-[19px]">
          <img
            src={methodologyCampusImg}
            alt="Aerial view of the Sindhu Education Society campus and clock tower"
            className="w-full aspect-[16/9] sm:aspect-[1289/446] lg:h-[446px] object-cover block"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueMethodologySection;

