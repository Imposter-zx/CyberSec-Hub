'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ToolCard } from '@/components/ui/ToolCard';
import { tools } from '@/data/tools';
import { filterTools } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, AlertTriangle, Terminal } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function ToolsDirectoryPage() {
  const { t, isRTL } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const categories = useMemo(() => {
    const set = new Set(tools.map((t) => t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredTools = useMemo(() => {
    return filterTools(tools, {
      query: searchQuery,
      category: selectedCategory,
      difficulty: selectedDifficulty,
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: t('nav_tools') }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <span>{t('tools_badge')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {t('tools_title')}
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed">
          {t('tools_subtitle')}
        </p>
      </div>

      {/* Safety & Ethics Alert Box */}
      <div className="p-4.5 rounded-2xl bg-[#FFF3E0] dark:bg-[#0E1510] border border-[#FBD7B5] dark:border-[#D9A441]/40 mb-8 text-xs text-[#18221C] dark:text-[#E8F5E9] flex items-start gap-3.5 leading-relaxed shadow-xs font-mono">
        <AlertTriangle className="w-5 h-5 text-[#D97745] dark:text-[#D9A441] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#D97745] dark:text-[#D9A441] block mb-1 uppercase tracking-wider">
            {t('ethics_title')}
          </span>
          <span className="text-[#5F6B62] dark:text-[#91A596] font-sans">
            {t('ethics_body')}
          </span>
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

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="flex-1 min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] text-xs"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">
                  {c === 'all' ? t('all_categories') : c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-48">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] text-xs"
            >
              <option value="all" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('all_difficulties')}</option>
              <option value="beginner" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_beginner')}</option>
              <option value="intermediate" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_intermediate')}</option>
              <option value="advanced" className="bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9]">{t('difficulty_advanced')}</option>
            </select>
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:border-[#267747] dark:hover:border-[#00FF66] bg-[#EEF3EE] dark:bg-[#050705] transition-colors"
              title={t('reset_filters')}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
