'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  'All',
  'Tutoring',
  'Tech',
  'Design',
  'Delivery',
  'Second-Hand',
  'Academic Help',
];

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          onClick={() => handleCategoryClick(category)}
          variant={activeCategory === category ? 'default' : 'outline'}
          className={`whitespace-nowrap transition-all ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground hover:bg-secondary'
              : 'border-border hover:border-primary/50'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
