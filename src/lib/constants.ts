/**
 * Constants and data for Asora Solutions landing page
 */

import type { ChatScenario } from '@/types';

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
