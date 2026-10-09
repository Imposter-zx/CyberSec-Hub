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
      label: 'FREE',
      bg: 'bg-[#0D2214] text-[#00FF66] border-[#1B2A1F]',
    },
    freemium: {
      label: 'FREEMIUM',
      bg: 'bg-[#0F2220] text-[#42C2A8] border-[#173834]',
    },
    paid: {
      label: 'COMMERCIAL',
      bg: 'bg-[#0E1510] text-[#91A596] border-[#1B2A1F]',
    },
  }[pricing] || {
    label: pricing.toUpperCase(),
    bg: 'bg-[#0E1510] text-[#91A596] border-[#1B2A1F]',
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
