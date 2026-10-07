'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { getSearchSuggestions } from '@/lib/search';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  className?: string;
  onSearch?: (query: string) => void;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  initialValue = '',
  className,
  onSearch,
  autoFocus = false,
}) => {
  const router = useRouter();
  const { t } = useI18n();
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const results = getSearchSuggestions(query);
      setSuggestions(results);
      setIsOpen(results.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExecuteSearch = (searchQuery: string) => {
    setIsOpen(false);
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleExecuteSearch(query);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div className="relative flex items-center shadow-sm rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#3F7D5A]/40 transition-all">
        <Search className="absolute left-4.5 w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          placeholder={placeholder || t('search_placeholder')}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-26 py-4 bg-[#FFFFFF] dark:bg-[#262E28] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 border border-[#DDE5DE] dark:border-[#3A4840] focus:outline-none focus:border-[#3F7D5A] dark:focus:border-[#6AAF8A] text-sm transition-all"
        />
        <div className="absolute right-3 flex items-center gap-1.5">
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="p-1 rounded-md text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => handleExecuteSearch(query)}
            className="px-4 py-2 bg-[#3F7D5A] hover:bg-[#2E5E43] dark:bg-[#6AAF8A] dark:hover:bg-[#589E79] text-white dark:text-[#181C1A] rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <span>Search</span>
            <CornerDownLeft className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-[#FFFFFF] dark:bg-[#262E28] rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] shadow-2xl overflow-hidden animate-in fade-in-50 duration-150">
          <div className="px-4 py-2.5 text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider border-b border-[#DDE5DE]/60 dark:border-[#3A4840]/60 bg-[#EEF3EE]/50 dark:bg-[#202722]/50">
            Suggested Topics & Concepts
          </div>
          <ul className="py-1.5">
            {suggestions.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(item);
                    handleExecuteSearch(item);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#18221C] dark:text-[#E8F0EA] hover:bg-[#EBF4EF] dark:hover:bg-[#3F7D5A]/15 hover:text-[#3F7D5A] dark:hover:text-[#6AAF8A] flex items-center justify-between group transition-colors"
                >
                  <span className="font-medium">{item}</span>
                  <ArrowRight className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
