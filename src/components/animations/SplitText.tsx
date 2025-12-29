'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  splitBy?: 'chars' | 'words' | 'lines';
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'random';
}

/**
 * SplitText - Animated text reveal component
 * Splits text and animates each character/word with stagger effect
 */
export function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  ease = 'power3.out',
  splitBy = 'chars',
  animateFrom = 'bottom',
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const elements = containerRef.current.querySelectorAll('.split-item');

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ...(animateFrom === 'bottom' && { y: 50 }),
      ...(animateFrom === 'top' && { y: -50 }),
      ...(animateFrom === 'left' && { x: -30 }),
      ...(animateFrom === 'right' && { x: 30 }),
      ...(animateFrom === 'random' && { y: () => Math.random() * 100 - 50 }),
    };

    gsap.fromTo(
      elements,
      fromVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        stagger,
        ease,
        delay,
      }
    );
  }, [delay, duration, stagger, ease, animateFrom]);

  const splitContent = () => {
    if (splitBy === 'words') {
      return text.split(' ').map((word, i) => (
        <span
          key={i}
          className="split-item inline-block opacity-0"
          style={{ marginRight: '0.25em' }}
        >
          {word}
        </span>
      ));
    }

    if (splitBy === 'lines') {
      return text.split('\n').map((line, i) => (
        <span key={i} className="split-item block opacity-0">
          {line}
        </span>
      ));
    }

    // Default: chars
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="split-item inline-block opacity-0"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className} aria-label={text}>
      {splitContent()}
    </div>
  );
}
