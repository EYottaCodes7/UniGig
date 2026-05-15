'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { GigCard } from '@/components/GigCard';
import { CategoryPills } from '@/components/CategoryPills';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const MOCK_GIGS = [
  // TECH REPAIRS
  {
    id: '1',
    title: 'MacBook Pro Screen & Battery Replacement',
    category: 'Tech Repairs',
    price: 85,
    seller: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    location: 'Campus West',
  },
  {
    id: '5',
    title: 'iPhone Screen Repair - All Models',
    category: 'Tech Repairs',
    price: 45,
    seller: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=800',
    location: 'Tech Hub',
  },
  {
    id: 'tech-3',
    title: 'Gaming PC Dusting & Thermal Paste Service',
    category: 'Tech Repairs',
    price: 30,
    seller: {
      name: 'Leo Zhang',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    location: 'Dorm 3C',
  },

  // ACADEMIC
  {
    id: '3',
    title: 'Calculus III & Physics II Peer Tutoring',
    category: 'Academic',
    price: 25,
    seller: {
      name: 'Elena Vance',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      rating: 5.0,
    },
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    location: 'Library',
  },
  {
    id: 'acad-2',
    title: 'Organic Chemistry Study Guide & Prep',
    category: 'Academic',
    price: 15,
    seller: {
      name: 'Marcus Thorne',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      rating: 4.7,
    },
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    location: 'Science Hall',
  },
  {
    id: 'acad-3',
    title: 'CV & Recommendation Letter Review',
    category: 'Academic',
    price: 20,
    seller: {
      name: 'Sofia Ruiz',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    location: 'Career Center',
  },

  // DELIVERY
  {
    id: '2',
    title: 'Quick Food & Grocery Delivery (Within 20 mins)',
    category: 'Delivery',
    price: 5,
    seller: {
      name: 'Jordan Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80&w=800',
    location: 'Main Gate',
  },
  {
    id: '6',
    title: 'Midnight Coffee & Snack Run',
    category: 'Delivery',
    price: 4,
    seller: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      rating: 4.95,
    },
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800',
    location: 'Library South',
  },
  {
    id: 'del-3',
    title: 'Dorm Delivery',
    category: 'Delivery',
    price: 3,
    seller: {
      name: 'Toby Miller',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100',
      rating: 4.6,
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    location: 'Dorm Delivery',
  },

  // SECOND-HAND (AirPods, Shoes, etc.)
  {
    id: '4',
    title: 'Sony WH-1000XM4 Noise Cancelling Headphones',
    category: 'Second-hand',
    price: 180,
    seller: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      rating: 4.7,
    },
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    location: 'Dorm 4B',
  },
  {
    id: 'sh-airpods',
    title: 'Apple AirPods Max - Silver (Like New)',
    category: 'Second-hand',
    price: 350,
    seller: {
      name: 'Chloe Sims',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100',
      rating: 5.0,
    },
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=800',
    location: 'Campus Center',
  },
  {
    id: 'sh-shoes',
    title: 'Nike Air Force 1 - White (Size 10)',
    category: 'Second-hand',
    price: 65,
    seller: {
      name: 'Jake Paulson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800',
    location: 'North Hall',
  },

  // DESIGN (Suits, Dresses, Makeup)
  {
    id: 'ds-suit',
    title: 'Professional Interview / Graduation Suit (M)',
    category: 'Design',
    price: 120,
    seller: {
      name: 'James Wong',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800',
    location: 'Business School',
  },
  {
    id: 'ds-dress',
    title: 'Emerald Green Satin Prom Dress (S)',
    category: 'Design',
    price: 95,
    seller: {
      name: 'Lila Grace',
      avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=100',
      rating: 5.0,
    },
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
    location: 'South Dorms',
  },
  {
    id: 'ds-makeup',
    title: 'Event Makeup Artist - Graduation Special',
    category: 'Design',
    price: 40,
    seller: {
      name: 'Aria M.',
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    location: 'Union Square',
  },

  // EVENTS
  {
    id: 'ev-debate',
    title: 'Campus Debate Hosted by Law Students',
    category: 'Events',
    price: 0,
    seller: {
      name: 'Legal Society',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    location: 'Moot Court Room',
  },
  {
    id: 'ev-workshop',
    title: 'Full-Stack Workshop by CS Students',
    category: 'Events',
    price: 10,
    seller: {
      name: 'Dev Club',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100',
      rating: 5.0,
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    location: 'Tech Lab 2',
  },
  {
    id: 'ev-party',
    title: 'Post-Exams Rooftop Social',
    category: 'Events',
    price: 5,
    seller: {
      name: 'Student Union',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=100',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    location: 'The Union Terrace',
  },

  // OTHER
  {
    id: 'other-2',
    title: 'Normal Bicycle Rental (Daily)',
    category: 'Other',
    price: 8,
    seller: {
      name: 'Ben Carter',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
      rating: 4.7,
    },
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    location: 'Main Quad',
  },
  {
    id: 'other-3',
    title: 'Photography Mini-Session (Campus)',
    category: 'Other',
    price: 25,
    seller: {
      name: 'Chris P.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      rating: 4.9,
    },
    image: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=800',
    location: 'Botanical Garden',
  },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGigs = MOCK_GIGS.filter(gig => {
    const matchesSearch = gig.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || gig.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pt-4 pb-2 sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search on Unbroke..." 
            className="h-12 w-full rounded-2xl border bg-muted/30 pl-10 pr-4 text-base shadow-sm focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-10 sm:px-6 lg:px-8">
        
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold font-heading tracking-tight">Explore Services</h1>
          <p className="text-muted-foreground">Find the best student skills on campus.</p>
        </div>

        {/* Categories & Filter */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="flex-1 overflow-hidden">
            <CategoryPills onCategoryChange={setActiveCategory} activeCategory={activeCategory} />
          </div>
          <Button variant="outline" size="icon" className="shrink-0 rounded-full h-11 w-11 md:h-10 md:w-10">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {activeCategory === 'All' ? 'Featured Gigs' : `${activeCategory} Listings`}
          </h2>
          <span className="text-xs text-muted-foreground">
            {filteredGigs.length} results found
          </span>
        </div>

        {/* Listing Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredGigs.map((gig, index) => (
              <GigCard 
                key={gig.id} 
                {...gig} 
                className={cn(
                  "opacity-0",
                  "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
                )}
                style={{ animationDelay: `${index * 50}ms` } as any}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredGigs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-bold">No gigs found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </main>
    </div>
  );
}
