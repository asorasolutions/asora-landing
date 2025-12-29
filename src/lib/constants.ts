/**
 * Constants and data for Asora Solutions landing page
 * Centralized data following DRY principles
 */

import type { ServiceCategory, ChatScenario, NavLink } from '@/types';

// =============================================================================
// COMPANY INFO
// =============================================================================

export const COMPANY = {
  name: 'Asora Solutions',
  tagline: 'Transforming Business Through Intelligent Technology',
  description:
    'We deliver AI-powered solutions, custom software development, and digital transformation services that drive measurable business results.',
  email: 'sales@asorasolutions.com',
  phone: '+584241478310',
  phoneFormatted: '+58 424-147-8310',
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// =============================================================================
// SERVICES DATA
// =============================================================================

export const SERVICES: ServiceCategory[] = [
  {
    id: 'saas',
    title: 'SaaS Solutions',
    subtitle: 'Intelligent Business Automation Suite',
    description:
      'Comprehensive AI-powered tools designed to automate, optimize, and scale your business operations.',
    icon: 'Cpu',
    services: [
      {
        title: 'AI Virtual Assistants',
        description:
          'Industry-specific conversational AI for customer service, appointment scheduling, and information management.',
        icon: 'Bot',
      },
      {
        title: 'Lead Intelligence Platform',
        description:
          'Automated prospect discovery, qualification, and outreach for service-based businesses.',
        icon: 'Target',
      },
      {
        title: 'Workflow Automation Engine',
        description:
          'Process optimization and task automation for repetitive business operations.',
        icon: 'Workflow',
      },
      {
        title: 'Performance Analytics Dashboard',
        description: 'Real-time business metrics and predictive insights.',
        icon: 'BarChart3',
      },
      {
        title: 'Multi-Platform Content Distribution',
        description:
          'Unified content creation, scheduling, and publishing across social media channels.',
        icon: 'Share2',
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting & Implementation',
    subtitle: 'Digital Transformation Experts',
    description:
      'Strategic consulting and hands-on implementation to modernize your technology infrastructure.',
    icon: 'Lightbulb',
    services: [
      {
        title: 'AI Integration Strategy',
        description:
          'Assessment, planning, and implementation of AI tools for business processes.',
        icon: 'Brain',
      },
      {
        title: 'Legacy System Modernization',
        description:
          'Migration planning and execution for outdated technology infrastructure.',
        icon: 'RefreshCw',
      },
      {
        title: 'Process Optimization Audits',
        description:
          'Comprehensive workflow analysis and improvement recommendations.',
        icon: 'ClipboardCheck',
      },
      {
        title: 'Enterprise Application Development',
        description: 'Tailored software solutions for specific business requirements.',
        icon: 'Building2',
      },
      {
        title: 'API Integration Services',
        description: 'Connecting disparate systems and third-party applications.',
        icon: 'Plug',
      },
      {
        title: 'Mobile Application Development',
        description: 'Native and progressive web applications.',
        icon: 'Smartphone',
      },
      {
        title: 'UI/UX Design Services',
        description:
          'User interface design, user experience optimization, and usability testing.',
        icon: 'Palette',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Content',
    subtitle: 'AI-Powered Creative Solutions',
    description:
      'Leverage artificial intelligence to create, distribute, and optimize your marketing content at scale.',
    icon: 'Megaphone',
    services: [
      {
        title: 'AI Content Production',
        description:
          'Blog posts, social media copy, product descriptions, and scripts.',
        icon: 'FileText',
      },
      {
        title: 'Video & Audio Creation',
        description:
          'AI voiceovers, video editing, podcast production, and shorts.',
        icon: 'Video',
      },
      {
        title: 'Visual Design Assets',
        description: 'Logos, graphics, brand guidelines, and marketing materials.',
        icon: 'Image',
      },
      {
        title: 'Multi-Platform Publishing',
        description: 'Automated content distribution across social channels.',
        icon: 'Globe',
      },
      {
        title: 'Analytics & Performance Tracking',
        description: 'ROI measurement, A/B testing, and campaign optimization.',
        icon: 'TrendingUp',
      },
      {
        title: 'SEO & Web Strategy',
        description:
          'Technical SEO, keyword strategy, and search visibility optimization.',
        icon: 'Search',
      },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Technology Infrastructure',
    subtitle: 'Enterprise Cloud Solutions',
    description:
      'Build a robust, secure, and scalable technology foundation for your digital operations.',
    icon: 'Server',
    services: [
      {
        title: 'Cloud Migration Services',
        description: 'AWS, Azure, Google Cloud implementation and optimization.',
        icon: 'Cloud',
      },
      {
        title: 'Security Implementation',
        description: 'Cybersecurity audits, implementation, and monitoring.',
        icon: 'Shield',
      },
      {
        title: 'System Integration',
        description: 'Enterprise software connectivity and data synchronization.',
        icon: 'Link',
      },
    ],
  },
];

// =============================================================================
// CHAT DEMO SCENARIOS
// =============================================================================

export const CHAT_SCENARIOS: ChatScenario[] = [
  {
    id: 'customer-service',
    title: 'Customer Service',
    description: 'See how our AI handles customer inquiries',
    messages: [
      {
        id: '1',
        role: 'user',
        content: "Hi, I'm interested in your workflow automation services. Can you tell me more?",
        delay: 0,
      },
      {
        id: '2',
        role: 'assistant',
        content:
          "Hello! I'd be happy to help you learn about our Workflow Automation Engine. It's designed to streamline repetitive business operations, saving you time and reducing errors. What specific processes are you looking to automate?",
        delay: 1500,
      },
      {
        id: '3',
        role: 'user',
        content: "We have a lot of manual data entry and approval workflows that slow us down.",
        delay: 3500,
      },
      {
        id: '4',
        role: 'assistant',
        content:
          "Those are perfect candidates for automation! Our engine can automatically capture data from forms, route approvals to the right people, and even learn from patterns to suggest optimizations. Clients typically see a 60-70% reduction in processing time. Would you like to schedule a demo to see it in action?",
        delay: 5500,
      },
    ],
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification',
    description: 'Watch AI qualify and nurture leads',
    messages: [
      {
        id: '1',
        role: 'assistant',
        content:
          "Hi! I noticed you've been exploring our AI solutions. I'm here to help you find the right fit for your business. What's your primary goal right now?",
        delay: 0,
      },
      {
        id: '2',
        role: 'user',
        content: "We want to improve our customer response times and scale our support team.",
        delay: 1500,
      },
      {
        id: '3',
        role: 'assistant',
        content:
          "Great goal! Based on that, our AI Virtual Assistant would be ideal. It handles 80% of common inquiries instantly, 24/7. Quick question: how many support tickets do you handle monthly, and what's your current average response time?",
        delay: 3000,
      },
      {
        id: '4',
        role: 'user',
        content: "About 2,000 tickets per month, and we average 4-6 hours response time.",
        delay: 5000,
      },
      {
        id: '5',
        role: 'assistant',
        content:
          "With that volume, you could reduce response time to under 5 minutes for most queries. I've prepared a custom ROI analysis for you. Would you like me to connect you with a solutions specialist to review it together?",
        delay: 7000,
      },
    ],
  },
  {
    id: 'appointment',
    title: 'Appointment Booking',
    description: 'Seamless scheduling automation',
    messages: [
      {
        id: '1',
        role: 'user',
        content: "I'd like to book a consultation to discuss cloud migration.",
        delay: 0,
      },
      {
        id: '2',
        role: 'assistant',
        content:
          "I'd be happy to help you schedule that! Our cloud solutions team has availability this week. What works better for you - a 30-minute intro call or a 60-minute deep-dive session?",
        delay: 1200,
      },
      {
        id: '3',
        role: 'user',
        content: "Let's do the 60-minute session. I want to cover everything.",
        delay: 2800,
      },
      {
        id: '4',
        role: 'assistant',
        content:
          "Here are available slots for a 60-minute deep-dive:\n\n• Tuesday, 2:00 PM EST\n• Wednesday, 10:00 AM EST\n• Thursday, 3:30 PM EST\n\nWhich works best for you?",
        delay: 4200,
      },
      {
        id: '5',
        role: 'user',
        content: "Wednesday at 10 AM works perfectly.",
        delay: 6000,
      },
      {
        id: '6',
        role: 'assistant',
        content:
          "You're all set for Wednesday at 10:00 AM EST. I've sent a calendar invite to your email with a video call link. Before the meeting, is there anything specific about your current infrastructure you'd like our team to prepare for?",
        delay: 7500,
      },
    ],
  },
];

// =============================================================================
// ANIMATION VARIANTS (for Framer Motion)
// =============================================================================

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
} as const;

// =============================================================================
// STATS
// =============================================================================

export const STATS = [
  { value: '50+', label: 'Clients Served' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'AI Support' },
] as const;
