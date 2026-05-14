import { Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ListingCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  userAvatar: string;
  userName: string;
  userRating: number;
  image?: string;
}

export function ListingCard({
  id,
  title,
  category,
  price,
  description,
  userAvatar,
  userName,
  userRating,
  image,
}: ListingCardProps) {
  return (
    <Link href={`/listing/${id}`}>
      <div className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-primary/30 font-semibold text-2xl">
              {category.charAt(0)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4 gap-3">
          {/* Category Badge */}
          <Badge variant="secondary" className="w-fit bg-accent/20 text-accent border-0">
            {category}
          </Badge>

          {/* Title */}
          <h3 className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
            {description}
          </p>

          {/* User Info */}
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
              {userAvatar}
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-xs font-medium text-foreground truncate">{userName}</p>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">{userRating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-2 gap-2">
            <div className="text-lg font-bold text-primary">
              ${price}
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button size="sm" className="h-8 bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
