'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { resources } from '@/data/resources';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty, Pricing } from '@/types';
import { filterResources, FilterState } from '@/lib/filters';
import { Search, RefreshCw, Layers, ShieldCheck, Terminal } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs items={[{ label: 'Learn & Resources' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1.5">
          <Terminal className="w-4 h-4" />
          <span>// LEARNING_RESOURCES_INDEX</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Cybersecurity Learning Resources Directory
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Curated index of verified, high-quality cybersecurity training platforms, interactive academies, standard frameworks, and practice labs. Filter by domain, skill difficulty, pricing, and resource format.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#0E1510] p-5 rounded-2xl border border-[#1B2A1F] mb-8 space-y-4 shadow-xs">
        {/* Top Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#00FF66]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter resources by name, skill (e.g. SQL Injection, Wireshark, PortSwigger), or topic..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#050705] text-[#E8F5E9] placeholder-[#91A596]/60 rounded-xl border border-[#1B2A1F] text-xs focus:outline-none focus:border-[#00FF66] transition-all font-mono"
          />
        </div>

        {/* Multi-Facet Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {/* Category */}
          <div>
            <label className="block text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#050705]">
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              <option value="all" className="bg-[#050705]">All Difficulties</option>
              <option value="beginner" className="bg-[#050705]">Beginner</option>
              <option value="intermediate" className="bg-[#050705]">Intermediate</option>
              <option value="advanced" className="bg-[#050705]">Advanced</option>
            </select>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Pricing
            </label>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value as Pricing | 'all')}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none font-medium text-xs font-mono"
            >
              <option value="all" className="bg-[#050705]">All Pricing</option>
              <option value="free" className="bg-[#050705]">100% Free</option>
              <option value="freemium" className="bg-[#050705]">Freemium</option>
              <option value="paid" className="bg-[#050705]">Paid</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-[10px] font-bold text-[#91A596] uppercase tracking-wider mb-1.5">
              Format
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-[#050705] rounded-xl border border-[#1B2A1F] text-[#E8F5E9] focus:outline-none uppercase font-medium text-xs font-mono"
            >
              {resourceTypes.map((t) => (
                <option key={t} value={t} className="bg-[#050705]">
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
                'flex-1 p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors font-mono',
                verifiedOnly
                  ? 'bg-[#00FF66] text-[#050705] border-[#00FF66]'
                  : 'bg-[#050705] text-[#91A596] border-[#1B2A1F] hover:text-[#E8F5E9]'
              )}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL</span>
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl bg-[#050705] border border-[#1B2A1F] text-[#FF3B30] hover:border-[#FF3B30] transition-colors"
                title="Reset filters"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count & Metrics Bar */}
      <div className="flex items-center justify-between mb-6 text-xs text-[#91A596]">
        <div>
          Showing <span className="font-bold text-[#00FF66]">{filteredResources.length}</span> verified resources
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-[#FF3B30] hover:underline flex items-center gap-1"
          >
            <span>[RESET_ALL_FILTERS]</span>
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
        <div className="text-center py-16 bg-[#0E1510] rounded-2xl border border-[#1B2A1F]">
          <p className="text-sm text-[#91A596] font-sans">No cybersecurity resources match your filter criteria.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-3 text-xs font-bold text-[#00FF66] hover:underline font-mono"
          >
            &gt; Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-[#91A596] font-mono">&gt; Loading resources...</div>}>
      <LearnContent />
    </Suspense>
  );
}
