import React, { useState } from "react";

interface StageInfo {
  id: string;
  stageName: string;
  ageGroup: string;
  grades: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  overview: string;
  keyPillars: { title: string; desc: string }[];
  learningOutcomes: string[];
}

const curriculumStages: StageInfo[] = [
  {
    id: "foundational",
    stageName: "Foundational Stage",
    ageGroup: "Ages 3 – 8 Years",
    grades: "Nursery, KG & Grades 1 – 2",
    color: "#22c55e",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    overview:
      "A flexible, multi-level, play-based curriculum focusing on cognitive stimulation, psychomotor skills, emotional balance, and early multilingual communication.",
    keyPillars: [
      {
        title: "Play & Discovery",
        desc: "Tactile activities, storytelling, music, puppet play, and sensory motor exercises.",
      },
      {
        title: "Early Literacy & Numeracy",
        desc: "Phonics, alphabet recognition, number sense, and foundational counting.",
      },
      {
        title: "Social & Emotional Well-Being",
        desc: "Sharing, collaboration, empathy, and positive classroom citizenship habits.",
      },
    ],
    learningOutcomes: [
      "Natural curiosity and joy of self-expression",
      "Basic bilingual comprehension & phonetics",
      "Confidence in physical coordination & fine motor dexterity",
    ],
  },
  {
    id: "preparatory",
    stageName: "Preparatory Stage",
    ageGroup: "Ages 8 – 11 Years",
    grades: "Grades 3 – 5",
    color: "#0284c7",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    overview:
      "Gradual transition from play-based learning to structured textbook study while retaining hands-on, experiential, and inquiry-led exploration across subjects.",
    keyPillars: [
      {
        title: "Experiential Sciences",
        desc: "Nature observation, simple everyday science experiments, and environmental care.",
      },
      {
        title: "Mathematical Thinking",
        desc: "Logical operations, geometric patterns, mental math, and practical problem-solving.",
      },
      {
        title: "Creative Arts & Communication",
        desc: "Creative writing, reading clubs, visual art projects, and stage performances.",
      },
    ],
    learningOutcomes: [
      "Proficient reading, writing, and clear oral articulation",
      "Scientific questioning and analytical observation skills",
      "Active team participation and project ownership",
    ],
  },
  {
    id: "middle",
    stageName: "Middle Stage",
    ageGroup: "Ages 11 – 14 Years",
    grades: "Grades 6 – 8",
    color: "#073c96",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-900",
    overview:
      "Subject-focused instruction introducing abstract concepts in mathematics, sciences, social studies, languages, coding, and vocational arts with specialized teachers.",
    keyPillars: [
      {
        title: "Laboratory Sciences",
        desc: "Hands-on Physics, Chemistry, and Biology lab experiments fostering scientific inquiry.",
      },
      {
        title: "Digital Literacy & Coding",
        desc: "Computer programming, algorithms, digital ethics, and introductory robotics.",
      },
      {
        title: "Critical Thinking & Humanities",
        desc: "Debates, historical analysis, geography, civics, and global current affairs.",
      },
    ],
    learningOutcomes: [
      "Mastery over foundational algebra, geometry, and sciences",
      "Competency in digital presentation and basic coding",
      "Independent research ability and collaborative mindset",
    ],
  },
  {
    id: "secondary",
    stageName: "Secondary Stage",
    ageGroup: "Ages 14 – 16 Years",
    grades: "Grades 9 – 10",
    color: "#7c3aed",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    overview:
      "Rigorous academic training preparing students for national and state board examinations (CBSE & SSC) while nurturing critical decision-making and career interests.",
    keyPillars: [
      {
        title: "Board Exam Mastery",
        desc: "Systematic revision, mock examinations, in-depth subject coverage, and mentoring.",
      },
      {
        title: "Analytical & Applied STEM",
        desc: "Advanced science projects, mathematical proofs, and technical workshops.",
      },
      {
        title: "Career Counseling & Aptitude",
        desc: "Psychometric profiling, stream selection seminars, and industry exposure.",
      },
    ],
    learningOutcomes: [
      "Exceptional academic performance in CBSE & State Board exams",
      "Strong conceptual foundation for future competitive exams",
      "Clear personal strengths and career trajectory awareness",
    ],
  },
  {
    id: "senior-secondary",
    stageName: "Senior Secondary & Professional",
    ageGroup: "Ages 16 – 21 Years",
    grades: "Grades 11 – 12 & Pharmacy College",
    color: "#e11d48",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    overview:
      "Deep specialization into Science, Commerce, Arts, or Professional Healthcare (Pharmacy). Integrated entrance preparation alongside rigorous university standards.",
    keyPillars: [
      {
        title: "Specialized Academic Streams",
        desc: "Physics, Chem, Math, Bio (PCM/PCB), Accountancy, Economics, and Social Sciences.",
      },
      {
        title: "Competitive Exam Guidance",
        desc: "Integrated preparation for JEE, NEET, MHT-CET, CA Foundation, and GPAT.",
      },
      {
        title: "Pharmacy & Clinical Research",
        desc: "D.Pharm & B.Pharm curricula approved by PCI & AICTE with formulation laboratories.",
      },
    ],
    learningOutcomes: [
      "High rankings in competitive entrances and professional admissions",
      "Real-world internship readiness and clinical laboratory skills",
      "Professional ethics, leadership, and research acumen",
    ],
  },
];

const CurriculumFramework: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>("foundational");

  const current = curriculumStages.find((s) => s.id === selectedStage) || curriculumStages[0];

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#073c96] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            PEDAGOGICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Our Progressive <span className="text-[#073c96]">Curriculum Framework</span>
          </h2>
          <p className="mt-3.5 text-slate-500 text-sm sm:text-base leading-relaxed">
            Aligned with the National Education Policy (NEP 2020), our 5-tier academic roadmap ensures age-appropriate cognitive, creative, and moral development.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {curriculumStages.map((stage) => {
            const isSelected = stage.id === selectedStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStage(stage.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#073c96] text-white border-[#073c96] shadow-lg shadow-blue-900/20 scale-[1.02]"
                    : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <div>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${
                      isSelected ? "bg-white/20 text-white" : `${stage.badgeBg} ${stage.badgeText}`
                    }`}
                  >
                    {stage.grades}
                  </span>
                  <h4 className="text-sm font-bold leading-snug">
                    {stage.stageName}
                  </h4>
                </div>
                <span
                  className={`text-[11px] mt-2 block font-medium ${
                    isSelected ? "text-blue-100" : "text-slate-400"
                  }`}
                >
                  {stage.ageGroup}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Stage Overview & Outcomes */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${current.badgeBg} ${current.badgeText}`}>
                    {current.grades}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {current.ageGroup}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mt-3">
                  {current.stageName}
                </h3>

                <p className="mt-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {current.overview}
                </p>

                {/* Key Learning Outcomes */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Expected Developmental Milestones
                  </h5>
                  <ul className="space-y-2.5">
                    {current.learningOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#073c96] hover:bg-[#06307a] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Apply for this Stage</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3 Pillar Cards for this stage */}
            <div className="lg:col-span-7 flex flex-col gap-4 justify-center">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Curricular Focus Areas
              </h5>
              {current.keyPillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#073c96] font-bold text-sm flex items-center justify-center shrink-0">
                      0{pIdx + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumFramework;

