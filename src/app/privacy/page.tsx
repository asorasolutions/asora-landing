'use client';

import { motion } from 'framer-motion';
import { Container, GradientText } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { COMPANY } from '@/lib/constants';

export default function PrivacyPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t.privacy?.informationCollect || 'Information We Collect',
      content: t.privacy?.informationCollectContent || `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.`,
    },
    {
      title: t.privacy?.howWeUse || 'How We Use Your Information',
      content: t.privacy?.howWeUseContent || `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.`,
    },
    {
      title: t.privacy?.informationSharing || 'Information Sharing',
      content: t.privacy?.informationSharingContent || `We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.`,
    },
    {
      title: t.privacy?.dataSecurity || 'Data Security',
      content: t.privacy?.dataSecurityContent || `We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols.`,
    },
    {
      title: t.privacy?.cookies || 'Cookies and Tracking',
      content: t.privacy?.cookiesContent || `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
    },
    {
      title: t.privacy?.yourRights || 'Your Rights',
      content: t.privacy?.yourRightsContent || `You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us by following the instructions in those messages.`,
    },
    {
      title: t.privacy?.changes || 'Changes to This Policy',
      content: t.privacy?.changesContent || `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`,
    },
    {
      title: t.privacy?.contact || 'Contact Us',
      content: t.privacy?.contactContent || `If you have any questions about this Privacy Policy, please contact us at ${COMPANY.email}.`,
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
              <GradientText>{t.footer.privacy}</GradientText>
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              {t.privacy?.lastUpdated || 'Last updated'}: December 2024
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
              {t.privacy?.intro || `At ${COMPANY.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`}
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
