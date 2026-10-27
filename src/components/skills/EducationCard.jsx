import React from 'react';
import { GraduationCap } from 'lucide-react';

export const EducationCard = ({ education }) => {
  return (
    <div
      className="border-2 border-ink dark:border-white p-6 sm:p-8 bg-white dark:bg-charcoalCard relative brutalist-card-shadow"
      data-purpose="education-card"
    >
      {/* Accredited Degree Badge */}
      <div
        data-cursor="morph"
        className="absolute top-0 right-0 bg-cobalt text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider border-b-2 border-l-2 border-ink dark:border-white cursor-pointer select-none"
      >
        {education.badge}
      </div>

      <div className="flex items-center gap-2 mb-2 text-cobalt dark:text-cobaltAccent">
        <GraduationCap className="w-5 h-5 stroke-[2.2]" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider">
          ACADEMIC QUALIFICATION
        </span>
      </div>

      <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink dark:text-white uppercase tracking-wide">
        {education.degree}
      </h4>

      <p className="font-mono text-xs sm:text-sm text-subtle dark:text-neutral-400 mt-1.5 font-medium">
        {education.institution}
      </p>

      <p className="font-mono text-xs text-subtle dark:text-neutral-400 mt-1">
        {education.period}
      </p>

      <div
        data-cursor="morph"
        className="inline-block mt-3 font-mono text-xs font-bold text-ink dark:text-white bg-white dark:bg-black border border-ink dark:border-white hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors px-2.5 py-1 cursor-pointer select-none"
      >
        {education.cgpa}
      </div>

      <div className="mt-6 pt-5 border-t-2 border-ink/10 dark:border-white/10">
        <p className="font-mono text-xs font-bold text-ink dark:text-white uppercase mb-3">
          Relevant Coursework:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
          {education.coursework.map((course) => (
            <span
              key={course}
              data-cursor="morph"
              className="flex items-center gap-2 px-3 py-1.5 border border-ink dark:border-white/70 bg-white dark:bg-charcoalCard text-ink dark:text-white font-medium hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white hover:text-white dark:hover:text-black transition-colors cursor-pointer select-none group"
            >
              <span className="w-1.5 h-1.5 bg-cobalt group-hover:bg-white transition-colors inline-block" />
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
