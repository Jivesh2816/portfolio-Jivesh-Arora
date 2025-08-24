// src/SkillsSection.jsx
import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
  ];

  const tools = [
    "Git & GitHub", "VS Code", "Figma", "Docker", "Postman", "MongoDB",
    "Firebase", "Express", "Tailwind CSS", "Redux", "Webpack"
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technical skills and tools I've mastered throughout my learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-slate-700 text-slate-300 px-4 py-2 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}