import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Perspective/3D-tilt wrapper for the hero photo. Tracks the mouse across
 * the stage and drives rotateX/rotateY/translateZ on the avatar ring, while
 * child badges (via [data-parallax]) drift a bit further for a layered
 * "pop out" feel. Falls back to a slow idle rotation when there's no mouse
 * (touch devices) or the viewer prefers reduced motion.
 */
export default function TiltAvatar({ children, className, style, ...rest }) {
  const stageRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const ring = ringRef.current;
    if (!stage || !ring) return;

    if (prefersReducedMotion) return;

    const badges = Array.from(stage.querySelectorAll('[data-parallax]'));

    const rotateX = gsap.quickTo(ring, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const rotateY = gsap.quickTo(ring, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    const badgeSetters = badges.map((el) => ({
      x: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' }),
    }));

    const hasPointer = window.matchMedia('(pointer: fine)').matches;

    if (hasPointer) {
      const handleMove = (e) => {
        const rect = stage.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        rotateX(py * -18);
        rotateY(px * 18);

        badgeSetters.forEach(({ x, y }, i) => {
          const strength = 10 + i * 2;
          x(px * strength);
          y(py * strength);
        });
      };

      const handleLeave = () => {
        rotateX(0);
        rotateY(0);
        badgeSetters.forEach(({ x, y }) => {
          x(0);
          y(0);
        });
      };

      stage.addEventListener('mousemove', handleMove);
      stage.addEventListener('mouseleave', handleLeave);
      return () => {
        stage.removeEventListener('mousemove', handleMove);
        stage.removeEventListener('mouseleave', handleLeave);
      };
    }

    const idle = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 4, ease: 'sine.inOut' } });
    idle.to(ring, { rotationY: 10, rotationX: -6 }).to(ring, { rotationY: -10, rotationX: 6 });
    return () => idle.kill();
  }, []);

  return (
    <div ref={stageRef} className={className} style={{ perspective: '900px', ...style }} {...rest}>
      <div ref={ringRef} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}
