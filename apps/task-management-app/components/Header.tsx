'use client';

import { useRouter } from 'next/navigation';
import type { HeaderConfig } from '@/task-management-app/types/index';
import { twMerge } from '@uikit';

export default function Header({ header }: HeaderConfig) {
  const router = useRouter();

  return (
    <div className="flex h-16 w-full items-center space-x-6 bg-white px-6">
      {/* Place logo here */}
      <div className="h-4 w-4 rounded-full bg-orange-500" />
      <div className="flex gap-x-6 pl-6 text-2xl font-semibold">
        {header.map((item) => (
          <div
            className={twMerge('opacity-100', item.disabled && 'opacity-40')}
            key={item.title}
            onClick={() => !item.disabled && router.push(item.href)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
