# Jivesh Arora's Portfolio

A modern, responsive portfolio website showcasing projects, skills, and experience. Built with **React**, **Vite**, and **Tailwind CSS**.

**Live**: [jivesharora.netlify.app](https://jivesharora.netlify.app/)

## Features

- **Pill Navbar** — floating capsule nav with scroll-spy active-state highlighting
- **Hero Section** — rotating title, scattered floating tech badges (Python, PyTorch, Docker, AWS, FastAPI, Git) around a profile avatar
- **About Me** — two-column bio with trait cards (Focus / Building / Beyond Code / Right Now) and a bento-grid Interests & Hobbies layout
- **Skills** — radial tree diagram (Languages / Frameworks & AI / Tools & Cloud) with per-branch hover highlighting
- **Experience** — work history timeline
- **Projects** — real, verified GitHub source links and live demo links
- **Certifications** — AWS certification cards
- **Contact Form** — EmailJS-powered, delivers directly to inbox
- **Responsive Design** — mobile-first with Tailwind CSS

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- EmailJS (`emailjs-com`)
- Devicon (tech icon font)
- Google Fonts — Space Grotesk & Inter
- ESLint

## Getting Started

### Installation

1. Clone: `git clone https://github.com/Jivesh2816/portfolio-Jivesh-Arora.git`
2. Install: `npm install`
3. Run: `npm run dev` → http://localhost:5173

### Build

```bash
npm run build      # Production build
npm run preview    # Preview production build
```

## Project Structure

```
├── src/
│   ├── Navbar.jsx
│   ├── IntroSection.jsx
│   ├── About.jsx
│   ├── skills.jsx
│   ├── Experience.jsx
│   ├── projects.jsx
│   ├── Certifications.jsx
│   ├── contacts.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
└── vite.config.js
```

## Sections

- **Navbar** — pill nav with scroll-spy
- **Home** — hero with rotating title and floating tech badges
- **About** — bio, trait cards, education, interests bento grid
- **Skills** — radial tree of Languages / Frameworks & AI / Tools & Cloud
- **Experience** — work history
- **Projects** — showcase with verified GitHub links
- **Certifications** — AWS certifications
- **Contact** — EmailJS contact form

## Deployment

Deployed on **Netlify**: [jivesharora.netlify.app](https://jivesharora.netlify.app/)

To deploy your own copy:
- **Netlify**: connect the repo, or upload the `dist` folder after `npm run build`
- **Vercel**: `vercel`

## Performance

- Vite HMR for fast development
- Tree-shaking for optimized builds
- Minimal Tailwind CSS bundle

---

**Portfolio of**: Jivesh Arora
**Live Demo**: [jivesharora.netlify.app](https://jivesharora.netlify.app/)
