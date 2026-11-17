import React from "react";
import faqCampusImg from "../../assets/academics/faq-campus.png";
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
      className="w-full bg-[#f0f6ff] pt-7 sm:pt-12 lg:pt-[73.5px] pb-8 sm:pb-16 lg:pb-[110.5px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[44.5px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 xl:gap-0">
          {/* Left: Campus Image Card */}
          <div className="w-full lg:w-[31%] xl:w-[423.67px] aspect-[16/10] sm:aspect-[423/258] sm:h-[258px] shrink-0 rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
            <img
              src={faqCampusImg}
              alt="Sunshine International School campus grounds"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Center: Welcome & Documents Copy */}
          <div className="w-full lg:flex-1 xl:w-[361px] xl:flex-none xl:ml-[40px] flex flex-col items-start">
            <p className="text-[10px] sm:text-[12px] leading-[16px] font-bold tracking-[0.6px] uppercase text-[#073c96]">
              WELCOME TO SINDHU EDUCATION
            </p>

            <h2
              id="documents-required-heading"
              className="mt-1.5 sm:mt-[23px] text-[18px] xs:text-[20px] sm:text-[26px] lg:text-[30px] leading-[24px] xs:leading-[26px] sm:leading-[34px] lg:leading-[39px] font-bold tracking-[0px] text-[#111827]"
            >
              Documents Required for Admission
            </h2>

            <div className="pt-1.5 sm:pt-[30px] pb-3 sm:pb-[39px] w-full">
              <p className="text-[11px] sm:text-[12px] leading-[16.5px] sm:leading-[19.5px] font-normal tracking-[0px] text-[#57534e]">
                Please keep the following documents ready to ensure a smooth and
                hassle-free admission process.
              </p>
            </div>

            <a
              href="#about-society"
              className="inline-flex items-center justify-center h-[30px] sm:h-[34px] px-3 sm:px-[16px] py-[6px] sm:py-[8px] rounded-[4px] border border-[#073c96] text-[#073c96] hover:bg-[#073c96] hover:text-white transition-colors text-[10px] sm:text-[12px] font-bold tracking-[0.6px] uppercase whitespace-nowrap"
            >
              KNOW MORE ABOUT US
            </a>
          </div>

          {/* Right: 2x3 Document Checklist Card */}
          <div className="w-full lg:w-[37%] xl:w-[490px] xl:ml-[36.33px] min-h-[190px] sm:min-h-[258px] shrink-0 rounded-[14px] sm:rounded-[16px] bg-white border border-[#c0d7ff] p-4 sm:p-[24px] flex items-center shadow-xs">
            <div className="w-full grid grid-cols-2 gap-x-2.5 sm:gap-x-[16px] gap-y-3 sm:gap-y-[24px]">
              {REQUIRED_DOCUMENTS.map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-start gap-1.5 sm:gap-[10px] min-w-0"
                >
                  <img
                    src={faqHandRightImg}
                    alt=""
                    aria-hidden="true"
                    className="w-[13px] h-[13px] sm:w-[16px] sm:h-[16px] shrink-0 object-contain block mt-0.5"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10.5px] xs:text-[11px] sm:text-[15px] xl:text-[16px] leading-[14px] sm:leading-[20px] font-bold tracking-[0px] text-[#073c96]">
                      {doc.title}
                    </span>
                    <span className="text-[8px] xs:text-[8.5px] sm:text-[10px] leading-[11px] sm:leading-[12.5px] font-normal tracking-[0px] text-[#57534e]">
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

