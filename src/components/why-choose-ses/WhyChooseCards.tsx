import React from "react";
import img01Holistic from "../../assets/why-choose-ses/01-holistic-fencing.jpg";
import img02Faculty from "../../assets/why-choose-ses/02-faculty-ceremony.jpg";
import img03Facilities from "../../assets/why-choose-ses/03-facilities-computer-lab.jpg";
import img04Values from "../../assets/why-choose-ses/04-values-chess.jpg";
import img05Cocurricular from "../../assets/why-choose-ses/05-cocurricular-football.jpg";
import img06Safe from "../../assets/why-choose-ses/06-safe-basketball.jpg";
import img07TrackRecord from "../../assets/why-choose-ses/07-track-record-felicitation.jpg";
import img08Individualized from "../../assets/why-choose-ses/08-individualized-ncc.jpg";
import img11Community from "../../assets/why-choose-ses/11-community-seminar.jpg";
import img12Awards from "../../assets/why-choose-ses/12-awards-aarti.jpg";
import img13Diversity from "../../assets/why-choose-ses/13-diversity-trophy.jpg";
import img14Improvement from "../../assets/why-choose-ses/14-continuous-improvement.jpg";

interface WhyChooseCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tintHex: string;
  dividerHex: string;
  dividerWidthClass?: string;
  bodyWidthClass?: string;
}

const hexToRgba = (hex: string, alpha: number): string => {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const WHY_CHOOSE_CARDS: WhyChooseCardItem[] = [
  {
    id: "holistic-education",
    title: "Holistic Education",
    description:
      "We believe in nurturing well-rounded individuals. Our curriculum goes beyond textbooks, focusing on character development, values, and practical skills.",
    image: img01Holistic,
    imageAlt:
      "Students in fencing gear holding a winner trophy at Sindhu Education Society",
    tintHex: "#f26b38",
    dividerHex: "#dc4345",
    dividerWidthClass: "max-w-[373px]",
    bodyWidthClass: "max-w-[496px]",
  },
  {
    id: "experienced-faculty",
    title: "Experienced Faculty",
    description:
      "Our dedicated team of educators brings a wealth of experience and passion to the classroom. We prioritize quality teaching to ensure students receive the best education.",
    image: img02Faculty,
    imageAlt:
      "Faculty members and achievers recognized at Flag Day appreciation ceremony",
    tintHex: "#60a5fa",
    dividerHex: "#60a5fa",
  },
  {
    id: "state-of-the-art-facilities",
    title: "State-of-the-Art Facilities",
    description:
      "We provide modern infrastructure and facilities that contribute to a conducive learning environment. From well-equipped classrooms to advanced laboratories, we invest in the overall development of our students.",
    image: img03Facilities,
    imageAlt:
      "Students learning in the computer laboratory with faculty supervision",
    tintHex: "#bdcf20",
    dividerHex: "#bdcf20",
  },
  {
    id: "focus-on-values",
    title: "Focus on Values",
    description:
      "Sindhu Education Society instills strong moral values and ethics in students. We believe in shaping responsible citizens who contribute positively to society.",
    image: img04Values,
    imageAlt: "Students competing in an inter-school chess tournament",
    tintHex: "#64bbb8",
    dividerHex: "#64bbb8",
  },
  {
    id: "emphasis-on-co-curricular-activities",
    title: "Emphasis on Co-curricular Activities",
    description:
      "Beyond academics, we encourage participation in various co-curricular activities such as sports, arts, and cultural events, fostering holistic development.",
    image: img05Cocurricular,
    imageAlt:
      "School football squad celebrating championship victory with trophy and medals",
    tintHex: "#ea6c35",
    dividerHex: "#ff7347",
  },
  {
    id: "safe-and-inclusive-environment",
    title: "Safe and Inclusive Environment",
    description:
      "The safety and well-being of our students are our top priorities. We maintain a secure and inclusive atmosphere where each child feels valued.",
    image: img06Safe,
    imageAlt: "Students participating in a basketball match on the school court",
    tintHex: "#64bbb8",
    dividerHex: "#64bbb8",
  },
  {
    id: "proven-track-record",
    title: "Proven Track Record",
    description:
      "Our institution has a history of academic excellence and producing successful individuals. Many of our alumni have achieved great success in various fields. Certainly, there are additional key points to emphasize why parents should choose Sindhu Education Society",
    image: img07TrackRecord,
    imageAlt:
      "Dignitaries felicitating achievers on stage at Sindhu Education Society",
    tintHex: "#7b61ff",
    dividerHex: "#7b61ff",
  },
  {
    id: "individualized-attention",
    title: "Individualized Attention",
    description:
      "We believe in recognizing and nurturing each student's unique strengths and talents. Our approach involves personalized attention to ensure every child receives the support they need to thrive academically and personally.",
    image: img08Individualized,
    imageAlt:
      "Faculty mentoring students in a classroom organized by the NCC wing",
    tintHex: "#ffb646",
    dividerHex: "#ffb646",
  },
  {
    id: "parental-involvement",
    title: "Parental Involvement",
    description:
      "We encourage active participation from parents in their child's education. Regular communication and involvement ensure a collaborative approach to learning.",
    image: img07TrackRecord,
    imageAlt:
      "Parents, educators, and dignitaries gathered during an annual recognition ceremony",
    tintHex: "#bdcf20",
    dividerHex: "#bdcf20",
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description:
      "We provide guidance for students' future endeavors, helping them explore various career options and make informed decisions about their education and career paths.",
    image: img08Individualized,
    imageAlt: "Mentoring and guidance session for students at campus",
    tintHex: "#60a5fa",
    dividerHex: "#60a5fa",
  },
  {
    id: "community-engagement",
    title: "Community Engagement",
    description:
      "We believe in fostering a sense of community and social responsibility. Our students engage in various outreach programs and initiatives to give back to society.",
    image: img11Community,
    imageAlt:
      "Students and educators collaborating during a seminar and outreach session",
    tintHex: "#ff5b7e",
    dividerHex: "#ff5b7e",
  },
  {
    id: "recognition-and-awards",
    title: "Recognition and Awards",
    description:
      "Our school has received numerous accolades for excellence in education. These awards reflect our commitment to providing quality education and holistic development for our students.",
    image: img12Awards,
    imageAlt:
      "Traditional lamp lighting and cultural felicitation ceremony on stage",
    tintHex: "#7b61ff",
    dividerHex: "#7b61ff",
  },
  {
    id: "celebration-of-cultural-diversity",
    title: "Celebration of Cultural Diversity",
    description:
      "We celebrate cultural diversity and inclusivity, promoting understanding and respect for different cultures and backgrounds within our school community.",
    image: img13Diversity,
    imageAlt:
      "Diverse student team celebrating trophy achievement together at school event",
    tintHex: "#64bbb8",
    dividerHex: "#64bbb8",
  },
  {
    id: "commitment-to-continuous-improvement",
    title: "Commitment to Continuous Improvement",
    description:
      "We are dedicated to continuously improving our educational practices and facilities to provide the best possible experience for our students and their families.",
    image: img14Improvement,
    imageAlt:
      "Students and teachers holding campaign banner for community cleanliness drive",
    tintHex: "#60a5fa",
    dividerHex: "#60a5fa",
  },
];

const WhyChooseCards: React.FC = () => {
  return (
    <section
      id="why-choose-ses-pillars"
      aria-label="Why Choose Sindhu Education Society"
      className="w-full bg-white pt-12 sm:pt-16 lg:pt-[82px] pb-4 sm:pb-6 lg:pb-[20px] overflow-x-clip"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14 sm:gap-16 lg:gap-[85px]">
        {WHY_CHOOSE_CARDS.map((card, index) => {
          const isPhotoLeft = index % 2 === 0;
          const tintBg = hexToRgba(card.tintHex, 0.2);

          return (
            <article
              key={card.id}
              id={card.id}
              style={{ "--card-tint": tintBg } as React.CSSProperties}
              className="scroll-mt-24 relative w-full lg:h-[440px] px-4 sm:px-8 lg:px-0"
            >
              {/* Pastel Rounded Backdrop Bar (Desktop exact 1199x392 at top:20px) */}
              <div
                aria-hidden="true"
                className={`hidden lg:block lg:absolute lg:top-[20px] lg:h-[392px] lg:w-[83.2639%] rounded-[18px] bg-[var(--card-tint)] ${
                  isPhotoLeft ? "lg:left-[8.75%]" : "lg:left-[7.7778%]"
                }`}
              />

              {/* Single Photo Frame (Stacked on Mobile/Tablet, Canvas-Positioned on Desktop) */}
              <div
                className={`relative z-20 w-full max-w-[600px] mx-auto aspect-[572/440] lg:max-w-none lg:mx-0 lg:aspect-auto lg:absolute lg:top-0 lg:w-[39.7222%] lg:h-[440px] lg:z-10 ${
                  isPhotoLeft ? "lg:left-[7.7778%]" : "lg:left-[52.7083%]"
                }`}
              >
                {/* Decorative Tilted Backing Layer (-2.08deg CSS = +2.08deg Figma) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[4px] sm:-inset-[8px] rounded-[40px] sm:rounded-[56px] lg:inset-auto lg:-left-[3.7%] lg:top-0 lg:w-[96.68%] lg:h-full lg:rounded-[60px] -rotate-[2.08deg] bg-[var(--card-tint)]"
                />

                {/* Crisp White-Bordered Photo Container */}
                <div className="relative w-full h-full rounded-[32px] sm:rounded-[50px] border-4 border-white overflow-hidden bg-slate-100 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Single Copy Column (Pastel-Filled Box Below Photo on Mobile, Transparent Centered Overlay on Desktop) */}
              <div
                className={`relative z-10 w-full max-w-[600px] mx-auto -mt-6 pt-11 pb-7 px-6 sm:px-8 rounded-[18px] bg-[var(--card-tint)] lg:bg-transparent lg:max-w-none lg:mx-0 lg:mt-0 lg:p-0 lg:rounded-none lg:absolute lg:top-[20px] lg:h-[392px] lg:flex lg:flex-col lg:justify-center ${
                  isPhotoLeft
                    ? "lg:left-[51.25%] lg:w-[36.8%]"
                    : "lg:left-[12.7083%] lg:w-[34.8%]"
                }`}
              >
                <div className={card.dividerWidthClass || "w-full"}>
                  <h2 className="font-extrabold text-[26px] sm:text-[32px] xl:text-[32px] min-[1400px]:text-[36px] leading-[1.2] lg:leading-[1.15] min-[1400px]:leading-[40px] tracking-[0px] text-[#0f172a]">
                    {card.title}
                  </h2>
                  <div
                    aria-hidden="true"
                    className="mt-[16px] lg:mt-[17px] h-[2px] w-full"
                    style={{ backgroundColor: card.dividerHex }}
                  />
                </div>

                <p
                  className={`mt-[24px] lg:mt-[31px] font-medium text-[16px] sm:text-[18px] lg:text-[17px] xl:text-[18px] min-[1400px]:text-[20px] leading-[24px] tracking-[0px] text-[#383232] ${
                    card.bodyWidthClass || "w-full"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseCards;
