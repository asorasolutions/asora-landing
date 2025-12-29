'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Zap, Award, ArrowUpRight, CheckCircle2, Star, Code2, Cpu } from 'lucide-react';
import { Container } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/**
 * Interactive feature pill
 */
function FeaturePill({
  icon: Icon,
  title,
  description,
  index,
  isActive,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'group w-full text-left p-6 rounded-2xl transition-all duration-500',
        'border border-transparent hover:border-primary/20',
        isActive
          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30'
          : 'hover:bg-dark-card/50'
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
            isActive
              ? 'bg-gradient-to-br from-primary to-secondary text-white'
              : 'bg-dark-card text-[var(--color-text-muted)] group-hover:text-primary'
          )}
        >
          <Icon size={24} />
        </div>
        <div className="flex-1 min-h-[60px]">
          <h4
            className={cn(
              'font-semibold text-base sm:text-lg mb-1 transition-colors',
              isActive ? 'text-white' : 'text-[var(--color-text-secondary)]'
            )}
          >
            {title}
          </h4>
          <motion.p
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              'text-sm text-[var(--color-text-muted)] line-clamp-2',
              !isActive && 'invisible'
            )}
          >
            {description}
          </motion.p>
        </div>
        <ArrowUpRight
          size={20}
          className={cn(
            'transition-all duration-300',
            isActive
              ? 'text-primary rotate-0'
              : 'text-[var(--color-text-muted)] -rotate-45 opacity-0 group-hover:opacity-100'
          )}
        />
      </div>
    </motion.button>
  );
}

/**
 * Floating accent shape
 */
function FloatingShape({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn(
        'absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl',
        className
      )}
    />
  );
}

/**
 * Expertise/Team Mockup - Shows company capabilities
 */
function ExpertiseMockup({ activeFeature, t }: { activeFeature: number; t: Record<string, unknown> }) {
  const expertise = (t.about as { expertise: Record<string, string> }).expertise;

  const stats = [
    { value: '50+', label: expertise.projects, icon: CheckCircle2 },
    { value: '99%', label: expertise.satisfaction, icon: Star },
    { value: '15+', label: expertise.experts, icon: Users },
  ];

  const techStack = [
    { name: expertise.aiMl, color: 'from-primary to-blue-500' },
    { name: expertise.cloud, color: 'from-secondary to-purple-500' },
    { name: expertise.saas, color: 'from-green-500 to-emerald-500' },
    { name: expertise.analytics, color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Main card */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Cpu size={18} className="text-white" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm">{expertise.title}</span>
              <p className="text-[10px] text-[var(--color-text-muted)]">{expertise.subtitle}</p>
            </div>
          </div>
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-8 h-8 rounded-full border-2 border-dark-card bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center"
              >
                <span className="text-[10px] text-white font-medium">
                  {['H', 'S', 'A', '+'][i]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={cn(
                'text-center p-3 rounded-xl bg-white/[0.02] border transition-all duration-300',
                activeFeature === idx
                  ? 'border-primary/50 bg-primary/5'
                  : 'border-white/5'
              )}
            >
              <stat.icon
                size={14}
                className={cn(
                  'mx-auto mb-1 transition-colors',
                  activeFeature === idx ? 'text-primary' : 'text-[var(--color-text-muted)]'
                )}
              />
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-3">{expertise.expertiseLabel}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className={cn(
                  'px-3 py-1.5 rounded-full text-[11px] font-medium bg-gradient-to-r text-white',
                  tech.color
                )}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Active Project Indicator */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-white font-medium">{expertise.activeDev}</p>
            <p className="text-[10px] text-[var(--color-text-muted)]">12 {expertise.projectsInProgress}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-400">{expertise.live}</span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -top-3 -right-3 bg-dark-card border border-white/10 rounded-xl px-3 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
          </div>
          <div>
            <p className="text-[10px] text-white font-medium">{expertise.topRated}</p>
            <p className="text-[9px] text-[var(--color-text-muted)]">5.0 {expertise.rating}</p>
          </div>
        </div>
      </motion.div>

      {/* Floating code badge */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute -bottom-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-white/10 flex items-center justify-center"
      >
        <Code2 size={14} className="text-primary" />
      </motion.div>
    </motion.div>
  );
}

/**
 * About section - Completely redesigned with creative layout
 * Features: Interactive pills, animated counters, parallax elements
 */
export function About() {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Target,
      title: t.about.features.resultsDriven.title,
      description: t.about.features.resultsDriven.description,
    },
    {
      icon: Users,
      title: t.about.features.expertTeam.title,
      description: t.about.features.expertTeam.description,
    },
    {
      icon: Zap,
      title: t.about.features.rapidDelivery.title,
      description: t.about.features.rapidDelivery.description,
    },
    {
      icon: Award,
      title: t.about.features.qualityFirst.title,
      description: t.about.features.qualityFirst.description,
    },
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
    >
      {/* Top gradient fade for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none z-10" />

      {/* Floating accent shapes */}
      <FloatingShape delay={0} className="top-20 left-10" />
      <FloatingShape delay={2} className="bottom-40 right-20" />
      <FloatingShape delay={4} className="top-1/2 left-1/3" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Expertise Mockup */}
          <motion.div
            ref={visualRef}
            style={{ y, opacity }}
            className="relative order-2 lg:order-1"
          >
            <ExpertiseMockup activeFeature={activeFeature} t={t} />
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm text-primary uppercase tracking-wider font-medium">
                {t.about.sectionLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">
                {t.about.title}{' '}
                <span className="text-gradient">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            {/* Interactive feature pills */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <FeaturePill
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl" />

          <div className="relative p-12 md:p-16 text-center">
            {/* Quote marks */}
            <div className="absolute top-8 left-8 text-8xl text-primary/10 font-serif leading-none">
              &ldquo;
            </div>
            <div className="absolute bottom-8 right-8 text-8xl text-primary/10 font-serif leading-none">
              &rdquo;
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto relative z-10">
              {t.about.mission}
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-[var(--color-text-muted)] text-sm font-medium">
                {t.about.missionAuthor}
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
