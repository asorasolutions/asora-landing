/**
 * Utility functions for Asora Solutions landing page
 */

import { clsx, type ClassValue } from 'clsx';

/**
 * Merge class names with clsx - utility for conditional classes
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
