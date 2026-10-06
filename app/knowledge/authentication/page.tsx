'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { authenticationConcepts } from '@/data/authentication';
import { KeyRound, ShieldCheck, UserCheck, Lock, ArrowRight, Layers, Smartphone, Fingerprint, Key } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';

export default function AuthenticationKnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Concepts' },
    { id: 'Core Concept', label: 'AAA Architecture' },
    { id: 'Knowledge Factor', label: 'Something You Know' },
    { id: 'Possession Factor', label: 'Something You Have' },
    { id: 'Biometric Factor', label: 'Something You Are' },
    { id: 'Modern Authentication', label: 'Modern Protocols (OAuth/OIDC/SAML/Passkeys)' },
  ];

  const filteredConcepts = authenticationConcepts.filter((c) => {
    if (selectedCategory === 'all') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Authentication & Access Control' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Authentication, Authorization & Modern Access Control
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Deep technical breakdown of authentication factors, the AAA security framework, passwordless standards (Passkeys / FIDO2), and enterprise federated identity protocols (OAuth 2.0, OpenID Connect, SAML).
        </p>
      </div>

      {/* Visual Conceptual Flow: User -> Authentication -> Authorization -> Resource */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-blue-900/10 border border-blue-200 dark:border-blue-900/60 mb-10">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 text-center">
          The Access Control Lifecycle: Conceptual Flow
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Step 1: User */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 mb-2">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">1. User / Client</h4>
            <p className="text-[11px] text-slate-500">Presents identity claim (Username, Certificate)</p>
          </div>

          {/* Step 2: Authentication */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-500/40 text-center shadow-sm relative">
            <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
              <KeyRound className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">2. Authentication</h4>
            <p className="text-[11px] text-slate-500">"Who are you?" (Password, FIDO2 Key, Biometrics)</p>
          </div>

          {/* Step 3: Authorization */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-indigo-500/40 text-center shadow-sm relative">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">3. Authorization</h4>
            <p className="text-[11px] text-slate-500">"What are you allowed to do?" (RBAC/ABAC Policies)</p>
          </div>

          {/* Step 4: Resource + Accounting */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/40 text-center shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">4. Resource Access</h4>
            <p className="text-[11px] text-slate-500">Data provided + Immutable audit log created</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Authentication Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredConcepts.map((concept) => (
          <div
            key={concept.id}
            id={concept.id}
            className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all scroll-mt-24"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {concept.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {concept.name}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  How It Works:
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300 block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    {concept.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/10">
                  <span className="font-semibold text-rose-700 dark:text-rose-300 block mb-1 text-[11px]">
                    Limitations / Attack Risks:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    {concept.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-medium text-slate-400 mr-1">Use Cases:</span>
              {concept.useCases.map((uc, idx) => (
                <Tag key={idx} label={uc} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
