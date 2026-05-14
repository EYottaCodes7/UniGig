import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon?: LucideIcon;
  value: string | number;
  label: string;
  description?: string;
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  description,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-2">
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm font-medium text-foreground">{label}</div>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
