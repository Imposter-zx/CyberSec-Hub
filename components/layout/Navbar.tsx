'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Search,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useI18n } from '@/lib/i18n';
import { Language } from '@/types';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setKnowledgeDropdownOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_learn'), href: '/learn' },
    {
      label: t('nav_knowledge'),
      href: '/knowledge',
      isDropdown: true,
      children: [
        { label: 'Knowledge Overview', href: '/knowledge' },
        { label: t('nav_hackers'), href: '/knowledge/hackers' },
        { label: t('nav_threats'), href: '/knowledge/threats' },
        { label: t('nav_auth'), href: '/knowledge/authentication' },
        { label: t('nav_encryption'), href: '/knowledge/encryption' },
        { label: t('nav_firewalls'), href: '/knowledge/firewalls' },
      ],
    },
    { label: t('nav_certifications'), href: '/certifications' },
    { label: t('nav_youtube'), href: '/youtube' },
    { label: t('nav_labs'), href: '/labs' },
    { label: t('nav_tools'), href: '/tools' },
    { label: t('nav_roadmaps'), href: '/roadmaps' },
    { label: t('nav_about'), href: '/about' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE5DE] dark:border-[#3A4840] bg-[#FFFFFF]/90 dark:bg-[#181C1A]/90 backdrop-blur-md transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#3F7D5A] to-[#2E5E43] text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
                CyberSec Hub
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#3F7D5A] dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]">
                PRO
              </span>
            </div>
            <span className="text-[10px] text-[#68736B] dark:text-[#A0AFA5] font-medium -mt-0.5 hidden sm:inline tracking-wide">
              Learn. Practice. Secure.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setKnowledgeDropdownOpen(true)}
                  onMouseLeave={() => setKnowledgeDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150',
                      isActive
                        ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A]'
                        : 'text-[#18221C] dark:text-[#E8F0EA] hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-75" />
                  </button>

                  {knowledgeDropdownOpen && (
                    <div className="absolute top-full left-0 w-60 py-2 mt-0.5 bg-[#FFFFFF] dark:bg-[#262E28] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] shadow-xl overflow-hidden animate-in fade-in-50 duration-150">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-xs font-medium transition-colors',
                            pathname === child.href
                              ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] font-bold'
                              : 'text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722] hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A]'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150',
                  isActive
                    ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A]'
                    : 'text-[#18221C] dark:text-[#E8F0EA] hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search */}
          <Link
            href="/search"
            className="p-2 rounded-lg text-[#68736B] dark:text-[#A0AFA5] hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A] hover:bg-[#EEF3EE] dark:hover:bg-[#202722] transition-colors"
            title="Search Platform"
            aria-label="Search Platform"
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 p-2 rounded-lg text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C] dark:hover:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722] text-xs font-semibold uppercase tracking-wider transition-colors"
              title="Change Language"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <span>{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 py-1.5 bg-[#FFFFFF] dark:bg-[#262E28] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] shadow-xl z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between',
                      language === l.code
                        ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] font-bold'
                        : 'text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-[#68736B] dark:text-[#A0AFA5] uppercase">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C] dark:hover:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722] transition-colors"
            title={`Switch to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#E4BF74]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3F7D5A]" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C] dark:hover:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722] transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DDE5DE] dark:border-[#3A4840] bg-[#FFFFFF] dark:bg-[#181C1A] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="mb-3 pb-2 border-b border-[#DDE5DE] dark:border-[#3A4840]">
            <Link
              href="/search"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-xs font-medium text-[#68736B] dark:text-[#A0AFA5]"
            >
              <Search className="w-4 h-4 text-[#3F7D5A]" />
              <span>{t('search_placeholder')}</span>
            </Link>
          </div>

          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="py-1">
                  <div className="px-3 py-1.5 text-xs font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider">
                    {link.label}
                  </div>
                  <div className="pl-3 space-y-1">
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          pathname === child.href
                            ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] font-bold'
                            : 'text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] font-bold'
                    : 'text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
