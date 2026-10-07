'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { encryptionConcepts } from '@/data/encryption';
import { Key, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Encryption, Cryptography & Password Derivation
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Comprehensive guide to modern symmetric ciphers, public-key mathematics, cryptographic hashing, digital signatures, and secure password storage standards.
        </p>
      </div>

      {/* Fundamental Cryptographic Distinctions Table */}
      <div className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139] mb-10 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#66705A] dark:text-[#A5AD8C] mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#66705A] dark:text-[#A5AD8C]" />
          <span>Fundamental Distinctions: Encryption vs Encoding vs Hashing vs Digital Signatures</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* Encryption */}
          <div className="p-4 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/80 dark:border-[#454139]">
            <div className="font-bold text-[#66705A] dark:text-[#A5AD8C] text-sm mb-1">1. Encryption</div>
            <p className="text-[#68645D] dark:text-[#B8B1A5] mb-2 leading-relaxed">
              Transforms plaintext into ciphertext using a secret key. Reversible ONLY with the correct decryption key.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] font-mono">Purpose: Confidentiality</div>
            <div className="text-[11px] text-[#66705A] dark:text-[#A5AD8C] font-semibold mt-1">Ex: AES-256-GCM, RSA</div>
          </div>

          {/* Encoding */}
          <div className="p-4 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/80 dark:border-[#454139]">
            <div className="font-bold text-[#B89B62] text-sm mb-1">2. Encoding</div>
            <p className="text-[#68645D] dark:text-[#B8B1A5] mb-2 leading-relaxed">
              Transforms data format for safe transmission over systems (NOT for security). Reversible by ANYONE without keys.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] font-mono">Purpose: Data Usability</div>
            <div className="text-[11px] text-[#B89B62] font-semibold mt-1">Ex: Base64, ASCII, URL Encoding</div>
          </div>

          {/* Hashing */}
          <div className="p-4 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/80 dark:border-[#454139]">
            <div className="font-bold text-[#657A58] dark:text-[#A5AD8C] text-sm mb-1">3. Hashing</div>
            <p className="text-[#68645D] dark:text-[#B8B1A5] mb-2 leading-relaxed">
              One-way mathematical transformation producing a fixed-length digest. Mathematically irreversible.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] font-mono">Purpose: Integrity Verification</div>
            <div className="text-[11px] text-[#657A58] dark:text-[#A5AD8C] font-semibold mt-1">Ex: SHA-256, SHA-3, BLAKE2</div>
          </div>

          {/* Digital Signature */}
          <div className="p-4 rounded-lg bg-[#EAE3D5]/50 dark:bg-[#292722]/60 border border-[#D8D0C2]/80 dark:border-[#454139]">
            <div className="font-bold text-[#B56F4A] dark:text-[#C58A68] text-sm mb-1">4. Digital Signature</div>
            <p className="text-[#68645D] dark:text-[#B8B1A5] mb-2 leading-relaxed">
              Hash of data encrypted with sender's private key. Verified using sender's public key.
            </p>
            <div className="text-[11px] text-[#68645D] dark:text-[#B8B1A5] font-mono">Purpose: Authenticity & Non-repudiation</div>
            <div className="text-[11px] text-[#B56F4A] dark:text-[#C58A68] font-semibold mt-1">Ex: Ed25519, ECDSA, RSA-PSS</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#D8D0C2] dark:border-[#454139] pb-3">
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedType(t.id)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
              selectedType === t.id
                ? 'bg-[#66705A] text-[#FFFDF8] dark:bg-[#A5AD8C] dark:text-[#1F1E1B] shadow-sm'
                : 'text-[#68645D] dark:text-[#B8B1A5] hover:bg-[#EAE3D5] dark:hover:bg-[#292722]'
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
            className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex flex-col justify-between hover:border-[#66705A] dark:hover:border-[#A5AD8C] transition-all scroll-mt-24 shadow-sm"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                  {concept.category}
                </span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded text-[11px] font-semibold border uppercase tracking-wider',
                    concept.status === 'current' &&
                      'bg-[#657A58]/15 text-[#445638] dark:text-[#A5AD8C] border-[#657A58]/30',
                    concept.status === 'legacy' &&
                      'bg-[#B89B62]/15 text-[#82662c] dark:text-[#D1B87F] border-[#B89B62]/30',
                    concept.status === 'deprecated' &&
                      'bg-[#A45143]/15 text-[#7A3428] dark:text-[#E08A7C] border-[#A45143]/30'
                  )}
                >
                  {concept.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                {concept.name}
              </h3>

              {/* Definition */}
              <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
                <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed font-mono">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Key size if applicable */}
              {concept.keySize && (
                <div className="mb-3 text-xs flex items-center gap-1.5 text-[#68645D] dark:text-[#B8B1A5]">
                  <Key className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A5AD8C]" />
                  <span>Key / Block Length: </span>
                  <span className="font-mono font-semibold text-[#242424] dark:text-[#F1EDE4]">
                    {concept.keySize}
                  </span>
                </div>
              )}
            </div>

            {/* Use Cases */}
            {concept.useCases && concept.useCases.length > 0 && (
              <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60">
                <span className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] block mb-1.5">
                  Standard Use Cases:
                </span>
                <ul className="list-disc list-inside text-xs text-[#68645D] dark:text-[#B8B1A5] space-y-1">
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
