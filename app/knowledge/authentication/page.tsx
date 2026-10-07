'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { authenticationConcepts } from '@/data/authentication';
import { KeyRound, ShieldCheck, UserCheck, Lock } from 'lucide-react';
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
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Authentication, Authorization & Modern Access Control
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Deep technical breakdown of authentication factors, the AAA security framework, passwordless standards (Passkeys / FIDO2), and enterprise federated identity protocols (OAuth 2.0, OpenID Connect, SAML).
        </p>
      </div>

      {/* Visual Conceptual Flow: User -> Authentication -> Authorization -> Resource */}
      <div className="p-6 rounded-xl bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2] dark:border-[#454139] mb-10 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-[#66705A] dark:text-[#A5AD8C] mb-4 text-center">
          The Access Control Lifecycle: Conceptual Flow
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Step 1: User */}
          <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] text-center shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#EAE3D5] dark:bg-[#292722] flex items-center justify-center text-[#242424] dark:text-[#F1EDE4] mb-2">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#242424] dark:text-[#F1EDE4] mb-1">1. User / Client</h4>
            <p className="text-[11px] text-[#68645D] dark:text-[#B8B1A5]">Presents identity claim (Username, Certificate)</p>
          </div>

          {/* Step 2: Authentication */}
          <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#66705A]/40 text-center shadow-sm relative">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#66705A]/15 dark:bg-[#A5AD8C]/15 flex items-center justify-center text-[#66705A] dark:text-[#A5AD8C] mb-2">
              <KeyRound className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#242424] dark:text-[#F1EDE4] mb-1">2. Authentication</h4>
            <p className="text-[11px] text-[#68645D] dark:text-[#B8B1A5]">"Who are you?" (Password, FIDO2 Key, Biometrics)</p>
          </div>

          {/* Step 3: Authorization */}
          <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#B56F4A]/40 text-center shadow-sm relative">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#B56F4A]/15 dark:bg-[#C58A68]/15 flex items-center justify-center text-[#B56F4A] dark:text-[#C58A68] mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#242424] dark:text-[#F1EDE4] mb-1">3. Authorization</h4>
            <p className="text-[11px] text-[#68645D] dark:text-[#B8B1A5]">"What are you allowed to do?" (RBAC/ABAC Policies)</p>
          </div>

          {/* Step 4: Resource + Accounting */}
          <div className="p-4 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#657A58]/40 text-center shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#657A58]/15 dark:bg-[#657A58]/20 flex items-center justify-center text-[#657A58] dark:text-[#A5AD8C] mb-2">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#242424] dark:text-[#F1EDE4] mb-1">4. Resource Access</h4>
            <p className="text-[11px] text-[#68645D] dark:text-[#B8B1A5]">Data provided + Immutable audit log created</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#D8D0C2] dark:border-[#454139] pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
              selectedCategory === cat.id
                ? 'bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm'
                : 'text-[#68645D] dark:text-[#B8B1A5] hover:bg-[#EAE3D5] dark:hover:bg-[#292722]'
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
            className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex flex-col justify-between hover:border-[#66705A] dark:hover:border-[#A5AD8C] transition-all scroll-mt-24 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                  {concept.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                {concept.name}
              </h3>

              <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
                <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-lg bg-[#657A58]/10 border border-[#657A58]/25">
                  <span className="font-semibold text-[#445638] dark:text-[#A5AD8C] block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-1">
                    {concept.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-[#A45143]/10 border border-[#A45143]/25">
                  <span className="font-semibold text-[#7A3428] dark:text-[#E08A7C] block mb-1 text-[11px]">
                    Limitations / Attack Risks:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-1">
                    {concept.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] mr-1">Use Cases:</span>
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
