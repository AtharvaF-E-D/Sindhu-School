import React from "react";

interface TopBarProps {
  location?: string;
  email?: string;
  phone?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  location = "884 Kampala, Uganda eLearning Platform",
  email = "support@histudy.com",
  phone = "+12 (123) 456 78900",
}) => {
  return (
    <header className="w-full bg-[#073c96] text-white text-xs sm:text-[13px] font-normal leading-normal select-none">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Location */}
        <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <svg
            className="w-3.5 h-3.5 shrink-0 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4.2-4.4-7-8.2-7-12a7 7 0 1 1 14 0c0 3.8-2.8 7.6-7 12z"
            />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className="py-0.5 leading-normal">{location}</span>
        </div>

        {/* Right: Email & Phone */}
        <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center text-white/90">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
              />
            </svg>
            <span className="py-0.5 leading-normal">{email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <span className="py-0.5 leading-normal">{phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
