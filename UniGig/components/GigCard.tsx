'use client';

import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GigCardProps {
  title: string;
  price: number;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  image: string;
  category: string;
  location?: string;
  className?: string;
}

export function GigCard({
  title,
  price,
  seller,
  image,
  category,
  location,
  className
}: GigCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn("group cursor-pointer flex flex-col gap-3", className)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/90 backdrop-blur-sm text-xs font-bold shadow-sm">
          ${price}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
            {category}
          </span>
          <div className="flex items-center gap-1 text-xs font-medium">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{seller.rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <div className="relative h-5 w-5 rounded-full overflow-hidden border border-border bg-muted">
            <Image
              src={seller.avatar}
              alt={seller.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {seller.name}
          </span>
          {location && (
            <div className="flex items-center gap-0.5 text-xs text-muted-foreground/60 ml-auto">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
