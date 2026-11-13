import React, { useState } from "react";
import khubchandImg from "../../assets/campus-khubchand-large.png";
import gajananImg from "../../assets/campus-gajanan.png";
import pharmacyDeskImg from "../../assets/curriculum-pharmacy-desk.png";
import sportsRaceImg from "../../assets/curriculum-sports-race.jpg";

interface SchoolCard {
  id: string;
  name: string;
  tagline: string;
  board: string;
  grades: string;
  image: string;
  description: string;
  features: string[];
  facilities: string[];
}

const institutions: SchoolCard[] = [
  {
    id: "khubchand",
    name: "Khubchand Bajaj Central Public School",
    tagline: "Flagship CBSE Campus for 21st-Century Leaders",
    board: "CBSE Affiliated",
    grades: "Nursery to Grade XII",
    image: khubchandImg,
    description:
      "A premier English-medium educational institution providing high-standard holistic education under the Central Board of Secondary Education. Equipped with smart interactive classrooms, STEM labs, robotics and sports arenas.",
    features: [
      "CBSE National Curriculum Framework aligned",
      "Experiential STEM & AI Robotics labs",
      "Smart digital interactive panels in every classroom",
      "Full-sized sports track, basketball & indoor sports arena",
    ],
    facilities: ["Smart Classes", "Robotics Lab", "Physics/Chem Labs", "Sports Complex", "Library", "Art Studio"],
  },
  {
    id: "gajanan",
    name: "Shri Gajanan Maharaj High School",
    tagline: "Tradition of Discipline & State Board Merit",
    board: "Maharashtra State Board (SSC)",
    grades: "Grade V to Grade X",
    image: gajananImg,
    description:
      "A cornerstone of secondary education in North Nagpur known for outstanding academic discipline, community service, and consistent top ranks in the Maharashtra SSC board examinations.",
    features: [
      "Maharashtra State Board (SSC) syllabus excellence",
      "Multi-lingual options: English, Hindi, and Marathi mediums",
      "Dedicated science laboratories and computer center",
      "Vibrant cultural clubs, NCC/Scouts, and athletics training",
    ],
    facilities: ["Science Labs", "Computer Centre", "Reading Hall", "Playground", "Scouts & Guides"],
  },
  {
    id: "junior-college",
    name: "Sindhu Junior College of Science, Commerce & Arts",
    tagline: "Empowering Higher Secondary Career Aspirations",
    board: "Maharashtra State Board (HSC)",
    grades: "Grade XI & Grade XII (Junior College)",
    image: sportsRaceImg,
    description:
      "Specialized higher secondary college preparing students for professional careers with structured foundation coaching for JEE, NEET, MHT-CET, CA Foundation, and civil services.",
    features: [
      "Science Stream (PCM / PCB / Computer Science)",
      "Commerce Stream (Accountancy, Economics, Business Studies)",
      "Arts & Humanities Stream with Social Sciences",
      "Regular testing, mentorship and competitive exam guidance",
    ],
    facilities: ["Advanced Science Labs", "Commerce Lab", "Career Cell", "Digital Library", "Conference Hall"],
  },
  {
    id: "pharmacy",
    name: "M. C. Bajaj College of Pharmacy & Research",
    tagline: "Pioneering Professional Healthcare & Pharmaceutical Education",
    board: "PCI & AICTE Approved (Affiliated to MSBTE / RTMNU)",
    grades: "Diploma & Degree in Pharmacy (D.Pharm / B.Pharm)",
    image: pharmacyDeskImg,
    description:
      "A renowned center of pharmaceutical studies equipped with modern formulation laboratories, pharmacognosy research wings, and clinical simulation setups driving healthcare innovation.",
    features: [
      "PCI (Pharmacy Council of India) & AICTE approved programs",
      "Sophisticated machine room, pharmacology & analytical labs",
      "Active industrial MoUs, internships, and campus placement drives",
      "Renowned faculty with active published research and patents",
    ],
    facilities: ["Machine Room", "Pharmacology Lab", "Research Center", "Herbal Garden", "Placement Cell"],
  },
];

const InstitutionsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSchools =
    activeTab === "all"
      ? institutions
      : activeTab === "school"
      ? institutions.filter((s) => s.id === "khubchand" || s.id === "gajanan")
      : activeTab === "higher"
      ? institutions.filter((s) => s.id === "junior-college" || s.id === "pharmacy")
      : institutions;

  return (
    <section id="schools-directory" className="w-full bg-slate-50/70 py-16 sm:py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#073c96] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            ACADEMIC INSTITUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Our Network of <span className="text-[#073c96]">Premier Institutions</span>
          </h2>
          <p className="mt-3.5 text-slate-500 text-sm sm:text-base leading-relaxed">
            From early childhood foundational discovery to senior secondary and professional pharmaceutical higher education, Sindhu Education Society provides lifelong learning pathways.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-7">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#073c96] text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Institutions (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("school")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "school"
                  ? "bg-[#073c96] text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              K-10 Schools
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("higher")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "higher"
                  ? "bg-[#073c96] text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Junior College &amp; Pharmacy
            </button>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSchools.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col group"
            >
              {/* Institution Banner Image */}
              <div className="relative w-full h-56 sm:h-64 bg-slate-100 overflow-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#073c96] shadow-sm backdrop-blur-xs">
                    {inst.board}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/95 text-white shadow-sm backdrop-blur-xs">
                    {inst.grades}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
                    {inst.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    {inst.tagline}
                  </p>
                </div>
              </div>

              {/* Institution Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {inst.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights
                    </span>
                    {inst.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Facilities Badges */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Campus Facilities
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {inst.facilities.map((fac, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#admissions"
                    className="text-xs sm:text-sm font-bold text-[#073c96] hover:text-[#0a2540] inline-flex items-center gap-1 group/btn"
                  >
                    <span>Admission Enquiries</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </a>

                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    Campus Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstitutionsShowcase;

