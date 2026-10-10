'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  const { t, isRTL } = useI18n();

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap gap-1.5 text-xs text-[#5F6B62] dark:text-[#91A596] py-3.5 font-mono', className)}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors"
      >
        <Terminal className="w-3.5 h-3.5 text-[#267747] dark:text-[#00FF66]" />
        <span>{t('breadcrumbs_root')}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <span className="text-[#88968C] dark:text-[#91A596]/60">
              {isRTL ? '<' : '>'}
            </span>
            {isLast || !item.href ? (
              <span className="font-bold text-[#267747] dark:text-[#00FF66] truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#267747] dark:hover:text-[#00FF66] transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
