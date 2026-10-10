'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Language } from '@/types';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t, isRTL } = useI18n();
  const { theme, setTheme, resolvedTheme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setKnowledgeDropdownOpen(false);
    setLangDropdownOpen(false);
    setThemeDropdownOpen(false);
  }, [pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
      if (knowledgeRef.current && !knowledgeRef.current.contains(event.target as Node)) {
        setKnowledgeDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_learn', href: '/learn' },
    {
      key: 'nav_knowledge',
      href: '/knowledge',
      isDropdown: true,
      children: [
        { key: 'nav_overview', href: '/knowledge' },
        { key: 'nav_hackers', href: '/knowledge/hackers' },
        { key: 'nav_threats', href: '/knowledge/threats' },
        { key: 'nav_auth', href: '/knowledge/authentication' },
        { key: 'nav_encryption', href: '/knowledge/encryption' },
        { key: 'nav_firewalls', href: '/knowledge/firewalls' },
      ],
    },
    { key: 'nav_certifications', href: '/certifications' },
    { key: 'nav_youtube', href: '/youtube' },
    { key: 'nav_labs', href: '/labs' },
    { key: 'nav_tools', href: '/tools' },
    { key: 'nav_roadmaps', href: '/roadmaps' },
    { key: 'nav_about', href: '/about' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'ar', label: 'العربية', flag: 'AR' },
    { code: 'es', label: 'Español', flag: 'ES' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF]/95 dark:bg-[#050705]/95 backdrop-blur-md transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Brand Console + SYSTEM ONLINE indicator */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="p-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] group-hover:border-[#267747] dark:group-hover:border-[#00FF66] text-[#267747] dark:text-[#00FF66] shadow-xs transition-all duration-200">
              <Shield className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-wider text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors font-mono">
                  {t('site_title')}
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse" />
                <span className="text-[10px] text-[#267747] dark:text-[#00FF66] font-mono font-bold tracking-widest uppercase">
                  {t('system_online')}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div
                  key={link.key}
                  ref={knowledgeRef}
                  className="relative"
                  onMouseEnter={() => setKnowledgeDropdownOpen(true)}
                  onMouseLeave={() => setKnowledgeDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 border',
                      isActive
                        ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                        : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
                    )}
                  >
                    <span>{t(link.key)}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </Link>

                  {knowledgeDropdownOpen && (
                    <div
                      className={cn(
                        'absolute mt-1 w-64 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1.5 z-50 animate-in fade-in-50 duration-150',
                        isRTL ? 'right-0 text-right' : 'left-0 text-left'
                      )}
                    >
                      <div className="px-3 py-1 text-[10px] font-mono text-[#267747] dark:text-[#00FF66] border-b border-[#DDE5DE] dark:border-[#1B2A1F] uppercase tracking-wider">
                        {t('console_subsystems')}
                      </div>
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2 text-xs font-mono text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510] transition-colors"
                        >
                          &gt; {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  'px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border',
                  isActive
                    ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                    : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Quick Search, Language Selector, Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Quick Search Shortcut */}
          <Link
            href="/search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] text-xs font-mono transition-all group"
            title={t('search')}
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">&gt; {t('search')}</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-[#FFFFFF] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] rounded text-[#5F6B62] dark:text-[#91A596]">
              /
            </kbd>
          </Link>

          {/* Language Selector Dropdown */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] text-xs transition-colors flex items-center gap-1.5 font-mono"
              aria-label={t('language_selector_label')}
              title={t('language_selector_label')}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase">
                {language.toUpperCase()}
              </span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {langDropdownOpen && (
              <div
                className={cn(
                  'absolute mt-2 w-36 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1 z-50 animate-in fade-in-50 duration-150',
                  isRTL ? 'left-0 text-right' : 'right-0 text-left'
                )}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={cn(
                      'w-full px-3 py-2 text-xs font-mono transition-colors flex items-center justify-between',
                      language === l.code
                        ? 'text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#0E1510] font-bold'
                        : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510]'
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] opacity-60 font-bold uppercase">{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button & Dropdown */}
          <div ref={themeRef} className="relative">
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] text-xs transition-colors flex items-center gap-1.5 font-mono"
              aria-label={t('theme_toggle_label')}
              title={t('theme_toggle_label')}
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-[#00FF66]" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[#D97745]" />
              )}
              <span className="hidden md:inline text-[10px] font-bold uppercase">
                {resolvedTheme === 'dark' ? 'DARK' : 'LIGHT'}
              </span>
            </button>

            {themeDropdownOpen && (
              <div
                className={cn(
                  'absolute mt-2 w-36 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1 z-50 animate-in fade-in-50 duration-150',
                  isRTL ? 'left-0 text-right' : 'right-0 text-left'
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    setTheme('light');
                    setThemeDropdownOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-xs font-mono transition-colors flex items-center gap-2',
                    theme === 'light'
                      ? 'text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#0E1510] font-bold'
                      : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510]'
                  )}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>{t('theme_light')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTheme('dark');
                    setThemeDropdownOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-xs font-mono transition-colors flex items-center gap-2',
                    theme === 'dark'
                      ? 'text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#0E1510] font-bold'
                      : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510]'
                  )}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>{t('theme_dark')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTheme('system');
                    setThemeDropdownOpen(false);
                  }}
                  className={cn(
                    'w-full px-3 py-2 text-xs font-mono transition-colors flex items-center gap-2',
                    theme === 'system'
                      ? 'text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#0E1510] font-bold'
                      : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510]'
                  )}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>{t('theme_system')}</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] dark:bg-[#0A0F0B] border-b border-[#DDE5DE] dark:border-[#1B2A1F] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="text-[10px] font-mono text-[#267747] dark:text-[#00FF66] px-3 py-1 border-b border-[#DDE5DE] dark:border-[#1B2A1F] mb-2 uppercase">
            {t('console_navigation')}
          </div>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div key={link.key} className="space-y-1">
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-3 py-2 rounded-xl text-xs font-mono font-bold transition-colors',
                      isActive
                        ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66]'
                        : 'text-[#5F6B62] dark:text-[#91A596]'
                    )}
                  >
                    &gt; {t(link.key)}
                  </Link>
                  <div
                    className={cn(
                      'space-y-1',
                      isRTL ? 'pr-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] mr-3' : 'pl-4 border-l border-[#DDE5DE] dark:border-[#1B2A1F] ml-3'
                    )}
                  >
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 rounded-lg text-[11px] font-mono text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66]"
                      >
                        • {t(child.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-xl text-xs font-mono font-bold transition-colors',
                  isActive
                    ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]'
                    : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9]'
                )}
              >
                &gt; {t(link.key)}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
