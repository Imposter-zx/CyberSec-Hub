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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Search className="w-4 h-4" />
          <span>Unified Cross-Platform Index</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Global Cybersecurity Knowledge Search
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] mb-6">
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={cn(
                  'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
                  selectedType === t
                    ? 'bg-[#3F7D5A] text-white shadow-xs'
                    : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#DDE5DE]'
                )}
              >
                {t === 'all' ? `All Results (${allResults.length})` : t}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#68736B] dark:text-[#A0AFA5] font-bold">
            Found <span className="text-[#3F7D5A] dark:text-[#6AAF8A]">{filteredResults.length}</span> matching entities
          </span>
        </div>
      )}

      {/* Results List */}
      {!query ? (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-8 shadow-xs">
          <Search className="w-12 h-12 mx-auto text-[#3F7D5A] dark:text-[#6AAF8A] mb-3 opacity-60" />
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
            Enter a search term to explore the knowledge base
          </h3>
          <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] max-w-md mx-auto">
            Try searching for "OSCP", "Burp Suite", "SQL Injection", "Argon2", "Ransomware", or "Active Directory".
          </p>
        </div>
      ) : filteredResults.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] p-8 shadow-xs">
          <Layers className="w-12 h-12 mx-auto text-[#68736B] dark:text-[#A0AFA5] mb-3 opacity-50" />
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
            No results found for "{query}"
          </h3>
          <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] max-w-md mx-auto">
            Check your spelling, try broader keywords, or browse directly through the navigation menu.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResults.map((result) => (
            <div
              key={`${result.type}-${result.id}`}
              className="p-5.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EEF3EE] dark:bg-[#202722] text-[#3F7D5A] dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]">
                      {result.type}
                    </span>
                    <span className="text-xs font-semibold text-[#68736B] dark:text-[#A0AFA5]">
                      {result.category}
                    </span>
                  </div>
                  {result.difficulty && <DifficultyBadge difficulty={result.difficulty} />}
                </div>

                <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">
                  <Link
                    href={result.internalUrl}
                    className="hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A] transition-colors"
                  >
                    {result.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed line-clamp-2">
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

              <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between text-xs">
                <Link
                  href={result.internalUrl}
                  className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A] hover:underline flex items-center gap-1"
                >
                  <span>Open Knowledge Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {result.url && (
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA] flex items-center gap-1 font-medium"
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
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68736B]">Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
