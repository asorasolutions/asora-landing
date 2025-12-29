'use client';

import { motion } from 'framer-motion';
import { Container, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { COMPANY } from '@/lib/constants';

export default function TermsPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t.terms?.acceptance || 'Acceptance of Terms',
      content: t.terms?.acceptanceContent || `By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.`,
    },
    {
      title: t.terms?.services || 'Our Services',
      content: t.terms?.servicesContent || `${COMPANY.name} provides AI-powered business solutions, consulting services, software development, and digital transformation services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
    },
    {
      title: t.terms?.userObligations || 'User Obligations',
      content: t.terms?.userObligationsContent || `You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,
    },
    {
      title: t.terms?.intellectualProperty || 'Intellectual Property',
      content: t.terms?.intellectualPropertyContent || `All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of ${COMPANY.name} and are protected by copyright, trademark, and other intellectual property laws.`,
    },
    {
      title: t.terms?.payment || 'Payment Terms',
      content: t.terms?.paymentContent || `Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing. We reserve the right to modify our pricing with reasonable notice to existing customers.`,
    },
    {
      title: t.terms?.limitation || 'Limitation of Liability',
      content: t.terms?.limitationContent || `${COMPANY.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the twelve months preceding the claim.`,
    },
    {
      title: t.terms?.indemnification || 'Indemnification',
      content: t.terms?.indemnificationContent || `You agree to indemnify and hold harmless ${COMPANY.name} and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.`,
    },
    {
      title: t.terms?.termination || 'Termination',
      content: t.terms?.terminationContent || `We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service. Upon termination, your right to use our services will cease immediately.`,
    },
    {
      title: t.terms?.governing || 'Governing Law',
      content: t.terms?.governingContent || `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ${COMPANY.name} operates, without regard to its conflict of law provisions.`,
    },
    {
      title: t.terms?.changes || 'Changes to Terms',
      content: t.terms?.changesContent || `We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of our services after such modifications constitutes acceptance of the updated terms.`,
    },
    {
      title: t.terms?.contact || 'Contact Information',
      content: t.terms?.contactContent || `For any questions regarding these Terms of Service, please contact us at ${COMPANY.email}.`,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <GradientText>{t.footer.terms}</GradientText>
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              {t.terms?.lastUpdated || 'Last updated'}: December 2024
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              {t.terms?.intro || `Welcome to ${COMPANY.name}. These Terms of Service govern your use of our website and services. Please read these terms carefully before using our services.`}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="border-b border-dark-border pb-10 last:border-0"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
