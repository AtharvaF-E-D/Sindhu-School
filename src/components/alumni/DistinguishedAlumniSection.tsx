import React from 'react';
import awardeeVilasImg from '../../assets/alumni-awardee-vilas.png';
import awardeeRajivImg from '../../assets/alumni-awardee-rajiv.png';
import awardeeShubhamImg from '../../assets/alumni-awardee-shubham.png';
import awardeeLakshmiImg from '../../assets/alumni-awardee-lakshmi.png';
import awardeeFiveImg from '../../assets/alumni-awardee-5.png';
import { figmaCropStyle, type FigmaCropRect } from './cropStyle';

interface AwardeeCardData {
  id: string;
  name: string;
  year: string;
  image: string;
  crop: FigmaCropRect;
  href?: string;
}

const ROW_ONE_AWARDEES: AwardeeCardData[] = [
  {
    id: 'vilas-1983',
    name: 'Dr.Vilas Ramteke sir',
    year: 'Year\u00A01983',
    image: awardeeVilasImg,
    crop: { sx: 0.6138, tx: 0.1931, sy: 1, ty: 0 },
    href: '#notable-alumni',
  },
  {
    id: 'rajiv-2012',
    name: 'Rajiv Maliwal',
    year: 'Year\u00A02012',
    image: awardeeRajivImg,
    crop: { sx: 1, tx: 0, sy: 0.5836, ty: 0.2082 },
  },
  {
    id: 'shubham-2019',
    name: 'Shubham Dubey',
    year: 'Year\u00A02019',
    image: awardeeShubhamImg,
    crop: { sx: 0.6138, tx: 0.1931, sy: 1, ty: 0 },
    href: '#notable-alumni',
  },
];

const ROW_TWO_AWARDEES: AwardeeCardData[] = [
  {
    id: 'lakshmi-2019',
    name: 'Lakshmi Kaul',
    year: 'Year\u00A02019',
    image: awardeeLakshmiImg,
    crop: { sx: 1, tx: 0, sy: 0.7332, ty: 0.1334 },
  },
  {
    id: 'rajiv-card-2',
    name: 'Rajiv Maliwal',
    year: 'Year\u00A02012',
    image: awardeeFiveImg,
    crop: { sx: 1, tx: 0, sy: 0.9777, ty: 0.0111 },
  },
];

const AwardeeCard: React.FC<{ item: AwardeeCardData }> = ({ item }) => {
  const inner = (
    <div className="relative w-[290px] h-[378px] overflow-hidden bg-slate-100 group">
      <img
        src={item.image}
        alt={`${item.name} - ${item.year}`}
        style={figmaCropStyle(item.crop)}
        className="absolute max-w-none transition-transform duration-300 group-hover:scale-[1.03]"
      />

      {/* Slanted #073C96 @ 93% wedge overlay (Figma 37:2495 vector M0 21.41 L290 0 L290 112 L0 112 Z) */}
      <div
        aria-hidden="true"
        style={{ clipPath: 'polygon(0 21.41px, 100% 0, 100% 100%, 0 100%)' }}
        className="absolute bottom-0 left-0 right-0 h-[112px] bg-[#073c96]/[0.93]"
      />

      {/* Year badge (Figma 37:2496: 101x41 at x=176, y=251 relative to 290x378 card) */}
      <div className="absolute right-[13px] top-[251px] w-[101px] h-[41px] rounded-[5px] bg-[#40c843] px-[15px] pt-[8px] pb-[7px] flex items-center justify-center">
        <span className="text-[14px] leading-[12px] font-semibold text-white whitespace-nowrap">
          {item.year}
        </span>
      </div>

      {/* Name + 255px hairline (Figma 37:2498: at x=22, y=307) */}
      <div className="absolute left-[22px] top-[307px] w-[255px]">
        <p className="text-[16px] leading-[25px] font-medium text-white truncate">
          {item.name}
        </p>
        <div className="mt-[10px] w-[255px] h-[1px] bg-white/60" />
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="block focus:outline-none focus:ring-2 focus:ring-[#40c843]">
        {inner}
      </a>
    );
  }
  return inner;
};

const DistinguishedAlumniSection: React.FC = () => {
  return (
    <section
      id="distinguished-alumni"
      aria-labelledby="distinguished-alumni-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-0 pt-14 xl:pt-[87px]">
        <h2
          id="distinguished-alumni-heading"
          className="text-center text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] lg:leading-[54px] font-extrabold tracking-[-1.35px] text-[#073c96]"
        >
          Distinguished Alumni Awardee
        </h2>

        <div className="mt-[16px] mx-auto w-full max-w-[782px] h-[2px] bg-[#40c843]" />

        <div className="mt-[42px] flex flex-wrap justify-center gap-[25px]">
          {ROW_ONE_AWARDEES.map((item) => (
            <AwardeeCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-[24px] flex flex-wrap justify-center gap-[25px]">
          {ROW_TWO_AWARDEES.map((item) => (
            <AwardeeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistinguishedAlumniSection;

