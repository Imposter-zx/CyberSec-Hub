'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { hackerTypes } from '@/data/hackers';
import { VisualConceptCard } from '@/components/visuals/VisualConceptCard';
import { getHackerIllustration } from '@/components/visuals/HackerIllustrations';
import { HackerCard } from '@/components/ui/HackerCard';
import { Shield, Scale, Users, LayoutGrid, ListFilter, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HackersKnowledgePage() {
  const [filter, setFilter] = useState<'all' | 'core-10' | 'authorized' | 'adversary'>('all');
  const [viewMode, setViewMode] = useState<'infographic' | 'detailed'>('infographic');

  const filteredHackers = hackerTypes.filter((h) => {
    if (filter === 'core-10') {
      const num = parseInt(h.number || '99', 10);
      return num <= 10;
    }
    const isAuthorized = [
      'white-hat',
      'blue-hat',
      'green-hat',
      'ethical-hacker',
      'security-researcher',
      'bug-bounty-hunter',
      'blue-team',
      'purple-team',
      'red-team',
    ].includes(h.id);

    if (filter === 'authorized') return isAuthorized;
    if (filter === 'adversary') return !isAuthorized;
    return true;
  });

  const getBadgeVariant = (id: string): 'green' | 'red' | 'gold' | 'amber' | 'teal' => {
    if (['white-hat', 'green-hat', 'ethical-hacker'].includes(id)) return 'green';
    if (['black-hat', 'red-hat', 'red-team', 'cybercriminal', 'insider-threat'].includes(id)) return 'red';
    if (['blue-hat', 'blue-team', 'security-researcher'].includes(id)) return 'teal';
    if (['gray-hat', 'bug-bounty-hunter', 'purple-team', 'state-sponsored-hacker'].includes(id)) return 'gold';
    return 'amber';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Types of Hackers & Threat Actors' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Sparkles className="w-4 h-4" />
          <span>Visual Learning Infographic Series</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Types of Hackers & Threat Actor Taxonomy
        </h1>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Educational visual infographic series illustrating cybersecurity threat actors, ethical boundaries, and industry operational roles. Understand who attacks, who defends, and who explores.
        </p>
      </div>

      {/* Educational & Legal Scope Notice */}
      <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] mb-8 text-xs text-[#18221C] dark:text-[#E8F0EA] flex items-start gap-3.5 leading-relaxed shadow-xs">
        <Scale className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">
            Educational Scope & Legal Authority Notice
          </span>
          All technical profiles presented here are strictly for educational and defense awareness. Probing, attacking, or exfiltrating data without written permission violates national and international cyber laws (e.g., Computer Fraud and Abuse Act) and carries severe criminal penalties.
        </div>
      </div>

      {/* Filter and View Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-4">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              filter === 'all'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            All Profiles ({hackerTypes.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('core-10')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              filter === 'core-10'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            Core 10 Archetypes (Infographic Grid)
          </button>
          <button
            type="button"
            onClick={() => setFilter('authorized')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              filter === 'authorized'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            Authorized Defenders & Researchers
          </button>
          <button
            type="button"
            onClick={() => setFilter('adversary')}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              filter === 'adversary'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            Threat Actors & Adversaries
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="inline-flex rounded-xl p-1 bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <button
            type="button"
            onClick={() => setViewMode('infographic')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all',
              viewMode === 'infographic'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C]'
            )}
            title="Visual Infographic Cards"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Visual Cards</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('detailed')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all',
              viewMode === 'detailed'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C]'
            )}
            title="Detailed Technical Dossier"
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Technical Dossier</span>
          </button>
        </div>
      </div>

      {/* Grid Content */}
      {viewMode === 'infographic' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackers.map((hacker) => (
            <VisualConceptCard
              key={hacker.id}
              number={hacker.number}
              title={hacker.name}
              subtitle={hacker.subtitle}
              shortDescription={hacker.definition}
              illustration={getHackerIllustration(hacker.id)}
              objective={hacker.objectives}
              typicalActivity={hacker.activities}
              badgeVariant={getBadgeVariant(hacker.id)}
              category={hacker.careerRoles?.[0] || 'Security Profile'}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackers.map((hacker) => (
            <HackerCard key={hacker.id} hacker={hacker} />
          ))}
        </div>
      )}
    </div>
  );
}
