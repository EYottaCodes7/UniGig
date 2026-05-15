'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Tech Repairs',
  'Academic',
  'Delivery',
  'Second-hand',
  'Design',
  'Events',
  'Other',
];

interface CategoryPillsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryPills({ activeCategory, onCategoryChange }: CategoryPillsProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex items-center gap-2 px-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium transition-all whitespace-nowrap rounded-full border",
              activeCategory === category
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground hover:border-muted-foreground/30 border-transparent bg-muted/50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
