import { Zap, Briefcase, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Find Help Fast',
    description: 'Browse thousands of services from tutoring to tech help. Find exactly what you need.',
  },
  {
    icon: Briefcase,
    title: 'Offer Your Skills',
    description: 'Share your expertise and start earning. Set your own rates and build your reputation.',
  },
  {
    icon: Users,
    title: 'Collaborate on Projects',
    description: 'Work with other students on group projects, assignments, and creative endeavors.',
  },
];

export function LandingFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose Unbroke?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built by students, for students. Simple, safe, and smart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-8 space-y-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
