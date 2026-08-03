import React from 'react';

const ribbon = (text) => (
  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-700 text-green-400 tracking-wide">
    {text}
  </span>
);

const WORK_EXPERIENCE = [
  {
    role: 'Insight Analyst, Digital Analytics',
    company: 'RBC',
    period: 'Jan 2026 - Aug 2026',
    location: 'Toronto, Canada',
    bullets: [
      'Built and automated a PySpark ETL to Hive to Tableau pipeline with a DAG/YAML-based scheduler, replacing manual refreshes for a national reporting workflow.',
      'Diagnosed and fixed aggregation fan-out bugs in a multi-dashboard Tableau performance tracker for a national iPad campaign, using LOD expressions to reconcile YoY metrics across disjoint source tables.',
      'Traced and resolved data join discrepancies causing missing records, isolating the root cause to a regional mapping convention mismatch.',
      'Contributed to a Jira/Confluence-based issue-aging heatmap adopted for cross-team backlog tracking.',
    ],
  },
];

const LEADERSHIP = [
  {
    role: 'VP of Events',
    org: 'GRCA',
    icon: '🏛️',
    responsibilities: ['Event planning', 'Team coordination', 'Logistics'],
  },
  {
    role: 'Leadership Event Lead',
    org: 'UW Mehfil',
    icon: '🎭',
    responsibilities: ['Organizing events', 'Volunteer coordination', 'Planning'],
  },
  {
    role: 'Events Team Lead',
    org: 'UW Stats Club',
    icon: '📊',
    responsibilities: ['Team leadership', 'Event execution'],
  },
  {
    role: 'MathSoc Office Worker (Volunteer)',
    org: 'MathSoc',
    icon: '🧮',
    responsibilities: ['Office support', 'Student interaction', 'Administrative assistance'],
  },
];

const VOLUNTEERING = [
  {
    org: 'Robin Hood Army',
    duration: '2023 - 2024',
    icon: '🍲',
    responsibilities: ['Community service', 'Food distribution', 'Volunteer work'],
  },
  {
    org: 'COV.AID',
    icon: '🤝',
    responsibilities: ['Volunteer support', 'Community initiatives'],
  },
  {
    role: 'Under Secretary General of Delegate Affairs',
    org: 'SFSMUN',
    icon: '🌐',
    responsibilities: ['Leadership', 'Delegate management', 'Conference organization'],
  },
];

const ActivityCard = ({ icon, role, org, duration, responsibilities }) => (
  <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-500 ease-in-out group">
    <div className="text-center">
      <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h4 className="font-bold text-lg mb-1 text-green-400">{org}</h4>
      {role && <p className="text-blue-200 text-sm mb-1">{role}</p>}
      {duration && <p className="text-white text-sm">{duration}</p>}
    </div>

    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
      <div className="pt-4 mt-3 border-t border-slate-600">
        <div className="text-center mb-3">
          <h4 className="font-bold text-lg mb-3 text-blue-400">Key Responsibilities</h4>
        </div>
        <div className="text-sm text-gray-300 space-y-2">
          {responsibilities.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Experience</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Work Experience</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {WORK_EXPERIENCE.map((job) => (
              <div
                key={job.company}
                className="rounded-xl shadow-lg p-6 md:p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 hover:shadow-2xl hover:border-green-400 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-green-400">{job.company}</h4>
                    <p className="text-blue-200 text-lg">{job.role}</p>
                  </div>
                  <div className="text-right">
                    {ribbon(job.period)}
                    <p className="text-slate-400 text-sm mt-2">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Leadership</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {LEADERSHIP.map((item) => (
              <ActivityCard key={item.org + item.role} {...item} />
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Volunteering</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {VOLUNTEERING.map((item) => (
              <ActivityCard key={item.org} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
