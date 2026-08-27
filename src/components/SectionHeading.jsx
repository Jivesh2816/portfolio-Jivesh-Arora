import React from 'react';
import Reveal from '@/components/Reveal';

export default function SectionHeading({ command, title, subtitle }) {
  return (
    <Reveal className="text-center mb-14" y={20}>
      <div className="font-mono text-xs text-primary mb-3">
        <span className="text-muted-foreground">$</span> {command}
      </div>
      <h2 className="font-display text-4xl font-bold text-foreground">{title}</h2>
      <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </Reveal>
  );
}
