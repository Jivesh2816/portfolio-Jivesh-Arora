import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const TRAITS = [
  { label: 'now', text: 'Undergraduate research on dimensionality reduction with Prof. Marina Meila (CRA UR2PhD)' },
  { label: 'previously', text: 'Insight Analyst, Digital Analytics at RBC: PySpark pipelines, data models, and Tableau' },
  { label: 'building', text: 'Full-stack and mobile products, data pipelines, and applied ML systems' },
  { label: 'looking_for', text: 'Software, full-stack, data, and ML/AI internships' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading command="cat about.md" title="About Me" />

        <Reveal className="flex justify-center" y={30}>
          <Card className="w-full overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-start">
                <div className="space-y-4 text-[16px] leading-[1.75] text-muted-foreground">
                  <p>
                    I'm a Computer Science student at the <span className="text-foreground">University of Waterloo</span>{' '}
                    who likes building things end to end, from the data pipeline to the model to the app people actually use.
                  </p>
                  <p>
                    At <span className="text-foreground">RBC</span>, I engineered the daily PySpark → Hive pipeline behind the
                    Digital Analytics team's campaign dashboards and cut reporting from ~8 hours to ~10 minutes a day. Now I'm
                    doing undergraduate research on when dimensionality-reduction methods preserve or distort the shape of data,
                    through CRA's{' '}
                    <span className="text-foreground">UR2PhD</span> program.
                  </p>
                  <p>
                    On the side, I ship projects across the stack: a React Native app for Waterloo students, a hybrid
                    recommender deployed on AWS, and an LLM assistant for the off-campus community I supported as a Don.
                  </p>
                  <p className="text-sm">Outside of code: gym, badminton, swimming, cricket, and cooking.</p>
                </div>

                <div className="flex flex-col gap-3 font-mono">
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
      </div>
    </section>
  );
}
