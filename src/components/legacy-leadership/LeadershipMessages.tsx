import React from "react";
import OpeningQuoteIcon from "./OpeningQuoteIcon";
import veenaPhoto from "../../assets/legacy-leadership/leader-veena-bajaj.png";
import jyotiPhoto from "../../assets/legacy-leadership/leader-jyoti-duhilani.png";
import deepakPhoto from "../../assets/legacy-leadership/leader-deepak-bajaj.png";
import pratapPhoto from "../../assets/legacy-leadership/leader-pratap-bajaj.png";
import dimpyPhoto from "../../assets/legacy-leadership/leader-dimpy-bajaj.png";
import rolePresident from "../../assets/legacy-leadership/role-president.png";
import roleVicePresident from "../../assets/legacy-leadership/role-vice-president.png";
import roleSecretary from "../../assets/legacy-leadership/role-secretary.png";
import roleJointSecretary from "../../assets/legacy-leadership/role-joint-secretary.png";
import roleDirector from "../../assets/legacy-leadership/role-director.png";

interface LeaderMessage {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  message: string;
  cardBgClass: string;
  photo: string;
  photoPositionClass: string;
  roleOverlay: string;
  roleOverlayWidthClass: string;
}

const LEADER_MESSAGES: LeaderMessage[] = [
  {
    id: "veena-d-bajaj",
    name: "Mrs. Veena D. Bajaj",
    role: "President of Sindhu Education Society",
    subtitle: "A message from the President",
    message:
      "Education is the key to unlocking a bright future, and at Sindhu Education Society, we are driven by a vision to shape a glorious tomorrow for our generation by empowering young, brilliant minds. Our goal is to instill discipline, truth, honesty, moral values, and a sense of curiosity and exploration through our wide range of educational institutions. We strive to make the learning process a delightful and unforgettable experience, incorporating the latest advancements in technology and education to ensure that our students are tech-savvy and well-prepared to handle the challenges of stress and peer pressure. We provide an upbringing that broadens their horizons, hones their life skills, and instills a strong work ethic. With this noble objective, we warmly welcome all those who wish to join us on our noble mission.",
    cardBgClass: "bg-[#ffe555]",
    photo: veenaPhoto,
    photoPositionClass: "left-0 bottom-0 w-[80.88%] h-[80.24%]",
    roleOverlay: rolePresident,
    roleOverlayWidthClass: "w-[59.9%]",
  },
  {
    id: "jyoti-duhilani",
    name: "Mrs. Jyoti Duhilani",
    role: "Vice President of Sindhu Education Society",
    subtitle: "A message from the Vice President",
    message:
      "As the Vice President of Sindhu Education Society, I extend a warm welcome to all of you. Our college is dedicated to providing an exceptional educational experience, both academically and personally. At Sindhu Education Society, we offer a comprehensive curriculum that goes beyond just textbooks. We understand the importance of curricular and co-curricular activities in your overall development. With a wide range of opportunities in sports, arts, and community service, we aim to nurture all aspects of students' personalities. Our esteemed faculty members, who are experts in their fields, will guide and inspire you to reach your fullest potential. From well-equipped classrooms to advanced laboratories and libraries, we ensure that you have the resources you need to excel academically.",
    cardBgClass: "bg-[#ffc0bb]",
    photo: jyotiPhoto,
    photoPositionClass: "left-[4.49%] bottom-0 w-[90.56%] h-[77.34%]",
    roleOverlay: roleVicePresident,
    roleOverlayWidthClass: "w-[73.81%]",
  },
  {
    id: "deepak-bajaj",
    name: "Mr. Deepak Bajaj",
    role: "Secretary of Sindhu Education Society",
    subtitle: "From the Desk of the Hon'ble Secretary,",
    message:
      "I extend my heartfelt gratitude to all those who have placed their trust in us since 1952 and entrusted us with their most precious asset—their children. It is this unwavering trust and faith that has propelled us to constantly explore new avenues and provide our students with cutting-edge technology and skills to thrive in the ever-changing and challenging times. With your blessings and support, we, at Sindhu Education Society, are committed to nurturing your children and realizing Dr. APJ Abdul Kalam's vision of making this century a Super Power. Together, let's embark on this journey of excellence. From well-equipped classrooms to advanced laboratories and libraries, we ensure that you have the resources you need to excel academically.",
    cardBgClass: "bg-[#93c5fd]",
    photo: deepakPhoto,
    photoPositionClass: "left-0 bottom-0 w-[91.23%] h-[74.08%]",
    roleOverlay: roleSecretary,
    roleOverlayWidthClass: "w-[73.81%]",
  },
  {
    id: "pratap-bajaj",
    name: "Mr. Pratap Bajaj",
    role: "Joint Secretary of Sindhu Education Society",
    subtitle: "Message from Joint Secretary",
    message:
      '"It is with great pleasure that we extend a warm welcome to Sindhu Education Society. At Sindhu Education Society, we are dedicated to providing an exceptional educational experience that is truly world-class. Our college stands as a beacon of excellence, offering a comprehensive curriculum that combines theoretical knowledge with practical application. Our esteemed faculty members, who are experts in their respective fields, are committed to nurturing the talents and aspirations of our students. We take immense pride in our state-of-the-art facilities, which are designed to enhance the learning experience."',
    cardBgClass: "bg-[#cbd6e7]",
    photo: pratapPhoto,
    photoPositionClass: "left-0 bottom-0 w-[91.26%] h-[74.05%]",
    roleOverlay: roleJointSecretary,
    roleOverlayWidthClass: "w-[80.89%]",
  },
  {
    id: "dimpy-bajaj",
    name: "Ms. Dimpy Bajaj",
    role: "Director of Sindhu Education Society",
    subtitle: "From The Hon'ble Director's Desk,",
    message:
      "Warmest Greetings to one and all! Sindhu Education Society has embarked upon a glorious mission to bring about a transformative shift in the field of education. We passionately nurture our students' raw talent and channel their youthful energy in innovative and constructive ways through engaging activities such as role plays, debates, sports, elocution, cultural fests, social gatherings, NCC, and Scout-Guide camps. Our aim is to provide a child-friendly and inspiring environment that fosters creativity, out-of-the-box thinking, patriotism, and a deep respect for all religions and gender equality. It is my utmost pleasure to invite all like-minded individuals to join this noble mission by entrusting us with the education of their beloved wards, ensuring a brilliantly bright future for them.",
    cardBgClass: "bg-[#c4b9fc]",
    photo: dimpyPhoto,
    photoPositionClass: "left-0 bottom-0 w-full h-[77.51%]",
    roleOverlay: roleDirector,
    roleOverlayWidthClass: "w-[80.89%]",
  },
];

const LeadershipMessages: React.FC = () => {
  return (
    <section
      aria-labelledby="legacy-leadership-heading"
      className="w-full bg-white pb-2 sm:pb-3 lg:pb-[8px]"
    >
      <div className="max-w-[1226px] mx-auto px-4 sm:px-8 min-[1340px]:px-0">
        {/* Divider Section Title */}
        <div className="flex items-center gap-5 sm:gap-9 pt-7 sm:pt-9 lg:pt-[48px] pb-10 sm:pb-14 lg:pb-[70px]">
          <span aria-hidden="true" className="h-[1px] flex-1 bg-[#cbd5e1]" />
          <h1
            id="legacy-leadership-heading"
            className="scroll-mt-24 text-[24px] sm:text-[32px] font-bold leading-[1.2] tracking-[0.01em] text-[#111827] text-center whitespace-nowrap"
          >
            legacy &amp; leadership
          </h1>
          <span aria-hidden="true" className="h-[1px] flex-1 bg-[#cbd5e1]" />
        </div>

        {/* Five Leadership Portrait & Message Cards */}
        <div className="flex flex-col gap-12 lg:gap-[50px]">
          {LEADER_MESSAGES.map((leader) => (
            <article
              key={leader.id}
              id={leader.id}
              className="scroll-mt-24 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-[67px]"
            >
              {/* Left Colored Portrait Card */}
              <div
                className={`relative w-full max-w-[424px] mx-auto lg:mx-0 lg:w-[424px] aspect-[424/578] lg:h-[578px] shrink-0 overflow-hidden ${leader.cardBgClass}`}
              >
                <img
                  src={leader.roleOverlay}
                  alt=""
                  aria-hidden="true"
                  className={`pointer-events-none select-none absolute top-[5.36%] right-[7.31%] h-auto ${leader.roleOverlayWidthClass}`}
                />
                <img
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.role}`}
                  className={`pointer-events-none select-none absolute object-contain object-bottom ${leader.photoPositionClass}`}
                />
              </div>

              {/* Right Message Content Column */}
              <div className="flex-1 min-w-0 max-w-[735px] flex flex-col gap-[17px]">
                {/* Header Block */}
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col gap-[12px] w-full max-w-[406px]">
                    <h2 className="font-extrabold text-[26px] sm:text-[32px] leading-[1.25] sm:leading-[40px] tracking-[0px] text-[#073c96]">
                      {leader.name}
                    </h2>
                    <div
                      aria-hidden="true"
                      className="h-[2px] w-full bg-[#10b981]"
                    />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <p className="font-medium text-[18px] sm:text-[20px] leading-[24px] text-[#171717]">
                      {leader.role}
                    </p>
                    <p className="font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#64748b]">
                      {leader.subtitle}
                    </p>
                  </div>
                </div>

                {/* Quote Decoration + Body Copy */}
                <div className="flex items-stretch lg:items-center gap-[16px] lg:min-h-[414px]">
                  <div
                    aria-hidden="true"
                    className="hidden sm:flex flex-col items-start shrink-0 w-[41px] lg:h-[414px]"
                  >
                    <OpeningQuoteIcon className="w-[41px] h-[41px] text-[#e6e6e6]" />
                    <div className="mt-[3px] ml-[30px] w-[1px] flex-1 bg-[#e6e6e6]" />
                  </div>

                  <p className="flex-1 font-medium text-[16px] sm:text-[18px] leading-[30px] sm:leading-[36px] text-[#171717] text-justify">
                    {leader.message}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;

