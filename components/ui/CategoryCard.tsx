import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  count?: number;
  icon?: React.ReactNode;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  href,
  count,
  icon,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col justify-between p-5 rounded-xl bg-[#FFFDF8] dark:bg-[#302E29] border border-[#D8D0C2] dark:border-[#454139] hover:border-[#66705A] dark:hover:border-[#A5AD8C] hover:shadow-sm transition-all duration-200',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="p-2.5 rounded-lg bg-[#EAE3D5] dark:bg-[#292722] text-[#66705A] dark:text-[#A5AD8C] group-hover:bg-[#66705A] group-hover:text-[#FFFDF8] dark:group-hover:bg-[#A5AD8C] dark:group-hover:text-[#1F1E1B] transition-colors">
            {icon}
          </div>
          {count !== undefined && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EAE3D5] dark:bg-[#292722] text-[#68645D] dark:text-[#B8B1A5]">
              {count} {count === 1 ? 'Topic' : 'Topics'}
            </span>
          )}
        </div>
        <h3 className="text-sm font-bold text-[#242424] dark:text-[#F1EDE4] group-hover:text-[#66705A] dark:group-hover:text-[#A5AD8C] transition-colors mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-[#68645D] dark:text-[#B8B1A5] leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#D8D0C2]/50 dark:border-[#454139]/60 flex items-center justify-between text-xs font-medium text-[#66705A] dark:text-[#A5AD8C]">
        <span>Explore Category</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A] dark:text-[#A5AD8C]" />
      </div>
    </Link>
  );
};
