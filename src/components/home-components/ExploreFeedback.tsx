import React, { useState } from "react";
import quoteIcon from "../../assets/home-quote-icon.png";
import avatarKaran from "../../assets/avatar-karan.png";
import avatarCatherine from "../../assets/avatar-catherine.png";
import avatarPeter from "../../assets/avatar-peter.png";

interface FeedbackItem {
  id: number;
  name: string;
  time: string;
  text: string;
  avatar: string;
  stars: number;
}

const feedbacks: FeedbackItem[] = [
  {
    id: 1,
    name: "Karan",
    time: "1 week ago",
    text: "Our experience with the school has been wonderful, and the teachers welcomed us politely. Academic guidance is very strong with personal attention. My child enjoys every classroom activity and never felt left behind.",
    avatar: avatarKaran,
    stars: 5,
  },
  {
    id: 2,
    name: "Catherine",
    time: "10 days ago",
    text: "I love the supportive faculty and parent communication is excellent. They respond in a timely manner with complete updates on student progress, co-curricular clubs, and holistic learning programs.",
    avatar: avatarCatherine,
    stars: 5,
  },
  {
    id: 3,
    name: "Peter",
    time: "2 weeks ago",
    text: "Visited the school campus last month. Infrastructure is clean, particularly science labs and library resources. The faculty guided us through every academic track before enrollment. Very satisfied with our decision.",
    avatar: avatarPeter,
    stars: 5,
  },
  {
    id: 4,
    name: "Neha",
    time: "3 weeks ago",
    text: "Sindhu Education Society builds genuine discipline and strong moral values alongside board exam preparation. Teachers encourage curiosity in every subject and celebrate every student milestone.",
    avatar: avatarKaran,
    stars: 5,
  },
  {
    id: 5,
    name: "Vikram",
    time: "1 month ago",
    text: "Sports facilities, smart classrooms, and structured revision tests make a noticeable difference in student confidence. Parent-teacher meetings are constructive, well organized, and transparent throughout the year.",
    avatar: avatarCatherine,
    stars: 5,
  },
];

const ExploreFeedback: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStart = feedbacks.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStart : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStart ? 0 : prev + 1));
  };

  const visibleCards = feedbacks.slice(startIndex, startIndex + visibleCount);
  const progressOffset = (startIndex / Math.max(maxStart, 1)) * 48;

  return (
    <section
      id="feedback"
      className="w-full bg-[#f5f8ff] py-14 lg:py-0 lg:h-[584px] flex items-center select-none overflow-hidden"
      aria-label="Explore Genuine Feedback"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:pl-[68px] lg:pr-[24px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
          {/* Left Intro Column (Figma 1:1026: w:295.25, mr:40px) */}
          <div className="w-full lg:w-[295.25px] lg:mr-[40px] lg:pt-[8px] lg:pb-[16px] shrink-0">
            <img
              src={quoteIcon}
              alt=""
              aria-hidden="true"
              className="w-[56px] h-[56px] object-contain mb-[20px]"
            />

            <h2 className="text-[28px] lg:text-[30px] font-bold leading-[36px] tracking-[-0.75px] text-[#16181b]">
              Explore Genuine
              <br />
              Feedback
            </h2>

            {/* Slider Controls (Figma 1:1034: mt:95.5px, gap:16px) */}
            <div className="mt-8 lg:mt-[95.5px] flex items-center gap-[16px]">
              <button
                type="button"
                onClick={handlePrev}
                className="w-[20px] h-[20px] flex items-center justify-center text-[#16181b] hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Previous review"
              >
                <svg className="w-[20px] h-[20px] stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6 6m-6-6l6-6" />
                </svg>
              </button>

              {/* Progress Track 80px x 3px with 32px active bar */}
              <div className="relative w-[80px] h-[3px] bg-[#e3e6e8] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 h-[3px] w-[32px] bg-[#16181b] rounded-full transition-all duration-300"
                  style={{ left: `${progressOffset}px` }}
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-[20px] h-[20px] flex items-center justify-center text-[#16181b] hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Next review"
              >
                <svg className="w-[20px] h-[20px] stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right CardsGrid (Figma 1:1043: 3 cards x 303.25px, gap:28px) */}
          <div className="w-full lg:w-[965.75px] grid grid-cols-1 md:grid-cols-3 gap-[28px] shrink-0">
            {visibleCards.map((item) => (
              <article key={item.id} className="flex flex-col">
                {/* Speech Bubble Body (Figma 1:1045: 303.25 x 259.56, p:28, rounded:16) */}
                <div className="relative bg-white border border-[#f5f5f5] rounded-[16px] p-[28px] lg:h-[259.56px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                  <p className="text-[13.5px] font-normal leading-[21.94px] text-[#4a4e53]">
                    {item.text}
                  </p>

                  {/* 5 Emerald Stars (#00b67a, gap:4px, 16x16) */}
                  <div className="flex items-center gap-[4px] mt-4" aria-label={`${item.stars} out of 5 stars`}>
                    {Array.from({ length: item.stars }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-[16px] h-[16px] fill-[#00b67a]"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.453a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.376-2.453a1 1 0 00-1.175 0l-3.376 2.453c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L1.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
                      </svg>
                    ))}
                  </div>

                  {/* Speech Bubble Tail (Figma 1:1060: left:38px, bottom:-11px, 24x12 triangle) */}
                  <div
                    className="absolute left-[38px] -bottom-[11px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.04)]"
                    aria-hidden="true"
                  />
                </div>

                {/* Author Row (Figma 1:1061: pt:24px, pl:12px, gap:14px, 40x40 avatar) */}
                <div className="pt-[24px] pl-[12px] flex items-center gap-[14px]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-[40px] h-[40px] rounded-full object-cover shrink-0 shadow-xs"
                  />
                  <div>
                    <h4 className="text-[14px] font-bold leading-[14px] text-[#16181b]">
                      {item.name}
                    </h4>
                    <p className="mt-[4px] text-[12px] font-normal leading-[12px] text-[#8a9097]">
                      {item.time}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Carousel Chevron Button (Figma 1:1119: x:1377, 31x31) */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden xl:flex w-[31px] h-[31px] ml-[8px] items-center justify-center text-[#16181b] hover:opacity-60 transition-opacity cursor-pointer shrink-0"
            aria-label="Next testimonials"
          >
            <svg className="w-[24px] h-[24px] stroke-current" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreFeedback;
