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
    <header className="sticky top-0 z-50 w-full border-b border-[#D8D0C2] dark:border-[#454139] bg-[#F5F1E8]/95 dark:bg-[#1F1E1B]/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="p-1.5 rounded-lg bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm group-hover:bg-[#556049] dark:group-hover:bg-[#b5bfa0] transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors">
              CyberSec Hub
            </span>
            <span className="text-[10px] text-[#68645D] dark:text-[#B8B1A5] font-medium -mt-1 hidden sm:inline tracking-wide">
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
                      'flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-semibold'
                        : 'text-[#242424] dark:text-[#F1EDE4] hover:text-[#66705A] dark:hover:text-[#A5AD8C] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722]'
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  {knowledgeDropdownOpen && (
                    <div className="absolute top-full left-0 w-60 py-2 mt-0.5 bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] shadow-xl overflow-hidden animate-in fade-in-50 duration-150">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-xs transition-colors',
                            pathname === child.href
                              ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-semibold'
                              : 'text-[#242424] dark:text-[#F1EDE4] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722] hover:text-[#66705A] dark:hover:text-[#A5AD8C]'
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
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-semibold'
                    : 'text-[#242424] dark:text-[#F1EDE4] hover:text-[#66705A] dark:hover:text-[#A5AD8C] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Tools: Search, Language, Theme, Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search Button */}
          <Link
            href="/search"
            className="p-2 rounded-lg text-[#68645D] dark:text-[#B8B1A5] hover:text-[#242424] dark:hover:text-[#F1EDE4] hover:bg-[#EAE3D5]/70 dark:hover:bg-[#292722] transition-colors"
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
              className="flex items-center gap-1 p-2 rounded-lg text-[#68645D] dark:text-[#B8B1A5] hover:text-[#242424] dark:hover:text-[#F1EDE4] hover:bg-[#EAE3D5]/70 dark:hover:bg-[#292722] text-xs font-semibold uppercase tracking-wider transition-colors"
              title="Change Language"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-32 py-1.5 bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] shadow-xl z-50">
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
                        ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-bold'
                        : 'text-[#242424] dark:text-[#F1EDE4] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722]'
                    )}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-[#68645D] dark:text-[#B8B1A5] uppercase">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle (Dark/Light) */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-[#68645D] dark:text-[#B8B1A5] hover:text-[#242424] dark:hover:text-[#F1EDE4] hover:bg-[#EAE3D5]/70 dark:hover:bg-[#292722] transition-colors"
            title={`Switch to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#B89B62]" />
            ) : (
              <Moon className="w-4 h-4 text-[#68645D]" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#68645D] dark:text-[#B8B1A5] hover:text-[#242424] dark:hover:text-[#F1EDE4] hover:bg-[#EAE3D5]/70 dark:hover:bg-[#292722] transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8D0C2] dark:border-[#454139] bg-[#F5F1E8] dark:bg-[#1F1E1B] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="mb-3 pb-2 border-b border-[#D8D0C2] dark:border-[#454139]">
            <Link
              href="/search"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] text-xs font-medium text-[#68645D] dark:text-[#B8B1A5]"
            >
              <Search className="w-4 h-4 text-[#68645D]" />
              <span>{t('search_placeholder')}</span>
            </Link>
          </div>

          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="py-1">
                  <div className="px-3 py-1.5 text-xs font-bold text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider">
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
                            ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-bold'
                            : 'text-[#242424] dark:text-[#F1EDE4] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722]'
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
                    ? 'bg-[#66705A]/10 text-[#66705A] dark:bg-[#A5AD8C]/15 dark:text-[#A5AD8C] font-bold'
                    : 'text-[#242424] dark:text-[#F1EDE4] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722]'
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
