import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { I18nProvider } from '@/lib/i18n';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'CyberSec Hub — Cybersecurity Learning & Terminal Platform',
  description: 'A structured visual platform for learning cybersecurity, exploring security concepts, practicing in labs, discovering tools, and preparing for certifications.',
  keywords: [
    'Cybersecurity',
    'Ethical Hacking',
    'Penetration Testing',
    'SOC Analyst',
    'Blue Team',
    'Red Team',
    'DFIR',
    'Malware Analysis',
    'Certifications',
    'OSCP',
    'Security+',
    'Roadmaps',
    'MITRE ATT&CK',
    'OWASP',
  ],
  authors: [{ name: 'CyberSec Hub' }],
  openGraph: {
    title: 'CyberSec Hub — Cybersecurity Learning Platform',
    description: 'Learn cybersecurity from fundamentals to advanced security research. Structured roadmaps, free resources, threats, and certifications.',
    url: 'https://cybersechub.org',
    siteName: 'CyberSec Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberSec Hub — Cybersecurity Learning Platform',
    description: 'Centralized cybersecurity education, roadmaps, certifications, tools, and technical encyclopedias.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('cybersec_theme');
                  var isDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(isDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  
                  var storedLang = localStorage.getItem('cybersec_lang') || 'en';
                  document.documentElement.lang = storedLang;
                  document.documentElement.dir = storedLang === 'ar' ? 'rtl' : 'ltr';
                  document.documentElement.setAttribute('data-lang', storedLang);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F9F6] dark:bg-[#050705] text-[#18221C] dark:text-[#E8F5E9] transition-colors duration-150 antialiased selection:bg-[#267747] selection:text-white dark:selection:bg-[#00FF66] dark:selection:text-[#050705]">
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="flex-1 w-full relative z-10">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
