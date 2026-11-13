import React from 'react';
import sportsBasketball from '../../assets/sports-basketball.png';
import sportsChess from '../../assets/sports-chess.png';

const SportsAchievementsSection: React.FC = () => {
  return (
    <section
      id="sports-disciplines"
      aria-labelledby="sports-discipline-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:pl-[98px] xl:pr-[81px] py-10 sm:py-12 lg:pt-[70px] lg:pb-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[562fr_636fr] xl:grid-cols-[1fr_minmax(0,636px)] gap-8 lg:gap-[48px] items-start">
          {/* Left Column: Stacked Basketball & Chess photos (Figma image 35, image 36) */}
          <div className="flex flex-col gap-4 lg:gap-[16px] w-full">
            <div className="w-full aspect-[562/316] xl:h-[316px] rounded-[20px] lg:rounded-[28px] overflow-hidden bg-slate-100">
              <img
                src={sportsBasketball}
                alt="Students playing basketball match on the school courtyard court"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full aspect-[562/316] xl:h-[316px] rounded-[20px] lg:rounded-[28px] overflow-hidden bg-slate-100">
              <img
                src={sportsChess}
                alt="Students competing in structured chess coaching and championship matches"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Motto & Chess Narrative */}
          <div className="w-full lg:pt-[40px]">
            <h2
              id="sports-discipline-heading"
              className="max-w-[474px] text-[26px] sm:text-[30px] lg:text-[32px] leading-[1.28] lg:leading-[41px] font-extrabold text-[#073c96] text-left"
            >
              Play Together. Grow Together. Achieve Together.
            </h2>

            <div className="mt-6 lg:mt-[55px] text-[18px] sm:text-[21px] lg:text-[24px] leading-[1.6] lg:leading-[41px] font-medium tracking-[-0.25px] text-[#171717] text-justify">
              <p className="mb-6 lg:mb-[41px]">
                Sindhu Education Society encourages intellectual growth through
                its well-structured chess competitions.
              </p>
              <p>
                Our chess tournaments provide a platform for students to enhance
                their strategic thinking, problem-solving skills, and
                concentration.
              </p>
              <p>
                With expert guidance and regular practice sessions, students
                participate in inter-school and national-level chess
                championships, gaining valuable experience and recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsAchievementsSection;

