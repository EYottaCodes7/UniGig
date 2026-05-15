'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProfileCard } from '@/components/profile-card';
import { ListingCard } from '@/components/listing-card';
import { Star, MessageSquare, ArrowLeft, Heart, Share2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock listing data
const LISTING_DATA: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Advanced Calculus Tutoring - Exam Prep & Homework Help',
    category: 'Tutoring',
    price: 25,
    description: 'Expert calculus tutor with 5 years of experience helping students ace their exams! I specialize in limits, derivatives, integrals, and multivariable calculus. Whether you need last-minute exam prep or ongoing homework help, I\'m here to break down complex concepts into simple, understandable terms.',
    fullDescription: 'I have been tutoring calculus for over 5 years and have helped hundreds of students improve their grades. My approach is personalized to your learning style and focuses on understanding concepts rather than just memorizing formulas.\n\nWhat I offer:\n• One-on-one tutoring sessions\n• Homework help and problem solving\n• Exam prep and practice tests\n• Concept explanation and clarification\n• Available on flexible schedule\n\nI respond quickly and am available for sessions multiple times per week. Most students see improvement within 2-3 sessions.',
    userAvatar: 'JD',
    userName: 'John Davis',
    userRating: 4.9,
    userBio: 'Math enthusiast with a passion for teaching. PhD candidate in Mathematics.',
    responseTime: '1-2 hours',
    reviews: 47,
    isOnline: true,
    tags: ['Calculus', 'Tutoring', 'Exam Prep', 'Homework'],
    tags2: ['Mathematics', 'College Level', 'Fast Response'],
  },
  '2': {
    id: '2',
    title: 'Web Development Projects - React, Node.js, Full Stack',
    category: 'Tech',
    price: 50,
    description: 'Build your portfolio with real projects. React, Node.js expertise.',
    fullDescription: 'Experienced full-stack developer helping students build impressive portfolio projects.',
    userAvatar: 'SA',
    userName: 'Sarah Ahmed',
    userRating: 5.0,
    userBio: 'Senior developer at startup. CS degree from prestigious university.',
    responseTime: '30 minutes',
    reviews: 62,
    isOnline: true,
    tags: ['React', 'Node.js', 'JavaScript', 'Web Dev'],
    tags2: ['Full Stack', 'Portfolio', 'Mentoring'],
  },
};

const RELATED_LISTINGS = [
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
    id: '7',
    title: 'Database & SQL Mentoring',
    category: 'Tech',
    price: 35,
    description: 'Learn SQL and database design from an experienced developer.',
    userAvatar: 'NP',
    userName: 'Natalie Patel',
    userRating: 4.95,
  },
];

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = LISTING_DATA[params.id];
  const [isFavorited, setIsFavorited] = useState(false);

  if (!listing) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Listing not found</h1>
            <Link href="/marketplace">
              <Button className="bg-primary hover:bg-secondary">
                Back to Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/marketplace">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="h-96 w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary/30 font-semibold text-4xl">
              {listing.category.charAt(0)}
            </div>

            {/* Title & Category */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-0">
                    {listing.category}
                  </Badge>
                  <h1 className="text-4xl font-bold text-foreground leading-tight">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">{listing.userRating}</span>
                      <span className="text-muted-foreground">({listing.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isFavorited ? 'fill-accent text-accent' : 'text-muted-foreground'
                      }`}
                    />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">${listing.price}</span>
                <span className="text-muted-foreground">per session</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">About this service</h2>
              <p className="whitespace-pre-line text-lg text-muted-foreground leading-relaxed">
                {listing.fullDescription}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground">Skills & Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[...listing.tags, ...listing.tags2].map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* About Service */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h3 className="font-bold text-foreground">What&apos;s included</h3>
              <ul className="space-y-3">
                {[
                  'Personalized tutoring sessions tailored to your needs',
                  'Detailed explanation of difficult concepts',
                  'Practice problems and exam preparation',
                  'Quick response time (usually within 1-2 hours)',
                  'Flexible scheduling to fit your calendar',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Card */}
            <ProfileCard
              avatar={listing.userAvatar}
              name={listing.userName}
              rating={listing.userRating}
              reviewCount={listing.reviews}
              responseTime={listing.responseTime}
              isOnline={listing.isOnline}
            />

            {/* CTA */}
            <div className="space-y-3">
              <Button className="w-full h-12 gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold">
                <MessageSquare className="h-5 w-5" />
                Request Service
              </Button>
              <Button variant="outline" className="w-full h-12 border-border">
                Contact Seller
              </Button>
            </div>

            {/* Info Box */}
            <div className="rounded-2xl border border-border bg-card/50 p-4 space-y-2 text-sm">
              <h4 className="font-bold text-foreground">Things to know</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Response time: {listing.responseTime}</li>
                <li>• Completed: {listing.reviews * 50}+ projects</li>
                <li>• Member since 2021</li>
                <li>• Average rating: {listing.userRating}/5.0</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        <section className="mt-16 space-y-8 border-t border-border pt-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Similar services</h2>
            <p className="text-muted-foreground">Other {listing.category.toLowerCase()} services you might like</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_LISTINGS.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
