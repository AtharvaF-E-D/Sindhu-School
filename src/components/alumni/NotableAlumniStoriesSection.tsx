import React, { useState, useEffect } from 'react';
import shubham1Img from '../../assets/alumni-shubham-1.png';
import shubham2Img from '../../assets/alumni-shubham-2.png';
import shubham3Img from '../../assets/alumni-shubham-3.png';
import vilas1Img from '../../assets/alumni-awardee-vilas.png';
import vilas2Img from '../../assets/alumni-vilas-2.png';
import shubhamAwardImg from '../../assets/alumni-awardee-shubham.png';
import vilas4Img from '../../assets/alumni-vilas-4.png';

interface AlumniGalleryPhoto {
  id: string;
  src: string;
  alt: string;
}

const SHUBHAM_GALLERY: AlumniGalleryPhoto[] = [
  { id: 'sh-1', src: shubham1Img, alt: 'Shubham Dubey felicitated on school stage' },
  { id: 'sh-2', src: shubham2Img, alt: 'Shubham Dubey batting in cricket match' },
  { id: 'sh-3', src: shubham3Img, alt: 'Shubham Dubey during IPL auction spotlight' },
  { id: 'sh-4', src: shubham1Img, alt: 'Shubham Dubey honoured at Mahatma Gandhi School' },
];

const VILAS_GALLERY: AlumniGalleryPhoto[] = [
  { id: 'vl-1', src: vilas1Img, alt: 'Dr. Vilas Ramteke sir honoured by SES leadership' },
  { id: 'vl-2', src: vilas2Img, alt: 'Dr. Vilas Ramteke sir addressing alumni event' },
  { id: 'vl-3', src: shubhamAwardImg, alt: 'Distinguished alumni felicitation ceremony' },
  { id: 'vl-4', src: vilas4Img, alt: 'Alumni interaction with SES students and faculty' },
];

const SHUBHAM_PARAGRAPHS = [
  'With immense joy, I, Shubham Dubey, extend my heartfelt gratitude through these words. My journey, from the early cricket practices on the grounds of Mahatma Gandhi School to the grand stage of IPL, is a testament to the foundation laid by SES.',
  'The credit for my success goes beyond the cricket pitch. SES has been my haven of morals, values, and life lessons. The teachers, mentors, and every corner of this institution contributed to shaping not just the cricketer but the person I am today.',
  'From instilling discipline to fostering a spirit of camaraderie, SES has given me everything.',
];

const VILAS_PARAGRAPHS = [
  'As I take a stroll down memory lane, I, Dr. Vishal Ramteke, currently a professor at a well-regarded Mumbai college, owe much of my professional journey to the nurturing embrace of Mahatma Gandhi Centennial Sindhu High School. Back in those days, Principal K.C. Bajaj, known for his unwavering dedication, guided our educational ship with a steady hand, making my school years not just about textbooks but also about imbibing values, morals, and discipline.',
  'Principal K.C. Bajaj, a true education maven, left an indelible mark on my character. His leadership created an atmosphere where learning wasn’t just a routine but a journey enriched with life lessons. The dedicated teachers, each a source of knowledge and guidance, played a crucial role in shaping both my academic and personal growth.',
  'As I find myself steering the ship of education in Mumbai today, I proudly proclaim that Mahatma Gandhi Centennial Sindhu High School is unparalleled in its commitment to providing a well-rounded education. Principal K.C. Bajaj’s influence and the collective effort of the faculty continue to resonate in every lecture I deliver, showcasing the enduring impact of a quality education received at this remarkable alma mater. This school, with its rich legacy, stands as a beacon of excellence in Maharashtra, molding not just students but individuals armed with knowledge and values.',
];

const NotableAlumniStoriesSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<AlumniGalleryPhoto | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPhoto]);

  return (
    <section
      id="notable-alumni-stories"
      aria-labelledby="notable-alumni-stories-heading"
      className="w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-0 pt-14 xl:pt-[66px] pb-14 xl:pb-[132px]">
        {/* Section Heading & Green Divider (Figma 37:2821 & 37:2824) */}
        <h2
          id="notable-alumni-stories-heading"
          className="text-center text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] lg:leading-[54px] font-extrabold tracking-[-1.35px] text-[#073c96]"
        >
          Alumni Connect
        </h2>
        <div className="mt-[16px] mx-auto w-full max-w-[782px] h-[2px] bg-[#40c843]" />

        {/* Story 1: Shubham Dubey, Batch 2010 */}
        <div className="xl:pl-[72px] xl:pr-[74px] mt-12 xl:mt-[89px]">
          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] lg:leading-[41px] font-bold text-[#171717]">
            Shubham Dubey, Batch 2010
          </h3>

          <div
            data-alumni-story="shubham"
            className="mt-[16px] xl:w-[1267px] text-[17px] sm:text-[20px] xl:text-[24px] leading-[1.65] xl:leading-[41px] font-medium text-[#171717] text-justify"
          >
            {SHUBHAM_PARAGRAPHS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div
            id="alumni-event-gallery"
            className="mt-8 xl:mt-[45px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[308px_307px_308px_308px] gap-5 xl:gap-[21px] scroll-mt-24"
          >
            {SHUBHAM_GALLERY.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="relative h-[220px] xl:h-[246px] rounded-[24px] overflow-hidden bg-slate-100 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#40c843]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Story 2: Dr.Vilas Ramteke sir, Batch 1983 */}
        <div className="xl:pl-[72px] xl:pr-[74px] mt-14 xl:mt-[86px]">
          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] lg:leading-[41px] font-bold text-[#171717]">
            Dr.Vilas Ramteke sir, Batch 1983
          </h3>

          <div
            data-alumni-story="vilas"
            className="mt-[22px] xl:w-[1267px] text-[17px] sm:text-[20px] xl:text-[24px] leading-[1.65] xl:leading-[41px] font-medium text-[#171717] text-justify"
          >
            {VILAS_PARAGRAPHS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-8 xl:mt-[63px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[308px_307px_308px_308px] gap-5 xl:gap-[21px]">
            {VILAS_GALLERY.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="relative h-[220px] xl:h-[246px] rounded-[24px] overflow-hidden bg-slate-100 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#40c843]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full max-h-[80vh] object-contain bg-slate-900"
            />
            <div className="px-5 py-3 flex items-center justify-between gap-4 bg-white">
              <p className="text-[14px] font-medium text-[#171717]">{selectedPhoto.alt}</p>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-1.5 rounded-full bg-[#073c96] text-white text-[13px] font-semibold cursor-pointer hover:bg-[#062d73]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NotableAlumniStoriesSection;

