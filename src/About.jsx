import React from 'react';

const INTERESTS = [
  { label: 'Gym', icon: '💪', big: true, bg: 'linear-gradient(135deg,rgba(239,68,68,.22),rgba(249,115,22,.12))', border: 'rgba(239,68,68,.3)' },
  { label: 'Coding', icon: '💻', bg: 'rgba(59,130,246,.14)', border: 'rgba(59,130,246,.3)' },
  { label: 'Badminton', icon: '🏸', bg: 'rgba(20,184,166,.14)', border: 'rgba(20,184,166,.3)' },
  { label: 'Swimming', icon: '🏊', bg: 'rgba(6,182,212,.14)', border: 'rgba(6,182,212,.3)' },
  { label: 'Cricket', icon: '🏏', bg: 'rgba(34,197,94,.14)', border: 'rgba(34,197,94,.3)' },
  { label: 'Volunteering', icon: '🤝', bg: 'rgba(168,85,247,.14)', border: 'rgba(168,85,247,.3)' },
  { label: 'Traveling', icon: '✈️', bg: 'rgba(234,179,8,.14)', border: 'rgba(234,179,8,.3)' },
  { label: 'Cooking', icon: '👨‍🍳', bg: 'rgba(217,119,6,.14)', border: 'rgba(217,119,6,.3)' },
  { label: 'Studying Maths', icon: '📚', bg: 'rgba(139,157,255,.14)', border: 'rgba(139,157,255,.3)' },
];

const ribbon = (text) => (
  <div className="w-full flex items-center justify-center mb-2">
    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-700 text-green-400 tracking-wide">{text}</span>
  </div>
);

export default function AboutSection() {
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
                <div className="flex flex-col items-center mb-10">
                  {/* Profile Info */}
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Jivesh Arora
                    </h3>
                    <p className="text-xl text-blue-300 mb-4 font-medium">CS Student & Aspiring Developer</p>

                    {/* Status badges */}
                    <div className="flex flex-wrap gap-3 justify-center">
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

                {/* Story Section - Two Column with Trait Cards */}
                <div className="mb-10">
                  <div className="relative">
                    {/* Section header with icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#22d3ee,#34d399)' }}>
                        <span className="text-lg">✨</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">My Journey</h4>
                    </div>

                    {/* Two-column split: story text + trait cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-8 items-start">
                      <div>
                        <p className="text-[14.5px] leading-[1.75] mb-3.5" style={{ color: '#b6c2d9' }}>
                          I'm a Computer Science student at the University of Waterloo, driven by problem-solving, mathematics, and a habit of turning curiosity into working software.
                        </p>
                        <p className="text-[14.5px] leading-[1.75]" style={{ color: '#b6c2d9' }}>
                          I care about clean code and continuous learning — and I'm looking for a co-op where I can put that to work on real problems.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3.5">
                        <div className="rounded-xl p-3.5 px-4" style={{ background: '#101a30', border: '1px solid rgba(255,255,255,.07)' }}>
                          <div className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: '#67e8f9' }}>Focus</div>
                          <div className="text-[13.5px] font-medium leading-relaxed text-slate-200">Full-stack development &amp; data science</div>
                        </div>
                        <div className="rounded-xl p-3.5 px-4" style={{ background: '#101a30', border: '1px solid rgba(255,255,255,.07)' }}>
                          <div className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: '#67e8f9' }}>Beyond Code</div>
                          <div className="text-[13.5px] font-medium leading-relaxed text-slate-200">Mentoring peers, organizing tech &amp; cultural events</div>
                        </div>
                        <div className="rounded-xl p-3.5 px-4" style={{ background: '#101a30', border: '1px solid rgba(255,255,255,.07)' }}>
                          <div className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: '#67e8f9' }}>Right Now</div>
                          <div className="text-[13.5px] font-medium leading-relaxed text-slate-200">Open to co-op &amp; internship opportunities</div>
                        </div>
                      </div>
                    </div>
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

        {/* Interests Section - Bento Grid */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#8b9dff] to-[#67e8f9] bg-clip-text text-transparent">
              Interests &amp; Hobbies
            </h3>
            <div className="w-14 h-[3px] rounded-full bg-green-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[90px] gap-3">
              {INTERESTS.map(({ label, icon, big, bg, border }) => (
                <div
                  key={label}
                  className={`group flex flex-col items-center justify-center gap-1.5 rounded-2xl border cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    big ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{ background: bg, borderColor: border }}
                >
                  <span className={`${big ? 'text-3xl' : 'text-xl'} block transition-transform duration-300 group-hover:scale-110`}>
                    {icon}
                  </span>
                  <span className={`${big ? 'text-[15px]' : 'text-[13px]'} font-semibold text-slate-100 text-center px-1`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
