'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty, Pricing } from '@/types';
import { filterResources, FilterState } from '@/lib/filters';
import { Search, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

function LearnContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialPricing = (searchParams.get('pricing') as Pricing) || 'all';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Learn & Resources' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Layers className="w-4 h-4" />
          <span>Curated Index</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Cybersecurity Learning Resources Directory
        </h1>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Curated index of verified, high-quality cybersecurity training platforms, interactive academies, standard frameworks, and practice labs. Filter by domain, skill difficulty, pricing, and resource format.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
        {/* Top Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter resources by name, skill (e.g. SQL Injection, Wireshark, PortSwigger), or topic..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-xs focus:outline-none focus:ring-2 focus:ring-[#3F7D5A]/40 transition-all"
          />
        </div>

        {/* Multi-Facet Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {/* Category */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Pricing
            </label>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value as Pricing | 'all')}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
            >
              <option value="all">All Pricing</option>
              <option value="free">100% Free</option>
              <option value="freemium">Freemium</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Resource Format
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none uppercase font-medium text-xs"
            >
              {resourceTypes.map((t) => (
                <option key={t} value={t}>
                  {t === 'all' ? 'All Formats' : t}
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
                'flex-1 p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors',
                verifiedOnly
                  ? 'bg-[#3F7D5A] text-white border-[#3F7D5A] dark:bg-[#6AAF8A] dark:text-[#181C1A]'
                  : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#68736B] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840]'
              )}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Only</span>
            </button>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA] bg-[#EEF3EE] dark:bg-[#202722] transition-colors"
                title="Reset all filters"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-[#68736B] dark:text-[#A0AFA5]">
          Showing <span className="text-[#3F7D5A] dark:text-[#6AAF8A]">{filteredResources.length}</span> of {resources.length} learning resources
        </span>
      </div>

      {/* Resource Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-8 shadow-xs">
          <Layers className="w-12 h-12 mx-auto text-[#68736B] dark:text-[#A0AFA5] mb-3 opacity-60" />
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
            No resources match your filters
          </h3>
          <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-4">
            Try adjusting your search terms or clearing selected filter criteria.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-[#3F7D5A] hover:bg-[#2E5E43] text-white text-xs font-bold transition-colors shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68736B]">Loading learning resources...</div>}>
      <LearnContent />
    </Suspense>
  );
}
