'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * BlurText - Text that animates from blurred to clear
 */
export function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 1.2,
}: BlurTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      {
        filter: 'blur(20px)',
        opacity: 0,
        scale: 1.1,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  }, [delay, duration]);

  return (
    <span ref={textRef} className={`inline-block opacity-0 ${className}`}>
      {text}
    </span>
  );
}
