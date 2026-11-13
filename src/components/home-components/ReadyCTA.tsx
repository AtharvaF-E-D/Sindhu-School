import React from "react";
import bannerCeremonyImg from "../../assets/home-cta-ceremony.jpg";

interface ReadyCTAProps {
  transparentBg?: boolean;
}

const ReadyCTA: React.FC<ReadyCTAProps> = ({ transparentBg = false }) => {
  return (
    <section
      id="admissions"
      className={`w-full ${transparentBg ? "bg-transparent" : "bg-white"} pt-4 pb-10 sm:pb-12 lg:pt-0 lg:pb-[56px] select-none`}
      aria-label="Contact Call to Action"
    >
      <div className="max-w-[1361px] mx-auto px-4 xl:px-0">
        {/* Figma CallToActionBannerSection (1:1120: 1361 x 580, rounded:40px, overlapping 170px navy box) */}
        <div className="relative w-full lg:h-[580px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(15,23,42,0.18)]">
          {/* Background Photo (1:1121) */}
          <img
            src={bannerCeremonyImg}
            alt="Sindhu Education Society Event & Faculty"
            className="w-full h-[240px] sm:h-[360px] lg:h-[580px] object-cover object-center"
          />

          {/* Overlapping Navy Callout Box (1:1124: h:170, rounded:24px, p:40px, #111e3b) */}
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:h-[170px] bg-[#111e3b] lg:rounded-[24px] px-6 sm:px-8 lg:px-[40px] py-7 lg:py-[40px] flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* CTA Headline (1:1127: 36px/40px ExtraBold -0.9px) */}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold leading-[1.15] lg:leading-[40px] tracking-[-0.9px] text-white text-center lg:text-left">
              Ready to give your child
              <br />
              perfect beginning?
            </h2>

            {/* Green Contact Pill (1:1129: 551 x 82, rounded-full, #46e6a7) */}
            <div className="w-full lg:w-[551px] lg:h-[82px] rounded-[24px] lg:rounded-full bg-[#46e6a7] px-5 py-4 lg:py-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[27px] shadow-md shrink-0">
              <a
                href="tel:+919765587755"
                className="inline-flex items-center gap-[6px] text-[15px] sm:text-[16px] font-bold leading-[16px] tracking-[-0.3px] text-[#1e293b] hover:opacity-75 transition-opacity whitespace-nowrap"
              >
                <svg
                  className="w-[22px] h-[22px] stroke-[#171717] shrink-0"
                  fill="none"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 01-3.28-2.8 28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
                  />
                </svg>
                <span>+91 97655 87755</span>
              </a>

              <a
                href="mailto:info@sindhueducationsociety.com"
                className="inline-flex items-center gap-[6px] text-[14px] sm:text-[16px] font-bold leading-[16px] tracking-[-0.3px] text-[#1e293b] hover:opacity-75 transition-opacity break-all sm:break-normal"
              >
                <svg
                  className="w-[22px] h-[22px] stroke-[#171717] shrink-0"
                  fill="none"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
                  />
                </svg>
                <span>info@sindhueducationsociety.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyCTA;
