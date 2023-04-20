'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/web/config/site';
import { type MainNavItem } from '@/web/types';
import { Icon } from 'libs/uikit/src/index';

interface MainNavProps {
  items?: MainNavItem[];
  externalItems?: MainNavItem[];
}

export function MainNav({ items, externalItems }: MainNavProps) {
  return (
    <div className="flex gap-x-20 h-16 items-center justify-between p-4">
      <Link className="flex items-center gap-x-2" href="/">
        <span className="font-bold text-xl">{siteConfig.name}</span>
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

      {externalItems?.length && (
        <nav className="flex gap-x-4">
          {externalItems.map((item, index) => (
            <Link
              className={twMerge(
                'flex text-black sm:text-sm',
                item.disabled && 'cursor-not-allowed opacity-40'
              )}
              href={item.disabled ? '#' : item.href}
              key={index}
            >
              <Icon
                width={22}
                height={22}
                icon={item.icon || ''}
                className="hover:text-primary-500 transition-colors duration-300"
              />
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
