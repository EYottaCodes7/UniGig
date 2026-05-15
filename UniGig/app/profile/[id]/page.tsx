'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GigCard } from '@/components/GigCard';
import { Star, MessageSquare, MapPin, Award, Clock, ShieldCheck, Settings, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const USER_DATA = {
  id: '1',
  name: 'Alex Rivera',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
  bio: 'Senior CS student specializing in hardware repairs and full-stack development. Helping fellow students keep their tech running since 2021.',
  location: 'Campus West',
  joinDate: 'January 2021',
  rating: 4.9,
  reviews: 47,
  completedServices: 245,
  responseTime: '1-2 hours',
  isOnline: true,
  skills: ['Hardware Repair', 'Software Dev', 'Cybersecurity', 'Tutoring'],
  listings: [
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
          name: 'Alex Rivera',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
          rating: 4.9,
        },
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbab?auto=format&fit=crop&q=80&w=800',
        location: 'Tech Hub',
    },
  ],
  recentRequests: [
    { id: 1, from: 'Emma Wilson', service: 'MacBook Repair', status: 'completed', date: '2 days ago' },
    { id: 2, from: 'Michael Chen', service: 'Software Install', status: 'in-progress', date: '5 hours ago' },
    { id: 3, from: 'Sarah Lee', service: 'Battery Swap', status: 'completed', date: '1 week ago' },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-10">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        
        {/* Profile Header Card */}
        <div className="relative mb-12">
          {/* Cover Placeholder */}
          <div className="h-32 md:h-48 w-full rounded-[2rem] bg-gradient-to-r from-primary/20 to-secondary/20 mb-[-4rem]" />
          
          <div className="px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-end gap-6">
               <div className="relative">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-[2rem] bg-background p-1.5 shadow-xl">
                    <div className="relative h-full w-full rounded-[1.6rem] overflow-hidden bg-muted">
                      <Image src={USER_DATA.avatar} alt={USER_DATA.name} fill className="object-cover" />
                    </div>
                  </div>
                  {USER_DATA.isOnline && (
                    <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-emerald-500 border-4 border-background" />
                  )}
               </div>

               <div className="flex-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h1 className="text-3xl md:text-4xl font-black font-heading tracking-tight">{USER_DATA.name}</h1>
                          <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                           <MapPin size={16} /> {USER_DATA.location} &bull; Joined {USER_DATA.joinDate}
                        </p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-full font-bold">
                           <Settings size={16} className="mr-2" />
                           Edit Profile
                        </Button>
                        <Button size="sm" className="rounded-full font-bold px-6">
                           Share
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Sidebar Stats & Info */}
           <div className="lg:col-span-4 space-y-8">
              <div className="rounded-3xl border bg-card p-8 space-y-6 shadow-sm">
                 <h2 className="text-xl font-bold font-heading">About Me</h2>
                 <p className="text-muted-foreground leading-relaxed">{USER_DATA.bio}</p>
                 
                 <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                       <p className="text-2xl font-black">{USER_DATA.rating}</p>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Rating</p>
                    </div>
                    <div>
                       <p className="text-2xl font-black">{USER_DATA.completedServices}</p>
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Gigs Done</p>
                    </div>
                 </div>

                 <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                       {USER_DATA.skills.map(skill => (
                         <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1 font-semibold text-xs border-0">
                           {skill}
                         </Badge>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Achievements / Trust */}
              <div className="rounded-3xl border border-dashed p-8 bg-muted/20">
                 <h3 className="font-bold flex items-center gap-2 mb-4">
                    <Award className="text-primary" /> Achievements
                 </h3>
                 <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" title="Top Rated">
                       <Star size={20} fill="currentColor" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" title="Fast Responder">
                       <Clock size={20} />
                    </div>
                 </div>
              </div>
           </div>

           {/* Tabs / Main Activity */}
           <div className="lg:col-span-8">
              <Tabs defaultValue="services" className="space-y-8">
                 <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
                    <TabsTrigger value="services" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-sm font-bold uppercase tracking-widest">
                       My Services
                    </TabsTrigger>
                    <TabsTrigger value="requests" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-sm font-bold uppercase tracking-widest">
                       Recent Requests
                    </TabsTrigger>
                 </TabsList>

                 <TabsContent value="services" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {USER_DATA.listings.map((gig) => (
                         <GigCard key={gig.id} {...gig} />
                       ))}
                       
                       <Link href="/create-listing" className="group">
                          <div className="h-full border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center p-10 hover:border-primary/50 hover:bg-primary/5 transition-all min-h-[300px]">
                             <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <PlusSquare size={32} />
                             </div>
                             <p className="font-bold text-lg">Post new service</p>
                             <p className="text-sm text-muted-foreground mt-1">Start earning with your skills</p>
                          </div>
                       </Link>
                    </div>
                 </TabsContent>

                 <TabsContent value="requests" className="mt-0">
                    <div className="rounded-3xl border bg-card overflow-hidden">
                       <div className="divide-y">
                          {USER_DATA.recentRequests.map(req => (
                             <div key={req.id} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                                <div className="flex items-center gap-4">
                                   <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center font-bold text-primary">
                                      {req.from.charAt(0)}
                                   </div>
                                   <div>
                                      <p className="font-bold text-foreground">{req.service}</p>
                                      <p className="text-sm text-muted-foreground">From {req.from} &bull; {req.date}</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-4">
                                   <Badge variant={req.status === 'completed' ? 'secondary' : 'default'} className="rounded-full font-bold px-3">
                                      {req.status}
                                   </Badge>
                                   <Button variant="ghost" size="icon" className="rounded-full">
                                      <ExternalLink size={18} />
                                   </Button>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </TabsContent>
              </Tabs>
           </div>
        </div>
      </main>
    </div>
  );
}

// Helper icons
function PlusSquare({ className, size = 24 }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
