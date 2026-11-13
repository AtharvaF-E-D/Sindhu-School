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
      {/* Top 1440px Intro Stage: 151px connector line, gradient title, floating line-art graphics */}
      <div className="max-w-[1440px] mx-auto relative">
        {/* Left Floating Graduation Cap (Figma 1:462: x:-7, y:+20 below InfoBar, 338x259) */}
        <div className="hidden lg:block absolute left-[-7px] top-[20px] w-[338px] h-[259px] pointer-events-none z-0">
          <img
            src={capImg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain opacity-95"
          />
        </div>

        {/* Right Floating Atom (Figma 1:470: x:1207 -> right:43px, y:+96 below InfoBar, 190x167) */}
        <div className="hidden lg:block absolute right-[43px] top-[96px] w-[190px] h-[167px] pointer-events-none z-0">
          <img
            src={atomImg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain opacity-95"
          />
        </div>

        {/* Vertical Connector Line (Figma 1:497: h:151px, w:2px, #073c96) */}
        <div
          className="mx-auto w-[2px] h-[88px] sm:h-[120px] lg:h-[151px] bg-[#073c96]"
          aria-hidden="true"
        />

        {/* Gradient Heading (Figma 1:498: w:383, 60px/64px Bold -1.5px, vertical gradient #40c843 -> #073c96, mt:5px) */}
        <h2
          className="mt-[5px] mx-auto max-w-[383px] px-4 sm:px-0 text-center text-[42px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.08] lg:leading-[64px] tracking-[-1.5px] bg-clip-text text-transparent relative z-10"
          style={{
            backgroundImage: "linear-gradient(180deg, #40c843 0%, #073c96 100%)",
          }}
        >
          Sindhu Education Society
        </h2>
      </div>

      {/* Big Blue Featured Container (Figma 1:395: mt:41px, w:1374, min-h:601, bg:#073c96, rounded:24px, p:40/48/48/48) */}
      <div className="mt-[32px] lg:mt-[41px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[33px]">
        <div className="mx-auto max-w-[1374px] lg:min-h-[601px] bg-[#073c96] rounded-[20px] sm:rounded-[24px] px-6 sm:px-10 lg:px-[48px] pt-8 sm:pt-10 lg:pt-[40px] pb-8 sm:pb-12 lg:pb-[48px] text-white shadow-[0_24px_60px_-15px_rgba(7,60,150,0.3)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-0">
            {/* Column 1: Text & Notices (Figma 1:397: w:623, pt:5.5px, gap:24px) */}
            <div className="w-full lg:w-[623px] lg:pt-[18px] flex flex-col gap-[24px] shrink-0">
              <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] text-[#bfdbfe] uppercase">
                About
              </span>

              <p className="pt-[2.5px] text-[17px] sm:text-[19px] lg:text-[20px] font-semibold leading-[1.6] lg:leading-[32px] tracking-[-0.6px] lg:tracking-[-0.9px] text-white">
                Sindhu Education Society’s glorious journey from humble beginnings to a
                premier educational institution in North Nagpur. Established on 1st July
                1952, ‘Sindhu Education Society’ was the brainchild of a visionary
                educationist, Shri K.C. Bajaj. He and his three brothers migrated to India
                from Pakistan during the partition.
              </p>

              {/* Notices Block (Figma 1:401: pt:16px, gap:12px) */}
              <div className="pt-[16px] flex flex-col gap-[12px]">
                {/* Green Header Bar (1:402: h:52, rounded:12px, bg:#40c843) */}
                <div className="h-[52px] rounded-[12px] bg-[#40c843] px-[16px] flex items-center shadow-sm">
                  <span className="text-[16px] font-bold leading-[24px] text-white">
                    Notices &amp; Announcements
                  </span>
                </div>

                {/* Notice Cards (1:406 & 1:414: h:74, rounded:12px, bg-white/10 border-white/10) */}
                {notices.map((notice) => (
                  <a
                    key={notice.id}
                    href={notice.href}
                    className="group min-h-[74px] rounded-[12px] bg-white/10 hover:bg-white/15 border border-white/10 px-[16px] py-[15px] flex items-center justify-between gap-4 transition-colors duration-200 cursor-pointer"
                  >
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold leading-[24px] text-white">
                        {notice.title}
                      </h4>
                      <p className="text-[12px] font-normal leading-[16px] text-[#bfdbfe]">
                        {notice.date}
                      </p>
                    </div>
                    <span
                      className="w-[32px] h-[32px] rounded-full border border-white/25 group-hover:bg-white/15 flex items-center justify-center shrink-0 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-[14px] h-[14px] stroke-current text-white"
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

            {/* Column 2: Featured Event Photo (Figma 1:423: ml:30px, w:517, h:382, border-4 border-white/30 bg-[#fecdd3]/80 rounded:16px) */}
            <div className="w-full lg:w-[517px] lg:ml-[30px] lg:mt-[59px] shrink-0">
              <div className="w-full h-[260px] sm:h-[340px] lg:h-[382px] rounded-[16px] bg-[#fecdd3]/80 border-[4px] border-white/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden">
                <img
                  src={celebrationImg}
                  alt="Sindhu Education Society Trophy Presentation and Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 3: Vertical Partner Labels Strip (Figma 1:426: ml:31px, w:77, h:497) */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSociety;
