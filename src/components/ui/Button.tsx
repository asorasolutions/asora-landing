'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

/**
 * Reusable Button component with multiple variants
 * Supports both button and link behaviors
 */

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/25',
  secondary:
    'bg-dark-card text-white border border-dark-border hover:border-primary/50 hover:bg-dark-lighter',
  outline:
    'bg-transparent text-white border border-primary/50 hover:bg-primary/10 hover:border-primary',
  ghost: 'bg-transparent text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-sm',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  );

  // Handle hash links with smooth scroll
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without triggering navigation
      window.history.pushState(null, '', hash);
    }
  };

  // Render as Link if href is provided
  if (href) {
    const isExternal = href.startsWith('http');
    const isHash = href.startsWith('#');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      );
    }

    // For hash links, use anchor with smooth scroll
    if (isHash) {
      return (
        <a
          href={href}
          onClick={(e) => handleHashClick(e, href)}
          className={baseStyles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  );
}
