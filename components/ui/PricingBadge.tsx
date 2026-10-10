'use client';

import React from 'react';
import { Pricing } from '@/types';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface PricingBadgeProps {
  pricing: Pricing;
  className?: string;
}

export const PricingBadge: React.FC<PricingBadgeProps> = ({ pricing, className }) => {
  const { t } = useI18n();

  const config = {
    free: {
      label: t('pricing_free').toUpperCase(),
      bg: 'bg-[#E8F5EE] text-[#267747] border-[#C4E1CF] dark:bg-[#0D2214] dark:text-[#00FF66] dark:border-[#1B2A1F]',
    },
    freemium: {
      label: t('pricing_freemium').toUpperCase(),
      bg: 'bg-[#E0F2F1] text-[#00796B] border-[#B2DFDB] dark:bg-[#0F2220] dark:text-[#42C2A8] dark:border-[#173834]',
    },
    paid: {
      label: t('pricing_paid').toUpperCase(),
      bg: 'bg-[#EEF3EE] text-[#5F6B62] border-[#DDE5DE] dark:bg-[#0E1510] dark:text-[#91A596] dark:border-[#1B2A1F]',
    },
  }[pricing] || {
    label: pricing.toUpperCase(),
    bg: 'bg-[#EEF3EE] text-[#5F6B62] border-[#DDE5DE] dark:bg-[#0E1510] dark:text-[#91A596] dark:border-[#1B2A1F]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border tracking-wider',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
