import React, { useState } from "react";
import faqHeroBg from "../../assets/academics/faq-hero-bg.jpg";

interface InquiryFormState {
  studentName: string;
  studentEmail: string;
  mobile: string;
  academicYear: string;
}

const INITIAL_FORM: InquiryFormState = {
  studentName: "",
  studentEmail: "",
  mobile: "",
  academicYear: "",
};

const FaqHeroSection: React.FC = () => {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="faq-hero"
      aria-labelledby="faq-hero-heading"
      className="w-full bg-[#1b1819]"
    >
      <div className="relative w-full lg:min-h-[580px] overflow-hidden bg-[#1b1819]">
        <img
          src={faqHeroBg}
          alt="Sindhu Education Society campus aerial view"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[129px] lg:pr-[208px] pt-7 sm:pt-10 lg:pt-[84px] pb-10 sm:pb-14 lg:pb-[87px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-[48px]">
            {/* Left Copy & CTA */}
            <div className="w-full lg:w-[530px] shrink-0 lg:pt-[92px]">
              <h1
                id="faq-hero-heading"
                className="font-bold lg:font-extrabold text-[26px] xs:text-[28px] sm:text-[36px] xl:text-[48px] leading-[1.2] xl:leading-[54px] tracking-normal lg:tracking-[-1.35px] text-white max-w-[480px]"
              >
                Begin Your Journey with Us
              </h1>

              <p className="mt-3 sm:mt-4 lg:mt-[20px] text-[13px] xs:text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[19px] sm:leading-[24px] font-normal text-white/95 max-w-[518px]">
                Give your child the opportunity to learn, grow, and succeed.
                Explore our admission process and take the first step towards a
                brighter future with Sindhu Education Society.
              </p>

              <div className="mt-4 sm:mt-6 lg:mt-[32px]">
                <a
                  href="#schools-curriculum"
                  className="inline-flex items-center justify-center min-w-[130px] sm:min-w-[150px] h-[38px] sm:h-[40px] px-5 sm:px-[28px] rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-[12.5px] sm:text-[12px] leading-[16px] font-medium tracking-[0.2px] shadow-sm transition-colors"
                >
                  See Our School
                </a>
              </div>
            </div>

            {/* Right: Admission Inquiry Form Card */}
            <div className="w-full max-w-[430px] mx-auto lg:mx-0 lg:w-[430px] lg:min-h-[429px] shrink-0 rounded-[14px] bg-[#073c96] border border-[#0b48b0] p-5 sm:p-[24px] flex flex-col justify-center gap-3.5 sm:gap-[16px] shadow-2xl">
              <div className="w-full">
                <h2 className="text-[17px] xs:text-[18px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-bold tracking-[0.45px] uppercase text-white">
                  ADMISSION OPEN
                </h2>
                <p className="text-[11.5px] xs:text-[12px] sm:text-[12px] leading-[16px] font-normal text-white/80 mt-0.5">
                  We will get in touch with you!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-3 sm:gap-[20px] lg:gap-[24px]"
              >
                <input
                  type="text"
                  name="studentName"
                  aria-label="Student Name"
                  placeholder="Student Name"
                  value={form.studentName}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm((prev) => ({ ...prev, studentName: e.target.value }));
                  }}
                  required
                  className="w-full h-[38px] sm:h-[35px] rounded-[6px] bg-white px-[14px] py-[8px] sm:py-[9px] text-[12.5px] sm:text-[12px] leading-[16px] font-normal text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#22c55e]"
                />

                <input
                  type="email"
                  name="studentEmail"
                  aria-label="Student Email"
                  placeholder="Student Email"
                  value={form.studentEmail}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm((prev) => ({ ...prev, studentEmail: e.target.value }));
                  }}
                  required
                  className="w-full h-[38px] sm:h-[35px] rounded-[6px] bg-white px-[14px] py-[8px] sm:py-[9px] text-[12.5px] sm:text-[12px] leading-[16px] font-normal text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#22c55e]"
                />

                <input
                  type="tel"
                  name="mobile"
                  aria-label="Mobile"
                  placeholder="Mobile"
                  value={form.mobile}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm((prev) => ({ ...prev, mobile: e.target.value }));
                  }}
                  required
                  className="w-full h-[38px] sm:h-[35px] rounded-[6px] bg-white px-[14px] py-[8px] sm:py-[9px] text-[12.5px] sm:text-[12px] leading-[16px] font-normal text-[#111827] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#22c55e]"
                />

                <div className="relative w-full">
                  <select
                    name="academicYear"
                    aria-label="Academic Year"
                    value={form.academicYear}
                    onChange={(e) => {
                      setSubmitted(false);
                      setForm((prev) => ({
                        ...prev,
                        academicYear: e.target.value,
                      }));
                    }}
                    className="w-full h-[38px] sm:h-[32px] appearance-none rounded-[6px] bg-white px-[14px] pr-[36px] text-[12.5px] sm:text-[12px] leading-[16px] font-normal text-[#111827] outline-none focus:ring-2 focus:ring-[#22c55e] cursor-pointer"
                  >
                    <option value="">Academic Year</option>
                    <option value="2026-27">2026–2027</option>
                    <option value="2027-28">2027–2028</option>
                  </select>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 w-[18px] h-[18px]"
                  >
                    <path
                      d="M5.4 7.2L9 10.8L12.6 7.2"
                      stroke="#6b7280"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <button
                  type="submit"
                  className="w-full h-[40px] sm:h-[36px] rounded-[6px] bg-[#1d1447] hover:bg-[#140d33] text-white text-[12.5px] sm:text-[12px] leading-[16px] font-bold tracking-[0.6px] uppercase flex items-center justify-center transition-colors cursor-pointer"
                >
                  Send
                </button>
              </form>

              {submitted && (
                <p
                  role="status"
                  className="text-[12px] leading-[16px] text-[#bbf7d0] font-medium text-center"
                >
                  Thank you! Our admissions team will get in touch with you shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHeroSection;
