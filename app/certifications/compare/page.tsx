'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { certifications } from '@/data/certifications';
import { RefreshCw } from 'lucide-react';

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
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Cybersecurity Certification Comparison Tool
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Compare exam formats, practical vs theoretical styles, costs, duration, renewal policies, and required experience side-by-side to make informed career decisions.
        </p>
      </div>

      {/* Preset Comparisons */}
      <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] mb-8 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-[#68645D] dark:text-[#B8B1A5] mb-3">
          Popular Benchmark Comparisons
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => loadPreset(['comptia-security-plus', 'comptia-cysa-plus'])}
            className="px-3 py-1.5 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] font-semibold text-[#242424] dark:text-[#F1EDE4] transition-colors"
          >
            Security+ vs CySA+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['ine-ejpt', 'tcm-pnpt', 'oscp-plus'])}
            className="px-3 py-1.5 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] font-semibold text-[#242424] dark:text-[#F1EDE4] transition-colors"
          >
            eJPT vs PNPT vs OSCP+
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['oswa', 'oswe'])}
            className="px-3 py-1.5 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] font-semibold text-[#242424] dark:text-[#F1EDE4] transition-colors"
          >
            OSWA (Web Black-Box) vs OSWE (White-Box Code Audit)
          </button>
          <button
            type="button"
            onClick={() => loadPreset(['giac-gsec', 'isc2-cissp', 'isaca-cism'])}
            className="px-3 py-1.5 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] font-semibold text-[#242424] dark:text-[#F1EDE4] transition-colors"
          >
            GSEC vs CISSP vs CISM
          </button>
        </div>
      </div>

      {/* Add Certification Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-[#242424] dark:text-[#F1EDE4]">
            Add Certification to Matrix:
          </label>
          <select
            onChange={(e) => {
              addCert(e.target.value);
              e.target.value = '';
            }}
            className="p-2 text-xs rounded-lg bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] text-[#242424] dark:text-[#F1EDE4] focus:outline-none"
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
            className="text-xs text-[#68645D] hover:text-[#A45143] dark:text-[#B8B1A5] dark:hover:text-[#E08A7C] flex items-center gap-1 font-medium transition-colors"
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
    <Suspense fallback={<div className="p-8 text-center text-xs text-[#68645D]">Loading comparison matrix...</div>}>
      <CompareContent />
    </Suspense>
  );
}
