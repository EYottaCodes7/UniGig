'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { SearchBar } from '@/components/search-bar';
import { CategoryFilter } from '@/components/category-filter';
import { ListingCard } from '@/components/listing-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const ALL_LISTINGS = [
  {
    id: '1',
    title: 'Advanced Calculus Tutoring',
    category: 'Tutoring',
    price: 25,
    description: 'Expert calculus tutor with 5 years experience. Perfect for exams!',
    userAvatar: 'JD',
    userName: 'John Davis',
    userRating: 4.9,
  },
  {
    id: '2',
    title: 'Web Development Projects',
    category: 'Tech',
    price: 50,
    description: 'Build your portfolio with real projects. React, Node.js expertise.',
    userAvatar: 'SA',
    userName: 'Sarah Ahmed',
    userRating: 5.0,
  },
  {
    id: '3',
    title: 'Graphic Design Services',
    category: 'Design',
    price: 30,
    description: 'Custom logos, posters, social media designs. Quick turnaround!',
    userAvatar: 'MC',
    userName: 'Maria Chen',
    userRating: 4.8,
  },
  {
    id: '4',
    title: 'Essay Writing Help',
    category: 'Academic Help',
    price: 20,
    description: 'Research and structure guidance for all essay types.',
    userAvatar: 'RP',
    userName: 'Robert Park',
    userRating: 4.7,
  },
  {
    id: '5',
    title: 'Physics Problem Solving',
    category: 'Tutoring',
    price: 30,
    description: 'Struggling with physics? I help break down complex concepts clearly.',
    userAvatar: 'LK',
    userName: 'Lisa Kim',
    userRating: 4.9,
  },
  {
    id: '6',
    title: 'UI/UX Design Critique',
    category: 'Design',
    price: 40,
    description: 'Get professional feedback on your design projects and improve them.',
    userAvatar: 'TJ',
    userName: 'Tyler Johnson',
    userRating: 4.6,
  },
  {
    id: '7',
    title: 'Database & SQL Mentoring',
    category: 'Tech',
    price: 35,
    description: 'Learn SQL and database design from an experienced developer.',
    userAvatar: 'NP',
    userName: 'Natalie Patel',
    userRating: 4.95,
  },
  {
    id: '8',
    title: 'Used Textbook - Biology',
    category: 'Second-Hand',
    price: 15,
    description: 'Excellent condition. All notes included. Non-negotiable price.',
    userAvatar: 'DW',
    userName: 'Derek Wilson',
    userRating: 4.5,
  },
  {
    id: '9',
    title: 'Research Paper Assistance',
    category: 'Academic Help',
    price: 25,
    description: 'Help with research, structure, citations, and proofreading.',
    userAvatar: 'EL',
    userName: 'Emma Lee',
    userRating: 4.8,
  },
  {
    id: '10',
    title: 'Mobile App Development',
    category: 'Tech',
    price: 60,
    description: 'Build iOS/Android apps. Flutter and React Native specialist.',
    userAvatar: 'CO',
    userName: 'Carlos Ortiz',
    userRating: 5.0,
  },
  {
    id: '11',
    title: 'Statistics Homework Help',
    category: 'Tutoring',
    price: 28,
    description: 'SPSS, R, Python for stats. Exam prep and project help.',
    userAvatar: 'MM',
    userName: 'Marcus Miller',
    userRating: 4.7,
  },
  {
    id: '12',
    title: 'Logo Design & Branding',
    category: 'Design',
    price: 45,
    description: 'Professional logo design with unlimited revisions. Fast turnaround.',
    userAvatar: 'SN',
    userName: 'Sophie Norton',
    userRating: 4.9,
  },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredListings = ALL_LISTINGS.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || listing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Marketplace</h1>
            <p className="text-muted-foreground">
              Browse {ALL_LISTINGS.length} services from campus students
            </p>
          </div>
          <Link href="/create-listing">
            <Button className="gap-2 bg-primary hover:bg-secondary">
              <Plus className="h-5 w-5" />
              Post Service
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            placeholder="Search for tutoring, tech help, design, and more..."
            onSearch={setSearchQuery}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter onCategoryChange={setActiveCategory} />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredListings.length} result{filteredListings.length !== 1 ? 's' : ''}
        </div>

        {/* Listing Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border border-dashed bg-card/50 p-12 text-center">
            <h3 className="text-lg font-bold text-foreground mb-2">
              No services found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
