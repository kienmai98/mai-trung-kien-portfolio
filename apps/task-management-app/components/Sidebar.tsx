'use client';

import { Icon } from 'libs/uikit/src/index';
import { sidebarConfig } from '../config/sidebar';
import Image from 'next/image';
import { twMerge } from 'libs/uikit/src/index';
import { useRouter } from 'next/navigation';

import LoadingIcon from '@/task-management-app/assets/svgs/loading.svg';

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-6 py-5 gap-y-10">
      {/* Place logo here */}
      <Image src={LoadingIcon} alt={'loading'} width={28} height={28} />

      <div className="grid grid-cols-1 gap-y-10">
        {sidebarConfig.sidebar.map((item) => {
          return (
            <div
              key={item.title}
              className={twMerge(
                'flex items-center gap-x-2 cursor-pointer',
                item.disabled && 'opacity-40 cursor-not-allowed'
              )}
              onClick={() => !item.disabled && router.push(item.href)}
            >
              <Icon icon={item.icon || ''} width={24} />
              {/* <span className="font-semibold">{item.title}</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
