import React, { useState } from "react";
import capImg from "../../assets/graduation-cap.png";
import atomImg from "../../assets/atom-science.png";
import celebrationImg from "../../assets/home-celebration.jpg";

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  href: string;
}

const notices: NoticeItem[] = [
  {
    id: 1,
    title: "April 2025 | Admissions Open",
    date: "Academic Year 2025–26",
    href: "#admissions",
  },
  {
    id: 2,
    title: "Annual Examination Schedule Released",
    date: "February 2025",
    href: "#academics",
  },
];

const sideTabs = [
  { label: "SKILLUP", key: "skillup" },
  { label: "COURSE", key: "course" },
  { label: "Extracurricular", key: "extracurricular" },
  { label: "MOODLE", key: "moodle" },
];

const AboutSociety: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  return (
    <section
      id="about"
      className="relative w-full bg-white pt-0 pb-0 overflow-hidden select-none"
      aria-label="About Sindhu Education Society"
    >
      {/* Top 1440px Intro Stage: connector line, gradient title, floating line-art graphics */}
      <div className="max-w-[1440px] mx-auto relative px-4">
        {/* Left Floating Graduation Cap */}
        <div className="absolute left-2 sm:left-6 lg:left-[-7px] top-[10px] sm:top-[16px] lg:top-[20px] w-[100px] sm:w-[170px] lg:w-[338px] pointer-events-none z-0">
          <img
            src={capImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain opacity-95"
          />
        </div>

        {/* Right Floating Atom */}
        <div className="absolute right-2 sm:right-6 lg:right-[43px] top-[14px] sm:top-[26px] lg:top-[96px] w-[75px] sm:w-[120px] lg:w-[190px] pointer-events-none z-0">
          <img
            src={atomImg}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain opacity-95"
          />
        </div>

        {/* Vertical Connector Line (Figma 1:497: h:151px, w:2px, #073c96) */}
        <div
          className="mx-auto w-[2px] h-[95px] sm:h-[120px] lg:h-[151px] bg-[#073c96]"
          aria-hidden="true"
        />

        {/* Gradient Heading (matches 3-line layout on mobile, single/2-line on desktop) */}
        <h2
          className="mt-[10px] sm:mt-[8px] lg:mt-[5px] mx-auto max-w-[280px] sm:max-w-[420px] px-2 text-center text-[34px] sm:text-[50px] lg:text-[60px] font-bold leading-[1.12] sm:leading-[1.1] lg:leading-[64px] tracking-[-1px] sm:tracking-[-1.5px] bg-clip-text text-transparent relative z-10"
          style={{
            backgroundImage: "linear-gradient(180deg, #40c843 0%, #073c96 100%)",
          }}
        >
          Sindhu
          <br className="sm:hidden" /> Education
          <br className="sm:hidden" /> Society
        </h2>
      </div>

      {/* Big Blue Featured Container (Figma 1:395) */}
      <div className="mt-[24px] sm:mt-[34px] lg:mt-[41px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[33px]">
        <div className="mx-auto max-w-[1374px] lg:min-h-[601px] bg-[#073c96] rounded-[24px] sm:rounded-[28px] px-5 sm:px-8 lg:px-[48px] pt-6 sm:pt-9 lg:pt-[40px] pb-5 sm:pb-8 lg:pb-[48px] text-white shadow-[0_24px_60px_-15px_rgba(7,60,150,0.3)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8 lg:gap-0">
            {/* Column 1: Text & Notices */}
            <div className="w-full lg:w-[623px] lg:pt-[18px] flex flex-col gap-[16px] sm:gap-[24px] shrink-0">
              <span className="text-[11px] sm:text-[12px] font-bold leading-[16px] tracking-[1.4px] text-[#bfdbfe] uppercase">
                About
              </span>

              <p className="text-[13px] sm:text-[16px] lg:text-[20px] font-normal sm:font-medium lg:font-semibold leading-[20px] sm:leading-[26px] lg:leading-[32px] tracking-[-0.2px] sm:tracking-[-0.5px] lg:tracking-[-0.9px] text-white/95">
                Sindhu Education Society’s glorious journey from humble beginnings to a
                premier educational institution in North Nagpur. Established on 1st July
                1952, ‘Sindhu Education Society’ was the brainchild of a visionary
                educationist, Shri K.C. Bajaj. He and his three brothers migrated to India
                from Pakistan during the partition.
              </p>

              {/* Notices Block */}
              <div className="pt-[4px] sm:pt-[12px] flex flex-col gap-[10px] sm:gap-[12px]">
                {/* Green Header Bar */}
                <div className="h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[12px] bg-[#40c843] px-[16px] flex items-center shadow-xs">
                  <span className="text-[14px] sm:text-[16px] font-bold leading-[22px] sm:leading-[24px] text-white">
                    Notices &amp; Announcements
                  </span>
                </div>

                {/* Notice Cards */}
                {notices.map((notice) => (
                  <a
                    key={notice.id}
                    href={notice.href}
                    className="group min-h-[58px] sm:min-h-[74px] rounded-[10px] sm:rounded-[12px] bg-white/10 hover:bg-white/15 border border-white/10 px-[14px] sm:px-[16px] py-[10px] sm:py-[15px] flex items-center justify-between gap-3 sm:gap-4 transition-colors duration-200 cursor-pointer"
                  >
                    <div>
                      <h4 className="text-[13px] sm:text-[15px] lg:text-[16px] font-bold leading-[18px] sm:leading-[24px] text-white">
                        {notice.title}
                      </h4>
                      <p className="text-[11px] sm:text-[12px] font-normal leading-[15px] sm:leading-[16px] text-[#bfdbfe] mt-0.5">
                        {notice.date}
                      </p>
                    </div>
                    <span
                      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full border border-white/25 group-hover:bg-white/15 flex items-center justify-center shrink-0 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] stroke-current text-white"
                        fill="none"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M9 7h8v8"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Featured Event Photo */}
            <div className="w-full lg:w-[517px] lg:ml-[30px] lg:mt-[59px] shrink-0">
              <div className="w-full h-[190px] sm:h-[280px] lg:h-[382px] rounded-[14px] sm:rounded-[16px] bg-[#fecdd3]/80 border-[3px] sm:border-[4px] border-white/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden">
                <img
                  src={celebrationImg}
                  alt="Sindhu Education Society Trophy Presentation and Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 3: Vertical Partner Labels Strip (Desktop Only) */}
            <div className="hidden lg:flex w-[77px] h-[497px] ml-[31px] mt-[2px] border-l border-white/20 pl-[15px] pt-[22px] pb-[20px] flex-col items-center justify-between shrink-0">
              {sideTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`[writing-mode:vertical-rl] rotate-180 text-[12px] font-semibold leading-[16px] tracking-[1.2px] whitespace-nowrap transition-colors cursor-pointer py-2 ${
                      isActive ? "text-white" : "text-[#bfdbfe] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Bottom Partner Labels Strip (matches screenshot) */}
            <div className="flex lg:hidden items-center justify-between pt-4 pb-1 border-t border-white/15 w-full">
              {sideTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`text-[10px] sm:text-[11px] font-bold tracking-[1.2px] sm:tracking-[1.5px] uppercase transition-colors cursor-pointer px-1 py-1 ${
                      isActive ? "text-white underline underline-offset-4" : "text-[#bfdbfe] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSociety;
