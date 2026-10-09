import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Shield, CheckCircle2, Code, Scale, Terminal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Breadcrumbs items={[{ label: 'About & Methodology' }]} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66] mb-2">
          <Terminal className="w-4 h-4 text-[#00FF66]" />
          <span>// PLATFORM_MISSION // METHODOLOGY</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#E8F5E9] font-mono tracking-tight mb-3">
          About CyberSec Hub
        </h1>
        <p className="text-base text-[#91A596] leading-relaxed">
          CyberSec Hub is an open, structured educational knowledge platform engineered to organize verified cybersecurity learning resources, technical concepts, threat intelligence, and structured career pathways.
        </p>
      </div>

      {/* Mission & Core Philosophy */}
      <div className="space-y-10 text-sm text-[#E8F5E9] leading-relaxed">
        <section className="p-7 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#E8F5E9] font-mono flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00FF66]" />
            <span>THE PLATFORM MISSION</span>
          </h2>
          <p className="text-[#91A596]">
            The global cybersecurity landscape contains thousands of disparate websites, guides, tools, and courses. For beginners and intermediate practitioners, answering fundamental questions such as <em>&quot;What should I learn next?&quot;</em>, <em>&quot;Where can I practice safely?&quot;</em>, and <em>&quot;Which certification aligns with my goals?&quot;</em> is often overwhelming.
          </p>
          <p className="text-[#91A596]">
            CyberSec Hub resolves this by organizing cybersecurity knowledge into a structured, interconnected learning journey:
          </p>
          <div className="p-4 rounded-xl bg-[#050705] font-mono text-center font-bold text-[#00FF66] text-xs sm:text-sm border border-[#1B2A1F]">
            Learn &rarr; Understand &rarr; Practice &rarr; Specialize &rarr; Certify
          </div>
        </section>

        {/* Verification Methodology */}
        <section className="p-7 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#E8F5E9] font-mono flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#00FF66]" />
            <span>RESOURCE VERIFICATION &amp; ACCURACY STANDARDS</span>
          </h2>
          <p className="text-[#91A596]">
            Quality is prioritized over quantity. Every external resource, certification, tool, and YouTube channel in CyberSec Hub adheres to strict curation guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-xs sm:text-sm text-[#91A596]">
            <li><strong className="text-[#E8F5E9]">Official Sources First:</strong> Certifications, vendor tools, and official frameworks (NIST, MITRE, OWASP) link directly to official provider URLs.</li>
            <li><strong className="text-[#E8F5E9]">No Fabricated Information:</strong> Exam costs, prerequisites, and policies that evolve over time are flagged with explicit verification notices rather than guessed figures.</li>
            <li><strong className="text-[#E8F5E9]">Explicit Pricing Classification:</strong> Free, Freemium, and Paid resources are strictly segregated.</li>
            <li><strong className="text-[#E8F5E9]">Last Verified Tracking:</strong> External entries maintain an active verification timestamp.</li>
          </ul>
        </section>

        {/* Ethics & Legal Safeguards */}
        <section className="p-7 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#E8F5E9] font-mono flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#D9A441]" />
            <span>EDUCATIONAL SCOPE &amp; ETHICS POLICY</span>
          </h2>
          <p className="text-[#91A596]">
            CyberSec Hub is designed exclusively for defense, ethical testing, and academic learning:
          </p>
          <div className="p-4.5 rounded-xl bg-[#050705] border border-[#D9A441]/30 text-xs text-[#D9A441] space-y-2 font-mono">
            <p>
              We do <strong>NOT</strong> host or provide weaponized exploit payloads, malicious binaries, step-by-step instructions for attacking real systems, credential theft utilities, or DDoS tools.
            </p>
            <p className="text-[#91A596] font-sans">
              All offensive concepts (e.g. SQL Injection, Privilege Escalation) are demonstrated in the context of authorized simulation environments (such as Hack The Box, TryHackMe, and PortSwigger Academy) and paired with defensive mitigation and detection rules.
            </p>
          </div>
        </section>

        {/* Content Contribution Architecture */}
        <section className="p-7 rounded-2xl bg-[#0E1510] border border-[#1B2A1F] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#E8F5E9] font-mono flex items-center gap-2">
            <Code className="w-5 h-5 text-[#00FF66]" />
            <span>OPEN DATA ARCHITECTURE &amp; CONTRIBUTING</span>
          </h2>
          <p className="text-[#91A596]">
            CyberSec Hub is built with a modular, typed TypeScript data architecture designed for easy migration to a headless database (such as Supabase or PostgreSQL) in future releases:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
              <span className="font-bold text-[#00FF66]">data/resources.ts</span>
              <p className="text-[#91A596] font-sans mt-1">Add new learning platforms and courses.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
              <span className="font-bold text-[#00FF66]">data/certifications.ts</span>
              <p className="text-[#91A596] font-sans mt-1">Add or update certification exam specs.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
              <span className="font-bold text-[#00FF66]">data/threats.ts</span>
              <p className="text-[#91A596] font-sans mt-1">Add new vulnerability &amp; threat analyses.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#050705] border border-[#1B2A1F]">
              <span className="font-bold text-[#00FF66]">data/roadmaps.ts</span>
              <p className="text-[#91A596] font-sans mt-1">Design new career specialization paths.</p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="p-6 rounded-2xl bg-[#050705] border border-[#1B2A1F] text-xs text-[#91A596] space-y-2">
          <h3 className="font-bold text-[#E8F5E9] font-mono">DISCLAIMER &amp; TRADEMARK NOTICE</h3>
          <p>
            All product names, logos, brands, certifications, and trademarks referenced on this website are property of their respective owners. Their use does not imply any affiliation with or endorsement by them.
          </p>
          <p>
            CyberSec Hub is an independent educational open-source initiative.
          </p>
        </section>
      </div>
    </div>
  );
}
