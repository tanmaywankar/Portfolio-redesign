import React from 'react';

export const HeroGraphic = ({ photoSrc }) => {
  return (
    <div className="relative flex justify-center lg:justify-end items-center">
      <div
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard p-5 shadow-brutalist dark:shadow-[4px_4px_0px_0px_#002BFF] flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1"
        data-cursor="hover-btn"
      >
        {/* Top Technical Metadata Stamp */}
        <div className="flex justify-between items-center font-mono text-[11px] text-ink/80 dark:text-neutral-300 border-b-2 border-ink dark:border-white pb-2.5">
          <span className="font-bold tracking-widest text-cobalt dark:text-cobaltAccent">
            COORD // 20.9°N 79.0°E
          </span>
          <span className="font-bold tracking-wider text-ink dark:text-white">
            STATUS // READY
          </span>
        </div>

        {/* Center Architectural Viewport Container for Portrait Photo */}
        <div className="relative flex-1 my-3 border border-ink/30 dark:border-white/30 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center overflow-hidden group">
          {/* Subtle Grid Backdrop */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {photoSrc ? (
            <img
              src={photoSrc}
              alt="Tanmay Wankar"
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
              <div className="w-20 h-20 border-2 border-ink dark:border-white flex items-center justify-center font-mono font-bold text-2xl text-ink dark:text-white bg-white dark:bg-black mb-3 shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]">
                TW
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink dark:text-white font-semibold">
                PORTRAIT // VIEWPORT
              </span>
              <span className="font-mono text-[10px] text-subtle dark:text-neutral-400 mt-1">
                MONOCHROME ARCHIVE
              </span>
            </div>
          )}

          {/* Corner Crosshair Marks */}
          <span className="absolute top-1.5 left-1.5 font-mono text-[9px] text-ink/50 dark:text-white/50 select-none">+</span>
          <span className="absolute top-1.5 right-1.5 font-mono text-[9px] text-ink/50 dark:text-white/50 select-none">+</span>
          <span className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-ink/50 dark:text-white/50 select-none">+</span>
          <span className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-ink/50 dark:text-white/50 select-none">+</span>
        </div>

        {/* Bottom Technical Stamp */}
        <div className="flex justify-between items-center font-mono text-[10px] text-ink/70 dark:text-neutral-400 border-t-2 border-ink dark:border-white pt-2">
          <span className="flex items-center gap-1.5 font-semibold text-ink dark:text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            NODE // NAGPUR-IN
          </span>
          <span className="font-bold text-cobalt dark:text-cobaltAccent tracking-wider">
            FRAME // ARCHITECTURAL
          </span>
        </div>
      </div>
    </div>
  );
};
