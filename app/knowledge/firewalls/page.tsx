import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { firewallTypes } from '@/data/firewalls';
import { Shield, ShieldCheck, ArrowRight, Server, Globe, Lock, Cpu } from 'lucide-react';
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
        <h1 className="text-2xl sm:text-3xl font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
          Firewalls & Defensive Network Architecture
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#B8B1A5] max-w-3xl leading-relaxed">
          Comprehensive guide to firewall topologies, stateful filtering, deep packet inspection (NGFW), Web Application Firewalls (WAF), and multi-tier DMZ perimeter network security.
        </p>
      </div>

      {/* Conceptual Network Defense Architecture Diagram */}
      <div className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139] mb-10 shadow-sm overflow-x-auto">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#66705A] dark:text-[#A5AD8C] mb-6 text-center">
          Enterprise Defense-in-Depth Network Architecture
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-[750px] py-4">
          {/* Internet */}
          <div className="p-3 rounded-lg bg-[#EAE3D5]/60 dark:bg-[#292722] border border-[#D8D0C2] dark:border-[#454139] text-center w-36 shrink-0 shadow-sm">
            <Globe className="w-6 h-6 mx-auto text-[#68645D] dark:text-[#B8B1A5] mb-1" />
            <div className="text-xs font-bold text-[#242424] dark:text-[#F1EDE4]">Untrusted Internet</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">Public Traffic</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] shrink-0 hidden lg:block" />

          {/* External Firewall */}
          <div className="p-3 rounded-lg bg-[#B56F4A]/10 border border-[#B56F4A]/30 text-center w-40 shrink-0 shadow-sm">
            <Shield className="w-6 h-6 mx-auto text-[#B56F4A] mb-1" />
            <div className="text-xs font-bold text-[#8C4A28] dark:text-[#E09873]">Perimeter Firewall</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">Coarse IP/Port ACLs</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] shrink-0 hidden lg:block" />

          {/* IDS / IPS */}
          <div className="p-3 rounded-lg bg-[#B89B62]/10 border border-[#B89B62]/30 text-center w-36 shrink-0 shadow-sm">
            <Cpu className="w-6 h-6 mx-auto text-[#B89B62] mb-1" />
            <div className="text-xs font-bold text-[#82662c] dark:text-[#D1B87F]">NIDS / NIPS</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">Signature & Anomaly</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] shrink-0 hidden lg:block" />

          {/* DMZ */}
          <div className="p-3 rounded-lg bg-[#66705A]/10 border border-[#66705A]/30 text-center w-40 shrink-0 shadow-sm">
            <Server className="w-6 h-6 mx-auto text-[#66705A] dark:text-[#A5AD8C] mb-1" />
            <div className="text-xs font-bold text-[#4a553f] dark:text-[#A5AD8C]">DMZ Subnet</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">Public Web / Mail / WAF</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] shrink-0 hidden lg:block" />

          {/* Internal NGFW */}
          <div className="p-3 rounded-lg bg-[#66705A]/15 border border-[#66705A]/40 text-center w-40 shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6 mx-auto text-[#66705A] dark:text-[#A5AD8C] mb-1" />
            <div className="text-xs font-bold text-[#4a553f] dark:text-[#A5AD8C]">Internal NGFW</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">App-ID & User-ID</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#68645D] dark:text-[#B8B1A5] shrink-0 hidden lg:block" />

          {/* Internal Network */}
          <div className="p-3 rounded-lg bg-[#657A58]/10 border border-[#657A58]/30 text-center w-40 shrink-0 shadow-sm">
            <Lock className="w-6 h-6 mx-auto text-[#657A58] mb-1" />
            <div className="text-xs font-bold text-[#445638] dark:text-[#A5AD8C]">Internal LAN</div>
            <div className="text-[10px] text-[#68645D] dark:text-[#B8B1A5]">Workstations & DBs</div>
          </div>
        </div>
      </div>

      {/* 10 Firewall Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {firewallTypes.map((fw) => (
          <div
            key={fw.id}
            id={fw.id}
            className="p-6 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] flex flex-col justify-between hover:border-[#66705A] dark:hover:border-[#A5AD8C] transition-all scroll-mt-24 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#EAE3D5] dark:bg-[#292722] text-[#242424] dark:text-[#F1EDE4] border border-[#D8D0C2] dark:border-[#454139]">
                  Network Defense
                </span>
              </div>

              <h3 className="text-base font-bold text-[#242424] dark:text-[#F1EDE4] mb-2">
                {fw.name}
              </h3>

              <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] mb-4 leading-relaxed">
                {fw.definition}
              </p>

              {/* How it works */}
              <div className="p-3 rounded-lg bg-[#EAE3D5]/40 dark:bg-[#292722]/50 border border-[#D8D0C2]/60 dark:border-[#454139]/60 mb-4 text-xs">
                <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68645D] dark:text-[#B8B1A5] text-[11px] leading-relaxed">
                  {fw.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-lg bg-[#657A58]/10 border border-[#657A58]/25">
                  <span className="font-semibold text-[#445638] dark:text-[#A5AD8C] block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-1">
                    {fw.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-[#A45143]/10 border border-[#A45143]/25">
                  <span className="font-semibold text-[#7A3428] dark:text-[#E08A7C] block mb-1 text-[11px]">
                    Limitations:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#B8B1A5] space-y-1">
                    {fw.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Technologies */}
            <div className="pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-medium text-[#68645D] dark:text-[#B8B1A5] mr-1">
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
