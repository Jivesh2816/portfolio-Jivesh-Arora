// src/App.jsx
import React from 'react';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import AboutSection from './About';
import ResearchSection from './Research';
import ExperienceSection from './Experience';
import ProjectsSection from './projects';
import SkillsSection from './skills';
import EducationSection from './Certifications';
import ContactSection from './contacts';
import ScrollProgress from '@/components/ScrollProgress';
import { Toaster } from '@/components/ui/sonner';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <IntroSection />
        <AboutSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
