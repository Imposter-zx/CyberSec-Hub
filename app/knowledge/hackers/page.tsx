'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { HackerCard } from '@/components/ui/HackerCard';
import { hackerTypes } from '@/data/hackers';
import { Shield, Scale, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HackersKnowledgePage() {
  const [filter, setFilter] = useState<'all' | 'authorized' | 'adversary'>('all');

  const filteredHackers = hackerTypes.filter((h) => {
    const isAuthorized = [
      'white-hat',
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Types of Hackers & Security Roles' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Users className="w-4 h-4" />
          <span>Threat Actor & Operational Taxonomy</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Types of Hackers & Cybersecurity Operational Roles
        </h1>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Comprehensive taxonomy of technical threat actor profiles, ethical boundaries, and industry career pathways. Learn the distinct motivations, activities, and legal frameworks governing modern security.
        </p>
      </div>

      {/* Legal & Educational Notice Box */}
      <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] mb-8 text-xs text-[#18221C] dark:text-[#E8F0EA] flex items-start gap-3.5 leading-relaxed shadow-xs">
        <Scale className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">
            Educational Scope & Legal Authority Notice
          </span>
          All technical descriptions presented here are strictly for educational and defense awareness purposes. Engaging in unauthorized system probing, penetration testing, or exploitation without written permission violates cybercrime laws (e.g., Computer Fraud and Abuse Act) and carries severe criminal penalties.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-3">
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
          onClick={() => setFilter('authorized')}
          className={cn(
            'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
            filter === 'authorized'
              ? 'bg-[#3F7D5A] text-white shadow-xs'
              : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
          )}
        >
          Authorized Defensive & Research Roles
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHackers.map((hacker) => (
          <HackerCard key={hacker.id} hacker={hacker} />
        ))}
      </div>
    </div>
  );
}
