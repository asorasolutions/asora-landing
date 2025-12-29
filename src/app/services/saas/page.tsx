import type { Metadata } from 'next';
import { ServicePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'SaaS Solutions',
  description: 'AI-powered SaaS solutions including virtual assistants, lead intelligence, workflow automation, and analytics dashboards.',
};

export default function SaaSPage() {
  return <ServicePage category="saas" />;
}
