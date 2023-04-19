'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/web/config/site';
import { type MainNavItem } from '@/web/types';
import { Icon } from 'libs/uikit/src/index';

interface ExternalNavProps {
  items?: MainNavItem[];
}

export function ExternalNav({ items }: ExternalNavProps) {
  return (
    <>
      {items?.length && (
        <nav className="flex gap-x-4">
          {items.map((item, index) => (
            <Link
              className={twMerge(
                'flex text-black sm:text-sm',
                item.disabled && 'cursor-not-allowed opacity-40'
              )}
              href={item.disabled ? '#' : item.href}
              key={index}
            >
              <Icon width={26} height={26} icon={item.icon || ''} />
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
