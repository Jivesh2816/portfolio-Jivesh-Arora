// src/skills.jsx
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const BRANCHES = [
  {
    label: 'languages',
    color: '#4ade80',
    x: 163,
    skills: ['JavaScript', 'Python', 'Java', 'SQL', 'Racket'],
  },
  {
    label: 'frameworks_&_ai',
    color: '#34d399',
    x: 490,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'LangChain'],
  },
  {
    label: 'tools_&_cloud',
    color: '#2dd4bf',
    x: 816,
    skills: ['Git', 'Docker', 'AWS', 'Tableau', 'MongoDB'],
  },
];

export default function SkillsSection() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');
    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: svgRef.current, start: 'top 85%' },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading command="ls ./skills" title="Skills" subtitle="The languages, frameworks, and tools I build with." />

        <div className="mx-auto relative" style={{ width: 980, maxWidth: '100%' }}>
          <div className="w-[220px] mx-auto rounded border border-primary/40 bg-card text-center relative z-[2] py-3.5 px-2.5">
            <div className="font-mono font-bold text-[13px] tracking-wide text-primary">$ tree ./skills</div>
          </div>

          <svg
            ref={svgRef}
            width="100%"
            height="60"
            className="block mx-auto"
            viewBox="0 0 980 60"
            preserveAspectRatio="none"
          >
            {BRANCHES.map((branch) => (
              <path
                key={branch.label}
                d={`M490,0 L${branch.x},60`}
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          <Reveal className="flex justify-between mt-[60px] gap-5 flex-wrap" y={24} stagger={0.15}>
            {BRANCHES.map((branch) => (
              <div key={branch.label} className="flex-1 min-w-[220px] flex flex-col items-center gap-3">
                <div
                  className="px-4 py-2.5 rounded font-mono text-xs font-bold tracking-wide text-background transition-transform hover:scale-105"
                  style={{ background: branch.color }}
                >
                  {branch.label}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {branch.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-card text-foreground/80 tracking-wide font-medium text-xs px-3.5 py-2 transition-all hover:-translate-y-0.5 hover:text-white normal-case"
                      style={{ borderColor: `${branch.color}66` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
