import React, { useState, useEffect, useRef, useCallback } from "react";
import khubchandImg from "../../assets/campus-khubchand.jpg";
import gajananImg from "../../assets/campus-gajanan.jpg";
import pharmacyImg from "../../assets/campus-pharmacy.jpg";

interface Campus {
  id: number;
  name: string;
  thumb: string;
  large: string;
  href: string;
  objectPosition?: string;
}

const campuses: Campus[] = [
  {
    id: 0,
    name: "Khubchand Bajaj Central Public School",
    thumb: khubchandImg,
    large: khubchandImg,
    href: "#schools-curriculum",
    objectPosition: "center 50%",
  },
  {
    id: 1,
    name: "Shri Gajanan Maharaj high-school",
    thumb: gajananImg,
    large: gajananImg,
    href: "#schools-curriculum",
    objectPosition: "center 22%",
  },
  {
    id: 2,
    name: "K.C. Bajaj College of Pharmacy & Research",
    thumb: pharmacyImg,
    large: pharmacyImg,
    href: "#schools-curriculum",
    objectPosition: "center 40%",
  },
];

const AUTOPLAY_INTERVAL = 3500;

const OurCampuses: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const total = campuses.length;

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev" = "next") => {
      if (isAnimating || idx === selectedIdx) return;
      setDirection(dir);
      setIsAnimating(true);
      setSelectedIdx(idx);
      setTimeout(() => {
        setDisplayIdx(idx);
        setIsAnimating(false);
      }, 420);
    },
    [isAnimating, selectedIdx]
  );

  const goNext = useCallback(() => {
    const next = (selectedIdx + 1) % total;
    goTo(next, "next");
  }, [goTo, selectedIdx, total]);

  const goPrev = useCallback(() => {
    const prev = (selectedIdx - 1 + total) % total;
    goTo(prev, "prev");
  }, [goTo, selectedIdx, total]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setSelectedIdx((prev) => {
          const next = (prev + 1) % total;
          setDirection("next");
          setIsAnimating(true);
          setTimeout(() => {
            setDisplayIdx(next);
            setIsAnimating(false);
          }, 420);
          return next;
        });
      }
    }, AUTOPLAY_INTERVAL);
  }, [total]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleThumbnailClick = (idx: number) => {
    if (idx === selectedIdx) return;
    isPausedRef.current = true;
    const dir: "next" | "prev" = idx > selectedIdx ? "next" : "prev";
    goTo(idx, dir);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      isPausedRef.current = false;
      startInterval();
    }, 6000);
  };

  const handlePrev = () => {
    isPausedRef.current = true;
    goPrev();
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      isPausedRef.current = false;
      startInterval();
    }, 6000);
  };

  const handleNext = () => {
    isPausedRef.current = true;
    goNext();
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      isPausedRef.current = false;
      startInterval();
    }, 6000);
  };

  const current = campuses[displayIdx];

  const slideInClass =
    direction === "next"
      ? "animate-[slideInFromRight_0.42s_ease]"
      : "animate-[slideInFromLeft_0.42s_ease]";

  return (
    <section
      id="campuses"
      className="w-full bg-white pt-[44px] sm:pt-[64px] lg:pt-[97px] pb-[44px] sm:pb-[56px] lg:pb-[94px] select-none"
      aria-label="Our Campuses"
    >
      <style>{`
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(6%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-6%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Left Title & Subtitle + Right 3 Thumbnails */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-0">
          {/* Left Copy Block */}
          <div className="w-full lg:w-[545px] flex flex-col gap-[8px] sm:gap-[10px]">
            <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] text-[#073c96]">
              Our Schools
            </span>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.18] lg:leading-[40px] text-[#0f172a]">
              Explore our vibrant
              <br />
              Campuses of <span className="text-[#073c96]">Sindhu Education</span>
            </h2>
            <p className="max-w-[511px] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] text-[#64748b]">
              Sindhu Education Society's glorious journey from humble beginnings to a
              premier educational institution in North Nagpur.
            </p>
          </div>

          {/* Right Thumbnails — sync with active campus */}
          <div className="w-full lg:w-[543px] grid grid-cols-3 gap-[8px] sm:gap-[16px] lg:pt-[21px]">
            {campuses.map((campus, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={campus.id}
                  type="button"
                  onClick={() => handleThumbnailClick(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-full lg:w-[170px] h-[64px] sm:h-[90px] lg:h-[103px] rounded-[10px] sm:rounded-[12px] overflow-hidden bg-[#f1f5f9] border transition-all duration-300 ${
                      isSelected
                        ? "border-[#073c96] shadow-md scale-[1.03]"
                        : "border-[#e2e8f0] group-hover:border-[#94a3b8] scale-100"
                    }`}
                  >
                    <img
                      src={campus.thumb}
                      alt={campus.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: campus.objectPosition || "center" }}
                    />
                  </div>
                  <span
                    className={`pt-[4px] max-w-full text-[10px] sm:text-[11px] font-semibold leading-[14px] line-clamp-2 transition-colors duration-300 ${
                      isSelected ? "text-[#073c96]" : "text-[#334155]"
                    }`}
                  >
                    {campus.name}
                  </span>
                  {/* Auto-progress bar under active thumb */}
                  <div className="mt-[4px] w-full h-[2px] rounded-full bg-[#e2e8f0] overflow-hidden">
                    {isSelected && (
                      <div
                        key={`bar-${selectedIdx}`}
                        className="h-full bg-[#073c96] rounded-full"
                        style={{
                          animation: `fillBar ${AUTOPLAY_INTERVAL}ms linear forwards`,
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Featured Campus Photo */}
        <div
          className="mt-[28px] sm:mt-[36px] lg:mt-[48px] relative w-full h-[200px] sm:h-[340px] lg:h-[500px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[0_20px_45px_-12px_rgba(0,0,0,0.25)] bg-slate-100"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          <img
            key={displayIdx}
            src={current.large}
            alt={current.name}
            className={`w-full h-full object-cover ${slideInClass}`}
            style={{ objectPosition: current.objectPosition || "center" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Campus name label */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 pointer-events-none">
            <p
              key={`label-${displayIdx}`}
              className={`text-white text-[14px] sm:text-[18px] lg:text-[22px] font-bold drop-shadow-lg ${slideInClass}`}
            >
              {current.name}
            </p>
          </div>

          {/* Prev arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 text-white border border-white/30"
            aria-label="Previous campus"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 text-white border border-white/30"
            aria-label="Next campus"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 flex gap-1.5">
            {campuses.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleThumbnailClick(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === selectedIdx
                    ? "w-5 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to campus ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-[22px] sm:mt-[26px] flex justify-center">
          <a
            href={current.href}
            className="inline-flex items-center justify-center gap-[12px] sm:gap-[15px] w-full sm:w-[242px] max-w-[280px] h-[50px] sm:h-[54px] px-[20px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-[10px] sm:rounded-[8px] bg-[#40c843] hover:bg-[#35b538] text-white text-[15px] sm:text-[16px] font-semibold leading-[20px] shadow-[0_12px_24px_-6px_rgba(64,200,67,0.45)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View All Campuses</span>
            <svg
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] shrink-0 stroke-current"
              fill="none"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurCampuses;
