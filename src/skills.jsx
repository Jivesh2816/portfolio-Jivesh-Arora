// src/skills.jsx
import React from 'react';

const BRANCHES = [
  {
    label: 'Languages',
    color: '#67e8f9',
    x: 163,
    skills: ['JavaScript', 'Python', 'Java', 'SQL', 'Racket'],
  },
  {
    label: 'Frameworks & AI',
    color: '#c4b5fd',
    x: 490,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'LangChain'],
  },
  {
    label: 'Tools & Cloud',
    color: '#86efac',
    x: 816,
    skills: ['Git', 'Docker', 'AWS', 'Tableau', 'MongoDB'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Skills</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            The languages, frameworks, and tools I build with.
          </p>
        </div>

        <div className="tree mx-auto" style={{ width: '980px', maxWidth: '100%', position: 'relative' }}>
          <div className="t-root">
            <div className="lbl">MY SKILLS</div>
          </div>

          <svg
            width="100%"
            height="60"
            style={{ display: 'block', margin: '0 auto' }}
            viewBox="0 0 980 60"
            preserveAspectRatio="none"
          >
            {BRANCHES.map((branch) => (
              <path
                key={branch.label}
                className="t-connector"
                d={`M490,0 L${branch.x},60`}
              />
            ))}
          </svg>

          <div className="t2b-branches">
            {BRANCHES.map((branch) => (
              <div className="t2b-branch" key={branch.label}>
                <div className="t2b-node" style={{ background: branch.color }}>
                  {branch.label}
                </div>
                <div className="t-row">
                  {branch.skills.map((skill) => (
                    <span
                      key={skill}
                      className="t-pill"
                      style={{ '--accent': branch.color }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #skills .t-root{width:220px;margin:0 auto;background:linear-gradient(180deg,#1b2a52,#141f3a);border:1px solid rgba(139,158,255,.35);border-radius:8px;padding:14px 10px;text-align:center;position:relative;z-index:2}
        #skills .t-root .lbl{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px;letter-spacing:.06em;color:#dbe3ff}
        #skills .t-pill{display:inline-flex;align-items:center;padding:8px 14px;border-radius:6px;background:#101a30;border:1px solid rgba(76,141,255,.35);color:#8ab4ff;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;transition:transform .2s ease,background-color .2s ease,border-color .2s ease,color .2s ease,box-shadow .2s ease}
        #skills .t-pill:hover{background:color-mix(in srgb, var(--accent) 20%, #101a30);border-color:var(--accent);color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 18px -8px var(--accent)}
        #skills .t-row{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
        #skills .t-connector{stroke:rgba(148,163,184,.4);stroke-width:1.5;fill:none}
        #skills .t2b-branches{display:flex;justify-content:space-between;margin-top:60px;gap:20px;flex-wrap:wrap}
        #skills .t2b-branch{flex:1;min-width:220px;display:flex;flex-direction:column;align-items:center;gap:12px}
        #skills .t2b-node{padding:9px 16px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#0a0f1e;text-align:center;transition:transform .2s ease,box-shadow .2s ease;cursor:default}
        #skills .t2b-node:hover{transform:scale(1.06);box-shadow:0 6px 16px -6px currentColor}
      `}</style>
    </section>
  );
}
