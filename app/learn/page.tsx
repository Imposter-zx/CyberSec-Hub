'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty, Pricing } from '@/types';
import { filterResources, FilterState } from '@/lib/filters';
import { Search, Filter, RefreshCw, Layers, ShieldCheck, DollarSign } from 'lucide-react';
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

  // Extract unique categories and resource types
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
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Cybersecurity Learning Resources Directory
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Curated index of verified, high-quality cybersecurity training platforms, interactive academies, standard frameworks, and practice labs. Filter by domain, skill difficulty, pricing, and resource format.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 space-y-4 shadow-sm">
        {/* Top Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter resources by name, skill (e.g. SQL Injection, Wireshark), or topic..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        {/* Multi-Facet Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {/* Category */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
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
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Pricing
            </label>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value as Pricing | 'all')}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">All Pricing</option>
              <option value="free">100% Free</option>
              <option value="freemium">Freemium</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Resource Format
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none uppercase"
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
                'flex-1 p-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors',
                verifiedOnly
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              )}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified</span>
            </button>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
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
        <span className="text-xs font-semibold text-slate-500">
          Showing <span className="text-slate-900 dark:text-white">{filteredResources.length}</span> of {resources.length} learning resources
        </span>
      </div>

      {/* Resource Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
          <Layers className="w-12 h-12 mx-auto text-slate-400 mb-3 opacity-60" />
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
            No resources match your filters
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Try adjusting your search terms or clearing selected filter criteria.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
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
    <Suspense fallback={<div className="p-8 text-center text-xs">Loading learning resources...</div>}>
      <LearnContent />
    </Suspense>
  );
}
