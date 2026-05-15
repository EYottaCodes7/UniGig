'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { GigCard } from '@/components/GigCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Sparkles, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURED_GIGS = [
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <Sparkles className="h-3 w-3" />
              <span>The perfect market place for AAU students</span>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="relative flex justify-center items-center mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Unbroke Logo" 
                  width={220} 
                  height={220} 
                  className="object-contain mix-blend-multiply dark:mix-blend-screen brightness-[1.3] contrast-[1.3] hover:brightness-[1.1] transition-all duration-300" 
                  priority
                />
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-6 leading-[1.1]">
              Turn your <span className="text-primary italic">skills</span> into <span className="underline decoration-primary/30 underline-offset-8">income.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              The premier student-to-student marketplace. From tech repairs to academic help, find everything you need on campus.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto gap-2 group">
                <Link href="/marketplace">
                  Explore Marketplace
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-bold border-2 w-full sm:w-auto hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all">
                <Link href="/create-listing">
                  Post a Gig
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
               <div className="flex items-center gap-2 font-bold text-sm">
                 <CheckCircle2 className="h-4 w-4 text-primary" />
                 <span>Verified Students</span>
               </div>
               <div className="flex items-center gap-2 font-bold text-sm">
                 <Zap className="h-4 w-4 text-primary" />
                 <span>Fast Response</span>
               </div>
               <div className="flex items-center gap-2 font-bold text-sm">
                 <ShieldCheck className="h-4 w-4 text-primary" />
                 <span>Secure Payments</span>
               </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Categories / Featured Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trending on campus</h2>
              <p className="text-muted-foreground text-lg">Services that your peers are loving right now.</p>
            </div>
            <Button asChild variant="link" className="text-lg font-bold p-0 h-auto gap-2 group">
              <Link href="/marketplace">
                See all listings
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_GIGS.map((gig, index) => (
              <GigCard 
                key={gig.id} 
                {...gig} 
                className="bg-background p-3 rounded-2xl border shadow-sm hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">How Unbroke Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Designed to fit campus life, whether you&apos;re looking to earn or save time.</p>
          </div>
          
          <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border shadow-sm"
            >
               <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                 <Search size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Find what you need</h3>
               <p className="text-muted-foreground leading-relaxed">Browse categorized services from verified students on your campus.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border shadow-sm"
            >
               <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                 <PlusSquare className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold mb-3">Post your skills</h3>
               <p className="text-muted-foreground leading-relaxed">List your services in minutes and start receiving requests from peers.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border shadow-sm"
            >
               <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 mb-6">
                 <Zap size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Connect & Exchange</h3>
               <p className="text-muted-foreground leading-relaxed">Chat directly, agree on details, and complete the exchange safely.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-7xl bg-foreground text-background rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Ready to start earning?</h2>
            <p className="text-xl opacity-70 mb-10 max-w-xl">Join thousands of students turning their talents into campus-wide services.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="h-14 px-10 rounded-full text-base font-bold text-foreground bg-background hover:bg-background/90">
                <Link href="/auth/signup">Create Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full text-base font-bold border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/marketplace">Browse Feed</Link>
              </Button>
            </div>
          </div>
          {/* Abstract pattern */}
          <div className="absolute right-[-10%] top-[-20%] w-[60%] h-[140%] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}

function PlusSquare({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
