import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const RBC = {
  company: 'Royal Bank of Canada (RBC)',
  role: 'Insight Analyst, Digital Analytics (Personal & Commercial Banking)',
  period: 'Jan 2026 - Aug 2026',
  location: 'Toronto, Canada',
  highlights: [
    { value: '~8h → ~10m', label: 'daily reporting time' },
    { value: '~27x', label: 'metric inflation caught' },
    { value: '3+', label: 'Tableau dashboards fed' },
  ],
  bullets: [
    'Engineered a daily PySpark → Hive ETL pipeline orchestrated with YAML-defined Airflow DAGs, refreshing datasets for 3+ Tableau dashboards and cutting reporting from ~8 hours to ~10 minutes per day.',
    'Diagnosed a Tableau fan-out bug that was inflating an iPad campaign metric ~27x, and fixed it with FIXED LOD expressions.',
    'Built base and aggregated data models joining sales, customer postal codes, and campaign assignments to track new chequing accounts and campaign response by geographic region.',
    'Migrated legacy QuickSight reporting to Tableau, rewriting its SQL transformation logic in PySpark.',
  ],
  tags: ['PySpark', 'Hive', 'Airflow', 'SQL', 'Tableau', 'Data Modelling'],
};

const DON = {
  company: 'WUSA, University of Waterloo',
  role: 'Off-Campus Don',
  period: 'Aug 2025 - Apr 2026',
  text: 'Supported a community of 5,000+ off-campus students with guidance on housing, tenancy, and safety.',
};

const LEADERSHIP = [
  'VP of Events, GRCA',
  'Events Team Lead, UW Stats Club',
  'Leadership Event Lead, UW Mehfil',
  'MathSoc Office Volunteer',
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading command="cat experience.log" title="Experience" />

        <Reveal className="space-y-6 max-w-4xl mx-auto" y={24} stagger={0.12}>
          <Card className="p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">{RBC.company}</h3>
                <p className="text-muted-foreground text-lg">{RBC.role}</p>
              </div>
              <div className="sm:text-right">
                <Badge variant="accent">{RBC.period}</Badge>
                <p className="text-muted-foreground text-sm mt-2 font-mono">{RBC.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {RBC.highlights.map((h) => (
                <div key={h.label} className="rounded border border-border bg-muted/40 px-3 py-3 text-center">
                  <div className="font-mono font-bold text-primary text-base sm:text-xl">{h.value}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">{h.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 text-muted-foreground mb-6">
              {RBC.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {RBC.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>

          <Card className="p-5 md:px-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-display font-semibold text-foreground">
                {DON.role} <span className="text-muted-foreground font-normal">· {DON.company}</span>
              </h3>
              <span className="font-mono text-xs text-primary">{DON.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {DON.text} It's the same community I built the{' '}
              <a href="#projects" className="text-primary hover:underline underline-offset-4">
                OCC Community Assistant
              </a>{' '}
              for.
            </p>
          </Card>

          <div className="px-1 font-mono text-xs text-muted-foreground leading-relaxed">
            <span className="text-primary">$ leadership:</span> {LEADERSHIP.join(' · ')}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
