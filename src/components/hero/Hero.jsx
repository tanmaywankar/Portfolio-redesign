import React from 'react';
import { HeroGraphic } from './HeroGraphic';

export const Hero = () => {
  return (
    <section
      className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 md:pt-24 pb-16"
      data-purpose="hero-banner"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Pure Editorial Headline & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-black dark:text-white leading-[1.05]">
            Tanmay Wankar
            <span className="block font-mono text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 font-normal tracking-normal mt-3">
              Full-Stack &amp; Systems Engineer
            </span>
          </h1>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#top-projects"
              data-cursor="morph"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-cobalt text-white border-2 border-cobalt font-mono text-xs font-bold uppercase tracking-wider shadow-brutalist dark:shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white dark:hover:text-black active:translate-x-[2px] active:translate-y-[2px]"
            >
              ↘ VIEW PROJECTS
            </a>

            <a
              href="#skills-education"
              data-cursor="morph"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white dark:bg-charcoalCard text-ink dark:text-white border-2 border-ink dark:border-white font-mono text-xs font-bold uppercase tracking-wider shadow-brutalist dark:shadow-[4px_4px_0px_0px_#002BFF] transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:translate-x-[2px] active:translate-y-[2px]"
            >
              RESUME &amp; SKILLS
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Photo Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <HeroGraphic />
        </div>
      </div>

      {/* Centered Technical Mouse Indicator */}
      <div className="w-full flex justify-center pt-20 pb-4">
        <a
          href="#top-projects"
          data-cursor="morph"
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll down to projects"
        >
          <div className="w-6 h-11 border-2 border-ink dark:border-white rounded-full flex justify-center p-1.5 transition-transform group-hover:translate-y-1">
            <span className="w-1.5 h-2.5 bg-ink dark:bg-white rounded-full animate-bounce" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-subtle dark:text-neutral-400 font-semibold">
            SCROLL
          </span>
        </a>
      </div>
    </section>
  );
};
