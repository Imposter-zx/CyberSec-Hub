'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchBar } from '@/components/ui/SearchBar';
import { globalSearch } from '@/lib/search';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { Tag } from '@/components/ui/Tag';
import { Search, ExternalLink, ArrowRight, Layers, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const { t, isRtl } = useI18n();

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: t('nav.search') || 'Global Search' }]} />

      {/* Header & Search Bar */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#267747] dark:text-[#00FF66]" />
          <span>// UNIFIED_SEARCH // CROSS_PLATFORM_INDEX</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F5E9] font-mono tracking-tight mb-2.5">
          {t('common.search')}
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] mb-6">
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#DDE5DE] dark:border-[#1B2A1F] pb-4">
          <div className="flex flex-wrap items-center gap-1.5 font-mono">
            {types.map((tName) => (
              <button
                key={tName}
                type="button"
                onClick={() => setSelectedType(tName)}
                className={cn(
                  'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
                  selectedType === tName
                    ? 'bg-[#267747] text-white dark:bg-[#00FF66] dark:text-[#050705] shadow-[0_0_12px_rgba(0,255,102,0.25)]'
                    : 'bg-[#FFFFFF] dark:bg-[#050705] text-[#5F6B62] dark:text-[#91A596] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:text-[#18221C] dark:hover:text-[#E8F5E9]'
                )}
              >
                {tName === 'all' ? `ALL (${allResults.length})` : tName.toUpperCase()}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#5F6B62] dark:text-[#91A596] font-mono font-bold">
            MATCHED: <span className="text-[#267747] dark:text-[#00FF66]">{filteredResults.length}</span> ENTITIES
          </span>
        </div>
      )}

      {/* Results List */}
      {!query ? (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-8 shadow-xs">
          <Search className="w-12 h-12 mx-auto text-[#267747] dark:text-[#00FF66] mb-3 opacity-60" />
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono mb-1">
            ENTER SEARCH QUERY TO EXPLORE KNOWLEDGE BASE
          </h3>
          <p className="text-xs text-[#5F6B62] dark:text-[#91A596] max-w-md mx-auto">
            Try searching for &quot;OSCP&quot;, &quot;Burp Suite&quot;, &quot;SQL Injection&quot;, &quot;Argon2&quot;, &quot;Ransomware&quot;, or &quot;Active Directory&quot;.
          </p>
        </div>
      ) : filteredResults.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFFFF] dark:bg-[#0E1510] rounded-2xl border border-[#DDE5DE] dark:border-[#1B2A1F] p-8 shadow-xs">
          <Layers className="w-12 h-12 mx-auto text-[#5F6B62] dark:text-[#91A596] mb-3 opacity-50" />
          <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono mb-1">
            NO RESULTS FOUND FOR &quot;{query}&quot;
          </h3>
          <p className="text-xs text-[#5F6B62] dark:text-[#91A596] max-w-md mx-auto">
            Check your spelling, try broader keywords, or browse directly through the navigation menu.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResults.map((result) => (
            <div
              key={`${result.type}-${result.id}`}
              className="p-5.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] hover:shadow-[0_4px_24px_rgba(0,255,102,0.08)] transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F7F9F6] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                      {result.type}
                    </span>
                    <span className="text-xs font-semibold text-[#5F6B62] dark:text-[#91A596]">
                      {result.category}
                    </span>
                  </div>
                  {result.difficulty && <DifficultyBadge difficulty={result.difficulty} />}
                </div>

                <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] font-mono mb-2">
                  <Link
                    href={result.internalUrl}
                    className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors"
                  >
                    {result.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 leading-relaxed line-clamp-2">
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

              <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-between text-xs font-mono">
                <Link
                  href={result.internalUrl}
                  className="font-bold text-[#267747] dark:text-[#00FF66] hover:underline flex items-center gap-1"
                >
                  <span>{isRtl ? '<' : '>'} {t('common.viewDetails')}</span>
                  <ArrowRight className={cn('w-3.5 h-3.5', isRtl && 'rotate-180')} />
                </Link>

                {result.url && (
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5F6B62] dark:text-[#91A596] hover:text-[#18221C] dark:hover:text-[#E8F5E9] flex items-center gap-1 font-medium"
                  >
                    <span>EXTERNAL</span>
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
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#5F6B62] dark:text-[#91A596]">Initializing search index...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
