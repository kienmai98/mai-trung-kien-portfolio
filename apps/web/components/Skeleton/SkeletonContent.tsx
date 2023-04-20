import { type ReactNode } from 'react';

interface SkeletonContentProps {
  loading: boolean;
  children?: ReactNode;
}

export function SkeletonContent({
  loading = true,
  children,
}: SkeletonContentProps) {
  return (
    <>
      {loading ? (
        <div className="grow space-y-4">
          <div className="h-6 w-1/4 animate-pulse rounded-md bg-gray-300" />
          <div className="h-6 w-2/4 animate-pulse rounded-md bg-gray-300" />
        </div>
      ) : (
        <div className="min-h-max">{children}</div>
      )}
    </>
  );
}
