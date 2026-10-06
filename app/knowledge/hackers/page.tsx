'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { HackerCard } from '@/components/ui/HackerCard';
import { hackerTypes } from '@/data/hackers';
import { Shield, Users, Scale, AlertTriangle } from 'lucide-react';
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
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Types of Hackers & Cybersecurity Operational Roles
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive taxonomy of technical threat actor profiles, ethical boundaries, and industry career pathways. Learn the distinct motivations, activities, and legal frameworks governing modern security.
        </p>
      </div>

      {/* Legal & Educational Notice Box */}
      <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 mb-8 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-3 leading-relaxed">
        <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1">
            Educational Scope & Legal Authority Notice
          </span>
          All technical descriptions presented here are strictly for educational and defense awareness purposes. Engaging in unauthorized system probing, penetration testing, or exploitation without written permission violates cybercrime laws (e.g., Computer Fraud and Abuse Act) and carries severe criminal penalties.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
            filter === 'all'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          )}
        >
          All Profiles ({hackerTypes.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('authorized')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5',
            filter === 'authorized'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          )}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Defensive & Authorized Roles</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter('adversary')}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5',
            filter === 'adversary'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          )}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Threat Actor Profiles</span>
        </button>
      </div>

      {/* Grid of Hacker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHackers.map((hacker) => (
          <HackerCard key={hacker.id} hacker={hacker} />
        ))}
      </div>
    </div>
  );
}
