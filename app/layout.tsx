import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-[#050705] text-[#E8F5E9] transition-colors antialiased selection:bg-[#00FF66] selection:text-[#050705]">
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
