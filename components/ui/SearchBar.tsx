'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, CornerDownLeft, Terminal } from 'lucide-react';
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
  const { t, isRTL } = useI18n();
  const defaultPlaceholder = placeholder || t('search_placeholder');
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
    } else if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
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
    <div ref={containerRef} className={cn('relative w-full font-mono', className)}>
      <div className="relative flex items-center">
        {/* Terminal prompt symbol */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[#267747] dark:text-[#00FF66] pointer-events-none',
            isRTL ? 'right-4' : 'left-4'
          )}
        >
          <Terminal className="w-4 h-4" />
          <span className="font-bold">{isRTL ? '<' : '>'}</span>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim().length >= 2 && suggestions.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={defaultPlaceholder}
          autoFocus={autoFocus}
          className={cn(
            'w-full py-3.5 bg-[#FFFFFF] dark:bg-[#0A0F0B] text-[#18221C] dark:text-[#E8F5E9] placeholder-[#5F6B62]/60 dark:placeholder-[#91A596]/60 rounded-xl border border-[#DDE5DE] dark:border-[#1B2A1F] text-xs sm:text-sm focus:outline-none focus:border-[#267747] dark:focus:border-[#00FF66] focus:ring-1 focus:ring-[#267747]/40 dark:focus:ring-[#00FF66]/50 transition-all font-mono shadow-xs',
            isRTL ? 'pr-12 pl-24 text-right' : 'pl-12 pr-24 text-left'
          )}
        />

        {/* Clear and Submit Buttons */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 flex items-center gap-1.5',
            isRTL ? 'left-3' : 'right-3'
          )}
        >
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="p-1 rounded-md text-[#5F6B62] hover:text-[#18221C] dark:text-[#91A596] dark:hover:text-[#E8F5E9] transition-colors"
              title="Clear query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={() => handleExecuteSearch(query)}
            className="px-2.5 py-1.5 rounded-lg bg-[#EEF3EE] dark:bg-[#0E1510] hover:bg-[#267747] dark:hover:bg-[#00FF66] text-[#5F6B62] dark:text-[#91A596] hover:text-white dark:hover:text-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] hover:border-[#267747] dark:hover:border-[#00FF66] text-[11px] font-bold transition-all flex items-center gap-1 group shadow-xs"
            title="Execute query"
          >
            <span className="hidden sm:inline">EXEC</span>
            <CornerDownLeft className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-2xl overflow-hidden z-50 animate-in fade-in-50 duration-150">
          <div className="px-3.5 py-1.5 text-[10px] text-[#267747] dark:text-[#00FF66] border-b border-[#DDE5DE] dark:border-[#1B2A1F] uppercase tracking-wider bg-[#EEF3EE] dark:bg-[#0E1510]">
            // QUERY_SUGGESTIONS
          </div>
          <div className="max-h-60 overflow-y-auto divide-y divide-[#DDE5DE]/60 dark:divide-[#1B2A1F]/50">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setQuery(suggestion);
                  handleExecuteSearch(suggestion);
                }}
                className={cn(
                  'w-full px-4 py-2.5 text-xs text-[#5F6B62] dark:text-[#91A596] hover:text-[#267747] dark:hover:text-[#00FF66] hover:bg-[#EEF3EE] dark:hover:bg-[#0E1510] transition-colors flex items-center justify-between group',
                  isRTL ? 'text-right' : 'text-left'
                )}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#267747] dark:text-[#00FF66] opacity-60 group-hover:opacity-100">&gt;</span>
                  <span className="truncate">{suggestion}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#267747] dark:text-[#00FF66] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
