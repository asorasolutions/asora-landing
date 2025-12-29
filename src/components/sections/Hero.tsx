'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Bot, Send, CheckCircle2, Workflow } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';

/**
 * Cursor-following gradient background - Contained to hero section
 */
function CursorGradient({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Get position relative to the container
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, containerRef]);

  return (
    <>
      {/* Primary large gradient blob */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(67, 97, 238, 0.5) 0%, rgba(114, 9, 183, 0.3) 30%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary accent blob with delay */}
      <motion.div
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full"
        style={{
          x: useSpring(mouseX, { damping: 30, stiffness: 80 }),
          y: useSpring(mouseY, { damping: 30, stiffness: 80 }),
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(114, 9, 183, 0.6) 0%, rgba(67, 97, 238, 0.3) 40%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Small bright core */}
      <motion.div
        className="pointer-events-none absolute w-[200px] h-[200px] rounded-full"
        style={{
          x: useSpring(mouseX, { damping: 15, stiffness: 150 }),
          y: useSpring(mouseY, { damping: 15, stiffness: 150 }),
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(67, 97, 238, 0.7) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </>
  );
}

/**
 * AI Workflow Mockup - Shows automation pipeline
 */
function WorkflowMockup({ t }: { t: Record<string, unknown> }) {
  const [activeStep, setActiveStep] = useState(0);
  const workflow = t.hero as { workflow: Record<string, string> };

  const steps = [
    { icon: Send, label: workflow.workflow.input, status: workflow.workflow.inputStatus },
    { icon: Bot, label: workflow.workflow.processing, status: workflow.workflow.processingStatus },
    { icon: CheckCircle2, label: workflow.workflow.output, status: workflow.workflow.outputStatus },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-lg"
    >
      {/* Main workflow card */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Workflow size={18} className="text-white" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm">{workflow.workflow.title}</span>
              <p className="text-[10px] text-[var(--color-text-muted)]">{workflow.workflow.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-400">{workflow.workflow.active}</span>
          </div>
        </div>

        {/* Workflow Steps - Connected Pipeline */}
        <div className="relative flex items-center justify-between mb-6 px-2">
          {/* Connection line background */}
          <div className="absolute left-[32px] right-[32px] top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-[32px] top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: activeStep === 0 ? '0%' : activeStep === 1 ? 'calc(50% - 16px)' : 'calc(100% - 64px)'
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {steps.map((step, idx) => {
            const isActive = activeStep >= idx;
            const isCurrent = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <div key={step.label} className="relative z-10 flex flex-col items-center">
                {/* Step Node */}
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.15 : 1,
                    boxShadow: isCurrent ? '0 0 25px rgba(67, 97, 238, 0.6)' : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-secondary'
                      : 'bg-dark-card border border-white/10'
                  }`}
                >
                  <StepIcon
                    size={22}
                    className={isActive ? 'text-white' : 'text-[var(--color-text-muted)]'}
                  />
                  {isCurrent && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 rounded-2xl bg-primary/40"
                    />
                  )}
                </motion.div>

                {/* Step Label */}
                <motion.span
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                  className={`mt-2 text-[11px] font-medium ${
                    isActive ? 'text-white' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {step.label}
                </motion.span>
              </div>
            );
          })}
        </div>

        {/* Status Display */}
        <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">{workflow.workflow.currentStatus}</span>
            <span className="text-[10px] text-primary font-medium">{workflow.workflow.step} {activeStep + 1}/3</span>
          </div>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activeStep === 2 ? 'bg-green-500/20' : 'bg-primary/20'
            }`}>
              {React.createElement(steps[activeStep].icon, {
                size: 14,
                className: activeStep === 2 ? 'text-green-400' : 'text-primary',
              })}
            </div>
            <div>
              <p className="text-sm text-white font-medium">{steps[activeStep].label}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">{steps[activeStep].status}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -top-3 -right-3 bg-dark-card border border-white/10 rounded-xl px-3 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <Zap size={12} className="text-green-400" />
          </div>
          <div>
            <p className="text-[10px] text-white font-medium">+340%</p>
            <p className="text-[9px] text-[var(--color-text-muted)]">{workflow.workflow.efficiency}</p>
          </div>
        </div>
      </motion.div>

      {/* Floating sparkle */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute -bottom-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-white/10 flex items-center justify-center"
      >
        <Sparkles size={14} className="text-primary" />
      </motion.div>
    </motion.div>
  );
}

/**
 * Hero section with cursor-following gradient
 */
export function Hero() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Cursor-following gradient - contained to this section */}
      <CursorGradient containerRef={sectionRef} />

      {/* Dot grid pattern background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Static gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Floating Workflow Mockup */}
          <div className="mb-10 w-full flex justify-center">
            <WorkflowMockup t={t} />
          </div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
              <span className="text-white">{t.hero.headline1}</span>
              <br />
              <span className="text-gradient">{t.hero.headline2}</span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button variant="primary" size="lg" href="#services">
              <Sparkles size={14} />
              {t.hero.cta1}
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              {t.hero.cta2}
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
