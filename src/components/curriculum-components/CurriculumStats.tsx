import React from "react";

interface StatItem {
  value: string;
  label: string;
  sub: string;
}

const stats: StatItem[] = [
  {
    value: "12+",
    label: "Educational Institutions",
    sub: "Campuses across Nagpur",
  },
  {
    value: "15,000+",
    label: "Active Scholars",
    sub: "Nurtured each academic year",
  },
  {
    value: "100%",
    label: "Board Pass Rate",
    sub: "CBSE & Maharashtra State Board",
  },
  {
    value: "70+",
    label: "Years of Trust",
    sub: "Excellence since 1952",
  },
  {
    value: "400+",
    label: "Expert Educators",
    sub: "Committed mentor community",
  },
];

const CurriculumStats: React.FC = () => {
  return (
    <section className="w-full bg-[#073c96] text-white py-10 sm:py-12 relative overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-emerald-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-5 lg:pt-0" : ""
              } ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#38e89f] tracking-tight leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-blue-100/80 font-normal mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumStats;

