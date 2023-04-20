import { type ReactNode } from 'react';

interface SkeletonImageProps {
  loading: boolean;
  children?: ReactNode;
}

export function SkeletonImage({
  loading = true,
  children,
}: SkeletonImageProps) {
  return (
    <>
      {loading ? (
        <div className="min-h-[10rem] w-full animate-pulse rounded-xl bg-gray-300" />
      ) : (
        children
      )}
    </>
  );
}
