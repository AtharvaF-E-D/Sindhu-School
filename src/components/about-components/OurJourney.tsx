import React from "react";
import khubchandJuniorCollegeImg from "../../assets/schools/khubchand-junior-college.png";
import mgJuniorCollegeImg from "../../assets/about-journey-2007.png";
import khubchandCentralImg from "../../assets/schools/khubchand-central-public-school.png";

interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  image: string;
  alt: string;
  desktopTop: number;
  connectorTop: number;
}

const leftMilestones: JourneyMilestone[] = [
  {
    id: "m-2017",
    year: "2017",
    title: "Khubchand Bajaj Junior college, Jaripatka, Nagpur",
    image: khubchandJuniorCollegeImg,
    alt: "Khubchand Bajaj Junior College Jaripatka Nagpur campus",
    desktopTop: 0,
    connectorTop: 274,
  },
  {
    id: "m-1991",
    year: "1991",
    title: "Shri Gajanan Maharaj high-school, Bhorgad",
    image: khubchandJuniorCollegeImg,
    alt: "Shri Gajanan Maharaj High School Bhorgad campus",
    desktopTop: 553,
    connectorTop: 826,
  },
  {
    id: "m-1952",
    year: "1952",
    title: "Onkarlal Sindhu High school Jaripatka Nagpur",
    image: khubchandJuniorCollegeImg,
    alt: "Onkarlal Sindhu High School Jaripatka Nagpur campus",
    desktopTop: 1105,
    connectorTop: 1378,
  },
];

const rightMilestones: JourneyMilestone[] = [
  {
    id: "m-2007",
    year: "2007",
    title: "Mahatma Gandhi Centennial Sindhu Junior college, Jaripatka, Nagpur.",
    image: mgJuniorCollegeImg,
    alt: "Mahatma Gandhi Centennial Sindhu Junior College Jaripatka Nagpur campus",
    desktopTop: 274,
    connectorTop: 553,
  },
  {
    id: "m-1954-1",
    year: "1954",
    title: "Khubchand Bajaj Central Public School",
    image: khubchandCentralImg,
    alt: "Khubchand Bajaj Central Public School campus",
    desktopTop: 826,
    connectorTop: 1105,
  },
  {
    id: "m-1954-2",
    year: "1954",
    title: "Khubchand Bajaj Central Public School",
    image: khubchandCentralImg,
    alt: "Khubchand Bajaj Central Public School founding wing",
    desktopTop: 1378,
    connectorTop: 1657,
  },
];

const allMilestones: JourneyMilestone[] = [
  leftMilestones[0],
  rightMilestones[0],
  leftMilestones[1],
  rightMilestones[1],
  leftMilestones[2],
  rightMilestones[2],
];

const JourneyCard: React.FC<{ item: JourneyMilestone }> = ({ item }) => (
  <article className="group">
    <span className="block text-[20px] sm:text-[24px] font-bold leading-[24px] text-[#073c96]">
      {item.year}
    </span>
    <h3 className="mt-[12px] max-w-[357px] min-h-[48px] text-[17px] sm:text-[20px] font-medium leading-[24px] text-[#171717]">
      {item.title}
    </h3>
    <div className="mt-[22px] w-full aspect-[475/241] xl:w-[475px] xl:h-[241px] rounded-[13px] overflow-hidden">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  </article>
);

const OurJourney: React.FC = () => {
  return (
    <section
      id="our-journey"
      className="relative w-full bg-[#2faa55]/[0.09] pt-16 sm:pt-20 lg:pt-[116px] pb-16 lg:pb-0 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Section Header (Figma 1:1443: w:213, centered, y:2443) */}
        <div className="w-[213px] mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0f172a] leading-[1.15] lg:leading-[40px]">
            Our Journey
          </h2>
          <div
            className="w-[213px] h-[2px] bg-[#10b981] mt-[19px]"
            aria-hidden="true"
          />
        </div>

        {/* Desktop Timeline: 1440px Stage matching Figma 1:1442 (2608..4424 = 1816px) */}
        <div className="hidden lg:block relative max-w-[1440px] mx-auto mt-[106px] h-[1816px]">
          {/* Center Vertical Green Trunk Line (Figma 1:1446: x:718.5, 3px #10b981) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#10b981] pointer-events-none"
            aria-hidden="true"
          />

          {/* Left Column Cards (x:165, w:475) */}
          {leftMilestones.map((item) => (
            <React.Fragment key={item.id}>
              <div
                className="absolute left-[11.46%] xl:left-[165px] w-[33%] xl:w-[475px]"
                style={{ top: `${item.desktopTop}px` }}
              >
                <JourneyCard item={item} />
              </div>
              <div
                className="absolute right-1/2 w-[5.5%] xl:w-[80px] h-[3px] bg-[#00b67a] pointer-events-none"
                style={{ top: `${item.connectorTop}px` }}
                aria-hidden="true"
              />
            </React.Fragment>
          ))}

          {/* Right Column Cards (x:802, w:475) */}
          {rightMilestones.map((item) => (
            <React.Fragment key={item.id}>
              <div
                className="absolute left-[55.69%] xl:left-[802px] w-[33%] xl:w-[475px]"
                style={{ top: `${item.desktopTop}px` }}
              >
                <JourneyCard item={item} />
              </div>
              <div
                className="absolute left-1/2 w-[5.6%] xl:w-[81px] h-[3px] bg-[#00b67a] pointer-events-none"
                style={{ top: `${item.connectorTop}px` }}
                aria-hidden="true"
              />
            </React.Fragment>
          ))}
        </div>

        {/* Mobile / Tablet Timeline */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 mt-12">
          <div
            className="absolute left-3 sm:left-4 top-3 bottom-0 w-[3px] bg-[#10b981] pointer-events-none"
            aria-hidden="true"
          />
          <div className="space-y-10 sm:space-y-12">
            {allMilestones.map((item) => (
              <div key={`mob-${item.id}`} className="relative pl-4 sm:pl-6">
                <div
                  className="absolute -left-3 sm:-left-4 top-3 w-7 sm:w-10 h-[3px] bg-[#00b67a] pointer-events-none"
                  aria-hidden="true"
                />
                <JourneyCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
