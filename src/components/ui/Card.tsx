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

/**
 * Card Header sub-component
 */
export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

/**
 * Card Title sub-component
 */
export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('text-xl font-semibold text-white', className)}>
      {children}
    </h3>
  );
}

/**
 * Card Description sub-component
 */
export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-[var(--color-text-secondary)] text-sm leading-relaxed', className)}>
      {children}
    </p>
  );
}

/**
 * Card Content sub-component
 */
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('', className)}>{children}</div>;
}
