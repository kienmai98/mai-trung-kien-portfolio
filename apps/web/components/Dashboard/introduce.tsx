'use client';

import Link from 'next/link';
import { frameworkConfig } from '@/web/config/framework';
import { Icon } from '@uikit';

export function Introduce() {
  return (
    <div className="my-36">
      <div className="flex w-full flex-col items-center space-y-12 text-center">
        <div>
          <h1 className="mx-auto w-fit rounded-xl bg-yellow-300/90 px-6 text-6xl font-medium leading-relaxed tracking-wide">
            Hi, I&apos;m Kien
          </h1>
          <h2 className="w-fit rounded-xl px-6 text-6xl font-medium leading-tight tracking-wide">
            a web developer with
          </h2>
        </div>

        <h3 className="max-w-7xl text-xl leading-relaxed tracking-wide text-zinc-700">
          Over 1 year of experience specializing in NextS - Reacts - VueJs, a
          strong understanding of GraphQL - Tailwindcss - Ant Design, and a
          passion for solving complex problems and working on innovative
          projects.
        </h3>
        <div className="flex h-28 w-full items-center justify-evenly rounded-xl bg-white shadow-sm">
          {frameworkConfig.map((framework) => (
            <Link
              className="flex items-center justify-center gap-x-3 capitalize"
              href={framework.href}
              key={framework.name}
              target="_blank"
            >
              <Icon height={42} icon={framework.icon} width={42} />
              <p className="text-xl font-medium tracking-wide">
                {framework.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
