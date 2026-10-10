'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { resources } from '@/data/resources';
import { LabTerminalCard } from '@/components/ui/LabTerminalCard';
import { Difficulty, Pricing } from '@/types';
import { Search, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

export default function LabsPage() {
  const { t, isRTL } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedPricing] = useState<Pricing | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const labResources = useMemo(() => {
    return resources.filter(
      (r) =>
        r.resourceType === 'lab' ||
        r.resourceType === 'platform' ||
        r.resourceType === 'ctf' ||
        r.resourceType === 'academy'
    );
  }, []);

  const filteredLabs = useMemo(() => {
    return labResources.filter((r) => {
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const match =
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.skills.some((s) => s.toLowerCase().includes(q));
        if (!match) return false;
      }

      if (selectedDifficulty !== 'all' && r.difficulty !== selectedDifficulty) {
        return false;
      }

      if (selectedPricing !== 'all' && r.pricing !== selectedPricing) {
        return false;
      }

      if (selectedTag !== 'all') {
        const matchesSkill = r.skills.some((s) => s.toLowerCase().includes(selectedTag.toLowerCase()));
        const matchesCat = r.category.toLowerCase().includes(selectedTag.toLowerCase());
        if (!matchesSkill && !matchesCat) return false;
      }

      return true;
    });
  }, [labResources, searchQuery, selectedDifficulty, selectedPricing, selectedTag]);

  const quickTags = [
    { id: 'all', labelKey: 'tag_all' },
    { id: 'web', labelKey: 'tag_web' },
    { id: 'linux', labelKey: 'tag_linux' },
    { id: 'blue team', labelKey: 'tag_blue_team' },
    { id: 'active directory', labelKey: 'tag_active_directory' },
    { id: 'ctf', labelKey: 'tag_ctf' },
    { id: 'forensics', labelKey: 'tag_forensics' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: t('nav_labs') }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <span>{t('labs_badge')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {t('labs_title')}
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed">
          {t('labs_subtitle')}
        </p>
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

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
          {quickTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedTag(tag.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all',
                selectedTag === tag.id
                  ? 'bg-[#267747] dark:bg-[#00FF66] text-white dark:text-[#050705] shadow-xs'
                  : 'bg-[#EEF3EE] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:text-[#18221C] dark:hover:text-[#E8F5E9]'
              )}
            >
              {t(tag.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6 font-mono text-xs">
        <span className="text-[#5F6B62] dark:text-[#91A596]">
          {t('results_count', { count: filteredLabs.length })}
        </span>
      </div>

      {/* Grid of Labs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <LabTerminalCard key={lab.id} resource={lab} />
        ))}
      </div>
    </div>
  );
}
