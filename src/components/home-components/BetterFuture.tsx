import React from "react";
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
  value: string;
  label: string;
  icon: string;
  valueWidth: string;
  labelWidth: string;
}

const metrics: MetricItem[] = [
  { value: "75+", label: "Years", icon: trophyIcon, valueWidth: "w-[127px]", labelWidth: "w-[127px]" },
  { value: "15000+", label: "SES Scholar's", icon: mortarboardIcon, valueWidth: "w-[227px]", labelWidth: "w-[227px]" },
  { value: "400+", label: "Educators", icon: teacherIcon, valueWidth: "w-[227px]", labelWidth: "w-[227px]" },
  { value: "2", label: "Boards", icon: passFailIcon, valueWidth: "w-[118px]", labelWidth: "w-[118px]" },
  { value: "12", label: "Schools", icon: schoolIcon, valueWidth: "w-[136px]", labelWidth: "w-[136px]" },
];

const BetterFuture: React.FC = () => {
  return (
    <section
      id="better-future"
      className="w-full bg-white pt-10 lg:pt-[64px] pb-4 lg:pb-[22px] overflow-hidden select-none"
      aria-label="Better Future For Your Kids"
    >
      {/* Exact 1440px x 892px Figma Stage */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] pt-[24px] pb-12 lg:pb-[72px] lg:h-[892px] relative">
        {/* Figma Space/School Doodles positioned accurately at 1440px */}
        <img
          src={ufoLeft}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute left-[185px] top-[76px] w-[78px] h-[69px] object-contain pointer-events-none"
        />
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
          src={meteorDoodle}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute left-[32px] top-[274px] w-[66px] h-[72px] object-contain pointer-events-none"
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
        <img
          src={moonDoodle}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute right-[58px] top-[742px] w-[55px] h-[60px] object-contain pointer-events-none"
        />

        {/* Hero Header Content (Figma 1:1140: pt:8px, pb:24px) */}
        <div className="pt-[8px] pb-[24px] flex flex-col items-center text-center relative z-10">
          {/* Tagline Pill (1:1142: px:24, py:10, rounded-full) */}
          <div className="inline-flex items-center justify-center px-[24px] py-[10px] rounded-full bg-white/95 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] border border-slate-100">
            <span className="text-[13px] sm:text-[14px] font-semibold leading-[21px] text-[#334155]">
              Let the child be the director, and the actor in his own play
            </span>
          </div>

          {/* Big Editorial Headline + Coral Heart Accent (1:1145: 64px/64px ExtraBold -1.6px) */}
          <div className="mt-[24px] relative inline-block">
            <h2 className="text-[36px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.08] lg:leading-[64px] tracking-[-1.6px] text-[#120f38]">
              Better Future For Your Kids
            </h2>

            {/* Heart Accent Circle (1:1147: 32x32, #f86f53) */}
            <div
              className="hidden sm:flex absolute -right-[24px] -top-[14px] w-[32px] h-[32px] rounded-full bg-[#f86f53] items-center justify-center shadow-md ring-4 ring-[#f7f6fd]"
              aria-hidden="true"
            >
              <svg className="w-[15px] h-[15px] fill-white" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* CTA Pill Button (1:1151: mt:32px, 222x52, #073c96, inner #f86f53 chevron circle) */}
          <a
            href="#campuses"
            className="mt-[32px] inline-flex items-center justify-between w-[222px] h-[52px] pl-[28px] pr-[10px] py-[10px] rounded-full bg-[#073c96] hover:bg-[#052e75] text-white text-[15px] font-bold leading-[22.5px] shadow-[0_12px_24px_rgba(7,60,150,0.34)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore our schools</span>
            <span className="w-[32px] h-[32px] rounded-full bg-[#f86f53] flex items-center justify-center shrink-0">
              <svg
                className="w-[14px] h-[14px] stroke-white"
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

        {/* Core Showcase Zone (Figma 1:1175: 1328 x 398) */}
        <div className="mt-[16px] max-w-[1328px] mx-auto lg:h-[398px] relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Left Student Circle + Coral Circle Backdrop (1:1176) */}
          <div className="relative w-[290px] sm:w-[340px] lg:w-[370px] h-[300px] sm:h-[350px] lg:h-[398px] shrink-0">
            <div
              className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#f86f53] shadow-lg absolute left-[12px] lg:left-[24px] bottom-[6px] lg:bottom-[38px]"
              aria-hidden="true"
            />
            <div className="w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] lg:w-[332.5px] lg:h-[332.5px] rounded-full overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.14)] relative z-10 ml-[24px] lg:ml-[34.75px] mt-[8px] lg:mt-[8.75px] bg-white">
              <img
                src={girlCircleImg}
                alt="Young smiling students in traditional attire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Editorial Slogan (1:1195: w:483, 40px/46px Bold) */}
          <div className="max-w-[483px] mx-auto text-center px-2 z-10">
            <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[46px] text-[#1e293b]">
              SETTING BENCHMARKS
              <br />
              IN QUALITY EDUCATION{" "}
              <span className="text-[#073c96]">SINCE 1952</span>
            </h3>
          </div>

          {/* Right Student Circle + Sunny Olive Circle Backdrop (1:1181) */}
          <div className="relative w-[290px] sm:w-[340px] lg:w-[370px] h-[300px] sm:h-[350px] lg:h-[398px] shrink-0 flex justify-end">
            <div
              className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#c3ce6f] absolute right-[8px] lg:right-[16px] top-0 lg:top-[-10px]"
              aria-hidden="true"
            />
            <div className="w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] lg:w-[332.5px] lg:h-[332.5px] rounded-full overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.14)] relative z-10 mr-[24px] lg:mr-[34.75px] mt-[8px] lg:mt-[8.75px] bg-white">
              <img
                src={boyCircleImg}
                alt="Sindhu Education Society student achievers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom 5 Metrics Row (Figma 1:1196: mt:16px, gap:23px) */}
        <div className="mt-10 lg:mt-[16px] max-w-[1328px] mx-auto lg:h-[119px] flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-[23px] gap-y-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="inline-flex items-start gap-[16px]">
              {/* 64x65 #e0f2fe Badge with 32x33 Figma Icon */}
              <div className="mt-[2px] w-[64px] h-[65px] rounded-full bg-[#e0f2fe] shadow-[0_8px_20px_rgba(7,60,150,0.08)] flex items-center justify-center shrink-0">
                <img
                  src={metric.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-[32px] h-[33px] object-contain"
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <span
                  className={`text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.1] lg:leading-[67px] tracking-[-0.75px] text-[#073c96] ${metric.valueWidth}`}
                >
                  {metric.value}
                </span>
                <span
                  className={`text-[16px] lg:text-[20px] font-medium leading-[19px] text-[#64748b] whitespace-nowrap ${metric.labelWidth}`}
                >
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetterFuture;
