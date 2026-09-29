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
    x: 98,
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C', 'C++', 'R'],
  },
  {
    label: 'web_&_mobile',
    color: '#34d399',
    x: 294,
    skills: ['React', 'Next.js', 'React Native (Expo)', 'Node.js', 'Express', 'FastAPI', 'REST', 'Tailwind'],
  },
  {
    label: 'data',
    color: '#2dd4bf',
    x: 490,
    skills: ['PySpark', 'Hive', 'Airflow', 'Tableau', 'PostgreSQL / Supabase', 'SQLite', 'MongoDB', 'Data Modelling'],
  },
  {
    label: 'ai_/_ml',
    color: '#22d3ee',
    x: 686,
    skills: ['PyTorch', 'Sentence-Transformers', 'scikit-learn', 'LLM Agents', 'Function Calling', 'RAG', 'BM25'],
  },
  {
    label: 'cloud_&_tools',
    color: '#a3e635',
    x: 882,
    skills: ['AWS / SageMaker', 'Docker', 'Git', 'Linux'],
  },
];

export default function SkillsSection() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');
    const ctx = gsap.context(() => {
      paths.forEach((path, i) => {
        // Straight lines from (490,0); computed directly since the SVG is display:none below lg.
        const length = Math.hypot(BRANCHES[i].x - 490, 60);
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
        <SectionHeading command="ls ./skills" title="Skills" subtitle="What I build with, from product code to data pipelines to models." />

        <div className="mx-auto relative" style={{ width: 980, maxWidth: '100%' }}>
          <div className="w-[220px] mx-auto rounded border border-primary/40 bg-card text-center relative z-[2] py-3.5 px-2.5">
            <div className="font-mono font-bold text-[13px] tracking-wide text-primary">$ tree ./skills</div>
          </div>

          {/* Branch lines only line up with the single-row desktop layout. */}
          <svg
            ref={svgRef}
            width="100%"
            height="60"
            className="hidden lg:block mx-auto"
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

          <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-8 lg:mt-0 gap-8 lg:gap-4" y={24} stagger={0.12}>
            {BRANCHES.map((branch) => (
              <div key={branch.label} className="min-w-0 flex flex-col items-center gap-3">
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
                      className="bg-card text-foreground/80 tracking-wide font-medium text-xs px-3 py-1.5 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:text-white normal-case"
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
