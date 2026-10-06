import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { firewallTypes } from '@/data/firewalls';
import { Network, Shield, ShieldCheck, ArrowRight, Server, Globe, Lock, Cpu } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';

export default function FirewallsKnowledgePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Knowledge Base', href: '/knowledge' },
          { label: 'Firewalls & Network Defense' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Firewalls & Defensive Network Architecture
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive guide to firewall topologies, stateful filtering, deep packet inspection (NGFW), Web Application Firewalls (WAF), and multi-tier DMZ perimeter network security.
        </p>
      </div>

      {/* Conceptual Network Defense Architecture Diagram */}
      <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 mb-10 shadow-lg overflow-x-auto">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-6 text-center">
          Enterprise Defense-in-Depth Network Architecture
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-[750px] py-4">
          {/* Internet */}
          <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-center w-36 shrink-0">
            <Globe className="w-6 h-6 mx-auto text-blue-400 mb-1" />
            <div className="text-xs font-bold">Untrusted Internet</div>
            <div className="text-[10px] text-slate-400">Public Traffic</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 hidden lg:block" />

          {/* External Firewall */}
          <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-center w-40 shrink-0">
            <Shield className="w-6 h-6 mx-auto text-red-400 mb-1" />
            <div className="text-xs font-bold text-red-200">Perimeter Firewall</div>
            <div className="text-[10px] text-red-300/70">Coarse IP/Port ACLs</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 hidden lg:block" />

          {/* IDS / IPS */}
          <div className="p-3 rounded-lg bg-amber-950/60 border border-amber-800 text-center w-36 shrink-0">
            <Cpu className="w-6 h-6 mx-auto text-amber-400 mb-1" />
            <div className="text-xs font-bold text-amber-200">NIDS / NIPS</div>
            <div className="text-[10px] text-amber-300/70">Signature & Anomaly</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 hidden lg:block" />

          {/* DMZ */}
          <div className="p-3 rounded-lg bg-purple-950/60 border border-purple-800 text-center w-40 shrink-0">
            <Server className="w-6 h-6 mx-auto text-purple-400 mb-1" />
            <div className="text-xs font-bold text-purple-200">DMZ Subnet</div>
            <div className="text-[10px] text-purple-300/70">Public Web / Mail / WAF</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 hidden lg:block" />

          {/* Internal NGFW */}
          <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800 text-center w-40 shrink-0">
            <ShieldCheck className="w-6 h-6 mx-auto text-blue-400 mb-1" />
            <div className="text-xs font-bold text-blue-200">Internal NGFW</div>
            <div className="text-[10px] text-blue-300/70">App-ID & User-ID</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 hidden lg:block" />

          {/* Internal Network */}
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-center w-40 shrink-0">
            <Lock className="w-6 h-6 mx-auto text-emerald-400 mb-1" />
            <div className="text-xs font-bold text-emerald-200">Internal LAN</div>
            <div className="text-[10px] text-emerald-300/70">Workstations & DBs</div>
          </div>
        </div>
      </div>

      {/* 10 Firewall Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {firewallTypes.map((fw) => (
          <div
            key={fw.id}
            id={fw.id}
            className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all scroll-mt-24"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  Network Defense
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {fw.name}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {fw.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 mb-4 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  How It Works:
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  {fw.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300 block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    {fw.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/10">
                  <span className="font-semibold text-rose-700 dark:text-rose-300 block mb-1 text-[11px]">
                    Limitations:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    {fw.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Technologies */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-medium text-slate-400 mr-1">
                Representative Implementations:
              </span>
              {fw.relatedTechnologies.map((tech, idx) => (
                <Tag key={idx} label={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
