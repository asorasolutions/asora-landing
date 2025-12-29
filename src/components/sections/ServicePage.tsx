'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container, Card, Button, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

type ServiceCategory = 'saas' | 'consulting' | 'marketing' | 'infrastructure';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServicePageProps {
  category: ServiceCategory;
}

/**
 * Dynamic icon component that renders Lucide icons by name
 */
function DynamicIcon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const iconsMap = Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;
  const IconComponent = iconsMap[name];

  if (!IconComponent) {
    return <Icons.Box size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
}

const categoryConfig: Record<ServiceCategory, {
  icon: string;
  gradient: string;
  services: { key: string; icon: string }[];
}> = {
  saas: {
    icon: 'Cpu',
    gradient: 'from-blue-500 to-cyan-500',
    services: [
      { key: 'aiAssistants', icon: 'Bot' },
      { key: 'leadIntelligence', icon: 'Target' },
      { key: 'workflowAutomation', icon: 'Workflow' },
      { key: 'analytics', icon: 'BarChart3' },
      { key: 'contentDistribution', icon: 'Share2' },
    ],
  },
  consulting: {
    icon: 'Lightbulb',
    gradient: 'from-amber-500 to-orange-500',
    services: [
      { key: 'aiIntegration', icon: 'Brain' },
      { key: 'legacyModernization', icon: 'RefreshCw' },
      { key: 'processOptimization', icon: 'ClipboardCheck' },
      { key: 'enterpriseDev', icon: 'Building2' },
      { key: 'apiIntegration', icon: 'Plug' },
      { key: 'mobileDev', icon: 'Smartphone' },
      { key: 'uiux', icon: 'Palette' },
    ],
  },
  marketing: {
    icon: 'Megaphone',
    gradient: 'from-pink-500 to-rose-500',
    services: [
      { key: 'aiContent', icon: 'FileText' },
      { key: 'videoAudio', icon: 'Video' },
      { key: 'visualDesign', icon: 'Image' },
      { key: 'multiPlatform', icon: 'Globe' },
      { key: 'analyticsTracking', icon: 'TrendingUp' },
      { key: 'seo', icon: 'Search' },
    ],
  },
  infrastructure: {
    icon: 'Server',
    gradient: 'from-emerald-500 to-teal-500',
    services: [
      { key: 'cloudMigration', icon: 'Cloud' },
      { key: 'security', icon: 'Shield' },
      { key: 'systemIntegration', icon: 'Link' },
    ],
  },
};

/**
 * Service card component for individual services
 */
function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card hover gradient className="h-full">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
            <DynamicIcon name={icon} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/**
 * Reusable service page component for all service categories
 */
export function ServicePage({ category }: ServicePageProps) {
  const { t } = useTranslation();
  const config = categoryConfig[category];
  const categoryData = t.services[category];

  const services: ServiceItem[] = config.services.map((s) => ({
    title: t.services.items[s.key as keyof typeof t.services.items].title,
    description: t.services.items[s.key as keyof typeof t.services.items].description,
    icon: s.icon,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className={cn(
            'absolute top-20 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20',
            `bg-gradient-to-br ${config.gradient}`
          )} />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.services}
              </Link>
              <Icons.ChevronRight size={14} />
              <span className="text-white">{categoryData.title}</span>
            </nav>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary to-secondary">
              <DynamicIcon name={config.icon} size={32} className="text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <GradientText>{categoryData.title}</GradientText>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[var(--color-text-secondary)] mb-4">
              {categoryData.subtitle}
            </p>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mb-8">
              {categoryData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="/#contact" size="lg">
                {t.hero.cta2}
              </Button>
              <Button href="/#services" variant="secondary" size="lg">
                {t.services.sectionLabel}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-lighter">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.servicePage?.whatWeOffer || 'What We Offer'}
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t.servicePage?.offerDescription || 'Explore our comprehensive range of solutions designed to transform your business.'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-dark-border"
          >
            {/* Content */}
            <div className="relative p-8 sm:p-12 text-center bg-dark-card">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t.contact.title} <GradientText>{t.contact.titleHighlight}</GradientText> {t.contact.titleEnd}
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
                {t.contact.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/#contact" size="lg">
                  {t.contact.bookConsultation}
                </Button>
                <Button href={`mailto:${t.contact.email}`} variant="secondary" size="lg">
                  {t.contact.sendEmail}
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
