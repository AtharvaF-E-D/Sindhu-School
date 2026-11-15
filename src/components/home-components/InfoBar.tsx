import React from "react";

interface InfoBarProps {
  items?: string[];
}

const defaultItems = [
  "20+ Instructor",
  "500+ Online Courses",
  "24 Hours Support",
  "Course Certification",
  "12+ Institutions",
  "75+ Years of Legacy",
];

const InfoBar: React.FC<InfoBarProps> = ({ items = defaultItems }) => {
  return (
    <div
      className="w-full bg-[#073c96] py-[13px] sm:py-[16px] lg:h-[56px] flex items-center select-none overflow-x-auto scrollbar-none"
      role="region"
      aria-label="Key Highlights"
    >
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 flex flex-nowrap items-center justify-start lg:justify-between gap-x-5 sm:gap-x-8 shrink-0 min-w-max">
        {items.map((item, idx) => (
          <div key={idx} className="inline-flex items-center whitespace-nowrap">
            <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-semibold leading-[22px] sm:leading-[24px] text-white">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span
                className="ml-[10px] sm:ml-[16px] lg:ml-[24px] text-[15px] sm:text-[16px] font-bold leading-[24px] text-[#93c5fd]"
                aria-hidden="true"
              >
                +
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBar;
