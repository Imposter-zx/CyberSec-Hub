'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ThreatCard } from '@/components/ui/ThreatCard';
import { threats } from '@/data/threats';
import { filterThreats } from '@/lib/filters';
import { Difficulty } from '@/types';
import { Search, RefreshCw, ShieldAlert, GitBranch, LayoutGrid } from 'lucide-react';
import { SqlInjectionAttackFlow, XssAttackFlow } from '@/components/visuals/SecurityDiagrams';
import { cn } from '@/lib/utils';

export default function ThreatsKnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'catalog' | 'diagrams'>('catalog');

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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1.5">
          <ShieldAlert className="w-4 h-4" />
          <span>Visual Attack Taxonomy & Defenses</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Security Threats, Vulnerabilities & MITRE ATT&CK Taxonomy
        </h1>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Comprehensive encyclopedia of technical attack mechanisms, adversary vectors, detection telemetry, and defensive controls mapped to the MITRE ATT&CK matrix and OWASP Top 10 standards.
        </p>
      </div>

      {/* Tab Navigation: Catalog vs Visual Attack Flows */}
      <div className="flex items-center gap-2 mb-8 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('catalog')}
          className={cn(
            'flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all',
            activeTab === 'catalog'
              ? 'bg-[#3F7D5A] text-white shadow-xs'
              : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
          )}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Visual Threat Catalog ({threats.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('diagrams')}
          className={cn(
            'flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all',
            activeTab === 'diagrams'
              ? 'bg-[#3F7D5A] text-white shadow-xs'
              : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
          )}
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span>Interactive Attack Flow Diagrams</span>
        </button>
      </div>

      {activeTab === 'catalog' ? (
        <>
          {/* Controls */}
          <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search threats by name (e.g. Ransomware, SQL Injection, SSRF, Phishing)..."
                className="w-full pl-11 pr-4 py-2.5 bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-xs focus:outline-none focus:ring-2 focus:ring-[#3F7D5A]/40 transition-all"
              />
            </div>

            {/* Category & Difficulty Filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex-1 min-w-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c === 'all' ? 'All Threat Categories' : c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-48">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
                  className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
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
                  className="p-2 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#68736B] hover:text-[#18221C] dark:text-[#A0AFA5] dark:hover:text-[#E8F0EA] bg-[#EEF3EE] dark:bg-[#202722] transition-colors"
                  title="Reset filters"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-[#68736B] dark:text-[#A0AFA5]">
              Showing <span className="text-[#3F7D5A] dark:text-[#6AAF8A]">{filteredThreats.length}</span> of {threats.length} security threats
            </span>
          </div>

          {/* Threats Grid with Vector Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThreats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-8">
          <SqlInjectionAttackFlow />
          <XssAttackFlow />
        </div>
      )}
    </div>
  );
}
