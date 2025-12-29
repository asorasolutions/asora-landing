/**
 * Core TypeScript interfaces for Asora Solutions landing page
 */

// =============================================================================
// SERVICE TYPES
// =============================================================================

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

// =============================================================================
// CHAT DEMO TYPES
// =============================================================================

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  delay?: number;
}

export interface ChatScenario {
  id: string;
  title: string;
  description: string;
  messages: ChatMessage[];
}

// =============================================================================
// NAVIGATION TYPES
// =============================================================================

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// =============================================================================
// COMPONENT PROP TYPES
// =============================================================================

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

// =============================================================================
// ANIMATION TYPES
// =============================================================================

export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}
