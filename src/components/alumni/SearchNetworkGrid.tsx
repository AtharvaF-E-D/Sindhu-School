import React from 'react';
import net01 from '../../assets/alumni-net-01.png';
import net02 from '../../assets/alumni-net-02.png';
import awardeeRajiv from '../../assets/alumni-awardee-rajiv.png';
import awardeeLakshmi from '../../assets/alumni-awardee-lakshmi.png';
import net05 from '../../assets/alumni-net-05.png';
import net06 from '../../assets/alumni-net-06.png';
import net07 from '../../assets/alumni-net-07.png';
import net08 from '../../assets/alumni-net-08.png';
import net09 from '../../assets/alumni-net-09.png';
import net10 from '../../assets/alumni-net-10.png';
import net11 from '../../assets/alumni-net-11.png';
import net12 from '../../assets/alumni-net-12.png';
import net13 from '../../assets/alumni-net-13.png';
import net14 from '../../assets/alumni-net-14.png';
import net15 from '../../assets/alumni-net-15.png';
import net16 from '../../assets/alumni-net-16.png';
import net17 from '../../assets/alumni-net-17.png';
import net18 from '../../assets/alumni-net-18.png';
import net19 from '../../assets/alumni-net-19.png';
import net20 from '../../assets/alumni-net-20.png';
import net21 from '../../assets/alumni-net-21.png';
import net22 from '../../assets/alumni-net-22.png';
import { figmaCropStyle, type FigmaCropRect } from './cropStyle';

interface NetworkTile {
  id: string;
  image: string;
  crop: FigmaCropRect;
}

const ROW_ONE: NetworkTile[] = [
  { id: 'net-01', image: net01, crop: { sx: 1, tx: 0, sy: 1, ty: 0 } },
  { id: 'net-02', image: net02, crop: { sx: 1, tx: 0, sy: 0.7501, ty: 0.1249 } },
  { id: 'net-03', image: awardeeRajiv, crop: { sx: 1, tx: 0, sy: 0.4478, ty: 0.2761 } },
  { id: 'net-04', image: awardeeLakshmi, crop: { sx: 1, tx: 0, sy: 0.5625, ty: 0.2188 } },
  { id: 'net-05', image: net05, crop: { sx: 0.6868, tx: 0.1566, sy: 1, ty: 0 } },
];

const ROW_TWO: NetworkTile[] = [
  { id: 'net-06', image: net06, crop: { sx: 1, tx: 0, sy: 0.7857, ty: 0.0419 } },
  { id: 'net-07', image: net07, crop: { sx: 1, tx: 0, sy: 0.7501, ty: 0.1249 } },
  { id: 'net-08', image: net08, crop: { sx: 1, tx: 0, sy: 0.5625, ty: 0.2188 } },
  { id: 'net-09', image: net09, crop: { sx: 1, tx: 0, sy: 0.4513, ty: 0.2743 } },
  { id: 'net-10', image: net10, crop: { sx: 0.8011, tx: 0.0994, sy: 1, ty: 0 } },
];

const ROW_THREE: NetworkTile[] = [
  { id: 'net-11', image: net11, crop: { sx: 1, tx: 0, sy: 0.92, ty: 0.04 } },
  { id: 'net-12', image: net12, crop: { sx: 1, tx: 0, sy: 0.6844, ty: 0.1578 } },
  { id: 'net-13', image: net13, crop: { sx: 1, tx: 0, sy: 0.75, ty: 0.125 } },
  { id: 'net-14', image: net14, crop: { sx: 1, tx: 0, sy: 0.4663, ty: 0.2668 } },
  { id: 'net-15', image: net15, crop: { sx: 1, tx: 0, sy: 0.7778, ty: 0.1111 } },
];

const ROW_FOUR: NetworkTile[] = [
  { id: 'net-16', image: net16, crop: { sx: 1, tx: 0, sy: 0.8, ty: 0.1 } },
  { id: 'net-17', image: net17, crop: { sx: 1, tx: 0, sy: 0.6675, ty: 0.1662 } },
  { id: 'net-18', image: net18, crop: { sx: 0.75, tx: 0.125, sy: 1, ty: 0 } },
  { id: 'net-19', image: net19, crop: { sx: 0.6593, tx: 0.1704, sy: 1, ty: 0 } },
];

const ROW_FIVE: NetworkTile[] = [
  { id: 'net-20', image: net20, crop: { sx: 1, tx: 0, sy: 0.7628, ty: 0.1186 } },
  { id: 'net-21', image: net21, crop: { sx: 1, tx: 0, sy: 0.75, ty: 0.125 } },
  { id: 'net-22', image: net22, crop: { sx: 1, tx: 0, sy: 0.6667, ty: 0.1667 } },
];

const NetworkPortraitCard: React.FC<{ tile: NetworkTile; index: number }> = ({ tile, index }) => (
  <div className="relative w-[150px] sm:w-[190px] lg:w-[220px] xl:w-[241px] aspect-square rounded-[22px] overflow-hidden bg-slate-100 shrink-0">
    <img
      src={tile.image}
      alt={`SES Alumni Network Member ${index}`}
      style={figmaCropStyle(tile.crop)}
      className="absolute max-w-none"
    />
  </div>
);

const SearchNetworkGrid: React.FC = () => {
  return (
    <section
      id="alumni-network"
      aria-labelledby="alumni-network-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-0 pt-14 xl:pt-[86px] pb-14 xl:pb-[131px]">
        <h2
          id="alumni-network-heading"
          className="text-center text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] lg:leading-[54px] font-extrabold tracking-[-1.35px] text-[#073c96]"
        >
          Search and network
        </h2>

        <div className="mt-[16px] mx-auto w-full max-w-[782px] h-[2px] bg-[#40c843]" />

        <p className="mt-[9px] text-center text-[16px] leading-[24px] font-normal text-[#737373]">
          Register For Alumni Member
        </p>

        {/* Centered 5-5-5-4-3 pyramid on xl+, continuous flex wrap on mobile/tablet */}
        <div className="mt-10 xl:mt-[54px] flex flex-wrap justify-center gap-4 sm:gap-6 xl:flex-col xl:items-center xl:gap-[24px]">
          <div className="contents xl:flex xl:justify-center xl:gap-[29px]">
            {ROW_ONE.map((tile, idx) => (
              <NetworkPortraitCard key={tile.id} tile={tile} index={idx + 1} />
            ))}
          </div>
          <div className="contents xl:flex xl:justify-center xl:gap-[29px]">
            {ROW_TWO.map((tile, idx) => (
              <NetworkPortraitCard key={tile.id} tile={tile} index={idx + 6} />
            ))}
          </div>
          <div className="contents xl:flex xl:justify-center xl:gap-[29px]">
            {ROW_THREE.map((tile, idx) => (
              <NetworkPortraitCard key={tile.id} tile={tile} index={idx + 11} />
            ))}
          </div>
          <div className="contents xl:flex xl:justify-center xl:gap-[29px]">
            {ROW_FOUR.map((tile, idx) => (
              <NetworkPortraitCard key={tile.id} tile={tile} index={idx + 16} />
            ))}
          </div>
          <div className="contents xl:flex xl:justify-center xl:gap-[24px]">
            {ROW_FIVE.map((tile, idx) => (
              <NetworkPortraitCard key={tile.id} tile={tile} index={idx + 20} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchNetworkGrid;

