import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border border-dashed bg-card/50 p-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <div className="max-w-md space-y-2">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action && (
        <Button className="mt-2 bg-primary hover:bg-secondary">
          {action.label}
        </Button>
      )}
    </div>
  );
}
