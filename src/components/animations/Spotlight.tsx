'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

/**
 * Spotlight - Mouse-following spotlight effect
 */
export function Spotlight({ className, fill = '#4361EE' }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;

      const rect = spotlightRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlightRef.current.style.setProperty('--spotlight-x', `${x}px`);
      spotlightRef.current.style.setProperty('--spotlight-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={cn('absolute inset-0 overflow-hidden -z-10', className)}
      style={
        {
          '--spotlight-x': '50%',
          '--spotlight-y': '50%',
        } as React.CSSProperties
      }
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: '600px',
          height: '600px',
          left: 'var(--spotlight-x)',
          top: 'var(--spotlight-y)',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${fill}20 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
