import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'top-projects', label: 'Projects' },
  { id: 'skills-education', label: 'Skills & Edu' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-3 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left balance spacer */}
        <div className="hidden md:block w-24">
          <a
            href="#hero"
            data-cursor="morph"
            className="font-mono text-xs font-bold text-ink dark:text-white tracking-widest uppercase hover:text-cobalt transition-colors inline-block"
          >
            TW // '26
          </a>
        </div>

        {/* Centered Brutalist Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="inline-flex border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_#002BFF] transition-all duration-200"
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;
            const isLast = index === NAV_ITEMS.length - 1;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor="morph"
                className={`px-4 sm:px-7 py-2 font-mono text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                  !isLast ? 'border-r-2 border-ink dark:border-white' : ''
                } ${
                  isActive
                    ? 'bg-cobalt text-white'
                    : 'bg-white dark:bg-charcoalCard text-ink dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Top Right Brutalist Theme Toggle */}
        <div className="flex items-center justify-end w-24">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
