'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Lock, Cpu, Server, Database, Globe, AlertTriangle, CheckCircle, ArrowRight, Layers, FileCode, Search, Terminal, Eye } from 'lucide-react';

// ==========================================
// 1. Encryption & Decryption Cryptographic Flow Diagram
// ==========================================
export const EncryptionFlowDiagram: React.FC<{ className?: string }> = ({ className }) => {
  const [mode, setMode] = useState<'symmetric' | 'asymmetric'>('symmetric');

  return (
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
            Visual Cryptographic Pipeline
          </div>
          <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
            {mode === 'symmetric' ? 'Symmetric Cryptography (Shared Secret)' : 'Asymmetric Cryptography (Public / Private Key Pair)'}
          </h3>
        </div>
        <div className="inline-flex rounded-xl p-1 bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <button
            type="button"
            onClick={() => setMode('symmetric')}
            className={cn(
              'px-3 py-1 rounded-lg text-xs font-bold transition-all',
              mode === 'symmetric'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C]'
            )}
          >
            Symmetric (AES-256)
          </button>
          <button
            type="button"
            onClick={() => setMode('asymmetric')}
            className={cn(
              'px-3 py-1 rounded-lg text-xs font-bold transition-all',
              mode === 'asymmetric'
                ? 'bg-[#3F7D5A] text-white shadow-xs'
                : 'text-[#68736B] dark:text-[#A0AFA5] hover:text-[#18221C]'
            )}
          >
            Asymmetric (RSA / ECC)
          </button>
        </div>
      </div>

      {/* Interactive Process Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-center">
        {/* Step 1: Plaintext Input */}
        <div className="p-4 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-[#262E28] flex items-center justify-center text-[#3F7D5A] dark:text-[#6AAF8A] mb-2 shadow-xs">
            <FileCode className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#68736B] dark:text-[#A0AFA5] block">
            Step 1
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Plaintext</h4>
          <p className="font-mono text-[11px] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] truncate">
            "CONFIDENTIAL_PAYLOAD"
          </p>
        </div>

        {/* Arrow + Key 1 */}
        <div className="p-4 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426] text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-[#262E28] flex items-center justify-center text-[#D7A84B] mb-2 shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A67B2E] dark:text-[#E4BF74] block">
            Cipher Key
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
            {mode === 'symmetric' ? 'Shared Secret Key' : "Recipient's Public Key"}
          </h4>
          <span className="text-[10px] font-mono text-[#68736B] dark:text-[#A0AFA5]">
            {mode === 'symmetric' ? '256-bit AES Key' : 'Public Encryption'}
          </span>
        </div>

        {/* Step 3: Ciphertext */}
        <div className="p-4 rounded-2xl bg-[#FCEAEA] dark:bg-[#2E1E1E] border border-[#F7CDCD] dark:border-[#5C2424] text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-[#262E28] flex items-center justify-center text-[#B84040] mb-2 shadow-xs">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B84040] block">
            Encrypted
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Ciphertext</h4>
          <p className="font-mono text-[10px] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#DDE5DE] dark:border-[#3A4840] text-[#B84040] truncate">
            0x9F4C2A88...#E9B1
          </p>
        </div>

        {/* Arrow + Key 2 */}
        <div className="p-4 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925] text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-[#262E28] flex items-center justify-center text-[#E58A4E] mb-2 shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C97438] block">
            Decryption Key
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">
            {mode === 'symmetric' ? 'Same Secret Key' : "Recipient's Private Key"}
          </h4>
          <span className="text-[10px] font-mono text-[#68736B] dark:text-[#A0AFA5]">
            {mode === 'symmetric' ? 'Inverted S-Box' : 'Kept Strictly Secret'}
          </span>
        </div>

        {/* Step 5: Decrypted Plaintext */}
        <div className="p-4 rounded-2xl bg-[#EBF4EF] dark:bg-[#1E2B23] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-[#262E28] flex items-center justify-center text-[#3F7D5A] dark:text-[#6AAF8A] mb-2 shadow-xs">
            <CheckCircle className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] block">
            Verified
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Plaintext</h4>
          <p className="font-mono text-[11px] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#DDE5DE] dark:border-[#3A4840] text-[#18221C] dark:text-[#E8F0EA] truncate">
            "CONFIDENTIAL_PAYLOAD"
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Firewall Packet & Application Layer Inspection Flow
// ==========================================
export const FirewallInspectionDiagram: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
          Defensive Boundary Architecture
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Multi-Layer Firewall Packet Inspection Engine
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          Visualizing how packets pass through Layer 3/4 stateful tracking and Layer 7 Next-Gen Application inspection filters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
        {/* Stage 1: Incoming Ingress */}
        <div className="p-5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-[#262E28] text-[#18221C] dark:text-[#E8F0EA]">
                Ingress Packets
              </span>
              <Globe className="w-4 h-4 text-[#3F7D5A]" />
            </div>
            <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Public Internet Traffic</h4>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-white dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex items-center justify-between">
                <span>TCP :443 HTTPS</span>
                <span className="text-[#3F7D5A] font-bold">Valid</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex items-center justify-between">
                <span>TCP :23 TELNET</span>
                <span className="text-[#B84040] font-bold">Risky</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex items-center justify-between">
                <span>UDP :1900 SSDP</span>
                <span className="text-[#E58A4E] font-bold">Flood</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 2: Layer 3/4 Packet Filtering */}
        <div className="p-5 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-[#262E28] text-[#A67B2E]">
                Layer 3 / 4 Filter
              </span>
              <Layers className="w-4 h-4 text-[#D7A84B]" />
            </div>
            <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Stateful Table Check</h4>
            <ul className="text-xs text-[#68645D] dark:text-[#A0AFA5] space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-[#3F7D5A] font-bold mt-0.5">+</span>
                <span>Source/Destination IP matching</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#3F7D5A] font-bold mt-0.5">+</span>
                <span>TCP 3-Way Handshake validation</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#B84040] font-bold mt-0.5">-</span>
                <span className="text-[#B84040]">DROP Telnet & unregistered ports</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-[#F2E5C9] dark:border-[#524426] text-[10px] font-mono text-[#A67B2E]">
            Connection state: ESTABLISHED
          </div>
        </div>

        {/* Stage 3: Layer 7 Next-Gen Application Inspection (WAF / IPS) */}
        <div className="p-5 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-[#262E28] text-[#C97438]">
                Layer 7 NGFW / WAF
              </span>
              <Shield className="w-4 h-4 text-[#E58A4E]" />
            </div>
            <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Deep Packet Inspection (DPI)</h4>
            <ul className="text-xs text-[#68645D] dark:text-[#A0AFA5] space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-[#3F7D5A] font-bold mt-0.5">+</span>
                <span>TLS Decryption & Cert analysis</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#B84040] font-bold mt-0.5">-</span>
                <span className="text-[#B84040]">BLOCK SQLi / XSS HTTP payloads</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#3F7D5A] font-bold mt-0.5">+</span>
                <span>Signature & Antivirus streaming scan</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-[#F8DCB8] dark:border-[#583925] text-[10px] font-mono text-[#C97438]">
            Threat signature: Clean
          </div>
        </div>

        {/* Stage 4: Protected Corporate Network */}
        <div className="p-5 rounded-2xl bg-[#EBF4EF] dark:bg-[#1E2B23] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-[#262E28] text-[#3F7D5A]">
                Egress / Internal
              </span>
              <Server className="w-4 h-4 text-[#3F7D5A]" />
            </div>
            <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Protected LAN & Services</h4>
            <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] leading-relaxed mb-3">
              Only scrubbed, authenticated packets arrive at backend app containers and internal database clusters.
            </p>
          </div>
          <div className="p-2 rounded-xl bg-white dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
            <span className="text-xs font-mono font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">
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
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#B84040] dark:text-[#E07A7A] mb-1">
          Technical Attack Execution Walkthrough
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          SQL Injection (SQLi) Tautology Execution Flow
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          How untrusted input in unsanitized SQL concatenation breaks query syntax logic and forces full database authorization bypass.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white dark:bg-[#262E28] text-[#18221C] dark:text-[#E8F0EA]">
            Phase 1: Input Piercing
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mt-2 mb-1">Crafted Adversary Payload</h4>
          <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-3">
            Attacker submits payload with quote delimiter into the login username field:
          </p>
          <div className="font-mono text-xs p-2.5 rounded-xl bg-white dark:bg-[#181C1A] border border-[#DDE5DE] dark:border-[#3A4840] text-[#B84040]">
            admin' OR '1'='1' --
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-4.5 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925]">
          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white dark:bg-[#262E28] text-[#C97438]">
            Phase 2: Vulnerable Concatenation
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mt-2 mb-1">SQL Query Mutation</h4>
          <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-3">
            Web application builds query string using string formatting without parameterized prepared statements:
          </p>
          <div className="font-mono text-[11px] p-2.5 rounded-xl bg-white dark:bg-[#181C1A] border border-[#F8DCB8] dark:border-[#583925] text-[#18221C] dark:text-[#E8F0EA] leading-relaxed">
            SELECT * FROM users WHERE user = '<span className="text-[#B84040] font-bold">admin' OR '1'='1</span>' -- AND pass = '...';
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-4.5 rounded-2xl bg-[#FCEAEA] dark:bg-[#2E1E1E] border border-[#F7CDCD] dark:border-[#5C2424]">
          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white dark:bg-[#262E28] text-[#B84040]">
            Phase 3: Database Compromise
          </span>
          <h4 className="text-sm font-bold text-[#18221C] dark:text-[#E8F0EA] mt-2 mb-1">Tautology Evaluation</h4>
          <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mb-3">
            Since <code className="font-mono text-[#B84040]">'1'='1'</code> is always true, the WHERE clause succeeds and comments ignore the password check.
          </p>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#181C1A] border border-[#F7CDCD] dark:border-[#5C2424] text-center">
            <span className="text-xs font-bold text-[#B84040]">
              AUTHENTICATION BYPASS EXPLOITED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Attack Lifecycle: Cross-Site Scripting (XSS) Flow
// ==========================================
export const XssAttackFlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#E58A4E] dark:text-[#EDA574] mb-1">
          Client-Side Web Exploit
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Stored Cross-Site Scripting (XSS) Session Hijacking Flow
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          Visualizing how malicious JavaScript stored in a database executes in legitimate victim browsers to steal authentication session tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div className="p-4 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#68736B] dark:text-[#A0AFA5] block mb-1">Step 1</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Payload Injected</h4>
          <p className="font-mono text-[10px] text-[#B84040] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#DDE5DE] dark:border-[#3A4840] truncate">
            &lt;script&gt;fetch(...)&lt;/script&gt;
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#A67B2E] block mb-1">Step 2</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Stored in Database</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Comment or profile field saves raw unencoded script
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#C97438] block mb-1">Step 3</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Victim Browses</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Victim browser renders page and executes payload
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FCEAEA] dark:bg-[#2E1E1E] border border-[#F7CDCD] dark:border-[#5C2424] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#B84040] block mb-1">Step 4</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Cookie Stolen</h4>
          <p className="font-mono text-[10px] text-[#B84040] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#F7CDCD] dark:border-[#5C2424] truncate">
            JWT / Session Cookie Exfiltrated
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
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#4C9A91] dark:text-[#7BB8B2] mb-1">
          DFIR Incident Response Framework
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Digital Forensics Evidence Acquisition & Reconstruction
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          Order of volatility: preserving volatile memory, generating bit-stream disk images, and building a forensic super-timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-[#3F7D5A] text-white flex items-center justify-center font-bold text-xs">1</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Volatile Memory (RAM)</h4>
          </div>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
            Capture live RAM using LiME or WinPmem before machine shutdown to preserve decrypted credentials, injected processes, and active socket connections.
          </p>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-[#3F7D5A] text-white flex items-center justify-center font-bold text-xs">2</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Bit-Stream Disk Image</h4>
          </div>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
            Hardware write-blocker attached. Exact raw E01 or DD image computed alongside SHA-256 integrity hash verification.
          </p>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-[#3F7D5A] text-white flex items-center justify-center font-bold text-xs">3</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Artifact Parsing</h4>
          </div>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
            Extract Windows Registry hives, Shimcache, Amcache, Prefetch (.pf) files, and browser history to establish execution proof.
          </p>
        </div>

        <div className="p-4.5 rounded-2xl bg-[#EBF4EF] dark:bg-[#1E2B23] border border-[#DDE5DE] dark:border-[#3A4840]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-[#3F7D5A] text-white flex items-center justify-center font-bold text-xs">4</span>
            <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Super-Timeline</h4>
          </div>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] leading-relaxed">
            Correlate event timestamps using Plaso/log2timeline into unified sequence to determine Patient Zero, persistence, and lateral movements.
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
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
          NIST SP 800-207 Architecture
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Zero Trust Continuous Verification Engine
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          Visualizing dynamic policy evaluation: identity verification, device health posture, and micro-segmentation enforcement before accessing enterprise assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Step 1 */}
        <div className="p-4.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#68736B] dark:text-[#A0AFA5] block mb-1">Input Context</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Subject & Telemetry</h4>
          <ul className="text-[11px] text-[#68736B] dark:text-[#A0AFA5] space-y-1 text-left">
            <li>• MFA Identity Claim</li>
            <li>• Device EDR Compliance</li>
            <li>• Geo-IP / Risk Score</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="p-4.5 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#A67B2E] block mb-1">PDP Engine</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Policy Decision Point</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Dynamic rule evaluation against enterprise threat intelligence and sensitivity policies.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-4.5 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#C97438] block mb-1">PEP Gateway</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Policy Enforcement Point</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Micro-segmented encrypted session tunnel established for authorized asset only.
          </p>
        </div>

        {/* Step 4 */}
        <div className="p-4.5 rounded-2xl bg-[#EBF4EF] dark:bg-[#1E2B23] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#3F7D5A] dark:text-[#6AAF8A] block mb-1">Least Privilege</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">Target Workload</h4>
          <p className="text-[11px] text-[#3F7D5A] dark:text-[#6AAF8A] font-mono font-bold">
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
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#B84040] dark:text-[#E07A7A] mb-1">
          Enterprise Lateral Movement Vector
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Active Directory Kerberoasting Attack Flow
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          How an adversary with unprivileged domain user access extracts Kerberos TGS tickets encrypted with service account passwords and cracks them offline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div className="p-4 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#68736B] dark:text-[#A0AFA5] block mb-1">Phase 1</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">SPN Discovery</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Query LDAP for accounts registered with ServicePrincipalNames (e.g. MSSQLSvc).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#A67B2E] block mb-1">Phase 2</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Request TGS</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Domain user requests Kerberos TGS ticket from Domain Controller (KDC).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#C97438] block mb-1">Phase 3</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Offline Hashcat</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">
            Extract RC4/AES encrypted ticket hash from memory and crack offline with GPU.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FCEAEA] dark:bg-[#2E1E1E] border border-[#F7CDCD] dark:border-[#5C2424] text-center">
          <span className="text-[10px] font-mono font-bold uppercase text-[#B84040] block mb-1">Phase 4</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Domain Privilege</h4>
          <p className="font-mono text-[10px] text-[#B84040] bg-white dark:bg-[#262E28] p-1.5 rounded-lg border border-[#F7CDCD] dark:border-[#5C2424]">
            Admin Pass Compromised
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
    <div className={cn('p-6 md:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] shadow-xs', className)}>
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1">
          CI/CD Security Lifecycle
        </div>
        <h3 className="text-lg md:text-xl font-black text-[#18221C] dark:text-[#E8F0EA]">
          Shift-Left DevSecOps Continuous Pipeline
        </h3>
        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] mt-1 max-w-2xl">
          Automated security checkpoints integrated from local developer IDE commits through build, container packaging, and cloud runtime monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
        <div className="p-3.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#3F7D5A] block mb-1">1. Code</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">IDE & Pre-Commit</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Secret linting & Git hooks (detect hardcoded API keys).</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#3F7D5A] block mb-1">2. Build</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">SAST & SCA</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Static code analysis (Semgrep) & Dependency CVE audit.</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FDF6E7] dark:bg-[#2A261E] border border-[#F2E5C9] dark:border-[#524426]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#A67B2E] block mb-1">3. Test</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">DAST & Container</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Dynamic endpoint fuzzing & Docker base image scan (Trivy).</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FDF2EA] dark:bg-[#2C211B] border border-[#F8DCB8] dark:border-[#583925]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#C97438] block mb-1">4. Deploy</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">IaC Security</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Terraform / K8s misconfiguration policy enforcement.</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#EBF4EF] dark:bg-[#1E2B23] border border-[#DDE5DE] dark:border-[#3A4840]">
          <span className="text-[10px] font-mono font-bold uppercase text-[#3F7D5A] block mb-1">5. Run</span>
          <h4 className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA] mb-1">Runtime CSPM</h4>
          <p className="text-[11px] text-[#68736B] dark:text-[#A0AFA5]">Cloud security posture & eBPF behavioral anomaly detection.</p>
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
