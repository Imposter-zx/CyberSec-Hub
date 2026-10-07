import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  count?: number;
  icon?: React.ReactNode;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  href,
  count,
  icon,
  tags,
  difficulty = 'all-levels',
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col justify-between p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#262E28] border border-[#DDE5DE] dark:border-[#3A4840] hover:border-[#3F7D5A] dark:hover:border-[#6AAF8A] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-xs relative overflow-hidden',
        className
      )}
    >
      {/* Decorative subtle top edge line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#3F7D5A] dark:bg-[#6AAF8A] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="p-3 rounded-xl bg-[#EBF4EF] text-[#3F7D5A] dark:bg-[#3F7D5A]/20 dark:text-[#6AAF8A] group-hover:bg-[#3F7D5A] group-hover:text-white dark:group-hover:bg-[#6AAF8A] dark:group-hover:text-[#181C1A] transition-all duration-200 shadow-xs">
            {icon}
          </div>
          {count !== undefined && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EEF3EE] dark:bg-[#202722] text-[#3F7D5A] dark:text-[#6AAF8A] border border-[#DDE5DE] dark:border-[#3A4840]">
              <BookOpen className="w-3 h-3" />
              <span>{count} {count === 1 ? 'Topic' : 'Topics'}</span>
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-[#18221C] dark:text-[#E8F0EA] group-hover:text-[#3F7D5A] dark:group-hover:text-[#6AAF8A] transition-colors mb-2">
          {title}
        </h3>

        <p className="text-xs text-[#68736B] dark:text-[#A0AFA5] leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-[#EEF3EE] dark:bg-[#202722] text-[#68736B] dark:text-[#A0AFA5] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-[#DDE5DE]/60 dark:border-[#3A4840]/60 flex items-center justify-between text-xs font-semibold text-[#3F7D5A] dark:text-[#6AAF8A]">
        <span className="group-hover:underline">Explore Domain</span>
        <div className="p-1 rounded-full bg-[#EBF4EF] dark:bg-[#3F7D5A]/20 group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
};
