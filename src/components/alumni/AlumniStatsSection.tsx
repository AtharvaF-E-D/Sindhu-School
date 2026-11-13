import React from 'react';

interface AlumniStatItem {
  id: string;
  titleLines: string[];
  description: string;
  icon: React.ReactNode;
}

const ALUMNI_STATS: AlumniStatItem[] = [
  {
    id: 'schools',
    titleLines: ['10+ Schools &', 'Colleges'],
    description: 'Find alumni living in your city\n& connect with them',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M19 14H33C33.5519 14 34 14.4481 34 15V55C34 55.5519 33.5519 56 33 56H19C18.4481 56 18 55.5519 18 55V15C18 14.4481 18.4481 14 19 14V14"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path d="M18 17L26 10L34 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M22 21H25V21V25V25H22V25V21V21V21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M27 21H30V21V25V25H27V25V21V21V21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M22 28H25V28V32V32H22V32V28V28V28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M27 28H30V28V32V32H27V32V28V28V28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M22 35H25V35V39V39H22V39V35V35V35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M27 35H30V35V39V39H27V39V35V35V35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M34 26L47 20V56H34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M34 26H47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M37 31H40V31V35V35H37V35V31V31V31" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M42 31H45V31V35V35H42V35V31V31V31" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M37 38H40V38V42V42H37V42V38V38V38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M42 38H45V38V42V42H42V42V38V38V38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M24 56V47H28V56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M13.0028 56C11.0028 53 10.0028 49 13.0028 46C16.0028 43 19.0028 46 19.0028 50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M14 56V48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M52.0028 55.9999C50.0028 52.9999 49.0028 47.9999 52.0028 44.9999C55.0028 41.9999 58.0028 44.9999 58.0028 49.9999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M53 56V48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M8 56H58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
      </svg>
    ),
  },
  {
    id: 'groups',
    titleLines: ['25+ Interest Groups'],
    description: 'Connect with the alumni from\nsame interest groups and\ngrow your professional\nnetwork.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 12L16 19L32 26L48 19L32 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M23 22.5V30C23 30 27 34 32 34C37 34 41 30 41 30V22.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M19 20.5V30C19 32 17 33 17 33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M25 33V38C25 41.866 28.134 45 32 45C35.866 45 39 41.866 39 38V33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M25 36.5C24 36.5 23 37.5 23 38.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M39 36.5C40 36.5 41 37.5 41 38.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M17 56C17 48 23 46 27 46L32 50L37 46C41 46 47 48 47 56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M32 50V56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
      </svg>
    ),
  },
  {
    id: 'members',
    titleLines: ['25000+ Members'],
    description: 'Explore complete alumni\ndirectory & connect with\nalumni with your interests &\ndomain.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M23 12H43C44.6557 12 46 13.3443 46 15V47C46 48.6557 44.6557 50 43 50H23C21.3443 50 20 48.6557 20 47V15C20 13.3443 21.3443 12 23 12V12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path d="M20 20V24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M20 47H43C44.657 47 46 45.657 46 44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M23 50H43C44.657 50 46 48.657 46 47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M33 21L26 24.5L33 28L40 24.5L33 21" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path d="M28 25.5V28.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path
          d="M29.7969 29C29.7969 30.7662 31.2307 32.2 32.9969 32.2C34.763 32.2 36.1969 30.7662 36.1969 29C36.1969 27.2339 34.763 25.8 32.9969 25.8C31.2307 25.8 29.7969 27.2339 29.7969 29V29"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path d="M27 38.5C27 35 29.5 34 33 34C36.5 34 39 35 39 38.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
      </svg>
    ),
  },
  {
    id: 'profile',
    titleLines: ['Your Alumni Profile'],
    description: 'Create & complete your\nalumni profile and remain\nconnected with all\nopportunities matching.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M21 16L22 13L23 16L26 17L23 18L22 21L21 18L18 17L21 16"
          fill="#40C843"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path
          d="M30.5 14H45.5C46.3279 14 47 14.6721 47 15.5V34.5C47 35.3279 46.3279 36 45.5 36H30.5C29.6721 36 29 35.3279 29 34.5V15.5C29 14.6721 29.6721 14 30.5 14V14"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path
          d="M35.2031 21C35.2031 22.5453 36.4578 23.8 38.0031 23.8C39.5485 23.8 40.8031 22.5453 40.8031 21C40.8031 19.4546 39.5485 18.2 38.0031 18.2C36.4578 18.2 35.2031 19.4546 35.2031 21V21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path d="M33 29C33 26.5 35 25.5 38 25.5C41 25.5 43 26.5 43 29" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="#40C843" />
        <path
          d="M15.3813 26.7997L31.0317 23.4731C31.842 23.3009 32.6385 23.8181 32.8107 24.6285L36.969 44.1914C37.1412 45.0018 36.624 45.7983 35.8136 45.9705L20.1633 49.2971C19.3529 49.4693 18.5564 48.9521 18.3842 48.1418L14.2259 28.5788C14.0538 27.769 14.5715 26.9718 15.3813 26.7997V26.7997"
          fill="#40C843"
          fillOpacity="0.2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path
          d="M21.8269 33.0961C22.1711 34.7156 23.7655 35.751 25.385 35.4068C27.0046 35.0625 28.04 33.4682 27.6957 31.8486C27.3515 30.229 25.7571 29.1936 24.1376 29.5379C22.518 29.8821 21.4826 31.4765 21.8269 33.0961V33.0961"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path
          d="M21.2535 42.4192C20.6298 39.4847 22.3782 38.0908 25.8017 37.3631C29.2252 36.6354 31.3894 37.1977 32.0132 40.1322"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
        <path
          d="M47 30C47 30.5519 47.4481 31 48 31C48.5519 31 49 30.5519 49 30C49 29.4481 48.5519 29 48 29C47.4481 29 47 29.4481 47 30V30"
          fill="#40C843"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#40C843"
        />
      </svg>
    ),
  },
];

const AlumniStatsSection: React.FC = () => {
  return (
    <section
      id="alumni-highlights"
      aria-label="Alumni Network Highlights"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:pl-[81px] xl:pr-[69px] pt-12 xl:pt-[64px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px]">
          {ALUMNI_STATS.map((stat) => (
            <div
              key={stat.id}
              className="xl:w-[304.5px] min-h-[320px] xl:h-[340px] rounded-[16px] bg-[#40c843]/20 border border-[#40c843]/[0.18] p-[32px] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.03),0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between text-center"
            >
              <div className="h-[96px] mb-[12px] flex items-center justify-center shrink-0">
                {stat.icon}
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-[20px] leading-[28px] font-bold tracking-[-0.5px] text-[#0f172a]">
                  {stat.titleLines.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="mt-[11px] text-[15px] leading-[24.38px] font-normal text-[#64748b] whitespace-pre-line">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStatsSection;

