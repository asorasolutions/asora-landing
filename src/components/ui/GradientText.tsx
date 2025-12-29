import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Gradient text component for brand-colored headings
 */
export function GradientText({ children, className }: GradientTextProps) {
  return <span className={cn('text-gradient', className)}>{children}</span>;
}
