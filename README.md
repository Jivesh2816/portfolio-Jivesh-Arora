# Jivesh Arora's Portfolio

Personal portfolio for Jivesh Arora, a University of Waterloo Computer Science student building full-stack products, data systems, and ML applications. Built with **React**, **Vite**, **Tailwind CSS**, shadcn/ui components, and GSAP animations.

**Live**: [jivesharora.netlify.app](https://jivesharora.netlify.app/)

## Sections

1. **Hero**: positioning statement, highlight chips (research, RBC, Wanderers, ML), resume download, GitHub/LinkedIn
2. **About**: short bio and current focus
3. **Research**: CRA UR2PhD undergraduate research (dimensionality reduction)
4. **Experience**: RBC Digital Analytics, WUSA Off-Campus Don, leadership
5. **Projects**: Wanderers, Cold-Start Recommendation System, OCC Community Assistant (with expandable engineering notes), plus Lost & Found
6. **Skills**: Languages / Web & Mobile / Data / AI & ML / Cloud & Tools
7. **Education & Certifications**: University of Waterloo, AWS certifications
8. **Contact**: EmailJS-powered contact form

The navbar has scroll-spy highlighting on desktop and a collapsible menu on mobile.

## Tech Stack

- React 19, Vite 7
- Tailwind CSS 3 + shadcn/ui (Radix primitives)
- GSAP (scroll reveals, hero timeline, tilt avatar)
- EmailJS (`emailjs-com`), Sonner toasts
- Devicon (tech icon font)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Getting Started

1. Clone: `git clone https://github.com/Jivesh2816/portfolio-Jivesh-Arora.git`
2. Install: `npm install`
3. Run: `npm run dev` → http://localhost:5173

```bash
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
```

## Project Structure

```
├── public/
│   ├── resume.pdf
│   ├── favicon.svg
│   └── profile-photo.jpg
├── src/
│   ├── App.jsx             # Section order
│   ├── Navbar.jsx
│   ├── IntroSection.jsx    # Hero
│   ├── About.jsx
│   ├── Research.jsx
│   ├── Experience.jsx
│   ├── projects.jsx
│   ├── skills.jsx
│   ├── Certifications.jsx  # Education & Certifications
│   ├── contacts.jsx
│   ├── components/         # Reveal, SectionHeading, TiltAvatar, shadcn/ui
│   └── lib/                # gsap setup, links (resume/socials), utils
└── vite.config.js
```

## Updating the resume

Replace `public/resume.pdf` (keep the filename).

## Deployment

Deployed on **Netlify**: connect the repo, or upload the `dist` folder after `npm run build`.
