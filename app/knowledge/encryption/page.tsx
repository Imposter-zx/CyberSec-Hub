'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { encryptionConcepts } from '@/data/encryption';
import { Lock, Key, Shield, Hash, RefreshCw, FileCode, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
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
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Encryption, Cryptography & Password Derivation
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive guide to modern symmetric ciphers, public-key mathematics, cryptographic hashing, digital signatures, and secure password storage standards.
        </p>
      </div>

      {/* Fundamental Cryptographic Distinctions Table */}
      <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 mb-10 shadow-lg">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span>Fundamental Distinctions: Encryption vs Encoding vs Hashing vs Digital Signatures</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* Encryption */}
          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-blue-300 text-sm mb-1">1. Encryption</div>
            <p className="text-slate-300 mb-2 leading-relaxed">
              Transforms plaintext into ciphertext using a secret key. Reversible ONLY with the correct decryption key.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">Purpose: Confidentiality</div>
            <div className="text-[11px] text-blue-400 mt-1">Ex: AES-256-GCM, RSA</div>
          </div>

          {/* Encoding */}
          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-amber-300 text-sm mb-1">2. Encoding</div>
            <p className="text-slate-300 mb-2 leading-relaxed">
              Transforms data format for safe transmission over systems (NOT for security). Reversible by ANYONE without keys.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">Purpose: Data Usability</div>
            <div className="text-[11px] text-amber-400 mt-1">Ex: Base64, ASCII, URL Encoding</div>
          </div>

          {/* Hashing */}
          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-emerald-300 text-sm mb-1">3. Hashing</div>
            <p className="text-slate-300 mb-2 leading-relaxed">
              One-way mathematical transformation producing a fixed-length digest. Mathematically irreversible.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">Purpose: Integrity Verification</div>
            <div className="text-[11px] text-emerald-400 mt-1">Ex: SHA-256, SHA-3, BLAKE2</div>
          </div>

          {/* Digital Signature */}
          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-purple-300 text-sm mb-1">4. Digital Signature</div>
            <p className="text-slate-300 mb-2 leading-relaxed">
              Hash of data encrypted with sender's private key. Verified using sender's public key.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">Purpose: Authenticity & Non-repudiation</div>
            <div className="text-[11px] text-purple-400 mt-1">Ex: Ed25519, ECDSA, RSA-PSS</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-3">
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedType(t.id)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
              selectedType === t.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
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
            className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all scroll-mt-24"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {concept.category}
                </span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded text-xs font-medium border uppercase tracking-wider',
                    concept.status === 'current' &&
                      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
                    concept.status === 'legacy' &&
                      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
                    concept.status === 'deprecated' &&
                      'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
                  )}
                >
                  {concept.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {concept.name}
              </h3>

              {/* Definition */}
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {concept.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  How It Works:
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed font-mono">
                  {concept.howItWorks}
                </p>
              </div>

              {/* Key size if applicable */}
              {concept.keySize && (
                <div className="mb-3 text-xs flex items-center gap-1.5 text-slate-500">
                  <Key className="w-3.5 h-3.5 text-blue-500" />
                  <span>Key / Block Length: </span>
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                    {concept.keySize}
                  </span>
                </div>
              )}
            </div>

            {/* Use Cases */}
            {concept.useCases && concept.useCases.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-medium text-slate-400 block mb-1.5">
                  Standard Use Cases:
                </span>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
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
