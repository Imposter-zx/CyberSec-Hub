'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchBar } from '@/components/ui/SearchBar';
import { globalSearch } from '@/lib/search';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Tag } from '@/components/ui/Tag';
import { Search, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const allResults = useMemo(() => {
    return globalSearch(query);
  }, [query]);

  // Extract unique result types
  const types = useMemo(() => {
    const set = new Set(allResults.map((r) => r.type));
    return ['all', ...Array.from(set)];
  }, [allResults]);

  const filteredResults = useMemo(() => {
    if (selectedType === 'all') return allResults;
    return allResults.filter((r) => r.type === selectedType);
  }, [allResults, selectedType]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Global Search' }]} />

      {/* Header & Search Bar */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Global Cybersecurity Knowledge Search
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] mb-6">
          Search across learning resources, certification guides, threat profiles, tools, YouTube channels, cryptographic algorithms, and learning roadmaps.
        </p>

        <SearchBar
          initialValue={query}
          onSearch={(q) => setQuery(q)}
          autoFocus={!initialQuery}
        />
      </div>

      {/* Type Filters & Result Summary */}
      {query && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D0C2] dark:border-[#454139] pb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={cn(
                  'px-3 py-1 rounded-lg text-xs font-semibold transition-colors',
                  selectedType === t
                    ? 'bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm'
                    : 'bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] hover:bg-[#D8D0C2]'
                )}
              >
                {t === 'all' ? `All Results (${allResults.length})` : t}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#68645D] dark:text-[#B8B1A5] font-medium">
            Found {filteredResults.length} matching entities
          </span>
        </div>
      )}

      {/* Results List */}
      {!query ? (
        <div className="text-center py-16 bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-8 shadow-sm">
          <Search className="w-12 h-12 mx-auto text-[#68645D] dark:text-[#B8B1A5] mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] mb-1">
            Enter a search term to explore the knowledge base
          </h3>
          <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] max-w-md mx-auto">
            Try searching for "OSCP", "Burp Suite", "SQL Injection", "Argon2", "Ransomware", or "Active Directory".
          </p>
        </div>
      ) : filteredResults.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] p-8 shadow-sm">
          <Layers className="w-12 h-12 mx-auto text-[#68645D] dark:text-[#B8B1A5] mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-[#242424] dark:text-[#F1EDE4] mb-1">
            No results found for "{query}"
          </h3>
          <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] max-w-md mx-auto">
            Check your spelling, try broader keywords, or browse directly through the navigation menu.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResults.map((result) => (
            <div
              key={`${result.type}-${result.id}`}
              className="p-5 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-md transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                      {result.type}
                    </span>
                    <span className="text-xs font-semibold text-[#68645D] dark:text-[#B8B1A5]">
                      {result.category}
                    </span>
                  </div>
                  {result.difficulty && <DifficultyBadge difficulty={result.difficulty} />}
                </div>

                <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                  <Link
                    href={result.internalUrl}
                    className="hover:text-[#66705A] dark:hover:text-[#A5AD8C] transition-colors"
                  >
                    {result.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed line-clamp-2">
                  {result.description}
                </p>

                {result.tags && result.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {result.tags.slice(0, 5).map((tag, idx) => (
                      <Tag key={idx} label={tag} />
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between text-xs">
                <Link
                  href={result.internalUrl}
                  className="font-semibold text-[#66705A] dark:text-[#A5AD8C] hover:underline flex items-center gap-1"
                >
                  <span>Open Knowledge Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {result.url && (
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4] flex items-center gap-1"
                  >
                    <span>Official External Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68645D]">Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
