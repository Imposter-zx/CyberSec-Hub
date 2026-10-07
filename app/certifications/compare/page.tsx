'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { certifications } from '@/data/certifications';
import { RefreshCw, Award } from 'lucide-react';

function CompareContent() {
  const searchParams = useSearchParams();
  const initialIds = searchParams.get('ids')?.split(',') || ['comptia-security-plus', 'comptia-cysa-plus'];

  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds);

  const selectedCerts = certifications.filter((c) => selectedIds.includes(c.id));

  const addCert = (id: string) => {
    if (id && !selectedIds.includes(id)) {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      } else {
        alert('You can compare a maximum of 4 certifications simultaneously.');
      }
    }
  };

  const removeCert = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const loadPreset = (ids: string[]) => {
    setSelectedIds(ids);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Certifications', href: '/certifications' },
          { label: 'Certification Comparison Tool' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Award className="w-4 h-4" />
          <span>Credential Evaluation Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Cybersecurity Certification Comparison Tool
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Compare exam formats, practical vs theoretical styles, costs, duration, renewal policies, and required experience side-by-side to make informed career decisions.
        </p>
      </div>

      {/* Preset Comparisons */}
      <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] mb-8 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-[#68736B] dark:text-[#A0AFA5] mb-3">
          Popular Benchmark Comparisons
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => loadPreset(['comptia-security-plus', 'comptia-cysa-plus'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] font-bold text-[#18221C] dark:text-[#E8F0EA] transition-all"
          >
            Security+ vs CySA+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['ine-ejpt', 'tcm-pnpt', 'oscp-plus'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] font-bold text-[#18221C] dark:text-[#E8F0EA] transition-all"
          >
            eJPT vs PNPT vs OSCP+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['oswa', 'oswe'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] font-bold text-[#18221C] dark:text-[#E8F0EA] transition-all"
          >
            OSWA (Web Black-Box) vs OSWE (White-Box Code Audit)
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['giac-gsec', 'isc2-cissp', 'isaca-cism'])}
            className="px-3.5 py-1.5 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] font-bold text-[#18221C] dark:text-[#E8F0EA] transition-all"
          >
            GSEC vs CISSP vs CISM
          </button>
        </div>
      </div>

      {/* Add Certification Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">
            Add Certification to Matrix:
          </label>
          <select
            onChange={(e) => {
              addCert(e.target.value);
              e.target.value = '';
            }}
            className="p-2 text-xs rounded-xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] focus:outline-none font-medium"
          >
            <option value="">-- Choose a Certification --</option>
            {certifications
              .filter((c) => !selectedIds.includes(c.id))
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.provider})
                </option>
              ))}
          </select>
        </div>

        {selectedIds.length > 0 && (
          <button
            type="button"
            onClick={() => setSelectedIds([])}
            className="text-xs text-[#68736B] hover:text-[#B84040] dark:text-[#A0AFA5] dark:hover:text-[#E07A7A] flex items-center gap-1 font-bold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Clear Matrix</span>
          </button>
        )}
      </div>

      {/* Comparison Table Component */}
      <ComparisonTable certifications={selectedCerts} onRemove={removeCert} />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68736B]">Loading comparison matrix...</div>}>
      <CompareContent />
    </Suspense>
  );
}
