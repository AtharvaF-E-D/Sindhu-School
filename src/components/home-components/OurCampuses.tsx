import React, { useState } from "react";
import khubchandLarge from "../../assets/home-khubchand.png";
import khubchandThumb from "../../assets/campus-khubchand-thumb.png";
import gajananImg from "../../assets/campus-gajanan.png";
import pharmacyImg from "../../assets/campus-pharmacy.png";

interface Campus {
  id: number;
  name: string;
  thumb: string;
  large: string;
  href: string;
}

const campuses: Campus[] = [
  {
    id: 0,
    name: "Khubchand Bajaj Central Public School",
    thumb: khubchandThumb,
    large: khubchandLarge,
    href: "#schools-curriculum",
  },
  {
    id: 1,
    name: "Shri Gajanan Maharaj high-school",
    thumb: gajananImg,
    large: gajananImg,
    href: "#schools-curriculum",
  },
  {
    id: 2,
    name: "K.C. Bajaj College of Pharmacy & Research",
    thumb: pharmacyImg,
    large: pharmacyImg,
    href: "#schools-curriculum",
  },
];

const OurCampuses: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = campuses[selectedIdx];

  return (
    <section
      id="campuses"
      className="w-full bg-white pt-[64px] lg:pt-[97px] pb-[56px] lg:pb-[94px] select-none"
      aria-label="Our Campuses"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-0">
        {/* Header Row: Left Title & Subtitle (545px) + Right 3 Thumbnails (543px, gap:16px) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0">
          {/* Left Copy Block (Figma 1:502) */}
          <div className="w-full lg:w-[545px] flex flex-col gap-[10px]">
            <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] text-[#073c96]">
              Our Schools
            </span>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] lg:leading-[40px] text-[#0f172a]">
              Explore our vibrant
              <br />
              Campuses of <span className="text-[#073c96]">Sindhu Education</span>
            </h2>
            <p className="max-w-[511px] text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#64748b]">
              Sindhu Education Society’s glorious journey from humble beginnings to a
              premier educational institution in North Nagpur.
            </p>
          </div>

          {/* Right Thumbnails (Figma 1:506: w:543, gap:16px, 3 cards 170px wide) */}
          <div className="w-full lg:w-[543px] grid grid-cols-3 gap-[12px] sm:gap-[16px] lg:pt-[21px]">
            {campuses.map((campus, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={campus.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-full lg:w-[170px] h-[72px] sm:h-[90px] lg:h-[103px] rounded-[12px] overflow-hidden bg-[#f1f5f9] border transition-colors duration-200 ${
                      isSelected
                        ? "border-[#073c96]"
                        : "border-[#e2e8f0] group-hover:border-[#94a3b8]"
                    }`}
                  >
                    <img
                      src={campus.thumb}
                      alt={campus.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="pt-[4px] max-w-[116px] text-[9px] font-semibold leading-[13px] text-[#334155] line-clamp-2">
                    {campus.name}
                  </span>
                  <span className="text-[8px] font-medium leading-[12px] text-[#2faa55] group-hover:underline">
                    View
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Featured Campus Photo (Figma 1:531: mt:48px, 1280x500, rounded:24px) */}
        <div className="mt-[36px] lg:mt-[48px] w-full h-[260px] sm:h-[380px] lg:h-[500px] rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-slate-100">
          <img
            src={current.large}
            alt={current.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom CTA Button (Figma 1:533: mt:26px, 242x54, rounded:8px, bg:#40c843) */}
        <div className="mt-[26px] flex justify-center">
          <a
            href={current.href}
            className="inline-flex items-center justify-center gap-[15px] w-[242px] h-[54px] px-[24px] py-[14px] rounded-[8px] bg-[#40c843] hover:bg-[#35b538] text-white text-[16px] font-medium leading-[20px] shadow-[0_12px_24px_-6px_rgba(64,200,67,0.45)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View All Campuses</span>
            <svg
              className="w-[20px] h-[20px] shrink-0 stroke-current"
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
