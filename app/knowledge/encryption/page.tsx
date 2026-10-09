'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { encryptionConcepts } from '@/data/encryption';
import { Key, Shield, Lock, Terminal } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Encryption & Cryptography' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1.5">
          <Lock className="w-4 h-4" />
          <span>// CRYPTOGRAPHIC_PRIMITIVES_&amp;_KEY_EXCHANGE</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Encryption, Cryptography &amp; Key Derivation
        </h1>
        <p className="text-sm text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Comprehensive guide to modern symmetric ciphers, public-key mathematics, cryptographic hashing, digital signatures, and secure password storage standards.
        </p>
      </div>

      {/* Interactive Encryption Flow Diagram */}
      <div className="mb-10">
        <EncryptionFlowDiagram />
      </div>

      {/* Fundamental Cryptographic Distinctions Table */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0E1510] text-[#E8F5E9] border border-[#1B2A1F] mb-10 shadow-xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#00FF66] mb-5 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#00FF66]" />
          <span>// FUNDAMENTAL_DISTINCTIONS: ENCRYPTION vs ENCODING vs HASHING vs DIGITAL SIGNATURES</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* Encryption */}
          <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <div className="font-bold text-[#00FF66] text-sm mb-1">1. Encryption</div>
            <p className="text-[#91A596] mb-2 leading-relaxed font-sans">
              Transforms plaintext into ciphertext using a secret key. Reversible ONLY with the correct key.
            </p>
            <div className="text-[10px] text-[#91A596] font-mono">Purpose: Confidentiality</div>
            <div className="text-[10px] text-[#00FF66] font-bold mt-1">Ex: AES-256-GCM, RSA-4096</div>
          </div>

          {/* Encoding */}
          <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <div className="font-bold text-[#D9A441] text-sm mb-1">2. Encoding</div>
            <p className="text-[#91A596] mb-2 leading-relaxed font-sans">
              Transforms data format for transmission over systems (NOT for security). Reversible by ANYONE.
            </p>
            <div className="text-[10px] text-[#91A596] font-mono">Purpose: Data Usability</div>
            <div className="text-[10px] text-[#D9A441] font-bold mt-1">Ex: Base64, ASCII, URL Encoding</div>
          </div>

          {/* Hashing */}
          <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <div className="font-bold text-[#42C2A8] text-sm mb-1">3. Hashing</div>
            <p className="text-[#91A596] mb-2 leading-relaxed font-sans">
              One-way mathematical transformation producing a fixed-length digest. Mathematically irreversible.
            </p>
            <div className="text-[10px] text-[#91A596] font-mono">Purpose: Integrity Verification</div>
            <div className="text-[10px] text-[#42C2A8] font-bold mt-1">Ex: SHA-256, SHA-3, BLAKE3</div>
          </div>

          {/* Digital Signature */}
          <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
            <div className="font-bold text-[#FF3B30] text-sm mb-1">4. Digital Signature</div>
            <p className="text-[#91A596] mb-2 leading-relaxed font-sans">
              Hash of data encrypted with sender&apos;s private key. Verified using sender&apos;s public key.
            </p>
            <div className="text-[10px] text-[#91A596] font-mono">Purpose: Authenticity &amp; Non-repudiation</div>
            <div className="text-[10px] text-[#FF3B30] font-bold mt-1">Ex: Ed25519, ECDSA, RSA-PSS</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#1B2A1F] pb-3">
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedType(t.id)}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border',
              selectedType === t.id
                ? 'bg-[#00FF66] text-[#050705] border-[#00FF66] shadow-xs'
                : 'bg-[#0E1510] text-[#91A596] hover:text-[#E8F5E9] border-[#1B2A1F]'
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
            className="p-6 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] flex flex-col justify-between hover:border-[#00FF66] hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all scroll-mt-24 shadow-xs"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#1B2A1F]">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#050705] text-[#00FF66] border border-[#1B2A1F]">
                  {concept.category}
                </span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider',
                    concept.status === 'current' &&
                      'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]',
                    concept.status === 'legacy' &&
                      'bg-[#241C0E] text-[#D9A441] border-[#382B17]',
                    concept.status === 'deprecated' &&
                      'bg-[#271211] text-[#FF3B30] border-[#441E1C]'
                  )}
                >
                  {concept.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#E8F5E9] mb-2">
                {concept.name}
              </h3>

              {/* Definition */}
              <p className="text-xs text-[#91A596] mb-4 leading-relaxed font-sans">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F] mb-4 text-xs">
                <span className="font-bold text-[#00FF66] block mb-1 text-[10px] uppercase">
                  // MECHANISM:
                </span>
                <p className="text-[#91A596] text-[11px] leading-relaxed font-mono">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Key size if applicable */}
              {concept.keySize && (
                <div className="mb-3 text-xs flex items-center gap-1.5 text-[#91A596]">
                  <Key className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>KEY LENGTH: </span>
                  <span className="font-mono font-bold text-[#E8F5E9]">
                    {concept.keySize}
                  </span>
                </div>
              )}
            </div>

            {/* Use Cases */}
            {concept.useCases && concept.useCases.length > 0 && (
              <div className="pt-3 border-t border-[#1B2A1F]">
                <span className="text-[10px] font-bold text-[#91A596] block mb-1.5 uppercase">
                  STANDARD USE CASES:
                </span>
                <ul className="list-disc list-inside text-xs text-[#91A596] space-y-1 font-sans">
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
