import React, { useState } from "react";
import mgHighSchoolImg from "../../assets/schools/mg-high-school-assembly.png";
import mgEnglishPrimaryImg from "../../assets/schools/mg-english-primary-high-school.png";
import mgKindergartenImg from "../../assets/schools/mg-kindergarten.png";
import khubchandCentralImg from "../../assets/schools/khubchand-central-public-school.png";
import khubchandJuniorImg from "../../assets/schools/khubchand-junior-college.png";
import kcPharmacyImg from "../../assets/schools/kc-bajaj-pharmacy-college.png";
import chirayuEducationImg from "../../assets/schools/chirayu-education-college.png";
import onkarlalHighImg from "../../assets/schools/onkarlal-sindhu-high-school.png";
import mgHindiPrimaryImg from "../../assets/schools/mg-hindi-primary-school.png";
import gajananHighImg from "../../assets/schools/gajanan-maharaj-high-school.png";

export interface SchoolItem {
  id: string;
  name: string;
  image: string;
  board: string;
  grades: string;
  location: string;
  highlights: string[];
  description: string;
  cropStyle?: React.CSSProperties;
}

const CHIRAYU_CROP_STYLE: React.CSSProperties = {
  left: "-39.32%",
  top: "-3.32%",
  width: "189.15%",
  height: "105.89%",
  maxWidth: "none",
};

const schoolsList: SchoolItem[] = [
  {
    id: "mg-high-school",
    name: "Mahatma Gandhi Centennial Sindhu High School",
    image: mgHighSchoolImg,
    board: "Maharashtra State Board (SSC)",
    grades: "Grade V to Grade X",
    location: "K.C. Bajaj Marg, Jaripatka, Nagpur",
    highlights: [
      "Spacious Assembly Quadrangle",
      "Comprehensive Science Labs",
      "Sports & Physical Training",
    ],
    description:
      "A flagship institution under Sindhu Education Society providing holistic secondary education with disciplined academic culture and state board excellence.",
  },
  {
    id: "mg-english-primary",
    name: "Mahatma Gandhi Centennial Sindhu English Primary High school & Junior College",
    image: mgEnglishPrimaryImg,
    board: "English Medium / State Board",
    grades: "Primary to Higher Secondary",
    location: "K.C. Bajaj Marg, Jaripatka, Nagpur",
    highlights: [
      "English Medium Fluency",
      "Interactive Classrooms",
      "Integrated Junior College Wing",
    ],
    description:
      "Modern multi-story educational campus fostering strong English language communication, foundational numeracy, and disciplined higher secondary streams.",
  },
  {
    id: "mg-kindergarten",
    name: "Mahatma Gandhi Kindergarten School.",
    image: mgKindergartenImg,
    board: "Foundational NEP 2020",
    grades: "Nursery, LKG & UKG",
    location: "Jaripatka, Nagpur",
    highlights: [
      "Play-based Learning",
      "Activity Slides & Toys",
      "Phonetics & Sensory Development",
    ],
    description:
      "A vibrant early-learning haven where toddlers discover the joy of school through playful motor exercises, colorful alphabet stimulation, and caring mentorship.",
  },
  {
    id: "khubchand-central",
    name: "Khubchand Bajaj Central Public School,",
    image: khubchandCentralImg,
    board: "CBSE Affiliated",
    grades: "Nursery to Grade XII",
    location: "Jaripatka, Nagpur",
    highlights: [
      "CBSE National Curriculum",
      "Smart Digital Panels",
      "Robotics & Innovation Lab",
    ],
    description:
      "The premier CBSE-affiliated campus of Sindhu Education Society featuring futuristic smart classrooms, robotics labs, and comprehensive athletics grounds.",
  },
  {
    id: "khubchand-junior",
    name: "Khubchand Bajaj Junior College.",
    image: khubchandJuniorImg,
    board: "Maharashtra State Board (HSC) & D.El.Ed",
    grades: "XI, XII & D.El.Ed",
    location: "WCL Road, Mankapur / Jaripatka, Nagpur",
    highlights: [
      "Science & Commerce Streams",
      "Teacher Training (D.El.Ed)",
      "Competitive Coaching Support",
    ],
    description:
      "Focused junior college campus dedicated to preparing scholars for board honors and competitive exams alongside state-approved teacher education credentials.",
  },
  {
    id: "kc-pharmacy",
    name: "K.C. Bajaj College of Pharmacy & Research",
    image: kcPharmacyImg,
    board: "PCI & AICTE Approved",
    grades: "D.Pharm & B.Pharm",
    location: "Sindhu Education Society Campus, Jaripatka, Nagpur",
    highlights: [
      "PCI & AICTE Accreditations",
      "Modern Analytical & Formulation Labs",
      "Strong Industry Placement Record",
    ],
    description:
      "Recognized center of pharmaceutical studies providing degree and diploma programs with cutting-edge laboratories, clinical training, and active campus placements.",
  },
  {
    id: "chirayu-education-1",
    name: "Chirayu K.C. Bajaj College of Education",
    image: chirayuEducationImg,
    board: "NCTE & University Affiliated",
    grades: "B.Ed & Educational Studies",
    location: "Plot No. 1 & 2, Near CMPDI, Jaripatka, Nagpur",
    highlights: [
      "Teacher Training Pedagogy",
      "Psychology & Micro-Teaching Labs",
      "Qualified Faculty Mentors",
    ],
    description:
      "Pioneering college dedicated to shaping future generations of educators through modern teacher training methodologies, psychological guidance, and field practicums.",
    cropStyle: CHIRAYU_CROP_STYLE,
  },
  {
    id: "chirayu-education-2",
    name: "Chirayu K.C. Bajaj College of Education",
    image: chirayuEducationImg,
    board: "NCTE Approved D.T.Ed Wing",
    grades: "D.T.Ed & Primary Teacher Training",
    location: "Jaripatka, Nagpur",
    highlights: [
      "Primary Teacher Certification",
      "Curriculum Design Workshops",
      "Community Outreach Drives",
    ],
    description:
      "Equipping passionate educators with foundational teaching certifications and child-centric pedagogical approaches for pre-primary and primary schools.",
    cropStyle: CHIRAYU_CROP_STYLE,
  },
  {
    id: "onkarlal-high",
    name: "Onkarlal Sindhu High School.",
    image: onkarlalHighImg,
    board: "Maharashtra State Board",
    grades: "Grade V to Grade X",
    location: "K.C. Bajaj Marg, Jaripatka, Nagpur",
    highlights: [
      "Decades of Heritage",
      "Value-Based Character Building",
      "Active Scouts & Sports Wings",
    ],
    description:
      "A pillar of quality community education providing accessible and disciplined schooling with strong roots in values, community service, and academic progress.",
  },
  {
    id: "mg-hindi-primary",
    name: "Mahatma Gandhi Centennial Sindhu Hindi Primary School.",
    image: mgHindiPrimaryImg,
    board: "Semi-English & Hindi Medium",
    grades: "Grade 1st to 4th",
    location: "K.C. Bajaj Marg, Gate No. 4, Jaripatka, Nagpur-14",
    highlights: [
      "Bilingual Instruction",
      "Strong Arithmetic & Reading Base",
      "Nutritional & Health Camps",
    ],
    description:
      "Dedicated primary learning center fostering early reading fluency in Hindi and English with individualized attention and positive formative habits.",
  },
  {
    id: "mg-junior-college",
    name: "Mahatma Gandhi Centennial Sindhu Junior college",
    image: khubchandJuniorImg,
    board: "Maharashtra State Board (HSC)",
    grades: "Grade XI & XII (Science & Arts)",
    location: "K.C. Bajaj Marg, Jaripatka, Nagpur",
    highlights: [
      "Science & Arts Streams",
      "Dedicated Physics & Chemistry Labs",
      "Board Merit Record",
    ],
    description:
      "Providing supportive higher secondary coaching in Science and Arts with laboratory-backed experiential learning and dedicated board exam preparation.",
  },
  {
    id: "gajanan-high",
    name: "Shri Gajanan Maharaj high-school",
    image: gajananHighImg,
    board: "Maharashtra State Board",
    grades: "Grade V to Grade X",
    location: "Borgad, Katol Road, Nagpur",
    highlights: [
      "Serene Natural Campus",
      "Expansive Outdoor Sports Ground",
      "High Board Pass Rate",
    ],
    description:
      "Situated amidst scenic greenery in Borgad, this school combines disciplined academic schooling with ample outdoor physical education and peaceful study surroundings.",
  },
];

const OurSchoolsGrid: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<SchoolItem | null>(null);

  return (
    <section
      id="our-schools-network"
      className="w-full bg-white pt-6 sm:pt-10 lg:pt-[16px] pb-14 sm:pb-20 lg:pb-[258px] select-none"
    >
      <div className="max-w-[1321px] mx-auto px-4 sm:px-6 xl:px-0">
        {/* SECTION HEADER (Figma 1:1765: eyebrow at y:699, subtitle y:720..774, grid y:813) */}
        <div className="text-center max-w-[840px] mx-auto mb-8 sm:mb-10 lg:mb-[39px]">
          <span className="block text-[11px] font-bold leading-[16.5px] tracking-[1.1px] uppercase text-[#9ca3af] mb-[4px]">
            Our Schools
          </span>

          <p className="text-[#64748b] text-[16px] sm:text-[18px] lg:text-[20px] leading-[27px] tracking-[-0.75px] font-normal max-w-[840px] mx-auto">
            Explore our network of schools, each dedicated to providing quality
            education, fostering creativity, and shaping a brighter future for
            every student.
          </p>
        </div>

        {/* 4-COLUMN GRID (Figma: w:313, gap-x:23, image h:272 r:26, 50x50 blue arrow btn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-[23px] lg:gap-y-[61px]">
          {schoolsList.map((school) => (
            <div
              key={school.id}
              onClick={() => setSelectedSchool(school)}
              className="group flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Card Image (313 x 272, rounded:26px) */}
              <div className="relative w-full h-[220px] sm:h-[250px] lg:h-[272px] rounded-[26px] overflow-hidden bg-slate-100">
                <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <img
                    src={school.image}
                    alt={school.name}
                    style={school.cropStyle}
                    className={
                      school.cropStyle
                        ? "relative block"
                        : "w-full h-full object-cover object-center"
                    }
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption Row: Title + 50x50 Circular Blue Arrow Button */}
              <div className="mt-[17px] flex items-start justify-between gap-[10px] lg:min-h-[57px]">
                <h3 className="text-[16px] font-semibold text-[#171717] leading-[20px] group-hover:text-[#073c96] transition-colors duration-200">
                  {school.name}
                </h3>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSchool(school);
                  }}
                  className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#073c96] text-white flex items-center justify-center shrink-0 group-hover:bg-[#06307a] transition-all duration-200 cursor-pointer"
                  aria-label={`View details for ${school.name}`}
                >
                  <svg
                    className="w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] stroke-current transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Dialog on Card / Button Click */}
      {selectedSchool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedSchool(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-school-title"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-56 sm:h-64 bg-slate-100">
              <img
                src={selectedSchool.image}
                alt={selectedSchool.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedSchool(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs inline-block mb-1.5">
                  {selectedSchool.board}
                </span>
                <h3
                  id="modal-school-title"
                  className="text-xl sm:text-2xl font-bold leading-tight"
                >
                  {selectedSchool.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedSchool.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 w-24">
                    Location:
                  </span>
                  <span className="text-slate-600">
                    {selectedSchool.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 w-24">
                    Offerings:
                  </span>
                  <span className="text-slate-600">
                    {selectedSchool.grades}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Campus Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSchool.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-[#073c96]"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSchool(null)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#admissions"
                  onClick={() => setSelectedSchool(null)}
                  className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#073c96] hover:bg-[#06307a] text-white shadow-xs transition-colors"
                >
                  Admissions Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurSchoolsGrid;
