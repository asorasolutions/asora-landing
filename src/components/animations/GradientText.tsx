'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

/**
 * AnimatedGradientText - Text with animated flowing gradient
 */
export function AnimatedGradientText({
  children,
  className,
  colors = ['#4361EE', '#7209B7', '#4361EE'],
  speed = 3,
}: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    element.style.backgroundSize = '200% auto';
    element.style.animation = `gradient-flow ${speed}s linear infinite`;
  }, [speed]);

  return (
    <>
      <style jsx global>{`
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <span
        ref={textRef}
        className={cn(
          'inline-block bg-clip-text text-transparent',
          className
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        }}
      >
        {children}
      </span>
    </>
  );
}
