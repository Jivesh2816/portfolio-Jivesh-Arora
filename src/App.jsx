// src/App.jsx
import React from 'react';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import ExperienceSection from './Experience';
import AboutSection from './About';
import SkillsSection from './skills';
import ProjectsSection from './projects';
import CertificationsSection from './Certifications';
import ContactSection from './contacts';
import ScrollProgress from '@/components/ScrollProgress';
import { Toaster } from '@/components/ui/sonner';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <Navbar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Toaster />
    </div>
  );
}

export default App;
