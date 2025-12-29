import type { Metadata } from 'next';
import { ServicePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Technology Infrastructure',
  description: 'Enterprise cloud solutions, security implementation, and system integration services for robust digital operations.',
};

export default function InfrastructurePage() {
  return <ServicePage category="infrastructure" />;
}
