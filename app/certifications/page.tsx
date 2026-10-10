'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty } from '@/types';
import { filterCertifications } from '@/lib/filters';
import { Search, RefreshCw, ArrowRight, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

function CertificationsContent() {
  const { t, isRTL } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Difficulty | 'all'>('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [practicalOnly, setPracticalOnly] = useState(false);
  const [comparedCerts, setComparedCerts] = useState<string[]>([]);

  const domains = useMemo(() => {
    const set = new Set(certifications.map((c) => c.domain));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredCerts = useMemo(() => {
    return filterCertifications(certifications, {
      query: searchQuery,
      level: selectedLevel,
      domain: selectedDomain,
      practicalOnly,
    });
  }, [searchQuery, selectedLevel, selectedDomain, practicalOnly]);

  const toggleCompare = (certId: string) => {
    if (comparedCerts.includes(certId)) {
      setComparedCerts(comparedCerts.filter((id) => id !== certId));
    } else {
      if (comparedCerts.length < 4) {
        setComparedCerts([...comparedCerts, certId]);
      } else {
        alert('You can compare a maximum of 4 certifications simultaneously.');
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedDomain('all');
    setPracticalOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: t('nav_certifications') }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
            <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
            <span>{t('certs_badge')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
            {t('certs_title')}
          </h1>
          <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-2xl leading-relaxed">
            {t('certs_subtitle')}
          </p>
        </div>

        {/* Quick link to OffSec hub or comparison */}
        <div className="flex items-center gap-2.5 shrink-0 font-mono">
          <Link
            href="/certifications/offsec"
            className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#0E1510] hover:bg-[#EEF3EE] dark:hover:bg-[#121B14] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[#18221C] dark:text-[#E8F5E9] text-xs font-bold transition-all shadow-xs"
          >
            {t('offsec_hub_btn')}
          </Link>
          <Link
            href={`/certifications/compare${comparedCerts.length > 0 ? `?ids=${comparedCerts.join(',')}` : ''}`}
            className="px-4 py-2.5 rounded-xl bg-[#267747] hover:bg-[#1E6038] dark:bg-[#00FF66] dark:hover:bg-[#5CFF9B] text-white dark:text-[#050705] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs dark:shadow-[0_0_15px_rgba(0,255,102,0.2)]"
          >
            <span>{t('compare_matrix_btn', { count: comparedCerts.length })}</span>
            <ArrowRight className={cn('w-3.5 h-3.5 transition-transform', isRTL ? 'rotate-180' : '')} />
          </Link>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#0E1510] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className={cn('absolute top-3.5 w-4 h-4 text-[#267747] dark:text-[#00FF66]', isRTL ? 'right-4' : 'left-4')} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('search_placeholder')}
            className={cn(
              'w-full py-2.5 bg-[#F7F9F6] dark:bg-[#050705] text-[#18221C] dark:text-[#E8F5E9] placeholder-[#5F6B62]/50 dark:placeholder-[#91A596]/50 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs font-mono focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] focus:ring-1 focus:ring-[#267747]/30 dark:focus:ring-[#00FF66]/30 transition-all',
              isRTL ? 'pr-11 pl-4 text-right' : 'pl-11 pr-4 text-left'
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          {/* Domain */}
          <div>
            <label className="block text-[11px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              {t('domain_specialization')}
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] text-xs"
            >
              {domains.map((dom) => (
                <option key={dom} value={dom} className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">
                  {dom === 'all' ? t('all_categories') : dom}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-[11px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              {t('experience_level')}
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] text-xs"
            >
              <option value="all" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('all_levels')}</option>
              <option value="beginner" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_beginner')}</option>
              <option value="intermediate" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_intermediate')}</option>
              <option value="advanced" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_advanced')}</option>
            </select>
          </div>

          {/* Practical Exam Filter & Reset */}
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => setPracticalOnly(!practicalOnly)}
              className={cn(
                'flex-1 p-2 rounded-xl border text-xs font-mono font-bold transition-all',
                practicalOnly
                  ? 'bg-[#267747] dark:bg-[#00FF66] text-white dark:text-[#050705] border-[#267747] dark:border-[#00FF66]'
                  : 'bg-[#EEF3EE] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:text-[#18221C] dark:hover:text-[#E8F5E9]'
              )}
            >
              {practicalOnly ? `[${t('practical_only')}]` : t('practical_only')}
            </button>
            {(searchQuery || selectedLevel !== 'all' || selectedDomain !== 'all' || practicalOnly) && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:border-[#267747] dark:hover:border-[#00FF66] bg-[#EEF3EE] dark:bg-[#050705] transition-colors"
                title={t('reset_filters')}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            onCompareToggle={toggleCompare}
            isCompared={comparedCerts.includes(cert.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#5F6B62] dark:text-[#91A596]">Loading...</div>}>
      <CertificationsContent />
    </Suspense>
  );
}
