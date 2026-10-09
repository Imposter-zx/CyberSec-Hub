'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { hackerTypes } from '@/data/hackers';
import { VisualConceptCard } from '@/components/visuals/VisualConceptCard';
import { getHackerIllustration } from '@/components/visuals/HackerIllustrations';
import { HackerCard } from '@/components/ui/HackerCard';
import { Shield, Scale, Users, LayoutGrid, ListFilter, Terminal } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Types of Hackers & Threat Actors' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1.5">
          <Terminal className="w-4 h-4" />
          <span>// CLASSIFIED_ARCHETYPE_DIRECTORY</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Types of Hackers &amp; Threat Actors
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Technical classification of 17 cybersecurity archetypes, threat actor tiers, and defensive operations. Visual infographic representations illustrate authorized ethical boundaries, criminal methodologies, and industrial roles.
        </p>
      </div>

      {/* Controls Bar: Filter by Scope + View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0E1510] border border-[#1B2A1F] mb-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'All 17 Archetypes' },
            { id: 'core-10', label: 'Core 10 Hats' },
            { id: 'authorized', label: 'Authorized Defenders' },
            { id: 'adversary', label: 'Threat Actors' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all border',
                filter === tab.id
                  ? 'bg-[#00FF66] text-[#050705] border-[#00FF66] shadow-xs'
                  : 'bg-[#050705] text-[#91A596] hover:text-[#E8F5E9] border-[#1B2A1F]'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="inline-flex rounded-lg p-1 bg-[#050705] border border-[#1B2A1F] shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('infographic')}
            className={cn(
              'px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all',
              viewMode === 'infographic'
                ? 'bg-[#00FF66] text-[#050705]'
                : 'text-[#91A596] hover:text-[#E8F5E9]'
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Infographic Grid</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('detailed')}
            className={cn(
              'px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all',
              viewMode === 'detailed'
                ? 'bg-[#00FF66] text-[#050705]'
                : 'text-[#91A596] hover:text-[#E8F5E9]'
            )}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Technical Dossier</span>
          </button>
        </div>
      </div>

      {/* Infographic View: Dominant Visual Cards */}
      {viewMode === 'infographic' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackers.map((hacker) => (
            <VisualConceptCard
              key={hacker.id}
              number={hacker.number}
              title={hacker.name}
              subtitle={hacker.subtitle}
              shortDescription={hacker.definition}
              illustration={getHackerIllustration(hacker.id)}
              category={hacker.careerRoles?.[0] || 'Security Role'}
              objective={hacker.objectives}
              typicalActivity={hacker.activities}
              keyPoints={hacker.commonTechniques}
              badgeVariant={getBadgeVariant(hacker.id)}
            />
          ))}
        </div>
      )}

      {/* Detailed View: Full Technical Cards */}
      {viewMode === 'detailed' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredHackers.map((hacker) => (
            <HackerCard key={hacker.id} hacker={hacker} />
          ))}
        </div>
      )}

      {/* Legal & Ethical Boundaries Reference Section */}
      <div className="mt-16 p-6 rounded-2xl bg-[#0E1510] border border-[#1B2A1F]">
        <h3 className="text-base font-bold text-[#00FF66] mb-2 flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#00FF66]" />
          <span>// LEGAL &amp; ETHICAL FRAMEWORK BOUNDARIES (CFAA &amp; COMPUTER MISUSE ACT)</span>
        </h3>
        <p className="text-xs text-[#91A596] leading-relaxed font-sans mb-4">
          The decisive line separating ethical research from unlawful cybercrime is <strong>authorization</strong>. Under laws such as the US Computer Fraud and Abuse Act (CFAA § 1030), UK Computer Misuse Act (CMA 1990), and EU Directive 2013/40/EU, accessing any computing system, service, or API without explicit written permission is illegal regardless of motivation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <span className="font-bold text-[#00FF66] block mb-1">Authorized (In-Scope)</span>
            <span className="text-[#91A596] text-[11px] font-sans">
              Explicit ROE (Rules of Engagement), written contracts, authorized bug bounty scope with Safe Harbor protections.
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <span className="font-bold text-[#D9A441] block mb-1">Unauthorized (Gray Zone)</span>
            <span className="text-[#91A596] text-[11px] font-sans">
              Testing production systems without consent even if intending to report findings. Carries severe civil and criminal liabilities.
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#271211] border border-[#441E1C]">
            <span className="font-bold text-[#FF3B30] block mb-1">Malicious (Adversary)</span>
            <span className="text-[#91A596] text-[11px] font-sans">
              Unauthorized access for financial extortion, data exfiltration, service disruption, espionage, or destructive payloads.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
