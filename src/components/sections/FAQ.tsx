'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

/**
 * Individual FAQ accordion item
 */
function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'border-b border-dark-border/50 last:border-b-0',
        'transition-all duration-300'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-base sm:text-lg font-medium transition-colors duration-200',
            isOpen ? 'text-white' : 'text-[var(--color-text-secondary)] group-hover:text-white'
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            'ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
            isOpen
              ? 'bg-gradient-to-br from-primary to-secondary text-white rotate-0'
              : 'bg-dark-card border border-dark-border text-[var(--color-text-muted)] group-hover:border-primary/50'
          )}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * FAQ Section with accordion-style questions
 */
export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { question: t.faq.items.services.question, answer: t.faq.items.services.answer },
    { question: t.faq.items.pricing.question, answer: t.faq.items.pricing.answer },
    { question: t.faq.items.timeline.question, answer: t.faq.items.timeline.answer },
    { question: t.faq.items.process.question, answer: t.faq.items.process.answer },
    { question: t.faq.items.technology.question, answer: t.faq.items.technology.answer },
    { question: t.faq.items.support.question, answer: t.faq.items.support.answer },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              {t.faq.sectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">
              {t.faq.title} <GradientText>{t.faq.titleHighlight}</GradientText>
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
              {t.faq.description}
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="bg-dark-card/30 backdrop-blur-sm border border-dark-border/50 rounded-2xl px-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-[var(--color-text-muted)]">
              {t.faq.moreQuestions}{' '}
              <a
                href="#contact"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {t.faq.contactUs}
              </a>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
