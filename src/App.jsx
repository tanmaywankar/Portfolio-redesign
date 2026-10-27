import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { TopProjects } from './components/projects/TopProjects';
import { OtherProjectsGrid } from './components/projects/OtherProjectsGrid';
import { SkillsEducation } from './components/skills/SkillsEducation';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { useLenis } from './hooks/useLenis';

export const App = () => {
  // Initialize Lenis smooth scroll for desktop with touch protection
  useLenis();

  return (
    <div className="min-h-screen bg-paper dark:bg-charcoal text-ink dark:text-white font-sans selection:bg-cobalt selection:text-white relative transition-colors duration-250">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TopProjects />
        <OtherProjectsGrid />
        <SkillsEducation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
