// src/components/IntroSection.jsx
import React, { useState, useEffect } from 'react';

const SCATTERED_BADGES = [
  { icon: 'devicon-python-plain', label: 'Python', style: { top: '8px', left: '6px' }, delay: '0s' },
  { icon: 'devicon-pytorch-original', label: 'PyTorch', style: { top: '30px', right: 0 }, delay: '.6s' },
  { icon: 'devicon-docker-plain', label: 'Docker', style: { top: '130px', left: '-18px' }, delay: '1.2s' },
  { icon: 'devicon-amazonwebservices-plain', label: 'AWS', style: { bottom: '56px', right: '-14px' }, delay: '1.8s' },
  { icon: 'devicon-fastapi-plain', label: 'FastAPI', style: { bottom: '6px', left: '24px' }, delay: '2.4s' },
  { icon: 'devicon-git-plain', label: 'Git', style: { bottom: '-4px', right: '60px' }, delay: '3s' },
];

export default function IntroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Computer Science Student",
    "Data Science Enthusiast",
    "Driven by Curiosity",
    "Tech Enthusiast",
    "Aspiring Software Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center">
      <div className="hero-body">
        <div>
          <h1 className="hero-name">Jivesh Arora</h1>
          <div className="hero-tag">
            <span className="inline-block min-w-[340px]">{titles[currentTitleIndex]}</span>
          </div>
          <p className="hero-desc">
            Computer Science student at the University of Waterloo with a passion for developing efficient solutions and leveraging new technologies.
          </p>
          <div className="hero-btns">
            <button
              onClick={() => window.location.href = '/resume.pdf'}
              className="btn-primary"
            >
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-glow" />

          <div className="r8-stage">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src="/profile-photo.jpg"
                  alt="Jivesh Arora"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="avatar-fallback" style={{ display: 'none' }}>JA</div>
              </div>
            </div>

            {SCATTERED_BADGES.map(({ icon, label, style, delay }) => (
              <div
                key={icon}
                className="r8a-badge"
                style={{ ...style, animationDelay: delay }}
              >
                <i className={`${icon} colored`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #home.hero-section{width:100%;position:relative;overflow:hidden;padding-top:76px;box-sizing:border-box}
        #home .hero-body{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:40px;align-items:center}
        #home .hero-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:72px;color:#fff;margin:0}
        #home .hero-tag{font-size:28px;color:#7a8aa8;margin:14px 0 22px;font-weight:400}
        #home .hero-desc{font-size:19px;line-height:1.6;color:#cbd5e1;max-width:520px;margin-bottom:26px}
        #home .hero-btns{display:flex;gap:14px}
        #home .btn-primary{background:linear-gradient(90deg,#3b82f6,#2563eb);color:#fff;font-weight:700;font-size:14px;padding:13px 22px;border-radius:8px;border:none;cursor:pointer;transition:filter .2s ease,transform .2s ease}
        #home .btn-primary:hover{filter:brightness(1.1);transform:translateY(-1px)}
        #home .btn-secondary{background:linear-gradient(90deg,#22c55e,#0d9488);color:#fff;font-weight:700;font-size:14px;padding:13px 22px;border-radius:8px;border:none;cursor:pointer;transition:filter .2s ease,transform .2s ease}
        #home .btn-secondary:hover{filter:brightness(1.1);transform:translateY(-1px)}
        #home .hero-right{position:relative;height:400px;display:flex;align-items:center;justify-content:center;z-index:1}
        #home .r8-stage{position:relative;width:380px;height:380px;display:flex;align-items:center;justify-content:center}
        #home .avatar-ring{position:relative;z-index:2;width:220px;height:220px;border-radius:50%;padding:5px;background:linear-gradient(135deg,#8b9dff,#67e8f9,#22c55e)}
        #home .avatar-inner{width:100%;height:100%;border-radius:50%;overflow:hidden;background:#111c36;display:flex;align-items:center;justify-content:center;color:#8b9dff;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:36px}
        #home .avatar-fallback{width:100%;height:100%;border-radius:50%;align-items:center;justify-content:center}
        #home .r8a-badge{position:absolute;display:flex;align-items:center;gap:7px;background:#101a30;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:8px 12px;font-size:12.5px;font-weight:600;color:#e2e8f0;box-shadow:0 8px 20px rgba(0,0,0,.35);animation:r8a-float 5s ease-in-out infinite}
        #home .r8a-badge i{font-size:16px}
        @keyframes r8a-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        #home .hero-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:640px;height:640px;background:radial-gradient(circle,rgba(76,141,255,.16),transparent 65%);pointer-events:none;z-index:0}
        @media (max-width: 900px){
          #home .hero-body{grid-template-columns:1fr}
          #home .hero-right{margin-top:20px}
        }
      `}</style>
    </section>
  );
}
