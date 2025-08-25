import React from 'react';

const iconClass = 'mb-2 text-xl text-green-400';

const ribbon = (text) => (
  <div className="w-full flex items-center justify-center mb-2">
    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-700 text-green-400 tracking-wide">{text}</span>
  </div>
);

const SkillBox = ({ name, icon, color, details }) => (
  <div className="relative w-full group cursor-pointer">
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 rounded-lg p-4 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-xl">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-32">
        <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <span className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
          {name}
        </span>
      </div>
      
      {/* Details Section */}
      <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-32">
        <div className="pt-3 border-t border-slate-600">
          <div className="text-xs text-gray-300 space-y-1">
            {details && details.map((detail, index) => (
              <div key={index} className="flex items-start gap-1">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function AboutSection() {
  const skills = [
    { 
      name: "JavaScript", 
      icon: "⚡", 
      color: "yellow",
      
    },
    { 
      name: "React", 
      icon: "⚛️", 
      color: "blue",
      
    },
    { 
      name: "Python", 
      icon: "🐍", 
      color: "green",
    },
    { 
      name: "Java", 
      icon: "☕", 
      color: "orange",
      
    },
    { 
      name: "HTML/CSS", 
      icon: "🎨", 
      color: "pink",
      
    },
    { 
      name: "Git", 
      icon: "🌱", 
      color: "emerald",
      
    },
    { 
      name: "SQL", 
      icon: "🗄️", 
      color: "red",
      
    },
    { 
      name: "Racket", 
      icon: "🔷", 
      color: "amber",
    },
    { 
      name: "Tailwind CSS", 
      icon: "🎯", 
      color: "indigo",
    },
  ];

  return (
    <section id="about" className="py-16 bg-slate-800 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-blue-400">About Me</h2>
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full mb-4"></div>
        </div>

                {/* Main About Me Box - New Design */}
        <div className="mb-12 flex justify-center">
          <div className="relative max-w-5xl w-full">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-3xl blur-3xl"></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
              
              <div className="p-8 md:p-12">
                {/* Profile Header */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
                  {/* Profile Image Container */}
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 p-1">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-600 group-hover:border-blue-400 transition-all duration-300 overflow-hidden">
                        <img 
                          src="/profile-photo.jpg" 
                          alt="Jivesh Arora" 
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            console.log('Image failed to load, showing initials');
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">JA</span>
                        </div>
                      </div>
                    </div>
                    {/* Floating elements around profile */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-3 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center lg:text-left flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Jivesh Arora
                    </h3>
                    <p className="text-xl text-blue-300 mb-4 font-medium">CS Student & Aspiring Developer</p>
                    
                    {/* Status badges */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-green-400 text-sm font-medium">📍 Canada</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600">
                        <span className="text-blue-400">🎓</span>
                        <span className="text-blue-400 text-sm font-medium">University of Waterloo</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600">
                        <span className="text-purple-400">💻</span>
                        <span className="text-purple-400 text-sm font-medium">Full Stack Developer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Section */}
                <div className="mb-10">
                  <div className="relative">
                    {/* Section header with icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">✨</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">My Journey</h4>
                    </div>
                    
                    {/* Story content with gradient border */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-2xl"></div>
                      <div className="relative z-10">
                        <p className="text-gray-200 leading-relaxed text-lg mb-4">
                        I’m a Computer Science student at the University of Waterloo with a strong passion for problem-solving, mathematics, and technology. What began as curiosity for how things work has grown into a commitment to building efficient, user-friendly, and impactful applications.
                        </p>
                        <p className="text-gray-200 leading-relaxed text-lg">
                        Along the way, I’ve developed skills in Python, Java, JavaScript, HTML, CSS, SQL, and Racket, while exploring areas like full-stack development and data science. I believe in writing clean code, embracing continuous learning, and turning challenges into opportunities to grow.
                        </p>
                        <p className="text-gray-200 leading-relaxed text-lg">
                        Beyond academics, I’ve taken on leadership and event coordination roles—mentoring peers, organizing cultural and tech events, and collaborating with diverse teams. These experiences have strengthened not only my technical expertise but also my communication, teamwork, and problem-solving abilities.
                        </p>
                        <p className="text-gray-200 leading-relaxed text-lg">
                        Looking ahead, I’m eager to contribute to innovative projects, gain valuable experience through co-op, and continue developing as a well-rounded software developer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🛠️</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Technical Skills & Technologies</h4>
                  </div>
                  
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <SkillBox 
                    key={index}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    details={skill.details}
                  />
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Education Journey</h3>
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            <div className="flex-1 rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-green-400 transition-all duration-300 ease-in-out">
              {ribbon('University')}
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎓</span>
                <h4 className="font-bold text-xl mb-2 text-green-400">University of Waterloo</h4>
                <p className="text-blue-200 text-lg mb-2">BSc Computer Science</p>
                <p className="text-blue-400 text-lg mb-4 font-semibold">2025 - Present </p>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-3">
                    <span className="text-gray-300">GPA: </span>
                    <span className="text-white font-semibold">3.7/4.0</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-300 ease-in-out">
              {ribbon('High School')}
              <div className="text-center">
                <span className="text-4xl mb-4 block">🏅</span>
                <h4 className="font-bold text-xl mb-2 text-green-400">Summer Fields School, New Delhi, India</h4>
                <p className="text-blue-200 text-lg mb-2">High School Diploma</p>
                <p className="text-blue-400 text-lg mb-4 font-semibold">2011 - 2024</p>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-3">
                    <span className="text-gray-300">Scholar: </span>
                    <span className="text-white font-semibold">6 Consecutive Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Activities */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Leadership & Activities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* GRCA */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="grca-card">
              {ribbon('Vice President')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">🏛️</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">Government Risk Compliance Association (GRCA)</h4>
                <p className="text-blue-200 text-sm mb-2">Vice President of Events | April 2025 - Present</p>
                <p className="text-white text-sm mb-2">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Leading event planning for newly established club</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Building club's event structure and logistics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Supporting long-term growth strategies</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Developing templates and frameworks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Club */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="stats-card">
              {ribbon('Events Lead')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">📊</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">Stats Club, UW</h4>
                <p className="text-blue-200 text-sm mb-2">Events Lead | April 2025 - Present</p>
                <p className="text-white text-sm mb-2">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Lead event planning and guest speaker coordination</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Oversee logistics, marketing, and volunteer teams</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Develop budgets, timelines, and resource plans</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Conduct post-event reviews and improvements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* UW Mehfil */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="mehfil-card">
              {ribbon('Events Lead')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">🎭</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">UW Mehfil</h4>
                <p className="text-blue-200 text-sm mb-2">Events Lead</p>
                <p className="text-white text-sm">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Organize cultural and entertainment events</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Coordinate with performers and venues</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Manage event logistics and promotion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Ensure successful event execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WUSA Off Campus Don */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="wusa-card">
              {ribbon('Off Campus Don')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">🏠</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">WUSA</h4>
                <p className="text-blue-200 text-sm mb-2">Off Campus Don</p>
                <p className="text-white text-sm">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Support off-campus student community</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Provide guidance and resources</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Organize community events</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Foster student engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Volunteer Cashier - Cheshire */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="cheshire-card">
              {ribbon('Volunteer')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">🛒</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">Novelities & Ridgidware Store</h4>
                <p className="text-blue-200 text-sm mb-2">Volunteer Cashier</p>
                <p className="text-white text-sm">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Process customer transactions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Provide excellent customer service</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Maintain organized store environment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Support store operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Volunteer Cashier - MathSoc */}
            <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group" id="mathsoc-card">
              {ribbon('Volunteer')}
              <div className="text-center">
                <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">🧮</span>
                <h4 className="font-bold text-lg mb-2 text-green-400">MathSoc Office</h4>
                <p className="text-blue-200 text-sm mb-2">Volunteer Cashier</p>
                <p className="text-white text-sm">Waterloo, Canada</p>
              </div>
              
              {/* Details Section */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
                <div className="pt-4 border-t border-slate-600">
                  <div className="text-center mb-3">
                    <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Handle MathSoc office transactions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Assist with student inquiries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Support office administration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Contribute to student community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section - New Design */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">Interests & Hobbies</h3>
            <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* Gym */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-4 border border-red-500/30 hover:border-red-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">💪</span>
                      <span className="text-sm font-medium text-white group-hover:text-red-300 transition-colors duration-300">Gym</span>
                    </div>
                  </div>
                </div>

                {/* Badminton */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-4 border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">🏸</span>
                      <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors duration-300">Badminton</span>
                    </div>
                  </div>
                </div>

                {/* Swimming */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl p-4 border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">🏊‍♂️</span>
                      <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">Swimming</span>
                    </div>
                  </div>
                </div>

                {/* Cricket */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-4 border border-green-500/30 hover:border-green-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">🏏</span>
                      <span className="text-sm font-medium text-white group-hover:text-green-300 transition-colors duration-300">Cricket</span>
                    </div>
                  </div>
                </div>

                {/* Volunteering */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-4 border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">🤝</span>
                      <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Volunteering</span>
                    </div>
                  </div>
                </div>

                {/* Traveling */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl p-4 border border-yellow-500/30 hover:border-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">✈️</span>
                      <span className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors duration-300">Traveling</span>
                    </div>
                  </div>
                </div>

                {/* Cooking */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-4 border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">👨‍🍳</span>
                      <span className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors duration-300">Cooking</span>
                    </div>
                  </div>
                </div>

                {/* Coding */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl p-4 border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">💻</span>
                      <span className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors duration-300">Coding</span>
                    </div>
                  </div>
                </div>

                 {/* Mathematics */}
                 <div className="group relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-4 border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">🔢</span>
                      <span className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors duration-300">Mathematics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
