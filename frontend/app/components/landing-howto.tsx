const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your UniGig account and set up your profile with your skills and interests.',
  },
  {
    number: '2',
    title: 'Browse & Request',
    description: 'Explore available services or post what you need. Connect with other students.',
  },
  {
    number: '3',
    title: 'Collaborate & Earn',
    description: 'Work together on projects, complete requests, and start building your reputation.',
  },
];

export function LandingHowTo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden sm:flex absolute -right-8 top-8 text-primary/30 text-2xl">
                  →
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
