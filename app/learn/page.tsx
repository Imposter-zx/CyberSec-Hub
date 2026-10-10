'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty, Pricing } from '@/types';
import { filterResources, FilterState } from '@/lib/filters';
import { Search, RefreshCw, ShieldCheck, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

function LearnContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialPricing = (searchParams.get('pricing') as Pricing) || 'all';
  const { t } = useI18n();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedPricing, setSelectedPricing] = useState<Pricing | 'all'>(initialPricing);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(resources.map((r) => r.category));
    return ['all', ...Array.from(set)];
  }, []);

  const resourceTypes = useMemo(() => {
    const set = new Set(resources.map((r) => r.resourceType));
    return ['all', ...Array.from(set)];
  }, []);

  const filters: FilterState = {
    searchQuery,
    category: selectedCategory,
    difficulty: selectedDifficulty,
    pricing: selectedPricing,
    verifiedOnly,
    type: selectedType,
  };

  const filteredResources = useMemo(() => {
    return filterResources(resources, filters);
  }, [filters]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedPricing('all');
    setSelectedType('all');
    setVerifiedOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedPricing !== 'all' ||
    selectedType !== 'all' ||
    verifiedOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs items={[{ label: t('nav.learn') || 'Learn & Resources' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1.5">
          <Terminal className="w-4 h-4" />
          <span>// LEARNING_RESOURCES_INDEX</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Cybersecurity Learning Resources Directory
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Curated index of verified, high-quality cybersecurity training platforms, interactive academies, standard frameworks, and practice labs. Filter by domain, skill difficulty, pricing, and resource format.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#0E1510] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
        {/* Top Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('common.searchPlaceholder') || 'Filter resources by name, skill, or topic...'}
            className="w-full pl-11 pr-4 py-2.5 bg-[#F7F9F6] dark:bg-[#050705] text-[#18221C] dark:text-[#E8F5E9] placeholder-[#5F6B62]/60 dark:placeholder-[#91A596]/60 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] transition-all font-mono"
          />
        </div>

        {/* Multi-Facet Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {/* Category */}
          <div>
            <label className="block text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              {t('common.category') || 'Category'}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#FFFFFF] dark:bg-[#050705]">
                  {cat === 'all' ? t('common.allCategories') || 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              {t('common.difficulty') || 'Difficulty'}
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              <option value="all" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.allDifficulties') || 'All Difficulties'}</option>
              <option value="beginner" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.beginner') || 'Beginner'}</option>
              <option value="intermediate" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.intermediate') || 'Intermediate'}</option>
              <option value="advanced" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.advanced') || 'Advanced'}</option>
            </select>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              {t('common.pricing') || 'Pricing'}
            </label>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value as Pricing | 'all')}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              <option value="all" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.allPricing') || 'All Pricing'}</option>
              <option value="free" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.free') || '100% Free'}</option>
              <option value="freemium" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.freemium') || 'Freemium'}</option>
              <option value="paid" className="bg-[#FFFFFF] dark:bg-[#050705]">{t('common.paid') || 'Paid'}</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] uppercase tracking-wider mb-1.5">
              Format
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-[#F7F9F6] dark:bg-[#050705] rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#18221C] dark:text-[#E8F5E9] focus:outline-none uppercase font-medium text-xs font-mono"
            >
              {resourceTypes.map((resType) => (
                <option key={resType} value={resType} className="bg-[#FFFFFF] dark:bg-[#050705]">
                  {resType === 'all' ? 'All Formats' : resType}
                </option>
              ))}
            </select>
          </div>

          {/* Verified Toggle & Reset */}
          <div className="flex items-end gap-2 col-span-2 sm:col-span-1">
            <button
              type="button"
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={cn(
                'flex-1 p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors font-mono',
                verifiedOnly
                  ? 'bg-[#267747] text-white dark:bg-[#00FF66] dark:text-[#050705] border-[#267747] dark:border-[#00FF66]'
                  : 'bg-[#F7F9F6] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] border-[#DDE5DE] dark:border-[#1B2A1F] hover:text-[#18221C] dark:hover:text-[#E8F5E9]'
              )}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL</span>
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-[#C62828] dark:text-[#FF3B30] hover:border-[#C62828] dark:hover:border-[#FF3B30] transition-colors"
                title="Reset filters"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count & Metrics Bar */}
      <div className="flex items-center justify-between mb-6 text-xs text-[#5F6B62] dark:text-[#91A596]">
        <div>
          Showing <span className="font-bold text-[#267747] dark:text-[#00FF66]">{filteredResources.length}</span> verified resources
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-[#C62828] dark:text-[#FF3B30] hover:underline flex items-center gap-1"
          >
            <span>[{t('common.resetFilters') || 'RESET_ALL_FILTERS'}]</span>
          </button>
        )}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F]">
          <p className="text-sm text-[#5F6B62] dark:text-[#91A596] font-sans">No cybersecurity resources match your filter criteria.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-3 text-xs font-bold text-[#267747] dark:text-[#00FF66] hover:underline font-mono"
          >
            &gt; {t('common.resetFilters') || 'Clear all filters'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-[#5F6B62] dark:text-[#91A596] font-mono">&gt; Loading resources...</div>}>
      <LearnContent />
    </Suspense>
  );
}
