'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListingCard } from '@/components/listing-card';
import { Star, MessageSquare, MapPin, Award, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

const USER_DATA = {
  id: '1',
  name: 'John Davis',
  avatar: 'JD',
  bio: 'Math enthusiast with a passion for teaching. PhD candidate in Mathematics.',
  location: 'University Campus',
  joinDate: 'January 2021',
  rating: 4.9,
  reviews: 47,
  completedServices: 245,
  responseTime: '1-2 hours',
  isOnline: true,
  skills: ['Calculus', 'Linear Algebra', 'Statistics', 'Test Prep'],
  listings: [
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
      id: '15',
      title: 'Linear Algebra Help',
      category: 'Tutoring',
      price: 28,
      description: 'Master matrices, eigenvalues, and vector spaces with clear explanations.',
      userAvatar: 'JD',
      userName: 'John Davis',
      userRating: 4.9,
    },
    {
      id: '16',
      title: 'SAT/ACT Math Prep',
      category: 'Tutoring',
      price: 35,
      description: 'Proven strategies and practice for standardized math tests.',
      userAvatar: 'JD',
      userName: 'John Davis',
      userRating: 4.9,
    },
  ],
  recentRequests: [
    { id: 1, from: 'Emma Wilson', status: 'completed', date: '2 days ago' },
    { id: 2, from: 'Michael Chen', status: 'in-progress', date: '5 hours ago' },
    { id: 3, from: 'Sarah Lee', status: 'completed', date: '1 week ago' },
  ],
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {/* Left - User Info */}
              <div className="flex gap-6 flex-1">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-bold text-3xl flex-shrink-0">
                  {USER_DATA.avatar}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-3xl font-bold text-foreground">{USER_DATA.name}</h1>
                    {USER_DATA.isOnline && (
                      <Badge className="bg-accent text-accent-foreground">
                        Online
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{USER_DATA.bio}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {USER_DATA.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Joined {USER_DATA.joinDate}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <div className="flex flex-col gap-0">
                        <span className="font-bold text-foreground">
                          {USER_DATA.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({USER_DATA.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0">
                      <span className="font-bold text-foreground">
                        {USER_DATA.completedServices}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Completed
                      </span>
                    </div>
                    <div className="flex flex-col gap-0">
                      <span className="font-bold text-foreground">
                        {USER_DATA.responseTime}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Response time
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Actions */}
              <div className="flex flex-col gap-2 sm:flex-1">
                <Button className="gap-2 bg-primary hover:bg-secondary h-12">
                  <MessageSquare className="h-5 w-5" />
                  Message
                </Button>
                <Button variant="outline" className="h-12 border-border gap-2">
                  <Heart className="h-5 w-5" />
                  Save Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {USER_DATA.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="border-primary/30">
                <Award className="h-3 w-3 mr-1" />
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="border-b border-border bg-transparent p-0 h-auto w-full justify-start rounded-none">
            <TabsTrigger
              value="services"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 py-2"
            >
              Services ({USER_DATA.listings.length})
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 py-2 ml-8"
            >
              Recent Requests
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 py-2 ml-8"
            >
              About
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {USER_DATA.listings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
            <Link href="/create-listing">
              <Button className="gap-2 bg-primary hover:bg-secondary">
                Create New Service
              </Button>
            </Link>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-4">
            <div className="space-y-2">
              {USER_DATA.recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="rounded-lg border border-border bg-card p-4 flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Request from {request.from}</p>
                    <p className="text-sm text-muted-foreground">{request.date}</p>
                  </div>
                  <Badge
                    variant={request.status === 'completed' ? 'default' : 'outline'}
                    className={request.status === 'completed' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {request.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {USER_DATA.bio} I have been tutoring for over 5 years and specialize in making complex mathematical concepts accessible to students of all levels.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Member Since</h4>
                  <p className="text-muted-foreground">{USER_DATA.joinDate}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Response Time</h4>
                  <p className="text-muted-foreground">{USER_DATA.responseTime}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Languages</h4>
                <p className="text-muted-foreground">English (Native), Spanish (Fluent)</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
