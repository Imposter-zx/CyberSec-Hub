'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

export const HeroTerminalVisual: React.FC = () => {
  const { t } = useI18n();
  const [activeLine, setActiveLine] = useState(0);
  const [progress, setProgress] = useState(87);

  const terminalLogs = [
    '> system.init() --all-modules --security-level=MAX',
    '> loading kernel security modules... [OK]',
    '> scanning subnet 192.168.1.0/24 for anomalies...',
    '> analyzing ingress encrypted TLS sessions...',
    '> threat intelligence sync: MISP feeds active',
    '> zero-trust conditional access policy: ENFORCED',
    '> EDR agent telemetry streaming (42 endpoints)...',
    '> active audit: 03 potential threat vectors isolated',
    '> defensive posture: 100% operational readiness',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % terminalLogs.length);
      setProgress((prev) => 80 + Math.floor(Math.random() * 19));
    }, 2800);
    return () => clearInterval(interval);
  }, [terminalLogs.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#267747]/15 dark:from-[#00FF66]/20 via-[#267747]/5 dark:via-[#00FF66]/5 to-[#C62828]/10 dark:to-[#FF3B30]/15 blur-xl pointer-events-none" />

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl bg-[#FFFFFF] dark:bg-[#0A0F0B] border border-[#DDE5DE] dark:border-[#1B2A1F] shadow-xl dark:shadow-2xl overflow-hidden font-mono text-xs text-[#18221C] dark:text-[#E8F5E9] transition-colors duration-150">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#EEF3EE] dark:bg-[#0E1510] border-b border-[#DDE5DE] dark:border-[#1B2A1F]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C62828] dark:bg-[#FF3B30]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#D97745] dark:bg-[#D9A441]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#267747] dark:bg-[#00FF66]/80 inline-block" />
            <span className="text-[11px] font-bold text-[#5F6B62] dark:text-[#91A596] ml-2 tracking-wider">
              CYBERSECURITY CORE // v2.6
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#267747] dark:text-[#00FF66] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#267747] dark:bg-[#00FF66] animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Terminal Body Content */}
        <div className="p-5 space-y-4">
          {/* Header Status Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F]">
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">SYSTEM</span>
              <span className="text-xs font-bold text-[#267747] dark:text-[#00FF66] flex items-center gap-1">
                ONLINE
              </span>
            </div>
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">NETWORK</span>
              <span className="text-xs font-bold text-[#267747] dark:text-[#00FF66]">SECURE</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">THREATS</span>
              <span className="text-xs font-bold text-[#C62828] dark:text-[#FF3B30] inline-flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>03 DETECTED</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">FIREWALL</span>
              <span className="text-xs font-bold text-[#267747] dark:text-[#00FF66]">ACTIVE</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">SOC STATUS</span>
              <span className="text-xs font-bold text-[#267747] dark:text-[#00FF66]">MONITORING</span>
            </div>
            <div>
              <span className="text-[10px] text-[#5F6B62] dark:text-[#91A596] block uppercase tracking-wider">HONEYPOT</span>
              <span className="text-xs font-bold text-[#D97745] dark:text-[#D9A441]">ARMED</span>
            </div>
          </div>

          {/* Real-Time Live Logs Terminal Stream */}
          <div className="p-3.5 rounded-xl bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] h-36 overflow-hidden flex flex-col justify-end text-[11px] space-y-1.5" dir="ltr">
            {terminalLogs.slice(Math.max(0, activeLine - 4), activeLine + 1).map((log, idx) => (
              <div
                key={idx}
                className={cn(
                  'leading-relaxed truncate transition-opacity duration-200',
                  log.includes('03 potential threat')
                    ? 'text-[#C62828] dark:text-[#FF3B30] font-bold'
                    : log.includes('ENFORCED') || log.includes('OK')
                    ? 'text-[#267747] dark:text-[#00FF66]'
                    : 'text-[#5F6B62] dark:text-[#91A596]'
                )}
              >
                {log}
              </div>
            ))}
            <div className="flex items-center gap-1 text-[#267747] dark:text-[#00FF66] pt-1">
              <span>&gt;</span>
              <span className="w-2 h-3.5 bg-[#267747] dark:bg-[#00FF66] animate-terminal-blink inline-block" />
            </div>
          </div>

          {/* Progress / System Capacity Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#5F6B62] dark:text-[#91A596] uppercase">{t('live_readiness')}</span>
              <span className="text-[#267747] dark:text-[#00FF66] font-bold">{progress}% READY</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#F7F9F6] dark:bg-[#050705] border border-[#DDE5DE] dark:border-[#1B2A1F] overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#267747] to-[#34965C] dark:from-[#00CC52] dark:to-[#00FF66] transition-all duration-700 shadow-xs"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Footer Quick Telemetry Badges */}
          <div className="flex items-center justify-between pt-1 border-t border-[#DDE5DE] dark:border-[#1B2A1F] text-[10px] text-[#5F6B62] dark:text-[#91A596]">
            <span className="flex items-center gap-1">
              <Wifi className="w-3 h-3 text-[#267747] dark:text-[#00FF66]" />
              <span>TLS 1.3 / AES-256-GCM</span>
            </span>
            <span className="font-mono text-[#D97745] dark:text-[#D9A441]">PORT: 443 [OPEN]</span>
          </div>
        </div>
      </div>
    </div>
  );
};
