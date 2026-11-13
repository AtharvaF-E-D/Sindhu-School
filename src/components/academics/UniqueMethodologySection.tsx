import React from "react";
import methodologyCampusImg from "../../assets/academics/methodology-campus.png";

const UniqueMethodologySection: React.FC = () => {
  return (
    <section
      id="unique-methodology"
      aria-labelledby="unique-methodology-heading"
      className="w-full bg-[#bfd8f8]/30 pt-12 sm:pt-14 lg:pt-[50px] pb-12 sm:pb-16 lg:pb-[75px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[76px] lg:pr-[75px]">
        <div className="max-w-[919px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-[12px]">
            <h2
              id="unique-methodology-heading"
              className="max-w-[613px] lg:min-h-[98px] font-extrabold text-[26px] sm:text-[30px] lg:text-[32px] leading-[1.25] lg:leading-[40px] tracking-[0px] text-[#073c96] text-center"
            >
              Our Unique Methodology: Unleashing The Potential Of Education
            </h2>
            <div
              aria-hidden="true"
              className="w-full h-[2px] bg-[#10b981]"
            />
          </div>

          <p className="mt-[17px] w-full font-medium text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] tracking-[0px] text-[#171717] text-center">
            From the very outset, an all encompassing educational journey paves
            the way for the students’ life long personal growth and holistic
            well-being. At Sindhu Education Society, we prioritise the
            comprehensive and harmonious growth of every student, encompassing
            both economic and noneconomic domains.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-[62px] w-full overflow-hidden rounded-[19px]">
          <img
            src={methodologyCampusImg}
            alt="Aerial view of the Sindhu Education Society campus and clock tower"
            className="w-full aspect-[1289/446] lg:h-[446px] object-cover block"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueMethodologySection;

