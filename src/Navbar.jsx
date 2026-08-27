import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

const LINKS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'certifications', label: 'certs' },
  { id: 'contact', label: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const linkRefs = useRef({});
  const underlineRef = useRef(null);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];
    const underline = underlineRef.current;
    if (!el || !underline) return;
    gsap.to(underline, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      duration: 0.4,
      ease: 'power3.out',
    });
  }, [active]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-8 font-mono transition-all duration-300',
        scrolled ? 'h-14 bg-background/85 backdrop-blur-md border-b border-border' : 'h-16 bg-transparent border-b border-transparent'
      )}
    >
      <div className="text-sm text-primary">
        <span className="text-muted-foreground">~/</span>jivesh-arora
      </div>

      <div className="relative hidden sm:flex items-center gap-7">
        <div
          ref={underlineRef}
          className="absolute -bottom-1 left-0 h-[2px] bg-primary"
          style={{ width: 0 }}
        />
        {LINKS.map((link) => (
          <a
            key={link.id}
            ref={(el) => (linkRefs.current[link.id] = el)}
            href={`#${link.id}`}
            className={cn(
              'relative pb-1 text-[13px] tracking-wide transition-colors',
              active === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="sm:hidden text-[13px] text-primary border border-primary/40 rounded px-3 py-1.5">
        menu
      </a>
    </nav>
  );
}
