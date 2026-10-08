'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { authenticationConcepts } from '@/data/authentication';
import { KeyRound, ShieldCheck, UserCheck, Lock } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';
import { getAuthIllustration } from '@/components/visuals/AuthIllustrations';

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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4C9A91] dark:text-[#7BB8B2] mb-1.5">
          <KeyRound className="w-4 h-4" />
          <span>Identity, Access & Cryptographic Proof</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Authentication, Authorization & Modern Access Control
        </h1>
        <p className="text-sm text-[#68736B] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Deep technical breakdown of authentication factors, the AAA security framework, passwordless standards (Passkeys / FIDO2), and enterprise federated identity protocols (OAuth 2.0, OpenID Connect, SAML).
        </p>
      </div>

      {/* Visual Conceptual Flow: User -> Authentication -> Authorization -> Resource */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840] mb-10 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-5 text-center">
          The Access Control Lifecycle: Architectural Flow
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Step 1: User */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] flex items-center justify-center text-[#18221C] dark:text-[#E8F0EA] mb-3">
              <UserCheck className="w-6 h-6 text-[#3F7D5A] dark:text-[#6AAF8A]" />
            </div>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">1. User / Principal</h4>
            <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Presents identity claim (Username, Client ID, Cert)</p>
          </div>

          {/* Step 2: Authentication */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#3F7D5A]/50 text-center shadow-xs relative">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 flex items-center justify-center text-[#3F7D5A] dark:text-[#6AAF8A] mb-3">
              <KeyRound className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">2. Authentication</h4>
            <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">"Who are you?" (Password, FIDO2 Key, Biometric)</p>
          </div>

          {/* Step 3: Authorization */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#E58A4E]/50 text-center shadow-xs relative">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FDF2EA] dark:bg-[#E58A4E]/20 flex items-center justify-center text-[#E58A4E] dark:text-[#EDA574] mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">3. Authorization</h4>
            <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">"What are you allowed to do?" (RBAC/ABAC Scopes)</p>
          </div>

          {/* Step 4: Resource + Accounting */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#4C9A91]/50 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EBF5F4] dark:bg-[#4C9A91]/20 flex items-center justify-center text-[#4C9A91] dark:text-[#7BB8B2] mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">4. Resource & Audit</h4>
            <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Data delivered + Immutable audit telemetry created</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              selectedCategory === cat.id
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Authentication Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConcepts.map((concept) => (
          <div
            key={concept.id}
            id={concept.id}
            className="group rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] p-6 flex flex-col justify-between hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 scroll-mt-24 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
                  {concept.category}
                </span>
              </div>

              {/* Visual Illustration Banner */}
              <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-[#F7F9F6] to-[#EEF3EE] dark:from-[#202722] dark:to-[#181C1A] border border-[#DDE5DE]/80 dark:border-[#3A4840]/80 p-2.5 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-200">
                {getAuthIllustration(concept.id)}
              </div>

              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2 group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors">
                {concept.name}
              </h3>

              <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
                <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68736B] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-3 rounded-xl bg-[#EBF4EF] dark:bg-[#3F7D5A]/15 border border-[#DDE5DE] dark:border-[#3A4840]">
                  <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A] block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68736B] dark:text-[#A0AFA5] space-y-1">
                    {concept.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-[#FCEAEA] dark:bg-[#B84040]/15 border border-[#F7CDCD] dark:border-[#5C2424]">
                  <span className="font-bold text-[#B84040] dark:text-[#E07A7A] block mb-1 text-[11px]">
                    Limitations / Attack Risks:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68736B] dark:text-[#A0AFA5] space-y-1">
                    {concept.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] mr-1">Use Cases:</span>
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
