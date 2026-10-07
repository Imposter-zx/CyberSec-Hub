import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-1.5 text-xs text-[#68645D] dark:text-[#B8B1A5] py-3', className)}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-[#66705A] dark:hover:text-[#A5AD8C] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-[#68645D]/60 dark:text-[#B8B1A5]/60 shrink-0" />
            {isLast || !item.href ? (
              <span className="font-semibold text-[#242424] dark:text-[#F1EDE4] truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#66705A] dark:hover:text-[#A5AD8C] transition-colors truncate max-w-[150px] sm:max-w-none"
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
