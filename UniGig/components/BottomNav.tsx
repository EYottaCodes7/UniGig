'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Search', href: '/marketplace', icon: Search },
  { label: 'Post', href: '/create-listing', icon: PlusSquare },
  { label: 'Profile', href: '/profile/1', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] block border-t bg-background/95 backdrop-blur-md md:hidden pointer-events-auto">
      <div className="flex items-center justify-around px-2 py-3 pb-[env(safe-area-inset-bottom,12px)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-1 px-3 group flex-1 py-1"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              <span className={cn(
                "text-[10px] font-bold transition-all duration-300",
                isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-70"
              )}>
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-pill-bg"
                  className="absolute inset-0 bg-primary/10 rounded-full mx-2 my-1"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute top-0 h-1 w-6 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
