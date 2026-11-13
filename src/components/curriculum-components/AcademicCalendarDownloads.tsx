import React from "react";

interface DownloadItem {
  title: string;
  category: string;
  size: string;
  description: string;
}

const downloads: DownloadItem[] = [
  {
    title: "Comprehensive Curriculum Prospectus",
    category: "Academic Syllabus",
    size: "3.4 MB PDF",
    description: "Detailed subject mapping, evaluation scheme, and NEP 2020 learning outcomes across grades.",
  },
  {
    title: "Annual Academic Calendar 2026–27",
    category: "Important Dates",
    size: "1.2 MB PDF",
    description: "Term dates, examination schedules, national holidays, and parent-teacher conference schedules.",
  },
  {
    title: "Sports & Co-Curricular Activity Guide",
    category: "Student Life",
    size: "2.1 MB PDF",
    description: "Inter-school sports tournaments, cultural festivals, clubs, and scout/guide activity roster.",
  },
  {
    title: "Laboratory & Safety Manual",
    category: "Campus Protocols",
    size: "1.8 MB PDF",
    description: "Protocols and laboratory conduct guidelines for physics, chemistry, biology, and pharmacy research labs.",
  },
];

const AcademicCalendarDownloads: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#073c96] to-[#0a2540] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#38e89f] block mb-2">
                RESOURCES &amp; DOWNLOADS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Academic Guides &amp; Calendars
              </h3>
              <p className="mt-3 text-blue-100/80 text-sm leading-relaxed">
                Download syllabus handbooks, exam schedules, and institutional guides to plan ahead for the upcoming academic session.
              </p>
            </div>

            {/* Right Column 2x2 Download Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {downloads.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/15 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-2">
                      <span className="font-semibold uppercase tracking-wider">{item.category}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide">{item.size}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#38e89f] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-blue-100/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert(`Downloading ${item.title}...`)}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#38e89f] transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicCalendarDownloads;

