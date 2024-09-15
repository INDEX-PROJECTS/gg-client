import { cn } from '@/src/shared/lib/utils/cnMerge';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-white-300', className)} {...props} />;
}

export { Skeleton };
