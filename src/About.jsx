import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const INTERESTS = [
  { label: 'Gym', icon: '💪', big: true },
  { label: 'Coding', icon: '💻' },
  { label: 'Badminton', icon: '🏸' },
  { label: 'Swimming', icon: '🏊' },
  { label: 'Cricket', icon: '🏏' },
  { label: 'Volunteering', icon: '🤝' },
  { label: 'Traveling', icon: '✈️' },
  { label: 'Cooking', icon: '👨‍🍳' },
  { label: 'Studying Maths', icon: '📚' },
];

const TRAITS = [
  { label: 'focus', text: 'ML systems & data engineering: recommender systems, PySpark pipelines, applied ML' },
  { label: 'building', text: 'cold-start-recsys: hybrid recommendation engine (PyTorch, Sentence-Transformers, AWS SageMaker)' },
  { label: 'beyond_code', text: 'Campus leadership, event organizing, peer mentoring' },
  { label: 'right_now', text: 'On co-op at RBC · Researching manifold learning under Prof. Marina Meila (Fall 2026) · Targeting ML engineering co-op, Winter 2027' },
];

const EDUCATION = [
  {
    tag: 'university',
    icon: '🎓',
    name: 'University of Waterloo',
    program: 'BSc Computer Science',
    period: '2025 - Present',
    footLabel: 'GPA',
    footValue: '3.7/4.0',
  },
  {
    tag: 'high_school',
    icon: '🏅',
    name: 'Summer Fields School, New Delhi, India',
    program: 'High School Diploma',
    period: '2011 - 2024',
    footLabel: 'Scholar',
    footValue: '6 Consecutive Years',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading command="cat about.md" title="About Me" />

        <Reveal className="mb-14 flex justify-center" y={30}>
          <Card className="max-w-5xl w-full overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center mb-10 text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 text-foreground">Jivesh Arora</h3>
                <p className="text-lg text-primary mb-4 font-mono">CS Student · ML/AI Engineer in training</p>

                <div className="flex flex-wrap gap-3 justify-center font-mono text-xs">
                  <div className="flex items-center gap-2 bg-muted px-3.5 py-2 rounded border border-border">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-soft" />
                    <span className="text-foreground/80">Canada</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-3.5 py-2 rounded border border-border">
                    <span className="text-foreground/80">University of Waterloo (2B, AI Specialization)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-3.5 py-2 rounded border border-border">
                    <span className="text-foreground/80">Currently: Insight Analyst @ RBC, Digital Analytics</span>
                  </div>
                </div>
              </div>

              <Separator className="mb-10" />

              <div className="flex items-center gap-2 mb-6 font-mono text-sm">
                <span className="text-primary">$</span>
                <span className="text-foreground font-semibold">cat journey.md</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-8 items-start">
                <p className="text-[16px] leading-[1.75] text-muted-foreground">
                  CS + AI Specialization at Waterloo → RBC Insight Analyst co-op → building ML systems on the side,
                  aiming for an ML engineering co-op next.
                </p>

                <div className="flex flex-col gap-3.5 font-mono">
                  {TRAITS.map((trait) => (
                    <Card key={trait.label} className="p-3.5 px-4 bg-muted/60 shadow-none">
                      <div className="text-[11px] font-bold uppercase tracking-wide mb-1 text-primary">{trait.label}</div>
                      <div className="text-[13.5px] leading-relaxed text-foreground/80 font-sans">{trait.text}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="mb-14">
          <Reveal as="h3" className="text-2xl font-display font-bold mb-8 text-center text-foreground" y={16}>
            Education Journey
          </Reveal>
          <Reveal className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto" y={24} stagger={0.15}>
            {EDUCATION.map((edu) => (
              <Card key={edu.name} className="flex-1 p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Badge>{edu.tag}</Badge>
                </div>
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{edu.icon}</span>
                  <h4 className="font-bold text-xl mb-2 text-foreground">{edu.name}</h4>
                  <p className="text-muted-foreground text-lg mb-2">{edu.program}</p>
                  <p className="text-primary text-base mb-4 font-mono">{edu.period}</p>
                  <div className="bg-muted rounded p-3 font-mono text-sm">
                    <span className="text-muted-foreground">{edu.footLabel}: </span>
                    <span className="text-foreground font-semibold">{edu.footValue}</span>
                  </div>
                </div>
              </Card>
            ))}
          </Reveal>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Interests &amp; Hobbies</h3>
            <div className="w-12 h-[2px] bg-primary mx-auto" />
          </div>

          <Card className="max-w-3xl mx-auto p-6">
            <Reveal className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[90px] gap-3" y={16} stagger={0.04}>
              {INTERESTS.map(({ label, icon, big }) => (
                <div
                  key={label}
                  className={`group flex flex-col items-center justify-center gap-1.5 rounded border border-border bg-muted/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary/40 ${
                    big ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <span className={`${big ? 'text-3xl' : 'text-xl'} block transition-transform duration-300 group-hover:scale-110`}>
                    {icon}
                  </span>
                  <span className={`${big ? 'text-[15px]' : 'text-[13px]'} font-semibold text-foreground/85 text-center px-1`}>
                    {label}
                  </span>
                </div>
              ))}
            </Reveal>
          </Card>
        </div>
      </div>
    </section>
  );
}
