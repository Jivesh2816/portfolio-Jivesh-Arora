import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const EDUCATION = {
  school: 'University of Waterloo',
  degree: 'Bachelor of Computer Science (Honours), Co-op',
  period: 'Jan 2025 - Aug 2029 (expected)',
  coursework: ['Data Structures and Algorithms', 'Statistics for CS', 'Databases', 'Logic and Computation'],
};

const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', code: 'CLF-C02', icon: '☁️' },
  { name: 'AWS Certified AI Practitioner', code: 'AIF-C01', icon: '🤖' },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading command="cat education.json" title="Education & Certifications" />

        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 max-w-4xl mx-auto" y={24} stagger={0.12}>
          <Card className="p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <span className="text-3xl" aria-hidden="true">🎓</span>
              <div className="min-w-0">
                <h3 className="font-bold text-lg text-foreground">{EDUCATION.school}</h3>
                <p className="text-foreground/80">{EDUCATION.degree}</p>
                <p className="text-primary text-sm font-mono mt-1">{EDUCATION.period}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  <span className="font-mono text-xs text-primary">coursework: </span>
                  {EDUCATION.coursework.join(' · ')}
                </p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert) => (
              <Card
                key={cert.code}
                className="px-5 py-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-2xl" aria-hidden="true">{cert.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground leading-snug">{cert.name}</h3>
                  <p className="text-muted-foreground font-mono text-xs mt-0.5">{cert.code}</p>
                </div>
                <Badge variant="secondary">passed</Badge>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
