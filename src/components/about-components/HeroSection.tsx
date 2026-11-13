import React, { useState, useRef, useEffect } from "react";
import physicsLabImg from "../../assets/about-hero-physics-lab.png";

interface HeroSectionProps {
  videoUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPlaying) {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  return (
    <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[566px] bg-slate-950 flex items-center justify-center overflow-hidden select-none">
      {/* Full-bleed Physics Lab Poster & Video (Figma 1:1414: 1440 x 566) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={physicsLabImg}
          playsInline
          controls={isPlaying}
          onEnded={handleVideoEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Center Translucent Play Button (Figma 1:1415: 92 x 92, bg-white/57, duotone #073c96 play) */}
      {!isPlaying && (
        <div className="relative z-20 flex items-center justify-center lg:translate-x-[10px]">
          <button
            type="button"
            onClick={handlePlayToggle}
            className="group relative w-[76px] h-[76px] sm:w-[92px] sm:h-[92px] rounded-full bg-white/[0.57] hover:bg-white/80 flex items-center justify-center pl-[2px] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Play video"
          >
            <svg
              className="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M42.075 20.205L9.315 39.8475C9.1125 39.105 9 38.3175 9 37.5075V16.4925C9 9.5625 16.4925 5.2425 22.5 8.7075L31.59 13.95L40.7025 19.215C41.1975 19.5075 41.67 19.8225 42.075 20.205Z"
                fill="#073C96"
              />
              <path
                opacity="0.4"
                d="M40.7026 34.785L31.5901 40.05L22.5001 45.2925C18.2026 47.7675 13.1401 46.2825 10.6201 42.66L11.5651 42.0975L44.0551 22.6125C46.3051 26.6625 45.2026 32.1975 40.7026 34.785Z"
                fill="#073C96"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
