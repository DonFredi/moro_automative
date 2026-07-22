import { Skeleton } from "@/shared/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="section-wrapper flex min-h-[60vh] flex-col gap-6 py-16">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-64 w-full" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}
