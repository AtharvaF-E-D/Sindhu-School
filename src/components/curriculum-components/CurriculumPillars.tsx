import React from "react";
import sportsRaceImg from "../../assets/curriculum-sports-race.jpg";
import girlPaintingImg from "../../assets/curriculum-girl-painting.jpg";
import libraryStudentImg from "../../assets/curriculum-library-student.jpg";
import pharmacyDeskImg from "../../assets/curriculum-pharmacy-desk.png";

interface PillarItem {
  tag: string;
  title: string;
  desc: string;
  image: string;
  points: string[];
}

const pillars: PillarItem[] = [
  {
    tag: "PHYSICAL EDUCATION & ATHLETICS",
    title: "Champions on Field and in Life",
    desc: "Comprehensive physical education program promoting teamwork, stamina, competitive grit, and sportsmanship through daily training and annual athletic meets.",
    image: sportsRaceImg,
    points: [
      "Standard running tracks and multi-sport athletic fields",
      "Specialized coaching in cricket, football, basketball & yoga",
      "Inter-school championships and state-level tournament representation",
    ],
  },
  {
    tag: "VISUAL & PERFORMING ARTS",
    title: "Nurturing Unbounded Imagination",
    desc: "Dedicated art studios, craft workshops, music rooms, and drama theaters giving every scholar the freedom to discover and cultivate their artistic voice.",
    image: girlPaintingImg,
    points: [
      "Watercolor, acrylic painting, sculpture & classical sketching",
      "Instrumental & vocal Indian classical and western music",
      "Annual cultural showcases and national exhibition participation",
    ],
  },
  {
    tag: "LIBRARY & INTELLECTUAL INQUIRY",
    title: "A Lifelong Passion for Reading & Discovery",
    desc: "Expansive library collections spanning classical literature, global encyclopedias, digital research journals, and cozy reading corners for every grade level.",
    image: libraryStudentImg,
    points: [
      "Over 25,000+ curated volumes, reference sets, and e-book terminals",
      "Quiet independent study carrels and discussion circles",
      "Book clubs, author interactions, and literary quiz competitions",
    ],
  },
  {
    tag: "PROFESSIONAL & CLINICAL EXCELLENCE",
    title: "Bridging Secondary Education with Industry",
    desc: "Advanced institutional training through M. C. Bajaj College of Pharmacy & Research, opening pathways in pharmaceutical chemistry, formulation science, and healthcare leadership.",
    image: pharmacyDeskImg,
    points: [
      "State-of-the-art pharmaceutics and pharmacology laboratories",
      "Direct exposure to healthcare equipment and research methodologies",
      "Recognized by PCI & AICTE with strong industrial placement links",
    ],
  },
];

const CurriculumPillars: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#073c96] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            BEYOND TEXTBOOKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Holistic Development <span className="text-[#073c96]">Pillars</span>
          </h2>
          <p className="mt-3.5 text-slate-500 text-sm sm:text-base leading-relaxed">
            Our curriculum integrates sports, artistic creativity, library inquiry, and scientific innovation into a cohesive daily journey for every learner.
          </p>
        </div>

        {/* 2x2 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 sm:h-60 bg-slate-100 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#073c96] backdrop-blur-xs">
                  {pillar.tag}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl sm:text-2xl font-bold tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {pillar.desc}
                </p>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-[#073c96] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        ●
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurriculumPillars;

