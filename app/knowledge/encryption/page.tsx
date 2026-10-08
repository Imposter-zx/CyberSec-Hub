'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { encryptionConcepts } from '@/data/encryption';
import { Key, Shield, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EncryptionFlowDiagram } from '@/components/visuals/SecurityDiagrams';

export default function EncryptionKnowledgePage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const types = [
    { id: 'all', label: 'All Cryptographic Concepts' },
    { id: 'symmetric', label: 'Symmetric Ciphers' },
    { id: 'asymmetric', label: 'Asymmetric Public-Key' },
    { id: 'hashing', label: 'Hashing & KDFs' },
    { id: 'concept', label: 'Core Cryptographic Primitives' },
  ];

  const filteredConcepts = encryptionConcepts.filter((c) => {
    if (selectedType === 'all') return true;
    return c.type === selectedType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Encryption & Cryptography' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D7A84B] dark:text-[#E4BF74] mb-1.5">
          <Lock className="w-4 h-4" />
          <span>Cryptographic Primitives & Key Management</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Encryption, Cryptography & Password Derivation
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Comprehensive guide to modern symmetric ciphers, public-key mathematics, cryptographic hashing, digital signatures, and secure password storage standards.
        </p>
      </div>

      {/* Interactive Encryption Flow Diagram */}
      <div className="mb-10">
        <EncryptionFlowDiagram />
      </div>

      {/* Fundamental Cryptographic Distinctions Table */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840] mb-10 shadow-xs">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-5 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#3F7D5A] dark:text-[#6AAF8A]" />
          <span>Fundamental Distinctions: Encryption vs Encoding vs Hashing vs Digital Signatures</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* Encryption */}
          <div className="p-4.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
            <div className="font-extrabold text-[#3F7D5A] dark:text-[#6AAF8A] text-sm mb-1">1. Encryption</div>
            <p className="text-[#68645D] dark:text-[#A0AFA5] mb-2 leading-relaxed">
              Transforms plaintext into ciphertext using a secret key. Reversible ONLY with the correct decryption key.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#A0AFA5] font-mono">Purpose: Confidentiality</div>
            <div className="text-[11px] text-[#3F7D5A] dark:text-[#6AAF8A] font-bold mt-1">Ex: AES-256-GCM, RSA</div>
          </div>

          {/* Encoding */}
          <div className="p-4.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
            <div className="font-extrabold text-[#D7A84B] dark:text-[#E4BF74] text-sm mb-1">2. Encoding</div>
            <p className="text-[#68645D] dark:text-[#A0AFA5] mb-2 leading-relaxed">
              Transforms data format for safe transmission over systems (NOT for security). Reversible by ANYONE without keys.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#A0AFA5] font-mono">Purpose: Data Usability</div>
            <div className="text-[11px] text-[#D7A84B] dark:text-[#E4BF74] font-bold mt-1">Ex: Base64, ASCII, URL Encoding</div>
          </div>

          {/* Hashing */}
          <div className="p-4.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
            <div className="font-extrabold text-[#4C9A91] dark:text-[#7BB8B2] text-sm mb-1">3. Hashing</div>
            <p className="text-[#68645D] dark:text-[#A0AFA5] mb-2 leading-relaxed">
              One-way mathematical transformation producing a fixed-length digest. Mathematically irreversible.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#A0AFA5] font-mono">Purpose: Integrity Verification</div>
            <div className="text-[11px] text-[#4C9A91] dark:text-[#7BB8B2] font-bold mt-1">Ex: SHA-256, SHA-3, BLAKE2</div>
          </div>

          {/* Digital Signature */}
          <div className="p-4.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
            <div className="font-extrabold text-[#E58A4E] dark:text-[#EDA574] text-sm mb-1">4. Digital Signature</div>
            <p className="text-[#68645D] dark:text-[#A0AFA5] mb-2 leading-relaxed">
              Hash of data encrypted with sender's private key. Verified using sender's public key.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#A0AFA5] font-mono">Purpose: Authenticity & Non-repudiation</div>
            <div className="text-[11px] text-[#E58A4E] dark:text-[#EDA574] font-bold mt-1">Ex: Ed25519, ECDSA, RSA-PSS</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#DDE5DE] dark:border-[#3A4840] pb-3">
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedType(t.id)}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all',
              selectedType === t.id
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:bg-[#EEF3EE] dark:hover:bg-[#202722]'
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid of Cryptography Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredConcepts.map((concept) => (
          <div
            key={concept.id}
            id={concept.id}
            className="p-6.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg transition-all scroll-mt-24 shadow-xs"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
                  {concept.category}
                </span>
                <span
                  className={cn(
                    'px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wider',
                    concept.status === 'current' &&
                      'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border-[#DDE5DE] dark:border-[#3A4840]',
                    concept.status === 'legacy' &&
                      'bg-[#FDF6E7] text-[#A67B2E] dark:bg-[#D7A84B]/20 dark:text-[#E4BF74] border-[#F2E5C9] dark:border-[#524426]',
                    concept.status === 'deprecated' &&
                      'bg-[#FCEAEA] text-[#B84040] dark:bg-[#B84040]/20 dark:text-[#E07A7A] border-[#F7CDCD] dark:border-[#5C2424]'
                  )}
                >
                  {concept.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">
                {concept.name}
              </h3>

              {/* Definition */}
              <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
                <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed font-mono">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Key size if applicable */}
              {concept.keySize && (
                <div className="mb-3 text-xs flex items-center gap-1.5 text-[#68645D] dark:text-[#A0AFA5]">
                  <Key className="w-3.5 h-3.5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
                  <span>Key / Block Length: </span>
                  <span className="font-mono font-bold text-[#18221C] dark:text-[#E8F0EA]">
                    {concept.keySize}
                  </span>
                </div>
              )}
            </div>

            {/* Use Cases */}
            {concept.useCases && concept.useCases.length > 0 && (
              <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60">
                <span className="text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] block mb-1.5">
                  Standard Use Cases:
                </span>
                <ul className="list-disc list-inside text-xs text-[#68645D] dark:text-[#A0AFA5] space-y-1">
                  {concept.useCases.map((uc, idx) => (
                    <li key={idx}>{uc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
