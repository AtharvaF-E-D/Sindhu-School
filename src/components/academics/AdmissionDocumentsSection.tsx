import React from "react";
import faqCampusImg from "../../assets/academics/faq-campus.jpg";
import faqHandRightImg from "../../assets/academics/faq-hand-right.png";

interface RequiredDocument {
  title: string;
  subtitle: string;
}

const REQUIRED_DOCUMENTS: RequiredDocument[] = [
  { title: "Adhar card", subtitle: "Xerox Copy" },
  { title: "Birth certificate", subtitle: "Xerox Copy" },
  { title: "Caste certificate", subtitle: "Xerox Copy" },
  { title: "School leaving", subtitle: "Original" },
  { title: "Marksheet", subtitle: "Xerox Copy" },
  { title: "Passport size photos", subtitle: "Xerox Copy" },
];

const AdmissionDocumentsSection: React.FC = () => {
  return (
    <section
      id="admission-documents"
      aria-labelledby="documents-required-heading"
      className="w-full bg-[#d1e5ff]/30 pt-12 sm:pt-16 lg:pt-[73.5px] pb-14 sm:pb-20 lg:pb-[110.5px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[44.5px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 xl:gap-0">
          {/* Left: Campus Image Card */}
          <div className="w-full lg:w-[31%] xl:w-[423.67px] h-[240px] sm:h-[258px] shrink-0 rounded-[12px] border border-[#e7e5e4] bg-white/[0.002] overflow-hidden shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
            <img
              src={faqCampusImg}
              alt="Sindhu Education Society campus courtyard and buildings"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Center: Welcome & Documents Copy */}
          <div className="w-full lg:flex-1 xl:w-[361px] xl:flex-none xl:ml-[40px] flex flex-col items-start">
            <p className="text-[12px] leading-[16px] font-bold tracking-[0.6px] uppercase text-[#073c96]">
              WELCOME TO Sindhu education
            </p>

            <h2
              id="documents-required-heading"
              className="mt-[23px] text-[26px] sm:text-[30px] leading-[34px] sm:leading-[39px] font-bold tracking-[0px] text-[#111827]"
            >
              Documents Required for Admission
            </h2>

            <div className="pt-[30px] pb-[39px] w-full">
              <p className="text-[12px] leading-[19.5px] font-normal tracking-[0px] text-[#57534e]">
                Please keep the following documents ready to ensure a smooth and
                hassle-free admission process.
              </p>
            </div>

            <a
              href="#about-society"
              className="inline-flex items-center justify-center h-[34px] px-[16px] py-[8px] rounded-[4px] border border-[#073c96] text-[#073c96] hover:bg-[#073c96] hover:text-white transition-colors text-[12px] leading-[16px] font-bold tracking-[0.6px] uppercase whitespace-nowrap"
            >
              KNOW MORE ABOUT US
            </a>
          </div>

          {/* Right: 2x3 Document Checklist Card */}
          <div className="w-full lg:w-[37%] xl:w-[490px] xl:ml-[36.33px] min-h-[258px] shrink-0 rounded-[12px] bg-white border border-[#c0d7ff] p-[24px] flex items-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[24px]">
              {REQUIRED_DOCUMENTS.map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-start gap-[10px] min-w-0"
                >
                  <img
                    src={faqHandRightImg}
                    alt=""
                    aria-hidden="true"
                    className="w-[16px] h-[16px] shrink-0 object-contain block"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[16px] leading-[20px] font-bold tracking-[0px] text-[#073c96]">
                      {doc.title}
                    </span>
                    <span className="text-[10px] leading-[12.5px] font-normal tracking-[0px] text-[#57534e]">
                      {doc.subtitle}
                    </span>
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

export default AdmissionDocumentsSection;

