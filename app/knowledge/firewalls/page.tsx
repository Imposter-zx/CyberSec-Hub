'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { firewallTypes } from '@/data/firewalls';
import { Shield, ShieldCheck, ArrowRight, Server, Globe, Lock, Cpu } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { FirewallInspectionDiagram } from '@/components/visuals/SecurityDiagrams';
import { useI18n } from '@/lib/i18n';

export default function FirewallsKnowledgePage() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-mono">
      <Breadcrumbs
        items={[
          { label: t('nav.knowledge') || 'Knowledge Base', href: '/knowledge' },
          { label: 'Firewalls & Network Defense' },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-1.5">
          <Shield className="w-4 h-4" />
          <span>// DEFENSIVE_PERIMETER_&amp;_SEGMENTATION</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#18221C] dark:text-[#E8F5E9] uppercase tracking-wider mb-2.5">
          Firewalls &amp; Network Defense Architecture
        </h1>
        <p className="text-sm text-[#5F6B62] dark:text-[#91A596] max-w-3xl leading-relaxed font-sans">
          Comprehensive guide to firewall topologies, stateful filtering, deep packet inspection (NGFW), Web Application Firewalls (WAF), and multi-tier DMZ perimeter network security.
        </p>
      </div>

      {/* Conceptual Network Defense Architecture Diagram */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] text-[#18221C] dark:text-[#E8F5E9] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-10 shadow-xs overflow-x-auto">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#267747] dark:text-[#00FF66] mb-6 text-center">
          // ENTERPRISE_DEFENSE_IN_DEPTH_TOPOLOGY
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-[750px] py-4">
          {/* Internet */}
          <div className="p-4 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] text-center w-36 shrink-0 shadow-xs">
            <Globe className="w-6 h-6 mx-auto text-[#5F6B62] dark:text-[#91A596] mb-1.5" />
            <div className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9]">Public Internet</div>
            <div className="text-[10px] text-[#C62828] dark:text-[#FF3B30] font-bold">UNTRUSTED TRAFFIC</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#267747] dark:text-[#00FF66] shrink-0 hidden lg:block" />

          {/* External Firewall */}
          <div className="p-4 rounded-xl bg-[#FDEDEC] dark:bg-[#271211] border border-[#F5C6CB] dark:border-[#441E1C] text-center w-40 shrink-0 shadow-xs">
            <Shield className="w-6 h-6 mx-auto text-[#C62828] dark:text-[#FF3B30] mb-1.5" />
            <div className="text-xs font-bold text-[#C62828] dark:text-[#FF3B30]">Edge Firewall</div>
            <div className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">COARSE IP/PORT ACLs</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#267747] dark:text-[#00FF66] shrink-0 hidden lg:block" />

          {/* IDS / IPS */}
          <div className="p-4 rounded-xl bg-[#FEF9E7] dark:bg-[#241C0E] border border-[#F9E79F] dark:border-[#382B17] text-center w-36 shrink-0 shadow-xs">
            <Cpu className="w-6 h-6 mx-auto text-[#D97745] dark:text-[#D9A441] mb-1.5" />
            <div className="text-xs font-bold text-[#D97745] dark:text-[#D9A441]">NIDS / NIPS</div>
            <div className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">SIGNATURE &amp; ANOMALY</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#267747] dark:text-[#00FF66] shrink-0 hidden lg:block" />

          {/* DMZ */}
          <div className="p-4 rounded-xl bg-[#E8F5E9] dark:bg-[#0F2220] border border-[#A5D6A7] dark:border-[#173834] text-center w-40 shrink-0 shadow-xs">
            <Server className="w-6 h-6 mx-auto text-[#267747] dark:text-[#42C2A8] mb-1.5" />
            <div className="text-xs font-bold text-[#267747] dark:text-[#42C2A8]">DMZ Subnet</div>
            <div className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">WEB / MAIL / WAF</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#267747] dark:text-[#00FF66] shrink-0 hidden lg:block" />

          {/* Internal NGFW */}
          <div className="p-4 rounded-xl bg-[#E8F5E9] dark:bg-[#0D2214] border border-[#A5D6A7] dark:border-[#1B2A1F] text-center w-40 shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6 mx-auto text-[#267747] dark:text-[#00FF66] mb-1.5" />
            <div className="text-xs font-bold text-[#267747] dark:text-[#00FF66]">Internal NGFW</div>
            <div className="text-[10px] text-[#5F6B62] dark:text-[#91A596]">APP-ID &amp; USER-ID</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#267747] dark:text-[#00FF66] shrink-0 hidden lg:block" />

          {/* Internal Network */}
          <div className="p-4 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#267747] dark:border-[#00FF66] text-center w-40 shrink-0 shadow-xs">
            <Lock className="w-6 h-6 mx-auto text-[#267747] dark:text-[#00FF66] mb-1.5" />
            <div className="text-xs font-bold text-[#18221C] dark:text-[#E8F5E9]">Internal LAN</div>
            <div className="text-[10px] text-[#267747] dark:text-[#00FF66] font-bold">PROTECTED WORKLOADS</div>
          </div>
        </div>
      </div>

      {/* Interactive Firewall Packet Inspection Diagram */}
      <div className="mb-10">
        <FirewallInspectionDiagram />
      </div>

      {/* 10 Firewall Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {firewallTypes.map((fw) => (
          <div
            key={fw.id}
            id={fw.id}
            className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0E1510] border border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-col justify-between hover:border-[#267747] dark:hover:border-[#00FF66] hover:bg-[#F7F9F6] dark:hover:bg-[#121B14] hover:shadow-[0_4px_24px_rgba(0,255,102,0.10)] hover:-translate-y-1 transition-all scroll-mt-24 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F7F9F6] dark:bg-[#050705] text-[#267747] dark:text-[#00FF66] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  NETWORK DEFENSE ARCHITECTURE
                </span>
              </div>

              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F5E9] mb-2">
                {fw.name}
              </h3>

              <p className="text-xs text-[#5F6B62] dark:text-[#91A596] mb-4 leading-relaxed font-sans">
                {fw.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] mb-4 text-xs">
                <span className="font-bold text-[#267747] dark:text-[#00FF66] block mb-1 text-[10px] uppercase">
                  // MECHANISM:
                </span>
                <p className="text-[#5F6B62] dark:text-[#91A596] text-[11px] leading-relaxed font-sans">
                  {fw.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs">
                <div className="p-2.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
                  <span className="font-bold text-[#267747] dark:text-[#00FF66] block mb-1 text-[10px] uppercase">
                    + ADVANTAGES
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-1 font-sans">
                    {fw.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FDEDEC] dark:bg-[#271211] border border-[#F5C6CB] dark:border-[#441E1C]">
                  <span className="font-bold text-[#C62828] dark:text-[#FF3B30] block mb-1 text-[10px] uppercase">
                    - LIMITATIONS
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#5F6B62] dark:text-[#91A596] space-y-1 font-sans">
                    {fw.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Technologies */}
            <div className="pt-3 border-t border-[#DDE5DE] dark:border-[#1B2A1F] flex flex-wrap items-center gap-1">
              <span className="text-[10px] font-bold text-[#5F6B62] dark:text-[#91A596] mr-1">
                IMPLEMENTATIONS:
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
