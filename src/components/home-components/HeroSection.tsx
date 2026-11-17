import React, { useState, useEffect, useRef, useCallback } from "react";
import heroBanner1 from "../../assets/hero-banner-1.jpg";
import heroBanner2 from "../../assets/hero-banner-2.jpg";
import heroBanner3 from "../../assets/hero-banner-3.jpg";

interface Slide {
  id: number;
  image: string;
  alt: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    id: 0,
    image: heroBanner1,
    alt: "Inspiring Young Minds – Shaping a Better Tomorrow",
    ctaHref: "#admissions",
  },
  {
    id: 1,
    image: heroBanner2,
    alt: "Empowering Young Minds – For a Brighter Future",
    ctaHref: "#admissions",
  },
  {
    id: 2,
    image: heroBanner3,
    alt: "Nurturing Young Minds – Building a Brighter Tomorrow",
    ctaHref: "#admissions",
  },
];

const AUTOPLAY_MS = 4000;

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const total = slides.length;

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev") => {
      if (animating || idx === current) return;
      setDirection(dir);
      setAnimating(true);
      setPrev(current);
      setCurrent(idx);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 600);
    },
    [animating, current],
  );

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => {
          const next = (c + 1) % total;
          setDirection("next");
          setAnimating(true);
          setPrev(c);
          setTimeout(() => {
            setPrev(null);
            setAnimating(false);
          }, 600);
          return next;
        });
      }
    }, AUTOPLAY_MS);
  }, [total]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const manualGo = (idx: number, dir: "next" | "prev") => {
    pausedRef.current = true;
    goTo(idx, dir);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      pausedRef.current = false;
      startInterval();
    }, 7000);
  };

  const handlePrev = () => manualGo((current - 1 + total) % total, "prev");
  const handleNext = () => manualGo((current + 1) % total, "next");
  const handleDot = (idx: number) =>
    manualGo(idx, idx > current ? "next" : "prev");

  // Animation: incoming slide slides in, outgoing slides out
  const getSlideStyle = (idx: number): string => {
    if (idx === current) {
      if (!animating) return "translate-x-0 opacity-100 z-10";
      return direction === "next"
        ? "translate-x-0 opacity-100 z-10 animate-[heroComeFromRight_0.6s_ease_forwards]"
        : "translate-x-0 opacity-100 z-10 animate-[heroComeFromLeft_0.6s_ease_forwards]";
    }
    if (idx === prev) {
      return direction === "next"
        ? "-translate-x-full opacity-0 z-0 animate-[heroGoLeft_0.6s_ease_forwards]"
        : "translate-x-full opacity-0 z-0 animate-[heroGoRight_0.6s_ease_forwards]";
    }
    return "translate-x-full opacity-0 z-0 pointer-events-none";
  };

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-slate-900"
      aria-label="Hero Banner"
    >
      <style>{`
        @keyframes heroComeFromRight {
          from { transform: translateX(4%); opacity: 0.7; }
          to   { transform: translateX(0);  opacity: 1; }
        }
        @keyframes heroComeFromLeft {
          from { transform: translateX(-4%); opacity: 0.7; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes heroGoLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-3%);  opacity: 0; }
        }
        @keyframes heroGoRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(3%);  opacity: 0; }
        }
        @keyframes heroFillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      {/* Slide Stack: Maintains exact native aspect ratio of banner images so full graphic is shown without cropping */}
      <div className="relative w-full max-w-[1920px] mx-auto aspect-[1024/546]">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-100 ${getSlideStyle(idx)}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-top select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black/30 hover:bg-black/50 active:scale-95 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-md"
          aria-label="Previous slide"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black/30 hover:bg-black/50 active:scale-95 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-md"
          aria-label="Next slide"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Bottom controls: dots + progress bar */}
        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2">
          {/* Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDot(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 border border-white/40 cursor-pointer ${
                  idx === current
                    ? "w-5 sm:w-6 h-2 sm:h-2.5 bg-white shadow-sm"
                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Auto-progress bar */}
          <div className="w-24 sm:w-40 lg:w-48 h-[2px] rounded-full bg-white/25 overflow-hidden">
            <div
              key={`bar-${current}`}
              className="h-full bg-white rounded-full"
              style={{
                animation: `heroFillBar ${AUTOPLAY_MS}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
