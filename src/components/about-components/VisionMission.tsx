import React, { useState } from "react";

interface PrincipleItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  iconBg: string;
  accentColor: string;
  icon: React.ReactNode;
  points: string[];
}

const principles: PrincipleItem[] = [
  {
    id: "vision",
    tag: "FORWARD FOCUS",
    title: "Our Vision",
    subtitle:
      "To be a distinguished center of educational excellence that inspires intellectual curiosity, cultural rootedness, and global adaptability.",
    iconBg: "bg-blue-50 text-[#073c96]",
    accentColor: "border-blue-100 group-hover:border-[#073c96]/30",
    icon: (
      <svg className="w-7 h-7 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    points: [
      "Fostering independent critical thinking & creativity",
      "Building inclusive, responsible & ethical global citizens",
      "Pioneering digital-ready & sustainable education models",
    ],
  },
  {
    id: "mission",
    tag: "CORE PURPOSE",
    title: "Our Mission",
    subtitle:
      "To deliver accessible, high-caliber education across our campuses, balancing academic rigor, moral integrity, physical fitness, and civic responsibility.",
    iconBg: "bg-emerald-50 text-emerald-600",
    accentColor: "border-emerald-100 group-hover:border-emerald-600/30",
    icon: (
      <svg className="w-7 h-7 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a5 5 0 01-.58 1.48L12 21l-3.01-5.15a5 5 0 116.6-1.48z"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    points: [
      "Holistic, learner-centered pedagogy for every child",
      "Advanced science, robotics & digital laboratory spaces",
      "Empathetic mentorship from dedicated educators",
    ],
  },
  {
    id: "values",
    tag: "FOUNDATION",
    title: "Core Values",
    subtitle:
      "Rooted in the vision of our founders, our guiding pillars inspire honesty, empathy, and pursuit of excellence in every classroom.",
    iconBg: "bg-amber-50 text-amber-600",
    accentColor: "border-amber-100 group-hover:border-amber-600/30",
    icon: (
      <svg className="w-7 h-7 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    points: [
      "Integrity & Truth in every academic and social endeavor",
      "Empathy & Mutual Respect across all communities",
      "Perseverance & Innovation beyond established benchmarks",
    ],
  },
];

const VisionMission: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="vision-mission"
      className="relative w-full bg-[#f8fbff] py-16 sm:py-24 overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#073c96] text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span>Our Guiding Principles</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.18] mb-5">
            Empowering Minds, Inspiring Lifelong Growth
          </h3>

          <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed">
            Since 1952, Sindhu Education Society has remained dedicated to nurturing well-rounded
            individuals prepared to lead with wisdom, character, and confidence.
          </p>
        </div>

        {/* 3-Column Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8 items-stretch">
          {principles.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-[26px] sm:rounded-[32px] p-7 sm:p-9 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between border ${item.accentColor}`}
            >
              <div>
                {/* Header Row: Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                  {item.title}
                </h4>

                {/* Card Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {item.subtitle}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-2 border-t border-slate-100">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="leading-normal">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-semibold text-[#073c96] group-hover:text-blue-700 transition-colors">
                <span>Learn more about our standards</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

