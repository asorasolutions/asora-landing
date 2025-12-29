import type { Metadata } from 'next';
import { ServicePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Consulting & Implementation',
  description: 'Strategic consulting and hands-on implementation services for digital transformation, AI integration, and legacy system modernization.',
};

export default function ConsultingPage() {
  return <ServicePage category="consulting" />;
}
