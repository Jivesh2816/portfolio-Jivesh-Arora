// src/components/IntroSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { Button } from '@/components/ui/button';
import TiltAvatar from '@/components/TiltAvatar';

const SCATTERED_BADGES = [
  { icon: 'devicon-python-plain', label: 'Python', style: { top: '4px', left: '2px' } },
  { icon: 'devicon-pytorch-original', label: 'PyTorch', style: { top: '26px', right: '-6px' } },
  { icon: 'devicon-docker-plain', label: 'Docker', style: { top: '120px', left: '-24px' } },
  { icon: 'devicon-amazonwebservices-plain', label: 'AWS', style: { bottom: '50px', right: '-20px' } },
  { icon: 'devicon-fastapi-plain', label: 'FastAPI', style: { bottom: '2px', left: '18px' } },
  { icon: 'devicon-git-plain', label: 'Git', style: { bottom: '-10px', right: '52px' } },
];

const ROLES = [
  'Computer Science Student',
  'Data Science Enthusiast',
  'Driven by Curiosity',
  'Tech Enthusiast',
  'Aspiring Software Developer',
];

export default function IntroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roleRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev === ROLES.length - 1 ? 0 : prev + 1));
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!roleRef.current || prefersReducedMotion) return;
    gsap.fromTo(roleRef.current, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' });
  }, [roleIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('[data-hero="badge"]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5 })
        .fromTo('[data-hero="name"]', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('[data-hero="terminal"]', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('[data-hero="btns"] > *', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('[data-hero="stage"]', { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6')
        .fromTo(
          '[data-hero="fbadge"]',
          { autoAlpha: 0, y: 12, scale: 0.6 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.07 },
          '-=0.35'
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-scanlines opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14 px-6 py-16 items-center">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div
            data-hero="badge"
            className="inline-flex items-center gap-2 w-fit rounded border border-primary/40 text-primary px-3 py-1.5 font-mono text-xs tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            OPEN TO OPPORTUNITIES
          </div>

          <h1 data-hero="name" className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl leading-[0.98] text-foreground">
            Jivesh Arora
          </h1>

          <div data-hero="terminal" className="rounded-lg border border-border bg-card overflow-hidden w-full max-w-xl font-mono">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="ml-2.5 text-xs text-muted-foreground">hero.sh</span>
            </div>
            <div className="px-5 py-5 text-sm leading-loose">
              <div>
                <span className="text-primary">$</span> whoami
              </div>
              <div className="text-foreground/80">
                Computer Science student, University of Waterloo (AI specialization)
              </div>
              <div className="mt-2">
                <span className="text-primary">$</span> echo $ROLE
              </div>
              <div className="text-foreground/80">
                <span ref={roleRef} className="inline-block">
                  {ROLES[roleIndex]}
                </span>
                <span className="inline-block w-[7px] h-[15px] bg-primary/80 ml-1 align-middle animate-blink" />
              </div>
            </div>
          </div>

          <div data-hero="btns" className="flex flex-wrap gap-3.5 mt-1">
            <Button size="lg" onClick={() => (window.location.href = '/resume.pdf')}>
              $ ./download-resume.sh
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToContact}>
              $ ./contact-me.sh
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <TiltAvatar data-hero="stage" className="relative" style={{ width: 380, height: 380 }}>
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
              <div className="absolute w-[210px] h-[210px] rounded-full border border-primary" />
              <div className="relative z-10 w-[190px] h-[190px] rounded-full bg-card overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-40 bg-scanlines"
                  style={{ backgroundSize: '100% 4px' }}
                />
                <img
                  src="/profile-photo.jpg"
                  alt="Jivesh Arora"
                  className="relative w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center font-mono font-bold text-4xl text-primary">
                  JA
                </div>
              </div>

              {SCATTERED_BADGES.map(({ icon, label, style }) => (
                <div key={icon} data-hero="fbadge" data-parallax className="absolute" style={style}>
                  <div className="flex items-center gap-1.5 rounded border border-border bg-card px-3 py-2 text-[12px] font-mono font-medium text-foreground/85 shadow-xl animate-float">
                    <i className={`${icon} colored text-base`} />
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </TiltAvatar>

          <div className="flex flex-col items-center gap-0.5 font-mono text-xs">
            <span className="text-primary">● ONLINE</span>
            <span className="text-muted-foreground">Waterloo, ON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
