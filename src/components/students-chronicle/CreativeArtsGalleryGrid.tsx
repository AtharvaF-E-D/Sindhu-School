import React, { useEffect, useState } from 'react';
import galleryJanmashtami from '../../assets/gallery-janmashtami.png';
import gallerySciencePrize from '../../assets/gallery-science-prize.png';
import homeGirlCircle from '../../assets/home-girl-circle.jpg';
import galleryNccParade from '../../assets/gallery-ncc-parade.png';
import homeBoyCircle from '../../assets/home-boy-circle.png';
import galleryKindergartenPlay from '../../assets/gallery-kindergarten-play.png';
import galleryFacultyCelebration from '../../assets/gallery-faculty-celebration.png';
import galleryStageSkit from '../../assets/gallery-stage-skit.png';
import galleryTeachersAssembly from '../../assets/gallery-teachers-assembly.png';
import galleryAuditoriumEvent from '../../assets/gallery-auditorium-event.png';
import galleryAnnualStage from '../../assets/gallery-annual-stage.png';
import schoolsHero1 from '../../assets/schools-hero-1.png';
import galleryClassroomArt from '../../assets/gallery-classroom-art.png';
import galleryRedDance from '../../assets/gallery-red-dance.png';

interface GalleryTile {
  id: string;
  src: string;
  alt: string;
  objectPositionClass?: string;
}

const BAND_ONE_LEFT: GalleryTile = {
  id: 'janmashtami',
  src: galleryJanmashtami,
  alt: 'Students dressed in traditional Radha-Krishna attire during Janmashtami celebrations',
  objectPositionClass: 'object-[56.4%_50%]',
};

const BAND_ONE_GRID: GalleryTile[] = [
  {
    id: 'science-prize',
    src: gallerySciencePrize,
    alt: 'Students and faculty mentors presenting competition certificates',
  },
  {
    id: 'art-portrait-girl',
    src: homeGirlCircle,
    alt: 'Student participating in creative classroom and campus activities',
  },
  {
    id: 'ncc-parade',
    src: galleryNccParade,
    alt: 'Students marching during the school cadet parade ceremony',
  },
  {
    id: 'robotics-awards',
    src: homeBoyCircle,
    alt: 'Students receiving a trophy in school activity uniform',
  },
];

const BAND_TWO: GalleryTile[] = [
  {
    id: 'kindergarten-play',
    src: galleryKindergartenPlay,
    alt: 'Teacher engaging pre-primary children with floor mat learning games',
  },
  {
    id: 'faculty-celebration',
    src: galleryFacultyCelebration,
    alt: 'Faculty and students gathered together during an annual auditorium ceremony',
  },
];

const BAND_THREE: GalleryTile[] = [
  {
    id: 'stage-skit',
    src: galleryStageSkit,
    alt: 'Students performing a themed skit on stage during an auditorium program',
  },
  {
    id: 'guru-purnima-1',
    src: galleryTeachersAssembly,
    alt: 'Students seeking blessings from teachers on stage during Guru Purnima celebrations',
  },
  {
    id: 'guru-purnima-2',
    src: galleryTeachersAssembly,
    alt: 'Faculty standing with ceremonial aarti plates on stage during cultural assembly',
  },
];

const BAND_FOUR_GRID: GalleryTile[] = [
  {
    id: 'auditorium-event',
    src: galleryAuditoriumEvent,
    alt: 'School assembly seated inside the decorated multi-purpose hall',
  },
  {
    id: 'fruit-day',
    src: galleryAnnualStage,
    alt: 'Students dressed in vibrant fruit costumes for Fruit Day celebrations',
  },
  {
    id: 'sports-drill',
    src: schoolsHero1,
    alt: 'Students participating in track and field race events on the school ground',
  },
  {
    id: 'classroom-art',
    src: galleryClassroomArt,
    alt: 'Young students collaborating on art and craft tables in the classroom',
  },
];

const BAND_FOUR_RIGHT: GalleryTile = {
  id: 'red-dance',
  src: galleryRedDance,
  alt: 'Students performing a choreographed dance under concert stage lights',
};

const ALL_TILES: GalleryTile[] = [
  BAND_ONE_LEFT,
  ...BAND_ONE_GRID,
  ...BAND_TWO,
  ...BAND_THREE,
  ...BAND_FOUR_GRID,
  BAND_FOUR_RIGHT,
];

interface TileCardProps {
  tile: GalleryTile;
  className: string;
  onSelect: (index: number) => void;
}

const TileCard: React.FC<TileCardProps> = ({ tile, className, onSelect }) => {
  const index = ALL_TILES.indexOf(tile);
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`Open photo: ${tile.alt}`}
      className={`group relative block w-full overflow-hidden rounded-[16px] bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#073c96] ${className}`}
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className={`w-full h-full object-cover ${tile.objectPositionClass || 'object-center'} transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </button>
  );
};

const CreativeArtsGalleryGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % ALL_TILES.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + ALL_TILES.length) % ALL_TILES.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex]);

  const activeTile = activeIndex !== null ? ALL_TILES[activeIndex] : null;

  return (
    <section
      id="gallery"
      aria-label="Creative Arts & Student Life Photo Gallery"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 xl:pl-[56px] xl:pr-[57px] py-10 sm:py-12 lg:pt-[65px] lg:pb-[88px]">
        {/* Band 1: Large left tile + 2x2 sub-grid on right (Figma y=751..1301) */}
        <div className="grid grid-cols-1 lg:grid-cols-[582fr_727fr] gap-4 lg:gap-[18px]">
          <TileCard
            tile={BAND_ONE_LEFT}
            className="aspect-[582/550] lg:aspect-auto lg:h-full xl:h-[550px]"
            onSelect={setActiveIndex}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-[17px] lg:gap-y-[18px]">
            {BAND_ONE_GRID.map((tile) => (
              <TileCard
                key={tile.id}
                tile={tile}
                className="aspect-[355/266] xl:h-[266px]"
                onSelect={setActiveIndex}
              />
            ))}
          </div>
        </div>

        {/* Band 2: Two wide horizontal tiles (Figma y=1326..1724) */}
        <div className="mt-4 lg:mt-[25px] xl:pr-[1px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[16px]">
          {BAND_TWO.map((tile) => (
            <TileCard
              key={tile.id}
              tile={tile}
              className="aspect-[655/398] xl:h-[398px]"
              onSelect={setActiveIndex}
            />
          ))}
        </div>

        {/* Band 3: Three equal stage/celebration tiles (Figma y=1749..2070) */}
        <div className="mt-4 lg:mt-[25px] xl:pr-[1px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[428fr_427fr_428fr] gap-4 lg:gap-[21.5px]">
          {BAND_THREE.map((tile) => (
            <TileCard
              key={tile.id}
              tile={tile}
              className="aspect-[428/321] xl:h-[321px]"
              onSelect={setActiveIndex}
            />
          ))}
        </div>

        {/* Band 4: 2x2 sub-grid on left + large right tile (Figma y=2095..2645) */}
        <div className="mt-4 lg:mt-[25px] xl:pr-[1px] grid grid-cols-1 lg:grid-cols-[727fr_582fr] gap-4 lg:gap-[17px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-[17px] lg:gap-y-[18px]">
            {BAND_FOUR_GRID.map((tile) => (
              <TileCard
                key={tile.id}
                tile={tile}
                className="aspect-[355/266] xl:h-[266px]"
                onSelect={setActiveIndex}
              />
            ))}
          </div>
          <TileCard
            tile={BAND_FOUR_RIGHT}
            className="aspect-[582/550] lg:aspect-auto lg:h-full xl:h-[550px]"
            onSelect={setActiveIndex}
          />
        </div>
      </div>

      {/* Lightbox Modal on click */}
      {activeTile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeTile.alt}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery viewer"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === null
                      ? 0
                      : (prev - 1 + ALL_TILES.length) % ALL_TILES.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <img
                src={activeTile.src}
                alt={activeTile.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-[16px] object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % ALL_TILES.length
                  )
                }
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-center text-[13px] text-white/90 max-w-2xl">
              {activeTile.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreativeArtsGalleryGrid;
