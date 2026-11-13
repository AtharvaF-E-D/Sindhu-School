import React, { useState } from "react";
import societyCelebrationImg from "../../assets/society-celebration.png";

interface TimelineMilestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

const milestones: TimelineMilestone[] = [
  {
    year: "1952",
    badge: "FOUNDING MOMENT",
    title: "The Visionary Inception",
    description:
      "On 1st July 1952, 'Sindhu Education Society' was established in Jaripatka, Nagpur, as the brainchild of visionary educationist Shri K.C. Bajaj and his brothers following their migration during the partition.",
    highlights: [
      "Humble start with a small classroom for refugee children",
      "Core mission of selfless service and universal access to education",
    ],
  },
  {
    year: "1968",
    badge: "GROWTH & ACCREDITATION",
    title: "Secondary Education Wing",
    description:
      "Rapid community trust led to the expansion of comprehensive secondary education, formalizing Maharashtra State Board accreditations and welcoming students across North Nagpur.",
    highlights: [
      "Dedicated high school building construction",
      "Pioneered early science clubs and community literacy drives",
    ],
  },
  {
    year: "1984",
    badge: "ACADEMIC DIVERSIFICATION",
    title: "Junior College & Science Labs",
    description:
      "Recognizing the need for higher secondary training, Sindhu Junior College was inaugurated with dedicated physics, chemistry, and biology experimental laboratories.",
    highlights: [
      "Introduction of Science, Commerce & Arts streams",
      "First batch of state board merit rank holders",
    ],
  },
  {
    year: "2002",
    badge: "PROFESSIONAL EXCELLENCE",
    title: "K.C. Bajaj College of Pharmacy",
    description:
      "The society expanded into professional higher education by establishing the K.C. Bajaj College of Pharmacy & Research, bridging academia with pharmaceutical industry standards.",
    highlights: [
      "PCI and AICTE approved degree & diploma programs",
      "Advanced pharmacology and research laboratories",
    ],
  },
  {
    year: "2014",
    badge: "NATIONAL BENCHMARK",
    title: "Khubchand Bajaj Central Public School (CBSE)",
    description:
      "To meet global pedagogical standards, the flagship CBSE-affiliated Central Public School campus was established with digital smart classrooms and expansive sports grounds.",
    highlights: [
      "CBSE Affiliation with future-ready curricula",
      "State-of-the-art sports complex and cultural auditoriums",
    ],
  },
  {
    year: "Today",
    badge: "75+ YEARS OF LEGACY",
    title: "A Premier Educational Citadel",
    description:
      "Today, Sindhu Education Society proudly mentors over 15,000 scholars through 400+ educators across 12 institutions, preparing leaders who excel in every sphere of life.",
    highlights: [
      "15,000+ active scholars across multiple campuses",
      "Integration of AI literacy, robotics & holistic development",
    ],
  },
];

const OurHeritage: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  return (
    <section
      id="heritage"
      className="relative w-full bg-[#f8fbff] py-16 sm:py-24 lg:py-28 select-none overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef4ff] border border-[#d8e5ff] text-[#073c96] text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span>Our Heritage &amp; Journey • Since 1952</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#101935] tracking-tight leading-[1.18] mb-5">
            A Glorious Legacy of Resilience and Excellence
          </h2>

          <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed">
            From humble beginnings following the partition to becoming a hallmark of quality
            education in North Nagpur — discover the 75-year journey of Sindhu Education Society.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FOUNDER SPOTLIGHT CARD                                                    */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-[0_15px_40px_rgba(7,60,150,0.06)] border border-blue-50/80 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-[11px] font-bold tracking-widest text-[#073c96] uppercase bg-blue-50 px-3 py-1 rounded-md">
                FOUNDER'S STORY
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101935] tracking-tight">
                Shri K.C. Bajaj &amp; The Founding Vision
              </h3>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-[1.8] font-normal">
                Established on <strong>1st July 1952</strong>, Sindhu Education Society was the
                brainchild of visionary educationist <strong>Shri K.C. Bajaj</strong>. Having
                migrated to India from Pakistan during the partition with his three brothers, he
                dedicated his life to providing quality, affordable, and accessible education to
                rebuild displaced families and empower future generations in North Nagpur.
              </p>

              <blockquote className="border-l-4 border-[#38c187] pl-4 sm:pl-5 py-1 text-slate-700 italic text-sm sm:text-base leading-relaxed bg-slate-50/70 rounded-r-xl">
                &ldquo;Education is the greatest gift one can give to society. It breaks barriers of
                adversity and builds self-reliant, compassionate citizens.&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38c187]" />
                  Established: 1st July 1952
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#073c96]" />
                  Headquarters: Jaripatka, Nagpur
                </span>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={societyCelebrationImg}
                  alt="Sindhu Education Society foundation and celebration gathering"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                    Decades of Educational Excellence &amp; Community Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE TIMELINE / MILESTONES                                         */}
        {/* ========================================================================= */}
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-[#101935] tracking-tight mb-8 text-center sm:text-left">
            Key Historical Milestones
          </h3>

          {/* Timeline Grid: 3 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                onClick={() => setSelectedMilestone(idx)}
                className={`relative bg-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  selectedMilestone === idx
                    ? "border-[#073c96] shadow-xl ring-2 ring-[#073c96]/15 -translate-y-1"
                    : "border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200"
                }`}
              >
                <div>
                  {/* Card Header: Year Pill + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-2xl sm:text-3xl font-black text-[#073c96] tracking-tight">
                      {m.year}
                    </span>
                    <span className="text-[10.5px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {m.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {m.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5">
                    {m.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {m.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[12px] text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38c187] mt-1.5 shrink-0" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHeritage;

