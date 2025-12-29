'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Container, Button, Card, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { COMPANY } from '@/lib/constants';

/**
 * Contact info item component
 */
function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-sm text-[var(--color-text-muted)] mb-1">{label}</p>
        <p className="text-base text-white font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

/**
 * Contact section with booking integration
 */
export function Contact() {
  const { t } = useTranslation();

  // Google Calendar booking URL
  const CALENDAR_BOOKING_URL = 'https://calendar.app.google/qfm3nS94wGKbiAQ79';

  const benefits = [
    t.contact.benefits.freeCall,
    t.contact.benefits.personalized,
    t.contact.benefits.noCommitment,
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              {t.contact.sectionLabel}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5">
              {t.contact.title} <GradientText>{t.contact.titleHighlight}</GradientText>
              <br />
              {t.contact.titleEnd}
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <ContactItem
                icon={Mail}
                label={t.contact.email}
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactItem
                icon={Phone}
                label={t.contact.phone}
                value={COMPANY.phoneFormatted}
                href={`tel:${COMPANY.phone}`}
              />
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href={`mailto:${COMPANY.email}`}>
                {t.contact.sendEmail}
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href={`tel:${COMPANY.phone}`}>
                {t.contact.callNow}
              </Button>
            </div>
          </motion.div>

          {/* Right - Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card gradient className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Calendar size={28} className="text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {t.contact.bookConsultation}
                </h3>

                <p className="text-base text-[var(--color-text-secondary)]">
                  {t.contact.bookDescription}
                </p>
              </div>

              {/* Booking benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-[var(--color-text-secondary)] text-sm">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Book button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                href={CALENDAR_BOOKING_URL}
              >
                <Calendar size={20} />
                {t.contact.scheduleButton}
              </Button>

              <p className="text-center text-xs text-[var(--color-text-muted)] mt-4">
                {t.contact.availability}
              </p>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
