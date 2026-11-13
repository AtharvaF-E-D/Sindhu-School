import React from "react";
import card1AcademicArt from "../../assets/core-values/card1-academic.svg";
import card2DiversityArt from "../../assets/core-values/card2-diversity.svg";
import card3CommunityArt from "../../assets/core-values/card3-community.svg";
import card4CharacterArt from "../../assets/core-values/card4-character.svg";
import card5LifelongArt from "../../assets/core-values/card5-lifelong.png";

interface ValueCardSpec {
  id: string;
  title: string;
  titleLeading: string;
  description: string;
  bgColor: string;
  badgeBgColor: string;
  iconType: "teacher" | "users";
  iconColor: string;
  illustration: string;
  illustrationAlt: string;
  illustrationClass: string;
  showGroundLine?: boolean;
  cardPaddingClass?: string;
}

const TeacherIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="28"
    height="24"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M19.635 15.64C20.4167 15.2 21.4433 15.68 21.4433 16.48V17.77C21.4433 19.04 20.2883 20.4 18.9 20.8L15.1783 21.86C14.525 22.05 13.4633 22.05 12.8217 21.86L9.1 20.8C7.7 20.4 6.55667 19.04 6.55667 17.77V16.47C6.55667 15.68 7.58333 15.2 8.35333 15.63L10.7567 16.97C11.6783 17.5 12.845 17.76 14.0117 17.76C15.1783 17.76 16.345 17.5 17.2667 16.97L19.635 15.64Z"
      fill={color}
    />
    <path
      d="M23.31 6.46L16.3217 2.53C15.0617 1.82 12.985 1.82 11.725 2.53L4.70167 6.46C2.45 7.71 2.45 10.54 4.70167 11.8L6.56833 12.84L11.725 15.72C12.985 16.43 15.0617 16.43 16.3217 15.72L21.4433 12.84L23.0417 11.94V15C23.0417 15.41 23.4383 15.75 23.9167 15.75C24.395 15.75 24.7917 15.41 24.7917 15V10.08C25.2583 8.79 24.78 7.29 23.31 6.46Z"
      fill={color}
    />
  </svg>
);

const UsersIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
      fill="#F1B425"
    />
    <path
      d="M14.08 14.15C11.29 12.29 6.74 12.29 3.93 14.15C2.66 15 1.96 16.15 1.96 17.38C1.96 18.61 2.66 19.75 3.92 20.59C5.32 21.53 7.16 22 9 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
      fill="#F1B425"
    />
    <path
      d="M19.99 7.34C20.15 9.28 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48 15.73 8.1 15.61 6.6C15.54 5.79 15.26 5.05 14.84 4.42C15.22 4.23 15.66 4.11 16.11 4.07C18.07 3.9 19.82 5.36 19.99 7.34Z"
      fill="#E59A1E"
    />
    <path
      d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z"
      fill="#E59A1E"
    />
  </svg>
);

/**
 * Eight white capsule binder perforations spanning the 8px white gap between cards.
 */
const BinderSpinePerforations: React.FC = () => (
  <div
    className="relative hidden md:flex w-[8px] shrink-0 flex-col items-center justify-evenly z-20 pointer-events-none"
    aria-hidden="true"
  >
    {Array.from({ length: 8 }).map((_, idx) => (
      <span
        key={idx}
        className="w-[29px] h-[10px] rounded-full bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] shrink-0"
      />
    ))}
  </div>
);

const TOP_ROW_CARDS: ValueCardSpec[] = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    titleLeading: "leading-[32px]",
    description:
      "It wholeheartedly strives for scholastic brilliance, fostering an environment that nurtures the realization of each student’s utmost potential.",
    bgColor: "#fa6b86",
    badgeBgColor: "#ffdae8",
    iconType: "teacher",
    iconColor: "#e23f5e",
    illustration: card1AcademicArt,
    illustrationAlt:
      "Illustration of a student standing atop stacked books holding a bright gold star",
    illustrationClass: "w-[176px] h-[179px]",
    cardPaddingClass: "p-[28px]",
  },
  {
    id: "embracing-diversity",
    title: "Embracing Diversity Excellence",
    titleLeading: "leading-[28px]",
    description:
      "It celebrates diversity in all its forms, creating an inclusive and respectful environment where students from different backgrounds, cultures, and abilities feel valued, supported, and empowered to learn and grow together.",
    bgColor: "#f5b318",
    badgeBgColor: "#fff4b4",
    iconType: "users",
    iconColor: "#f1b425",
    illustration: card2DiversityArt,
    illustrationAlt:
      "Illustration of three diverse students celebrating together in unity",
    illustrationClass: "w-[196px] h-[191px]",
    cardPaddingClass: "p-[28px] md:pb-[20px]",
  },
  {
    id: "community-engagement",
    title: "Community Engagement",
    titleLeading: "leading-[28px]",
    description:
      "It actively participates in community engagement endeavour’s, encouraging students to make positive contributions to society through various social initiatives and service projects.",
    bgColor: "#5b4eb5",
    badgeBgColor: "#e3dfff",
    iconType: "teacher",
    iconColor: "#5044a9",
    illustration: card3CommunityArt,
    illustrationAlt:
      "Illustration of two learners collaborating on community engagement initiatives",
    illustrationClass: "w-[229px] h-[128px] mb-2",
    cardPaddingClass: "p-[28px]",
  },
];

const BOTTOM_ROW_CARDS: ValueCardSpec[] = [
  {
    id: "character-development",
    title: "Academic Excellence Character Development",
    titleLeading: "leading-[32px]",
    description:
      "It dedicates itself not only to academic growth but also to the holistic development of each student’s character, values, and ethical framework, molding responsible and compassionate individuals.",
    bgColor: "#227ceb",
    badgeBgColor: "#bedbff",
    iconType: "teacher",
    iconColor: "#176cd4",
    illustration: card4CharacterArt,
    illustrationAlt:
      "Illustration of a student climbing stacked books toward a trophy topped with a graduation cap",
    illustrationClass: "w-[220px] h-[189px]",
    showGroundLine: true,
    cardPaddingClass: "p-[28px]",
  },
  {
    id: "lifelong-learning",
    title: "Lifelong Learning",
    titleLeading: "leading-[28px]",
    description:
      "It passionately instils a love for learning, fostering an environment that encourages curiosity, creativity, and adaptability. The goal is to equip students with skills that will serve them throughout their lives.",
    bgColor: "#ff4446",
    badgeBgColor: "#ffc4c5",
    iconType: "teacher",
    iconColor: "#d12d30",
    illustration: card5LifelongArt,
    illustrationAlt:
      "Illustration of a student learning online with a live instructor on a laptop",
    illustrationClass: "w-[308px] max-w-full h-auto",
    cardPaddingClass: "p-[28px] md:pt-[35px] md:pb-[35px]",
  },
];

const BinderValueCard: React.FC<{
  card: ValueCardSpec;
  desktopCornerClass: string;
}> = ({ card, desktopCornerClass }) => (
  <article
    className={`flex-1 min-h-[450px] md:h-[479px] flex flex-col justify-between text-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(229,231,235,0.6),0_8px_10px_-6px_rgba(229,231,235,0.6)] ${desktopCornerClass} ${card.cardPaddingClass ?? "p-[28px]"}`}
    style={{ backgroundColor: card.bgColor }}
  >
    <div className="flex flex-col items-start gap-[12px]">
      <div
        className="w-[50px] h-[50px] rounded-full border border-white/20 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] flex items-center justify-center shrink-0"
        style={{ backgroundColor: card.badgeBgColor }}
      >
        {card.iconType === "teacher" ? (
          <TeacherIcon color={card.iconColor} />
        ) : (
          <UsersIcon />
        )}
      </div>

      <h2
        className={`text-[24px] font-bold ${card.titleLeading} tracking-[0px] text-white text-left`}
      >
        {card.title}
      </h2>

      <p className="text-[14px] font-medium leading-[20px] tracking-[0px] text-white text-left">
        {card.description}
      </p>
    </div>

    <div className="mt-6 md:mt-0 flex flex-col items-center justify-end pointer-events-none">
      <img
        src={card.illustration}
        alt={card.illustrationAlt}
        className={`${card.illustrationClass} object-contain`}
        loading="lazy"
      />
      {card.showGroundLine && (
        <div className="w-[213px] h-[1px] bg-[#315782] -mt-[1px]" />
      )}
    </div>
  </article>
);

const BinderCardRow: React.FC<{ cards: ValueCardSpec[] }> = ({ cards }) => (
  <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-0">
    {cards.map((card, index) => {
      const desktopCornerClass =
        index === 0
          ? "md:rounded-none md:rounded-bl-[24px]"
          : index === cards.length - 1
            ? "md:rounded-none md:rounded-br-[24px]"
            : "md:rounded-none";

      return (
        <React.Fragment key={card.id}>
          {index > 0 && <BinderSpinePerforations />}
          <BinderValueCard
            card={card}
            desktopCornerClass={desktopCornerClass}
          />
        </React.Fragment>
      );
    })}
  </div>
);

const CoreValuesTimeline: React.FC = () => {
  return (
    <section
      id="core-values-cards"
      className="relative z-10 w-full pt-4 sm:pt-6 pb-8 sm:pb-10 select-none"
    >
      <div className="max-w-[1051px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Top Binder Row: 3 Connected Cards */}
        <BinderCardRow cards={TOP_ROW_CARDS} />

        {/* Bottom Binder Row: 2 Connected Cards */}
        <div className="mt-6 md:mt-[41px]">
          <BinderCardRow cards={BOTTOM_ROW_CARDS} />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesTimeline;
