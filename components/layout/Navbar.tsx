'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  Terminal,
  Activity,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Language } from '@/types';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
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
    { label: 'HOME', href: '/' },
    { label: 'LEARN', href: '/learn' },
    {
      label: 'KNOWLEDGE',
      href: '/knowledge',
      isDropdown: true,
      children: [
        { label: 'Overview', href: '/knowledge' },
        { label: 'Hacker Types (01-10+)', href: '/knowledge/hackers' },
        { label: 'Threat Taxonomy & MITRE', href: '/knowledge/threats' },
        { label: 'Authentication & AAA', href: '/knowledge/authentication' },
        { label: 'Encryption & Ciphers', href: '/knowledge/encryption' },
        { label: 'Firewalls & Network Defenses', href: '/knowledge/firewalls' },
      ],
    },
    { label: 'CERTIFICATIONS', href: '/certifications' },
    { label: 'YOUTUBE', href: '/youtube' },
    { label: 'LABS', href: '/labs' },
    { label: 'TOOLS', href: '/tools' },
    { label: 'ROADMAPS', href: '/roadmaps' },
    { label: 'ABOUT', href: '/about' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1B2A1F] bg-[#050705]/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Brand Console + SYSTEM ONLINE indicator */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="p-2 rounded-xl bg-[#0E1510] border border-[#1B2A1F] group-hover:border-[#00FF66] text-[#00FF66] shadow-sm transition-all duration-200">
              <Shield className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-wider text-[#E8F5E9] group-hover:text-[#00FF66] transition-colors font-mono">
                  CyberSec Hub
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                <span className="text-[10px] text-[#00FF66] font-mono font-bold tracking-widest uppercase">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links (Security Console Style) */}
        <nav className="hidden xl:flex items-center gap-1">
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
                  <Link
                    href={link.href}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 border',
                      isActive
                        ? 'bg-[#0E1510] text-[#00FF66] border-[#1B2A1F] shadow-xs'
                        : 'text-[#91A596] hover:text-[#E8F5E9] border-transparent hover:border-[#1B2A1F] hover:bg-[#0A0F0B]'
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </Link>

                  {knowledgeDropdownOpen && (
                    <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#0A0F0B] border border-[#1B2A1F] shadow-2xl py-1.5 z-50 animate-in fade-in-50 duration-150">
                      <div className="px-3 py-1 text-[10px] font-mono text-[#00FF66] border-b border-[#1B2A1F] uppercase tracking-wider">
                        // KNOWLEDGE_SUBSYSTEMS
                      </div>
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2 text-xs font-mono text-[#91A596] hover:text-[#00FF66] hover:bg-[#0E1510] transition-colors"
                        >
                          &gt; {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border',
                  isActive
                    ? 'bg-[#0E1510] text-[#00FF66] border-[#1B2A1F] shadow-xs'
                    : 'text-[#91A596] hover:text-[#E8F5E9] border-transparent hover:border-[#1B2A1F] hover:bg-[#0A0F0B]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Quick Search & Language */}
        <div className="flex items-center gap-2">
          {/* Quick Search Shortcut */}
          <Link
            href="/search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0E1510] border border-[#1B2A1F] hover:border-[#00FF66] text-[#91A596] hover:text-[#00FF66] text-xs font-mono transition-all group"
            title="Search database (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">&gt; query</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-[#050705] border border-[#1B2A1F] rounded text-[#91A596]">
              /
            </kbd>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 rounded-xl bg-[#0E1510] border border-[#1B2A1F] hover:border-[#00FF66] text-[#91A596] hover:text-[#E8F5E9] text-xs transition-colors flex items-center gap-1 font-mono"
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline uppercase text-[10px] font-bold">
                {language}
              </span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl bg-[#0A0F0B] border border-[#1B2A1F] shadow-2xl py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-3 py-1.5 text-xs font-mono transition-colors',
                      language === l.code
                        ? 'text-[#00FF66] bg-[#0E1510] font-bold'
                        : 'text-[#91A596] hover:text-[#E8F5E9] hover:bg-[#0E1510]'
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#0E1510] border border-[#1B2A1F] text-[#91A596] hover:text-[#00FF66] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0F0B] border-b border-[#1B2A1F] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="text-[10px] font-mono text-[#00FF66] px-3 py-1 border-b border-[#1B2A1F] mb-2 uppercase">
            // CONSOLE_NAVIGATION
          </div>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div key={link.label} className="space-y-1">
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-3 py-2 rounded-xl text-xs font-mono font-bold transition-colors',
                      isActive ? 'bg-[#0E1510] text-[#00FF66]' : 'text-[#91A596]'
                    )}
                  >
                    &gt; {link.label}
                  </Link>
                  <div className="pl-4 space-y-1 border-l border-[#1B2A1F] ml-3">
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 rounded-lg text-[11px] font-mono text-[#91A596] hover:text-[#00FF66]"
                      >
                        • {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-xl text-xs font-mono font-bold transition-colors',
                  isActive
                    ? 'bg-[#0E1510] text-[#00FF66] border border-[#1B2A1F]'
                    : 'text-[#91A596] hover:text-[#E8F5E9]'
                )}
              >
                &gt; {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
