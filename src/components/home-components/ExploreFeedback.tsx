import React, { useRef, useState, useEffect, useCallback } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [progressRatio, setProgressRatio] = useState(0);
  const [maxTravel, setMaxTravel] = useState(48);

  // Recalculate track movement limits on mount & resize
  const updateTravelDistance = useCallback(() => {
    if (trackRef.current && thumbRef.current) {
      const trackW = trackRef.current.clientWidth;
      const thumbW = thumbRef.current.clientWidth;
      setMaxTravel(Math.max(trackW - thumbW, 0));
    }
  }, []);

  // Update progress ratio on scroll
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setProgressRatio(0);
      return;
    }
    const ratio = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    setProgressRatio(ratio);
  }, []);

  useEffect(() => {
    updateTravelDistance();
    window.addEventListener("resize", updateTravelDistance);
    return () => window.removeEventListener("resize", updateTravelDistance);
  }, [updateTravelDistance]);

  // Navigate next or prev by one card step with smooth wrap-around
  const handleScrollStep = (direction: "next" | "prev") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    // Calculate step width dynamically from DOM nodes for precision across responsive screen sizes
    const firstCard = container.firstElementChild as HTMLElement | null;
    const secondCard = firstCard?.nextElementSibling as HTMLElement | null;
    const step = secondCard && firstCard
      ? secondCard.offsetLeft - firstCard.offsetLeft
      : 331.25;

    if (direction === "next") {
      // If near the end, loop smoothly back to start
      if (scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: Math.min(scrollLeft + step, maxScroll),
          behavior: "smooth",
        });
      }
    } else {
      // If near the beginning, loop smoothly to the end
      if (scrollLeft <= 15) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: Math.max(scrollLeft - step, 0),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="feedback"
      className="w-full bg-[#f6f9fe] py-12 sm:py-16 lg:py-0 lg:h-[584px] flex items-center select-none overflow-hidden"
      aria-label="Explore Genuine Feedback"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:pl-[68px] lg:pr-[24px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-0">
          {/* Left Intro Column */}
          <div className="w-full lg:w-[295.25px] lg:mr-[40px] lg:pt-[8px] lg:pb-[16px] shrink-0">
            {/* Grey Double Quote Icon directly from Figma design */}
            <svg
              className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] text-[#9ca3af] mb-4 sm:mb-5 fill-current"
              viewBox="0 0 56 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32.7063 49V31.7543C32.7063 18.445 41.412 9.42433 53.6667 7L55.9883 12.019C50.3137 14.1587 46.6667 20.5077 46.6667 25.6667H56V49H32.7063V49M0 49V31.7543C0 18.445 8.74533 9.42433 21 7L23.324 12.019C17.647 14.1587 14 20.5077 14 25.6667H23.2937V49H0V49"
                fill="currentColor"
              />
            </svg>

            <h2 className="text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-[32px] sm:leading-[36px] tracking-[-0.75px] text-[#16181b]">
              Explore Genuine
              <br />
              Feedback
            </h2>

            {/* Slider Controls */}
            <div className="mt-5 sm:mt-8 lg:mt-[95px] flex items-center gap-[16px]">
              <button
                type="button"
                onClick={() => handleScrollStep("prev")}
                className="w-[24px] h-[24px] flex items-center justify-center text-[#737373] hover:text-[#16181b] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181b] rounded"
                aria-label="Previous review"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M8.75 16.25L2.5 10M2.5 10L8.75 3.75M2.5 10H17.5"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              </button>

              {/* Progress Track */}
              <div
                ref={trackRef}
                className="relative w-[70px] sm:w-[80px] h-[3px] bg-[#e2e8f0] rounded-full overflow-hidden"
                aria-hidden="true"
              >
                <div
                  ref={thumbRef}
                  className="absolute top-0 h-[3px] w-[26px] sm:w-[32px] bg-[#16181b] rounded-full transition-transform duration-150 ease-out will-change-transform"
                  style={{
                    transform: `translateX(${progressRatio * maxTravel}px)`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => handleScrollStep("next")}
                className="w-[24px] h-[24px] flex items-center justify-center text-[#737373] hover:text-[#16181b] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181b] rounded"
                aria-label="Next review"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Cards Carousel Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="w-full lg:max-w-[965.75px] flex flex-nowrap overflow-x-auto scrollbar-none gap-4 sm:gap-6 lg:gap-[28px] shrink-0 pt-1 pb-4 snap-x snap-mandatory scroll-smooth"
            role="region"
            aria-label="Testimonials Carousel"
            tabIndex={0}
          >
            {feedbacks.map((item) => (
              <article
                key={item.id}
                className="w-[260px] sm:w-[285px] lg:w-[303.25px] shrink-0 flex flex-col snap-start"
              >
                {/* Speech Bubble Body */}
                <div className="relative bg-white border border-[#edf0f5] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-[28px] min-h-[220px] sm:min-h-[240px] lg:h-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                  <p className="text-[13px] sm:text-[13.5px] font-normal leading-[21px] sm:leading-[22px] text-[#4a4e53]">
                    {item.text}
                  </p>

                  {/* 5 Emerald Stars (#00b67a, gap:4px, 16x16) */}
                  <div className="flex items-center gap-[4px] mt-4" aria-label={`${item.stars} out of 5 stars`}>
                    {Array.from({ length: item.stars }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-[16px] h-[16px] shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8.0004 12L3.298 14.472L4.1964 9.236L0.391602 5.528L5.6492 4.764L8.0004 0L10.3516 4.764L15.6092 5.528L11.8044 9.236L12.7028 14.472L8.0004 12"
                          fill="#00B67A"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Speech Bubble Tail with subtle border matching card border */}
                  <svg
                    className="absolute left-[30px] -bottom-[12px] w-[24px] h-[13px] overflow-visible pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.02)]"
                    viewBox="0 0 24 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M0 0 L12 12 L24 0" fill="#ffffff" stroke="#edf0f5" strokeWidth="1" />
                    <rect x="0.5" y="-1" width="23" height="2" fill="#ffffff" />
                  </svg>
                </div>

                {/* Author Row */}
                <div className="pt-[18px] sm:pt-[22px] pl-[12px] flex items-center gap-[12px] sm:gap-[14px]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full object-cover shrink-0 shadow-xs"
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
            onClick={() => handleScrollStep("next")}
            className="hidden xl:flex w-[31px] h-[31px] ml-[8px] items-center justify-center text-[#64748b] hover:text-[#16181b] hover:opacity-75 transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181b] rounded"
            aria-label="Next testimonials"
          >
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
              <path
                d="M11.5088 25.73L19.9305 17.3084C20.925 16.3138 20.925 14.6863 19.9305 13.6917L11.5088 5.27002"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreFeedback;
