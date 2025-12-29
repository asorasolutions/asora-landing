import type { Metadata } from 'next';
import { ServicePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Marketing & Content',
  description: 'AI-powered content creation, video production, SEO strategy, and multi-platform marketing solutions.',
};

export default function MarketingPage() {
  return <ServicePage category="marketing" />;
}
