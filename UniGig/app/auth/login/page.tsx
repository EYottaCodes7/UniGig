'use client';

import { Navbar } from '@/components/navbar';
import { AuthForm } from '@/components/auth-form';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log('Login:', formData);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center items-start gap-8 px-12 bg-linear-to-br from-primary/20 to-secondary/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-visible">
                <Image 
                  src="/logo.png" 
                  alt="Unbroke Logo" 
                  fill 
                  className="object-contain mix-blend-multiply dark:mix-blend-screen scale-[1.7] origin-left brightness-[1.3] contrast-[1.3]" 
                />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Unbroke</h2>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Turn Your Skills Into Income
            </p>
            <p className="text-lg text-muted-foreground max-w-sm">
              Connect with thousands of students on campus. Earn money by offering your skills or find the help you need.
            </p>
          </div>

          <div className="space-y-6 max-w-sm">
            {[
              { title: 'Find Help Fast', desc: 'Browse services or post requests' },
              { title: 'Earn Money', desc: 'Share your skills and get paid' },
              { title: 'Build Reputation', desc: 'Grow your profile and reviews' },
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
                  <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
                  <p className="text-muted-foreground">
                    You&apos;ve successfully signed in to your account.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 space-y-4 text-left">
                  <h3 className="font-bold text-foreground">What&apos;s next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Explore the marketplace</li>
                    <li>✓ Post your services</li>
                    <li>✓ Connect with other students</li>
                  </ul>
                </div>
                <Link href="/marketplace">
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                    Go to Marketplace
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
                  <p className="text-muted-foreground">
                    Sign in to your Unbroke account to continue
                  </p>
                </div>

                <AuthForm type="login" onSubmit={handleSubmit} />

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Social Login */}
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
