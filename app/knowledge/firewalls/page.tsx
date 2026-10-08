import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { firewallTypes } from '@/data/firewalls';
import { Shield, ShieldCheck, ArrowRight, Server, Globe, Lock, Cpu } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { FirewallInspectionDiagram } from '@/components/visuals/SecurityDiagrams';

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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5">
          <Shield className="w-4 h-4" />
          <span>Perimeter, Inspection & Segmentation</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18221C] dark:text-[#E8F0EA] mb-2.5">
          Firewalls & Defensive Network Architecture
        </h1>
        <p className="text-sm text-[#68645D] dark:text-[#A0AFA5] max-w-3xl leading-relaxed">
          Comprehensive guide to firewall topologies, stateful filtering, deep packet inspection (NGFW), Web Application Firewalls (WAF), and multi-tier DMZ perimeter network security.
        </p>
      </div>

      {/* Conceptual Network Defense Architecture Diagram */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840] mb-10 shadow-xs overflow-x-auto">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F7D5A] dark:text-[#6AAF8A] mb-6 text-center">
          Enterprise Defense-in-Depth Network Flow Diagram
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-[750px] py-4">
          {/* Internet */}
          <div className="p-4 rounded-xl bg-[#EEF3EE] dark:bg-[#202722] border border-[#DDE5DE] dark:border-[#3A4840] text-center w-36 shrink-0 shadow-xs">
            <Globe className="w-6 h-6 mx-auto text-[#68736B] dark:text-[#A0AFA5] mb-1.5" />
            <div className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Public Internet</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">Untrusted Traffic</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 hidden lg:block" />

          {/* External Firewall */}
          <div className="p-4 rounded-xl bg-[#FDF2EA] border border-[#F8DCB8] dark:bg-[#E58A4E]/10 dark:border-[#583925] text-center w-40 shrink-0 shadow-xs">
            <Shield className="w-6 h-6 mx-auto text-[#E58A4E] mb-1.5" />
            <div className="text-xs font-bold text-[#C97438] dark:text-[#EDA574]">Edge Firewall</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">Coarse IP/Port ACLs</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 hidden lg:block" />

          {/* IDS / IPS */}
          <div className="p-4 rounded-xl bg-[#FDF6E7] border border-[#F2E5C9] dark:bg-[#D7A84B]/10 dark:border-[#524426] text-center w-36 shrink-0 shadow-xs">
            <Cpu className="w-6 h-6 mx-auto text-[#D7A84B] mb-1.5" />
            <div className="text-xs font-bold text-[#A67B2E] dark:text-[#E4BF74]">NIDS / NIPS</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">Signature & Anomaly</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 hidden lg:block" />

          {/* DMZ */}
          <div className="p-4 rounded-xl bg-[#EBF5F4] border border-[#D3E8E6] dark:bg-[#4C9A91]/10 dark:border-[#2F4D49] text-center w-40 shrink-0 shadow-xs">
            <Server className="w-6 h-6 mx-auto text-[#4C9A91] mb-1.5" />
            <div className="text-xs font-bold text-[#3A7B74] dark:text-[#7BB8B2]">DMZ Subnet</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">Public Web / Mail / WAF</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 hidden lg:block" />

          {/* Internal NGFW */}
          <div className="p-4 rounded-xl bg-[#EBF4EF] border border-[#DDE5DE] dark:bg-[#3F7D5A]/15 dark:border-[#3A4840] text-center w-40 shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6 mx-auto text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5" />
            <div className="text-xs font-bold text-[#3F7D5A] dark:text-[#6AAF8A]">Internal NGFW</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">App-ID & User-ID</div>
          </div>

          <ArrowRight className="w-5 h-5 text-[#3F7D5A] dark:text-[#6AAF8A] shrink-0 hidden lg:block" />

          {/* Internal Network */}
          <div className="p-4 rounded-xl bg-[#EEF3EE] border border-[#DDE5DE] dark:bg-[#202722] dark:border-[#3A4840] text-center w-40 shrink-0 shadow-xs">
            <Lock className="w-6 h-6 mx-auto text-[#3F7D5A] dark:text-[#6AAF8A] mb-1.5" />
            <div className="text-xs font-bold text-[#18221C] dark:text-[#E8F0EA]">Internal LAN</div>
            <div className="text-[10px] text-[#68736B] dark:text-[#A0AFA5]">Workstations & DBs</div>
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
            className="p-6.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] flex flex-col justify-between hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg transition-all scroll-mt-24 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF3EE] dark:bg-[#202722] text-[#18221C] dark:text-[#E8F0EA] border border-[#DDE5DE] dark:border-[#3A4840]">
                  Network Defense
                </span>
              </div>

              <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] mb-2">
                {fw.name}
              </h3>

              <p className="text-xs text-[#68645D] dark:text-[#A0AFA5] mb-4 leading-relaxed">
                {fw.definition}
              </p>

              {/* How it works */}
              <div className="p-3.5 rounded-xl bg-[#EEF3EE]/60 dark:bg-[#202722]/60 border border-[#DDE5DE]/60 dark:border-[#3A4840]/60 mb-4 text-xs">
                <span className="font-bold text-[#18221C] dark:text-[#E8F0EA] block mb-1">
                  How It Works:
                </span>
                <p className="text-[#68645D] dark:text-[#A0AFA5] text-[11px] leading-relaxed">
                  {fw.howItWorks}
                </p>
              </div>

              {/* Advantages & Limitations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-3 rounded-xl bg-[#EBF4EF] dark:bg-[#3F7D5A]/15 border border-[#DDE5DE] dark:border-[#3A4840]">
                  <span className="font-bold text-[#3F7D5A] dark:text-[#6AAF8A] block mb-1 text-[11px]">
                    Advantages:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#A0AFA5] space-y-1">
                    {fw.advantages.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-[#FCEAEA] dark:bg-[#B84040]/15 border border-[#F7CDCD] dark:border-[#5C2424]">
                  <span className="font-bold text-[#B84040] dark:text-[#E07A7A] block mb-1 text-[11px]">
                    Limitations:
                  </span>
                  <ul className="list-disc list-inside text-[11px] text-[#68645D] dark:text-[#A0AFA5] space-y-1">
                    {fw.limitations.map((lim, idx) => (
                      <li key={idx}>{lim}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Technologies */}
            <div className="pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-bold text-[#68736B] dark:text-[#A0AFA5] mr-1">
                Implementations:
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
