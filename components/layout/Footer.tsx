'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-[#EEF3EE] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] border-t border-[#DDE5DE] dark:border-[#1B2A1F] text-xs mt-auto font-mono relative z-10 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] group-hover:border-[#267747] dark:group-hover:border-[#00FF66] text-[#267747] dark:text-[#00FF66] shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-[#18221C] dark:text-[#E8F5E9] tracking-wider group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
                  {t('site_title')}
                </span>
                <span className="text-[10px] text-[#267747] dark:text-[#00FF66]">
                  &gt; {t('site_tagline')}
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#5F6B62] dark:text-[#91A596] leading-relaxed max-w-sm font-sans">
              {t('footer_desc')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[11px] text-[#267747] dark:text-[#00FF66]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse" />
              <span>{t('footer_status_nominal')}</span>
            </div>
          </div>

          {/* Learning Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18221C] dark:text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#267747] dark:text-[#00FF66]">&gt;</span>
              <span>{t('footer_resources')}</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/learn" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_learn')}
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_labs')}
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_tools')}
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_roadmaps')}
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_youtube')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18221C] dark:text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#267747] dark:text-[#00FF66]">&gt;</span>
              <span>{t('footer_knowledge')}</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/knowledge/hackers" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_hackers')}
                </Link>
              </li>
              <li>
                <Link href="/knowledge/threats" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_threats')}
                </Link>
              </li>
              <li>
                <Link href="/knowledge/authentication" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_auth')}
                </Link>
              </li>
              <li>
                <Link href="/knowledge/encryption" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_encryption')}
                </Link>
              </li>
              <li>
                <Link href="/knowledge/firewalls" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_firewalls')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Credentials & System info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18221C] dark:text-[#E8F5E9] mb-3 flex items-center gap-1.5">
              <span className="text-[#267747] dark:text-[#00FF66]">&gt;</span>
              <span>{t('footer_quick_links')}</span>
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/certifications" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_certifications')}
                </Link>
              </li>
              <li>
                <Link href="/certifications/compare" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_compare_cert')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors">
                  • {t('nav_about')}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Imposter-zx/CyberSec-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors flex items-center gap-1"
                >
                  <span>• GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-[#267747] dark:text-[#00FF66]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Console Line */}
        <div className="pt-6 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#5F6B62] dark:text-[#91A596]">
          <div className="flex items-center gap-2">
            <span className="text-[#267747] dark:text-[#00FF66] font-bold">CYBERSEC_HUB</span>
            <span>// OPEN SOURCE SECURITY KNOWLEDGE MATRIX</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-[#267747] dark:text-[#00FF66] bg-[#FFFFFF] dark:bg-[#0E1510] px-2.5 py-0.5 rounded border border-[#DDE5DE] dark:border-[#1B2A1F]">
              ZERO SPONSORED BIAS
            </span>
            <span>&copy; {new Date().getFullYear()} CyberSec Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
