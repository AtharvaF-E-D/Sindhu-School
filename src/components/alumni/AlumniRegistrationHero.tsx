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
  'w-full h-[42px] rounded-[10px] bg-white border border-[#b2dbff] px-4 text-[13px] text-[#262e35] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#073c96] transition-colors shadow-xs';

const LABEL_CLASS =
  'block text-[13px] leading-[18px] font-medium text-[#262e35] mb-[5px]';

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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:pl-[81px] xl:pr-[69px] pt-4 sm:pt-8 xl:pt-[87px]">
        <div className="flex flex-col xl:flex-row items-stretch xl:items-start gap-4 sm:gap-6 xl:gap-[8px]">
          {/* Top on Mobile / Right on Desktop Campus Clocktower Photo */}
          <div className="order-1 xl:order-2 relative w-full h-[220px] sm:h-[320px] xl:w-[565px] xl:h-[850px] rounded-[24px] xl:rounded-none overflow-hidden shrink-0 bg-slate-100 shadow-sm [transform:translateZ(0)] isolate">
            <img
              src={clocktowerCampusImg}
              alt="Sindhu Education Society clocktower campus building"
              className="w-full h-full object-cover object-center rounded-[24px] xl:rounded-none xl:object-fill xl:max-w-none xl:absolute xl:left-[-144.6354%] xl:top-0 xl:w-[369.5677%] xl:h-[111.5373%]"
            />
          </div>

          {/* Bottom on Mobile / Left on Desktop Blue-Tinted Alumni Registration Card */}
          <div className="order-2 xl:order-1 w-full xl:w-[717px] xl:h-[850px] bg-[#eef6ff] rounded-[24px] xl:rounded-none px-4 py-6 sm:px-8 xl:pl-[30px] xl:pr-[42px] xl:pt-[20px] xl:pb-[49px] shrink-0 border border-[#d6e8fc] xl:border-none shadow-sm xl:shadow-none [transform:translateZ(0)]">
            <div className="w-full xl:w-[645px]">
              <p className="text-[12px] sm:text-[14px] leading-5 font-semibold text-[#64748b] uppercase tracking-wider">
                REGISTER FOR ALUMNI
              </p>
              <h1
                id="alumni-register-heading"
                className="mt-1 text-[22px] sm:text-[28px] leading-[30px] sm:leading-[35px] font-bold text-[#073c96]"
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

                {/* 6. Education Year + Degree/Class */}
                <div className="mt-[16.5px] grid grid-cols-2 gap-2.5 sm:gap-[8px]">
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
                      className={INPUT_CLASS}
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
                  className="mt-[22px] w-full h-[48px] sm:h-[54px] rounded-[10px] bg-[#22c55e] hover:bg-[#16a34a] transition-all shadow-[0_2px_8px_rgba(34,197,94,0.35)] flex items-center justify-center gap-[10px] text-[15px] sm:text-[16px] leading-[20px] font-semibold text-white cursor-pointer"
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
        </div>
      </div>
    </section>
  );
};

export default AlumniRegistrationHero;

