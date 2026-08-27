import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', code: 'CLF-C02', detail: 'passed', icon: '☁️' },
  { name: 'AWS Certified AI Practitioner', code: 'AIF-C01', detail: 'passed', icon: '🤖' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading command="cat certifications.json" title="Certifications" />

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto" y={24} stagger={0.12}>
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.code} className="p-6 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 text-center">
              <span className="text-4xl mb-4 block">{cert.icon}</span>
              <h3 className="font-bold text-lg mb-1 text-foreground">{cert.name}</h3>
              <p className="text-muted-foreground mb-3 font-mono text-sm">{cert.code}</p>
              <Badge variant="secondary">{cert.detail}</Badge>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
