import React, { useRef, useState } from "react";
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
    text: "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
    avatar: avatarKaran,
    stars: 5,
  },
  {
    id: 2,
    name: "Catherine",
    time: "10 days ago",
    text: "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
    setStartIndex((prev) => (prev <= 0 ? feedbacks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
    setStartIndex((prev) => (prev >= feedbacks.length - 1 ? 0 : prev + 1));
  };

  const progressOffset = (startIndex / Math.max(feedbacks.length - 1, 1)) * 48;

  return (
    <section
      id="feedback"
      className="w-full bg-[#f6f9fe] py-10 sm:py-14 lg:py-0 lg:h-[584px] flex items-center select-none overflow-hidden"
      aria-label="Explore Genuine Feedback"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:pl-[68px] lg:pr-[24px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-0">
          {/* Left Intro Column */}
          <div className="w-full lg:w-[295px] lg:mr-[40px] lg:pt-[8px] lg:pb-[16px] shrink-0">
            {/* Grey Double Quote Icon */}
            <svg
              className="w-[44px] h-[34px] sm:w-[52px] sm:h-[40px] text-[#b0b7c3] mb-4 sm:mb-5 fill-current"
              viewBox="0 0 48 38"
              aria-hidden="true"
            >
              <path d="M0 22.8C0 10.2 8.4 0 21.6 0v7.2C14.4 7.2 9.6 12 9.6 19.2h12V38H0V22.8zm26.4 0C26.4 10.2 34.8 0 48 0v7.2c-7.2 0-12 4.8-12 12h12V38H26.4V22.8z" />
            </svg>

            <h2 className="text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-[32px] sm:leading-[36px] tracking-[-0.75px] text-[#16181b]">
              Explore Genuine
              <br />
              Feedback
            </h2>

            {/* Slider Controls */}
            <div className="mt-5 sm:mt-8 lg:mt-[95.5px] flex items-center gap-[16px]">
              <button
                type="button"
                onClick={handlePrev}
                className="w-[24px] h-[24px] flex items-center justify-center text-[#16181b] hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Previous review"
              >
                <svg className="w-[18px] h-[18px] stroke-current" fill="none" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6 6m-6-6l6-6" />
                </svg>
              </button>

              {/* Progress Track */}
              <div className="relative w-[70px] sm:w-[80px] h-[3px] bg-[#e2e8f0] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 h-[3px] w-[26px] sm:w-[32px] bg-[#16181b] rounded-full transition-all duration-300"
                  style={{ left: `${progressOffset}px` }}
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-[24px] h-[24px] flex items-center justify-center text-[#16181b] hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Next review"
              >
                <svg className="w-[18px] h-[18px] stroke-current" fill="none" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Cards: Horizontal scroll on mobile/tablet matching screenshot, 3-col on lg */}
          <div
            ref={scrollRef}
            className="w-full lg:w-[965.75px] flex flex-nowrap overflow-x-auto scrollbar-none gap-4 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-[28px] shrink-0 pt-1 pb-4 snap-x"
          >
            {feedbacks.map((item) => (
              <article key={item.id} className="w-[260px] sm:w-[285px] lg:w-auto shrink-0 flex flex-col snap-start">
                {/* Speech Bubble Body */}
                <div className="relative bg-white border border-[#edf0f5] rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 lg:p-[28px] min-h-[220px] sm:min-h-[240px] lg:h-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                  <p className="text-[13px] sm:text-[13.5px] font-normal leading-[21px] sm:leading-[22px] text-[#4a4e53]">
                    {item.text}
                  </p>

                  {/* 5 Emerald Stars */}
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

                  {/* Speech Bubble Tail pointing down towards avatar */}
                  <div
                    className="absolute left-[34px] -bottom-[10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.04)]"
                    aria-hidden="true"
                  />
                </div>

                {/* Author Row */}
                <div className="pt-[18px] sm:pt-[22px] pl-[12px] flex items-center gap-[12px] sm:gap-[14px]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-[42px] h-[42px] rounded-full object-cover shrink-0 shadow-xs"
                  />
                  <div>
                    <h4 className="text-[14px] font-bold leading-[16px] text-[#16181b]">
                      {item.name}
                    </h4>
                    <p className="mt-[2px] text-[12px] font-normal leading-[14px] text-[#8a9097]">
                      {item.time}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Carousel Chevron Button (Desktop Only) */}
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
