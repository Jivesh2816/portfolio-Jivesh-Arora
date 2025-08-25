// src/components/IntroSection.jsx
import React, { useState, useEffect } from 'react';

export default function IntroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    "Computer Science Student",
    "Data Science Enthusiast", 
    "Driven by Curiosity",
    "Tech Enthusiast",
    "Aspiring Software Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => 
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-28"
    >
      <div 
        className="text-left max-w-3xl ml-16" 
        style={{ transform: 'translateX(80px)' }}
      >
        <h1 className="text-6xl font-bold mb-5">Jivesh Arora</h1>
        <h2 className="text-3xl text-gray-400 mb-8">
          <span className="inline-block min-w-[400px]">
            {titles[currentTitleIndex]}
          </span>
        </h2>
        
        <p className="text-xl mb-10">
        Computer Science student at the University of Waterloo with a passion for developing efficient solutions and leveraging new technologies
        </p>
        
        <div className="flex">
          {/* Download Resume Button */}
          <button
            onClick={() => window.location.href = '/resume.pdf'}
            className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-4 px-8 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Download Resume
          </button>
          
          {/* Hire Me Button */}
          <button
            onClick={scrollToContact}
            className="ml-10 bg-gradient-to-br from-green-500 to-teal-500 text-white py-4 px-8 rounded-xl hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}