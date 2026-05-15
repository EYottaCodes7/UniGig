import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
  const isUrl = avatar.startsWith('http');

  return (
    <div className="rounded-2xl border bg-card p-6 flex flex-col gap-6 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-muted border-2 border-primary/20 p-1">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
              {isUrl ? (
                <Image src={avatar} alt={name} fill className="object-cover" />
              ) : (
                <span>{avatar}</span>
              )}
            </div>
          </div>
          {isOnline && (
            <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-card ring-2 ring-emerald-500/20" />
          )}
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h3 className="text-xl font-bold text-foreground font-heading tracking-tight">{name}</h3>
            <CheckCircle2 className="h-4 w-4 text-primary fill-primary/10" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">Verified Student</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-y">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-foreground">{rating.toFixed(1)}</span>
          </div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Rating</p>
        </div>
        <div className="text-center">
          <div className="font-bold text-foreground mb-0.5">{reviewCount}</div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Reviews</p>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full rounded-full font-bold shadow-sm shadow-primary/20 py-6">
          <MessageSquare className="h-5 w-5 mr-2" />
          Message {name.split(' ')[0]}
        </Button>
        <Button variant="outline" className="w-full rounded-full font-bold py-6">
          View Profile
        </Button>
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground">Typical response: <span className="text-foreground font-medium">{responseTime}</span></p>
      </div>
    </div>
  );
}
