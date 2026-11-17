import React, { useState, useEffect, useRef } from "react";
import girlCircleImg from "../../assets/home-girl-circle.jpg";
import boyCircleImg from "../../assets/home-boy-circle.png";
import trophyIcon from "../../assets/home-trophy.png";
import mortarboardIcon from "../../assets/home-mortarboard.png";
import teacherIcon from "../../assets/home-teacher.png";
import passFailIcon from "../../assets/home-passfail.png";
import schoolIcon from "../../assets/home-school.png";
import ufoLeft from "../../assets/home-doodle-ufo-left.png";
import ufoRight from "../../assets/home-doodle-ufo-right.png";
import curvedArrow from "../../assets/home-doodle-arrow.png";
import helmetDoodle from "../../assets/home-doodle-helmet.png";
import saturnDoodle from "../../assets/home-doodle-saturn.png";
import meteorDoodle from "../../assets/home-doodle-meteor.png";
import moonDoodle from "../../assets/home-doodle-moon.png";

interface MetricItem {
  numericValue: number;
  suffix?: string;
  label: string;
  icon: string;
}

const metrics: MetricItem[] = [
  { numericValue: 75, suffix: "+", label: "Years", icon: trophyIcon },
  { numericValue: 15000, suffix: "+", label: "SES Scholar's", icon: mortarboardIcon },
  { numericValue: 400, suffix: "+", label: "Educators", icon: teacherIcon },
  { numericValue: 2, suffix: "", label: "Boards", icon: passFailIcon },
  { numericValue: 12, suffix: "", label: "Schools", icon: schoolIcon },
];

const AnimatedCounter: React.FC<{
  value: number;
  suffix?: string;
  isVisible: boolean;
  duration?: number;
}> = ({ value, suffix = "", isVisible, duration = 1800 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const current = Math.round(easedProgress * value);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, isVisible, duration]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

const BetterFuture: React.FC = () => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="better-future"
      className="w-full bg-white pt-8 sm:pt-10 lg:pt-[64px] pb-6 lg:pb-[22px] overflow-hidden select-none relative"
      aria-label="Better Future For Your Kids"
    >
      {/* Space/School Doodles: Mobile + Desktop */}
      <img
        src={ufoLeft}
        alt=""
        aria-hidden="true"
        className="absolute left-[10px] sm:left-[24px] lg:left-[185px] top-[10px] sm:top-[24px] lg:top-[76px] w-[42px] sm:w-[56px] lg:w-[78px] object-contain pointer-events-none"
      />
      <img
        src={meteorDoodle}
        alt=""
        aria-hidden="true"
        className="absolute left-[8px] sm:left-[20px] lg:left-[32px] top-[148px] sm:top-[200px] lg:top-[274px] w-[34px] sm:w-[48px] lg:w-[66px] object-contain pointer-events-none"
      />
      {/* Desktop moon doodle (mobile moon doodle is anchored directly to the left circle below) */}
      <img
        src={moonDoodle}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-[58px] top-[742px] w-[55px] object-contain pointer-events-none"
      />

      {/* Extra Desktop Doodles */}
      <img
        src={ufoRight}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-[140px] top-[91px] w-[75px] h-[74px] object-contain pointer-events-none"
      />
      <img
        src={curvedArrow}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-[397px] top-[246px] w-[48px] h-[32px] object-contain pointer-events-none"
      />
      <img
        src={saturnDoodle}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-[886px] top-[327px] w-[75px] h-[67px] object-contain pointer-events-none"
      />
      <img
        src={helmetDoodle}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-[507px] top-[589px] w-[46px] h-[48px] object-contain pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] pt-[8px] pb-8 lg:pb-[72px] lg:h-[892px] relative">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Tagline Pill */}
          <div className="inline-flex items-center justify-center px-4 py-2 sm:px-[24px] sm:py-[10px] rounded-full bg-white shadow-xs border border-slate-200/90 max-w-[340px] sm:max-w-none">
            <span className="text-[11px] sm:text-[14px] font-medium leading-tight text-[#475569]">
              Let the child be the director, and the actor in his own play
            </span>
          </div>

          {/* Headline + Coral Heart */}
          <div className="mt-3.5 sm:mt-[24px] relative inline-flex items-center justify-center">
            <h2 className="text-[20px] xs:text-[22px] sm:text-[34px] lg:text-[64px] font-black leading-[1.15] lg:leading-[64px] tracking-[-0.6px] sm:tracking-[-1.6px] text-[#120f38] text-center">
              Better Future For Your Kids
            </h2>

            {/* Heart Accent Circle */}
            <div
              className="absolute -right-[24px] xs:-right-[26px] -top-[6px] sm:-right-[28px] sm:-top-[12px] w-[24px] h-[24px] xs:w-[26px] xs:h-[26px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#f86f53] flex items-center justify-center shadow-md ring-2 ring-white shrink-0"
              aria-hidden="true"
            >
              <svg className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] fill-white" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* CTA Pill Button */}
          <a
            href="#campuses"
            className="mt-4 sm:mt-[32px] inline-flex items-center justify-between w-[195px] sm:w-[222px] h-[44px] sm:h-[52px] pl-[20px] sm:pl-[28px] pr-[7px] sm:pr-[10px] py-[6px] sm:py-[10px] rounded-full bg-[#073c96] hover:bg-[#052e75] text-white text-[13px] sm:text-[15px] font-bold leading-normal shadow-[0_12px_28px_rgba(7,60,150,0.36)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore our schools</span>
            <span className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#f86f53] flex items-center justify-center shrink-0">
              <svg
                className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] stroke-white"
                fill="none"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* MOBILE SHOWCASE (< lg): Circles side-by-side in one row, Slogan below */}
        <div className="flex lg:hidden flex-col items-center mt-6 w-full">
          {/* Side-by-Side Circles */}
          <div className="flex flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-6 w-full max-w-[360px] px-2">
            {/* Left Circle: Gurupurnima kids with top-left orange crescent & moon doodle */}
            <div className="relative w-[138px] xs:w-[146px] sm:w-[168px] h-[138px] xs:h-[146px] sm:h-[168px] shrink-0">
              {/* Orange crescent behind top & left */}
              <div
                className="w-[128px] xs:w-[136px] sm:w-[156px] h-[128px] xs:h-[136px] sm:h-[156px] rounded-full bg-[#f86f53] absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 shadow-sm"
                aria-hidden="true"
              />
              <div className="w-[132px] xs:w-[140px] sm:w-[160px] h-[132px] xs:h-[140px] sm:h-[160px] rounded-full overflow-hidden shadow-md relative z-10 bg-white ml-1.5 mt-1.5">
                <img
                  src={girlCircleImg}
                  alt="Young smiling students in traditional attire"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Moon doodle at bottom-left curve of left circle */}
              <img
                src={moonDoodle}
                alt=""
                aria-hidden="true"
                className="absolute -left-2.5 bottom-0 sm:-left-3 sm:bottom-1 w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] object-contain pointer-events-none z-20"
              />
            </div>

            {/* Right Circle: Trophy achievers with top-right lime-green crescent */}
            <div className="relative w-[138px] xs:w-[146px] sm:w-[168px] h-[138px] xs:h-[146px] sm:h-[168px] shrink-0 flex justify-end">
              {/* Lime-green crescent behind top & right */}
              <div
                className="w-[128px] xs:w-[136px] sm:w-[156px] h-[128px] xs:h-[136px] sm:h-[156px] rounded-full bg-[#c3ce6f] absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 shadow-sm"
                aria-hidden="true"
              />
              <div className="w-[132px] xs:w-[140px] sm:w-[160px] h-[132px] xs:h-[140px] sm:h-[160px] rounded-full overflow-hidden shadow-md relative z-10 bg-white mt-1.5 mr-1.5">
                <img
                  src={boyCircleImg}
                  alt="Sindhu Education Society student achievers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Slogan below the circles */}
          <div className="mt-6 text-center px-4">
            <h3 className="text-[20px] xs:text-[22px] sm:text-[26px] font-black leading-[1.2] tracking-tight text-[#1e293b]">
              SETTING BENCHMARKS
              <br />
              IN QUALITY EDUCATION
              <br />
              <span className="text-[#073c96]">SINCE 1952</span>
            </h3>
          </div>
        </div>

        {/* DESKTOP SHOWCASE (>= lg): Left Circle - Slogan - Right Circle */}
        <div className="hidden lg:flex mt-[16px] max-w-[1328px] mx-auto h-[398px] relative items-center justify-between">
          {/* Left Student Circle */}
          <div className="relative w-[370px] h-[398px] shrink-0">
            <div
              className="w-[300px] h-[300px] rounded-full bg-[#f86f53] shadow-lg absolute left-[24px] bottom-[38px]"
              aria-hidden="true"
            />
            <div className="w-[332.5px] h-[332.5px] rounded-full overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.14)] relative z-10 ml-[34.75px] mt-[8.75px] bg-white">
              <img
                src={girlCircleImg}
                alt="Young smiling students in traditional attire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Editorial Slogan */}
          <div className="max-w-[483px] mx-auto text-center px-2 z-10">
            <h3 className="text-[40px] font-bold leading-[46px] text-[#1e293b]">
              SETTING BENCHMARKS
              <br />
              IN QUALITY EDUCATION{" "}
              <span className="text-[#073c96]">SINCE 1952</span>
            </h3>
          </div>

          {/* Right Student Circle */}
          <div className="relative w-[370px] h-[398px] shrink-0 flex justify-end">
            <div
              className="w-[300px] h-[300px] rounded-full bg-[#c3ce6f] absolute right-[16px] top-[-10px]"
              aria-hidden="true"
            />
            <div className="w-[332.5px] h-[332.5px] rounded-full overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.14)] relative z-10 mr-[34.75px] mt-[8.75px] bg-white">
              <img
                src={boyCircleImg}
                alt="Sindhu Education Society student achievers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* METRICS SECTION WRAPPER */}
        <div ref={metricsRef} className="w-full">
          {/* MOBILE METRICS LAYOUT (< lg): 2 items top row, 3 items bottom row */}
          <div className="mt-8 flex lg:hidden flex-col items-center gap-6 w-full max-w-[420px] mx-auto px-4">
            {/* Top Row: 2 items (75+ Years, 15000+ SES Scholar's) */}
            <div className="flex items-center justify-around w-full gap-4">
              {metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="inline-flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#e0f2fe] shadow-[0_4px_12px_rgba(7,60,150,0.08)] flex items-center justify-center shrink-0">
                    <img
                      src={metric.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-[24px] h-[24px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[22px] sm:text-[26px] font-extrabold leading-none text-[#073c96]">
                      <AnimatedCounter
                        value={metric.numericValue}
                        suffix={metric.suffix}
                        isVisible={isVisible}
                      />
                    </span>
                    <span className="text-[11px] sm:text-[13px] font-medium leading-tight text-[#64748b] mt-1 whitespace-nowrap">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 3 items (400+ Educators, 2 Boards, 12 Schools) */}
            <div className="flex items-center justify-between sm:justify-around w-full gap-2 px-1">
              {metrics.slice(2, 5).map((metric) => (
                <div key={metric.label} className="inline-flex items-center gap-2">
                  <div className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#e0f2fe] shadow-[0_4px_12px_rgba(7,60,150,0.08)] flex items-center justify-center shrink-0">
                    <img
                      src={metric.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[18px] sm:text-[22px] font-extrabold leading-none text-[#073c96]">
                      <AnimatedCounter
                        value={metric.numericValue}
                        suffix={metric.suffix}
                        isVisible={isVisible}
                      />
                    </span>
                    <span className="text-[10px] sm:text-[12px] font-medium leading-tight text-[#64748b] mt-0.5 whitespace-nowrap">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP METRICS ROW (>= lg): Generously spaced with animated counters */}
          <div className="hidden lg:flex mt-8 lg:mt-10 max-w-[1240px] xl:max-w-[1280px] mx-auto items-center justify-between gap-6 xl:gap-8 px-4 sm:px-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="inline-flex items-center gap-3.5 xl:gap-4 transition-transform duration-300 hover:scale-105 cursor-default"
              >
                <div className="w-[56px] h-[56px] xl:w-[62px] xl:h-[62px] rounded-full bg-[#e0f2fe] shadow-[0_8px_20px_rgba(7,60,150,0.08)] flex items-center justify-center shrink-0">
                  <img
                    src={metric.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[38px] xl:text-[44px] font-black leading-none tracking-tight text-[#073c96]">
                    <AnimatedCounter
                      value={metric.numericValue}
                      suffix={metric.suffix}
                      isVisible={isVisible}
                    />
                  </span>
                  <span className="text-[15px] xl:text-[17px] font-medium leading-normal text-[#64748b] whitespace-nowrap mt-1.5">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterFuture;
