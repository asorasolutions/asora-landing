'use client';

import { cn } from '@/lib/utils';

interface AuroraProps {
  className?: string;
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
  blur?: 'soft' | 'medium' | 'strong';
}

/**
 * Aurora - Beautiful animated aurora/gradient background
 * Inspired by prelude.so and reactbits
 */
export function Aurora({
  className,
  colors = ['#4361EE', '#7209B7', '#4361EE20'],
  speed = 'medium',
  blur = 'strong',
}: AuroraProps) {
  const speedMap = {
    slow: '25s',
    medium: '15s',
    fast: '8s',
  };

  const blurMap = {
    soft: '60px',
    medium: '100px',
    strong: '150px',
  };

  return (
    <div className={cn('absolute inset-0 overflow-hidden -z-10', className)}>
      {/* Primary blob */}
      <div
        className="absolute opacity-40"
        style={{
          width: '60%',
          height: '60%',
          top: '10%',
          left: '20%',
          background: `radial-gradient(ellipse at center, ${colors[0]} 0%, transparent 70%)`,
          filter: `blur(${blurMap[blur]})`,
          animation: `aurora-1 ${speedMap[speed]} ease-in-out infinite`,
        }}
      />

      {/* Secondary blob */}
      <div
        className="absolute opacity-30"
        style={{
          width: '50%',
          height: '50%',
          bottom: '10%',
          right: '10%',
          background: `radial-gradient(ellipse at center, ${colors[1]} 0%, transparent 70%)`,
          filter: `blur(${blurMap[blur]})`,
          animation: `aurora-2 ${speedMap[speed]} ease-in-out infinite`,
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute opacity-20"
        style={{
          width: '40%',
          height: '40%',
          top: '40%',
          left: '5%',
          background: `radial-gradient(ellipse at center, ${colors[2] || colors[0]} 0%, transparent 70%)`,
          filter: `blur(${blurMap[blur]})`,
          animation: `aurora-3 ${speedMap[speed]} ease-in-out infinite`,
        }}
      />

      <style jsx>{`
        @keyframes aurora-1 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(10%, 15%) rotate(5deg) scale(1.1);
          }
          50% {
            transform: translate(-5%, 10%) rotate(-5deg) scale(0.95);
          }
          75% {
            transform: translate(-15%, -10%) rotate(3deg) scale(1.05);
          }
        }

        @keyframes aurora-2 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-15%, 10%) rotate(-5deg) scale(1.15);
          }
          50% {
            transform: translate(10%, -15%) rotate(8deg) scale(0.9);
          }
          75% {
            transform: translate(5%, 20%) rotate(-3deg) scale(1.1);
          }
        }

        @keyframes aurora-3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          33% {
            transform: translate(20%, -10%) scale(1.2);
          }
          66% {
            transform: translate(-10%, 15%) scale(0.85);
          }
        }
      `}</style>
    </div>
  );
}
