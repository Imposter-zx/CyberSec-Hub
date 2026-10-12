'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  MoreHorizontal,
  Video,
  Compass,
  Info,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Language } from '@/types';
import { cn } from '@/lib/utils';
import { GithubIcon } from '@/components/ui/GithubIcon';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t, isRTL } = useI18n();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setKnowledgeDropdownOpen(false);
    setMoreDropdownOpen(false);
    setLangDropdownOpen(false);
    setThemeDropdownOpen(false);
  }, [pathname]);

  // Click outside listener for all dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (langRef.current && !langRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(target)) {
        setThemeDropdownOpen(false);
      }
      if (knowledgeRef.current && !knowledgeRef.current.contains(target)) {
        setKnowledgeDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(target)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut listener (/ or Ctrl+K / Cmd+K to search)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (!isInput) {
        if (
          event.key === '/' ||
          ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')
        ) {
          event.preventDefault();
          router.push('/search');
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  interface NavLinkItem {
    key: string;
    href: string;
    isDropdown?: boolean;
    children?: { key: string; href: string }[];
    icon?: React.ComponentType<{ className?: string }>;
  }

  // Primary desktop navigation links
  const primaryLinks: NavLinkItem[] = [
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
    { key: 'nav_labs', href: '/labs' },
    { key: 'nav_tools', href: '/tools' },
  ];

  // Secondary navigation links (shown inline on 2xl, folded into "More" on xl)
  const secondaryLinks: NavLinkItem[] = [
    { key: 'nav_youtube', href: '/youtube', icon: Video },
    { key: 'nav_roadmaps', href: '/roadmaps', icon: Compass },
    { key: 'nav_about', href: '/about', icon: Info },
  ];

  // All links combined for mobile navigation drawer
  const allNavLinks: NavLinkItem[] = [
    ...primaryLinks,
    ...secondaryLinks,
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'ar', label: 'العربية', flag: 'AR' },
    { code: 'es', label: 'Español', flag: 'ES' },
  ];

  const isKnowledgeActive = pathname.startsWith('/knowledge');
  const isMoreActive = secondaryLinks.some((l) => pathname.startsWith(l.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE5DE] dark:border-[#1B2A1F] bg-[#FFFFFF]/95 dark:bg-[#050705]/95 backdrop-blur-md transition-colors duration-150">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 lg:gap-4">
        {/* ========================================================= */}
        {/* LEFT GROUP — Brand & System Status                        */}
        {/* ========================================================= */}
        <div className="flex items-center gap-3 shrink-0 min-w-max">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] group-hover:border-[#267747] dark:group-hover:border-[#00FF66] text-[#267747] dark:text-[#00FF66] shadow-xs transition-all duration-200 shrink-0">
              <Shield className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-wider text-[#18221C] dark:text-[#E8F5E9] group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors font-mono whitespace-nowrap">
                {t('site_title')}
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse shrink-0" />
                <span className="text-[10px] text-[#267747] dark:text-[#00FF66] font-mono font-bold tracking-widest uppercase whitespace-nowrap">
                  {t('system_online')}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ========================================================= */}
        {/* CENTER GROUP — Desktop Navigation Links                   */}
        {/* ========================================================= */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 flex-1 justify-center min-w-0 px-2">
          {/* Primary links */}
          {primaryLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div
                  key={link.key}
                  ref={knowledgeRef}
                  className="relative shrink-0"
                  onMouseEnter={() => setKnowledgeDropdownOpen(true)}
                  onMouseLeave={() => setKnowledgeDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 border whitespace-nowrap shrink-0',
                      isKnowledgeActive
                        ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                        : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
                    )}
                  >
                    <span>{t(link.key)}</span>
                    <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
                  </Link>

                  {knowledgeDropdownOpen && (
                    <div
                      className={cn(
                        'absolute top-full mt-1 w-64 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1.5 z-50 animate-in fade-in-50 duration-150',
                        isRTL ? 'right-0 text-right' : 'left-0 text-left'
                      )}
                    >
                      <div className="px-3.5 py-1 text-[10px] font-mono text-[#267747] dark:text-[#00FF66] border-b border-[#DDE5DE] dark:border-[#1B2A1F] uppercase tracking-wider">
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
                  'px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border whitespace-nowrap shrink-0',
                  isActive
                    ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                    : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}

          {/* Secondary links: displayed directly on wide screens (2xl) */}
          {secondaryLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  'hidden 2xl:inline-flex px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border whitespace-nowrap shrink-0',
                  isActive
                    ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                    : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}

          {/* "More" dropdown for secondary links on xl screens to prevent crowding */}
          <div
            ref={moreRef}
            className="relative 2xl:hidden shrink-0"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={cn(
                'px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 border whitespace-nowrap shrink-0',
                isMoreActive
                  ? 'bg-[#EEF3EE] dark:bg-[#0E1510] text-[#267747] dark:text-[#00FF66] border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xs'
                  : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] border-transparent hover:border-[#DDE5DE] dark:hover:border-[#1B2A1F] hover:bg-[#EEF3EE] dark:hover:bg-[#0A0F0B]'
              )}
              aria-label={t('nav_more')}
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
              <span>{t('nav_more')}</span>
              <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
            </button>

            {moreDropdownOpen && (
              <div
                className={cn(
                  'absolute top-full mt-1 w-48 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1.5 z-50 animate-in fade-in-50 duration-150',
                  isRTL ? 'right-0 text-right' : 'left-0 text-left'
                )}
              >
                {secondaryLinks.map((child) => {
                  const isChildActive = pathname.startsWith(child.href);
                  const Icon = child.icon;
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'flex items-center gap-2 px-3.5 py-2 text-xs font-mono transition-colors',
                        isChildActive
                          ? 'text-[#267747] dark:text-[#00FF66] bg-[#EEF3EE] dark:bg-[#0E1510] font-bold'
                          : 'text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510]'
                      )}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 shrink-0 opacity-70" />}
                      <span>{t(child.key)}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* ========================================================= */}
        {/* RIGHT GROUP — Search, GitHub, Language, Theme, Mobile Menu */}
        {/* ========================================================= */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-max">
          {/* Quick Search Button */}
          <Link
            href="/search"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] text-xs font-mono transition-all group shrink-0 whitespace-nowrap"
            title={`${t('search')} (/)`}
            aria-label={t('search')}
          >
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">&gt; {t('search')}</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-[#FFFFFF] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] rounded text-[#5F6B62] dark:text-[#91A596]">
              /
            </kbd>
          </Link>

          {/* GitHub Profile Button */}
          <a
            href="https://github.com/Imposter-zx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] text-xs transition-colors flex items-center justify-center font-mono shrink-0"
            aria-label={t('github_profile')}
            title={t('github_profile')}
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Language Selector Dropdown */}
          <div ref={langRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] text-xs transition-colors flex items-center gap-1.5 font-mono whitespace-nowrap shrink-0"
              aria-label={t('language_selector_label')}
              title={t('language_selector_label')}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px] font-bold uppercase">
                {language.toUpperCase()}
              </span>
              <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
            </button>

            {langDropdownOpen && (
              <div
                className={cn(
                  'absolute top-full mt-2 w-36 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1 z-50 animate-in fade-in-50 duration-150',
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
          <div ref={themeRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] text-xs transition-colors flex items-center gap-1.5 font-mono whitespace-nowrap shrink-0"
              aria-label={t('theme_toggle_label')}
              title={t('theme_toggle_label')}
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-[#00FF66] shrink-0" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[#D97745] shrink-0" />
              )}
              <span className="hidden sm:inline text-[10px] font-bold uppercase">
                {resolvedTheme === 'dark' ? 'DARK' : 'LIGHT'}
              </span>
            </button>

            {themeDropdownOpen && (
              <div
                className={cn(
                  'absolute top-full mt-2 w-36 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl py-1 z-50 animate-in fade-in-50 duration-150',
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

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE / TABLET NAVIGATION DRAWER                         */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] dark:bg-[#0A0F0B] border-b border-[#DDE5DE] dark:border-[#1B2A1F] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Mobile search bar */}
          <div className="pb-2 mb-2 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
            <Link
              href="/search"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
                <span>{t('search')}</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#267747] dark:text-[#00FF66]">
                [INDEX]
              </span>
            </Link>
          </div>

          <div className="text-[10px] font-mono text-[#267747] dark:text-[#00FF66] px-3 py-1 border-b border-[#DDE5DE] dark:border-[#1B2A1F] uppercase">
            {t('console_navigation')}
          </div>

          {allNavLinks.map((link) => {
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
                      isRTL
                        ? 'pr-4 border-r border-[#DDE5DE] dark:border-[#1B2A1F] mr-3'
                        : 'pl-4 border-l border-[#DDE5DE] dark:border-[#1B2A1F] ml-3'
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

          {/* GitHub link in mobile drawer */}
          <div className="pt-3 mt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F]">
            <a
              href="https://github.com/Imposter-zx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#EEF3EE] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs font-mono text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9]"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub @Imposter-zx</span>
              </div>
              <span className="text-[10px] text-[#267747] dark:text-[#00FF66] font-bold">
                EXT &rarr;
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
