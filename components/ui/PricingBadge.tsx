import React from 'react';
import { Pricing } from '@/types';
import { cn } from '@/lib/utils';

interface PricingBadgeProps {
  pricing: Pricing;
  className?: string;
}

export const PricingBadge: React.FC<PricingBadgeProps> = ({ pricing, className }) => {
  const config = {
    free: {
      label: 'Free',
      bg: 'bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] border-[#DDE5DE] dark:border-[#3A4840]',
    },
    freemium: {
      label: 'Freemium',
      bg: 'bg-[#EBF5F4] text-[#3A7B74] dark:bg-[#4C9A91]/20 dark:text-[#7BB8B2] border-[#D3E8E6] dark:border-[#2F4D49]',
    },
    paid: {
      label: 'Paid',
      bg: 'bg-[#EEF3EE] text-[#68736B] dark:bg-[#202722] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840]',
    },
  }[pricing] || {
    label: pricing,
    bg: 'bg-[#EEF3EE] text-[#68736B] dark:bg-[#202722] dark:text-[#A0AFA5] border-[#DDE5DE] dark:border-[#3A4840]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
