import { Navbar } from '@/components/navbar';
import { LandingHero } from './components/landing-hero';
import { LandingStats } from './components/landing-stats';
import { LandingFeatures } from './components/landing-features';
import { LandingHowTo } from './components/landing-howto';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ListingCard } from '@/components/listing-card';

const SAMPLE_LISTINGS = [
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <LandingHowTo />

      {/* Marketplace Preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Popular Services
              </h2>
              <p className="text-muted-foreground">
                See what other students are offering
              </p>
            </div>
            <Link href="/marketplace">
              <Button className="bg-primary hover:bg-secondary">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLE_LISTINGS.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Start?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Join thousands of students already earning and learning on UniGig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary hover:bg-secondary">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">How It Works</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Safety</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Guidelines</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 UniGig. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Discord</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
