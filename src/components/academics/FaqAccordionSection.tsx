import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "State Board or CBSE - Which is better for my child?",
    answer:
      "Both have their merits. State Boards are more localized, while CBSE follows a national curriculum. Consider factors like your location and future plans.",
  },
  {
    id: "faq-2",
    question: "What's the difference between State Board and CBSE?",
    answer:
      "The Maharashtra State Board (SSC/HSC) emphasizes regional context, languages, and state-level entrance preparation, whereas CBSE follows a uniform national NCERT curriculum suited for transferable families and all-India competitive exams.",
  },
  {
    id: "faq-3",
    question:
      "Does the school provide transportation services, and how are the charges determined?",
    answer:
      "Yes, safe school bus transportation is available across major residential routes in Nagpur, with charges calculated transparently based on route zone and distance.",
  },
  {
    id: "faq-4",
    question:
      "Is there a system to keep parents informed about their child's progress and school activities?",
    answer:
      "Yes, through the Kids Protect App, scheduled Parent-Teacher Meetings, and regular notices, parents receive timely updates on attendance, homework, exam performance, and school activities.",
  },
  {
    id: "faq-5",
    question: "How is student security ensured within the school premises?",
    answer:
      "All Sindhu Education Society campuses maintain CCTV surveillance, controlled entry gates with trained security staff, visitor registration, and supervised student dispersal.",
  },
  {
    id: "faq-6",
    question: "What is the admission process, and how can I apply?",
    answer:
      "Parents can submit the online Admission Open inquiry form above or visit the school office to collect the prospectus and complete admission by submitting the required documents.",
  },
  {
    id: "faq-7",
    question: "Up to which standard does the school provide education?",
    answer:
      "Sindhu Education Society institutions offer education from Pre-Primary (Nursery, KG I & KG II), Primary, and Secondary (up to Class X) through Junior College (Class XI–XII) and Senior College.",
  },
  {
    id: "faq-8",
    question:
      "What courses are offered by the colleges under Sindhu Education Society?",
    answer:
      "Our Junior and Senior Colleges offer streams across Science, Commerce, Arts, Computer Science, Pharmacy, and Diploma in Elementary Education (D.El.Ed), along with undergraduate and postgraduate degree programs.",
  },
  {
    id: "faq-9",
    question:
      "Does the school have NCC training, and is there a Scout/Guide camp organized?",
    answer:
      "Yes, students actively participate in National Cadet Corps (NCC) training as well as regular Scout and Guide camps that nurture discipline, leadership, teamwork, and civic values.",
  },
];

const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-questions"
      aria-labelledby="faq-section-heading"
      className="w-full bg-white pt-14 sm:pt-20 lg:pt-[123px] pb-12 sm:pb-16 lg:pb-[96px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[74px]">
        {/* HeaderSection */}
        <div className="w-full pt-[6px] flex flex-col items-center text-center gap-[20px]">
          <p className="text-[11px] leading-[16.5px] font-bold tracking-[2.75px] uppercase text-[#334155]">
            Feel free to contact us
          </p>
          <h2
            id="faq-section-heading"
            className="max-w-[518px] text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.06] lg:leading-[56px] font-bold tracking-[-1.4px] text-[#0f172a]"
          >
            Do You Have Any Questions?
          </h2>
        </div>

        {/* AccordionList */}
        <div className="mt-[48px] w-full flex flex-col gap-[14px]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <article
                key={item.id}
                id={item.id}
                className={
                  isOpen
                    ? "w-full bg-white border border-[#e2e8f0]/70 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] transition-all duration-200"
                    : "w-full bg-[#ecf2fa]/85 border border-[#e2eaf5] rounded-[24px] sm:rounded-full transition-all duration-200"
                }
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(idx)}
                  className={
                    isOpen
                      ? "w-full px-5 sm:px-[28px] pt-5 sm:pt-[24px] pb-[8px] flex items-center justify-between gap-4 text-left cursor-pointer"
                      : "w-full min-h-[64px] px-5 sm:px-[28px] py-[14px] flex items-center justify-between gap-4 text-left cursor-pointer"
                  }
                >
                  <span className="text-[15px] sm:text-[16.5px] leading-[22.69px] font-semibold text-[#0f172a]">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={
                      isOpen
                        ? "w-[36px] h-[36px] shrink-0 rounded-full bg-[#e8eef8] flex items-center justify-center text-[#334155]"
                        : "w-[36px] h-[36px] shrink-0 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#334155]"
                    }
                  >
                    {isOpen ? (
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5"
                          stroke="#334155"
                          strokeWidth="1.46"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M7 2.333v9.334M2.333 7h9.334"
                          stroke="#334155"
                          strokeWidth="1.46"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-[28px] pt-[3.25px] pb-5 sm:pb-[24px]"
                  >
                    <p className="max-w-[971px] text-[14px] leading-[22.75px] font-normal text-[#64748b]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;

