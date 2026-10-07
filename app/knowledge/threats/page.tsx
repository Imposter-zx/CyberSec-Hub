'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ThreatCard } from '@/components/ui/ThreatCard';
import { threats } from '@/data/threats';
import { filterThreats } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw } from 'lucide-react';

export default function ThreatsKnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const categories = useMemo(() => {
    const set = new Set(threats.map((t) => t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredThreats = useMemo(() => {
    return filterThreats(threats, {
      query: searchQuery,
      category: selectedCategory,
      difficulty: selectedDifficulty,
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Security Threats & MITRE ATT&CK' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Security Threats, Vulnerabilities & MITRE ATT&CK Taxonomy
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Comprehensive encyclopedia of technical attack mechanisms, adversary vectors, detection telemetry, and defensive controls mapped to the MITRE ATT&CK matrix and OWASP Top 10 standards.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-[#FFFDF8] dark:bg-[#302E29] p-4 rounded-xl border border-[#D8D0C2] dark:border-[#454139] mb-8 space-y-4 shadow-sm">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#68645D] dark:text-[#B8B1A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search threats by name (e.g. Ransomware, SQL Injection, SSRF, Phishing)..."
            className="w-full pl-10 pr-4 py-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] text-[#242424] dark:text-[#F1EDE4] placeholder-[#68645D]/60 dark:placeholder-[#B8B1A5]/60 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-xs focus:outline-none focus:ring-2 focus:ring-[#66705A]/40"
          />
        </div>

        {/* Category & Difficulty Filters */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex-1 min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'all' ? 'All Threat Categories' : c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-44">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#F5F1E8] dark:bg-[#1F1E1B] rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
            >
              <option value="all">All Complexities</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <button
              type="button"
              onClick={resetFilters}
              className="p-2 rounded-lg border border-[#D8D0C2] dark:border-[#454139] text-[#68645D] hover:text-[#242424] dark:text-[#B8B1A5] dark:hover:text-[#F1EDE4] transition-colors"
              title="Reset filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-[#68645D] dark:text-[#B8B1A5]">
          Showing <span className="text-[#242424] dark:text-[#F1EDE4]">{filteredThreats.length}</span> of {threats.length} security threats
        </span>
      </div>

      {/* Threats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredThreats.map((threat) => (
          <ThreatCard key={threat.id} threat={threat} />
        ))}
      </div>
    </div>
  );
}
