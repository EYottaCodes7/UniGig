import { Users, BookOpen, CheckCircle } from 'lucide-react';
import { StatsCard } from '@/components/stats-card';

export function LandingStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Campus Students
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See why thousands choose UniGig for their skill exchange needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard
            icon={Users}
            value="2,000+"
            label="Active Students"
            description="Connected daily"
          />
          <StatsCard
            icon={BookOpen}
            value="850+"
            label="Listings Posted"
            description="Services available"
          />
          <StatsCard
            icon={CheckCircle}
            value="3,200+"
            label="Services Completed"
            description="Trusted transactions"
          />
        </div>
      </div>
    </section>
  );
}
