import React from 'react';
import appMockupImg from '../../assets/parent-pathway-app-mockup.png';
import ptaMeetingImg from '../../assets/parent-pathway-pta-meeting.png';

const KidsProtectFeaturesSection: React.FC = () => {
  return (
    <section
      id="kids-protect"
      aria-labelledby="kids-protect-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-0 pt-4 sm:pt-4 xl:pt-0 pb-10 sm:pb-16 xl:pb-[89px]">
        {/* Centered Header (Figma 37:2135: y=817..961, w=1009, h=144) */}
        <div className="max-w-[1009px] mx-auto text-center">
          <h2
            id="kids-protect-heading"
            className="text-[17px] xs:text-[18px] sm:text-[36px] lg:text-[48px] leading-[1.25] lg:leading-[54px] font-extrabold tracking-tight sm:tracking-[-1.35px] text-[#073c96] max-w-[280px] xs:max-w-[300px] sm:max-w-[1009px] mx-auto"
          >
            Stay Connected with the Kids Protect App
          </h2>

          <p className="mt-2 sm:mt-[18px] text-[10px] xs:text-[10.5px] sm:text-[15px] lg:text-[16px] leading-[15px] sm:leading-[24px] font-normal text-[#737373] max-w-[320px] xs:max-w-[340px] sm:max-w-[1009px] mx-auto">
            The Students App is the ultimate tool for parents to stay connected and
            informed about their child’s academic journey at SES. With this
            user-friendly app, you’ll receive daily updates about your ward’s
            attendance, homework assignments, and important information regarding
            holidays and events. Stay in the loop and never miss a beat when it
            comes to your child’s education.
          </p>
        </div>

        {/* Feature Row 1: Attendance & Homework (Figma 37:2169 / 37:2173 / 37:2171) */}
        <div
          id="attendance"
          className="mt-6 sm:mt-10 lg:mt-[66px] xl:pl-[133px] xl:pr-[81px] grid grid-cols-1 lg:grid-cols-[477fr_679fr] xl:grid-cols-[477px_minmax(0,679px)] gap-3.5 sm:gap-8 lg:gap-[48px] xl:gap-[55px] items-start"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[477/536] xl:h-[536px] rounded-[14px] sm:rounded-[24px] lg:rounded-[30px] overflow-hidden bg-slate-100">
            {/* Mobile image */}
            <img
              src={appMockupImg}
              alt="Parent using the Kids Protect mobile app showing real-time attendance and homework messages"
              className="sm:hidden w-full h-full object-cover object-center"
            />
            {/* Desktop / Tablet image */}
            <img
              src={appMockupImg}
              alt="Parent using the Kids Protect mobile app showing real-time attendance and homework messages"
              className="hidden sm:block absolute left-0 w-full max-w-none"
              style={{ top: '-10.72%', height: '116.38%' }}
            />
          </div>

          <div className="w-full xl:pt-[49px]">
            <h3 className="max-w-[499px] text-[13px] xs:text-[14px] sm:text-[26px] lg:text-[32px] leading-[1.3] lg:leading-[41px] font-bold text-[#171717] text-left">
              Attendance and Homework at Your Fingertips
            </h3>

            <p className="mt-1.5 sm:mt-5 lg:mt-[36px] text-[10px] xs:text-[10.5px] sm:text-[18px] lg:text-[24px] leading-[15px] sm:leading-[28px] lg:leading-[41px] font-normal sm:font-medium text-[#171717] text-left sm:text-justify">
              Gone are the days of waiting for progress reports or relying on your
              child’s memory. With the Students App, you can effortlessly access
              real-time attendance records, ensuring that you’re always aware of
              your ward’s presence in school. Additionally, stay on top of
              homework assignments and deadlines, allowing you to provide the
              necessary support and guidance to help your child succeed.
            </p>
          </div>
        </div>

        {/* Feature Row 2: Family Participation Highlights (Figma 37:2170 / 37:2174 / 37:2172) */}
        <div
          id="family-participation"
          className="mt-6 sm:mt-12 lg:mt-[66px] xl:pl-[133px] xl:pr-[81px] grid grid-cols-1 lg:grid-cols-[477fr_679fr] xl:grid-cols-[477px_minmax(0,679px)] gap-3.5 sm:gap-8 lg:gap-[48px] xl:gap-[55px] items-start"
        >
          <div className="w-full aspect-[4/3] sm:aspect-[477/536] xl:h-[536px] rounded-[14px] sm:rounded-[24px] lg:rounded-[30px] overflow-hidden bg-slate-100">
            <img
              src={ptaMeetingImg}
              alt="Parent-teacher consultation inside a Sindhu Education Society classroom"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full xl:pt-[6px]">
            <h3 className="max-w-[499px] text-[13px] xs:text-[14px] sm:text-[26px] lg:text-[32px] leading-[1.3] lg:leading-[41px] font-bold text-[#171717] text-left">
              Family Participation Highlights
            </h3>

            <p className="mt-1.5 sm:mt-4 lg:mt-[16px] text-[10px] xs:text-[10.5px] sm:text-[18px] lg:text-[24px] leading-[15px] sm:leading-[28px] lg:leading-[41px] font-normal sm:font-medium text-[#171717] text-left sm:text-justify">
              In the vibrant tapestry of SES, family participation is woven into
              every aspect of our school life. We organize a range of engaging
              events, including Grandparents Day, annual functions, and culturally
              rich events, that bring families together. These special occasions
              provide opportunities for generations to connect, celebrate, and
              create lasting memories. Our Parent-Teacher Association works
              tirelessly to ensure that these events are inclusive and reflective
              of our diverse community. Through these shared experiences, we foster
              a strong sense of togetherness and create a nurturing environment
              where every family feels valued and supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsProtectFeaturesSection;

