import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Shield, CheckCircle2, AlertTriangle, Code, GitBranch, Scale, Heart, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'About & Methodology' }]} />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          About CyberSec Hub
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          CyberSec Hub is an open, structured educational knowledge platform engineered to organize verified cybersecurity learning resources, technical concepts, threat intelligence, and structured career pathways.
        </p>
      </div>

      {/* Mission & Core Philosophy */}
      <div className="space-y-10 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <span>The Platform Mission</span>
          </h2>
          <p>
            The global cybersecurity landscape contains thousands of disparate websites, guides, tools, and courses. For beginners and intermediate practitioners, answering fundamental questions such as <em>"What should I learn next?"</em>, <em>"Where can I practice safely?"</em>, and <em>"Which certification aligns with my goals?"</em> is often overwhelming.
          </p>
          <p>
            CyberSec Hub resolves this by organizing cybersecurity knowledge into a structured, interconnected learning journey:
          </p>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 font-mono text-center font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm">
            Learn → Understand → Practice → Specialize → Certify
          </div>
        </section>

        {/* Verification Methodology */}
        <section className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Resource Verification & Accuracy Standards</span>
          </h2>
          <p>
            Quality is prioritized over quantity. Every external resource, certification, tool, and YouTube channel in CyberSec Hub adheres to strict curation guidelines:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
            <li><strong>Official Sources First:</strong> Certifications, vendor tools, and official frameworks (NIST, MITRE, OWASP) link directly to official provider URLs.</li>
            <li><strong>No Fabricated Information:</strong> Exam costs, prerequisites, and policies that evolve over time are flagged with explicit verification notices rather than guessed figures.</li>
            <li><strong>Explicit Pricing Classification:</strong> Free, Freemium, and Paid resources are strictly segregated.</li>
            <li><strong>Last Verified Tracking:</strong> External entries maintain an active verification timestamp.</li>
          </ul>
        </section>

        {/* Ethics & Legal Safeguards */}
        <section className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-500" />
            <span>Educational Scope & Ethics Policy</span>
          </h2>
          <p>
            CyberSec Hub is designed exclusively for defense, ethical testing, and academic learning:
          </p>
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 space-y-2">
            <p>
              We do <strong>NOT</strong> host or provide weaponized exploit payloads, malicious binaries, step-by-step instructions for attacking real systems, credential theft utilities, or DDoS tools.
            </p>
            <p>
              All offensive concepts (e.g. SQL Injection, Privilege Escalation) are demonstrated in the context of authorized simulation environments (such as Hack The Box, TryHackMe, and PortSwigger Academy) and paired with defensive mitigation and detection rules.
            </p>
          </div>
        </section>

        {/* Content Contribution Architecture */}
        <section className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-500" />
            <span>Open Data Architecture & Contributing</span>
          </h2>
          <p>
            CyberSec Hub is built with a modular, typed TypeScript data architecture designed for easy migration to a headless database (such as Supabase or PostgreSQL) in future releases:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-blue-500">data/resources.ts</span>
              <p className="text-slate-500 font-sans mt-1">Add new learning platforms and courses.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-blue-500">data/certifications.ts</span>
              <p className="text-slate-500 font-sans mt-1">Add or update certification exam specs.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-blue-500">data/threats.ts</span>
              <p className="text-slate-500 font-sans mt-1">Add new vulnerability & threat analyses.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-blue-500">data/roadmaps.ts</span>
              <p className="text-slate-500 font-sans mt-1">Design new career specialization paths.</p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="p-6 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-2">
          <h3 className="font-bold text-slate-700 dark:text-slate-300">Disclaimer & Trademark Notice</h3>
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
