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
  BookOpen,
  Award,
  Video,
  FlaskConical,
  Wrench,
  Compass,
  FileText,
  Info,
} from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useI18n } from '@/lib/i18n';
import { Language } from '@/types';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Close mobile menu on route change
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
        { label: 'Knowledge Base Overview', href: '/knowledge' },
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-sm group-hover:bg-blue-700 transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              CyberSec Hub
            </span>
            <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:inline">
              Learn. Practice. Secure.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                      'flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-900'
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  {knowledgeDropdownOpen && (
                    <div className="absolute top-full left-0 w-60 py-2 mt-0.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in-50 duration-150">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-xs transition-colors',
                            pathname === child.href
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400'
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
                  'px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-900'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools: Search, Language, Theme, Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <Link
            href="/search"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            title="Search Platform"
            aria-label="Search Platform"
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-semibold uppercase tracking-wider transition-colors"
              title="Change Language"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 py-1.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl z-50">
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
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-slate-400 uppercase">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle (Dark/Light) */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            title={`Switch to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
            <Link
              href="/search"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span>{t('search_placeholder')}</span>
            </Link>
          </div>

          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="py-1">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
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
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
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
