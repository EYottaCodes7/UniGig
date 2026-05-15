import { Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileCardProps {
  avatar: string;
  name: string;
  rating: number;
  reviewCount: number;
  responseTime: string;
  isOnline?: boolean;
}

export function ProfileCard({
  avatar,
  name,
  rating,
  reviewCount,
  responseTime,
  isOnline = true,
}: ProfileCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
      {/* Avatar and Online Status */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl overflow-hidden">
            {avatar}
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-accent border-2 border-card" />
          )}
        </div>
        <h3 className="text-lg font-bold text-center text-foreground">{name}</h3>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-border'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">
          {rating.toFixed(1)}
        </span>
        <span className="text-xs text-muted-foreground">
          ({reviewCount})
        </span>
      </div>

      {/* Response Time */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Responds in {responseTime}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 border-t border-border">
        <Button variant="outline" className="flex-1 gap-2">
          <MessageSquare className="h-4 w-4" />
          Message
        </Button>
        <Button className="flex-1 bg-primary hover:bg-secondary">
          View Profile
        </Button>
      </div>
    </div>
  );
}
