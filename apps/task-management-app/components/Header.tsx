'use client';

import type { HeaderConfig } from '@/task-management-app/types/index';
import { twMerge } from '@uikit';

export default function Header({ header }: HeaderConfig) {
  return (
    <div className="flex justify-between items-center px-6">
      <div className="flex gap-x-6 text-2xl font-semibold py-4">
        {header.map((item) => (
          <div
            className={twMerge('opacity-100', item.disabled && 'opacity-40')}
            key={item.title}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
