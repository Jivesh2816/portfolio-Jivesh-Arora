import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

const LINKS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'research', label: 'research' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const moveUnderline = useCallback((immediate = false) => {
    const el = linkRefs.current[active];
    const underline = underlineRef.current;
    if (!el || !underline) return;
    gsap.to(underline, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      duration: immediate ? 0 : 0.4,
      ease: 'power3.out',
    });
  }, [active]);

  useEffect(() => {
    moveUnderline();
    // The desktop links are display:none on small screens, so re-measure when the viewport changes.
    const onResize = () => moveUnderline(true);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [moveUnderline]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-8 font-mono transition-all duration-300',
        scrolled || menuOpen
          ? 'h-14 bg-background/95 backdrop-blur-md border-b border-border'
          : 'h-16 bg-transparent border-b border-transparent'
      )}
      aria-label="Main"
    >
      <a href="#home" className="text-sm text-primary" onClick={() => setMenuOpen(false)}>
        <span className="text-muted-foreground">~/</span>jivesh-arora
      </a>

      <div className="relative hidden lg:flex items-center gap-6 xl:gap-7">
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
            aria-current={active === link.id ? 'true' : undefined}
            className={cn(
              'relative pb-1 text-[13px] tracking-wide transition-colors',
              active === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="lg:hidden text-[13px] text-primary border border-primary/40 rounded px-3 py-1.5"
      >
        {menuOpen ? 'close' : 'menu'}
      </button>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border"
        >
          <ul className="flex flex-col px-6 py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'block py-2.5 text-sm tracking-wide transition-colors',
                    active === link.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span className="text-muted-foreground/60">./</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
