'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { authenticationConcepts } from '@/data/authentication';
import { KeyRound, ShieldCheck, UserCheck, Lock } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';
import { getAuthIllustration } from '@/components/visuals/AuthIllustrations';
import { useI18n } from '@/lib/i18n';

export default function AuthenticationKnowledgePage() {
  const { t } = useI18n();
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: t('nav.knowledge') || 'Knowledge Base', href: '/knowledge' },
          { label: 'Authentication & Access Control' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1.5">
          <KeyRound className="w-4 h-4" />
          <span>// IDENTITY_&amp;_ACCESS_MANAGEMENT</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Authentication, Authorization &amp; Access Control
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Deep technical breakdown of authentication factors, the AAA security framework, passwordless standards (Passkeys / FIDO2), and enterprise federated identity protocols (OAuth 2.0, OpenID Connect, SAML).
        </p>
      </div>

      {/* Visual Conceptual Flow: User -> Authentication -> Authorization -> Resource */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-10 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-5 text-center">
          // ACCESS_CONTROL_LIFECYCLE_FLOW
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Step 1: User */}
          <div className="p-5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-center text-[#18221C] dark:text-[#E8F5E9] mb-2">
              <UserCheck className="w-5 h-5 text-[#267747] dark:text-[#00FF66]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F6B62] dark:text-[#91A596]">1. Identification</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9] mt-0.5">&quot;Who are you?&quot;</h4>
            <p className="text-[11px] text-[#5F6B62] dark:text-[#91A596] mt-1 font-sans">User claims identity via username, email, or client certificate.</p>
          </div>

          {/* Step 2: Authentication */}
          <div className="p-5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-center text-[#267747] dark:text-[#00FF66] mb-2">
              <KeyRound className="w-5 h-5 text-[#267747] dark:text-[#00FF66]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66]">2. Authentication</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9] mt-0.5">&quot;Prove it.&quot;</h4>
            <p className="text-[11px] text-[#5F6B62] dark:text-[#91A596] mt-1 font-sans">Verification through Password, TOTP, FIDO2 Passkey, or Biometric proof.</p>
          </div>

          {/* Step 3: Authorization */}
          <div className="p-5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex items-center justify-center text-[#D97745] dark:text-[#D9A441] mb-2">
              <ShieldCheck className="w-5 h-5 text-[#D97745] dark:text-[#D9A441]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D97745] dark:text-[#D9A441]">3. Authorization</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9] mt-0.5">&quot;What can you do?&quot;</h4>
            <p className="text-[11px] text-[#5F6B62] dark:text-[#91A596] mt-1 font-sans">RBAC/ABAC policy engine grants scoped permissions (JWT, OAuth scopes).</p>
          </div>

          {/* Step 4: Accounting / Audit */}
          <div className="p-5 rounded-xl bg-[#E8F5E9] dark:bg-[#0D2214] border border-[#267747]/30 dark:border-[#1B2A1F] text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-lg bg-white dark:bg-[#050705] border border-[#267747] dark:border-[#00FF66] flex items-center justify-center text-[#267747] dark:text-[#00FF66] mb-2">
              <Lock className="w-5 h-5 text-[#267747] dark:text-[#00FF66]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66]">4. Accounting</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9] mt-0.5">&quot;What did you do?&quot;</h4>
            <p className="text-[11px] text-[#267747] dark:text-[#00FF66] font-bold mt-1">SIEM audit trail &amp; non-repudiation logging.</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#DDE5DE] dark:border-[#1B2A1F] pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border',
              selectedCategory === cat.id
                ? 'bg-[#267747] text-white border-[#267747] dark:bg-[#00FF66] dark:text-[#050705] dark:border-[#00FF66] shadow-xs'
                : 'bg-[#FFFFFF] text-[#5F6B62] border-[#DDE5DE] hover:text-[#18221C] dark:bg-[#0E1510] dark:text-[#91A596] dark:hover:text-[#E8F5E9] dark:border-[#1B2A1F]'
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
            className="group rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] p-5 flex flex-col justify-between hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all duration-200 scroll-mt-24 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F7F9F6] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  {concept.category}
                </span>
              </div>

              {/* Visual Illustration Banner */}
              <div className="w-full h-36 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] p-2.5 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-200">
                {getAuthIllustration(concept.id)}
              </div>

              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] mb-2 group-hover:text-[#267747] dark:group-hover:text-[#00FF66] transition-colors">
                {concept.name}
              </h3>

              <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 leading-relaxed font-sans">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-4 text-xs">
                <span className="font-bold text-[#267747] dark:text-[#00FF66] block mb-1 text-[10px] uppercase">
                  // MECHANISM
                </span>
                <p className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs">
                <div className="p-2.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  <span className="font-bold text-[#267747] dark:text-[#00FF66] block mb-1 text-[10px] uppercase">
                    + ADVANTAGES
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-1 font-sans">
                    {concept.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FDEDEC] dark:bg-[#271211] border border-[#F5C6CB] dark:border-[#441E1C]">
                  <span className="font-bold text-[#C62828] dark:text-[#FF3B30] block mb-1 text-[10px] uppercase">
                    - ATTACK RISKS
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-1 font-sans">
                    {concept.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-wrap items-center gap-1">
              <span className="text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] mr-1">CASES:</span>
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
