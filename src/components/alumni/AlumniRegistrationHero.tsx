import React, { useState } from 'react';
import clocktowerCampusImg from '../../assets/creative-arts-hero.png';

interface AlumniFormState {
  salutation: string;
  fullName: string;
  mobile: string;
  email: string;
  institution: string;
  educationYear: string;
  degreeClass: string;
  profession: string;
  address: string;
}

const INITIAL_FORM: AlumniFormState = {
  salutation: '',
  fullName: '',
  mobile: '',
  email: '',
  institution: '',
  educationYear: '',
  degreeClass: '',
  profession: '',
  address: '',
};

const SALUTATIONS = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];

const PROFESSIONS = [
  'Academician / Professor',
  'Business / Entrepreneur',
  'Doctor / Healthcare',
  'Engineer / IT Professional',
  'Government / Civil Services',
  'Sports / Athletics',
  'Arts / Media',
  'Other',
];

const DownChevronIcon: React.FC = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    aria-hidden="true"
    className="pointer-events-none shrink-0"
  >
    <path
      d="M17.4303 7.8313L11.7253 13.5363C11.0516 14.21 9.94906 14.21 9.27531 13.5363L3.57031 7.8313"
      stroke="#171717"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const INPUT_CLASS =
  'w-full h-[40px] rounded-[12px] bg-white border border-[#b2dbff] px-[24px] text-[12px] leading-[35px] text-[#262e35] placeholder:text-[#c0c0c0] focus:outline-none focus:border-[#073c96] transition-colors';

const LABEL_CLASS =
  'block text-[14px] leading-[18px] font-normal text-[#262e35] mb-[5px]';

const AlumniRegistrationHero: React.FC = () => {
  const [form, setForm] = useState<AlumniFormState>(INITIAL_FORM);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange =
    (field: keyof AlumniFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errorMsg) setErrorMsg(null);
      if (submittedName) setSubmittedName(null);
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.mobile.trim() || !form.email.trim()) {
      setErrorMsg('Please fill in Full Name, Mobile Number, and Email Address.');
      return;
    }
    const label = [form.salutation, form.fullName.trim()].filter(Boolean).join(' ');
    setSubmittedName(label);
    setErrorMsg(null);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="alumni-register"
      aria-labelledby="alumni-register-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:pl-[81px] xl:pr-[69px] pt-8 xl:pt-[87px]">
        <div className="flex flex-col xl:flex-row items-stretch xl:items-start gap-6 xl:gap-[8px]">
          {/* Left Blue-Tinted Alumni Registration Card (Figma 37:2436: 717x850) */}
          <div className="w-full xl:w-[717px] xl:h-[850px] bg-[#c4deff]/30 pl-5 pr-5 sm:pl-[30px] sm:pr-[42px] pt-[20px] pb-[49px] shrink-0">
            <div className="w-full xl:w-[645px]">
              <p className="text-[16px] leading-[26px] font-semibold text-[#64748b] uppercase">
                REGISTER FOR ALUMNI
              </p>
              <h1
                id="alumni-register-heading"
                className="mt-[5px] text-[24px] sm:text-[28px] leading-[35px] font-semibold text-[#073c96]"
              >
                Become an Alumni Member
              </h1>

              <form onSubmit={handleSubmit} className="mt-[15px]" noValidate>
                {/* 1. Salutation (37:2454) */}
                <div>
                  <label htmlFor="alumni-salutation" className={LABEL_CLASS}>
                    Salutation
                  </label>
                  <div className="relative">
                    <select
                      id="alumni-salutation"
                      value={form.salutation}
                      onChange={handleChange('salutation')}
                      className={`${INPUT_CLASS} appearance-none pr-[44px] ${
                        form.salutation ? 'text-[#262e35]' : 'text-[#c0c0c0]'
                      }`}
                    >
                      <option value="">Salutation</option>
                      {SALUTATIONS.map((s) => (
                        <option key={s} value={s} className="text-[#262e35]">
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-[15px] top-1/2 -translate-y-1/2 flex items-center">
                      <DownChevronIcon />
                    </span>
                  </div>
                </div>

                {/* 2. Full Name (37:2459) */}
                <div className="mt-[14px]">
                  <label htmlFor="alumni-fullname" className={LABEL_CLASS}>
                    Full Name
                  </label>
                  <input
                    id="alumni-fullname"
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange('fullName')}
                    className={INPUT_CLASS}
                  />
                </div>

                {/* 3. Mobile Number (37:2463) */}
                <div className="mt-[14px]">
                  <label htmlFor="alumni-mobile" className={LABEL_CLASS}>
                    Mobile Number
                  </label>
                  <input
                    id="alumni-mobile"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.mobile}
                    onChange={handleChange('mobile')}
                    className={INPUT_CLASS}
                  />
                </div>

                {/* 4. Email Address (37:2467) */}
                <div className="mt-[14px]">
                  <label htmlFor="alumni-email" className={LABEL_CLASS}>
                    Email Address
                  </label>
                  <input
                    id="alumni-email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={INPUT_CLASS}
                  />
                </div>

                {/* 5. School/College Name (37:2471) */}
                <div className="mt-[14px]">
                  <label htmlFor="alumni-institution" className={LABEL_CLASS}>
                    School/College Name
                  </label>
                  <input
                    id="alumni-institution"
                    type="text"
                    placeholder="School/College Name"
                    value={form.institution}
                    onChange={handleChange('institution')}
                    className={INPUT_CLASS}
                  />
                </div>

                {/* 6. Education Year + Degree/Class (37:2475: 348px + 8px gap + 289px) */}
                <div className="mt-[16.5px] grid grid-cols-1 sm:grid-cols-[348fr_289fr] gap-[8px]">
                  <div>
                    <label htmlFor="alumni-year" className={LABEL_CLASS}>
                      Education Year
                    </label>
                    <input
                      id="alumni-year"
                      type="text"
                      placeholder="Education Year"
                      value={form.educationYear}
                      onChange={handleChange('educationYear')}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="alumni-degree" className={LABEL_CLASS}>
                      Degree/Class
                    </label>
                    <input
                      id="alumni-degree"
                      type="text"
                      placeholder="Degree/Class"
                      value={form.degreeClass}
                      onChange={handleChange('degreeClass')}
                      className={`${INPUT_CLASS} sm:pl-[35px]`}
                    />
                  </div>
                </div>

                {/* 7. Profession (37:2484) */}
                <div className="mt-[16.5px]">
                  <label htmlFor="alumni-profession" className={LABEL_CLASS}>
                    Profession
                  </label>
                  <div className="relative">
                    <select
                      id="alumni-profession"
                      value={form.profession}
                      onChange={handleChange('profession')}
                      className={`${INPUT_CLASS} appearance-none pr-[44px] ${
                        form.profession ? 'text-[#262e35]' : 'text-[#c0c0c0]'
                      }`}
                    >
                      <option value="">Select profession</option>
                      {PROFESSIONS.map((p) => (
                        <option key={p} value={p} className="text-[#262e35]">
                          {p}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center">
                      <DownChevronIcon />
                    </span>
                  </div>
                </div>

                {/* 8. Address (37:2489: h=46px) */}
                <div className="mt-[14px]">
                  <label htmlFor="alumni-address" className={LABEL_CLASS}>
                    Address
                  </label>
                  <input
                    id="alumni-address"
                    type="text"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange('address')}
                    className={`${INPUT_CLASS} h-[46px]`}
                  />
                </div>

                {/* 9. Submit CTA (37:2437: 645x54, #40c843) */}
                <button
                  type="submit"
                  className="mt-[27px] w-full h-[54px] rounded-[8px] bg-[#40c843] hover:bg-[#38b53b] transition-colors shadow-[0_2px_4px_-2px_rgba(64,200,67,0.20),0_4px_6px_-1px_rgba(64,200,67,0.30)] flex items-center justify-center gap-[15px] text-[16px] leading-[20px] font-medium text-white cursor-pointer"
                >
                  <span>Apply</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.0234 4.94165L17.0818 9.99998L12.0234 15.0583"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91797 10H16.943"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {errorMsg && (
                  <p
                    role="alert"
                    className="mt-2 text-[12px] leading-[16px] font-medium text-red-600"
                  >
                    {errorMsg}
                  </p>
                )}
                {submittedName && (
                  <p
                    role="status"
                    className="mt-2 text-[12px] leading-[16px] font-medium text-[#15803d]"
                  >
                    Thank you, {submittedName}! Your alumni registration request has been recorded.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Campus Clocktower Photo (Figma 37:2449: 565x850) */}
          <div className="relative w-full h-[420px] sm:h-[600px] xl:w-[565px] xl:h-[850px] overflow-hidden shrink-0 bg-slate-100">
            <img
              src={clocktowerCampusImg}
              alt="Sindhu Education Society clocktower campus building"
              className="w-full h-full object-cover object-center xl:object-fill xl:max-w-none xl:absolute xl:left-[-144.6354%] xl:top-0 xl:w-[369.5677%] xl:h-[111.5373%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniRegistrationHero;

