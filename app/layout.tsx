import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'CyberSec Hub — Centralized Cybersecurity Learning & Knowledge Platform',
  description: 'Comprehensive cybersecurity knowledge platform organizing free learning resources, technical concepts, threat intelligence, security roadmaps, and certifications.',
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
  authors: [{ name: 'CyberSec Hub Community' }],
  openGraph: {
    title: 'CyberSec Hub — Cybersecurity Learning & Knowledge Platform',
    description: 'Learn cybersecurity from fundamentals to advanced security research. Structured roadmaps, free resources, threats, and certifications.',
    url: 'https://cybersechub.org',
    siteName: 'CyberSec Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberSec Hub — Cybersecurity Learning & Knowledge Platform',
    description: 'Centralized cybersecurity education, roadmaps, certifications, tools, and technical encyclopedias.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-[#F7F9F6] dark:bg-[#181C1A] text-[#18221C] dark:text-[#E8F0EA] transition-colors antialiased selection:bg-[#3F7D5A] selection:text-white">
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
