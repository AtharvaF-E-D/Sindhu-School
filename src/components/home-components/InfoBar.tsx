import React from "react";

interface InfoBarProps {
  items?: string[];
}

const defaultItems = [
  "75+ Years of Legacy",
  "15,000+ SES Scholars",
  "400+ Educators",
  "CBSE & State Board",
  "12+ Institutions",
];

const InfoBar: React.FC<InfoBarProps> = ({ items = defaultItems }) => {
  return (
    <div
      className="w-full bg-[#073c96] py-[16px] lg:h-[56px] flex items-center select-none"
      role="region"
      aria-label="Key Highlights"
    >
      <div className="max-w-[1280px] w-full mx-auto px-[16px] flex flex-wrap lg:flex-nowrap items-center justify-center sm:justify-between gap-y-2 gap-x-6 lg:gap-x-8">
        {items.map((item, idx) => (
          <div key={idx} className="inline-flex items-center whitespace-nowrap">
            <span className="text-[14px] sm:text-[16px] font-semibold leading-[24px] text-white">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span
                className="ml-[12px] lg:ml-[24px] text-[16px] font-bold leading-[24px] text-[#93c5fd]"
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
