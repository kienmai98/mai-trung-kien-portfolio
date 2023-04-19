'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/web/config/site';
import { type MainNavItem } from '@/web/types';
import { Icon } from 'libs/uikit/src/index';

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-x-20">
      <Link className="flex items-center gap-x-2" href="/">
        <div className="h-4 w-4 rounded-full bg-black" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length && (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => (
            <Link
              className={twMerge(
                'flex items-center text-lg font-semibold text-slate-600 sm:text-sm',
                item.disabled && 'cursor-not-allowed opacity-40'
              )}
              href={item.disabled ? '#' : item.href}
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
