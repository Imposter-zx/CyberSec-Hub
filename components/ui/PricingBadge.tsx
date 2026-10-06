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
      bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    },
    freemium: {
      label: 'Freemium',
      bg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    },
    paid: {
      label: 'Paid',
      bg: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
    },
  }[pricing] || {
    label: pricing,
    bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border tracking-wide uppercase',
        config.bg,
        className
      )}
    >
      {config.label}
    </span>
  );
};
