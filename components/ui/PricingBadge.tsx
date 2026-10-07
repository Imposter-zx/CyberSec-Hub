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
      bg: 'bg-[#66705A]/15 text-[#4a553f] dark:text-[#A5AD8C] border-[#66705A]/30',
    },
    freemium: {
      label: 'Freemium',
      bg: 'bg-[#B56F4A]/15 text-[#8C4A28] dark:text-[#E09873] border-[#B56F4A]/30',
    },
    paid: {
      label: 'Paid',
      bg: 'bg-[#68645D]/10 text-[#68645D] dark:text-[#B8B1A5] border-[#D8D0C2] dark:border-[#454139]',
    },
  }[pricing] || {
    label: pricing,
    bg: 'bg-[#68645D]/10 text-[#68645D] dark:text-[#B8B1A5] border-[#D8D0C2] dark:border-[#454139]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
