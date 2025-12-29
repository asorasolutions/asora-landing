'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

/**
 * Header component with:
 * - Hide on scroll down, show on scroll up
 * - Language toggle (EN/ES)
 * - Responsive mobile menu
 */
export function Header() {
  const { locale, setLocale, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Navigation links with translations
  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  // Handle scroll - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show/hide based on scroll direction
          if (currentScrollY < 100) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setIsVisible(false);
            setIsLangMenuOpen(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }

          setIsScrolled(currentScrollY > 50);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggle language
  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsLangMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-gradient">Asora Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 transition-all text-sm"
              >
                <Globe size={16} />
                <span className="uppercase font-medium">{locale}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 py-2 w-32 bg-dark-card border border-dark-border rounded-lg shadow-xl"
                  >
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm transition-colors',
                        locale === 'en'
                          ? 'text-primary bg-primary/10'
                          : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                      )}
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm transition-colors',
                        locale === 'es'
                          ? 'text-primary bg-primary/10'
                          : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                      )}
                    >
                      Español
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="outline" size="sm" href="#contact">
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => handleLanguageChange(locale === 'en' ? 'es' : 'en')}
              className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-lighter border-t border-dark-border"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-[var(--color-text-secondary)] hover:text-white transition-colors py-2 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-dark-border">
                  <Button variant="primary" size="md" href="#contact" className="w-full">
                    {t.nav.getStarted}
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
