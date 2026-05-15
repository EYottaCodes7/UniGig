'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProfileCard } from '@/components/profile-card';
import { GigCard } from '@/components/GigCard';
import { Star, ArrowLeft, Heart, Share2, CheckCircle2, MapPin, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, use } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Updated Mock listing data with images
const LISTING_DATA: Record<string, any> = {
  '1': {
    id: '1',
    title: 'MacBook Pro Screen & Battery Replacement',
    category: 'Tech Repairs',
    price: 85,
    description: 'Expert repairs for all MacBook models. Quality parts used with 30-day warranty.',
    fullDescription: 'Is your MacBook running slow or has a cracked screen? I can help! I have over 3 years of experience in computer repair and specialize in Apple hardware.\n\nServices offered:\n• Screen replacement for MacBook Pro/Air\n• Battery replacement\n• Keyboard repair and cleaning\n• SSD upgrades and data recovery\n• OS reinstall and optimization\n\nI use high-quality replacement parts and provide a 30-day warranty on all my work. Most repairs are completed within 24-48 hours depending on part availability.',
    userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
    userName: 'Alex Rivera',
    userRating: 4.9,
    responseTime: '1-2 hours',
    reviews: 47,
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    location: 'Campus West',
  },
  '3': {
    id: '3',
    title: 'Calculus III & Physics II Peer Tutoring',
    category: 'Academic',
    price: 25,
    description: 'Master complex concepts with personalized peer tutoring. Specializing in STEM.',
    fullDescription: 'Struggling with triple integrals or Maxwell\'s equations? I\'m here to help! As an Engineering major, I\'ve aced these courses and know exactly where students usually get stuck.\n\nWhat I provide:\n• Step-by-step problem solving\n• Conceptual explanations (no just memorizing)\n• Exam prep strategy sessions\n• Digital notes from our sessions\n\nI offer both in-person (Library) and online sessions via Zoom. Group rates available if you bring a friend!',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    userName: 'Elena Vance',
    userRating: 5.0,
    responseTime: '30 mins',
    reviews: 32,
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    location: 'Main Library',
  },
};

const RELATED_GIGS = [
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
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbab?auto=format&fit=crop&q=80&w=800',
    location: 'Tech Hub',
  },
  {
    id: '2',
    title: 'Quick Food & Grocery Delivery',
    category: 'Delivery',
    price: 5,
    seller: {
      name: 'Jordan Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      rating: 4.8,
    },
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=800',
    location: 'Main Gate',
  },
];

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const listing = LISTING_DATA[unwrappedParams.id] || LISTING_DATA['1']; // Fallback for demo
  const [isFavorited, setIsFavorited] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-10">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back */}
        <div className="flex items-center justify-between mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/marketplace">
              <ArrowLeft className="h-4 w-4" />
              Back to search
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10" onClick={() => setIsFavorited(!isFavorited)}>
              <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-3xl bg-muted shadow-sm"
            >
              <Image 
                src={listing.image} 
                alt={listing.title} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                 <Badge className="bg-background/90 backdrop-blur-md text-foreground border-0 font-bold px-3 py-1">
                   {listing.category}
                 </Badge>
              </div>
            </motion.div>

            {/* Header Info */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-black font-heading tracking-tight leading-[1.1]">
                {listing.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground">{listing.userRating}</span>
                  <span>({listing.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{listing.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Verified Student</span>
                </div>
              </div>
            </div>

            <hr className="border-border/60" />

            {/* Price Box Mobile Only */}
            <div className="lg:hidden p-6 rounded-2xl bg-muted/30 border">
               <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Pricing</p>
                    <p className="text-3xl font-black text-foreground">${listing.price} <span className="text-sm font-normal text-muted-foreground">per gig</span></p>
                  </div>
                  <Button size="lg" className="rounded-full px-8 font-bold">Book Now</Button>
               </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">Service Description</h2>
              <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {listing.fullDescription}
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 'Guaranteed satisfaction',
                 'Fast campus delivery',
                 'Student-friendly pricing',
                 'Safe & secure meeting'
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/20 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-semibold">{text}</span>
                 </div>
               ))}
            </div>

            {/* Reviews Summary Placeholder */}
            <div className="pt-8 border-t">
               <h2 className="text-2xl font-bold font-heading mb-6">Student Reviews</h2>
               <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted overflow-hidden relative">
                             <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" fill />
                          </div>
                          <div>
                             <p className="font-bold">Student {i}</p>
                             <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                             </div>
                          </div>
                       </div>
                       <p className="text-muted-foreground leading-relaxed">
                         Great service! Alex was super helpful and fixed my screen in no time. Definitely recommend to everyone on campus.
                       </p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Desktop Price & Action */}
              <div className="hidden lg:block p-8 rounded-[2rem] bg-background border shadow-xl shadow-primary/5 space-y-6">
                 <div className="flex items-baseline justify-between">
                    <p className="text-4xl font-black text-foreground">${listing.price}</p>
                    <Badge variant="outline" className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Standard Gig</Badge>
                 </div>
                 
                 <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                       <Clock size={16} className="text-primary" />
                       Typically 24h delivery
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                       <Shield size={16} className="text-primary" />
                       30-day warranty
                    </div>
                 </div>

                 <Button size="lg" className="w-full h-14 rounded-full font-bold text-lg shadow-lg shadow-primary/20 mt-6">
                    Book Service
                 </Button>
                 <p className="text-center text-xs text-muted-foreground pt-4">You won&apos;t be charged yet</p>
              </div>

              {/* Seller Profile */}
              <ProfileCard 
                name={listing.userName}
                avatar={listing.userAvatar}
                rating={listing.userRating}
                reviewCount={listing.reviews}
                responseTime={listing.responseTime}
                isOnline={listing.isOnline}
              />
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        <section className="mt-20 pt-20 border-t">
           <div className="flex items-end justify-between mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-black font-heading tracking-tight">Similar to this</h2>
                <p className="text-muted-foreground">Other services you might be interested in.</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {RELATED_GIGS.map((gig) => (
                <GigCard key={gig.id} {...gig} />
              ))}
           </div>
        </section>
      </main>
    </div>
  );
}
