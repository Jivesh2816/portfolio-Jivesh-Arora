import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav id="site-header" className="hdr">
      <div className="hdr-logo">Jivesh Arora</div>

      <div className="hdr-pillnav">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`hdr-link${active === link.id ? ' active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        #site-header.hdr{position:fixed;top:0;left:0;width:100%;background:#0d1425;padding:0 32px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;height:76px;border-bottom:1px solid rgba(255,255,255,.06);z-index:50}
        #site-header .hdr-logo{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;background:linear-gradient(90deg,#8b9dff,#67e8f9);-webkit-background-clip:text;background-clip:text;color:transparent}
        #site-header .hdr-pillnav{display:flex;align-items:center;gap:4px;background:#101a30;border:1px solid rgba(255,255,255,.07);border-radius:999px;padding:6px}
        #site-header .hdr-link{font-family:'Inter',sans-serif;font-weight:600;font-size:15px;color:#94a3b8;text-decoration:none;transition:.15s;padding:8px 16px;border-radius:999px}
        #site-header .hdr-link:hover{color:#e0e7ff}
        #site-header .hdr-link.active{background:linear-gradient(90deg,#4c5fd6,#2563eb);color:#fff}
      `}</style>
    </nav>
  );
}
