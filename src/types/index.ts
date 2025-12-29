/**
 * Core TypeScript interfaces for Asora Solutions landing page
 */

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
