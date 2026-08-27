// src/ProjectsSection.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const PROJECTS = [
  {
    id: 1,
    title: 'cold-start-recsys',
    description:
      'A hybrid recommendation engine built on the Amazon Reviews 2023 dataset, combining PyTorch matrix factorization with Sentence-Transformers embeddings to handle cold-start users and items. Served via FastAPI, containerized with Docker, and deployed on AWS SageMaker.',
    technologies: ['PyTorch', 'Sentence-Transformers', 'FastAPI', 'Docker', 'AWS SageMaker'],
    image: '🧠',
    demoLink: '',
    sourceLink: 'https://github.com/Jivesh2816/cold-start-recsys',
    featured: true,
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Tailwind CSS. Features a clean design with smooth animations, interactive components, and a comprehensive showcase of my skills, education, and leadership experience.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    image: '🎨',
    demoLink: 'https://jivesharora.netlify.app',
    sourceLink: 'https://github.com/Jivesh2816/portfolio-Jivesh-Arora',
  },
  {
    id: 4,
    title: 'Lost and Found App',
    description:
      'A comprehensive lost and found application that helps users report and find lost items. Features user authentication, item categorization, location-based search, and a responsive interface for easy access across devices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
    image: '🔍',
    demoLink: 'https://lost-and-found-app-seven.vercel.app/',
    sourceLink: 'https://github.com/Jivesh2816/Lost-and-found-app-new',
  },
  {
    id: 5,
    title: 'OCC Chatbot',
    description:
      'An intelligent chatbot application designed for OCC (Office of Career and Co-op) services. Provides automated responses to common queries, helps students with career guidance, and streamlines communication processes.',
    technologies: ['React', 'JavaScript', 'AI/ML', 'Web APIs'],
    image: '🤖',
    demoLink: 'https://occ-chatbot-36q6.vercel.app/',
    sourceLink: 'https://github.com/Jivesh2816/OCC-CHATBOT',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          command="ls ./projects"
          title="My Projects"
          subtitle="Here are the projects I've built to showcase my skills and learning journey."
        />

        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8" y={30} stagger={0.12}>
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                project.featured ? 'hover:border-primary/60 lg:col-span-2' : 'hover:border-primary/40'
              }`}
            >
              <CardContent className="p-8 flex flex-col sm:flex-row gap-6 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-muted rounded-lg flex items-center justify-center border border-border">
                    <span className="text-5xl sm:text-6xl">{project.image}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  {project.featured && <Badge variant="accent" className="mb-2 w-fit">flagship</Badge>}
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demoLink && (
                      <Button onClick={() => window.open(project.demoLink, '_blank')}>$ view-demo</Button>
                    )}
                    {project.sourceLink && (
                      <Button variant="outline" onClick={() => window.open(project.sourceLink, '_blank')}>
                        $ view-source
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Reveal>

        <Reveal className="text-center mt-12" y={20}>
          <Card className="p-6 max-w-2xl mx-auto bg-muted/40">
            <h3 className="text-xl font-display font-semibold text-primary mb-2">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground">
              I'm actively working on new projects including full-stack applications, mobile apps, and AI/ML
              projects. Check back soon for updates!
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
