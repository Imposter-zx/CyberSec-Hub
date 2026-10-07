import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Shield, CheckCircle2, Code, Scale } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'About & Methodology' }]} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Shield className="w-4 h-4" />
          <span>Platform Mission & Standards</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-3">
          About CyberSec Hub
        </h1>
        <p className="text-base text-[#68645D] dark:text-[#A0AFA5] leading-relaxed">
          CyberSec Hub is an open, structured educational knowledge platform engineered to organize verified cybersecurity learning resources, technical concepts, threat intelligence, and structured career pathways.
        </p>
      </div>

      {/* Mission & Core Philosophy */}
      <div className="space-y-10 text-sm text-[#18221C] dark:text-[#E8F0EA] leading-relaxed">
        <section className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
            <span>The Platform Mission</span>
          </h2>
          <p className="text-[#68645D] dark:text-[#A0AFA5]">
            The global cybersecurity landscape contains thousands of disparate websites, guides, tools, and courses. For beginners and intermediate practitioners, answering fundamental questions such as <em>"What should I learn next?"</em>, <em>"Where can I practice safely?"</em>, and <em>"Which certification aligns with my goals?"</em> is often overwhelming.
          </p>
          <p className="text-[#68645D] dark:text-[#A0AFA5]">
            CyberSec Hub resolves this by organizing cybersecurity knowledge into a structured, interconnected learning journey:
          </p>
          <div className="p-4 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] font-mono text-center font-bold text-[#3F7D5A] dark:text-[#6AAF8A] text-xs sm:text-sm border border-[#DDE5DE] dark:border-[#3A4840]">
            Learn → Understand → Practice → Specialize → Certify
          </div>
        </section>

        {/* Verification Methodology */}
        <section className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A]" />
            <span>Resource Verification & Accuracy Standards</span>
          </h2>
          <p className="text-[#68645D] dark:text-[#A0AFA5]">
            Quality is prioritized over quantity. Every external resource, certification, tool, and YouTube channel in CyberSec Hub adheres to strict curation guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-xs sm:text-sm text-[#68645D] dark:text-[#A0AFA5]">
            <li><strong>Official Sources First:</strong> Certifications, vendor tools, and official frameworks (NIST, MITRE, OWASP) link directly to official provider URLs.</li>
            <li><strong>No Fabricated Information:</strong> Exam costs, prerequisites, and policies that evolve over time are flagged with explicit verification notices rather than guessed figures.</li>
            <li><strong>Explicit Pricing Classification:</strong> Free, Freemium, and Paid resources are strictly segregated.</li>
            <li><strong>Last Verified Tracking:</strong> External entries maintain an active verification timestamp.</li>
          </ul>
        </section>

        {/* Ethics & Legal Safeguards */}
        <section className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#D7A84B] dark:text-[#E4BF74]" />
            <span>Educational Scope & Ethics Policy</span>
          </h2>
          <p className="text-[#68645D] dark:text-[#A0AFA5]">
            CyberSec Hub is designed exclusively for defense, ethical testing, and academic learning:
          </p>
          <div className="p-4.5 rounded-xl bg-[#FDF6E7] border border-[#F2E5C9] dark:bg-[#D7A84B]/10 dark:border-[#524426] text-xs text-[#A67B2E] dark:text-[#E4BF74] space-y-2">
            <p>
              We do <strong>NOT</strong> host or provide weaponized exploit payloads, malicious binaries, step-by-step instructions for attacking real systems, credential theft utilities, or DDoS tools.
            </p>
            <p>
              All offensive concepts (e.g. SQL Injection, Privilege Escalation) are demonstrated in the context of authorized simulation environments (such as Hack The Box, TryHackMe, and PortSwigger Academy) and paired with defensive mitigation and detection rules.
            </p>
          </div>
        </section>

        {/* Content Contribution Architecture */}
        <section className="p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] space-y-4 shadow-xs">
          <h2 className="text-lg font-bold text-[#18221C] dark:text-[#E8F0EA] flex items-center gap-2">
            <Code className="w-5 h-5 text-[#E58A4E] dark:text-[#EDA574]" />
            <span>Open Data Architecture & Contributing</span>
          </h2>
          <p className="text-[#68645D] dark:text-[#A0AFA5]">
            CyberSec Hub is built with a modular, typed TypeScript data architecture designed for easy migration to a headless database (such as Supabase or PostgreSQL) in future releases:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
              <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">data/resources.ts</span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] font-sans mt-1">Add new learning platforms and courses.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
              <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">data/certifications.ts</span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] font-sans mt-1">Add or update certification exam specs.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
              <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">data/threats.ts</span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] font-sans mt-1">Add new vulnerability & threat analyses.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE] dark:border-[#3A4840]">
              <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">data/roadmaps.ts</span>
              <p className="text-[#68645D] dark:text-[#A0AFA5] font-sans mt-1">Design new career specialization paths.</p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="p-6 rounded-2xl bg-[#EEF3EE]/40 dark:bg-[#202722]/40 border border-[#DDE5DE] dark:border-[#3A4840] text-xs text-[#68645D] dark:text-[#A0AFA5] space-y-2">
          <h3 className="font-bold text-[#18221C] dark:text-[#E8F0EA]">Disclaimer & Trademark Notice</h3>
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
