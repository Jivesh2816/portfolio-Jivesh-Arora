import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

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
  { role: 'VP of Events', org: 'GRCA', icon: '🏛️', responsibilities: ['Event planning', 'Team coordination', 'Logistics'] },
  { role: 'Leadership Event Lead', org: 'UW Mehfil', icon: '🎭', responsibilities: ['Organizing events', 'Volunteer coordination', 'Planning'] },
  { role: 'Events Team Lead', org: 'UW Stats Club', icon: '📊', responsibilities: ['Team leadership', 'Event execution'] },
  { role: 'MathSoc Office Worker (Volunteer)', org: 'MathSoc', icon: '🧮', responsibilities: ['Office support', 'Student interaction', 'Administrative assistance'] },
];

const VOLUNTEERING = [
  { org: 'Robin Hood Army', duration: '2023 - 2024', icon: '🍲', responsibilities: ['Community service', 'Food distribution', 'Volunteer work'] },
  { org: 'COV.AID', icon: '🤝', responsibilities: ['Volunteer support', 'Community initiatives'] },
  { role: 'Under Secretary General of Delegate Affairs', org: 'SFSMUN', icon: '🌐', responsibilities: ['Leadership', 'Delegate management', 'Conference organization'] },
];

const ActivityCard = ({ icon, role, org, duration, responsibilities }) => (
  <Card className="p-6 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 group">
    <div className="text-center">
      <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h4 className="font-bold text-lg mb-1 text-foreground">{org}</h4>
      {role && <p className="text-muted-foreground text-sm mb-1">{role}</p>}
      {duration && <p className="text-primary text-sm font-mono">{duration}</p>}
    </div>

    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
      <div className="pt-4 mt-3 border-t border-border">
        <div className="text-center mb-3 font-mono text-xs text-primary">$ cat responsibilities.txt</div>
        <div className="text-sm text-muted-foreground space-y-2">
          {responsibilities.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1">›</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading command="cat experience.log" title="Experience" />

        <Tabs defaultValue="work" className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="work">work</TabsTrigger>
            <TabsTrigger value="leadership">leadership</TabsTrigger>
            <TabsTrigger value="volunteering">volunteering</TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="w-full">
            <Reveal className="space-y-8 max-w-4xl mx-auto" y={24}>
              {WORK_EXPERIENCE.map((job) => (
                <Card key={job.company} className="p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-2xl font-display font-bold text-foreground">{job.company}</h4>
                      <p className="text-muted-foreground text-lg">{job.role}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="accent">{job.period}</Badge>
                      <p className="text-muted-foreground text-sm mt-2 font-mono">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </Reveal>
          </TabsContent>

          <TabsContent value="leadership" className="w-full">
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" y={24} stagger={0.1}>
              {LEADERSHIP.map((item) => (
                <ActivityCard key={item.org + item.role} {...item} />
              ))}
            </Reveal>
          </TabsContent>

          <TabsContent value="volunteering" className="w-full">
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" y={24} stagger={0.1}>
              {VOLUNTEERING.map((item) => (
                <ActivityCard key={item.org} {...item} />
              ))}
            </Reveal>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
