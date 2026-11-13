import React from "react";
import sportsRaceImg from "../../assets/curriculum-sports-race.jpg";
import pharmacyDeskImg from "../../assets/curriculum-pharmacy-desk.png";
import libraryStudentImg from "../../assets/curriculum-library-student.jpg";
import girlPaintingImg from "../../assets/curriculum-girl-painting.jpg";

const SchoolsCurriculumHighlight: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md relative overflow-hidden">
          
          {/* Top-Right Green Accent */}
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#22c55e]/15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#073c96] bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                EXPLORE ACADEMICS
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
                Schools &amp; <span className="text-[#073c96]">Curriculum</span>
              </h2>

              <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Discover our diverse schools and comprehensive curriculum designed to inspire learning, nurture talent, and empower every student to achieve their full potential.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#schools-curriculum"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow-md"
                >
                  <span>See Our Schools &amp; Curriculum</span>
                  <span>→</span>
                </a>

                <a
                  href="#admissions"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Admissions Info</span>
                </a>
              </div>
            </div>

            {/* Right Mini-Gallery matching the 4 images */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 max-w-[340px] mx-auto lg:mx-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-sm border-2 border-white bg-slate-100 mx-auto">
                <img
                  src={sportsRaceImg}
                  alt="Sports day race"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shadow-sm border-2 border-white bg-slate-100 mx-auto">
                <img
                  src={pharmacyDeskImg}
                  alt="M.C. Bajaj College of Pharmacy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shadow-sm border-2 border-white bg-slate-100 mx-auto">
                <img
                  src={libraryStudentImg}
                  alt="Library student"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-sm border-2 border-white bg-slate-100 mx-auto">
                <img
                  src={girlPaintingImg}
                  alt="Girl painting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsCurriculumHighlight;

