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
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] pointer-events-none" />
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
          className="w-full pl-11 pr-24 py-3.5 bg-[#FFFDF8] dark:bg-[#302E29] text-[#242424] dark:text-[#F1EDE4] placeholder-[#68645D]/60 dark:placeholder-[#B8B1A5]/60 rounded-xl border border-[#D8D0C2] dark:border-[#454139] focus:outline-none focus:ring-2 focus:ring-[#66705A]/40 focus:border-[#66705A] text-sm shadow-sm transition-all"
        />
        <div className="absolute right-2.5 flex items-center gap-1.5">
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="p-1 rounded-md text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => handleExecuteSearch(query)}
            className="px-3.5 py-1.5 bg-[#66705A] hover:bg-[#56604b] dark:bg-[#A5AD8C] dark:hover:bg-[#929c78] text-[#FFFDF8] dark:text-[#1F1E1B] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Search</span>
            <CornerDownLeft className="w-3 h-3 opacity-80" />
          </button>
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-[#FFFDF8] dark:bg-[#302E29] rounded-xl border border-[#D8D0C2] dark:border-[#454139] shadow-xl overflow-hidden">
          <div className="px-3.5 py-2 text-[11px] font-semibold text-[#68645D] dark:text-[#B8B1A5] uppercase tracking-wider border-b border-[#D8D0C2]/50 dark:border-[#454139]/60">
            Suggested Topics
          </div>
          <ul className="py-1">
            {suggestions.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(item);
                    handleExecuteSearch(item);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-[#242424] dark:text-[#F1EDE4] hover:bg-[#EAE3D5]/60 dark:hover:bg-[#292722] hover:text-[#66705A] dark:hover:text-[#A5AD8C] flex items-center justify-between group transition-colors"
                >
                  <span>{item}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#68645D] dark:text-[#B8B1A5] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
