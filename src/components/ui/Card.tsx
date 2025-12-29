'use client';

import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

/**
 * Reusable Card component with hover and gradient border options
 */
export function Card({
  children,
  className,
  hover = true,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        'bg-dark-card border border-dark-border',
        hover && 'hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5',
        gradient && 'gradient-border',
        className
      )}
    >
      {children}
    </div>
  );
}
