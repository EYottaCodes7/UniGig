'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Browse', href: '/marketplace' },
    { label: 'Post Service', href: '/create-listing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              U
            </div>
            <span className="hidden text-xl font-bold text-foreground sm:inline">UniGig</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="gap-2 bg-primary hover:bg-secondary">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="pt-2 space-y-2 border-t border-border">
              <Link href="/auth/login" className="block">
                <Button variant="outline" className="w-full gap-2" onClick={() => setIsOpen(false)}>
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup" className="block">
                <Button
                  className="w-full gap-2 bg-primary hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
