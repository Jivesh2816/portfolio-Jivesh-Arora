// src/ProjectsSection.jsx
import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features a clean design with smooth animations, interactive components, and a comprehensive showcase of my skills, education, and leadership experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      image: "🎨",
      demoLink: "#", // Placeholder - will be updated when deployed
      sourceLink: "#" // Placeholder - will be updated when deployed
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are the projects I've built to showcase my skills and learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-slate-700/50 hover:border-blue-500/50"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Image/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-slate-600">
                      <span className="text-6xl">{project.image}</span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
                        <span>🌐</span>
                        View Live Demo
                      </button>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
                        <span>📁</span>
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">More Projects Coming Soon!</h3>
            <p className="text-slate-400">
              I'm actively working on new projects to expand my portfolio. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}