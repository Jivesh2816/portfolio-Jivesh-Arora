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
import './index.css';

function App() {
  return (
    <div className="font-sans bg-slate-900 text-white min-h-screen">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}

export default App;