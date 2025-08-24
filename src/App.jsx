// src/App.jsx
import React from 'react';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import AboutSection from './About';
import ProjectsSection from './projects';
import ContactSection from './contacts';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-slate-900 text-white min-h-screen">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;