'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Difficulty } from '@/types';
import { filterCertifications } from '@/lib/filters';
import { Search, RefreshCw, ArrowRight, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

function CertificationsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Difficulty | 'all'>('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [practicalOnly, setPracticalOnly] = useState(false);
  const [comparedCerts, setComparedCerts] = useState<string[]>([]);

  const domains = useMemo(() => {
    const set = new Set(certifications.map((c) => c.domain));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredCerts = useMemo(() => {
    return filterCertifications(certifications, {
      query: searchQuery,
      level: selectedLevel,
      domain: selectedDomain,
      practicalOnly,
    });
  }, [searchQuery, selectedLevel, selectedDomain, practicalOnly]);

  const toggleCompare = (certId: string) => {
    if (comparedCerts.includes(certId)) {
      setComparedCerts(comparedCerts.filter((id) => id !== certId));
    } else {
      if (comparedCerts.length < 4) {
        setComparedCerts([...comparedCerts, certId]);
      } else {
        alert('You can compare a maximum of 4 certifications simultaneously.');
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedDomain('all');
    setPracticalOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Certifications' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D7A84B] dark:text-[#E4BF74] mb-1.5">
            <Award className="w-4 h-4" />
            <span>Verified Credentials Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
            Cybersecurity Certification Explorer
          </h1>
          <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-2xl leading-relaxed">
            Unbiased technical directory of verified industry certifications across OffSec, CompTIA, (ISC)², GIAC/SANS, Cisco, and Cloud providers.
          </p>
        </div>

        {/* Quick link to OffSec hub or comparison */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/certifications/offsec"
            className="px-4 py-2.5 rounded-xl bg-[#E58A4E] hover:bg-[#C97438] text-white text-xs font-bold transition-all shadow-xs"
          >
            Dedicated OffSec Hub
          </Link>
          <Link
            href={`/certifications/compare${comparedCerts.length > 0 ? `?ids=${comparedCerts.join(',')}` : ''}`}
            className="px-4 py-2.5 rounded-xl bg-[#3F7D5A] hover:bg-[#2E5E43] dark:bg-[#6AAF8A] dark:hover:bg-[#589E79] text-white dark:text-[#181C1A] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <span>Compare Selected ({comparedCerts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#262E28] p-5 rounded-2xl border border-[#DDE5DE] dark:border-[#3A4840] mb-8 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certifications by name (e.g. OSCP+, Security+, CISSP, eJPT) or provider..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] placeholder-[#68736B]/70 dark:placeholder-[#A0AFA5]/70 rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-xs focus:outline-none focus:ring-2 focus:ring-[#3F7D5A]/40 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Domain */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Domain / Specialization
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
            >
              {domains.map((dom) => (
                <option key={dom} value={dom}>
                  {dom === 'all' ? 'All Domains' : dom}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] uppercase tracking-wider mb-1.5">
              Experience Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Difficulty | 'all')}
              className="w-full p-2 bg-[#EEF3EE] dark:bg-[#202722] rounded-xl border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium text-xs"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Entry Level / Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced / Expert</option>
            </select>
          </div>

          {/* Practical Exam Filter & Reset */}
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => setPracticalOnly(!practicalOnly)}
              className={cn(
                'flex-1 p-2 rounded-xl border text-xs font-bold transition-all',
                practicalOnly
                  ? 'bg-[#E58A4E] text-white border-[#E58A4E]'
                  : 'bg-[#EEF3EE] dark:bg-[#202722] text-[#68736B] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840]'
              )}
            >
              Practical Exams Only
            </button>
            {(searchQuery || selectedLevel !== 'all' || selectedDomain !== 'all' || practicalOnly) && (
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
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            onCompareToggle={toggleCompare}
            isCompared={comparedCerts.includes(cert.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68736B]">Loading certifications...</div>}>
      <CertificationsContent />
    </Suspense>
  );
}
