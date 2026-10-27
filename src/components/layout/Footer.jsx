import React from 'react';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-white dark:bg-charcoal text-ink dark:text-white pt-14 pb-12 px-6 sm:px-10 border-t-2 border-ink dark:border-white transition-colors duration-250"
      data-purpose="site-footer"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        {/* Creator Identification */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-white uppercase">
            TANMAY WANKAR
          </h2>
          <p className="font-mono text-xs text-subtle dark:text-neutral-400 mt-1.5 tracking-wide">
            Nagpur, Maharashtra, India — Full-Stack &amp; Systems Engineer
          </p>
          <p className="font-mono text-[11px] text-ink/70 dark:text-neutral-400 mt-6 tracking-wider">
            © {currentYear} TANMAY WANKAR. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Social & Connect Action Buttons with Brutalist Micro-Interactions */}
        <div className="flex items-center space-x-3">
          {/* GitHub */}
          <a
            aria-label="GitHub Profile"
            className="w-10 h-10 bg-cobalt text-white flex items-center justify-center border-2 border-cobalt hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white hover:text-white dark:hover:text-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[1px] active:translate-y-[1px]"
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
            data-cursor="morph"
          >
            <Github className="w-4 h-4 stroke-[2.2]" />
          </a>

          {/* LinkedIn */}
          <a
            aria-label="LinkedIn Profile"
            className="w-10 h-10 bg-cobalt text-white flex items-center justify-center border-2 border-cobalt hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white hover:text-white dark:hover:text-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[1px] active:translate-y-[1px]"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
            data-cursor="morph"
          >
            <Linkedin className="w-4 h-4 stroke-[2.2]" />
          </a>

          {/* Phone */}
          <a
            aria-label="Phone Contact"
            className="w-10 h-10 bg-cobalt text-white flex items-center justify-center border-2 border-cobalt hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white hover:text-white dark:hover:text-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[1px] active:translate-y-[1px]"
            href="tel:+910000000000"
            data-cursor="morph"
          >
            <Phone className="w-4 h-4 stroke-[2.2]" />
          </a>

          {/* Mail */}
          <a
            aria-label="Email Contact"
            className="w-10 h-10 bg-cobalt text-white flex items-center justify-center border-2 border-cobalt hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white hover:text-white dark:hover:text-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[1px] active:translate-y-[1px]"
            href="mailto:tanmay@example.com"
            data-cursor="morph"
          >
            <Mail className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
