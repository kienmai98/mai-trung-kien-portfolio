import type { SidebarConfig } from '@/task-management-app/types';

export const sidebarConfig: SidebarConfig = {
  sidebar: [
    {
      disabled: false,
      href: '/',
      icon: 'material-symbols:dashboard-outline-rounded',
      title: 'Dashboard',
    },
    {
      disabled: true,
      href: '',
      icon: 'bi:activity',
      title: 'Activity',
    },
    {
      disabled: true,
      href: '',
      icon: 'iconoir:calendar',
      title: 'Calendar',
    },
    {
      disabled: true,
      href: '',
      icon: 'prime:user',
      title: 'User Information',
    },
  ],
};
