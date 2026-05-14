'use client';

import { Navbar } from '@/components/navbar';
import { AuthForm } from '@/components/auth-form';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log('Signup:', formData);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center items-start gap-8 px-12 bg-gradient-to-br from-secondary/20 to-accent/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-2xl">
                U
              </div>
              <h2 className="text-3xl font-bold text-foreground">UniGig</h2>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Start Your Skill Exchange Journey
            </p>
            <p className="text-lg text-muted-foreground max-w-sm">
              Join thousands of students earning money and helping each other succeed.
            </p>
          </div>

          <div className="space-y-6 max-w-sm">
            {[
              { title: 'Easy Setup', desc: 'Create account in under 2 minutes' },
              { title: 'Zero Fees', desc: 'Keep all earnings from your services' },
              { title: 'Safe & Verified', desc: 'All transactions protected' },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-md mx-auto space-y-8">
            {isSuccess ? (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Welcome to UniGig!</h1>
                  <p className="text-muted-foreground">
                    Your account has been created successfully.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                  <h3 className="font-bold text-foreground text-left">Complete Your Profile:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    <li>○ Add a profile photo</li>
                    <li>○ Write a short bio</li>
                    <li>○ List your skills</li>
                    <li>○ Post your first service</li>
                  </ul>
                </div>
                <Link href="/create-listing">
                  <button className="w-full h-12 bg-primary hover:bg-secondary text-primary-foreground font-semibold rounded-lg transition-colors">
                    Post Your First Service
                  </button>
                </Link>
                <Link href="/marketplace">
                  <button className="w-full h-12 bg-card hover:bg-card/80 border border-border text-foreground font-semibold rounded-lg transition-colors">
                    Browse Marketplace
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Get Started</h1>
                  <p className="text-muted-foreground">
                    Create your account and join the community
                  </p>
                </div>

                <AuthForm type="signup" onSubmit={handleSubmit} />

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="h-12 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium text-foreground">
                    Google
                  </button>
                  <button className="h-12 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium text-foreground">
                    GitHub
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
