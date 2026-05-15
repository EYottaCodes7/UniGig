'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = 'Search services, skills, or people...',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="pl-10 h-12 rounded-xl border-border bg-card focus:border-primary focus:ring-primary/50"
      />
    </div>
  );
}
