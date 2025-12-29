import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { Providers } from '@/components/Providers';
import { COMPANY } from '@/lib/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * SEO Metadata for Asora Solutions
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://asorasolutions.com'),
  title: {
    default: `${COMPANY.name} | AI-Powered Business Solutions`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    'AI solutions',
    'business automation',
    'digital transformation',
    'software development',
    'AI virtual assistants',
    'workflow automation',
    'cloud solutions',
    'custom software',
    'lead generation',
    'marketing automation',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asorasolutions.com',
    siteName: COMPANY.name,
    title: `${COMPANY.name} | AI-Powered Business Solutions`,
    description: COMPANY.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | AI-Powered Business Solutions`,
    description: COMPANY.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

/**
 * Root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash - apply theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Prevent locale flash - apply locale before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var locale = localStorage.getItem('locale');
                  if (locale === 'en' || locale === 'es') {
                    document.documentElement.lang = locale;
                  } else {
                    var browserLang = navigator.language.toLowerCase();
                    document.documentElement.lang = browserLang.startsWith('es') ? 'es' : 'en';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Scroll to top on page load/refresh - clear hash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname);
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY.name,
              description: COMPANY.description,
              url: 'https://asorasolutions.com',
              logo: 'https://asorasolutions.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: COMPANY.phone,
                contactType: 'customer service',
                email: COMPANY.email,
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
