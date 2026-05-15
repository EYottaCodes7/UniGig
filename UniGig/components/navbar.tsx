'use client';

import Link from 'next/link';
import { LogIn, UserPlus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Post a Gig', href: '/create-listing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-12 overflow-hidden transition-transform group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Unbroke Logo" 
                fill 
                className="object-contain mix-blend-multiply dark:mix-blend-screen overflow-visible scale-[1.3] brightness-[1.3] contrast-[1.3]" 
              />
            </div>
            <span className="text-xl font-bold tracking-tight font-heading text-foreground">Unbroke</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search & Auth */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search gigs..." 
                className="h-9 w-64 rounded-full border bg-muted/50 pl-10 pr-4 text-sm transition-all focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                suppressHydrationWarning
              />
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="font-medium">
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button asChild size="sm" className="rounded-full px-5 font-semibold shadow-sm shadow-primary/20">
                <Link href="/auth/signup">Join Unbroke</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
