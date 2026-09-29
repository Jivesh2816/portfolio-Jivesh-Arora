// src/ProjectsSection.jsx
import React, { useId, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    id: 'wanderers',
    title: 'Wanderers',
    tagline: 'A social platform connecting University of Waterloo students.',
    meta: 'Team of 3 · Pitched at Velocity Pitch Competition, Sept 2026',
    image: '🧭',
    featured: true,
    points: [
      'Built the React Native (Expo) client: Expo Router navigation, authentication, discovery, messaging, and map screens, with shared auth contexts.',
      'Engineered a two-step login with Supabase Auth: password verification followed by an emailed one-time passcode (OTP).',
      'Implemented the signup, verification, and password-reset routes.',
    ],
    technologies: ['React Native (Expo)', 'TypeScript', 'Next.js', 'React', 'Supabase (Postgres/Auth)', 'Tailwind'],
    demoLink: 'https://www.wanderers.space/',
    sourceLink: 'https://github.com/Kapil-Iyer/Wanderers',
    sourceLabel: '$ view-source --team-repo',
  },
  {
    id: 'cold-start-recsys',
    title: 'Cold-Start Recommendation System',
    tagline: 'A hybrid recommender that still makes useful suggestions for users and items with little history.',
    image: '🧠',
    featured: true,
    stats: [
      { value: '800K+', label: 'Amazon reviews' },
      { value: '+1.17pp', label: 'Recall@10' },
    ],
    points: [
      'Combined PyTorch matrix factorization with MiniLM sentence embeddings through confidence-weighted fusion, improving Recall@10 by 1.17pp.',
      'Deployed as a Dockerized FastAPI service on AWS SageMaker.',
    ],
    details: [
      {
        label: 'validation',
        text: 'Leave-one-out validation caught a lookahead leak (it showed up as an implausible 86.7% score) and a scale mismatch in the fusion step.',
      },
      {
        label: 'deployment',
        text: 'Debugged an out-of-memory crash that only happened on the SageMaker instance, traced it to silent float64 promotion, and fixed it with explicit float32 casts.',
      },
    ],
    technologies: ['Python', 'PyTorch', 'Sentence-Transformers', 'FastAPI', 'Docker', 'AWS SageMaker', 'Streamlit'],
    demoLink: 'https://cold-start-recsys.vercel.app/',
    sourceLink: 'https://github.com/Jivesh2816/cold-start-recsys',
  },
  {
    id: 'occ-assistant',
    title: 'OCC Community Assistant',
    tagline: "An LLM agent for WUSA's Off-Campus Community (OCC): the same community I supported as an Off-Campus Don.",
    image: '🤖',
    points: [
      'Built a hand-wired agent pipeline on Groq: intent routing, retrieval over official sources and FAQs, and tool calling for tickets and escalation.',
      'Wrote a rule-based safety critic (rather than a second LLM) that force-escalates crisis cases.',
    ],
    details: [
      { label: 'route', text: 'An LLM intent router decides how each incoming message should be handled.' },
      { label: 'retrieve', text: 'BM25 retrieval over 125 official sources and 42 FAQs.' },
      { label: 'act', text: 'A 4-step tool-calling loop handles ticket creation and escalation.' },
      { label: 'check', text: 'The rule-based safety critic force-escalates crisis cases and logs its decisions to SQLite.' },
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'SQLite', 'Groq API (GPT-OSS)', 'BM25'],
    demoLink: 'https://occ-chatbot-36q6.vercel.app/',
    sourceLink: 'https://github.com/Jivesh2816/OCC-CHATBOT',
  },
  {
    id: 'lost-and-found',
    title: 'Lost & Found Platform',
    tagline: 'A full-stack MERN app for posting and finding lost items.',
    image: '🔍',
    secondary: true,
    points: [
      'JWT + bcrypt authentication, lost/found posts with Cloudinary image uploads, search by category, location, and description, and contact requests between users. Deployed on Vercel.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    demoLink: 'https://lost-and-found-app-new.vercel.app/',
    sourceLink: 'https://github.com/Jivesh2816/Lost-and-found-app-new',
  },
];

function ProjectLinks({ project, size }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.demoLink && (
        <Button size={size} asChild>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            $ view-live
          </a>
        </Button>
      )}
      {project.sourceLink && (
        <Button size={size} variant="outline" asChild>
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
            {project.sourceLabel ?? '$ view-source'}
          </a>
        </Button>
      )}
    </div>
  );
}

function Details({ items }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mb-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="font-mono text-xs text-primary hover:underline underline-offset-4"
      >
        $ cat engineering-notes.md {open ? '▴' : '▾'}
      </button>
      <div
        id={panelId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden" inert={!open}>
          <dl className="mt-3 space-y-2.5 border-l-2 border-primary/30 pl-4">
            {items.map((item) => (
              <div key={item.label} className="text-sm leading-relaxed">
                <dt className="inline font-mono text-xs font-bold uppercase tracking-wide text-primary">{item.label}: </dt>
                <dd className="inline text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      className={cn(
        'overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col',
        project.featured ? 'hover:border-primary/60' : 'hover:border-primary/40'
      )}
    >
      <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 flex-1">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-muted rounded-lg flex items-center justify-center border border-border">
            <span className="text-4xl sm:text-5xl">{project.image}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          {project.featured && <Badge variant="accent" className="mb-2 w-fit">featured</Badge>}
          <h3 className="text-2xl font-display font-bold mb-1 text-foreground">{project.title}</h3>
          <p className="text-foreground/80 mb-2 leading-relaxed">{project.tagline}</p>
          {project.meta && <p className="font-mono text-xs text-primary mb-4">{project.meta}</p>}

          {project.stats && (
            <div className="flex flex-wrap gap-3 my-3">
              {project.stats.map((s) => (
                <div key={s.label} className="rounded border border-border bg-muted/40 px-3 py-2">
                  <span className="font-mono font-bold text-primary">{s.value}</span>{' '}
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-2 text-muted-foreground mb-5 mt-2">
            {project.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="text-primary mt-0.5">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {project.details && <Details items={project.details} />}

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>
      </CardContent>
    </Card>
  );
}

function SecondaryProjectCard({ project }) {
  return (
    <Card className="hover:border-primary/40 transition-all duration-300">
      <CardContent className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{project.image}</span>
            <h3 className="text-lg font-display font-semibold text-foreground">{project.title}</h3>
          </div>
          <p className="text-sm text-foreground/80 mb-1">{project.tagline}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.points[0]}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} className="px-2 py-0.5 text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <ProjectLinks project={project} size="sm" />
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  const main = PROJECTS.filter((p) => !p.secondary);
  const secondary = PROJECTS.filter((p) => p.secondary);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          command="ls ./projects"
          title="Projects"
          subtitle="Selected work across mobile and full-stack products, machine learning, and LLM systems."
        />

        <Reveal className="grid grid-cols-1 gap-8" y={30} stagger={0.12}>
          {main.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>

        {secondary.length > 0 && (
          <div className="mt-12">
            <div className="font-mono text-xs text-muted-foreground mb-4">
              <span className="text-primary">$</span> ls ./projects/more
            </div>
            <Reveal className="space-y-4" y={20}>
              {secondary.map((project) => (
                <SecondaryProjectCard key={project.id} project={project} />
              ))}
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
