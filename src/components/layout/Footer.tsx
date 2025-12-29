'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Container } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { COMPANY } from '@/lib/constants';

/**
 * Footer component with company info, navigation, and services
 */
export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '/services/consulting', title: t.services.consulting.title },
    { href: '/services/marketing', title: t.services.marketing.title },
    { href: '/services/infrastructure', title: t.services.infrastructure.title },
  ];

  const navLinks = [
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.solutions, href: '/#solutions' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <footer className="bg-dark-lighter border-t border-dark-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-gradient">
              {COMPANY.name}
            </Link>
            <p className="mt-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={14} />
                  {COMPANY.phoneFormatted}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            &copy; {currentYear} {COMPANY.name}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
