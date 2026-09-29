import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const RESEARCH = {
  program: 'CRA UR2PhD Program',
  role: 'AI/ML Undergraduate Researcher',
  org: 'University of Waterloo',
  advisor: 'Prof. Marina Meila',
  period: 'Sept 2026 - Present',
  status: 'in progress',
  tags: ['Python', 'megaman', 't-SNE', 'UMAP', 'spectral embedding'],
};

const PANELS = [
  {
    label: 'the_problem',
    text: (
      <>
        Methods like <span className="text-foreground">t-SNE</span>, <span className="text-foreground">UMAP</span>, and{' '}
        <span className="text-foreground">spectral embedding</span> compress high-dimensional data into a few dimensions
        so people can see its structure. The picture they produce can preserve the data's true shape, or distort it. I'm
        studying when each happens.
      </>
    ),
  },
  {
    label: 'what_im_building',
    text: (
      <>
        Today, the group checks for distortion visually, by inspecting distortion ellipses. I'm prototyping an{' '}
        <span className="text-foreground">automatic distortion score</span> in Python, built on local metric estimates
        from the <span className="text-foreground">megaman</span> manifold-learning library, to replace that manual
        inspection with a number.
      </>
    ),
  },
  {
    label: 'next',
    text: (
      <>
        This work is heading toward a research proposal that uses{' '}
        <span className="text-foreground">synthetic manifolds</span> (a swiss roll and a torus) as test cases.
      </>
    ),
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          command="cat research/README.md"
          title="Research"
          subtitle="What I'm working on right now."
        />

        <Reveal y={24}>
          <Card className="p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">{RESEARCH.program}</h3>
                <p className="text-muted-foreground text-lg">{RESEARCH.role}</p>
                <p className="text-muted-foreground text-sm mt-1 font-mono">
                  {RESEARCH.org} · supervised by {RESEARCH.advisor}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2">
                <Badge variant="accent">{RESEARCH.period}</Badge>
                <Badge variant="outline" className="font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft mr-2" />
                  {RESEARCH.status}
                </Badge>
              </div>
            </div>

            <p className="text-foreground/85 leading-relaxed mb-6">
              Selected for the Computing Research Association's UR2PhD program to study when dimensionality-reduction
              methods preserve or distort the true shape of high-dimensional data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {PANELS.map((panel) => (
                <div key={panel.label} className="rounded border border-border bg-muted/40 p-4">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-wide mb-2 text-primary">
                    {panel.label}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{panel.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {RESEARCH.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
