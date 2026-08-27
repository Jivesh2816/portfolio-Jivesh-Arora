import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/**
 * Fades/slides its direct children up into view as they enter the viewport.
 * If there's a single child, animates the wrapper itself.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  y = 32,
  stagger = 0.08,
  start = 'top 85%',
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const targets = ref.current.children.length ? Array.from(ref.current.children) : ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [stagger, y, start]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
