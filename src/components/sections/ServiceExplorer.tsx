'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container, Card, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

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

interface ServiceCategoryDisplay {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  services: { title: string; description: string; icon: string }[];
}

/**
 * Service tab button component
 */
function ServiceTab({
  category,
  isActive,
  onClick,
}: {
  category: ServiceCategoryDisplay;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 text-left w-full',
        isActive
          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30'
          : 'bg-dark-card border border-dark-border hover:border-primary/20 hover:bg-dark-card/80'
      )}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
          isActive ? 'bg-primary/20 text-primary' : 'bg-dark-lighter text-[var(--color-text-muted)]'
        )}
      >
        <DynamicIcon name={category.icon} size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <h3
          className={cn(
            'font-semibold transition-colors truncate',
            isActive ? 'text-white' : 'text-[var(--color-text-secondary)]'
          )}
        >
          {category.title}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] truncate">{category.subtitle}</p>
      </div>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"
        />
      )}
    </button>
  );
}

/**
 * Service card component for individual services
 */
function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card hover gradient className="h-full">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
            <DynamicIcon name={icon} size={20} className="text-primary" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{title}</h4>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/**
 * Interactive Service Explorer component
 * Tab-based navigation showing all service categories
 */
export function ServiceExplorer() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('saas');

  // Build services data from translations
  const services: ServiceCategoryDisplay[] = [
    {
      id: 'saas',
      title: t.services.saas.title,
      subtitle: t.services.saas.subtitle,
      description: t.services.saas.description,
      icon: 'Cpu',
      services: [
        { ...t.services.items.aiAssistants, icon: 'Bot' },
        { ...t.services.items.leadIntelligence, icon: 'Target' },
        { ...t.services.items.workflowAutomation, icon: 'Workflow' },
        { ...t.services.items.analytics, icon: 'BarChart3' },
        { ...t.services.items.contentDistribution, icon: 'Share2' },
      ],
    },
    {
      id: 'consulting',
      title: t.services.consulting.title,
      subtitle: t.services.consulting.subtitle,
      description: t.services.consulting.description,
      icon: 'Lightbulb',
      services: [
        { ...t.services.items.aiIntegration, icon: 'Brain' },
        { ...t.services.items.legacyModernization, icon: 'RefreshCw' },
        { ...t.services.items.processOptimization, icon: 'ClipboardCheck' },
        { ...t.services.items.enterpriseDev, icon: 'Building2' },
        { ...t.services.items.apiIntegration, icon: 'Plug' },
        { ...t.services.items.mobileDev, icon: 'Smartphone' },
        { ...t.services.items.uiux, icon: 'Palette' },
      ],
    },
    {
      id: 'marketing',
      title: t.services.marketing.title,
      subtitle: t.services.marketing.subtitle,
      description: t.services.marketing.description,
      icon: 'Megaphone',
      services: [
        { ...t.services.items.aiContent, icon: 'FileText' },
        { ...t.services.items.videoAudio, icon: 'Video' },
        { ...t.services.items.visualDesign, icon: 'Image' },
        { ...t.services.items.multiPlatform, icon: 'Globe' },
        { ...t.services.items.analyticsTracking, icon: 'TrendingUp' },
        { ...t.services.items.seo, icon: 'Search' },
      ],
    },
    {
      id: 'infrastructure',
      title: t.services.infrastructure.title,
      subtitle: t.services.infrastructure.subtitle,
      description: t.services.infrastructure.description,
      icon: 'Server',
      services: [
        { ...t.services.items.cloudMigration, icon: 'Cloud' },
        { ...t.services.items.security, icon: 'Shield' },
        { ...t.services.items.systemIntegration, icon: 'Link' },
      ],
    },
  ];

  const currentCategory = services.find((s) => s.id === activeCategory) || services[0];

  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary uppercase tracking-wider font-medium">
            {t.services.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">
            {t.services.title} <GradientText>{t.services.titleHighlight}</GradientText>
            <br className="hidden sm:block" /> {t.services.titleEnd}
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-base sm:text-lg">
            {t.services.description}
          </p>
        </motion.div>

        {/* Explorer Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-3"
          >
            {services.map((category) => (
              <ServiceTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </motion.div>

          {/* Content - Right Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {currentCategory.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {currentCategory.services.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
